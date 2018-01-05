import { combineReducers } from 'redux';
import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAIL,
} from './actions';

const DEFAULT_STATE = {
  loading: false,
  data: {},
  error: {}
};

const kafkaData = (state = DEFAULT_STATE, action) => {
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
    case LOAD_DATA_FAIL:
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
    data: kafkaData
  });

export default createReducers;