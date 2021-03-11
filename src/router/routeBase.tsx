import React, { lazy } from 'react'


export const Login = lazy(() => import(/* webpackChunkName: "login" */'@views/Login'))
export const Home = lazy(() => import(/* webpackChunkName: "home" */'@views/Home'))

// JS 
// const Js = lazy(() => import(/* webpackChunkName: "js" */'@views/Js'))
export const ExecuteStack = lazy(() => import(/* webpackChunkName: "ExecuteStack" */'@views/Js/list/ExecuteStack'))
export const EventLoop = lazy(() => import(/* webpackChunkName: "EventLoop" */'@views/Js/list/EventLoop'))
export const Types = lazy(() => import(/* webpackChunkName: "Types" */'@views/Js/list/Types'))
export const This = lazy(() => import(/* webpackChunkName: "This" */'@views/Js/list/This'))
export const Operators = lazy(() => import(/* webpackChunkName: "Operators" */'@views/Js/list/Operators'))
export const Closure = lazy(() => import(/* webpackChunkName: "Closure" */'@views/Js/list/Closure'))
export const Async = lazy(() => import(/* webpackChunkName: "Async" */'@views/Js/list/Async'))
export const Prototype = lazy(() => import(/* webpackChunkName: "Prototype" */'@views/Js/list/Prototype'))
export const Moudles = lazy(() => import(/* webpackChunkName: "Moudles" */'@views/Js/list/Moudles'))


// React 
export const ReactEvent = lazy(() => import(/* webpackChunkName: "ReactEvent" */'@views/React/list/ReactEvent'))
export const VirtualDom = lazy(() => import(/* webpackChunkName: "VirtualDom" */'@views/React/list/VirtualDom'))


// Interview
export const Interview1 = lazy(() => import(/* webpackChunkName: "Interview1" */'@views/Interview/list/Interview1'))
export const Interview2 = lazy(() => import(/* webpackChunkName: "Interview2" */'@views/Interview/list/Interview2'))
export const Interview3 = lazy(() => import(/* webpackChunkName: "Interview3" */'@views/Interview/list/Interview3'))
export const Interview4 = lazy(() => import(/* webpackChunkName: "Interview4" */'@views/Interview/list/Interview4'))


// Exercises
export const Exercise1 = lazy(() => import(/* webpackChunkName: "Exercises1" */'@views/Exercises/list/Exercise1'))
export const Exercise2 = lazy(() => import(/* webpackChunkName: "Exercises2" */'@views/Exercises/list/Exercise2'))
export const Exercise3 = lazy(() => import(/* webpackChunkName: "Exercises3" */'@views/Exercises/list/Exercise3'))
export const Exercise4 = lazy(() => import(/* webpackChunkName: "Exercises4" */'@views/Exercises/list/Exercise4'))
export const Exercise5 = lazy(() => import(/* webpackChunkName: "Exercises5" */'@views/Exercises/list/Exercise5'))
export const Exercise6 = lazy(() => import(/* webpackChunkName: "Exercises6" */'@views/Exercises/list/Exercise6'))
export const Exercise7 = lazy(() => import(/* webpackChunkName: "Exercises7" */'@views/Exercises/list/Exercise7'))


// export default {
//     Home,
//     Login,
//     // Js,
//     ExecuteStack,
//     EventLoop,
//     Types,
//     This,
//     Operators,
//     Closure,
//     Async,
//     Prototype,
//     Moudles,
//     // React,
//     ReactEvent,
//     VirtualDom,

//     // Interview
//     Interview1,
//     Interview2,
//     Interview3,
//     Interview4,
// }
