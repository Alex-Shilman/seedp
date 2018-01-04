import React, { Component } from 'react';
import arrow from '../assets/arrow.gif';

class DPArrow extends Component {
  render() {
    return (
      <div className="DPArrow">
        <img src={arrow} width="112" height="38" alt="" className={this.props.rotate} />
      </div>
    );
  }
}

export default DPArrow;
