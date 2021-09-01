import React, { useState } from 'react';
import EventsList from "../components/EventsList";
import FilterButton from '../components/FilterButton';

const Events = (props) => {
  
  const {events, setEvents, setUpcoming, filter, upcoming, setFilter} = props;
  return (
    <div>
      <FilterButton filter={filter} setFilter={setFilter}/>
      <EventsList filter={filter} events={events} setEvents={setEvents} setUpcoming={setUpcoming} upcoming={upcoming}/>
    </div>
  )
}

export default Events;