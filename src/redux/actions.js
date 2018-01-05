import { JsonRPC } from '../api';

export const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_FAIL    = 'LOAD_DATA_FAIL';

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
    dispatch({ type: LOAD_DATA_REQUEST });
    JsonRPC('/rpc/swimlanes', { ...params, method: 'getSwimLanes' }).then(({ data }) =>
      dispatch({
        type: LOAD_DATA_SUCCESS,
        payload: data.data
      })
    ).catch(error =>
      dispatch({
        type: LOAD_DATA_FAIL,
        error
      })
    )
  }
}