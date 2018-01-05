import React, { Component } from 'react';

class DPNode extends Component {
  render() {
    return (
      <div className="DPNode">
        <input type="image" src={this.props.svg} width="120" height="100" />
        <p className="App-intro">{this.props.name}</p>
      </div>
    );
  }
}

export default DPNode;
