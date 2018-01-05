import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DPConnectorDetails extends Component {

	render() {
		const { modal, toggle, connectorJson } = this.props;
		return (
			<div>
		        <Modal className="animated zoomIn" isOpen={modal} toggle={toggle}>
		          <ModalHeader toggle={toggle}>{connectorJson.dispName}</ModalHeader>
			         <ModalBody>
			           Type: {connectorJson.type}<br/>
			           Database: {connectorJson.database}<br/>
			           Status: {connectorJson.status}<br/>
			         </ModalBody>
		       	 </Modal>
			</div>
		)
	}
}

export default DPConnectorDetails;
