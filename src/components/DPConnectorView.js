import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DPArrow from './DPArrow';
import DPDatabase from './DPDatabase';
import DPConnector from './DPConnector';
import DPTopics from './DPTopics';
import { loadSwimlanes } from '../redux/actions';
import sinkImage from '../assets/sink.svg';
import sourceImage from '../assets/source.svg';
import classNames from 'classnames';
import Arrow from './arrow/Arrow';

// TODO: switch to this.props.data when ready
// import swimlanesData from './swimlanes';

class DPConnectorView extends Component {
  componentWillMount() {
    const { loadData } = this.props
    loadData({test: 1});
  }

  _renderConnectorRow = (swimlane) => {
    const { swimlanesData } = this.props;
    const db = _.get(swimlanesData.databases, swimlane.databaseKey);
    const source = _.get(swimlanesData.connector_summaries, swimlane.sourceConnectorKey);
    console.log('source', source);
    const sink = _.get(swimlanesData.connector_summaries, swimlane.sinkConnectorKey);
    const group  = _.get(swimlanesData.topic_groups, swimlane.topicGroupKey);
    
    return (
      <div className="dp-connectors-row" key={swimlane.topicGroupKey} >
        { db ? <DPDatabase name={db.name} host={db.host} /> : <div className="empty-div" /> }
        { db ? <Arrow /> : <div className="empty-div" /> }
        { source ? <DPConnector connector={source} image={sourceImage} /> : <div className="empty-div" /> }
        { source ? <Arrow /> : <div className="empty-div" /> }
        <DPTopics group={group} message={swimlane.warnMessage} name={swimlane.topicGroupKey} />
        { sink ? <Arrow /> : <div className="empty-div" /> }
        { sink ? <DPConnector connector={sink} image={sinkImage} /> : <div className="empty-div" /> }
      </div>
    );
  };

  render() {
    const { history, swimlanesData, loading } = this.props;
    return (
      <div className="DPConnectorView">
        <button onClick={history.goBack}>Back</button>
        {
          loading ? 'Loading...' : (
            <div className="dp-connectors-container">
              {_.get(swimlanesData, 'swimlanes', []).map((swimlane) => this._renderConnectorRow(swimlane) )}
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (globalState) => {
  return {
    loading: globalState.data.loading,
    error: globalState.data.error,
    swimlanesData: globalState.data.data
  }
};

const mapDispatchToProps = {
  loadData: loadSwimlanes
};

export default connect(mapStateToProps, mapDispatchToProps)(DPConnectorView);
