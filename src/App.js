import React, { Component } from 'react';
import { Container } from 'reactstrap';
import DPConnectorView from './components/DPConnectorView';
import Timer from './components/Timer';
import DPNodeView from './components/DPNodeView';
import { subscribeToData } from './api';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

const connectors = [
  { name: "iready_dbz" },
  { name: "lessons_dbz" },
];

class App extends Component {
  
  state = {
    displayConnectors: false,
    data: null
  }
  
  constructor(props) {
    super(props);
    subscribeToData((err, payload) => {
      this.setState({ data: payload });
      console.log(payload)
    });
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
          <h1 className="App-title">
            DATA PLATFORM DASHBOARD
            <Timer />
          </h1>
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
