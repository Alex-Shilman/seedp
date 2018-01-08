import React from 'react';
import logo from '../assets/system-config-services.png';
import { Link } from 'react-router-dom';

export default ({width, height, ...ownProps}) => (
  <Link to="/">
    <div className="logo" {...ownProps}>
      <img src={logo} width={width} height={height} alt="Logo" />{' '}seeDP
    </div>
  </Link>
);