import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";
import logo from "../../../images/television.svg";
import "./Register.css";
import "../auth-common.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    axios
      .post("/api/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => {
        this.setState({ errors: err.response.data });
        console.log(this.state.errors);
      });
  };
  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <form className="auth-form register-form" onSubmit={this.onSubmit}>
          <h1>Sign up</h1>
          <div className="auth-brand">
            <img className="auth-logo" src={logo} alt="tv app logo" />
            <h2>to TV App</h2>
          </div>
          <div className="inputs-container">
            <div className="input-wrapper">
              <input
                className={classnames("auth-input form-control", {
                  "is-invalid": errors.name
                })}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.onChange}
              />
              {errors.name && <div class="invalid-feedback">{errors.name}</div>}
            </div>
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
              {errors.email && <div class="invalid-feedback">{errors.email}</div>}
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
              {errors.password && <div class="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="input-wrapper">
              <input
                className={classnames("auth-input form-control", {
                  "is-invalid": errors.password2
                })}
                type="password"
                id="password2"
                name="password2"
                placeholder="Confirm Password"
                value={this.state.password2}
                onChange={this.onChange}
              />
              {errors.password2 && <div class="invalid-feedback">{errors.password2}</div>}
            </div>
          </div>
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
