import React, { Component } from "react";
import logo from "../../../images/television.svg";
import "./Register.css";
import "../auth-common.css";

class Register extends Component {
  render() {
    return (
      <div className="register">
        <form className="auth-form register-form" action="/" method="POST">
          <h1>Sign up</h1>
          <div className="auth-brand">
            <img className="auth-logo" src={logo} alt="tv app logo" />
            <h2>to TV App</h2>
          </div>
          <div className="auth-inputs">
            <div className="form-group">
              <input
                type="email"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Register;
