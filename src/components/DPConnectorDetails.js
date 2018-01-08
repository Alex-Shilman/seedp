import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Collapse } from 'reactstrap';
import { connect } from 'react-redux';
import { loadConnectors } from '../redux/actions';
import _ from 'lodash';

class DPConnectorDetails extends Component {
  state = {
  	collapse: false
  };
  
	componentDidMount() {
    this.props.loadConnectors({});
	}
  
  toggleCollapse = () => {
    this.setState(({collapse}) => ({ collapse: !collapse }));
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
		const { collapse } = this.state;
   
		const connector = swimlanesData.connector_details[connectorJson.dispName];
		const connectorData = _.find(connectorsData, {id: connector.type});
		const derivedDetails = Object.keys(connector.derivedDetails).map(key => (
			<div key={key}><b>{key}:</b> {connector.derivedDetails[key]}<br/></div>)
		);
		const fullDetails = Object.keys(connector.fullConfig).map(key => (
			<div key={key}><b>{key}:</b> {connector.fullConfig[key]}<br/></div>)
		);
    
    return (
			<Modal
				size='lg'
				className="animated zoomIn"
				isOpen={modal}
				toggle={toggle}>
				<ModalHeader toggle={toggle}>{connector.dispName}</ModalHeader>
        {
          (connectorsLoading) ? 'loading...' :
						(<ModalBody>
							<b>Name:</b> {_.get(connectorData, 'disp_name')}<br/>
							<b>Version:</b> {_.get(connectorData, 'version')}<br/>
							<b>Description:</b> {_.get(connectorData, 'description')}<br/>
							{connector.database ? <div><b>Database:</b> {connector.database}<br/></div> : null}
							<b>Status:</b> {connector.connectorStatusStr}<br/><br/>
							<h5>Details:</h5>
							{derivedDetails}
							<br/>
							<Collapse isOpen={collapse}>
								<section>
									<h5>Full Configuration:</h5>
									{fullDetails}
								</section>
							</Collapse>
							<span onClick={this.toggleCollapse} style={{ marginBottom: '1rem', color: 'blue', cursor: 'pointer' }}>
								{
									(!collapse) ? 'Show More +' : 'Show Less -'
								}
							</span>
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
