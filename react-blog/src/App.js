import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style'
import { IconFont } from './statics/iconfont/iconfont'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Post from './pages/article'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <IconFont />
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/post' exact component={Post}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
