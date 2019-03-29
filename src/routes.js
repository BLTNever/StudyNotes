import React from 'react';
import { Route, Redirect, Switch, Prompt } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Container from './common/container';

import Login from './modules/login';
import Js from './modules/jsNote';

const history = createHistory()
const { location } = history

const routes = (
    // <HashRouter>
    //     <div>
    //         <Route path="/" component={Container} />
    //         <Route path="/login" component={Login} />
    //         {location.hash === '#/' ? <Redirect to="/home" /> : ''}
    //     </div>
    // </HashRouter>
    // 以上使用 HashRouter 是为了 github 上展示方便，以上路由写法的缺陷在于加载 login 页时候会把其他页面也加载出来，
    // 项目中可使用如下写法
    <Switch>
        <Route path="/" component={Container} />
        <Route path="/login" component={Login} />
        <Route path="/js" component={Js} />
        {location.hash === '#/' ? <Redirect to="/home" /> : ''}
    </Switch>
)

export default routes
