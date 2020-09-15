import React, { useState, useEffect } from "react";
import SpotController from '../components/SpotController';
// import GarageList from '../components/GarageList';
import { UserNavBar } from '../components/NavBar';
import { List, ListItem } from "../components/ParkingSpaceList";
import API from "../utils/API";



/**************COMPONENTS******************/
//Welcome Field
//Parking Space list on left sidebar type thing takes up half of page, each spot can be clicked
//SpotController on right as main field type thing takes up half of page clicked spot controlled here


function UserHome(props) {
    const [spaces, setSpaces] = useState([])
    // const [formObject, setFormObject] = useState({})

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

    function getUserInfo() {
      API.getUserById()
      .then(res => 
        console.log(res.data.firstname))
    }

    getUserInfo();

    return (
        <div>
          <UserNavBar />
            <h1>Welcome {props.firstname} {props.lastname}</h1>
            
            <div className="container col-sm-6" style={{ float: "left" }}>
                <h2>Your Spots</h2>
                {spaces.length ? (
              <List>
                {spaces.map(space => (
                  <ListItem key={space._id}>
                    Parking Space # {space.id}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </div>
            
            <div className="container col-sm-6" style={{ float: "right" }}>
                <h2>Your parking spot</h2>
                <SpotController />
            </div>
        </div>
    )
}

export default UserHome;