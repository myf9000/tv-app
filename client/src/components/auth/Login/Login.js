import React, { Component } from "react";
import classnames from 'classnames';
import axios from 'axios';
import logo from "../../../images/television.svg";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("/api/login", user)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  };
  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <form className="auth-form login-form" onSubmit={this.onSubmit}>
          <h1>Sign in</h1>
          <div className="auth-brand">
            <img className="auth-logo" src={logo} alt="tv app logo" />
            <h2>to TV App</h2>
          </div>
          <div className="inputs-container">
            <div className="input-wrapper">
              <input
                className={classnames("auth-input form-control", {
                  "is-invalid": errors.email
                })}
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                value={this.state.email}
                onChange={this.onChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="input-wrapper">
              <input
                className={classnames("auth-input form-control", {
                  "is-invalid": errors.password
                })}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
          </div>
          <button className="auth-button login-button">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Login;
