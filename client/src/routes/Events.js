import React, { useState } from 'react';
import EventsList from "../components/EventsList";
import FilterButton from '../components/FilterButton';

const Events = () => {
  const [filter, setFilter] = useState("");
  return (
    <div>
      <FilterButton filter={filter} setFilter={setFilter}/>
      <EventsList filter={filter}/>
    </div>
  )
}

export default Events;