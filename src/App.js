import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import DPConnectorView from './components/DPConnectorView';
import Timer from './components/Timer';
import Notification from './components/Notification';
import Landingpage from './components/Landingpage';
import { subscribeToData } from './api';
import DPNodeView from './components/DPNodeView';
import { notificationChannel } from './redux/actions';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    subscribeToData((err, payload) => {
      props.notify(payload);
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            DATA PLATFORM DASHBOARD
            <Timer />
          </h1>
        </header>
        <Notification />
        <Container>
          <Switch>
            <Route path="/" exact component={Landingpage} />
            <Route path="/data-platform" component={DPNodeView}/>
            <Route path="/kafka" component={DPConnectorView} />
          </Switch>
        </Container>
        <Switch>
          <Route path="/" exact component={Landingpage} />
          <div>
            <header className="App-header">
              <h1 className="App-title">
                DATA PLATFORM DASHBOARD
                <Timer />
              </h1>
            </header>
            <Notification />
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

const mapDispatchToProps = {
  notify: notificationChannel
}
export default connect(null, mapDispatchToProps)(App);
