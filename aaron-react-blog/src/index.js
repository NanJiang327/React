import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import Router from './Router.js';
import {Provider} from 'react-redux';
import configureStore from './redux/store/configureStore';
// 获取工厂函数
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    , document.getElementById('root'));