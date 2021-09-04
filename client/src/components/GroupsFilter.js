import React, { useState } from 'react';
import './groupsFilter.scss';

const GroupsFilter = (props) => {
  const { filter, setFilter } = props;
  const [option, setOption] = useState(filter || "")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFilter(option)
  }
  const handleChange = (e) => {

    setOption(e.target.value);

  }

  return (
    <div className="group-filter-container">
      <div className="group-filter">
        <div>
          <h4>Filter: </h4>
        </div>

        <div >

          <form className="group-form">

            <select className="custom-select-group" onChange={handleChange}>
              <option selected>Topic</option>
              <option value="all">All</option>
              <option value="technology">Technology</option>
              <option value="travel & outdoor">Travel & Outdoor</option>
              <option value="parents & family">Parents & Family</option>
              <option value="dancing">Dancing</option>
              <option value="music">Music</option>
            </select>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary margin-search">Search</button>
          </form>

        </div>
        <div className="group-title-div">
          <h1 className="font-weight-light group-filter-title">Groups</h1>
        </div>
      </div>
    </div>

  )
}

export default GroupsFilter