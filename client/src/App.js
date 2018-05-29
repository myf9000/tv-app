import React, { Component } from "react";
import Navbar from './components/layout/Navbar/Navbar';
import Landing from './components/layout/Landing/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
      </div>
    );
  }
}

export default App;
