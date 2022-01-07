import React from "react"
import { Tag, Popover, Table, Button } from 'antd'

export const columns = [
    { title: "Q", dataIndex: "Q", width: 340, fixed: 'left', },
    { title: "知识点", dataIndex: "K", width: 200, fixed: 'left', },
    Table.EXPAND_COLUMN,
    { title: "ANS", dataIndex: "ans", },
    Table.SELECTION_COLUMN
]
const popover1 = <ul>
    <li>1. 不要在渲染函数（render）中进行不必要的计算（数组排序、数据转换、订阅事件、创建事件处理器等）</li>
    <li>2. 减少不必要的嵌套</li>
    <li>3. 虚拟列表（虚拟列表只渲染当前视口可见元素）</li>
    <li>4. 惰性渲染：只在必要时才去渲染对应的节点</li>
    <li>5. 选择合适的样式方案</li>
</ul>
const popover2 = <ul>
    <li>1. 简化 props</li>
    <li>2. 不变的事件处理器：每次渲染时都会创建一个新的事件处理器（useCallback缓存函数），尽量给下级组件暴露一个静态的函数</li>
    <li>3. 不可变数据</li>
    <li>4. 简化 state</li>
</ul>
const popover3 = <ul>
    <li>1. 响应式数据的精细化渲染</li>
    <li>2. 不要滥用 Contex：粗粒度地订阅 Context</li>
</ul>
export const dataSource = [
    {
        Q: 'react合成事件是什么，和原生事件的区别', K: <><Tag color="geekblue">合成事件</Tag><Tag color="green">React</Tag></>,
        ans: 'React并不是将click事件绑在该div的真实DOM上，而是在document处监听所有支持的事件，当事件发生并冒泡至document处时，React将事件内容封装并交由真正的处理函数运行'
    },
    {
        Q: 'react为什么需要合成事件', K: <><Tag color="geekblue">合成事件</Tag><Tag color="green">React</Tag></>,
        ans: <>
            <p>1、统一解决了跨浏览器的兼容性问题</p>
            <p>2、避免这类DOM事件滥用，如果DOM上绑定了过多的事件处理函数，整个页面响应以及内存占用可能都会受到影响</p>
        </>
    },
    {
        Q: 'react setState是同步还是异步', K: <><Tag color="blue">setState</Tag><Tag color="green">React</Tag></>,
        ans: '进入了 react 的调度流程，那就是异步的。只要你没有进入 react 的调度流程，那就是同步的'
    },
    {
        Q: '为什么有时react两次setState，只执行一次', K: <><Tag color="blue">setState</Tag><Tag color="green">React</Tag></>,
        ans: <>
            <p>连续多次调用setState，react会进行合并，只执行一次（batchedUpdates）</p>
            <p>强制合并更新可以使用 ReactDOM.unstable_batchedUpdates 来强制 batch</p>
        </>
    },
    {
        Q: '为什么 react 的函数组件每次渲染执行两次?', K: <><Tag color="blue">setState</Tag><Tag color="green">React</Tag></>,
        ans: 'React 在 Dev mode 下会刻意执行两次渲染，以防止组件内有什么 side effect 引起 bug，提前预防。'
    },
    {
        Q: '调用 setState 之后发生了什么', K: <><Tag color="blue">setState</Tag><Tag color="green">React</Tag></>,
        ans:
            <p>setState -&gt; updateQueue -&gt; requestIdleCallback -&gt; 复制 Fiber 节点 -&gt; 更新 Fiber 节点 -&gt; 生成 effectList -&gt; 更新真实 dom</p>
        ,
        description: <>
            <p>1. 在 setState 的时候，React 会为当前节点创建一个 updateQueue 的更新列队。</p>
            <p>2. 触发 reconciliation 过程，在这个过程中，会使用名为 Fiber 的调度算法，开始生成新的 Fiber 树</p>
            <p>3. React Scheduler 会根据优先级高低，先执行优先级高的节点，具体是执行 doWork 方法</p>
            <p>4. 在 doWork 方法中，React 会执行一遍 updateQueue 中的方法，以获得新的节点。然后对比新旧节点，为老节点打上 更新、插入、替换 等 Tag</p>
            <p>5. 当前节点 doWork 完成后，会执行 performUnitOfWork 方法获得新节点，然后再重复上面的过程</p>
            <p>6. 当所有节点都 doWork 完成后，会触发 commitRoot 方法，React 进入 commit 阶段</p>
            <p>7. 在 commit 阶段中，React 会根据前面为各个节点打的 Tag，一次性更新整个 dom 元素</p>
        </>
    },
    {
        Q: 'react为什么需要fiber', K: <><Tag color="gold">fiber</Tag><Tag color="green">React</Tag></>,
        ans: <>
            <p>fiber 是解决性能问题的</p>
            <p>fiber能够将渲染工作分割成块并将其分散到多个帧中。同时加入了在新更新进入时暂停，中止或重复工作的能力和为不同类型的更新分配优先级的能力</p>
        </>
    },
    {
        Q: 'react fiber有哪些优点，怎样做到的', K: <><Tag color="gold">fiber</Tag><Tag color="green">React</Tag></>,
        ans: <>
            <p>1.1 任务在浏览器空闲时执行、可中断执行、解决性能问题</p>
            <p>1.2 链表结构可中断，双缓存Fiber树，减少Dom操作，在内存中进行计算、构建并直接替换</p>
            <p>2.1 把以前的递归操作变成了链表迭代循环</p>
            <p>2.2 requestIdleCallback</p>
        </>
    },
    {
        Q: 'react如何处理异常', K: <><Tag color="red">异常处理</Tag><Tag color="green">React</Tag></>,
        ans: <>
            <p>定义一个名称为 componentDidCatch(error, info) 的新生命周期方法，该组件会成为错误边界组件</p>
            <p>window.onerror</p>
        </>
    },
    {
        Q: 'react有哪些性能优化的点', K: <><Tag color="cyan">性能优化</Tag><Tag color="green">React</Tag></>,
        ans: <>
            <p><Popover content={popover1}><Button>减少计算的量: 对减少渲染的节点 或者 降低组件渲染的复杂度</Button></Popover></p>
            <p><Popover content={popover2}><Button>避免重新渲染: 1. 组件纯粹性，即控制组件的副作用。 2. 通过shouldComponentUpdate/memo控制是否重新渲染</Button></Popover></p>
            <p><Popover content={popover3}><Button>精细化渲染: 定义一些‘响应式数据’，当这些响应数据变动时，依赖这些响应式数据视图就会重新渲染</Button></Popover></p>
        </>
    },
    {
        Q: '为什么虚拟dom 会提高性能', K: <Tag color="green">React</Tag>,
        ans: '虚拟dom 相当于在 JS 和真实 dom 中间加了一个缓存，利用 diff 算法避免了没有必要的 dom 操作，从而提高性能'
    },
    {
        Q: '什么是高阶组件，请举例说明', K: <Tag color="purple">高阶组件（HOC）</Tag>,
        ans: <>
            <p>一个函数 接受一个或多个函数作为参数或者返回一个函数 就可称之为 高阶函数</p>
            <p>例：函数防抖，函数节流，bind函数，函数柯里化，map，Promise的then函数</p>
        </>
    },
    {
        Q: 'redux有哪些原则', K: <Tag color="volcano">redux</Tag>,
        ans: '采用发布订阅的设计原则将状态抽离，并遵循特点的规则统一管理状态。数据不可变的函数式原则'
    },
    {
        Q: 'reudx 和 mobx 的区别', K: <Tag color="volcano">redux</Tag>,
        ans: 'Mobx 使用 observable，使用 mobx 可以做到精准更新；Redux 是用 dispath 进行广播，通过Provider 和 connect 来比对前后差别控制更新粒度'
    },
    {
        Q: 'redux 异步中间件有什么什么作用', K: <Tag color="volcano">redux</Tag>,
        ans: '自定义拦截 action -> reducer 的过程。变为 action -> middlewares -> reducer 。这种机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能'
    },
    {
        Q: 'ReactNative优化', K: <Tag color="#108ee9">ReactNative</Tag>,
        ans: <ul>
            <li>1. 压缩图片文件</li>
            <li>2. LazyRequire</li>
            <li>3. 动态加载</li>
            <li>4. 骨架屏</li>
            <li>5. 分批次渲染、渐进式渲染、延迟渲染、按需渲染</li>
            <li>6. </li>
        </ul>
    },
    {
        Q: '解释一下原型链', K: <><Tag color="cyan">原型链</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <>
            <p>多个原型之间用链, 连起来, 他们之间的关系统称原型链</p>
            <p>__proto__ --{">"} prototype --{">"} __proto__--{">"} prototype--{">"} ......--{">"} null</p>
            <p>prototype:原型对象;__proto__:原型链指针</p>
            <p>通过prototype对象指向父类对象，直到指向Object对象为止，这样就形成了一个原型指向的链条，称为原型链</p>
        </>
    },
]