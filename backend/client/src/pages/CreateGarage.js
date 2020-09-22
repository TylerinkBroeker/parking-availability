import React, { useState } from "react";
import { Input, FormBtn } from '../components/Form';
import API from '../utils/API';
import { ManagerNavBar } from '../components/NavBar';
//import { Link } from "react-router-dom";


function GarageForm() {

    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    //Either generate spaces here or add a button click to do it after garage is made, or maybe from managerHome screen.
    // function createGarageSpots(lotId) {
    //   for(let i=0;i<6;i++) {
    //     API.createParkingSpace({
    //       parkingspacenumber: i + 1,
    //       isAvailable: true,
    //       ParkinglotId: lotId,
    //       UserId: ""
    //     })
    //     .then(console.log("New Space Saved"))
    //     .catch(err => console.log(err));
    //   }  
    //     console.log("API call just ran")
    // }


    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.street && formObject.postalcode && formObject.ManagerId) {
          API.saveGarage({
            street: formObject.street,
            postalcode: formObject.postalcode,
            totalspaces: 6,
            ManagerId: formObject.ManagerId
          })
          /*.then(API.getLastLotId() -->get just id number of last lot added
              .then(createGarageSpots(lotId)))*/
            // .then(createGarageSpots(3))
            .then(alert("New Garage Saved. Do not forget to add spots in your home page!"))
            .catch(err => console.log(err));
        }
      };

    return (
      <div>
        <ManagerNavBar />
        <form>
            <div className="container" style={{padding: "50px"}}>
            <label htmlFor="street"><b>Street Name</b></label>
              <Input
                onChange={handleInputChange}
                name="street"
                placeholder="Street Name (required)"
              />
              <label htmlFor="postalcode"><b>Postal Code</b></label>
              <Input
                onChange={handleInputChange}
                name="postalcode"
                placeholder="Postal Code (required)"
              />
              <label htmlFor="spaces"><b>Number of Spaces</b></label>
              <Input 
                onChange={handleInputChange}
                disabled
                name="spaces"
                placeholder="6 (To be implemented)"
              />
              <label htmlFor="ManagerId"><b>Your ID number</b></label>
              <Input
                onChange={handleInputChange}
                name="ManagerId"
                placeholder="Id (required)"
              />
              <FormBtn
                disabled={!(formObject.street && formObject.postalcode && formObject.ManagerId)}
                onClick={handleFormSubmit}
              >
                Submit
              </FormBtn>
              </div>
            </form>
        </div>
    )
}

export default GarageForm;
