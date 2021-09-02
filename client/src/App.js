
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Groups from "./routes/Groups";
import Events from "./routes/Events";
import Friends from './components/Friends';
import Posts from './components/Posts';
import Login from './components/Login';
import UpcomingEvents from './routes/UpcomingEvents';
import UpcomingEventsList from './components/UpcomingEventsList';
import Devcommunity from './apis/Devcommunity';


function App() {

const [user, setUser] = useState(null);
const [events, setEvents] = useState([]);
const [upcoming, setUpcoming] = useState([]);
const [filter, setFilter] = useState("");


useEffect(() => {

  axios.post('http://localhost:3002/login', {email: 'eliza.wong@gmail.com'})   
    .then(res => { 
       setUser(res.data)
       console.log("line30:", res.data);  
       return res.data.id 
    });
}, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      let response
      if (filter) {
        response = await Devcommunity.post("/events/filter", { topic: filter });
      } else {
        response = await Devcommunity.get("/events");
      }
      
      setEvents(response.data);

    } catch (err) {
      
    }
  }
  fetchData();
}, [filter])

useEffect(() => {
  const fetchData = async () => {
    try {
      
      const response = await Devcommunity.get("/events/upcoming");
      
      setUpcoming(prev => {
        
        return response.data;
      });


      } catch(err){
        
      }

  }
  fetchData();

}, []);




  return (
    <div className="App">
      
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/events/upcoming">Upcoming</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          
        </ul>
      </div>
          <Switch>
            <Route exact path="/">
            <Welcome />
            </Route>

            <Route exact path="/login">
            <Login />
            </Route>

            <Route path="/home">
              <Home />
              <Posts user={user} />
              {/* //loading information */}
            </Route>

            <Route exact path="/groups">
              <Groups/>
            </Route>

            <Route exact path="/events">
              <Events events={events} setEvents={setEvents} upcoming={upcoming} setUpcoming={setUpcoming} filter={filter} setFilter={setFilter}/>
            </Route>
            <Route exact path="/events/upcoming">
              <UpcomingEvents upcoming={upcoming} setUpcoming={setUpcoming}/>
            </Route>

            <Route path="/friends">
              <Friends user={user}/>
            </Route>

          </Switch>
      </Router>
    </div>
   
  );
}

export default App;