import React, { useState, useEffect } from 'react';
import Devcommunity from '../apis/Devcommunity';
import "./updateEventList.scss";
import moment from 'moment';
import EventIcon from '@material-ui/icons/Event';

function UpcomingEventsList(props) {
  
  const {upcoming, setUpcoming} = props;
  //const {upcoming} = props;
  


  return (
    <div className="container">
      <div className="upcoming-container">
        <EventIcon className="eventIcon" fontSize="large" color="primary"/>
        <span className="upcoming-title">Upcoming Events</span>
      </div>
        
      <div className="list-group">
        <table className="table table-custom-color">
          <thead >
            <tr className="event-name">
             
              <th scope="col" width="20%" >Date</th>
              <th scope="col" >Events Name</th>
              
            </tr>
          </thead>
          <tbody>

            {upcoming.map(elem => (
              <tr key={elem.id}>
                
                <td className="events-date">
                  <div className="event-day">
                     {moment(elem.date).format("D")}
                  </div>
                  <div className="event-month">
                    {moment(elem.date).format("MMM")}
                  </div>
                </td>
                <td className="upcoming-name">
                  {elem.name}
                </td>
               
              </tr>
            )

            )}
            {/* <tr>

            </tr> */}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default UpcomingEventsList
