import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import { subscribeToData, subscribeToDataLevel2 } from './api';
import { notificationChannel, loadKafkaUpdate } from './redux/actions';

const store = configureStore({});

subscribeToData((err, payload) => {
  store.dispatch(notificationChannel(payload));
});

subscribeToDataLevel2((err, payload) => {
  store.dispatch(loadKafkaUpdate(payload));
});

const root = document.getElementById('root');
const AppWrapper = ({store}) => (
  <BrowserRouter>
    <main className="wrapper">
      <Provider store={store}>
        <App />
      </Provider>
    </main>
  </BrowserRouter>
);

ReactDOM.render(<AppWrapper store={store}/>, root);
registerServiceWorker();
