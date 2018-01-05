import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

const mapStatusToColor = (data) => {
  return {
    isCaution: !!_.find(data, {state: 'caution'}),
    isWarning: !!_.find(data, {state: 'warning'}),
  }
}

class Notification extends Component {
  state = {
    isVisible: false
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({
        isVisible: true
      })
    }
  }
  
  _handleToggle = () => {
    this.setState({ isVisible: false });
  }
  
  render() {
    const { isVisible } = this.state;
    const { data } = this.props;
    const { isCaution, isWarning } = mapStatusToColor(data);
    const color = isCaution ? 'danger' : (isWarning ? 'warning' : 'success');
    
    return (
      <Alert
        isOpen={isVisible}
        toggle={this._handleToggle}
        color={color}>
        <ul>
        {
          (data && data.length) && data.map(item => (<li key={item.name}>{item.name}  -  <strong>{item.state}</strong>  -  {item.last_updated}</li>))
        }
        </ul>
      </Alert>
    );
  }
}

const mapStateToProps = (globalState) => ({
  data: globalState.notification.data
});

export default connect(mapStateToProps, null)(Notification);