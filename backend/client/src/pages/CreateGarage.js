import React, { useState, useEffect } from "react";
import { Input, FormBtn } from '../components/Form';
//import API from '../utils/API';
import { Link } from "react-router-dom";


//THANKS TO W3 School for this wonderful setup!
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
                zip: formObject.zip,
                spaces: 6
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
        <form>
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
              </div>
            </form>
    )
}

export default GarageForm;
