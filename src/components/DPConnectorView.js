import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DPArrow from './DPArrow';
import DPDatabase from './DPDatabase';
import DPConnector from './DPConnector';
import DPTopics from './DPTopics';
import { loadData } from '../redux/actions';
import sinkImage from '../assets/sink.svg';
import sourceImage from '../assets/source.svg';
import classNames from 'classnames';

import Arrow from './arrow/Arrow';
import ConnectorIcon from './connectorIcon/ConnectorIcon';

// TODO: switch to this.props.data when ready
import swimlanesData from './swimlanes';

class DPConnectorView extends Component {
  componentWillMount() {
    const { loadData } = this.props
    loadData({test: 1});
  }

  _renderConnectorRow = (swimlane) => {
    const db = _.get(swimlanesData.databases, swimlane.databaseKey);
    const source = _.get(swimlanesData.connectors, swimlane.sourceConnectorKey);
    const sink = _.get(swimlanesData.connectors, swimlane.sinkConnectorKey);
    const group  = _.get(swimlanesData.topicGroups, swimlane.topicGroupKey);

    return (
      <div className="dp-connectors-row" key={swimlane.topicGroupKey} >
        { db ? <DPDatabase name={db.name} host={db.host} /> : <div className="empty-div" /> }
        { db ? <Arrow /> : <div className="empty-div" /> }
        { source ? <ConnectorIcon name={source.dispName} /> : <div className="empty-div" /> }
        { source ? <Arrow /> : <div className="empty-div" /> }
        <DPTopics group={group} message={swimlane.warnMessage} name={swimlane.topicGroupKey} />
        { sink ? <Arrow /> : <div className="empty-div" /> }
        { sink ? <ConnectorIcon name={sink.dispName} /> : <div className="empty-div" /> }
      </div>
    );
  };

  render() {
    return (
      <div className="DPConnectorView">
        <button onClick={this.props.onDrillUp} >Back</button>
        <div className="dp-connectors-container">
          {swimlanesData.swimlanes.map((swimlane) => this._renderConnectorRow(swimlane) )}
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
