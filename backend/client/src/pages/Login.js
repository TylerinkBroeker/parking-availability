import React, { useState, useEffect } from "react";
import { Input, FormBtn } from '../components/Form';
import API from '../utils/API';
import { Link } from "react-router-dom";
import { ManagerBtn, UserBtn } from '../components/LoginBtn';

function Login() {

    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };


    function handleManagerSubmit(event) {
        event.preventDefault();
        if (formObject.email && formObject.password) {
            let manager = {
                email: formObject.email,
                password: formObject.password
            }
            console.log(manager)
        }
    };

    function handleUserSubmit(event) {
        event.preventDefault();
        if (formObject.email && formObject.password) {
            let user = {
                email: formObject.email,
                password: formObject.password
            }
            console.log(user)
        }
    };

    return (
        <div>
            <form className="user-form">
                <div className="container" style={{ padding: "50px" }}>
                    <h2>User Login</h2>
                    <hr />
                    <label for="email"><b>Email Address</b></label>
                    <Input
                        onChange={handleInputChange}
                        name="email"
                        placeholder="Email (required)"
                    />
                    <label for="password"><b>Password</b></label>
                    <Input type="password"
                        onChange={handleInputChange}
                        name="password"
                        placeholder="Password (required)"
                    />
                    <FormBtn
                        disabled={!(formObject.email && formObject.password)}
                        onClick={handleUserSubmit}
                    >
                        Submit
              </FormBtn>
                </div>
            </form>

            <form className="manager-form">
                <div className="container" style={{ padding: "50px" }}>
                    <h2>Manager Login</h2>
                    <hr />
                    <label for="email"><b>Email Address</b></label>
                    <Input
                        onChange={handleInputChange}
                        name="email"
                        placeholder="Email (required)"
                    />
                    <label for="password"><b>Password</b></label>
                    <Input type="password"
                        onChange={handleInputChange}
                        name="password"
                        placeholder="Password (required)"
                    />
                    <FormBtn
                        disabled={!(formObject.email && formObject.password)}
                        onClick={handleManagerSubmit}
                    >
                        Submit
              </FormBtn>
                </div>
            </form>

            <div className="container signin">
                    <p>Don't have an account? <Link to={"/signup"}>Sign up</Link>!</p>
                </div>
            
            <Link to={"/managerhome"}>
                <ManagerBtn />
            </Link>
            <Link to={"/userhome"}>
                <UserBtn />
            </Link>
        </div>
    )
}

export default Login;





// import React from 'react';
// import { UserBtn, ManagerBtn, SignUpBtn } from '../components/LoginBtn';
// import UserField from '../components/LoginField';
// import { Link } from "react-router-dom";
// import '../style/style.css';


// function Login() {


//     return (
// <div>
//     <UserField />

// <Link to={"/managerhome"}>
//     <ManagerBtn />
// </Link>
// <Link to={"/userhome"}>
//     <UserBtn />
// </Link>
// </div>


//     )
// }

// export default Login


// {/* <UserField />

// <Link to={"/managerhome"}>
//     <ManagerBtn />
// </Link>
// <Link to={"/userhome"}>
//     <UserBtn />
// </Link> */}