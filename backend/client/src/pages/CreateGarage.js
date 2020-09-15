import React, { useState, useEffect } from "react";
import { Input, FormBtn } from '../components/Form';
//import API from '../utils/API';
import { Link } from "react-router-dom";


//May take manager id as an argument so that can be passed to the handleformsubmit so it can 
//create the garage with the manager's id
function GarageForm() {

    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        
        if (formObject.street && formObject.zip) {
            let garage = {
                street: formObject.street,
                postalcode: formObject.zip,
                totalspaces: 6
                //ManagerId: whatever is passed in
            }
            console.log(garage)
            alert("Garage has been saved!")
            // .then(
            //     <Link to={"/managerhome"} />
            // )
            // .catch(err => console.log(err));
        }

        // if (formObject.title && formObject.author) {
        //   API.saveGarage({
        //     street: formObject.street,
        //     zip: formObject.zip,
        //     spaces: formObject.spaces
        //   })
        //     .then(res => loadBooks())
        //     .catch(err => console.log(err));
        // }
      };

    return (
        <form style={{padding: "50px"}}>
            <h1 style={{textAlign: "center"}}>Create a New Garage!</h1>
            <div className="container">
            <label for="street"><b>Street Name</b></label>
              <Input
                onChange={handleInputChange}
                name="street"
                placeholder="Street Name (required)"
              />
              <label for="zip"><b>Zip Code</b></label>
              <Input
                onChange={handleInputChange}
                name="zip"
                placeholder="Zip Code (required)"
              />
              <label for="spaces"><b>Number of Spaces</b></label>
              <Input
                onChange={handleInputChange}
                disabled
                name="spaces"
                placeholder="6 (To be implemented)"
              />
              <FormBtn
                disabled={!(formObject.street && formObject.zip)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
              <Link to={"/managerhome"}>
              <button className="btn btn-danger">Cancel</button>
              </Link>
              </div>
            </form>
    )
}

export default GarageForm;
