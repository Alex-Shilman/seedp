import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import PipeIcon from './pipeIcon/PipeIcon';
import DPTopicDetail from './DPTopicDetail';

class DPTopics extends Component {
  state = {
    popoverOpen: false,
    warningOpen: false,
  }

  toggle = () => {
    this.setState(({popoverOpen, warningOpen}) => ({
      popoverOpen: !popoverOpen,
      warningOpen: warningOpen
    }));
  }
  
  toggleWarning = () => {
    this.setState(({popoverOpen, warningOpen}) => ({
      popoverOpen: popoverOpen,
      warningOpen: !warningOpen
    }));
  }

  render() {
    const { group, message, name } = this.props;
    const { popoverOpen, warningOpen } = this.state;
    const topicsId = `${name}-topics-btn`;
    const warningId = `${name}-warning-btn`;
    return (
      <div className="DPTopics">
        <p className="topic-text">
        <Button id={topicsId} className="button-style" color="primary" onClick={this.toggle}>{group.dispName}</Button>
        </p>
        <PipeIcon status={message ? 'warning' : 'healthy'}/>
        <DPTopicDetail
          className="topic-popover animated zoomIn"
          placement="left"
          isOpen={popoverOpen}
          target={topicsId}
          toggle={this.toggle}
          group={group}
        />
        { message && 
          <Button id={warningId} color="danger" className="button-style" onClick={this.toggleWarning} >!</Button>
        }
        { message &&
          <Popover
            className="warning-popover animated zoomIn"
            placement="bottom"
            isOpen={warningOpen}
            target={warningId}
            toggle={this.toggleWarning}>
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
