import React,  { useState, useEffect } from 'react';
import { UserNavBar } from '../components/NavBar';
import { List, ListItem } from '../components/List';
import API from '../utils/API';
import Searchbox from '../components/SearchBox';
import Searchbutton from '../components/SearchButton';

function Search() {

    const [garages, setGarages] = useState([])

    useEffect(() => {
        loadGarages()
    }, [])

    function loadGarages() {
        API.getAllParkingLots()
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

    // handleChange = (e) =>{
    //     this.setState({searchField:e.target.value})
    // }

    return (
        <div>
            <UserNavBar />
            <div className="container col-sm-5" style={{float: "left"}}>
                <h2>Garage Search</h2>
                <Searchbox />
                <Searchbutton />
                <hr />
                {garages.length ? (
              <List>
                {garages.map(garage => (
                  <ListItem key={garage._id}>
                      <div onClick={() => selectGarage(garage.id)}>
                      Garage at {garage.postalcode}
                      </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </div>
            {/* <div className="container col-sm-5" style={{float: "right"}}>
                <h2>Current Selected Garage Graphic:</h2>
                <GarageGraphic />
            </div> */}
        </div>
    )
}

export default Search;