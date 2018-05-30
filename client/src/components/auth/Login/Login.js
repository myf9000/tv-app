import React, { Component } from "react";
import logo from "../../../images/television.svg";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <form className="auth-form login-form" action="/" method="POST">
          <h1>Sign in</h1>
          <div className="auth-brand">
            <img className="auth-logo" src={logo} alt="tv app logo" />
            <h2>to TV App</h2>
          </div>
          <div className="auth-inputs">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button className="auth-button">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Login;
