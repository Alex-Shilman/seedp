import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore({});
const root = document.getElementById('root');
const AppWrapper = ({store}) => (
  <main className="wrapper">
    <Provider store={store}>
      <App />
    </Provider>
  </main>
);

ReactDOM.render(<AppWrapper store={store}/>, root);
registerServiceWorker();
