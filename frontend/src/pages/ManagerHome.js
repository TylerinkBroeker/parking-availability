import React from 'react';
//import GarageGraphic from '../components/GarageGraphic';
import GarageList from '../components/GarageList';
import LogOut from '../components/LogOut/LogOut.js';
/**************COMPONENTS******************/
//NavBar at top (No current function)
//Welcome Field
//GarageList on left sidebar type thing
//GarageGraphic on right as main field type thing


function ManagerHome() {

    return (
        <div>
            <h1>Welcome Manager's Name!</h1>
            <LogOut />
            <div className="container garage-list-container" style={{float: "left"}}>
                <h2>Your Garages</h2>
                <GarageList />
            </div>
            <div className="container spot-controller-container" style={{float: "right"}}>
                <h2>Current Selected Garage Graphic:</h2>
                {/* Graphic for selected parking garage */}
            </div>
        </div>
    )
}

export default ManagerHome;