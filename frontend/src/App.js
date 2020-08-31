import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';
// import ManagerHome from './pages/ManagerHome';
import UserHome from './pages/UserHome';
import SignUp from './pages/SignUp';
// import NavBar from './components/NavBar/index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//~1:30:00 for instructions on this

function App() {
  return (
    <main>
      <Router>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/signup" component={SignUp} />
                <Route path="/userhome" component={UserHome} />
            </Switch>
          </Router>
        </main>
  );
} 

export default App;


{/* <BrowserRouter>
    <div>
      <NavBar>
        <Switch>
          <Route exact path={["/", "/Login"]}>
            <Login />
          </Route>
          <Route path="/Signup">
            <SignUp />
          </Route>
          <Route exact path={[`/Home/Manager`]}>
            <ManagerHome />
          </Route>
          <Route exact path={['/Home/User']}>
            <UserHome />
          </Route>
        </Switch>
      </NavBar>
    </div>
    </BrowserRouter> */}