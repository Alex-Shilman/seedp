import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createReducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(
    createReducers(),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}