import React, { useState, useEffect } from 'react';
import Devcommunity from '../apis/Devcommunity';
import "./updateEventList.scss"

function UpcomingEventsList(props) {
  
  const {upcoming, setUpcoming} = props;
  //const {upcoming} = props;
  


  return (
    <div className="container">
      <h1>Upcoming Events </h1>
      <div className="list-group">
        <table className="table">
          <thead>
            <tr>
             
              <th scope="col" >Date</th>
              <th scope="col" >Name</th>
              
            </tr>
          </thead>
          <tbody>

            {upcoming.map(elem => (
              <tr key={elem.id}>
                
                <td >
                  {elem.date}
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
