import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import PipeIcon from './pipeIcon/PipeIcon';

class DPTopics extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.state = {
      popoverOpen: false,
      warningOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
      warningOpen: this.state.warningOpen
    });
  }

  toggleWarning() {
    this.setState({
      popoverOpen: this.state.popoverOpen,
      warningOpen: !this.state.warningOpen
    });
  }

  render() {
    const { group, message, name } = this.props;
    const topicsId = `${name}-topics-btn`;
    const warningId = `${name}-warning-btn`;
    return (
      <div className="DPTopics">
        <p className="topic-text">
        <Button id={topicsId} className="button-style" color="primary" onClick={this.toggle}>{group.dispName}</Button>
        </p>
        <PipeIcon status={message ? 'warning' : 'healthy'}/>
        <Popover className="topic-popover" placement="left" isOpen={this.state.popoverOpen} target={topicsId} toggle={this.toggle}>
          <PopoverHeader>Topics in Group</PopoverHeader>
          <PopoverBody>
            {group.topics.map(topic => ( <p key={topic} >{topic}</p> )
            )}
          </PopoverBody>
        </Popover>
        { message && 
          <Button id={warningId} color="danger" className="button-style" onClick={this.toggleWarning} >!</Button>
        }
        { message &&
          <Popover className="warning-popover" placement="bottom" isOpen={this.state.warningOpen} target={warningId} toggle={this.toggleWarning}>
            <PopoverHeader>Warning Message</PopoverHeader>
            <PopoverBody>
              {message}
            </PopoverBody>
          </Popover> 
        }
      </div>
    );
  }
}

export default DPTopics;
