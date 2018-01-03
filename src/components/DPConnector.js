import React, { Component } from 'react';

class DPConnector extends Component {
  render() {
    return (
      <div className="DPConnector">
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default DPConnector;
