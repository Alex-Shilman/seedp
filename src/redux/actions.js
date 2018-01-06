import { JsonRPC } from '../api';

export const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_FAIL    = 'LOAD_DATA_FAIL';
export const LOAD_KAFKA_REQUEST = 'LOAD_KAFKA_REQUEST';
export const LOAD_KAFKA_UPDATE = 'LOAD_KAFKA_UPDATE';
export const LOAD_KAFKA_SUCCESS = 'LOAD_KAFKA_SUCCESS';
export const LOAD_KAFKA_FAIL    = 'LOAD_KAFKA_FAIL';
export const LOAD_CONNECTOR_REQUEST = 'LOAD_CONNECTOR_REQUEST';
export const LOAD_CONNECTOR_SUCCESS = 'LOAD_CONNECTOR_SUCCESS';
export const LOAD_CONNECTOR_FAIL    = 'LOAD_CONNECTOR_FAIL';

export const loadData = ({params = {}} = {}) => {
  return dispatch => {
    dispatch({ type: LOAD_DATA_REQUEST });
    JsonRPC('/rpc/student', params).then(data =>
      dispatch({
        type: LOAD_DATA_SUCCESS,
        payload: data
      })
    ).catch(error =>
      dispatch({
        type: LOAD_DATA_FAIL,
        error
      })
    )
  }
}

export const loadSwimlanes = ({params = {}} = {}) => {
  return dispatch => {
    dispatch({ type: LOAD_KAFKA_REQUEST });
    JsonRPC('/rpc/swimlanes', { ...params, method: 'getSwimLanes' }).then(({ data }) =>
      dispatch({
        type: LOAD_KAFKA_SUCCESS,
        payload: data.data
      })
    ).catch(error =>
      dispatch({
        type: LOAD_KAFKA_FAIL,
        error
      })
    )
  }
}

export const loadConnectors = ({params = {} = {}}) => {
  return dispatch => {
    dispatch({ type: LOAD_CONNECTOR_REQUEST });
    JsonRPC('/rpc/connectors', { ...params, method: 'getConnectors' }).then(({ data }) =>
      dispatch({
        type: LOAD_CONNECTOR_SUCCESS,
        payload: data.data
      })
    ).catch(error =>
      dispatch({
        type: LOAD_CONNECTOR_FAIL,
        error
      })
    )
  }
}

export const notificationChannel = (payload) => {
  return {
    type: 'NOTIFICATION_BANNER',
    payload: JSON.parse(payload)
  }
}

export const loadKafkaUpdate = (payload) => {
  return {
    type: 'LOAD_KAFKA_UPDATE',
    payload: JSON.parse(payload)
  }
}