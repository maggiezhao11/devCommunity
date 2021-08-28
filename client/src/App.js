
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

useEffect(() => {
  axios.get('http://localhost:3002/devcommunity')
  .then(res => {
    console.log("It is working");
    console.log(res);
  });
}, []);

  return (
    <div className="App">
      <h1>Dogs</h1>
    </div>
  );
}

export default App;
