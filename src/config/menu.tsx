import React from 'react'
import {
    HomeOutlined, createFromIconfontCN, SolutionOutlined
} from '@ant-design/icons'


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
    {
        id: '30000',
        name: 'React',
        icon: <SolutionOutlined />,
        route: 'react',
        children: [
            { id: '31000', name: 'react事件机制', route: '/react/Event' },
            { id: '32000', name: 'react虚拟DOM', route: '/react/VirtualDom' },
        ]
    },

    {
        id: '40000',
        name: 'Interview',
        icon: <SolutionOutlined />,
        route: 'interview',
        children: [
            { id: '41000', name: '一、', route: '/interview/1' },
            { id: '42000', name: '二、', route: '/interview/2' },
            { id: '43000', name: '三、', route: '/interview/3' },
            { id: '44000', name: '四、', route: '/interview/4' },
        ]
    },
    // {
    //     id: '50000',
    //     name: 'EXERCISES',
    //     icon: <SolutionOutlined />,
    //     route: 'exercise',
    //     children: [
    //         { id: '51000', name: '数组', route: '/exercise/1' },
    //         { id: '52000', name: '拷贝', route: '/exercise/2' },
    //         { id: '53000', name: '继承', route: '/exercise/3' },
    //         { id: '54000', name: '对象', route: '/exercise/4' },
    //         { id: '55000', name: '进制', route: '/exercise/5' },
    //         { id: '56000', name: '题笔记', route: '/exercise/6' },
    //         { id: '57000', name: '正则', route: '/exercise/7' },
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
