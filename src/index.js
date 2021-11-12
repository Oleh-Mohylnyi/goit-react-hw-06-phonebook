import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading="" persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
