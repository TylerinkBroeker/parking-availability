import React, { useState, useEffect } from "react";
//import SpotController from '../components/SpotController';
import { UserNavBar } from '../components/NavBar';
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import '../style/style.css';


function UserHome() {
  
  const userId = 1; //TAKE THIS OUT WHEN YOU GET AUTHENTICATION IN!!!

  const [spaces, setSpaces] = useState([])
  const [garage, setGarage] = useState()
  const [currentSpace, setCurrentSpace] = useState()

  useEffect(() => {
    loadSpaces()
  }, [])

  useEffect(() => {
    loadGarage()
  })

  function loadSpaces() {
    API.getParkingSpacesByUserId(userId)
      .then(res =>
        setSpaces(res.data)
      )
      .catch(err => console.log(err));
  };

  function loadGarage(id) {
    API.getParkingLotById(id)
    .then(res => 
      setGarage(res.data)
      )
      .catch(err => console.log(err));
      console.log(garage)
  }

  function selectParkingSpace(selection) {
    console.log("click! ", selection.id)
    API.getParkingSpacesById(selection.id)
    .then(res =>
      setCurrentSpace(res.data),
      loadGarage(selection.ParkinglotId)
    )
    .catch(err => console.log(err));
      console.log(currentSpace)
      
    //selectedSpace = selection;
    //Will pull and display data for selected space's garage
    //Will set toggle switch to selected space id
  }

  function toggleParkingSpace(isAvail) {
    console.log(currentSpace.id)
    API.updateSpaceAvailability({
          isAvailable: isAvail,
          where: { id: currentSpace.id }
      }, currentSpace.id)
      // .then(
      //   loadGarage(garage.id)
      // )
  }

  function checkAvail() {
    console.log("availability: " + currentSpace.isAvailable + " current id: " + currentSpace.id);
    console.log("Current Garage: " + garage.id);
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
              <ListItem key={space.id}>
                <div onClick={() => selectParkingSpace(space)}>
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
        {currentSpace ? (
          <div className={"container"}>
          <h2>Your parking spot at {garage.street}</h2>
          {currentSpace.isAvailable ? (
            <h2>Is currently Available</h2>
          ) : (<h2>Is currently Unavailable</h2>)}
          <div>
            <button className={"btn btn-success"} onClick={() => toggleParkingSpace(true)}>Available</button>
            <button className={"btn btn-danger"} onClick={() => toggleParkingSpace(false)}>Unavailable</button>
            <button className={"btn btn-warning"} onClick={checkAvail}>Check availability</button>
          </div>
          </div>
        ) : (
          <h3>No Results to Display</h3>
        )}
        
      </div>
    </div>
  )
}

export default UserHome;


{/* <input type="checkbox" name="name" id="id" onClick={toggleParkingSpace}/> */}
