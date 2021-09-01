import React, { useState, useEffect } from 'react';
import Devcommunity from '../apis/Devcommunity';
import axios from 'axios';


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
        <table className="table table-hover table-dark">
          <thead>
            <tr className="bg-primary">
              <th scope="col" >Name</th>
              <th scope="col" >Description</th>
              <th scope="col" >Date</th>
            </tr>
          </thead>
          <tbody>

            {events.map(elem => (

              <tr key={elem.id}>
                <td >
                  <img src={elem.photo} className="img-fluid" alt="Responsive image"></img>
                  {elem.name}
                </td>
                <td >
                  {elem.description}
                </td>
                <td >
                  {elem.date}
                  <br></br>
                  
                  <button onClick={ () => handleJoin(elem)} className="btn btn-primary">{upcoming.filter(singleEvent => singleEvent.id === elem.id).length > 0 ? "Joined" : "Join"}</button>
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