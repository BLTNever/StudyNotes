import RouteBase from './routeBase'

export const list = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: RouteBase.Home,
        children: []
    },
    // {
    //     path: '/Login',
    //     component: RouteBase.Login,
    //     children: []
    // },
    // {
    //     path: '/Js',
    //     component: RouteBase.Js,
    //     children: []
    // },
    // {
    //     path: '/Node',
    //     component: RouteBase.Node,
    //     children: []
    // },
]
