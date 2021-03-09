import React, { lazy } from 'react'
import { Spin } from 'antd'
const Login = lazy(() => import(/* webpackChunkName: "login" */'@views/Login'))
const Home = lazy(() => import(/* webpackChunkName: "home" */'@views/Home'))

// JS 
// const Js = lazy(() => import(/* webpackChunkName: "js" */'@views/Js'))
const ExecuteStack = lazy(() => import(/* webpackChunkName: "ExecuteStack" */'@views/Js/list/ExecuteStack'))
const EventLoop = lazy(() => import(/* webpackChunkName: "EventLoop" */'@views/Js/list/EventLoop'))
const Types = lazy(() => import(/* webpackChunkName: "Types" */'@views/Js/list/Types'))
const This = lazy(() => import(/* webpackChunkName: "This" */'@views/Js/list/This'))
const Operators = lazy(() => import(/* webpackChunkName: "Operators" */'@views/Js/list/Operators'))
const Closure = lazy(() => import(/* webpackChunkName: "Closure" */'@views/Js/list/Closure'))
const Async = lazy(() => import(/* webpackChunkName: "Async" */'@views/Js/list/Async'))
const Prototype = lazy(() => import(/* webpackChunkName: "Prototype" */'@views/Js/list/Prototype'))
const Moudles = lazy(() => import(/* webpackChunkName: "Moudles" */'@views/Js/list/Moudles'))


// React 
const ReactEvent = lazy(() => import(/* webpackChunkName: "ReactEvent" */'@views/React/list/ReactEvent'))
const VirtualDom = lazy(() => import(/* webpackChunkName: "VirtualDom" */'@views/React/list/VirtualDom'))


// Interview
const Interview1 = lazy(() => import(/* webpackChunkName: "Interview1" */'@views/Interview/list/Interview1'))
const Interview2 = lazy(() => import(/* webpackChunkName: "Interview2" */'@views/Interview/list/Interview2'))
const Interview3 = lazy(() => import(/* webpackChunkName: "Interview3" */'@views/Interview/list/Interview3'))
const Interview4 = lazy(() => import(/* webpackChunkName: "Interview4" */'@views/Interview/list/Interview4'))

export default {
    Home,
    Login,
    // Js,
    ExecuteStack,
    EventLoop,
    Types,
    This,
    Operators,
    Closure,
    Async,
    Prototype,
    Moudles,
    // React,
    ReactEvent,
    VirtualDom,

    // Interview
    Interview1,
    Interview2,
    Interview3,
    Interview4,
}
