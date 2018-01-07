import React, { Component } from 'react';
import {Collapse, Button, CardBody, Card, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { loadConnectors } from '../redux/actions';
import _ from 'lodash';

class DPConnectorDetails extends Component {
	
	componentDidMount() {
    this.props.loadConnectors({});
	}

 constructor(props) {
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = { collapse: false };
  }
toggleCollapse() {
    this.setState({ collapse: !this.state.collapse });
  }
	render() {
		const {
			modal,
			toggle,
			connectorJson,
			swimlanesData,
			connectorsData,
			connectorsLoading,
			connectorsError } = this.props;
		console.log('connectorJson ==>', connectorJson);
		console.log('swimlanesData ==>', swimlanesData);
		console.log('connectorsData ==>', connectorsData);
		const connector = swimlanesData.connector_details[connectorJson.dispName];
		console.log('connector ==>', connector);		
		const connectorData = _.find(connectorsData, {id: connector.type});
		console.log('connectorData ==>', connectorData);
		const derivedDetails = Object.keys(connector.derivedDetails).map(key => (
			<div><b>{key}:</b> {connector.derivedDetails[key]}<br/></div>))

		const fullDetails = Object.keys(connector.fullConfig).map(key => (
			<div><b>{key}:</b> {connector.fullConfig[key]}<br/></div>))
		return (
			<Modal className="animated zoomIn" isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>{connector.dispName}</ModalHeader>
				{
					(connectorsLoading) ? 'loading...'
						: (<ModalBody>
								<b>Name:</b> {_.get(connectorData, 'disp_name')}<br/>
								<b>Version:</b> {_.get(connectorData, 'version')}<br/>
								<b>Description:</b> {_.get(connectorData, 'description')}<br/>
								{connector.database ? <div><b>Database:</b> {connector.database}<br/></div> : null}
								<b>Status:</b> {connector.connectorStatusStr}<br/><br/>
								<h5>Configuration:</h5>
								{derivedDetails}

							</ModalBody>)
				}

				<button className="toggle-button" color="primary" onClick={this.toggleCollapse} style={{ marginBottom: '1rem' }}>More</button>
		        <Collapse isOpen={this.state.collapse}>
		          <Card className="toggle-text">
		            <CardBody>
		            	<h5>Analytics:</h5>
		            	{fullDetails}
		            </CardBody>
		          </Card>
		        </Collapse>
			 </Modal>
		)
	}
}

const mapStateToProps = (globalState) => ({
  swimlanesData: globalState.data.data,
	connectorsData: globalState.connectors.data,
  connectorsLoading: globalState.connectors.loading,
  connectorsError: globalState.connectors.error,
})

const mapDispatchToProps = {
  loadConnectors
}

export default connect(mapStateToProps, mapDispatchToProps)(DPConnectorDetails);
