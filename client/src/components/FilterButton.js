import React from 'react';

const FilterButton = () => {
  return (
    <>
      <h1 className="font-weight-light display-1 text-center">Events</h1>
      <div className="col">
        <h4>Filter: </h4>
        <select className="custom-select my-1 mr-sm-2">
          <option disabled placeholder="Category">Category</option>
          <option value="technology">Technology</option>
          <option value="travel & outdoor">Travel & Outdoor</option>
          <option value="parents & family">Parents & Family</option>
          <option value="dancing">Dancing</option>
          <option value="music">Dancing</option>
        </select>
        <button className="btn btn-primary">Search</button>
      </div>
  </>  
  )
}

export default FilterButton;