import "./App.scss";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Welcome from "./components/Welcome";
import SidebarList from "./components/SidebarList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Groups from "./routes/Groups";
import Events from "./routes/Events";
import Friends from "./components/Friends";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Chat from "./components/Chat";
import UpcomingEvents from "./routes/UpcomingEvents";
import Devcommunity from "./apis/Devcommunity";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
require('dotenv').config();

const WEATHER_API = process.env.REACT_APP_WEATHER_API_KEY;

//axios call uses ajax. but by default ajax call wont send the cookies session info to browser, then we need to manually add here as another param
axios.defaults.withCredentials = true;
function App() {
  const [user, setUser] = useState({}); //do not set up initial state as NULL because JS cannot read property value with NULL. should either () or ({})
  const [visible, setVisible] = useState(false);
  const [events, setEvents] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [filter, setFilter] = useState("");
  const [position, setPosition] = useState({});
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");

  const toggle = () => {
    setVisible(!visible);
  };

  const userLogin = (email) => {
    // axios.post('http://localhost:3002/login', {email}, {withCredentials: true})
    axios.post("http://localhost:3002/login", { email }).then((res) => {
      setUser(res.data);
      return res.data;
    });
  };

  //need to wrap this function in memory, using useCallback or useMemo
  const getUserGeoLocation = useCallback(
    () => {
      return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
          console.log("geolocation is available");
          navigator.geolocation.getCurrentPosition((position) => {
            // doSomething(position.coords.latitude, position.coords.longitude);
            console.log("line 56 position:", position.coords);
            setPosition(position.coords);
            resolve(position.coords);
            // console.log(position.coords.longitude);
          });
        } else {
          console.log("geolocation is NOT available");
          reject();
        }
      });
    },
    []
  )
  const getCityByLocation = (position) => {
    const latitude = position.latitude;
    const longitude = position.longitude;
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    ).then((data) => {
      data.json().then((bodyData) => {
        console.log("city:", bodyData.city);
        setCity(bodyData.city);
      });
    });

  }


  const getWeatherByLocation = (position) => {
    console.log("line69 position", position);
    const latitude = position.latitude;
    const longitude = position.longitude;

    fetch(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API}&units=metric`
    ).then((data) => {
      data.json().then((bodyData) => {
        console.log("weather:", bodyData.current);
        setWeather(bodyData.current);
      });
    });

  };

  useEffect(() => {
    getUserGeoLocation()
    .then((position) => {
      console.log("line86", position);
      getWeatherByLocation(position);
      getCityByLocation(position);
    })

    //need to remove the dependency as it keeps calling weather api. will put it back before deploy
  }, [getUserGeoLocation]);


  useEffect(() => {
    // axios.post('http://localhost:3002/login', {email: 'eliza.wong@gmail.com'})
    axios.get("/users/").then((res) => {
      setUser(res.data);
      //  console.log("line42 user data:", res.data);
      return res.data;
    });
  }, []);

  // create a page component to display language / sidebar
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (filter) {
          response = await Devcommunity.post("/events/filter", {
            topic: filter,
          });
        } else {
          response = await Devcommunity.get("/events");
        }

        setEvents(response.data);
      } catch (err) {}
    };
    fetchData();
  }, [filter]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Devcommunity.get("/events/upcoming");

        setUpcoming((prev) => {
          return response.data;
        });
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav user={user} weather={weather} city={city}/>
        <div className="appContainer">
          <SidebarList toggle={toggle} />

          <div className="appContainer1">
            <Switch>
              <Route exact path="/">
                <Welcome />
              </Route>

              <Route exact path="/login">
                <Login userLogin={userLogin} />
              </Route>

              <Route path="/home">
                <Home />

                <Posts user={user} />

                {/* //loading information */}
              </Route>

              <Route exact path="/groups">
                <Groups />
              </Route>

              <Route exact path="/events">
                <Events
                  events={events}
                  setEvents={setEvents}
                  upcoming={upcoming}
                  setUpcoming={setUpcoming}
                  filter={filter}
                  setFilter={setFilter}
                />
              </Route>

              <Route path="/friends">
                <Friends user={user} />
              </Route>
            </Switch>
          </div>
          <div className="rightbar-top">
            <UpcomingEvents upcoming={upcoming} setUpcoming={setUpcoming} />

            {visible && <Chat />}
          </div>
        </div>
      </Router>

      <ToastContainer position={"top-center"} />
    </div>
  );
}

export default App;
