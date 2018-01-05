import React, { Component } from 'react';
import DPConnectorView from './components/DPConnectorView';
import DPNode from './components/DPNode';
import logo from './logo.svg';
import kafka from './assets/kafka.svg';
import datalake from './assets/nosqldb.svg';
import memsql from './assets/db.svg';
import server from './assets/server.svg';
import arrow from './assets/arrow.svg';
import DPNodeView from './components/DPNodeView';

import Arrow from './components/arrow/Arrow';
import DBIcon from './components/dbIcon/DBIcon';
import KafkaIcon from './components/kafkaIcon/KafkaIcon';
import IReadyIcon from './components/iReadyIcon/IReadyIcon';
import NoSqlIcon from './components/noSqlIcon/NoSqlIcon';
import ServerIcon from './components/serverIcon/ServerIcon';

import { subscribeToTimer, subscribeToData } from './api';
import './App.css';

const connectors = [
  { name: "iready_dbz" },
  { name: "lessons_dbz" },
];

class App extends Component {

  state = {
    displayConnectors: false,
    timestamp: 0,
    data: null
  }

  constructor(props) {
    super(props);
    subscribeToData((err, payload) => {
      this.setState({ data: payload });
      console.log(payload)
    });
    subscribeToTimer((err, timestamp) => this.setState({timestamp}));
  }

  _handleDrillDown = () => {
    this.setState({displayConnectors: true});
  }

  _handleDrillUp = () => {
    this.setState({displayConnectors: false});
  }

  render() {
    const {timestamp, data} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DATA PLATFORM DASHBOARD {timestamp}</h1>
        </header>
        {/* {this.state.displayConnectors ?
          <DPConnectorView connectors={connectors} onDrillUp={this._handleDrillUp} /> :
          <DPNodeView onDrillDown={this._handleDrillDown} />
        } */}
        {/* <header className="App-footer">
          <p>{JSON.stringify(data)}</p>
        </header> */}
        <div>
          <div id="ready">
            <IReadyIcon />
          </div>
          <div id="kafka">
            <div id="top">
              <div><Arrow /></div>
              <div><ServerIcon /></div>
              <div><Arrow /></div>
              <div><DBIcon /></div>
            </div>
            <div id="mid">
              <div class="col2-spacer"></div>
              <div><Arrow name="row2-col3-arrow" /></div>
              <div><Arrow name="row2-col4-arrow" /></div>
            </div>
            <div id="bottom">
              <div><Arrow /></div>
              <div><KafkaIcon status='healthy' /></div>
              <div><Arrow /></div>
              <div><NoSqlIcon status='warning' /></div>
            </div>
          </div>
          {/* <Arrow />
          <DBIcon />
          <KafkaIcon />
          <NoSqlIcon />
          <ServerIcon /> */}
        </div>
      </div>
    );
  }
}
export default App;
