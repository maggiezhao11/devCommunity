import "./nav.scss";
import { LocationOn, Chat, Notifications } from "@material-ui/icons";

export default function Nav({user}) {
  return (
    <div className="navContainer">
      <div className="navLeft">
        <span className="logo">DevCommunity</span>
      </div>
      <div className="navCenter">
        {/* <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div> */}
      </div>
      <div className="navRight">
        {/* <div className="navLinks">
          <span className="navLink">Homepage</span>
          <span className="navLink">Timeline</span>
        </div> */}
        <div className="navIcons">
          <div className="navIconItem">
            <LocationOn />
            <span className="navIconBadge">city</span>
          </div>
          <div className="navIconItem">
            <Chat />
            <span className="navIconBadge">weather</span>
          </div>
          <div className="navIconItem">
            <Notifications />
            <span className="navIconBadge">temperature</span>
          </div>
        </div>
        <img src={user.avatar} alt="" className="navImg"/>
      </div>
    </div>
  );
}