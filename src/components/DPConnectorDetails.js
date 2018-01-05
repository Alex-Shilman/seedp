import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { loadConnectors } from '../redux/actions';

class DPConnectorDetails extends Component {
	
	componentDidMount() {
    this.props.loadConnectors({});
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
		return (
			<Modal className="animated zoomIn" isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>{connectorJson.dispName}</ModalHeader>
				{
					(connectorsLoading) ? 'loading...'
						: (<ModalBody>
								Type: {connectorJson.type}<br/>
								Database: {connectorJson.database}<br/>
								Status: {connectorJson.status}<br/>
							</ModalBody>)
				}
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
