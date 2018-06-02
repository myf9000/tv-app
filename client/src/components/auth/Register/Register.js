import React, { Component } from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUserRequest } from '../../../actions/authActions';
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
  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors })
    }
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
    this.props.registerUser(newUser, this.props.history);
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
              {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
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
              {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
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
              {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
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
              {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
            </div>
          </div>
          <button type="submit" className="auth-button register-button">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

const mapDispatchToProps = {
  registerUser: registerUserRequest
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
