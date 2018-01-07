import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DPDatabase from './DPDatabase';
import DPConnector from './DPConnector';
import GoBack from './GoBack';
import DPTopics from './DPTopics';
import { loadSwimlanes } from '../redux/actions';
import sinkImage from '../assets/sink.svg';
import sourceImage from '../assets/source.svg';
import Arrow from './arrow/Arrow';

class DPConnectorView extends Component {
  componentWillMount() {
    const { loadData } = this.props;
    loadData({test: 1});
  }

  _renderConnector = (htdc, source) => {
    let component;
    if (htdc) {
      component = ( <div className="htdc-connector dashed-border">HTDC</div> );
    } else if (source) {
      component = ( <DPConnector connector={source} image={sourceImage} /> );
    } else {
      component = ( <div className="empty-div" /> );
    }
    return component;
  }

  _renderConnectorRow = (swimlane) => {
    const { swimlanesData } = this.props;
    const db = _.get(swimlanesData.databases, swimlane.databaseKey);
    const source = _.get(swimlanesData.connector_summaries, swimlane.sourceConnectorKey);
    const sink = _.get(swimlanesData.connector_summaries, swimlane.sinkConnectorKey);
    const group  = _.get(swimlanesData.topic_groups, swimlane.topicGroupKey);
    const htdc = group ? group.htdc : false;

    return (
      <div className="dp-connectors-row" key={swimlane.topicGroupKey} >
        { db ? <DPDatabase name={db.name} host={db.host} /> : <div className="empty-div" /> }
        { db ? <Arrow dashedBorder="dashed-border" /> : <div className="empty-div" /> }
        { this._renderConnector(htdc, source) }
        { source || htdc ? <Arrow dashedBorder="dashed-border"/> : <div className="empty-div" /> }
        { group ? <DPTopics group={group} message={swimlane.warnMessage} name={swimlane.topicGroupKey} /> : <div className="empty-div" /> }
        { sink ? <Arrow dashedBorder="dashed-border" /> : <div className="empty-div" /> }
        { sink ? <DPConnector connector={sink} image={sinkImage} /> : <div className="empty-div" /> }
      </div>
    );
  };

  render() {
    const { history, swimlanesData, loading } = this.props;
    return (
      <div className="DPConnectorView">
        <GoBack width={70} height={200} onClick={history.goBack}/>
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
