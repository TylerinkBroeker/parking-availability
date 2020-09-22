import React, { useState } from "react";
import { Input, FormBtn } from '../components/Form';
import API from '../utils/API';
import { Link } from "react-router-dom";

function SignUp() {

    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleUserSubmit(event) {
        event.preventDefault();
        if (formObject.email && formObject.password && formObject.firstname && formObject.lastname) {
            API.createUser({
                firstname: formObject.firstname,
                lastname: formObject.lastname,
                email: formObject.email,
                password: formObject.password
            })
            .then(alert("User Created!"))
        }
    };

    function handleManagerSubmit(event) {
        event.preventDefault();
        if (formObject.email && formObject.password && formObject.firstname && formObject.lastname) {
            API.createManager({
                firstname: formObject.firstname,
                lastname: formObject.lastname,
                email: formObject.email,
                password: formObject.password
            })
            .then(alert("Manager Created!"))
        }
    }

    return (
        <div>
            <form className="user-form">
                <div className="container" style={{ padding: "50px" }}>
                    <h2>Sign Up As A User</h2>
                    <label htmlFor="firstname"><b>First Name</b></label>
                    <Input
                        onChange={handleInputChange}
                        name="firstname"
                        placeholder="First Name"
                    />
                    <label htmlFor="lastname"><b>Last Name</b></label>
                    <Input
                        onChange={handleInputChange}
                        name="lastname"
                        placeholder="Last Name"
                    /> 
                    <label htmlFor="email"><b>Email Address</b></label>
                    <Input
                        onChange={handleInputChange}
                        name="email"
                        placeholder="Email (required)"
                    />
                    <label htmlFor="password"><b>Password</b></label>
                    <Input type="password"
                        onChange={handleInputChange}
                        name="password"
                        placeholder="Password (required)"
                    />
                    <FormBtn
                        disabled={!(formObject.email && formObject.password && formObject.firstname && formObject.lastname)}
                        onClick={handleUserSubmit}
                    >
                        Submit
              </FormBtn>
                </div>
            </form>

            <form className="user-form">
                <div className="container" style={{ padding: "50px" }}>
                    <h2>Sign Up As A Manager</h2>
                    <label htmlFor="firstname"><b>First Name</b></label>
                    <Input
                        onChange={handleInputChange}
                        name="firstname"
                        placeholder="First Name"
                    />
                    <label htmlFor="lastname"><b>Last Name</b></label>
                    <Input
                        onChange={handleInputChange}
                        name="lastname"
                        placeholder="Last Name"
                    /> 
                    <label htmlFor="email"><b>Email Address</b></label>
                    <Input
                        onChange={handleInputChange}
                        name="email"
                        placeholder="Email (required)"
                    />
                    <label htmlFor="password"><b>Password</b></label>
                    <Input type="password"
                        onChange={handleInputChange}
                        name="password"
                        placeholder="Password (required)"
                    />
                    <FormBtn
                        disabled={!(formObject.email && formObject.password && formObject.firstname && formObject.lastname)}
                        onClick={handleManagerSubmit}
                    >
                        Submit
              </FormBtn>
                </div>
            </form>

            <div className="container signin">
                    <p>Already have an account? <Link to={"/login"}>Sign in</Link>!</p>
                </div>
        </div>
    )
}

export default SignUp;