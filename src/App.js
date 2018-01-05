import React, { Component } from 'react';
import { Container } from 'reactstrap';
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
import 'bootstrap/dist/css/bootstrap.css'
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
        <Container>
          {this.state.displayConnectors ?
            <DPConnectorView connectors={connectors} onDrillUp={this._handleDrillUp} /> :
            <DPNodeView onDrillDown={this._handleDrillDown} />
          }
        </Container>
        <footer className="App-footer">
          <p>{JSON.stringify(data)}</p>
        </footer>
      </div>
    );
  }
}
export default App;
