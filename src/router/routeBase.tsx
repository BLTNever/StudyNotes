import React, { lazy } from 'react'

const Home = lazy(() => import(/* webpackChunkName: "home" */'@views/Home'))
// const Login = lazy(() => import(/* webpackChunkName: "login" */'@views/Login'))

// const Js = lazy(() => import(/* webpackChunkName: "js" */'@views/Js'))
// const Node = lazy(() => import(/* webpackChunkName: "node" */'@views/Node'))


export default {
   Home,
}
