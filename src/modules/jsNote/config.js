
import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from 'antd';

const Loading = () =>  <Spin size="large" />;

const Note1 = Loadable({
    loader: () => import('./list/note1'),
    loading: Loading,
})
const Note2 = Loadable({
    loader: () => import('./list/note2'),
    loading: Loading,
})
const Note3 = Loadable({
    loader: () => import('./list/note3'),
    loading: Loading,
})
const Note4 = Loadable({
    loader: () => import('./list/note4'),
    loading: Loading,
})
const Note5 = Loadable({
    loader: () => import('./list/note5'),
    loading: Loading,
})
const Note6 = Loadable({
    loader: () => import('./list/note6'),
    loading: Loading,
})
const Note7 = Loadable({
    loader: () => import('./list/note7'),
    loading: Loading,
})
const Note8 = Loadable({
    loader: () => import('./list/note8'),
    loading: Loading,
})
const Note9 = Loadable({
    loader: () => import('./list/note9'),
    loading: Loading,
})

const Note14 = Loadable({
    loader: () => import('./list/note14'),
    loading: Loading,
})
const Note15 = Loadable({
    loader: () => import('./list/note15'),
    loading: Loading,
})

module.exports = {
    Note1,
    Note2,
    Note3,
    Note4,
    Note5,
    Note6,
    Note7,
    Note8,
    Note9,
    Note14,
    Note15,
}