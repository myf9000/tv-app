import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import store from './store';

import Navbar from "./components/layout/Navbar/Navbar";
import Landing from "./components/layout/Landing/Landing";
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';

// Check for token
const { jwtToken} = localStorage;
if (jwtToken) {
  setAuthToken(jwtToken);
  const decoded = jwt_decode(jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href('/login');
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <div className="container">
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
