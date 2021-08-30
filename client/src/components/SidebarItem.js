import React from "react";
import "./SidebarItem.scss";
import { NavLink } from 'react-router-dom';

export default function SidebarItem(props) {
  const { title, icon, link} = props;

  return (
    <NavLink activeClassName="active" className="sidebar_link" to ={link}>
    <li className="row" > 
        <div id="title">{title}</div>
        <div id='icon'>{icon}</div> 
    </li>
    </NavLink>
  );
}
