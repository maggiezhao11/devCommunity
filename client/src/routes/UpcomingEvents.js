import React, { useState } from 'react';
import UpcomingEventsList from '../components/UpcomingEventsList';

const UpcomingEvents = (props) => {
  const {upcoming, setUpcoming} = props;
  return (
    <div>
      <UpcomingEventsList upcoming={upcoming} setUpcoming={setUpcoming}/>
      {/* upcoming={upcoming} setUpcoming={setUpcoming} */}
      
    </div>
  )
}

export default UpcomingEvents