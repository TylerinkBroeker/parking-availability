import React from 'react';
//import React, { btn } from 'react-bootstrap';
import './style.css';


function UserType() {
    return (
        <div>
            <button className="btn btn-primary">User</button>
            <button className="btn btn-primary">Manager</button>
            <button className="btn btn-primary">Sign Up!</button>
        </div>
    )
}

export default UserType;