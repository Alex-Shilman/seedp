import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import DPConnectorView from './components/DPConnectorView';
import Notification from './components/Notification';
import Landingpage from './components/Landingpage';
import Header from './components/Header';
import DPNodeView from './components/DPNodeView';

import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Landingpage} />
        <section>
          <Header />
          <Notification />
          <Container>
            <Route path="/data-platform" component={DPNodeView}/>
            <Route path="/kafka" component={DPConnectorView} />
          </Container>
        </section>
      </div>
    );
  }
}
