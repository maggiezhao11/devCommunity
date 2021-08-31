
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Groups from "./routes/Groups";
import Events from "./routes/Events";



function App() {

  return (
   
      <div className="container">

        <Router>
          <Switch>
            <Route exact path="/groups" component={Groups} />
            
            <Route exact path="/events" component={Events} />
            
          </Switch>
        </Router>


      </div>
    

  );
}

export default App;
