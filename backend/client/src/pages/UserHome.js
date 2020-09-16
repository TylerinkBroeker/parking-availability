import React, { useState, useEffect } from "react";
import SpotController from '../components/SpotController';
import { UserNavBar } from '../components/NavBar';
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import '../style/style.css';



/**************COMPONENTS******************/
//Parking Space list on left sidebar type thing takes up half of page, each spot can be clicked
//SpotController on right as main field type thing takes up half of page clicked spot controlled here


function UserHome(props) {
  const [spaces, setSpaces] = useState([])
  let selectedSpace = {
    id: "",
    available: true
  }

  useEffect(() => {
    loadSpaces()
  }, [])

  function loadSpaces() {
    API.getParkingSpacesByUserId()
      .then(res =>
        setSpaces(res.data)
      )
      .catch(err => console.log(err));
  };

  // function getSpaceData(id) {
  //  This will be where you can load up parking lot data for the selected space  
  // }

  function selectParkingSpace(selection) {
    console.log("click!")
    selectedSpace = selection;
    //Will pull and display data for selected space's garage
    //Will set toggle switch to selected space id
    console.log(selectedSpace)
  }

  function toggleParkingSpace() {
    console.log("Switch!")
    //API.updateSpaceAvailability()
  }

  return (
    <div>
      <UserNavBar />
      <h1 style={{ paddingTop: "50px" }}>Welcome User's Name!</h1>
      <hr />

      <div className="container col-sm-5" style={{ float: "left" }}>
        <h2>Your Spots</h2>
        {spaces.length ? (
          <List>
            {spaces.map(space => (
              <ListItem key={space._id}>
                <div onClick={() => selectParkingSpace(space.id)}>
                  Parking Space # {space.id}
                </div>
              </ListItem>
            ))}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>

      <div className="container col-sm-5" style={{ float: "right" }}>
        <h2>Your parking spot</h2>
          <div>
            <button onClick={toggleParkingSpace}>Available</button>
            <button onClick={toggleParkingSpace}>Unavailable</button>
          </div>
      </div>
    </div>
  )
}

export default UserHome;


{/* <input type="checkbox" name="name" id="id" onClick={toggleParkingSpace}/> */}
