import React, { Component } from 'react';

class DPConnector extends Component {
  render() {
    return (
      <div className="DPConnector">
        <img src={this.props.image} alt="" width="80" height="80" />
        <p className="connector-text">{this.props.name}</p>
      </div>
    );
  }
}

export default DPConnector;
