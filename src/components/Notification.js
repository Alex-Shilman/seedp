import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Alert, Collapse } from 'reactstrap';

const messages = {
  caution: 'Caution!!! Something is wrong with the system',
  warning: 'Alert!!! Something is wrong with the system',
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
    this.setState(({showMore}) => ({showMore: !showMore}));
  }
  
  _handleToggle = () => {
    this.setState({ isVisible: false });
  }
  
  render() {
    const { isVisible, showMore } = this.state;
    const { data } = this.props;
    const { isCaution, isWarning } = mapStatusToColor(data);
    const color = isWarning ? 'danger' : (isCaution ? 'warning' : 'success');
    const message = isCaution ? messages.caution : (isWarning ? messages.warning : messages.success);
    
    return (
      <Alert
        className="notification animated flipInX"
        isOpen={isVisible}
        toggle={this._handleToggle}
        color={color}>
        {message}
        <div>
          <Collapse isOpen={showMore}>
            <ul>
              {(data && data.length) && data.map(item => (<li key={item.name}>{item.name}  -  <strong>{item.state}</strong>  -  {item.last_updated}</li>))}
            </ul>
          </Collapse>
          <span onClick={this._toggleShowMore} style={{color: 'blue', cursor: 'pointer'}}>
            {
              (!showMore) ? 'Show More +' : 'Show Less -'
            }
          </span>
        </div>
      </Alert>
    );
  }
}

const mapStateToProps = (globalState) => ({
  data: globalState.notification.data
});

export default connect(mapStateToProps, null)(Notification);