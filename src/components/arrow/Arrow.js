import React, { Component } from 'react';
import classNames from 'classnames';
import './arrow.css';

const Arrow = ({rotate}) => (
  <div className={classNames('DPArrow', rotate)}>
    <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.19 37.25">
      <title>Untitled-6</title>
      <line id="line" className="arrow-line" y1="18.21" x2="203.99" y2="18.21" />
      <polyline id="head" className="arrow-head" points="187.9 2.13 203.94 18.1 186.9 35.13" />
    </svg>
  </div>
);

Arrow.defaultProps = { rotate: 'row_col_arrow' };

export default Arrow;
