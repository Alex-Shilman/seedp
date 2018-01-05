import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import dbImage from '../assets/db.svg';

class DPDatabase extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const { name, host } = this.props;
    const buttonId = `${host}-host-btn`;
    return (
      <div className="DPDatabase">
        <img src={dbImage} width="120" height="100" />
        <p className="connector-text"><Button  id={buttonId} onClick={this.toggle}>{name}</Button></p>
        <Popover placement="right" isOpen={this.state.popoverOpen} target={buttonId} toggle={this.toggle}>
          <PopoverHeader>Host</PopoverHeader>
          <PopoverBody>{host}</PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default DPDatabase;
