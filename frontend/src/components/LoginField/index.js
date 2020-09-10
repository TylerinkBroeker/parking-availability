import React from 'react';
import './style.css';
import { Link } from "react-router-dom";


/***************Components ********************/
//Login Fields for User username and password
//Eventually all of this will be gone and all of these components will be from components/Form

export function UserField() {
    return (
        <form action="/api/users" method="post">
            <div className="container">
                <h1>Login</h1>
                <hr />

                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit" className="registerbtn">Login</button>
                <div className="container signin">
                    <p>Don't have an account? <Link to={"/signup"}>Sign up</Link>!</p>
                </div>
            </div>
        </form>
    )
}
//Login Fields for Manager username and password
//Signup Field
export default UserField;
//Each button uses a different route.