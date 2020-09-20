import React, { useState, useEffect } from 'react';
import { ParkingGarage, ParkingSpace } from '../components/GarageGraphic';
import { List, ListItem } from '../components/List';
import { ManagerNavBar } from '../components/NavBar';
import API from '../utils/API';
import '../style/style.css';

function ManagerHome() {

    const managerId = 1; //TAKE THIS OUT WHEN YOU GET AUTHENTICATION IN!!!

    const [garages, setGarages] = useState([])
    const [spaces, setSpaces] = useState([])
    const [currentGarage, setCurrentGarage] = useState()

    useEffect(() => {
        loadGarages()
    }, [])

    useEffect(() => {
        loadSpaces()
    }, [])

    // useEffect(() => {
    //     loadCurrentGarage()
    // })

    function loadGarages() {
        API.getLotByManagerId(managerId)
            .then(res =>
                setGarages(res.data)
            )
            .catch(err => console.log(err));
    };

    function loadSpaces(id) {
        API.getParkingSpacesByLotId(id)
            .then(res =>
                setSpaces(res.data)
            )
            .catch(err => console.log(err));
    };

    function selectGarage(selection) {
        setCurrentGarage(selection)
        loadSpaces(selection)
        console.log(currentGarage)
    }

    function createGarageSpots() {
        if(!currentGarage){
            alert("Please select a garage to create spaces.")
        } else{
        for(let i=0;i<6;i++) {
            API.createParkingSpace({  
            parkingspacenumber: i + 1,
            isAvailable: true,
            ParkinglotId: currentGarage,
            UserId: ""
          })
        }  
    }
          console.log("API call just ran")
      }

    
    
    return (
        <div>
            <ManagerNavBar />
            <h1 style={{ paddingTop: "50px" }}>Welcome Manager's Name!</h1>
            <hr />
            <div className="container col-sm-5" style={{ float: "left" }}>
                <h2>Your Garages</h2>
                {garages.length ? (
                    <List>
                        {garages.map(garage => (
                            <ListItem key={garage.id}>
                                <div onClick={() => selectGarage(garage.id)}>
                                    Garage at {garage.street} street
                                </div>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </div>
            <div className="container col-sm-6" style={{ float: "right" }}>
                <h2>Current Selected Garage Graphic:</h2>
                {spaces.length ? (
                    <ParkingGarage>
                        {spaces.map(space => (
                            <ParkingSpace key={space.id}>
                                {space.isAvailable}
                            </ParkingSpace>
                        ))}
                    </ParkingGarage>
                ) : (
                        <div>
                            <h3>No Results to Display</h3>
                            <p>Select a garage from the list</p>
                            <h4>OR</h4>
                            <p>Click to generate the parking spaces for selected garage</p>
                            <button className="btn btn-success" 
                            onClick={createGarageSpots}>
                                Generate Parking Spaces
                            </button>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default ManagerHome;