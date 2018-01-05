import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import DPConnectorView from './components/DPConnectorView';
import Timer from './components/Timer';
import DPNodeView from './components/DPNodeView';
import Landingpage from './components/Landingpage';
import { subscribeToData } from './api';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

const connectors = [
  { name: "iready_dbz" },
  { name: "lessons_dbz" },
];

class App extends Component {
  
  state = {
    data: null
  }
  
  constructor(props) {
    super(props);
    subscribeToData((err, payload) => {
      this.setState({ data: payload });
      console.log(payload)
    });
  }
  
  render() {
    const { data} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            DATA PLATFORM DASHBOARD
            <Timer />
          </h1>
        </header>
        <Container>
          <Switch>
            <Route path="/" exact component={Landingpage} />
            <Route path="/data-platform" component={DPNodeView}/>
            <Route path="/kafka" component={DPConnectorView} />
          </Switch>
        </Container>
        <footer className="App-footer">
          <p>{JSON.stringify(data)}</p>
        </footer>
      </div>
    );
  }
}
export default App;
