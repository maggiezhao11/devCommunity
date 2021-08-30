import React, { useContext, useEffect } from 'react';
import Devcommunity from '../apis/Devcommunity';
import { EventsContext } from '../context/EventsContext';

const EventsList = (props) => {
  const {events, setEvents} = useContext(EventsContext)
  useEffect(async() => {
    const fetchData = async () => {
      try {
        const response = await Devcommunity.get("/events");
        setEvents(response.data);
      } catch(err) {}
    }
    fetchData();
  }, [])

  return (
    <div>
   
      
      <div className="list-group">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="bg-primary">
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg" class="img-fluid" alt="Responsive image"></img>
                <h3>Kitties Gathering</h3>
              </td>

              <td>Join us for a fun day with kitties from all over ottawa! Meet your new friends and family</td>
              <td>
                2021-10-23
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg" class="img-fluid" alt="Responsive image"></img>
                <h3>Kitties Gathering</h3>
              </td>

              <td>Join us for a fun day with kitties from all over ottawa! Meet your new friends and family</td>
              <td>
                2021-10-23
              </td>
            </tr>
          </tbody>
        </table>
      </div>

     
    </div>
  )
}

export default EventsList;