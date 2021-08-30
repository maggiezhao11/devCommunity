import React, { useState, useContext, useEffect } from 'react';
import Devcommunity from '../apis/Devcommunity';
import { EventsContext } from '../context/EventsContext';

const EventsList = (props) => {
  const [events, setEvents] = useState([])
  useEffect(async () => {

    try {
      const response = await Devcommunity.get("/events");
      console.log(response.data)
      setEvents(response.data);
      console.log('events------', events)
    } catch (err) {
      console.log('error-----', err)
    }


  }, [])
  // return (

  // <div>
  //   {events.map(elem => (<h1>{elem.description}</h1>))}
  // </div>

  // )
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

            {events.map(elem => (
              <>
                <tr>
                  <td>
                  <img src={elem.photo} className="img-fluid" alt="Responsive image"></img>
                    {elem.name}
                  </td>
                  <td>
                    {elem.description}
                  </td>
                  <td>
                    {elem.date}
                  </td>
                </tr>

              </>
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