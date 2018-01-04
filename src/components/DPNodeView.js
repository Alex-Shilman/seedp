import React, { Component } from 'react';
import DPArrow from './DPArrow';
import DPNode from './DPNode';
import kafka from '../assets/kafka.svg';
import datalake from '../assets/nosqldb.svg';
import memsql from '../assets/db.svg';
import server from '../assets/server.svg';

class DPNodeView extends Component {
  render() {
    return (
      <div className="DPNodeView">
        <div className="iready" >
          <div className="vertical-text">i-ready platform</div>
        </div>
        <div className="dp-nodes">
          <div className="dp-nodes-container">
            <div className="dp-nodes-row">
              <DPArrow />
              <DPNode svg={kafka} onDrillDown={this.props.onDrillDown} />
              <DPArrow />
              <DPNode name="Data Lake" svg={datalake} />
            </div>
            <div className="dp-nodes-row">
              <div className="DPNode" />
              <div className="DPNode" />
              <div className="DPNode" />
              <DPArrow rotate="arrow-rotate90" />
            </div>
            <div className="dp-nodes-row">
              <DPArrow rotate="arrow-rotate180" />
              <DPNode name="Data Service" svg={server} />
              <DPArrow rotate="arrow-rotate180" />
              <DPNode name="MemSQL" svg={memsql} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DPNodeView;
