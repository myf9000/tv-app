import React, { Component } from "react";
import logo from "../../../images/television.svg";
import "./Landing.css";

class Landing extends Component {
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
              <a href="register.html" className="btn btn-lg btn-info mr-2">
                Sign Up
              </a>
              <a href="login.html" className="btn btn-lg btn-light">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
