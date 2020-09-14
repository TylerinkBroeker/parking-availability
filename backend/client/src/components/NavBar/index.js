import React from "react";
import { Link, useLocation } from "react-router-dom";

/*
This will probs be a combo of Header and NavBar for the app,
for Login/Signup it will just say something like Enter your Username and Password,
For Users and Managers, it will make a GET request to show The user's name and eventually
It will ideally be a way to navigate to different pages and features available to that user
*/

export function ManagerNavBar() {
  const location = useLocation();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/managerhome" className={location.pathname === "/managerhome" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/account/:mId"
          className={location.pathname === "/account/:mId" ? "nav-link active" : "nav-link"}
        >
          Account
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/creategarage"
          className={location.pathname === "/creategarage" ? "nav-link active" : "nav-link"}
        >
          Create a New Garage
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className={"nav-link"}>
          Log Out
        </Link>
      </li>
    </ul>
  );
}

export function UserNavBar() {
  const location = useLocation();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/userhome/:uId" className={location.pathname === "/userhome/:uId" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/account/:uId"
          className={location.pathname === "/account/:uId" ? "nav-link active" : "nav-link"}
        >
          Account
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/search"
          className={location.pathname === "/search" ? "nav-link active" : "nav-link"}
        >
          Search Garages
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className={"nav-link"}>
          Log Out
        </Link>
      </li>
    </ul>
  );
}









// export function ManagerNavBar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//     <a className="navbar-brand" href="/">
//       Navigation (More to come)
//     </a>
//     <button>Home</button>
//     <button>Account</button>
//     <button>Create Garage</button>
//     <button>Logout</button>
    
//   </nav>
//   )
// }


// export function UserNavBar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//         Navigation (More to come)
//       </a>
//       <button>Home</button>
//       <button>Account</button>
//       <button>Search Garages</button>
//       <button>Logout</button>
      
//     </nav>
//   );
// }

