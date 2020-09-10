import React from 'react';
import SpotController from '../components/SpotController';
import GarageList from '../components/GarageList';
import LogOut from '../components/LogOut/LogOut.js';



/**************COMPONENTS******************/
//NavBar at top (No current function)
//Welcome Field
//GarageList on left sidebar type thing takes up half of page
//SpotController on right as main field type thing takes up half of page



function UserHome(props) {

    return (
        <div>
            <h1>Welcome {props.UserName}</h1>
            <LogOut />
            <div className="container garage-list-container" style={{float: "left"}}>
                <h2>Your Garages</h2>
                <GarageList />
            </div>
            <div className="container spot-controller-container" style={{float: "right"}}>
                <h2>Your parking spot</h2>
                <SpotController />
            </div>
        </div>
    )
}

export default UserHome;