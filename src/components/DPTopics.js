import React, { Component } from 'react';

class DPTopics extends Component {
  render() {
    const { group, message } = this.props;
    return (
      <div className="DPTopics">
        <p className="topic-text">{group.topics.join()}</p>
        <p className="error-text">{message}</p>
      </div>
    );
  }
}

export default DPTopics;
