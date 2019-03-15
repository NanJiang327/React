import 'babel-polyfill';
import React from 'react';
import { Route, Switch, HashRouter} from 'react-router-dom';
import asyncComponent from './AsyncComponent.js';

import Header from './components/Header'
import Footer from './components/Footer'

import NowShowing from './pages/NowShowing'

import './styles/main.scss'
import 'normalize.css'
import 'antd/dist/antd.css'


export default class Router extends Component {
  render() {
    return (
      <HashRouter>
          <Header />
          <div className="content">
            <Switch>
              <Router exact path='/' component={NowShowing} />
            </Switch>
          </div>
          <Footer />
      </HashRouter>
    )
  }
}