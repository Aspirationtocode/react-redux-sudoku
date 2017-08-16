import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './helpers';

import importStatic from './importStatic';

import App from './containers/App';
import mainReducer from './reducers';

const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

window.addEventListener('load', () => {
  const mainField = document.querySelector('.main-field');
  const modificators = document.querySelector('.modificators');
  const area = document.querySelector('.area');

  function controlMainFieldHeight() {
    modificators.style.height = `${area.offsetWidth}px`;
    mainField.style.height = `${mainField.offsetWidth}px`;
  }

  window.addEventListener('resize', controlMainFieldHeight);
  controlMainFieldHeight();
});
