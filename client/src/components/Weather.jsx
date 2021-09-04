import React, {useState} from 'react'



export default function Weather() {

  const [state, setState] = useState({
    lat: undefined,
    lon: undefined,  
    city: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
  })


  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });    
  }

  getWeather = async (latitude, longitude) => { 
    const api_call = await fetch(`//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
    const data = await api_call.json();    
    setState({
      lat: latitude,
      lon: longitude,
      city: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
    })
  }


  return (
    <div className="weather-box">
      <div className="weather-item">{city}</div>      
        <div className="weather-item">{temperatureC} &deg;C <span className="slash">/</span> {temperatureF} &deg;F</div>    
          <div>
            <img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon"/>
          </div>    
        <div className="weather-item">
        <span>sunrise: {sunrise}</span>
      </div>
    <div className="weather-item">
    <span>sunset: {sunset}</span>
    </div>
    </div>
  )
}
