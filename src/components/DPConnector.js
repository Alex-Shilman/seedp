import React, { Component } from 'react';
import DPConnectorDetails from './DPConnectorDetails';
import ConnectorIcon from './connectorIcon/ConnectorIcon';

class DPConnector extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
  	const { connector } = this.props;
  	console.log('connector', connector);

    return (
      <div className="DPConnector">
      <div className="DPConnectorLogo" onClick={this.toggle}>
      	<ConnectorIcon />
        {connector.dispName}
      </div>
      <DPConnectorDetails connectorJson={connector} modal={this.state.modal} toggle={this.toggle}/> 
	  
	  </div>
    );
  }
}

export default DPConnector;
