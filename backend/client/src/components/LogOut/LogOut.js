import React from 'react';
import { Link } from 'react-router-dom';


function LogOut() {
    return (
        <Link to={"/login"}>
            <p style={{color: "blue"}}><u>Log out</u></p>
        </Link>
    )
}

export default LogOut
