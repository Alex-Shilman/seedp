import React from 'react';
import logo from '../assets/system-config-services.png';

export default ({width, height, ...ownProps}) => (
  <div className="logo" {...ownProps}>
    <img src={logo} width={width} height={height} alt="Logo" />{' '}seeDP
  </div>
);