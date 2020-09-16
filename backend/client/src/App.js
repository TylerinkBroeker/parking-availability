import React from 'react';
import './App.css';
import Login from './pages/Login';
import ManagerHome from './pages/ManagerHome';
import UserHome from './pages/UserHome';
import SignUp from './pages/SignUp';
import CreateGarage from './pages/CreateGarage';
import Search from './pages/Search';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//~1:30:00 for instructions on this

function App() {
  return (
    <main>
      <Router>
            <Switch>
                <Route path={["/", "/login"]} component={Login} exact />
                <Route path="/signup" component={SignUp} />
                <Route path="/userhome" component={UserHome} />
                <Route path="/managerhome" component={ManagerHome} />
                <Route path="/creategarage" component={CreateGarage} /> may have to be /creategarage/:mId
                <Route path="/search" component={Search} /> 
            </Switch>
        </Router>
      </main>
  );
} 

export default App;

