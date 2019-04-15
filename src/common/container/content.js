import React from 'react';
import { Route } from 'react-router';
import { Layout, Spin } from 'antd';
import Loadable from 'react-loadable';
import './content.less';
// import JsNotes from '../../modules/jsNote';

const { Content } = Layout;

const Loading = () =>  <Spin size="large" />;
const getComponent = (page) => Loadable({
    loader: () => import(`../../modules/${page}`),
    loading: Loading,
})
const Contents = () => (
    <Content className="content" id="content">
        <Route path="/home" component={getComponent('home')} />
        
        <Route path="/js" component={getComponent('jsNote')} />
        
        <Route path="/exercises" component={getComponent('exercises')} />
    </Content>
)

export default Contents
