import 'babel-polyfill';
import React, { Component } from 'react';
import { Route, Switch, HashRouter} from 'react-router-dom';
import asyncComponent from './AsyncComponent.js';

const Header = asyncComponent(() => import('./components/Header'))
const Footer = asyncComponent(() => import('./components/Footer'))
const NowShowing = asyncComponent(() => import('./pages/NowShowing'))
const SearchResult = asyncComponent(() => import('./pages/SearchResult'))
const Detail = asyncComponent(() => import('./pages/Detail'))
const CastDetail = asyncComponent(() => import('./pages/CastDetail'))

// import NowShowing from './pages/NowShowing'


export default class Router extends Component {
  render() {
    return (
      <HashRouter>
          <Header />
          <div className="content">
            <Switch>
              <Route exact path='/' component={NowShowing} />
              <Route path='/search/:query' component={SearchResult} />
              <Route path='/detail/:id' component={Detail} />
              <Route path='/castdetail/:id' component={CastDetail} />
            </Switch>
          </div>
          <Footer />
      </HashRouter>
    )
  }
}