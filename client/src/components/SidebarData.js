import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

export const SidebarData = [
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


