
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Groups from "./routes/Groups";
import Events from "./routes/Events";
import Friends from './components/Friends';
import Posts from './components/Posts';
import Login from './components/Login';


function App() {

const [user, setUser] = useState(null);

useEffect(() => {

  axios.post('http://localhost:3002/login', {email: 'eliza.wong@gmail.com'})   
    .then(res => { 
       setUser(res.data)
       console.log("line30:", res.data);  
       return res.data.id 
    });
}, []);





  return (
    <div className="App">
      <Router>
    
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

            <Route exact path="/groups" component={Groups} />

            <Route exact path="/events" component={Events} />

            <Route path="/friends">
              <Friends user={user}/>
            </Route>

          </Switch>
      </Router>
    </div>
   
  );
}

export default App;