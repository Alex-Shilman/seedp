import React, { Component } from 'react';
import classNames from 'classnames';
import './serverIcon.css';

class NoSqlIcon extends Component {
  render() {
    return(
      <div className="serverIcons">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.58 194.25">
            <title>Untitled-9</title>
            <rect className={classNames('server-color', this.props.status)} x="5.54" y="36.24" width="107.37" height="124.08" />
            <path className="server-lines" d="M617.65,317.18v135H735.23v-135H617.65Zm108.25,9.33V363.1H627V326.52H725.9Zm0,41.25v36.17H627V367.76H725.9ZM627,442.84V408.6H725.9v34.24H627Z" transform="translate(-617.65 -287.19)" />
            <rect className="server-lines" x="15.17" y="55.49" width="65.62" height="4.67" />
            <rect className="server-lines" x="15.17" y="96.33" width="65.62" height="4.67" />
            <rect className="server-lines" x="15.17" y="137.16" width="65.62" height="4.67" />
            <circle className="server-lines" cx="95.13" cy="57.68" r="5.06" />
            <circle className="server-lines" cx="95.13" cy="98.52" r="5.06" />
            <circle className="server-lines" cx="95.13" cy="139.35" r="5.06" />
            <text className={classNames('server-label', this.props.status)} transform="translate(4.22 23.18)">DATA SERVICE</text>
            <text className={classNames('server-status', this.props.status)} transform="translate(25.08 188.49)">{this.props.status}!</text>
        </svg>
      </div>
    );
  }
}

NoSqlIcon.defaultProps = { status: 'healthy' };

export default NoSqlIcon;
