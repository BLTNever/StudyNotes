import React from 'react'
import { HomeOutlined, createFromIconfontCN } from '@ant-design/icons'


const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
    ],
});


const menu = [
    {
        id: '10000',
        name: 'HOME',
        icon: <HomeOutlined />,
        children: [],
        route: '/home'
    },
    {
        id: '20000',
        name: 'JS',
        icon: <IconFont type="icon-javascript" />,
        route: 'js',
        children: [
            { id: '21000', name: '执行栈', route: '/js/ExecuteStack' },
            { id: '22000', name: '事件循环', route: '/js/EventLoop' },
            { id: '23000', name: '值类型', route: '/js/Types' },
            { id: '24000', name: '表达式与运算符', route: '/js/Operators' },
            { id: '26000', name: 'This', route: '/js/This' },
            { id: '27000', name: '作用域、闭包', route: '/js/Closure' },
            { id: '28000', name: '异步', route: '/js/Async' },
            // { id: '21100', name: '网络', route: '/js/Network' },
            { id: '21200', name: '原型', route: '/js/Prototype' },
            { id: '21400', name: '模块化', route: '/js/Moudles' },
        ]
    },
    // {
    //     id: '20000',
    //     name: 'EXERCISES',
    //     url: 'exercuses',
    //     icon: 'calculator',
    //     children: [
    //         { name: '数组', url: '/exercises/exercise1' },
    //         { name: '拷贝', url: '/exercises/exercise2' },
    //         { name: '继承', url: '/exercises/exercise3' },
    //         { name: '对象', url: '/exercises/exercise4' },
    //         { name: '进制', url: '/exercises/exercise5' },
    //         { name: '题笔记', url: '/exercises/exercise6' },
    //         { name: '正则', url: '/exercises/exercise7' },
    //     ],
    // },
    // {
    //     name: 'NODE',
    //     url: 'node',
    //     icon: 'code',
    //     children: [
    //         { name: 'Notes', url: 'node' },
    //     ],
    // },
]

export default menu
