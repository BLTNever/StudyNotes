import * as RouteBase from './routeBase'

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
                path: '/react/Source',
                component: RouteBase.ReactSource,
            },
            {
                path: '/react/Event',
                component: RouteBase.ReactEvent,
            },
            {
                path: '/react/Detail',
                component: RouteBase.Detail,
            },
            {
                path: '/react/Redux',
                component: RouteBase.Redux,
            },
            {
                path: '/react',
                redirect: '/react/Event',
            },
        ]
    },
    {
        path: '/brower',
        // component: RouteBase.Js,
        children: [
            {
                path: '/brower/Delegate',
                component: RouteBase.Delegate,
            },

        ]
    },
    {
        path: '/interview',
        children: [
            {
                path: '/interview/js',
                component: RouteBase.Js,
            },
            {
                path: '/interview/record',
                component: RouteBase.InterviewRecord,
            },
            {
                path: '/interview/framework',
                component: RouteBase.InterviewFramework,
            },
            {
                path: '/interview/3',
                component: RouteBase.Interview3,
            },
            {
                path: '/interview/3-1',
                component: RouteBase.Interview31,
            },
            {
                path: '/interview/webpack',
                component: RouteBase.Webpack,
            },
            {
                path: '/interview/5',
                component: RouteBase.Interview5,
            },
            {
                path: '/interview/6',
                component: RouteBase.Interview6,
            },
            {
                path: '/interview/frontend',
                component: RouteBase.frontend,
            },
            {
                path: '/interview/8',
                component: RouteBase.Interview8,
            },
            {
                path: '/interview',
                redirect: '/interview/1',
            },
        ]
    },
    {
        path: '/algorithm',
        children: [
            {
                path: '/algorithm/note',
                component: RouteBase.AlgoNote,
            },
            {
                path: '/algorithm/base',
                component: RouteBase.AlgoBase,
            },
            {
                path: '/algorithm/array',
                component: RouteBase.AlgoArray,
            },
            {
                path: '/algorithm/sort',
                component: RouteBase.AlgoSort,
            },
            {
                path: '/algorithm/string',
                component: RouteBase.AlgoString,
            },
            {
                path: '/algorithm/math',
                component: RouteBase.AlgoMath,
            },
            {
                path: '/algorithm/aggregate',
                component: RouteBase.AlgoAggregate,
            },
            {
                path: '/algorithm/5',
                component: RouteBase.Algorithm5,
            },
            {
                path: '/algorithm/listNode',
                component: RouteBase.AlgoListNode,
            },
            {
                path: '/algorithm/stack',
                component: RouteBase.AlgoStack,
            },
            {
                path: '/algorithm/doublePointer',
                component: RouteBase.AlgoDoublePointer,
            },
            {
                path: '/algorithm/binaryTree',
                component: RouteBase.AlgoBinaryTree,
            },
            {
                path: '/algorithm',
                redirect: '/algorithm/note',
            },
        ]
    },
    {
        path: '/examination',
        children: [
            {
                path: '/examination/nativeMethod',
                component: RouteBase.NativeMethod,
            },
            {
                path: '/examination/2',
                component: RouteBase.Program,
            },
            {
                path: '/examination/framework',
                component: RouteBase.ExaminationFramework,
            },
            {
                path: '/examination/4',
                component: RouteBase.Program4,
            },
            {
                path: '/examination/5',
                component: RouteBase.Program5,
            },
            {
                path: '/examination/6',
                component: RouteBase.Program6,
            },
            {
                path: '/examination/7',
                component: RouteBase.Program7,
            },
            {
                path: '/examination/8',
                component: RouteBase.AlgoDoublePointer,
            },
            {
                path: '/examination',
                redirect: '/algorithm/1',
            },
        ]
    },
    {
        path: '/exercise',
        // component: RouteBase.Js,
        children: [
            {
                path: '/exercise/1',
                component: RouteBase.Exercise1,
            },
            {
                path: '/exercise/2',
                component: RouteBase.Exercise2,
            },
            {
                path: '/exercise/3',
                component: RouteBase.Exercise3,
            },
            {
                path: '/exercise/4',
                component: RouteBase.Exercise4,
            },
            {
                path: '/exercise/5',
                component: RouteBase.Exercise5,
            },
            {
                path: '/exercise/6',
                component: RouteBase.Exercise6,
            },
            {
                path: '/exercise/7',
                component: RouteBase.Exercise7,
            },
            {
                path: '/exercise',
                redirect: '/exercise/1',
            },
        ]
    },
    {
        path: '/',
        redirect: '/home',
    },
]
