import React from 'react';
import Button from 'react-bootstrap/Button';


export function UserBtn() {
    return (
        <Button variant="primary">User</Button>
        //either set up sign in form to ping user table || no buttons, only one login form
    )
}

export function ManagerBtn() {

    return (
        <button className="btn btn-primary">Manager</button>
        //either set up sign in form to ping manager table || no buttons, only one login form
    )
}

export function SignUpBtn() {

    return (
        <button className="btn btn-primary">Sign up!</button>
        //This will move to Form folder
    )
}


// function UserType() {
//     return (
//         <div>
//             <button className="btn btn-primary">User</button>
//             <button className="btn btn-primary">Manager</button>
//             <button className="btn btn-primary">Sign Up!</button>
//         </div>
//     )
// }

// export default UserType;