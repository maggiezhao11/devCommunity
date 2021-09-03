import React, { useState, useEffect } from 'react';
import Devcommunity from '../apis/Devcommunity';
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
        const updatedEvents = [...prev, data.data[0]]   //get previous events, then set it to new event (data.data[0])
        return updatedEvents
        
      })
    })
    
  }


  return (
    <div className="container">


      <div className="list-group">
        <table className="table table-event table-hover table-dark">
          <thead>
            <tr className="bg-primary">
              <th scope="col" width="30%">Name</th>
              <th scope="col" width="50%" >Description</th>
              <th scope="col" width="10%">Date</th>
            </tr>
          </thead>
          <tbody>

            {events.map(elem => (

              <tr key={elem.id}>
                <td >
                  <img src={elem.photo} className="img-fluid" alt="Responsive image"></img>
                  <div className="event-name">
                    {elem.name}
                  </div>
                  
                </td>
                <td >
                  {elem.description}
                </td>
                <td className="button">
                  {moment(elem.date).format("MMM Do YYYY")}
                  <br></br>
                  
                    <button onClick={ () => handleJoin(elem)} className="btn btn-primary events-button">{upcoming.filter(singleEvent => singleEvent.id === elem.id).length > 0 ? "Joined" : "Join"}</button>
                  
                  
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