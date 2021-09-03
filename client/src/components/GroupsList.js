import React, { useState, useEffect } from 'react';
import Devcommunity from '../apis/Devcommunity';


const GroupsList = (props) => {
  const [groups, setGroups] = useState([]);
  const { filter } = props;
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response
        if (filter) {
          response = await Devcommunity.post("/groups/filter", { topic: filter });
        } else {
          response = await Devcommunity.get("/groups");
        }

        setGroups(response.data);

      } catch (err) {

      }
    }
    fetchData();
  }, [filter])

  return (
    <div>


      <div className="list-group">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="bg-primary">
              <th scope="col" ></th>
              <th scope="col" >Name</th>
              <th scope="col" >Description</th>
              
            </tr>
          </thead>
          <tbody>

            {groups.map(elem => (
              <tr key={elem.id}>
                <td >
                  <img src={elem.photo} className="img-fluid" alt=""></img>
                  
                </td>
                <td >
                  {elem.name}
                </td>
                <td >
                  {elem.description}
                </td>
               
              </tr>

            )

            )}
            <tr>

            </tr>
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default GroupsList