import React, { useState, useEffect } from 'react';
import { ParkingGarage, ParkingSpace } from '../components/GarageGraphic';
import { List, ListItem } from '../components/List';
import { ManagerNavBar } from '../components/NavBar';
import API from '../utils/API';
import '../style/style.css';

const styles = {
    available: {
      background: "green"
    },
    notAvailable: {
      background: "red"
    }
  }

function ManagerHome() {
    const [garages, setGarages] = useState([])
    const [spaces, setSpaces] = useState([])

    useEffect(() => {
        loadGarages()
    }, [])

    useEffect(() => {
        loadSpaces()
    }, [])

    function loadGarages() {
        API.getLotByManagerId()
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
        loadSpaces(selection)
        
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
                            <ListItem key={garage._id}>
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
                            <ParkingSpace key={space._id}>
                                {space.isAvailable}
                            </ParkingSpace>
                        ))}
                    </ParkingGarage>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </div>
        </div>
    )
}

export default ManagerHome;