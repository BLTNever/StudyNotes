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
export const ReactSource = lazy(() => import(/* webpackChunkName: "Source" */'@views/React/list/Source'))
export const ReactEvent = lazy(() => import(/* webpackChunkName: "ReactEvent" */'@views/React/list/ReactEvent'))
export const VirtualDom = lazy(() => import(/* webpackChunkName: "VirtualDom" */'@views/React/list/VirtualDom'))
export const Redux = lazy(() => import(/* webpackChunkName: "Redux" */'@views/React/list/Redux'))


// Interview
export const Interview1 = lazy(() => import(/* webpackChunkName: "Interview1" */'@views/Interview/list/Interview1'))
export const Interview2 = lazy(() => import(/* webpackChunkName: "Interview2" */'@views/Interview/list/Interview2'))
export const Interview3 = lazy(() => import(/* webpackChunkName: "Interview3" */'@views/Interview/list/Interview3'))
export const Interview31 = lazy(() => import(/* webpackChunkName: "Interview3-1" */'@views/Interview/list/Interview3-1'))

export const Interview4 = lazy(() => import(/* webpackChunkName: "Interview4" */'@views/Interview/list/Interview4'))
export const Interview5 = lazy(() => import(/* webpackChunkName: "Interview5" */'@views/Interview/list/Interview5'))
export const Interview6 = lazy(() => import(/* webpackChunkName: "Interview6" */'@views/Interview/list/Interview6'))
export const Interview7 = lazy(() => import(/* webpackChunkName: "Interview7" */'@views/Interview/list/Interview7'))
export const Interview8 = lazy(() => import(/* webpackChunkName: "Interview8" */'@views/Interview/list/Interview8'))

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
export const AlgoAggregate = lazy(() => import(/* webpackChunkName: "AlgoAggregate" */'@views/Algorithm/list/AlgoAggregate'))
export const Algorithm5 = lazy(() => import(/* webpackChunkName: "Algorithm5" */'@views/Algorithm/list/Algorithm5'))
export const AlgoListNode = lazy(() => import(/* webpackChunkName: "AlgoListNode" */'@views/Algorithm/list/AlgoListNode'))
export const AlgoStack = lazy(() => import(/* webpackChunkName: "AlgoStack" */'@views/Algorithm/list/AlgoStack'))
export const AlgoDoublePointer = lazy(() => import(/* webpackChunkName: "AlgoDoublePointer" */'@views/Algorithm/list/AlgoDoublePointer'))
export const AlgoMath = lazy(() => import(/* webpackChunkName: "AlgoMath" */'@views/Algorithm/list/AlgoMath'))
export const AlgoString = lazy(() => import(/* webpackChunkName: "AlgoString" */'@views/Algorithm/list/AlgoString'))
export const AlgoBase = lazy(() => import(/* webpackChunkName: "AlgoBase" */'@views/Algorithm/list/AlgoBase'))

// Program

export const Program1 = lazy(() => import(/* webpackChunkName: "Program1" */'@views/Program/list/Program1'))
export const Program2 = lazy(() => import(/* webpackChunkName: "Program2" */'@views/Program/list/Program2'))
export const Program3 = lazy(() => import(/* webpackChunkName: "Program3" */'@views/Program/list/Program3'))
export const Program4 = lazy(() => import(/* webpackChunkName: "Program4" */'@views/Program/list/Program4'))
export const Program5 = lazy(() => import(/* webpackChunkName: "Program5" */'@views/Program/list/Program5'))
export const Program6 = lazy(() => import(/* webpackChunkName: "Program6" */'@views/Program/list/Program6'))
export const Program7 = lazy(() => import(/* webpackChunkName: "Program7" */'@views/Program/list/Program7'))
export const Program8 = lazy(() => import(/* webpackChunkName: "Program8" */'@views/Program/list/Program8'))
