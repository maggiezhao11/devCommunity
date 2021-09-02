import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './components/Welcome';
import SidebarList from './components/SidebarList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Groups from "./routes/Groups";
import Events from "./routes/Events";
import Friends from './components/Friends';
import Posts from './components/Posts';
import Login from './components/Login';
import Nav from './components/Nav';
import Chat from './components/Chat';


function App() {

const [user, setUser] = useState(null);
const [visible, setVisible] = useState(false); 

const toggle = () => {
  setVisible(!visible);
}

useEffect(() => {

  axios.post('http://localhost:3002/login', {email: 'eliza.wong@gmail.com'})   
    .then(res => { 
       setUser(res.data)
      //  console.log("line30:", res.data);  
       return res.data.id 
    });
}, []);




// create a page component to display language / sidebar

/* <Router>
  <Switch>
    <Route path="/">
        <Page sidebar={false} language={true}> 
            <Welcome/>
        </Page>
    </Route>

    <Route path="/home">
        <Page sidebar={true} language={true}> 
            <Home/>
        </Page>
    </Route>

    ...
  </Switch>
</Router> */

//page.jsx

// const Page = ({ sidebar, children }) => (
//   <>
//     {sidebar && <Sidebar/>} // conditionally render sidebar
//     // same thing for language
//     {children} // this is the actual page
//   </>
// )



  return (
    <div className="App">
  
      <Router>
       <Nav />
      <div className="appContainer">
      <SidebarList toggle={toggle}/>
      <div className="appContainer1">
      {visible && <Chat />}
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
          </div>
        </div>
      </Router>

    </div>
   
  );
}

export default App;
