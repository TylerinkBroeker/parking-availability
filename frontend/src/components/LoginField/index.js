import React from 'react';
import './style.css';


/***************Components ********************/
//Login Fields for User username and password
export function UserField() {
    return (
        <form action="/action_page.php" method="post">
            <div className="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit">Login</button>
            </div>

            <div className="container">
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot password?</span>
            </div>
        </form>
    )
}
//Login Fields for Manager username and password
//Signup Field
export default UserField;
//Each button uses a different route.