import React, { Component } from 'react';

class DPNode extends Component {
  _handleClick = () => {
    alert('Yo, what up!');
  }

  render() {
    return (
      <div className="DPNode">
        <input type="image" src={this.props.svg} onClick={this.props.onDrillDown} width="140" height="150" />
        <p className="App-intro">{this.props.name}</p>
      </div>
    );
  }
}

export default DPNode;
