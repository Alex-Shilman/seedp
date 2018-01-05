import { combineReducers } from 'redux';
import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAIL,
  LOAD_CONNECTOR_REQUEST,
  LOAD_CONNECTOR_SUCCESS,
  LOAD_CONNECTOR_FAIL,
  LOAD_KAFKA_REQUEST,
  LOAD_KAFKA_SUCCESS,
  LOAD_KAFKA_FAIL,
} from './actions';

const DEFAULT_STATE = {
  loading: false,
  data: {},
  error: {}
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
}

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
    case LOAD_KAFKA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
const createReducers = () =>
  combineReducers({
    data: kafkaData,
    connectors: connectors
  });

export default createReducers;