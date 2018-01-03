import React, { Component } from 'react';

class DPNode extends Component {
  _handleClick = () => {
    alert('Yo, what up!');
  }

  render() {
    return (
      <div className="DPNode">
        <input type="image" src={this.props.svg} onClick={this.props.onDrillDown} />
      </div>
    );
  }
}

export default DPNode;
