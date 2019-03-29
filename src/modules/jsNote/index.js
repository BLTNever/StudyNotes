import React from 'react';
const { Component } = React;
import { Route } from 'react-router-dom'

import { 
    Note1, Note2, Note3, Note4, Note5, Note6, Note7, Note8, 
    Note9, Note10, Note14, Note15 } from './config';
import './index.less';

export default class JsNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() { }

    componentWillUnmount() { }

    render() {
        return (
            <div className="animated ani-box notes-wrap">
                <Route path='/js/note1' component={Note1} />
                <Route path='/js/note2' component={Note2} />
                <Route path='/js/note3' component={Note3} />
                <Route path='/js/note4' component={Note4} />
                <Route path='/js/note5' component={Note5} />
                <Route path='/js/note6' component={Note6} />
                <Route path='/js/note7' component={Note7} />
                <Route path='/js/note8' component={Note8} />
                <Route path='/js/note9' component={Note9} />
                <Route path='/js/note10' component={Note9} />
                <Route path='/js/note14' component={Note14} />
                <Route path='/js/note15' component={Note15} />
            </div>
        )
    }
}
