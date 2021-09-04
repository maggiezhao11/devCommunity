import React, { useState } from 'react';
import './filterButton.scss'



const FilterButton = (props) => {
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
    <div key="event.id" className="filter-button-custom">
      
      
      <div className="event-filter">
        <div >
          <h4>Filter: </h4>
        </div>
   
        <div className="container">
        
          <form className="form">
            <select className="custom-select my-1 mr-sm-2" onChange={handleChange}>
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
        <div>
          <h1 className="font-weight-light text-events">Events</h1>
        </div>
      </div>
    </div>
  )
}

export default FilterButton;