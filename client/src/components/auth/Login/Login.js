import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUserRequest } from '../../../actions/authActions';
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
  componentDidUpdate(prevProps) {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      this.props.history.push('/dashboard')
    }
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
    this.props.loginUser(user);
  };
  render() {
    const { errors } = this.props;

    return (
      <div className="login">
        <form className="auth-form login-form">
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
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
          </div>
          <button className="auth-button login-button" onClick={this.onSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = {
  loginUser: loginUserRequest
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
