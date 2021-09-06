import "./nav.scss";
import { LocationOn, Chat, Notifications } from "@material-ui/icons";

export default function Nav({user, weather, city}) {
  // const weatherDescription = weather.weather[0].main;
  const temperatureC = Math.round(weather.temp);

  console.log("weather from nav line 6:", weather);
  console.log("weather.weather from nav line 6:", weather.weather);
  // console.log("weather.weather[0].main from nav line 6:", weather.weather[0]);


  

  //conditional rendering part of components
  if (!user || !weather || !city) {
    return (
      <div className="navContainer">
        <div className="navLeft">
          <span className="logo">DevCommunity</span>
        </div>
      </div>
    );


  }
  return (
    <div className="navContainer">
      <div className="navLeft">
        <span className="logo">DevCommunity</span>
      </div>
      <div className="navCenter">
        {/* <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div> */}
      </div>
      <div className="navRight">
        {/* <div className="navLinks">
          <span className="navLink">Homepage</span>
          <span className="navLink">Timeline</span>
        </div> */}
        <div className="navIcons">
          <div className="navIconItem">
            <LocationOn />
            <span className="navIconBadge"> {city && `${city}`} </span>
          </div>
          <div className="navIconItem">
            <Chat />
            {weather && weather.weather && weather.weather[0] ?  <span className="navIconBadge">weather: {weather.weather[0].main}  </span>
            : ""}
           
          </div>
          <div className="navIconItem">
            <Notifications />
            <span className="navIconBadge"> {!isNaN(temperatureC) && `${temperatureC} °C`} </span>
          </div>
        </div>
        <img src={user.avatar} alt="" className="navImg"/>
      </div>
    </div>
  );



}