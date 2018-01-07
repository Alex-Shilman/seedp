import React, { Component } from 'react';
import { Popover, PopoverHeader, PopoverBody, Collapse } from 'reactstrap';


export default class DPTopicDetail extends Component {
  state = {
    showMoreTopics: false,
  }
  
  _toggleShowMoreTopics = () => {
    this.setState(({showMoreTopics}) => ({showMoreTopics: !showMoreTopics}));
  }
  
  render() {
    const { group, ...ownProps } = this.props;
    const { showMoreTopics } = this.state;
    
    return (
      <Popover
        {...ownProps}
      >
        <PopoverHeader>Topics in Group</PopoverHeader>
        <PopoverBody>
          <ol>
            {group.topics.slice(0, 10).map(topic => ( <li key={topic} >{topic}</li> ) )}
          </ol>
          <Collapse isOpen={showMoreTopics}>
            <ol start="11">
              {group.topics.slice(10).map(topic => ( <li key={topic} >{topic}</li> ) )}
            </ol>
          </Collapse>
          {
            (group.topics.length > 11) &&
            (
              <span onClick={this._toggleShowMoreTopics} style={{cursor:'pointer', color:'blue'}}>
              {showMoreTopics ? 'ShowLess -' : 'ShowMore +'}
              </span>
            )
          }
          
        </PopoverBody>
      </Popover>
    )
  }
}