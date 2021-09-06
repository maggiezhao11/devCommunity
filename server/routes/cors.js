// const express = require('express');
// const router  = express.Router();

// module.exports = () => {
//   router.get("/cors?latitude=blah&longitude=blah", (req, res) => {



//   });


//   const getWeatherByLocation = (position) => {
//     console.log("line69 position", position);
//     const latitude = position.latitude;
//     const longitude = position.longitude;
  
//     axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=863e83d14307a779468265863efa8899`)
//     .then(res => { 
//        setWeather(res.data)
//        console.log("line74 weather data:", res.data);  
//       //  return res.data
//     });
  
//   };


//   return router;
// }