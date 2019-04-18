import 'babel-polyfill';
import React, { Component } from 'react';
import { Route, Switch, HashRouter} from 'react-router-dom';
import asyncComponent from './AsyncComponent.js';
import hashTracker from './hashTracker';

const Header = asyncComponent(() => import('./components/Header'))
const Footer = asyncComponent(() => import('./components/Footer'))
const NowShowing = asyncComponent(() => import('./pages/NowShowing'))
const SearchResult = asyncComponent(() => import('./pages/SearchResult'))
const Detail = asyncComponent(() => import('./pages/Detail'))
const CastDetail = asyncComponent(() => import('./pages/CastDetail'))
const Login = asyncComponent(() => import('./pages/Login'))



export default class Router extends Component {
  render() {
    return (
      <HashRouter>
          <Header />
          <div className="content">
            <Switch>
              <Route exact path='/' component={hashTracker(NowShowing)} />
              <Route path='/search/:query' component={hashTracker(SearchResult)} />
              <Route path='/detail/:id' component={hashTracker(Detail)} />
              <Route path='/castdetail/:id' component={hashTracker(CastDetail)} />
              <Route exact path='/login' component={hashTracker(Login)} />
            </Switch>
          </div>
          <Footer />
      </HashRouter>
    )
  }
}