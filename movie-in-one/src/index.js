import React from 'react';
import ReactDOM from 'react'
import { Provider } from 'react-redux'
import Router from './Router.js';

import store from './store/configureStore'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>
, document.getElementById('root'))
