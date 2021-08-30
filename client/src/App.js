
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Groups from "./routes/Groups";
import GroupsFilter from "./routes/GroupsFilter";
import Events from "./routes/Events";
import EventsFilter from "./routes/EventsFilter";

function App() {

useEffect(() => {
  axios.get('http://localhost:3002/posts/user/2')
  .then(res => {
    console.log("It is working");
    console.log(res);
  });
}, []);

  return (
    <div className="container">
      
      <Router>
        <Switch>
          <Route exact path="/groups" component ={Groups}/>
          <Route exact path="/groups/filter" component ={GroupsFilter}/>
          <Route exact path="/events" component ={Events}/>
          <Route exact path="/events/filter" component ={EventsFilter}/>
        </Switch>
      </Router>
        
        
    </div>
  );
}

export default App;
