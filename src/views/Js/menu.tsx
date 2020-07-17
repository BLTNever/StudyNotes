// import React, { lazy } from 'react'
// import { Route, Redirect } from 'react-router-dom'

// import './index.less';
// const path = '@views/Js/list/'

// const ExecuteStack = lazy(() => import(/* webpackChunkName: "ExecuteStack" */'./list/ExecuteStack'))
// const EventLoop = lazy(() => import(/* webpackChunkName: "EventLoop" */'./list/EventLoop'))
// const Types = lazy(() => import(/* webpackChunkName: "Types" */'./list/Types'))
// const This = lazy(() => import(/* webpackChunkName: "This" */'./list/This'))
// const Operators = lazy(() => import(/* webpackChunkName: "Operators" */'./list/Operators'))
// const Closure = lazy(() => import(/* webpackChunkName: "Closure" */'./list/Closure'))
// const Async = lazy(() => import(/* webpackChunkName: "Async" */'./list/Async'))
// const Prototype = lazy(() => import(/* webpackChunkName: "Prototype" */'./list/Prototype'))
// const Moudles = lazy(() => import(/* webpackChunkName: "Moudles" */'./list/Moudles'))

// const list = [
//     {
//         path: '/js/ExecuteStack',
//         component: ExecuteStack,
//     },
//     {
//         path: '/js/EventLoop',
//         component: EventLoop,
//     },
//     {
//         path: '/js/Types',
//         component: Types,
//     },
//     {
//         path: '/js/This',
//         component: This,
//     },
//     {
//         path: '/js/Operators',
//         component: Operators,
//     },
//     {
//         path: '/js/Closure',
//         component: Closure,
//     },
//     {
//         path: '/js/Async',
//         component: Async,
//     },
//     {
//         path: '/js/Prototype',
//         component: Prototype,
//     },
//     {
//         path: '/js/Moudles',
//         component: Moudles,
//     },
//     {
//         path: '/js',
//         redirect: '/js/ExecuteStack',
//     },
// ]

// const menuList = list.map((route: any, key) => {
//     if (route.redirect) {
//         return <Redirect key={key} from={route.path} to={route.redirect} />
//     }
//     return <Route key={key} component={route.component} path={route.path} />
// })

// export default menuList