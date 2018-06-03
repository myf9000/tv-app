import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from "../../../images/television.svg";
import "./Landing.css";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <section className="landing">
        <div className="dark-overlay">
          <div className="container landing-wrapper">
            <div className="landing-content text-center">
              <h1 className="display-3 mb-4">TV App</h1>
              <p className="lead">
                {" "}
                Find your favourites tv shows, add them to your collection, rate
                them and share to your friends.
              </p>
              <hr />
              <Link to="/register" className="btn btn-lg btn-info mr-2">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-lg btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Landing);
