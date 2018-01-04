import React, { Component } from 'react';
import DPArrow from './DPArrow';
import DPConnector from './DPConnector';
import DPTopics from './DPTopics';

class DPConnectorView extends Component {
  _renderConnectorRow = (connector) => (
    <div className="dp-connectors-row">
      <DPConnector name={connector.name} />
      <DPArrow />
      <DPTopics />
      <DPArrow />
      <DPConnector name={connector.name} />
    </div>
  );

  render() {
    return (
      <div className="DPConnectorView">
        <button onClick={this.props.onDrillUp} >Back</button>
        <div className="dp-connectors-container">
          {this.props.connectors.map((connector) => this._renderConnectorRow(connector) )}
        </div>
      </div>
    );
  }
}

export default DPConnectorView;
