import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import "./SidebarList.scss";
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home"
  },
  {
    title: "Events",
    icon: <EventIcon />,
    link: "/events"
  },
  {
    title: "Groups",
    icon: <GroupIcon />,
    link: "/groups"
  },
  {
    title: "Friends",
    icon: <SupervisedUserCircleIcon />,
    link: "/friends"
  },

]


function SidebarList() {
  const { path } =useRouteMatch();

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
          <li key={key} className="row" id={ path === val.link ? "active" : ""} > 
            <div id='icon'>{val.icon}</div> 
            <Link to ={val.link}>
              <div id="title">{val.title}</div>
            </Link>

          </li>
          );
        })} 
         <li
              className="row"
              //chat onClick is for later toggle chat popup window
              onClick={()=> {}}
          > 
            <div id='icon'><ChatIcon /></div> <div id="title">Chat</div>
          </li>
      </ul>
    </div>
  );
}

export default SidebarList




// function SidebarList() {

//   return (
//     <div className="Sidebar">
//       <ul className="SidebarList">
//         {SidebarData.map((val, key) => {
//           return (
//           <li key={key} 
//               className="row" 
//               id={window.location.pathname === val.link ? "active" : ""}
//               onClick={()=> {window.location.pathname = val.link}}
//               // onClick={(event) => event.preventDefault() ==> doesn't work
//           > 
//             <div id='icon'>{val.icon}</div> <div id="title">{val.title}</div>
//           </li>
//           );
//         })} 
//          <li
//               className="row"
//               //chat onClick is for 
//               onClick={()=> {}}
//           > 
//             <div id='icon'><ChatIcon /></div> <div id="title">Chat</div>
//           </li>
//       </ul>
//     </div>
//   );
// }

// export default SidebarList

