import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import pipe from '../assets/pipe.svg';

import PipeIcon from './pipeIcon/PipeIcon';

class DPTopics extends Component {
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
    const { group, message, name } = this.props;
    const buttonId = `${name}-topics-btn`;
    return (
      <div className="DPTopics">
        <PipeIcon status={message ? 'warning' : 'healthy'}/>
        <p className="topic-text"><br/><br/><Button  id={buttonId} onClick={this.toggle}>{group.dispName}</Button></p>
        <p className="error-text">{message}</p>
        <Popover placement="left" isOpen={this.state.popoverOpen} target={buttonId} toggle={this.toggle}>
          <PopoverHeader>Topics in Group</PopoverHeader>
          <PopoverBody>{group.topics.join(', ')}</PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default DPTopics;
