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

 //axios call uses ajax. but by default ajax call wont send the cookies session info to browser, then we need to manually add here as another param
axios.defaults.withCredentials = true;
function App() {

const [user, setUser] = useState({}); //do not set up initial state as NULL because JS cannot read property value with NULL. should either () or ({})
const [visible, setVisible] = useState(false); 

const toggle = () => {
  setVisible(!visible);
}

const userLogin = (email) => {
 
  // axios.post('http://localhost:3002/login', {email}, {withCredentials: true})  
  axios.post('http://localhost:3002/login', {email})   
    .then(res => { 
       setUser(res.data)
      //  console.log("line30 userlogin data:", res.data);  
       return res.data
    });

}


useEffect(() => {

  // axios.post('http://localhost:3002/login', {email: 'eliza.wong@gmail.com'})   
  axios.get('http://localhost:3002/users')
    .then(res => { 
       setUser(res.data)
      //  console.log("line42 user data:", res.data);  
       return res.data
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
       <Nav user={user}/>
      <div className="appContainer">
      <SidebarList toggle={toggle}/>
      <div className="appContainer1">
      {visible && <Chat />}
          <Switch>
            <Route exact path="/">
            <Welcome />
            </Route>

            <Route exact path="/login">
            <Login userLogin={userLogin}/>
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
