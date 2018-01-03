import React, { Component } from 'react';
import DPNode from './components/DPNode';
import logo from './logo.svg';
import kafka from './assets/kafka.svg';
import datalake from './assets/nosqldb.svg';
import memsql from './assets/db.svg';
import server from './assets/server.svg';
import arrow from './assets/arrow.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DATA PLATFORM DASHBOARD</h1>
        </header>
        <p className="App-intro">
          <DPNode svg={kafka} />
          <DPNode svg={arrow} />
          <DPNode svg={datalake} />
          <DPNode svg={arrow} />
          <DPNode svg={memsql} />
          <DPNode svg={arrow} />
          <DPNode svg={server} />
        </p>
      </div>
    );
  }
}

export default App;
