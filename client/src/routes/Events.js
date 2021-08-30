import React from 'react';
import EventsList from "../components/EventsList";
import FilterButton from '../components/FilterButton';

const Events = () => {
  return (
    <div>
      <FilterButton />
      <EventsList/>
    </div>
  )
}

export default Events;