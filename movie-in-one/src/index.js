import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Router from './Router.js';


// require('./static/iconfont.js');

import configureStore from './store/configureStore.js'
import 'antd/dist/antd.css'
import './styles/main.scss'


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>
, document.getElementById('root'))
