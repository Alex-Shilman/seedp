import React, { Component } from 'react';
import DPConnectorView from './components/DPConnectorView';
import DPNodeView from './components/DPNodeView';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayConnectors: false
    }
  }

  _handleDrillDown = () => {
    this.setState({ displayConnectors: true });
  }

  _handleDrillUp = () => {
    this.setState({ displayConnectors: false });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DATA PLATFORM DASHBOARD</h1>
        </header>
        {this.state.displayConnectors ?
          <DPConnectorView onDrillUp={this._handleDrillUp} /> :
          <DPNodeView onDrillDown={this._handleDrillDown} />
        }
      </div>
    );
  }
}

export default App;
