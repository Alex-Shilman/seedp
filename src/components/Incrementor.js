import React, { Component } from 'react';
import { connect } from 'react-redux';
import { socketConnect } from '../redux/redux-socket/actionCreators';
import { increment } from '../redux/actions';

class Incrementor extends Component {
  componentDidMount() {
    socketConnect('http://localhost:8080');
  }
  
  render() {
    const { socket } = this.props;
    return (
      <div>{socket}</div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  socket: globalState.socket
});

const mapDispatchToProps = {
  increment,
  socketConnect
}

export default connect(mapStateToProps, mapDispatchToProps)(Incrementor)

