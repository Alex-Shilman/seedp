import React, { Component } from 'react';
import { subscribeToTimer } from '../api';

export default class Timer extends Component {
  state = {
    timestamp: 0
  }
  
  componentWillMount() {
    subscribeToTimer((err, timestamp) => this.setState({timestamp}));
  }
  
  render() {
    const { timestamp } = this.state;
    const { ...ownProps } = this.props;
    return (
      <span
        {...ownProps}>
        {timestamp}
      </span>
    )
  }
}