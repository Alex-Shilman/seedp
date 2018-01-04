import React, { Component } from 'react';
import pipe from '../assets/pipe.svg';

class DPTopics extends Component {
  render() {
    const { group, message } = this.props;
    return (
      <div className="DPTopics">
        <img src={pipe} alt="" />
        <p className="topic-text"><br/>{group.topics.join(', ')}</p>
        <p className="error-text">{message}</p>
      </div>
    );
  }
}

export default DPTopics;
