import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import DBIcon from './dbIcon/DBIcon';

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
    /*const uuid = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    console.log('uuid', uuid);*/
    const buttonId = `${host}-host-btn`;
    return (
      <div className="DPDatabase">
        {/* <img src={dbImage} width="120" height="100" /> */}
        <p className="connector-text"><Button id={buttonId} className="button-style" onClick={this.toggle}>{name}</Button></p>
        <DBIcon status='healthy' />
        <Popover placement="right" isOpen={this.state.popoverOpen} target={buttonId} toggle={this.toggle}>
          <PopoverHeader>Host</PopoverHeader>
          <PopoverBody>{host}</PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default DPDatabase;
