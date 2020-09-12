import React from 'react';
import SignUpForm from '../components/Form';
//import { Input, FormBtn } from '../components/Form';
//import { Link } from "react-router-dom";

// function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.uName && formObject.uPswd && formObject.email) {
//       API.saveNewUser({
//         uName: formObject.uName,
//         uPswd: formObject.uPswd,
//         email: formObject.email
//       })
//         .then(res => go to login page())
//         .catch(err => console.log(err));
//     }
//   };


function SignUp() {
    return (
        <SignUpForm />
    )
}

export default SignUp;


        // <div>
        //     <h1>Fill out form to sign up!</h1>
        //     <div>
        //         <Input 
        //         name="title"
        //         placeholder="Title (required)"
        //         />
        //         <FormBtn>
        //             Create Account!
        //         </FormBtn>
        //     </div>

        // </div>

        {/* <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              /> */}