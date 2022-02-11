import React from 'react'
import {
    HomeOutlined, createFromIconfontCN, SolutionOutlined, CalculatorOutlined
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
            { id: '26000', name: 'this', route: '/js/This' },
            { id: '27000', name: '作用域、闭包、AO、VO、AST', route: '/js/Closure' },
            { id: '28000', name: '异步', route: '/js/Async' },
            // { id: '21100', name: '网络', route: '/js/Network' },
            { id: '21200', name: '原型', route: '/js/Prototype' },
            { id: '21400', name: '模块化', route: '/js/Moudles' },
            { id: '21500', name: '正则', route: '/js/Reg' },
        ]
    },
    {
        id: '60000',
        name: '浏览器',
        icon: <IconFont type="icon-web" />,
        route: 'brower',
        children: [
            { id: '61000', name: '事件委托', route: '/brower/Delegate' },
        ]
    },
    {
        id: '30000',
        name: 'React/redux',
        icon: <SolutionOutlined />,
        route: 'react',
        children: [
            { id: '34000', name: 'react理念/模型', route: '/react/Source' },
            { id: '31000', name: 'react事件机制', route: '/react/Event' },
            { id: '32000', name: 'react详解', route: '/react/Detail' },
            { id: '33000', name: 'redux', route: '/react/Redux' },
        ]
    },

    {
        id: '40000',
        name: 'Interview',
        icon: <SolutionOutlined />,
        route: 'interview',
        children: [
            { id: '44000', name: '模拟题', route: '/interview/record' },
            { id: '47000', name: '前端相关', route: '/interview/frontend' },
            { id: '41000', name: 'javascript', route: '/interview/js' },
            { id: '48000', name: 'ts', route: '/interview/8' },
            { id: '42000', name: '框架', route: '/interview/framework' },
            // { id: '43000', name: '编程题1', route: '/interview/3' },
            // { id: '43000', name: '编程题2', route: '/interview/3-1' },
            { id: '44000', name: 'webpack', route: '/interview/webpack' },
            // { id: '45000', name: '算法', route: '/interview/5' },
            { id: '46000', name: 'html/css/移动端适配', route: '/interview/6' },

        ]
    },
    {
        id: '50000',
        name: 'Examination',
        icon: <CalculatorOutlined />,
        route: 'examination',
        children: [
            { id: '51000', name: '原生方法实现', route: '/examination/nativeMethod' },
            { id: '52000', name: '编程题', route: '/examination/program' },
            { id: '53000', name: '框架', route: '/examination/framework' },

        ]
    },
    {
        id: '40000',
        name: 'Algorithm',
        icon: <CalculatorOutlined />,
        route: 'algorithm',
        children: [
            { id: 'note', name: '记录', route: '/algorithm/note' },
            { id: 'base', name: '基础', route: '/algorithm/base' },
            { id: 'array', name: '数组', route: '/algorithm/array' },
            { id: 'string', name: '字符串', route: '/algorithm/string' },
            { id: 'math', name: '数学', route: '/algorithm/math' },
            { id: 'dp', name: '动态规划', route: '/algorithm/dp' },
            { id: 'binaryTree', name: '树', route: '/algorithm/binaryTree' },
            { id: 'hash', name: '哈希表', route: '/algorithm/hash' },
            { id: 'list', name: '链表', route: '/algorithm/listNode' },
            { id: 'stack', name: '栈和队列', route: '/algorithm/stack' },
            { id: 'doublePointer', name: '双指针', route: '/algorithm/doublePointer' },
            // { id: 'sort', name: '排序', route: '/algorithm/sort' },
        ]
    },
    {
        id: '50000',
        name: 'Native',
        icon: <SolutionOutlined />,
        route: 'native',
        children: [
            { id: '51000', name: 'ReactNative', route: '/native/reactNative' },
            { id: '52000', name: 'Flutter', route: '/native/flutter' },
            { id: '53000', name: 'Electron', route: '/native/electron' },
        ],
    },
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
