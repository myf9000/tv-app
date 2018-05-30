import React, { Component } from "react";
import logo from "../../../images/television.svg";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    console.log(user);
  }
  render() {
    return (
      <div className="login">
        <form className="auth-form login-form" onSubmit={this.onSubmit}>
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
              value={this.state.email}
              onChange={this.onChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <button className="auth-button">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Login;
