import React, { Component } from 'react';

class DPNode extends Component {
  render() {
    return (
      <div className="DPNode">
        <img src={this.props.svg} />
      </div>
    );
  }
}

export default DPNode;
