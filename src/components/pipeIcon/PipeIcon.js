import React, { Component } from 'react';
import classNames from 'classnames';
import './pipeIcon.css';

class PipeIcon extends Component {
  render() {
    return(
      <div className="PipeIcons">
        <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 81.13">
          <title>Untitled-6</title>
          <path className={classNames('pipe-color', this.props.status)} d="M374.09,167.27v-0.81h-171v0.43c-8.55,2.55-13,21.49-13,40.21s4.46,37.66,13,40.21v0.29h168c9.85,0,15-20.37,15-40.5C386.09,189.13,382,171,374.09,167.27Z" transform="translate(-190.09 -166.46)" />
          <ellipse className="pipe-ellipse" cx="181" cy="40.64" rx="12" ry="37.5" />
          <path className="pipe-outline" d="M371.09,169.6h0v-0.14h-165v0.28a4,4,0,0,0-1-.14c-6.63,0-12,16.79-12,37.5s5.37,37.5,12,37.5a4,4,0,0,0,1-.14v0.14h165c6.63,0,12-16.79,12-37.5S377.71,169.6,371.09,169.6Z" transform="translate(-190.09 -166.46)" />
        </svg>
      </div>
    );
  }
}

PipeIcon.defaultProps = { status: 'healthy' };

export default PipeIcon;
