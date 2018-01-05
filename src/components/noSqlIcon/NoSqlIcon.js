import React, { Component } from 'react';
import classNames from 'classnames';
import './noSqlIcon.css';

class NoSqlIcon extends Component {
  render() {
    return(
      <div className={classNames('noSqlIcons')}>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.58 212.14">
            <title>Untitled-9</title>
            <path className={classNames('noSql-color', this.props.status)} d="M741,345.52c0-13.09-25.3-23.7-56.51-23.7s-56.51,10.61-56.51,23.7c0,2.3.11,87,.34,87.84,3.1,11.86,27.07,21.09,56.17,21.09,29.26,0,53.33-9.33,56.22-21.28C740.87,432.38,741,347.82,741,345.52Z" transform="translate(-622.26 -280.26)" />
            <path class="noSql-lines" d="M727.11,323.83c-11.45-5.1-26.57-7.91-42.56-7.91s-31.11,2.81-42.56,7.91c-12.72,5.66-19.73,13.68-19.73,22.57v80.29c0,8.89,7,16.9,19.73,22.57,11.45,5.1,26.57,7.91,42.56,7.91s31.11-2.81,42.56-7.91c12.72-5.66,19.73-13.68,19.73-22.57V346.4C746.84,337.51,739.84,329.5,727.11,323.83ZM737,426.69c0,4.61-5.18,9.67-13.87,13.54-10.21,4.55-23.9,7.05-38.54,7.05s-28.33-2.5-38.54-7.05c-8.68-3.87-13.87-8.93-13.87-13.54V363.3l0.2,0.15,0.64,0.47,0.36,0.26,0.72,0.49,0.31,0.21,1.08,0.69,0.07,0,1.05,0.63,0.37,0.21,0.8,0.44,0.44,0.24,0.79,0.41,0.45,0.23,0.87,0.42,0.4,0.19L642,369c10,4.46,22.84,7.17,36.61,7.77q2.95,0.13,6,.13t6-.13c13.77-.61,26.59-3.31,36.61-7.77l1.3-.6,0.4-.19,0.87-.43,0.45-.23,0.79-.41,0.44-.23,0.8-.45,0.37-.21,1-.62,0.07,0,1.07-.68,0.32-.21,0.71-.49,0.37-.26,0.63-.46,0.21-.15v63.39Zm-13.87-66.75c-10.21,4.55-23.9,7.05-38.54,7.05s-28.33-2.5-38.54-7.05c-8.68-3.87-13.87-8.93-13.87-13.54s5.18-9.67,13.87-13.54c10.21-4.55,23.9-7.05,38.54-7.05s28.33,2.5,38.54,7.05c8.68,3.87,13.87,8.93,13.87,13.54S731.78,356.08,723.09,359.94Z" transform="translate(-622.26 -280.26)" />
            <path class="noSql-lines" d="M659.11,406.72c4.92-.14,5.42-2.71,5.42-4.85a51.29,51.29,0,0,0-.43-5.56,51.88,51.88,0,0,1-.36-5.63c0-6.7,4.21-9.62,10.84-9.62h2.5v6.06h-1.28c-3.21,0-4.35,1.92-4.35,5.06,0,1.28.21,2.57,0.36,4.06a46.76,46.76,0,0,1,.36,4.85c0.07,5.42-2.14,7.41-6.06,8.27v0.14c3.92,0.86,6.13,2.92,6.06,8.34a49.76,49.76,0,0,1-.36,5c-0.14,1.43-.36,2.78-0.36,4,0,3.14,1.07,5.13,4.35,5.13h1.28v6h-2.57c-6.34,0-10.76-2.57-10.76-9.7a51.89,51.89,0,0,1,.36-5.63,51.28,51.28,0,0,0,.43-5.56c0-2-.5-4.71-5.42-4.85v-5.49Z" transform="translate(-622.26 -280.26)" />
            <path class="noSql-lines" d="M714,412.21c-4.85.14-5.42,2.85-5.42,4.85a51.28,51.28,0,0,0,.43,5.56,52.56,52.56,0,0,1,.43,5.63c0,7.13-4.42,9.7-10.84,9.7H696v-6h1.28c3.28-.07,4.35-2,4.35-5.13a27.6,27.6,0,0,0-.36-4,49.67,49.67,0,0,1-.36-5c-0.07-5.42,2.14-7.49,6.13-8.34v-0.14c-4-.86-6.2-2.85-6.13-8.27a46.67,46.67,0,0,1,.36-4.85,28.53,28.53,0,0,0,.36-4.06c0-3.14-1.14-5-4.35-5.06H696v-6.06h2.5c6.7,0,10.91,2.92,10.91,9.62a52.55,52.55,0,0,1-.43,5.63,51.29,51.29,0,0,0-.43,5.56c0,2.14.57,4.71,5.42,4.85v5.49Z" transform="translate(-622.26 -280.26)" />
            <text className={classNames('noSql-label', this.props.status)} transform="translate(12.99 24.54)">DATA LAKE</text>
            <text className={classNames('noSql-status', this.props.status)} transform="translate(17.93 204.27)">{this.props.status}!</text>
        </svg>
      </div>
    );
  }
}

NoSqlIcon.defaultProps = { status: 'healthy' };


export default NoSqlIcon;