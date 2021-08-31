import React, { useState } from 'react';
import GroupsList from '../components/GroupsList';
import GroupsFilter from '../components/GroupsFilter';

const Groups = () => {
  const [filter, setFilter] = useState("");
  return (
    <div>
      <GroupsFilter filter={filter} setFilter={setFilter}/>
      <GroupsList filter={filter}/>
    </div>
  )
}

export default Groups