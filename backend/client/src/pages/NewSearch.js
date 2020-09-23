import React, { useState, useEffect } from 'react';
import { ParkingGarage, ParkingSpace } from '../components/GarageGraphic';
import { List, ListItem } from '../components/List';
import { UserNavBar } from '../components/NavBar';
import { Input, FormBtn } from '../components/Form';
import API from '../utils/API';
import '../style/style.css';



function NewSearch() {
    const [garages, setGarages] = useState([])
    const [spaces, setSpaces] = useState([])
    const [currentGarage, setCurrentGarage] = useState()
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadGarages()
    }, [])

    useEffect(() => {
        loadSpaces()
    }, [])

    // useEffect(() => {
    //     loadCurrentGarage()
    // })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function loadGarages() {
        API.getAllParkingLots()
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

    function handleFormSubmit(event) {
        event.preventDefault();
          API.getByPostalCode(formObject.postalcode)
          .then(
              res =>
            setGarages(res.data)
        )
      };



    return (
        <div>
            <UserNavBar />
            <h1 style={{ paddingTop: "50px" }}>Search Garages!</h1>
            <hr />

        <div className="container">
        <label htmlFor="postalcode"><b>Postal Code</b></label>
        <Input
                onChange={handleInputChange}
                name="postalcode"
                placeholder="Search by Postal Code"
              />
            <FormBtn
                disabled={!(formObject.postalcode)}
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>
            </div>

            <div className="container col-sm-5" style={{ float: "left" }}>
                <h2>Results</h2>
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
                        </div>
                    )}
            </div>
    
        </div>
    )
}

export default NewSearch;