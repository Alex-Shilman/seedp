import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import DPConnectorView from './components/DPConnectorView';
import Timer from './components/Timer';
import Notification from './components/Notification';
import Landingpage from './components/Landingpage';
import DPNodeView from './components/DPNodeView';
import signout from './assets/signout.png';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landingpage} />
          <section>
            <header className="App-header">
              <h1 className="App-title">
                NINTENDO DASHBOARD{' '}
                <Timer />
                <Link to="/">
                  <img src={signout} alt="sign out" width="32" height="32" />
                </Link>
              </h1>
            </header>
            <Notification />
            <Container>
              <Route path="/data-platform" component={DPNodeView}/>
              <Route path="/kafka" component={DPConnectorView} />
            </Container>
          </section>
        </Switch>
      </div>
    );
  }
}
