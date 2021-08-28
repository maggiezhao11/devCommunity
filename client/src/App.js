
import './App.css';
import React, { useEffect } from 'react';
// import axios from 'axios';
import Welcome from './components/Welcome';
import SidebarList from './components/SidebarList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Groups from './components/Groups';
import Events from './components/Events';
import Friends from './components/Friends';

function App() {

// useEffect(() => {
//   axios.get('http://localhost:3002/devcommunity')
//   .then(res => {
//     console.log("It is working");
//     console.log(res);
//   });
// }, []);


  return (
    <div className="App">
      <Welcome />
      <Router>
        <SidebarList />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/groups">
              <Groups />
            </Route>

            <Route path="/Events">
              <Events/>
            </Route>

            <Route path="/friends">
              <Friends />
            </Route>

            {/* <Route path="*">
              <h2>404 - Not Found</h2>
            </Route> */}
          </Switch>
      </Router>
    </div>
  );
}

export default App;
