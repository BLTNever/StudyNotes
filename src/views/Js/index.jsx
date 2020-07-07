import React from 'react';
const { Component } = React;
import { Route } from 'react-router-dom'

import Loadable from 'react-loadable';
import { Spin } from 'antd';

import './index.less';

const Loading = () => <Spin size="large" />;
const getComponent = (page) => Loadable({
    loader: () => import(`./list/${page}`),
    loading: Loading,
})

const JsNotes = () => {

    return (
        <div className="animated ani-box notes-wrap">
            <Route path='/js/note1' component={getComponent('note1')} />
            <Route path='/js/note2' component={getComponent('note2')} />
            <Route path='/js/note3' component={getComponent('note3')} />
            <Route path='/js/note4' component={getComponent('note4')} />
            <Route path='/js/note5' component={getComponent('note5')} />
            <Route path='/js/note6' component={getComponent('note6')} />
            <Route path='/js/note7' component={getComponent('note7')} />
            <Route path='/js/note8' component={getComponent('note8')} />
            <Route path='/js/note9' component={getComponent('note9')} />
            <Route path='/js/note10' component={getComponent('note10')} />
            <Route path='/js/note11' component={getComponent('note11')} />
            <Route path='/js/note14' component={getComponent('note14')} />
            <Route path='/js/note15' component={getComponent('note15')} />
        </div>
    )
}
export default JsNotes
