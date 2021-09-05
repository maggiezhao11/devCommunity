import "./nav.scss";
import React from "react";
import { LocationOn, Cloud } from "@material-ui/icons";
import { FaTemperatureHigh } from "react-icons/fa";




export default function Nav({user, weather, city}) {

  const temperatureC = Math.round(weather.temp);

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
            <Cloud />
          {/* the reason why I put weather.weather[0].main here without assigning a variable before hand, is because of async api call data flow. if assign one before, it would cause issue as it would always be undefined. */}
            {weather && weather.weather && weather.weather[0] ?  <span className="navIconBadge">{weather.weather[0].main}  </span>
            : ""}
           
          </div>
          <div className="navIconItem">
            <FaTemperatureHigh />
            <span className="navIconBadge"> {!isNaN(temperatureC) && `${temperatureC} °C`} </span>
          </div>
        </div>
        <span className="navUserName"> Hello, {user.first_name} </span>
        <img src={user.avatar} alt="" className="navImg"/>
      </div>
    </div>
  );



}