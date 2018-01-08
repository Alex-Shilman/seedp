import React, { Component } from 'react';
import DBIcon from './dbIcon/DBIcon';

class DPDatabase extends Component {
  state = {
    popoverOpen: false
  };

  toggle = () => {
    this.setState(({popoverOpen}) => ({
      popoverOpen: !popoverOpen
    }));
  }

  render() {
    const { name, host } = this.props;
    return (
      <div className="DPDatabase">
        <DBIcon status='healthy' />
        <p className="connector-text">{name}</p>
        <p className="connector-text">{host}</p>
      </div>
    );
  }
}

export default DPDatabase;
