import React from 'react';
import "./SidebarList.scss";
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SidebarItem from './SidebarItem';

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


function SidebarList({toggle}) {

  const list = SidebarData.map((item, key) => {
    return <SidebarItem
    key={key}
    icon={item.icon}
    title={item.title}
    link={item.link}
    />
  })



  return (
    <div className="Sidebar">
      <ul className="SidebarList">
          {list}
        {/* {SidebarData.map((val, key) => {
          return (
          <NavLink activeClassName="active" className="sidebar_link" to ={val.link}>
          <li key={key} className="row"> 
           <div className='icon'>{val.icon}</div> 
            <div className="title">{val.title}</div> 
          </li>
          </NavLink>
          )
        })}  */}
         <li
              className="row"
              //chat onClick is for later toggle chat popup window
              onClick={()=> toggle()}
          > 
            <div id='icon'><ChatIcon /></div> <div id="title">Live Chat Room</div>
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

