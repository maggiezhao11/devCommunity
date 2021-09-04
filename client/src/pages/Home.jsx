import Nav from "../components/Nav"
import SidebarList from "../components/SidebarList";
import Posts from "../components/Posts"
import UpcomingEventList from "../components/UpcomingEventsList"
import Chat from "@material-ui/icons/Chat";
import "./home.scss"

export default function Home() {
  return (
    <>
      <Nav />
      <div className="homeContainer">
        <SidebarList />
        <Posts/>
        <UpcomingEventList/>
        <Chat />
      </div>
    </>
  );
}