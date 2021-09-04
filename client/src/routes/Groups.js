import React, { useState } from 'react';
import GroupsList from '../components/GroupsList';
// import GroupsFilter from '../components/GroupsFilter';
import FilterButton from '../components/FilterButton';

const Groups = () => {
  const [filter, setFilter] = useState("");
  return (
    <div className="middle-container">
      {/* <GroupsFilter filter={filter} setFilter={setFilter}/> */}
      <FilterButton filter={filter} setFilter={setFilter} headerName="Groups"/>
      <GroupsList filter={filter}/>
    </div>
  )
}

export default Groups