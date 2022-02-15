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
export const Modules = lazy(() => import(/* webpackChunkName: "Modules" */'@views/Js/list/Modules'))
export const Reg = lazy(() => import(/* webpackChunkName: "Reg" */'@views/Js/list/Reg'))


// React 
export const ReactSource = lazy(() => import(/* webpackChunkName: "Source" */'@views/React/list/Source'))
export const ReactEvent = lazy(() => import(/* webpackChunkName: "ReactEvent" */'@views/React/list/ReactEvent'))
export const Detail = lazy(() => import(/* webpackChunkName: "Detail" */'@views/React/list/Detail'))
export const Redux = lazy(() => import(/* webpackChunkName: "Redux" */'@views/React/list/Redux'))


// Interview
export const Js = lazy(() => import(/* webpackChunkName: "Js" */'@views/Interview/list/js'))
export const InterviewFramework = lazy(() => import(/* webpackChunkName: "framework" */'@views/Interview/list/framework'))
export const Interview3 = lazy(() => import(/* webpackChunkName: "Interview3" */'@views/Interview/list/Interview3'))
export const Interview31 = lazy(() => import(/* webpackChunkName: "Interview3-1" */'@views/Interview/list/Interview3-1'))
export const Webpack = lazy(() => import(/* webpackChunkName: "webpack" */'@views/Interview/list/webpack'))
export const Interview5 = lazy(() => import(/* webpackChunkName: "Interview5" */'@views/Interview/list/Interview5'))
export const Interview6 = lazy(() => import(/* webpackChunkName: "Interview6" */'@views/Interview/list/Interview6'))
export const frontend = lazy(() => import(/* webpackChunkName: "frontend" */'@views/Interview/list/frontend'))
export const Interview8 = lazy(() => import(/* webpackChunkName: "Interview8" */'@views/Interview/list/Interview8'))
export const InterviewRecord = lazy(() => import(/* webpackChunkName: "InterviewRecord" */'@views/Interview/list/record'))

// Exercises
export const Exercise1 = lazy(() => import(/* webpackChunkName: "Exercises1" */'@views/Exercises/list/Exercise1'))
export const Exercise2 = lazy(() => import(/* webpackChunkName: "Exercises2" */'@views/Exercises/list/Exercise2'))
export const Exercise3 = lazy(() => import(/* webpackChunkName: "Exercises3" */'@views/Exercises/list/Exercise3'))
export const Exercise4 = lazy(() => import(/* webpackChunkName: "Exercises4" */'@views/Exercises/list/Exercise4'))
export const Exercise5 = lazy(() => import(/* webpackChunkName: "Exercises5" */'@views/Exercises/list/Exercise5'))
export const Exercise6 = lazy(() => import(/* webpackChunkName: "Exercises6" */'@views/Exercises/list/Exercise6'))
export const Exercise7 = lazy(() => import(/* webpackChunkName: "Exercises7" */'@views/Exercises/list/Exercise7'))

// Brower
export const Delegate = lazy(() => import(/* webpackChunkName: "Delegate" */'@views/Brower/list/Delegate'))


// Algorithm
export const AlgoNote = lazy(() => import(/* webpackChunkName: "AlgoNote" */'@views/Algorithm/list/AlgoNote'))
export const AlgoArray = lazy(() => import(/* webpackChunkName: "AlgoArray" */'@views/Algorithm/list/AlgoArray'))
export const AlgoSort = lazy(() => import(/* webpackChunkName: "AlgoSort" */'@views/Algorithm/list/AlgoSort'))
export const AlgoHash = lazy(() => import(/* webpackChunkName: "AlgoHash" */'@views/Algorithm/list/AlgoHash'))
export const AlgoDp = lazy(() => import(/* webpackChunkName: "AlgoDp" */'@views/Algorithm/list/AlgoDp'))
export const AlgoListNode = lazy(() => import(/* webpackChunkName: "AlgoListNode" */'@views/Algorithm/list/AlgoListNode'))
export const AlgoStack = lazy(() => import(/* webpackChunkName: "AlgoStack" */'@views/Algorithm/list/AlgoStack'))
export const AlgoDoublePointer = lazy(() => import(/* webpackChunkName: "AlgoDoublePointer" */'@views/Algorithm/list/AlgoDoublePointer'))
export const AlgoMath = lazy(() => import(/* webpackChunkName: "AlgoMath" */'@views/Algorithm/list/AlgoMath'))
export const AlgoString = lazy(() => import(/* webpackChunkName: "AlgoString" */'@views/Algorithm/list/AlgoString'))
export const AlgoBase = lazy(() => import(/* webpackChunkName: "AlgoBase" */'@views/Algorithm/list/AlgoBase'))
export const AlgoBinaryTree = lazy(() => import(/* webpackChunkName: "AlgoBase" */'@views/Algorithm/list/AlgoBinaryTree'))

// Examination
export const NativeMethod = lazy(() => import(/* webpackChunkName: "NativeMethod" */'@views/Examination/list/nativeMethod'))
export const Program = lazy(() => import(/* webpackChunkName: "Program" */'@views/Examination/list/program'))
export const ExaminationFramework = lazy(() => import(/* webpackChunkName: "Framework" */'@views/Examination/list/framework'))
export const Program4 = lazy(() => import(/* webpackChunkName: "Program4" */'@views/Examination/list/Program4'))
export const Program5 = lazy(() => import(/* webpackChunkName: "Program5" */'@views/Examination/list/Program5'))
export const Program6 = lazy(() => import(/* webpackChunkName: "Program6" */'@views/Examination/list/Program6'))
export const Program7 = lazy(() => import(/* webpackChunkName: "Program7" */'@views/Examination/list/Program7'))
export const Program8 = lazy(() => import(/* webpackChunkName: "Program8" */'@views/Examination/list/Program8'))


// Native 
export const ReactNative = lazy(() => import(/* webpackChunkName: "ReactNative" */'@views/Native/list/ReactNative'))
export const Flutter = lazy(() => import(/* webpackChunkName: "Flutter" */'@views/Native/list/Flutter'))
export const Electron = lazy(() => import(/* webpackChunkName: "Electron" */'@views/Native/list/Electron'))

