import React, { Component } from 'react';
import { connect } from 'react-redux';
import DPArrow from './DPArrow';
import DPConnector from './DPConnector';
import DPTopics from './DPTopics';
import { loadData } from '../redux/actions';

class DPConnectorView extends Component {
  componentWillMount() {
    const { loadData } = this.props
    loadData({test: 1});
  }
  
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

const mapStateToProps = (globalState) => ({
  loading: globalState.data.loading,
  error: globalState.data.error,
  data: globalState.data.data
  
});

const mapDispatchToProps = {
  loadData
};

export default connect(mapStateToProps, mapDispatchToProps)(DPConnectorView);
