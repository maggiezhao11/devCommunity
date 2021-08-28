import React from "react";
import "components/SidebarItem.scss";

export default function InterviewerListItem(props) {
  const { title, icon, link} = props;

  return (
    <li className="row" > 
        <Link to ={link}>
          <div id="title">{title}</div>
        </Link>
        <div id='icon'>{icon}</div> 
    </li>
  );
}
