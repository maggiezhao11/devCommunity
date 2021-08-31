import React, { useState } from 'react';
import Devcommunity from '../apis/Devcommunity';


const FilterButton = (props) => {
  const {filter, setFilter} = props;
  const [option, setOption] = useState(filter || "")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFilter(option)
  }
  const handleChange = (e) => {
  
    setOption(e.target.value);

}

  return (
    <div key="event.id">
      <h1 className="font-weight-light display-1 text-center">Events</h1>
      <div className="col">
        <h4>Filter: </h4>
        <form>
          <select className="custom-select my-1 mr-sm-2" onChange={handleChange}>
            <option disabled>Topic</option>
            <option value="technology">Technology</option>
            <option value="travel & outdoor">Travel & Outdoor</option>
            <option value="parents & family">Parents & Family</option>
            <option value="dancing">Dancing</option>
            <option value="music">Music</option>
          </select>
          <button onClick={handleSubmit} type="submit" className="btn btn-primary">Search</button>
        </form>

      </div>
    </div>
  )
}

export default FilterButton;