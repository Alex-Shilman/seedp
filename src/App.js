import React, { Component } from 'react';
import DPConnectorView from './components/DPConnectorView';
import DPNodeView from './components/DPNodeView';
import { subscribeToTimer, subscribeToData } from './api';
import './App.css';

class App extends Component {
  
  state = {
    displayConnectors: false,
    timestamp: 0
  }
  
  constructor(props) {
    super(props);
    subscribeToData((err, payload) => {
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
    const {timestamp} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DATA PLATFORM DASHBOARD {timestamp}</h1>
        </header>
        {this.state.displayConnectors ?
          <DPConnectorView onDrillUp={this._handleDrillUp}/> :
          <DPNodeView onDrillDown={this._handleDrillDown}/>
        }
      </div>
    );
  }
}
export default App;
