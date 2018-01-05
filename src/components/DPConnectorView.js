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

  _renderConnector = (htdc, source) => {
    let component;
    if (htdc) {
      component = ( <div className="htdc-connector">HTDC</div> );
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
        { db ? <Arrow /> : <div className="empty-div" /> }
        { this._renderConnector(htdc, source) }
        { source || htdc ? <Arrow /> : <div className="empty-div" /> }
        { group ? <DPTopics group={group} message={swimlane.warnMessage} name={swimlane.topicGroupKey} /> : <div className="empty-div" /> }
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
        <br/><br/>
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
