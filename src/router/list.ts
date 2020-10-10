import RouteBase from './routeBase'

export const list = [

    {
        path: '/home',
        component: RouteBase.Home,
        children: []
    },
    {
        path: '/Login',
        component: RouteBase.Login,
        children: []
    },
    {
        path: '/js',
        // component: RouteBase.Js,
        children: [
            {
                path: '/js/ExecuteStack',
                component: RouteBase.ExecuteStack,
            },
            {
                path: '/js/EventLoop',
                component: RouteBase.EventLoop,
            },
            {
                path: '/js/Types',
                component: RouteBase.Types,
            },
            {
                path: '/js/This',
                component: RouteBase.This,
            },
            {
                path: '/js/Operators',
                component: RouteBase.Operators,
            },
            {
                path: '/js/Closure',
                component: RouteBase.Closure,
            },
            {
                path: '/js/Async',
                component: RouteBase.Async,
            },
            {
                path: '/js/Prototype',
                component: RouteBase.Prototype,
            },
            {
                path: '/js/Moudles',
                component: RouteBase.Moudles,
            },
            {
                path: '/js',
                redirect: '/js/ExecuteStack',
            },
        ]
    },
    {
        path: '/react',
        // component: RouteBase.Js,
        children: [
            {
                path: '/react/Event',
                component: RouteBase.ReactEvent,
            },
            {
                path: '/react/VirtualDom',
                component: RouteBase.VirtualDom,
            },
            {
                path: '/react',
                redirect: '/react/Event',
            },
        ]
    },
    {
        path: '/interview',
        // component: RouteBase.Js,
        children: [
            {
                path: '/interview/1',
                component: RouteBase.Interview1,
            },
            {
                path: '/interview',
                redirect: '/interview/1',
            },
        ]
    },
    {
        path: '/',
        redirect: '/home',
    },
]
