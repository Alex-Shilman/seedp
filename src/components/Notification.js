import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Alert, Collapse, Button, CardBody, Card } from 'reactstrap';

const messages = {
  caution: 'Caution!!! Something is wrong with the system',
  warning: 'Warning!!! Somethingis wrong with the system',
  success: 'The system is back to normal'
}

const mapStatusToColor = (data) => {
  return {
    isCaution: !!_.find(data, {state: 'caution'}),
    isWarning: !!_.find(data, {state: 'warning'}),
  }
}

class Notification extends Component {
  state = {
    isVisible: false,
    showMore: false
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        isVisible: true,
      })
    }
  }
  
  _toggleShowMore = () => {
    this.setState((state) => ({showMore: !state.showMore}));
  }
  
  _handleToggle = () => {
    this.setState({ isVisible: false });
  }
  
  render() {
    const { isVisible } = this.state;
    const { data } = this.props;
    const { isCaution, isWarning } = mapStatusToColor(data);
    const color = isCaution ? 'danger' : (isWarning ? 'warning' : 'success');
    const message = isCaution ? messages.caution : (isWarning ? messages.warning : messages.success);
    
    return (
      <Alert
        className="notification animated flipInX"
        isOpen={isVisible}
        toggle={this._handleToggle}
        color={color}>
        {message}
        <div>
          <span
            onClick={this._toggleShowMore}
            style={{color: 'blue', cursor: 'pointer'}}>
            Show More ...
          </span>
          <Collapse isOpen={this.state.showMore}>
            <Card style={{background: 'transparent'}}>
              <CardBody>
                <ul>
                {(data && data.length) && data.map(item => (<li key={item.name}>{item.name}  -  <strong>{item.state}</strong>  -  {item.last_updated}</li>))}
              </ul>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </Alert>
    );
  }
}

const mapStateToProps = (globalState) => ({
  data: globalState.notification.data
});

export default connect(mapStateToProps, null)(Notification);