import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import DPConnectorView from './components/DPConnectorView';
import Timer from './components/Timer';
import Landingpage from './components/Landingpage';
import { subscribeToData } from './api';
import DPNodeView from './components/DPNodeView';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

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
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landingpage} />
          <div>
            <header className="App-header">
              <h1 className="App-title">
               NINTENDO DASHBOARD{' '}
                <Timer />
              </h1>
            </header>
            <Container>
              <Route path="/data-platform" component={DPNodeView}/>
              <Route path="/kafka" component={DPConnectorView} />
            </Container>
          </div>
        </Switch>
      </div>
    );
  }
}
export default App;
