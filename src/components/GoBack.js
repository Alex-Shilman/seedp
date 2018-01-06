import React from 'react';
import './GoBack.css';

export default ({width, height, onClick}) => (
  <button
    className="goBack arrow left"
    onClick={onClick}>
    <svg width={width} height={height} viewBox="0 0 50 80">
      <polyline fill="none" stroke="#444c4c" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
    </svg>
  </button>
)