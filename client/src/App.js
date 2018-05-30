import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Landing from "./components/layout/Landing/Landing";
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';

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
