import React, { useState, useEffect } from 'react';
import Devcommunity from '../apis/Devcommunity';
import "./updateEventList.scss";
import moment from 'moment';

function UpcomingEventsList(props) {
  
  const {upcoming, setUpcoming} = props;
  //const {upcoming} = props;
  


  return (
    <div className="container">
      <h1>Upcoming Events </h1>
      <div className="list-group">
        <table className="table table-custom-color">
          <thead >
            <tr className="event-name">
             
              <th scope="col" width="20%" >Date</th>
              <th scope="col" >Name</th>
              
            </tr>
          </thead>
          <tbody>

            {upcoming.map(elem => (
              <tr key={elem.id}>
                
                <td className="events-date">
                  {moment(elem.date).format("MMM Do")}
                </td>
                <td >
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
