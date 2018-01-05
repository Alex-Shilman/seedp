import React, { Component } from 'react';
import arrow from '../assets/ledArrow.gif';

class DPArrow extends Component {
  render() {
    return (
      <div className="DPArrow">
        <img src={arrow} alt="" className={`arrow-style ${this.props.rotate}`} />
      </div>
    );
  }
}

export default DPArrow;
