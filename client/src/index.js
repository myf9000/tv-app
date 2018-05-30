import React from "react";
import ReactDOM from "react-dom";
import App from './App';
// import { Provider } from 'react-redux'
// import configureStore from './store';
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";



ReactDOM.render(
  <App />, 
  document.getElementById("root")
);
registerServiceWorker();
