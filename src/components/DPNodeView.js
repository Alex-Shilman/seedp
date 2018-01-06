import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Arrow from './arrow/Arrow';
import DBIcon from './dbIcon/DBIcon';
import KafkaIcon from './kafkaIcon/KafkaIcon';
import IReadyIcon from './iReadyIcon/IReadyIcon';
import NoSqlIcon from './noSqlIcon/NoSqlIcon';
import ServerIcon from './serverIcon/ServerIcon';

class DPNodeView extends Component {
  constructor(props) {
    super(props);
    this.getStatus = this.getStatus.bind(this);
  };

  getStatus() {
    const { data } = this.props;
    const status = {
      kafka: 'healthy',
      datalake: 'healthy',
      memsql: 'healthy',
      server: 'healthy'
    };
    _.forEach(data, (item) => {
      switch(item.name) {
        case 'datalake':
          status.datalake = item.state;
          break;
        case 'dataservice':
          status.server = item.state;
          break;
        case 'kafka':
          status.kafka = item.state;
          break;
        case 'memsql':
          status.memsql = item.state;
          break;
        default:
          break;
      }
    });
    return status;
  } 
    
  render() {
    const status = this.getStatus();
    return (
      <div className="DPNodeView">
        <IReadyIcon />
        <div className="dp-nodes">
          <div className="dp-nodes-container">
            <div className="dp-nodes-row">
              <Arrow />
              <Link to="kafka">
                <KafkaIcon status={status.kafka} />
              </Link>
              <Arrow />
              <NoSqlIcon status={status.datalake} />
            </div>
            <div className="dp-nodes-row">
              <div className="DPNode" />
              <div className="DPNode" />
              <Arrow rotate="arrow-rotate32"/>
              <Arrow rotate="arrow-rotate90"/>
            </div>
            <div className="dp-nodes-row">
              <Arrow rotate="arrow-rotate180"/>
              <ServerIcon status={status.server} />
              <Arrow rotate="arrow-rotate180"/>
              <DBIcon name="MemSql" status={status.memsql} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  data: globalState.notification.data
});

export default connect(mapStateToProps, null)(DPNodeView);
