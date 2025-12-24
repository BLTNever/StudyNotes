import React, { lazy } from 'react'


export const Login = lazy(() => import(/* webpackChunkName: "login" */'@views/Login'))
export const Home = lazy(() => import(/* webpackChunkName: "home" */'@views/Home'))

// JS 
// const Js = lazy(() => import(/* webpackChunkName: "js" */'@views/Js'))
export const ExecuteStack = lazy(() => import(/* webpackChunkName: "executeStack" */'@views/Js/list/ExecuteStack'))
export const EventLoop = lazy(() => import(/* webpackChunkName: "eventLoop" */'@views/Js/list/EventLoop'))
export const Types = lazy(() => import(/* webpackChunkName: "types" */'@views/Js/list/Types'))
export const This = lazy(() => import(/* webpackChunkName: "this" */'@views/Js/list/This'))
export const Operators = lazy(() => import(/* webpackChunkName: "operators" */'@views/Js/list/Operators'))
export const Closure = lazy(() => import(/* webpackChunkName: "closure" */'@views/Js/list/Closure'))
export const Async = lazy(() => import(/* webpackChunkName: "async" */'@views/Js/list/Async'))
export const Prototype = lazy(() => import(/* webpackChunkName: "prototype" */'@views/Js/list/Prototype'))
export const Modules = lazy(() => import(/* webpackChunkName: "modules" */'@views/Js/list/Modules'))
export const Reg = lazy(() => import(/* webpackChunkName: "reg" */'@views/Js/list/Reg'))
export const Reference = lazy(() => import(/* webpackChunkName: "reference" */'@views/Js/list/Reference'))


// React 
export const ReactSource = lazy(() => import(/* webpackChunkName: "source" */'@views/React/list/Source'))
export const ReactEvent = lazy(() => import(/* webpackChunkName: "reactEvent" */'@views/React/list/ReactEvent'))
export const Detail = lazy(() => import(/* webpackChunkName: "detail" */'@views/React/list/Detail'))
export const Redux = lazy(() => import(/* webpackChunkName: "redux" */'@views/React/list/Redux'))


// Interview
export const Js = lazy(() => import(/* webpackChunkName: "js" */'@views/Interview/list/js'))
export const InterviewFramework = lazy(() => import(/* webpackChunkName: "framework" */'@views/Interview/list/framework'))
export const Cache = lazy(() => import(/* webpackChunkName: "cache" */'@views/Interview/list/Cache'))
export const Http = lazy(() => import(/* webpackChunkName: "http" */'@views/Interview/list/Http'))
export const Webpack = lazy(() => import(/* webpackChunkName: "webpack" */'@views/Interview/list/webpack'))
export const Performance = lazy(() => import(/* webpackChunkName: "performance" */'@views/Interview/list/Performance'))
export const Interview6 = lazy(() => import(/* webpackChunkName: "interview6" */'@views/Interview/list/Interview6'))
export const frontend = lazy(() => import(/* webpackChunkName: "frontend" */'@views/Interview/list/frontend'))
export const Vite = lazy(() => import(/* webpackChunkName: "vite" */'@views/Interview/list/Vite'))
export const InterviewRecord = lazy(() => import(/* webpackChunkName: "interviewRecord" */'@views/Interview/list/record'))

// Exercises
export const Exercise1 = lazy(() => import(/* webpackChunkName: "exercises1" */'@views/Exercises/list/Exercise1'))
export const Exercise2 = lazy(() => import(/* webpackChunkName: "exercises2" */'@views/Exercises/list/Exercise2'))
export const Exercise3 = lazy(() => import(/* webpackChunkName: "exercises3" */'@views/Exercises/list/Exercise3'))
export const Exercise4 = lazy(() => import(/* webpackChunkName: "exercises4" */'@views/Exercises/list/Exercise4'))
export const Exercise5 = lazy(() => import(/* webpackChunkName: "exercises5" */'@views/Exercises/list/Exercise5'))
export const Exercise6 = lazy(() => import(/* webpackChunkName: "exercises6" */'@views/Exercises/list/Exercise6'))
export const Exercise7 = lazy(() => import(/* webpackChunkName: "exercises7" */'@views/Exercises/list/Exercise7'))

// Brower
export const Delegate = lazy(() => import(/* webpackChunkName: "delegate" */'@views/Brower/list/Delegate'))


// Algorithm
export const AlgoNote = lazy(() => import(/* webpackChunkName: "algoNote" */'@views/Algorithm/list/AlgoNote'))
export const AlgoArray = lazy(() => import(/* webpackChunkName: "algoArray" */'@views/Algorithm/list/AlgoArray'))
export const AlgoSort = lazy(() => import(/* webpackChunkName: "algoSort" */'@views/Algorithm/list/AlgoSort'))
export const AlgoHash = lazy(() => import(/* webpackChunkName: "algoHash" */'@views/Algorithm/list/AlgoHash'))
export const AlgoDp = lazy(() => import(/* webpackChunkName: "algoDp" */'@views/Algorithm/list/AlgoDp'))
export const AlgoListNode = lazy(() => import(/* webpackChunkName: "algoListNode" */'@views/Algorithm/list/AlgoListNode'))
export const AlgoStack = lazy(() => import(/* webpackChunkName: "algoStack" */'@views/Algorithm/list/AlgoStack'))
export const AlgoDoublePointer = lazy(() => import(/* webpackChunkName: "algoDoublePointer" */'@views/Algorithm/list/AlgoDoublePointer'))
export const AlgoMath = lazy(() => import(/* webpackChunkName: "algoMath" */'@views/Algorithm/list/AlgoMath'))
export const AlgoString = lazy(() => import(/* webpackChunkName: "algoString" */'@views/Algorithm/list/AlgoString'))
export const AlgoBase = lazy(() => import(/* webpackChunkName: "algoBase" */'@views/Algorithm/list/AlgoBase'))
export const AlgoBinaryTree = lazy(() => import(/* webpackChunkName: "algoBase" */'@views/Algorithm/list/AlgoBinaryTree'))

// Examination
export const NativeMethod = lazy(() => import(/* webpackChunkName: "nativeMethod" */'@views/Examination/list/nativeMethod'))
export const Program = lazy(() => import(/* webpackChunkName: "program" */'@views/Examination/list/program'))
export const ExaminationFramework = lazy(() => import(/* webpackChunkName: "framework" */'@views/Examination/list/framework'))
export const Program4 = lazy(() => import(/* webpackChunkName: "program4" */'@views/Examination/list/Program4'))
export const Program5 = lazy(() => import(/* webpackChunkName: "program5" */'@views/Examination/list/Program5'))
export const Program6 = lazy(() => import(/* webpackChunkName: "program6" */'@views/Examination/list/Program6'))
export const Program7 = lazy(() => import(/* webpackChunkName: "program7" */'@views/Examination/list/Program7'))
export const Program8 = lazy(() => import(/* webpackChunkName: "program8" */'@views/Examination/list/Program8'))


// Native 
export const ReactNative = lazy(() => import(/* webpackChunkName: "reactNative" */'@views/Native/list/ReactNative'))
export const Flutter = lazy(() => import(/* webpackChunkName: "flutter" */'@views/Native/list/Flutter'))
export const Electron = lazy(() => import(/* webpackChunkName: "electron" */'@views/Native/list/Electron'))

