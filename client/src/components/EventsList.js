import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './eventsList.scss';
import moment from 'moment';


const EventsList = (props) => {
  //const [events, setEvents] = useState([]);
  const { filter, events, setEvents, setUpcoming, upcoming } = props;
  
  

  const handleJoin = (elem) =>{
    //console.log('elem---', elem)
    
    return axios.post("/events/join", {id:elem.id})
    .then(data => {
      setUpcoming(prev => {   
       // console.log('-----', prev)
        const updatedEvents = [data.data[0], ...prev]   //get previous events, then set it to new event (data.data[0])
        return updatedEvents
        
      })
    })
    
  }
  

  return (
    <div className="container event-container">


      <div className="list-group">
        <table className="table table-event table-hover">
          <thead>
            <tr className="group-tr">
              <th scope="col" width="30%"></th>
              <th scope="col" width="60%" ></th>
              <th scope="col" width="10%"></th>
            </tr>
          </thead>
          <tbody>

            {events.map(elem => (

              <tr key={elem.id} className="eventRow">
                <td className="event-img">
                  <img src={elem.photo} className="img-size" alt="Responsive" ></img>
                  <div className="event-name">
                    {elem.name}
                  </div>
                  
                </td>
                <td >
                  <div className="event-description">
                     {elem.description}
                  </div>
                  
                </td>
                <td className="button">
                  <div className="date-event">
                      <div className="date-event-month">
                        {moment(elem.date).format("MMM")}
                      </div>
                      <div className="date-event-day">
                        {moment(elem.date).format("D")}
                      </div>
                  </div>
                  
                  <br></br>
                  
                    <button onClick={ () => handleJoin(elem)} className="btn btn-danger events-button">{upcoming.filter(singleEvent => singleEvent.id === elem.id).length > 0 ? "Joined" : "Join"}</button>
                  
                  
                </td>
              </tr>


            ))}
            <tr>

            </tr>
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default EventsList;