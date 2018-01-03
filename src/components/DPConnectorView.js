import React, { Component } from 'react';
import DPConnector from './DPConnector';

class DPConnectorView extends Component {
  render() {
    return (
      <div className="DPConnectorView">
        <button onClick={this.props.onDrillUp} >Back</button>
        <DPConnector name="iready_dbz" />
        <DPConnector name="lession_dbz" />
      </div>
    );
  }
}

export default DPConnectorView;
