import React, { useState } from 'react';

const GroupsFilter = (props) => {
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
    <div >
      <h1 className="group-title">Groups</h1>
      <div className="container">
        <h5>Filter:</h5>
        <form className="group-form">
          
          <select className="custom-select my-1 mr-sm-1" onChange={handleChange}>
            <option selected>Topic</option>
            <option value="technology">Technology</option>
            <option value="travel & outdoor">Travel & Outdoor</option>
            <option value="parents & family">Parents & Family</option>
            <option value="dancing">Dancing</option>
            <option value="music">Music</option>
          </select>
          <button onClick={handleSubmit} type="submit" className="btn btn-primary margin-search">Search</button>
        </form>

      </div>
    </div>
  )
}

export default GroupsFilter