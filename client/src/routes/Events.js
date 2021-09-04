import React from 'react';
import EventsList from "../components/EventsList";
import FilterButton from '../components/FilterButton';

const Events = (props) => {
  
  const {events, setEvents, setUpcoming, filter, upcoming, setFilter} = props;
  return (
    <div className="middle-container">
      <FilterButton filter={filter} setFilter={setFilter} headerName="Events"/>
      <EventsList filter={filter} events={events} setEvents={setEvents} setUpcoming={setUpcoming} upcoming={upcoming}/>
    </div>
  )
}

export default Events;