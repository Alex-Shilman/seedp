import { combineReducers } from 'redux';
import _ from 'lodash';
import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_UPDATE,
  LOAD_DATA_FAIL,
  LOAD_CONNECTOR_REQUEST,
  LOAD_CONNECTOR_SUCCESS,
  LOAD_CONNECTOR_FAIL,
  LOAD_KAFKA_REQUEST,
  LOAD_KAFKA_SUCCESS,
  LOAD_KAFKA_UPDATE,
  LOAD_KAFKA_FAIL,
  NOTIFICATION_BANNER,
} from './actions';

const parseResponse = (rows) =>
  rows.reduce((composed, row) => {
    composed[_.toLower(row.id)] = JSON.parse(row.json);
    return composed;
  }, {});

const DEFAULT_STATE = {
  loading: false,
  data: {},
  error: {}
};

const notification = (state = {}, action ) => {
  switch (action.type) {
    case NOTIFICATION_BANNER:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
};

const connectors = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOAD_CONNECTOR_REQUEST:
      return {
        ...state,
        loadding: true,
        error: {},
        data: {}
      };
    case LOAD_CONNECTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case LOAD_CONNECTOR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state
  }
};

const data_platform = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOAD_DATA_REQUEST:
      return {
        ...state,
        loadding: true,
        error: {},
        data: {}
      };
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case LOAD_DATA_UPDATE:
      return {
        ...state,
        data: action.payload
      };
    case LOAD_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state
  }
};

const kafkaData = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOAD_KAFKA_REQUEST:
      return {
        ...state,
        loadding: true,
        error: {},
        data: {}
      };
    case LOAD_KAFKA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case LOAD_KAFKA_UPDATE:
      return {
        ...state,
        data: parseResponse(action.payload)
      };
    case LOAD_KAFKA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const createReducers = () =>
  combineReducers({
    data_platform: data_platform,
    data: kafkaData,
    notification: notification,
    connectors: connectors
  });

export default createReducers;