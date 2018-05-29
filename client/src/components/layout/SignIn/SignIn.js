import React from 'react';
import logo from './images/television.svg';
import './SignIn.css';

const SignIn = props => (
  <div class="">
    <form class="signin-form"action="/" method="POST">
      <h1>Welcome to</h1>
      <div class="signin-brand">
        <img class="signin-logo" src={logo} alt="tv app logo" />
        <h2>TV APP</h2>
      </div>
      <div class="signin-inputs">
        <input type='email' id='email' name='email' placeholder='E-mail' required/> 
        <input type='password' id='password' name='password' placeholder='Password' required/>
      </div>
      <button class="signin-button">Sign Up</button>
    </form>
  </div>
);

export default SignIn;