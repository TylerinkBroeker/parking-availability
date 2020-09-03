import React from 'react';
import { UserBtn, ManagerBtn, SignUpBtn } from '../components/LoginBtn';
import UserField from '../components/LoginField';
import { Link } from "react-router-dom";


function Login() {
    return (
        <div>
            <UserField />

            <Link to={"/managerhome"}>
                <ManagerBtn />
            </Link>
            <Link to={"/userhome"}>
                <UserBtn />
            </Link>
            
        </div>
    )
}

export default Login