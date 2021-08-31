import React, { useState, useContext } from 'react';
import Devcommunity from '../apis/Devcommunity';
import { EventsContext } from '../context/EventsContext';

const FilterButton = () => {
  
  const [filter, setFilter] = useState("Topic");

  const handleSubmit = async (e) => {
    e.preventDefault()
    //console.log(e.target.value)
    try {
      const response = await Devcommunity.post("/events/filter", {
        topic: filter
      })
      
    } catch (err) {

    }
  }
const handleChange = (e) => {
  console.log(e.target.value)
  setFilter(e.target.value);

}

  return (
    <div key="event.id">
      <h1 className="font-weight-light display-1 text-center">Events</h1>
      <div className="col">
        <h4>Filter: </h4>
        <form>
          <select className="custom-select my-1 mr-sm-2" onChange={handleChange}>
            <option disabled placeholder="Topic">Topic</option>
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