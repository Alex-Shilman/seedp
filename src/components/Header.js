import React from 'react';
import Timer from './Timer';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import signout from '../assets/signout.png';

export default () => (
  <header className="App-header">
    <Logo
      width="40px"
      height="40px"
      style={{position: 'absolute', 'top': -5}}
    />
    <h1 className="App-title">
      NINTENDO DASHBOARD{' '}
      <Timer style={{position: 'absolute', right: 5}}/>
      <Link to="/">
        <img src={signout} alt="sign out" width="32" height="32" />
      </Link>
    </h1>
  </header>
);