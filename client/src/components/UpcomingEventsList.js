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
      
        
      <div className="list-group">
        <table className="table table-custom-color">
          <thead >
            <tr className="upcoming-tr">
              
               
                <th scope="col" className="second-th"><EventIcon className="eventIcon" fontSize="large" /><span className="upcoming-span">Upcoming Events</span></th>
                <th scope="col" width="20%" ></th>
              
              
              
            </tr>
          </thead>
          <tbody className="upcoming-tbody">

            {upcoming.map(elem => (
              <tr key={elem.id}>

                <td >
                  <div className="upcoming-name">
                     {elem.name}
                  </div>
                  
                </td>
                
                <td >
                  <div className="upcoming-date">
                    <div className="event-day">
                      {moment(elem.date).format("D")}
                    </div>
                    <div className="event-month">
                      {moment(elem.date).format("MMM")}
                    </div>
                  </div>
                  
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
