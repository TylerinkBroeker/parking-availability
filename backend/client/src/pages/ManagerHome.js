import React, { useState, useEffect } from 'react';
import { ParkingGarage, ParkingSpace, ParkingSpaceGraphic } from '../components/GarageGraphic';
import { List, ListItem } from '../components/List';
import { ManagerNavBar } from '../components/NavBar';
import API from '../utils/API';
import '../style/style.css';

function ManagerHome() {

    const managerId = 1; //TAKE THIS OUT WHEN YOU GET AUTHENTICATION IN!!!

    const [garages, setGarages] = useState([]);
    const [spaces, setSpaces] = useState([]);
    const [users, setUsers] = useState([]);
    const [currentGarage, setCurrentGarage] = useState();
    const [currentSpace, setCurrentSpace] = useState();
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        loadGarages()
    }, []);

    useEffect(() => {
        loadSpaces()
    }, []);

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

    function loadUsers() {
        API.getAllUsers()
        .then(res =>
            setUsers(res.data))
        .catch(err => console.log(err));   
    };

    function selectGarage(selection) {
        setUsers("")
        setCurrentUser("")
        setCurrentGarage(selection)
        loadSpaces(selection)
        console.log(currentGarage)
    }

    function selectSpace(selection) {
        setUsers("")
        API.getUserById(selection.UserId)
        .then(res =>
            setCurrentUser(res.data))
        API.getParkingSpacesById(selection.id)
        .then(res => 
            setCurrentSpace(res.data)
            )   
    }

    function selectUser(selection) {
        console.log(selection, currentSpace.id)
        API.updateSpaceAvailability({
            UserId: selection.id,
            where: { id: currentSpace.id }
        }, currentSpace.id)
        .then(alert("User Set!"), window.location.reload(false))
    }

    function createGarageSpots() {
        if (!currentGarage) {
            alert("Please select a garage to create spaces.")
        } else {
            for (let i = 0; i < 6; i++) {
                API.createParkingSpace({
                    parkingspacenumber: i + 1,
                    isAvailable: true,
                    ParkinglotId: currentGarage,
                    UserId: ""
                })
            }
        }
    }

    
    return (
        <div>
            <ManagerNavBar />
            <h1 style={{ paddingTop: "50px" }}>Welcome!</h1>
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
                                {space.isAvailable ? (
                                <span 
                                    className="card pk-space bg-success"
                                    onClick={() => selectSpace(space)}
                                >
                                    Parking Space Number {space.parkingspacenumber}
                                </span>
                                ) : (
                                <span 
                                    className="card pk-space bg-danger"
                                    onClick={() => selectSpace(space)}
                                    >
                                    Parking Space Number {space.parkingspacenumber}
                                </span>
                                )}
                                
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

                    {currentSpace ? (
                        <div className="container">
                        <h4>Current Space: {currentSpace.parkingspacenumber}</h4>
                        {currentUser.firstname ? (
                            <div>
                            <h4>Owner Name: {currentUser.firstname} {currentUser.lastname}</h4>
                            <h4>Email: {currentUser.email}</h4>
                            </div>
                        ) : (
                            <div>
                            <h4>No user assigned</h4>
                            <button 
                                onClick={loadUsers}
                                className="btn btn-success"
                                >
                                    Assign a user
                                </button>
                            </div>
                        )}
                        <div>
                        {users.length ? (
                    <List>
                        {users.map(user => (
                            <ListItem key={user.id}>
                                <div onClick={() => selectUser(user)}>
                                    <p>{user.firstname} {user.lastname}</p>
                                    <p>{user.email}</p>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
                        </div>
                        </div>
                    ) : (
                       <h3>Please Select a Space</h3> 
                    )}
                    

            </div>
        </div>
    )
}

export default ManagerHome;