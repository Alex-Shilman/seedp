import React, { Component } from 'react';
import classNames from 'classnames';
import './connectorIcon.css';

class ConnectorIcon extends Component {
  render() {
    return(
      <div className="serverIcons">
        <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70.81 76.98">
          <title>Untitled-6</title>
          <polygon className={classNames('connect-color', this.props.status)} points="47.44 59.23 2.44 59.23 2.44 33.73 20.43 17.73 67.94 18.44 67.94 41.73 47.44 59.23" />
          <path class="connect-outline" d="M327.88,210.76H277.24L257.1,227.54h0v29.87h48.66l22.15-19.25v-27.4Zm-48.7,5.37h37.67l-13.13,11.41H265.49ZM262.43,252V232.91H302V252h-39.6Zm45-3.2V231.49l15.1-12.59v16.82Z" transform="translate(-257.06 -195.27)" />
          <text className={classNames('connect-label', this.props.status)} transform="translate(20.81 11.27)">{this.props.name}</text>
          <text className={classNames('connect-status', this.props.status)} transform="translate(10.97 74.17)">{this.props.status}</text>
        </svg>
      </div>
    );
  }
}

ConnectorIcon.defaultProps = { status: 'healthy', name:'' };

export default ConnectorIcon;
