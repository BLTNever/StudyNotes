import React from 'react';
import { Route } from 'react-router';
import { Layout, Spin } from 'antd';
import Loadable from 'react-loadable';
import './content.less';
import JsNotes from '../../modules/jsNote';

const { Content } = Layout;

const Loading = () =>  <Spin size="large" />;
const Home = Loadable({
    loader: () => import('../../modules/home'),
    loading: Loading,
})


const Contents = () => (
    <Content className="content" id="content">
        <Route path="/home" component={Home} />
        
        <JsNotes />

    </Content>
)

export default Contents
