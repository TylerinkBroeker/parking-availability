import React from "react";

/*
This will probs be a combo of Header and NavBar for the app,
for Login/Signup it will just say something like Enter your Username and Password,
For Users and Managers, it will make a GET request to show The user's name and eventually
It will ideally be a way to navigate to different pages and features available to that user
*/

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Navigation (More to come)
      </a>
      
    </nav>
  );
}

export default NavBar;
