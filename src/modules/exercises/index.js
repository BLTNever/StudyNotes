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

export default class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() { }

    componentWillUnmount() { }

    render() {
        return (
            <div className="animated ani-box exercises">
                <Route path='/exercises/exercise1' component={getComponent('exercise1')} />
                <Route path='/exercises/exercise2' component={getComponent('exercise2')} />
                <Route path='/exercises/exercise3' component={getComponent('exercise3')} />
            </div>
        )
    }
}
