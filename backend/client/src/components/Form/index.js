import React from "react";
import './style.css';
import { Link } from "react-router-dom";


export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

//THANKS TO W3 School for this wonderful setup!

export function SignUpForm() {
    return (
      <form action="action_page.php">
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required />

          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" id="username" required />

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
          <hr />

          <button type="submit" className="registerbtn">Register</button>
        </div>
        <div className="container signin">
          <p>Already have an account? <Link to={"/login"}>Sign in</Link>.</p>
        </div>
      </form>
    )
}

