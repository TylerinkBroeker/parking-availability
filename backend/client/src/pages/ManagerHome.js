import React, { useState, useEffect } from 'react';
import GarageGraphic from '../components/GarageGraphic';
import { List, ListItem } from '../components/List';
import { ManagerNavBar } from '../components/NavBar';
import API from '../utils/API';
import '../style/style.css';


function ManagerHome() {
    const [garages, setGarages] = useState([])

    useEffect(() => {
        loadGarages()
    }, [])

    function loadGarages() {
        API.getLotByManagerId()
            .then(res =>
                setGarages(res.data)
            )
            .catch(err => console.log(err));
    };

    function selectGarage(selection) {
        console.log("click!" + selection)
        //Will pull garage's info and render it on right
        //will pull all spaces in garage and render them as color coded to available/not
    }

    return (
        <div>
            <ManagerNavBar />
            <h1 style={{paddingTop: "50px"}}>Welcome Manager's Name!</h1>
            <hr />
            <div className="container col-sm-5" style={{float: "left"}}>
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
            <div className="container col-sm-5" style={{float: "right"}}>
                <h2>Current Selected Garage Graphic:</h2>
                <GarageGraphic />
            </div>
        </div>
    )
}

export default ManagerHome;