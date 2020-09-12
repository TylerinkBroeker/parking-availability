import React, { useState, useEffect } from "react";
import SpotController from '../components/SpotController';
// import GarageList from '../components/GarageList';
import { List, ListItem } from "../components/ParkingSpaceList";
import LogOut from '../components/LogOut/LogOut.js';
import API from "../utils/API";



/**************COMPONENTS******************/
//NavBar at top (No current function)
//Welcome Field
//GarageList on left sidebar type thing takes up half of page
//SpotController on right as main field type thing takes up half of page



function UserHome(props) {
    const [spaces, setSpaces] = useState([])
    const [formObject, setFormObject] = useState({})

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



    return (
        <div>
            <h1>Welcome {props.firstname} {props.lastname}</h1>
            <LogOut />
            <div className="container space-list-container" style={{ float: "left" }}>
                <h2>Your Spots</h2>
                {spaces.length ? (
              <List>
                {spaces.map(space => (
                  <ListItem key={space._id}>
                    Parking Space
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </div>
            <div className="container spot-controller-container" style={{ float: "right" }}>
                <h2>Your parking spot</h2>
                <SpotController />
            </div>
        </div>
    )
}

export default UserHome;