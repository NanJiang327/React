// 兼容IE
import 'babel-polyfill';
import React from 'react';
import { Route, Switch, HashRouter} from 'react-router-dom';
import asyncComponent from './AsyncComponent.js';
const Home = asyncComponent(() => import("./pages/Home"));
const Article = asyncComponent(() => import("./pages/Article"));
const Archive = asyncComponent(() => import("./pages/Archive"));
const Tags = asyncComponent(() => import("./pages/Tags"));
const App = asyncComponent(() => import("./App"));

export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route exact path='/article/:number' component={Article} />
                        <Route exact path='/tagblog/:name' component={Tags} />
                        <Route exact path='/archive' component={Archive} />
                        <Route exact path='/' component={Home} />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}