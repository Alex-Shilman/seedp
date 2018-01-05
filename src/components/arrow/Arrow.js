import React, { Component } from 'react';
import classNames from 'classnames';
import './arrow.css';

const Arrow = ({rotate}) => (
  <div className={classNames('DPArrow', rotate)}>
    <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.65 10.23">
      <title>Untitled-6</title>
      <line id="head" className="arrow-head" y1="5.22" x2="143.99" y2="5.22" />
      <polyline id="path" className="arrow-line" points="139.18 0.35 143.94 5.12 139.18 9.88" />
    </svg>
  </div>
);

Arrow.defaultProps = { rotate: 'row_col_arrow' };

export default Arrow;
