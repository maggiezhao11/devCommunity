import React, { useState, useEffect } from 'react';
import Devcommunity from '../apis/Devcommunity';
import "./groupsList.scss";



const GroupsList = (props) => {
  const [groups, setGroups] = useState([]);
  
     // const [loading, setLoading] = useState(true);
  
  const { filter } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response
        if (filter && filter !== 'all') {
          response = await Devcommunity.post("/groups/filter", { topic: filter });
        } else {
          response = await Devcommunity.get("/groups");
        }

        setGroups(response.data);
        // setTimeout(()=> {setLoading(false)}, 1000);

      } catch (err) {

      }
    }

    fetchData();
  }, [filter]);



  const handleJoin = function(index) {
    const groupsFromState = groups;
    if (groupsFromState[index].joined) {
      groupsFromState[index].joined = !groupsFromState[index].joined
    } else {
      groupsFromState[index].joined = true;
    }
    setGroups([...groupsFromState]);
  }


  return (
    <div className="container">
      <div className="list-group">
        {/* <div>{!loading ?   */}

        <table className="table table-hover table-group">
          <thead>
            <tr className="group-tr">
              <th scope="col" >Name</th>
              {/* <th scope="col" >Name</th> */}
              <th scope="col" >Description</th>          
            </tr>
          </thead>
          <tbody>

            {groups.map((elem, index) => (
              <tr key={elem.id}>
                <td className="group-img">
                  <img src={elem.photo} className="img-fluid" alt="Responsive"></img>
                  <br></br>
                  <div className="group-name">
                    {elem.name}
                  </div>
                </td>
                {/* <td >
                  
                </td> */}
                <td className="group-description">
                  <div className="group-description-div">
                     {elem.description}
                  </div>
                  
                  
                  <div id="group-button">
                     <button className="btn btn-primary margin-grouplist" onClick={() => handleJoin(index)}>
                       {elem.joined ? 'Joined' : 'Join'}
                     </button>
                  </div>
                   
                  
                  
                </td>
               
              </tr>

            )

            )}
            <tr>

            </tr>
          </tbody>
        </table>
        {/* // : <Loading className="loading" />}</div> */}
      </div>


    </div>
  )
}

export default GroupsList