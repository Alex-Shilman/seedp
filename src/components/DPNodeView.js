import React, { Component } from 'react';
import DPArrow from './DPArrow';
import DPNode from './DPNode';
import kafka from '../assets/kafka.svg';
import datalake from '../assets/nosqldb.svg';
import memsql from '../assets/db.svg';
import server from '../assets/server.svg';

import Arrow from './arrow/Arrow';
import DBIcon from './dbIcon/DBIcon';
import KafkaIcon from './kafkaIcon/KafkaIcon';
import IReadyIcon from './iReadyIcon/IReadyIcon';
import NoSqlIcon from './noSqlIcon/NoSqlIcon';
import ServerIcon from './serverIcon/ServerIcon';

class DPNodeView extends Component {
  render() {
    return (
      <div className="DPNodeView">
        <IReadyIcon />
        <div className="dp-nodes">
          <div className="dp-nodes-container">
            <div className="dp-nodes-row">
              <Arrow />
              <KafkaIcon status='healthy' onDrillDown={this.props.onDrillDown} />
              <Arrow />
              <NoSqlIcon status='warning' />
            </div>
            <div className="dp-nodes-row">
              <div className="DPNode" />
              <div className="DPNode" />
              <Arrow rotate="arrow-rotate32"/>
              <Arrow rotate="arrow-rotate90"/>
            </div>
            <div className="dp-nodes-row">
              <Arrow rotate="arrow-rotate180"/>
              <ServerIcon status='healthy' />
              <Arrow rotate="arrow-rotate180"/>
              <DBIcon name="MemSql" status='warning' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DPNodeView;
