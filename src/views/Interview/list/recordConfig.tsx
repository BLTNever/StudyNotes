import React, { createElement } from "react"
import { Link } from 'react-router-dom'
import { Tag, Popover, Table, Button } from 'antd'

import Highlight from '@components/HighLight'
import { _instanceof, call, apply, bind, createNew, promise, gen } from '../../Examination/list/egNative'
export const columns = [
    { title: "Q", dataIndex: "Q", width: 300, fixed: 'left', },
    { title: "KEY", dataIndex: "K", width: 120, fixed: 'left', },
    Table.EXPAND_COLUMN,
    { title: "ANS", dataIndex: "ans", },
]
const popover1 = <ul>
    <li>1. 不要在渲染函数(render)中进行不必要的计算(数组排序、数据转换、订阅事件、创建事件处理器等)</li>
    <li>2. 减少不必要的嵌套</li>
    <li>3. 虚拟列表(虚拟列表只渲染当前视口可见元素)</li>
    <li>4. 惰性渲染: 只在必要时才去渲染对应的节点</li>
    <li>5. 选择合适的样式方案</li>
</ul>
const popover2 = <ul>
    <li>1. 简化 props</li>
    <li>2. 不变的事件处理器: 每次渲染时都会创建一个新的事件处理器(useCallback缓存函数)，尽量给下级组件暴露一个静态的函数</li>
    <li>3. 不可变数据</li>
    <li>4. 简化 state</li>
</ul>
const popover3 = <ul>
    <li>1. 响应式数据的精细化渲染</li>
    <li>2. 不要滥用 Contex: 粗粒度地订阅 Context</li>
</ul>
const es5Extends = `
function Person(name) {    // 创建一个 Person 构造函数
    this.name = name
}
Person.prototype.run = function () {
    console.log('run')
}
  
function Man(name) {    // 创建一个 Man 构造函数
    Person.call(this, name)
    this.gender = 'man'
}
Man.prototype.fight = function () {
    console.log('fight')
}
  
Man.prototype.__proto__ = Person.prototype    // 让 Man 的原型对象的 proto 指向 Person 的原型对象
`

const promiseAsync1 = `
asyncFn().then(res => {
    const res1 = res
    asyncFn(res1).then(res => {
        const res2 = res
        console.log(res2)
    })
})
`
const promiseAsync2 = `
asyncFn().then(res => {
    const res1 = res
    return asyncFn(res)
}).then(res => {
    const res2 = res
    console.log(res)
})
`
export const dataReact = [
    {
        Q: 'VirtualDom', K: <><Tag color="blue">VirtualDom</Tag><Tag color="green">React</Tag></>,
        ans: <ul>
            <li>virtual Dom是一种编程方式，它以对象的形式保存在内存中，它描述了我们dom的必要信息。</li>
            <li>并且用类似react-dom等模块与真实dom同步，这一过程也叫协调(reconciler)，这种方式可以声明式的渲染相应的ui状态，让我们从dom操作中解放出来</li>
            <li>在react中是以fiber树的形式存放组件树的相关信息，在更新时可以增量渲染相关dom，所以fiber也是virtual Dom实现的一部分</li>
            <li><Link to="/react/Detail#virtualDom">Virtual Dom</Link></li>
        </ul>
    },
    {
        Q: 'react合成事件是什么，和原生事件的区别', K: <><Tag color="geekblue">合成事件</Tag><Tag color="green">React</Tag></>,
        ans: 'React并不是将click事件绑在该div的真实DOM上，而是在document处监听所有支持的事件，当事件发生并冒泡至document处时，React将事件内容封装并交由真正的处理函数运行'
    },
    {
        Q: 'react为什么需要合成事件', K: <><Tag color="geekblue">合成事件</Tag><Tag color="green">React</Tag></>,
        ans: <ul>
            <li>1、统一解决了跨浏览器的兼容性问题</li>
            <li>2、避免这类DOM事件滥用，如果DOM上绑定了过多的事件处理函数，整个页面响应以及内存占用可能都会受到影响</li>
        </ul>
    },
    {
        Q: 'react setState是同步还是异步', K: <><Tag color="blue">setState</Tag><Tag color="green">React</Tag></>,
        ans: '进入了 react 的调度流程，那就是异步的。只要你没有进入 react 的调度流程，那就是同步的'
    },
    {
        Q: '为什么有时react两次setState，只执行一次', K: <><Tag color="blue">setState</Tag><Tag color="green">React</Tag></>,
        ans: <ul>
            <li>连续多次调用setState，react会进行合并，只执行一次(batchedUpdates)</li>
            <li>强制合并更新可以使用 ReactDOM.unstable_batchedUpdates 来强制 batch</li>
        </ul>
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
        description: <ul>
            <li>1. 在 setState 的时候，React 会为当前节点创建一个 updateQueue 的更新列队。</li>
            <li>2. 触发 reconciliation 过程，在这个过程中，会使用名为 Fiber 的调度算法，开始生成新的 Fiber 树</li>
            <li>3. React Scheduler 会根据优先级高低，先执行优先级高的节点，具体是执行 doWork 方法</li>
            <li>4. 在 doWork 方法中，React 会执行一遍 updateQueue 中的方法，以获得新的节点。然后对比新旧节点，为老节点打上 更新、插入、替换 等 Tag</li>
            <li>5. 当前节点 doWork 完成后，会执行 performUnitOfWork 方法获得新节点，然后再重复上面的过程</li>
            <li>6. 当所有节点都 doWork 完成后，会触发 commitRoot 方法，React 进入 commit 阶段</li>
            <li>7. 在 commit 阶段中，React 会根据前面为各个节点打的 Tag，一次性更新整个 dom 元素</li>
        </ul>
    },
    {
        Q: 'react为什么需要fiber', K: <><Tag color="gold">fiber</Tag><Tag color="green">React</Tag></>,
        ans: <ul>
            <li>fiber 是解决性能问题的</li>
            <li>fiber能够将渲染工作分割成块并将其分散到多个帧中。同时加入了在新更新进入时暂停，中止或重复工作的能力和为不同类型的更新分配优先级的能力</li>
        </ul>
    },
    {
        Q: 'react fiber有哪些优点，怎样做到的', K: <><Tag color="gold">fiber</Tag><Tag color="green">React</Tag></>,
        ans: <ul>
            <li>任务在浏览器空闲时执行、可中断执行、解决性能问题</li>
            <li>链表结构可中断，双缓存Fiber树，减少Dom操作，在内存中进行计算、构建并直接替换</li>
            <li>把以前的递归操作变成了链表迭代循环</li>
            <li>requestIdleCallback</li>
        </ul>
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
            <div><Popover content={popover1}><Button>减少计算的量: 对减少渲染的节点 或者 降低组件渲染的复杂度</Button></Popover></div>
            <div><Popover content={popover2}><Button>避免重新渲染: 1. 组件纯粹性，即控制组件的副作用。 2. 通过shouldComponentUpdate/memo控制是否重新渲染</Button></Popover></div>
            <div><Popover content={popover3}><Button>精细化渲染: 定义一些‘响应式数据’，当这些响应数据变动时，依赖这些响应式数据视图就会重新渲染</Button></Popover></div>
        </>
    },
    {
        Q: '为什么虚拟dom 会提高性能', K: <Tag color="green">React</Tag>,
        ans: '虚拟dom 相当于在 JS 和真实 dom 中间加了一个缓存，利用 diff 算法避免了没有必要的 dom 操作，从而提高性能'
    },
]
export const dataRedux = [
    {
        Q: 'redux有哪些原则', K: <Tag color="volcano">redux</Tag>,
        ans: '采用发布订阅的设计原则将状态抽离，并遵循特点的规则统一管理状态。数据不可变的函数式原则'
    },
    {
        Q: 'reudx 和 mobx 的区别', K: <Tag color="volcano">redux</Tag>,
        ans: <ul>
            <li>Mobx 使用 observable，使用 mobx 可以做到精准更新</li>
            <li>Redux 是用 dispath 进行广播，通过Provider 和 connect 来比对前后差别控制更新粒度</li>
        </ul>
    },
    {
        Q: 'redux 异步中间件有什么什么作用', K: <Tag color="volcano">redux</Tag>,
        ans: <ul>
            <li>自定义拦截 action → reducer 的过程。变为 action → middlewares → reducer</li>
            <li>这种机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能</li>
        </ul>
    },]
export const dataNative = [
    {
        Q: 'ReactNative优化', K: <Tag color="#108ee9">ReactNative</Tag>,
        ans: <ul>
            <li>压缩图片文件</li>
            <li>LazyRequire</li>
            <li>动态加载</li>
            <li>骨架屏</li>
            <li>分批次渲染、渐进式渲染、延迟渲染、按需渲染</li>
        </ul>
    }]
export const dataJs = [
    {
        Q: '解释一下原型链', K: <><Tag color="cyan">原型链</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <ul>
            <li>多个原型之间用链, 连起来, 他们之间的关系统称原型链</li>
            <li>__proto__ --{">"} prototype --{">"} __proto__--{">"} prototype--{">"} ......--{">"} null</li>
            <li>prototype:原型对象; __proto__:原型链指针</li>
            <li>通过prototype对象指向父类对象，直到指向Object对象为止，这样就形成了一个原型指向的链条，称为原型链</li>
        </ul>
    },
    {
        Q: 'es5实现继承', K: <><Tag color="red">继承</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <ul>
            <li>1. 把父类自身属性放到自己的自身属性上</li>
            <li>2. 把父类上原型链放到子类的`__proto__`上</li>
            <li>3. 子类的构造函数是自己，容易遗忘</li>
            <li>4. 父类静态属性的继承</li>
        </ul>,
        description: <Highlight>{es5Extends}</Highlight>
    },
    {
        Q: '谈谈你对作用域的理解', K: <><Tag color="yellow">作用域</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <ul>
            <li>定义变量储存的区域。并规定了如何查找变量(标识符)。通俗的讲，作用域就是查找变量的地方</li>
            <li>在查找变量的时候，现在函数作用域中查找，没找到，再去全局作用域中查找，查找变量的链条，称为作用域链</li>
            <li>作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限</li>
            <li>ES6之前只有全局作用域和函数作用域，ES6中加入了块级作用域</li>
            <li>JavaScript采用词法作用域(lexical scoping)，也就是静态作用域</li>
        </ul>
    },
    {
        Q: '谈谈变量提升', K: <><Tag color="green">变量提升</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <>
            <p>JavaScript的源代码在运行的时候，会经过两个阶段: 编译和执行</p>
            <p>编译: 词法解析、语法解析(生成 AST 程序语法树)、代码生成(AST转译可执行代码)、<b>变量提升</b>、LHS查询( 指的是赋值操作的左端)、RHS查询(赋值操作的源头)、函数提升</p>
            <ul>
                <li>var: var变量声明创建、初始化提升到顶部 -&gt; 执行代码 -&gt; 赋值</li>
                <li>let: let声明变量创建时提升到顶部 -&gt; 初始化 -&gt; 执行代码 -&gt; 赋值</li>
                <li>const: 创建 -&gt; 执行代码 -&gt; 初始化</li>
            </ul>
        </>
    },
    {
        Q: '变量提升和函数提升', K: <><Tag color="green">变量、函数提升</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <>
            <p>Javascript引擎会创建一个执行上下文，执行上下文往往意味着创建解析，变量提升与函数提升</p>
            <p>声明了同名的一个变量和函数，函数提升的优先级大于变量</p>
        </>
    },
    {
        Q: '什么是立即执行函数', K: <><Tag color="magenta">立即执行函数</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <>
            <p>声明一个匿名函数,马上调用这个匿名函数</p>
            <Highlight>{'(function() { console.log(123) })()'}</Highlight>
        </>
    },
    {
        Q: 'instanceof原理-实现', K: <><Tag color="red">instanceof</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <ul>
            <li>1. 用于判断某个实例是否属于某构造函数</li>
            <li>2. 在继承关系中用来判断一个实例是否属于它的父类型或者祖先类型的实例</li>
        </ul>,
        description: <Highlight>{_instanceof}</Highlight>
    },
    {
        Q: 'bind的实现', K: <><Tag color="red">bind</Tag><Tag color="geekblue">JS</Tag></>,
        ans: '创建一个新的函数, 当被调用时，将其 this 关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列',
        description: <Highlight>{bind}</Highlight>
    },
    {
        Q: 'apply和call的作用及区别', K: <><Tag color="red">apply、call</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <ul>
            <li>1. call()方法和apply()方法的作用相同: 改变this指向</li>
            <li>2. 区别在于接收参数的方式不同: apply-数组、call-逐个列举</li>
        </ul>,
        description: <>
            <Highlight>{call}</Highlight>
            <Highlight>{apply}</Highlight>
        </>
    },
    {
        Q: 'new操作符具体做了什么', K: <><Tag color="red">new</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <ul><li>1.创建一个空对象</li><li>2.链接到原型</li><li>3.绑定this值(让Func中的this指向obj，并执行Func的函数体。)</li>
            <li>4.返回新对象</li></ul>,
        description: <Highlight>{createNew}</Highlight>
    },
    {
        Q: '0.1+0.2为什么不等于0.3', K: <><Tag color="orange">浮点数</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <ul>
            <li>JS内部所有的计算都是以二进制方式计算的。 所以运算 0.1+ 0.2 时要先把 0.1和 0.2 从十进制转成二进制</li>
            <li>现代浏览器中是用浮点数形式的二进制来存储二进制</li>
            <li>0.1+0.2 的计算过程中发生了两次精度丢失。第一次是在 0.1 和 0.2 转成双精度二进制浮点数时，由于二进制浮点数的小数位只能存储52位，导致小数点后第53位的数要进行为1则进1为0则舍去的操作，从而造成一次精度丢失。</li>
            <li>第二次在 0.1 和 0.2 转成二进制浮点数后，二进制浮点数相加的过程中，小数位相加导致小数位多出了一位，又要让第53位的数进行为1则进1为0则舍去的操作，又造成一次精度丢失。最终导致 0.1+0.2 不等于0.3</li>
            <li><Highlight>Math.round(Math.pow(10, m) * number) / Math.pow(10, m)</Highlight></li>
        </ul>
    },
    {
        Q: '谈下事件循环机制', K: <><Tag color="lime">事件循环</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <ul>
            <li>JavaScript代码的执行过程中，除了依靠函数调用栈来搞定函数的执行顺序外，还依靠任务队列(task queue)来搞定另外一些代码的执行。整个执行过程，我们称为事件循环过程</li>
            <li>一个线程中，事件循环是唯一的，但是任务队列可以拥有多个。任务队列又分为macro-task(宏任务)与micro-task(微任务)，在最新标准中，它们被分别称为task与jobs</li>
            <li><Link to='/js/EventLoop'>详解</Link></li>
        </ul>
    },
    {
        Q: '实现一个promise', K: <><Tag color="green">异步Promise</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <ul>
            <li>遵循 Promises/A+ 方案</li>
            <li>promise 本身相当于一个状态机，拥有三种状态: pendding、fulfilled、rejected</li>
            <li>promise 对象初始化时的状态是 pending，调用了 resolve 后会将 promise 的状态扭转为 fulfilled，调用 reject 后会将 promise 的状态扭转为 rejected，这两种扭转一旦发生便不能再扭转该 promise 到其他状态</li>
            <li>promise 对象原型上有一个 then 方法，then 方法会返回一个新的 promise 对象，并且将回调函数 return 的结果作为该 promise resolve 的结果，then 方法会在一个 promise 状态被扭转为 fulfilled 或 rejected 时被调用。then 方法的参数为两个函数，分别为 promise 对象的状态被扭转为 fulfilled 和 rejected 对应的回调函数</li>
        </ul>,
        description: <Highlight>{promise}</Highlight>
    },
    {
        Q: '说下generator原理', K: <><Tag color="green">异步generator</Tag><Tag color="geekblue">JS</Tag></>,
        ans: <ul>
            <p>「Generator实现的核心在于上下文的保存，函数并没有真的被挂起，每一次yield，其实都执行了一遍传入的生成器函数，只是在这个过程中间用了一个context对象储存上下文，使得每次执行生成器函数的时候，都可以从上一个执行结果开始执行，看起来就像函数被挂起了一样」</p>
            <li>定义的function*生成器函数被转化分为三大块:
                <ul>
                    <li>1. gen$(_context)由yield分割生成器函数代码而来</li>
                    <li>2. context对象用于储存函数执行上下文</li>
                    <li>3. invoke()方法定义next()，用于执行gen$(_context)来跳到下一步s</li>
                </ul>
            </li>
            <li>当我们调用g.next()，就相当于调用invoke()方法，执行gen$(_context)，进入switch语句，switch根据context的标识，执行对应的case块，return对应结果</li>
            <li>当生成器函数运行到末尾(没有下一个yield或已经return)，switch匹配不到对应代码块，就会return空值，这时g.next()返回{`{value: undefined, done: true}`}</li>
        </ul>,
        description: <Highlight>{gen}</Highlight>
    },
    {
        Q: 'promise实现async/await', K: <><Tag color="green">promise</Tag><Tag color="geekblue">JS</Tag></>,
        ans: 'Promise.then()嵌套',
        description: <ul>
            <li><Highlight>{promiseAsync1}</Highlight></li>
            <li><Highlight>{promiseAsync2}</Highlight></li>
        </ul>
    },
]
export const dataDom = [
    {
        Q: '对DOM树的理解', K: <Tag color="#2db7f5">DOM</Tag>,
        ans: <ul>
            <p>DOM(Document Object Model)即文档对象模型，是W3C制定的标准接口规范，是一种处理HTML和XML文件的标准API</p>
            <li>元素(element): 文档中的都有标签都是元素，元素可以看成是对象</li>
            <li>节点(node): 文档中都有的内容都是节点: 标签，属性，文本</li>
            <li>文档(document): 一个页面就是一个文档</li>
            <li>这三者的关系是: 文档包含节点，节点包含元素</li>
        </ul>
    },
    {
        Q: 'DOM事件模型', K: <Tag color="#2db7f5">DOM</Tag>,
        ans: '事件冒泡(从下向上)、事件捕获(从上向下)'
    },
    {
        Q: '描述下浏览器从输入网址到页面展现的整个过程', K: <Tag color="#f50">浏览器</Tag>,
        ans: <ul>
            <a href="https://github.com/skyline75489/what-happens-when-zh_CN">详细解释</a>
            <li>解析URL</li>
            <li>检查 HSTS 列表: 浏览器检查自带的“预加载 HSTS(HTTP严格传输安全)”列表，这个列表里包含了那些请求浏览器只使用HTTPS进行连接的网站(预防 downgrade attack 的威胁)</li>
            <li>DNS查询: 浏览器检查域名是否在缓存当中，如果没有向DNS服务器发送一条查询请求，返回网址的IP地址</li>
            <li>TCP与服务器建立连接</li>
            <li>TLS 握手: 生成对称密钥</li>
            <li>服务器返回资源</li>
            <li>解析 —— HTML(对 HTML 文档进行解析，生成解析树(DOM树))，CSS(CSS文件都被解析成一个样式表对象(StyleSheet object))，JS</li>
            <li>渲染 —— 构建 DOM 树 → 渲染 → 布局 → 绘制</li>
        </ul>,
    },
    {
        Q: 'v8垃圾回收机制', K: <Tag color="#f50">浏览器</Tag>,
        ans: '采用了标记清理进行垃圾回收: 有老生代和新生代两种方法',
        description: <>
            <p>栈的内存空间，只保存简单数据类型的内存，由操作系统自动分配和自动释放</p>
            <p>堆空间中的内存，由于大小不固定，系统无法无法进行自动释放，这个时候就需要JS引擎来手动的释放这些内存</p>
            <ul>
                <p>Chrome 垃圾回收算法: </p>
                <li>
                    <p>主垃圾回收器(生存时间久的对象) - Mark-Sweep & Mark-Compact(内存不足以分配时才会采用): 主要负责老生代的垃圾回收。</p>
                    <ul>
                        <li>在标记阶段，遍历堆中所有对象，并标记或者的对象</li>
                        <li>在清理阶段，只清理没被标记的对象。没被标记的失活对象</li>
                    </ul>
                </li>
                <li>
                    <p>副垃圾回收器(生存时间短的对象) - Scavenge: 主要负责新生代的垃圾回收。</p>
                    <ul>
                        <li>当分配对象时先从from对象分配</li>
                        <li>当开始垃圾回收时会检查from空间的存活对象，这些存活对象会被复制到to空间中，非活对象的空间被释放。完成复制后，from和to会进行角色交换。</li>
                        <li>当一个对象多次复制后依然存活，那么它将被认为是存活周期较长的对象，随后它将被移动到老生代中，采用新的算法管理。对象从新生代移动到老生代的过程称为晋升</li>
                        <li>从初始的根对象(window，global)的指针开始，这个根指针对象被称为根集(root set)，从这个根集向下搜索其子节点，被搜索到的子节点说明该节点的引用对象可达，并为其留下标记，然后递归这个搜索的过程，直到所有子节点都被遍历结束，那么没有被标记的对象节点，说明该对象没有被任何地方引用，可以证明这是一个需要被释放内存的对象，可以被垃圾回收器回收。</li>
                    </ul>
                </li>
            </ul>
        </>
    },
    {
        Q: '浏览器缓存策略是怎样的', K: <Tag color="#f50">浏览器</Tag>,
        ans: <ul>
            <li>Web缓存:  是指一个 Web 资源(如 html 页面，图片，js，数据等)存在于 Web 服务器和客户端(浏览器)之间的副本。它可以减少网络延迟，加快页面打开速度，减少网络带宽消耗，降低服务器压力</li>
            <li>HTTP缓存: 1. 强缓存，也称本地缓存；2. 弱缓存，也就是协商缓存
                <ul>
                    <li>强缓存: 浏览器发送请求前，会先去缓存里查看是否命中强缓存，如果命中，则直接从缓存中读取资源，不会发送请求到服务器。否则，进入下一步。</li>
                    <li>协商缓存:  当强缓存没有命中时，浏览器一定会向服务器发起请求。服务器会根据 Request Header 中的一些字段来判断是否命中协商缓存。如果命中，服务器会返回 304 响应，但是不会携带任何响应实体，只是告诉浏览器可以直接从浏览器缓存中获取这个资源。如果本地缓存和协商缓存都没有命中，则直接从服务器加载资源。</li>
                    <li>强缓存相关: Cache-Control、Expries</li>
                </ul>
            </li>
        </ul>
    },
    {
        Q: '浏览器架构(Chrome)', K: <Tag color="#f50">浏览器</Tag>,
        ans: <ul>
            <li>浏览器内核(渲染引擎): 渲染引擎Rendering Engine使用的是WebKit
                <ul>
                    <li>GUI 渲染线程:
                        <ul>
                            <li>HTML Parser: 解析HTML文档，将元素转换为树结构DOM节点，称之为Content Tree</li>
                            <li>CSS Parser: 解析Style数据，包括外部的CSS文件以及在HTML元素中的样式，用于创建另一棵树，调用“Render Tree”</li>
                            <li>Layout过程:  为每个节点计算出在屏幕中展示的准确坐标</li>
                            <li>Painting: 遍历Render Tree，调用UI Backend提供的接口绘制每个节点</li>
                        </ul>
                    </li>
                    <li>JavaScript 引擎线程</li>
                    <li>浏览器定时触发器线程</li>
                    <li>浏览器事件触发线程</li>
                    <li>浏览器 http 异步请求线程</li>
                </ul>
            </li>
            <li>JS解释器: C++实现的V8引擎</li>
            <li>XML Parser:  libXML解析XML，libXSLT处理XSLT</li>
        </ul>
    },
    {
        Q: '渲染合成层是什么', K: <><Tag color="green">渲染合成层</Tag><Tag color="#f50">浏览器</Tag></>,
        ans: <ul>
            <p>浏览器渲染(webkit): 构建DOM树 → 构建CSS树 → 构建Render树 → 布局Render树 → 绘制Render树 → 渲染层合并</p>
            <li>合成层(Compositing Layer): 合成就是将页面的各个部分分成多个层、单独光栅化(浏览器根据文档的结构、每个元素的样式、页面的几何形状和绘制顺序转换为屏幕上的像素的过程)它们并在合成器线程中合成为一个页面的技术</li>
            <li>如何提升为合成层: 设置 transform: translateZ(0)、backface-visibility: hidden 、will-change(opacity、transform、top、left、bottom、right)、video、canvas、iframe 等元素</li>
            <li>隐式合成: 一个或多个非合成元素应出现在堆叠顺序上的合成元素之上，会被提升为合成层</li>
        </ul>,
    },
    {
        Q: '如何定位内存泄露', K: <Tag color="#f50">浏览器</Tag>,
        ans: <ul>
            <li>内存泄漏是指不再使用的内存，没有被垃圾回收机制回收。当内存泄漏很大或足够频繁时，用户会有所感知: 轻则影响应用性能，表现为迟缓卡顿；重则导致应用奔溃，表现为无法正常使用</li>
            <li>Chrome DevTool Performance: 通过 DevTools 记录页面活动概况，生成可视化分析结果，从时间轴中直观了解内存泄漏情况；利用 DevTools 获取若干次内存快照，检查内存堆栈变化</li>
            <li>Chrome任务管理器: 实时监控内存的使用情况</li>
        </ul>
    },
]
export const dataOptimize = [
    {
        Q: '前端性能优化指标RAIL', K: <><Tag color="green">RAIL</Tag><Tag color="#2db7f5">优化</Tag></>,
        ans: <ul>
            <li>Response: 事件处理最好在50ms内完成
                <ul>
                    <li>复杂的js计算尽可能放在后台，如web worker，避免对用户输入造成阻塞</li>
                    <li>超过50ms的响应，一定要提供反馈，比如倒计时，进度百分比等</li>
                </ul>
            </li>
            <li>Animation: 在10ms内产生一帧
                <ul>
                    <li>在一些高压点上，比如动画，不要去挑战cpu，尽可能地少做事，如: 取offset，设置style等操作。尽可能地保证60帧的体验</li>
                    <li>在渲染性能上，针对不同的动画做一些特定优化</li>
                </ul>
            </li>
            <li>Idle: 最大化空闲时间
                <ul>
                    <li>requestIdleCallback</li>
                    <li>在空闲时间内执行的任务尽量控制在50ms以内，如果更长的话，会影响input handle的pending时间</li>
                    <li>如果用户在空闲时间任务进行时进行交互，必须以此为最高优先级，并暂停空闲时间的任务</li>
                </ul>
            </li>
            <li>Load: 传输内容到页面可交互的时间不超过5秒
                <ul>
                    <li>可以采用 lazy load，code-splitting 等 其他优化 手段，让第一次加载的资源更少</li>
                    <li>禁用渲染阻塞的资源，延后加载</li>
                </ul>
            </li>
        </ul>
    },
    {
        Q: '前端性能优化手段', K: <><Tag color="yellow">方法</Tag><Tag color="#2db7f5">优化</Tag></>,
        ans: <ul>
            <li>加载优化: 减少资源大小、减少请求时间</li>
            <li>渲染优化: CRP(关键渲染路径Critical Rendering Path)优化
                <ul>
                    <li>关键资源的数量: 可能阻止网页首次渲染的资源</li>
                    <li>关键路径长度: 获取所有关键资源所需的往返次数或总时间</li>
                    <li>关键字节: 实现网页首次渲染所需的总字节数，等同于所有关键资源传送文件大小的总和</li>
                </ul>
            </li>
            <li>代码层面: 优化没必要的代码，压缩代码</li>
            <li><Link to="interview/frontend">详细</Link></li>
        </ul>,
    },
    {
        Q: '重排和重绘是什么，有什么区别', K: <><Tag color="red">重绘重排</Tag><Tag color="#2db7f5">优化</Tag></>,
        ans: <ul>
            <li>重排(Reflow):
                <ul><li>当涉及到DOM节点的布局属性发生变化时，就会重新计算该属性，浏览器会重新描绘相应的元素，此过程叫 回流(Reflow)</li></ul>
            </li>
            <li>重绘(Repaint):
                <ul><li>当影响DOM元素可见性的属性发生变化(如 color) 时, 浏览器会重新描绘相应的元素, 此过程称为 重绘(Repaint)。因此重排必然会引起重绘</li></ul>
            </li>
            <li>区别: 重绘是部分节点发生变化，但不影响布局，只需要重新计算节点在屏幕中的绝对位置并渲染。重排是渲染树的一部分必须更新，而且节点发生变化，重构渲染树</li>
            <li>如何避免重绘重排:
                <ul>
                    <li>合并样式修改</li>
                    <li>批量操作DOM(脱离标准文档流操作)</li>
                    <li>避免多次触发布局</li>
                </ul>
            </li>
        </ul>,
    },
    {
        Q: '如何减少白屏的时间', K: <><Tag color="gold">首屏优化</Tag><Tag color="#2db7f5">优化</Tag></>,
        ans: <ul>
            <li>cdn分发(减少传输距离)。通过在多台服务器部署相同的副本，当用户访问时，服务器根据用户跟哪台服务器距离近，来决定哪台服务器去响应这个请求</li>
            <li>后端在业务层的缓存。数据库查询缓存是可以设置缓存的，这个对于处于高频率的请求很有用。浏览器一般不会对content-type: application/json；的接口进行缓存，所以有时需要我们手动地为接口设置缓存。比如一个用户的签到状态，它的缓存时间可以设置到明天之前</li>
            <li>静态文件缓存方案。这个最常看到。现在流行的方式是文件hash+强缓存的一个方案。比如hash+ cache control: max-age=1年</li>
            <li>前端的资源动态加载: 1.路由动态加载;2.组件动态加载;3.图片懒加载(img标签 loading=lazy;</li>
            <li>利用好script标签的async和defer，减少白屏时间可以优化关键渲染路径</li>
            <li>合并请求</li>
            <li>页面使用骨架屏</li>
            <li>使用ssr渲染</li>
            <li>引入http2.0。http2.0对比http1.1，最主要的提升是传输性能，在接口小而多的时候会更加明显</li>
            <li>利用好http压缩</li>
        </ul>,
    },
    {
        Q: '加载大量的图片，如何去优化呢？', K: <><Tag color="cyan">图片</Tag><Tag color="#2db7f5">优化</Tag></>,
        ans: <ul>
            <li>图片懒加载: <Highlight>{`offsetTop < scrollTop + clintHeight`}</Highlight>时设置data-src替换src</li>
            <li>使用CSSsprite，SVGsprite，Iconfont、Base64等</li>
            <li>如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩的特别厉害的缩略图，以提高用户体验</li>
            <li>图片压缩</li>
            <li>实用css、js、ajax技术进行图片预加载</li>
            <li>合并请求</li>
            <li>页面使用骨架屏</li>
            <li>使用ssr渲染</li>
            <li>引入http2.0。http2.0对比http1.1，最主要的提升是传输性能，在接口小而多的时候会更加明显</li>
            <li>利用好http压缩</li>
        </ul>,
    },

    {
        Q: '动画性能如何优化', K: <><Tag color="blue">动画</Tag><Tag color="#2db7f5">优化</Tag></>,
        ans: <ul>
            <li>精简DOM，合理布局: </li>
            <li>使用transform代替lef、top减少不必要的重排</li>
            <li>开启硬件加速: transform: translateZ(0)，</li>
            <li>避免浏览器创建不必要的图层</li>
            <li>减少不必要的JS动画，使用性能更友好的requesetAnimationFrame</li>
        </ul>,
    },

]
export const dataModule = [
    {
        Q: '前端模块化机制有哪些', K: <Tag color="cyan">模块化</Tag>,
        ans: <ul>
            <Link to="/js/Moudles">详解</Link>
            <li>CommonJS:  代码运行在模块作用域。只加载一次(同步加载)，一次之后就会被缓存下来。输出值的拷贝。运行时加载</li>
            <li>ES6模块化: 静态化。编译时就确定模块的依赖关系、以及输入输出的变量。输出的是值的引用</li>
            <li>AMD: 非同步加载模块，允许指定回调函数。运行时加载。依赖前置</li>
            <li>CMD: 异步加载。就近依赖</li>
            <li>UMD: 兼容了commonjs和amd规范</li>
        </ul>,
        description: <ul>
            <li>CommonJS:
                <ul>
                    <li>特点: 代码运行在模块作用域。只加载一次，一次之后就会被缓存下来。加载顺序按照代码中的顺序</li>
                    <li>语法:
                        <Highlight>导出 module.export = value; or export.xx = value; 引入 require(xxx)</Highlight>
                    </li>
                    <li>加载机制: 输入的被输出的值的拷贝。输出后，模块内部变化不影响输出的值</li>
                </ul>
            </li>
            <li>ES6模块化:
                <ul>
                    <li>特点: 静态化。编译时就确定模块的依赖关系、以及输入输出的变量。Common JS和AMD时运行时确认</li>
                    <li>语法: <Highlight>导出export  引入import</Highlight></li>
                    <li>ES6 模块与 CommonJS 模块的差异: 1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用；2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口</li>
                    <li>运行机制: ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块</li>
                </ul>
            </li>
            <li>AMD:
                <ul>
                    <li>特点: 非同步加载模块，允许指定回调函数。浏览器环境，要从服务器端加载模块，就必须采用非同步模式</li>
                    <li>语法: <Highlight>{`导出 define(function() { return }) or define(['m1','m2'] , function(m1, m2) { return });`}</Highlight>
                        <Highlight>{`引入 require(['m1','m2'] , function(m1, m2) { 使用 })`}</Highlight>
                    </li>
                    <li>CommonJS一般用于服务端，AMD一般用于浏览器客户端</li>
                    <li>CommonJS和AMD都是运行时加载</li>
                </ul>
            </li>
            <li>CMD:
                <ul>
                    <li>CMD规范专门用于浏览器端，模块的加载是异步的，模块使用时才会加载执行。CMD规范整合了CommonJS和AMD规范的特点。在 Sea.js 中，所有 JavaScript 模块都遵循 CMD模块定义规范。</li>
                    <li>与AMD规范的主要区别在于定义模块和依赖引入的部分</li>
                    <li>AMD需要在声明模块的时候指定所有的依赖，通过形参传递依赖到模块内容中</li>
                    <li>与AMD相比，CMD推崇依赖就近，AMD推崇依赖前置。</li>
                </ul>
            </li>
            <li>UMD: umd所谓的通用，就是兼容了commonjs和amd规范，这意味着无论是在commonjs规范的项目中，还是amd规范的项目中，都可以直接引用umd规范的模块使用</li>
        </ul>
    },
]
export const dataWebpack = [
    {
        Q: 'tree shaking是什么，有什么作用，原理是什么', K: <><Tag color="volcano">tree shaking</Tag><Tag color="blue">webpack</Tag></>,
        ans: <ul>
            <li>解释: Tree Shaking 是一种通过消除最终文件中未使用的代码来优化体积的方法</li>
            <li>作用: 当 Javascript 项目达到一定体积时，将代码分成模块会更易于管理。但是，当这样做时，我们最终可能会导入实际上未使用的代码</li>
            <li>tree-shaking的消除原理是依赖于ES6的模块特性(只能作为模块顶层的语句出现、import 的模块名只能是字符串常量、import binding 是 immutable的)</li>
            <li>开启Tree Shaking: 1.使用 ESM 规范编写代码、2.配置 optimization.usedExports 为 true</li>
        </ul>,
    },
    {
        Q: 'uglify原理的是什么', K: <><Tag color="volcano">uglify</Tag><Tag color="blue">webpack</Tag></>,
        ans: <ul>
            <li>原理: uglify完成了javascript的DCE(dead code elimination)
                <ul>
                    <li>Make 阶段，收集模块导出变量并记录到模块依赖关系图 ModuleGraph 变量中</li>
                    <li>Seal 阶段，遍历 ModuleGraph 标记模块导出变量有没有被使用</li>
                    <li>生成产物时，若变量没有被其它模块使用则删除对应的导出语句</li>
                </ul>
            </li>
            <li>副作用: uglify不进行程序流分析，所以不能排除有可能有副作用的代码(未引用的类)</li>
        </ul>,
    },
    {
        Q: 'babel是什么，怎么做到的', K: <><Tag color="volcano">babel</Tag><Tag color="blue">webpack</Tag></>,
        ans: <ul>
            <li>解释: babel是一个主要用于将ES2015+版本的代码编译成向下兼容js版本的编译器</li>
            <li>如何做:
                <ul>
                    <li>第一步-解析(parser): 把源代码编译成AST(babel/parser)
                        <ul>
                            <li>词法分析: 对输入的字符序列做标记化(tokenization)操作</li>
                            <li>语法分析: 处理标记与标记之间的关系，最终形成一颗完整的 AST 结构</li>
                        </ul>
                    </li>
                    <li>第二步-转换(transformer): 使用 @babel/traverse 对AST进行深度优先遍历，调用插件(plugin)对关注节点的处理函数，按需增删改AST节点</li>
                    <li>第三步-生成(generator): 默认使用 @babel/generator 将上一阶段处理后的 AST 转换为代码字符串</li>
                </ul>
            </li>
            <li>编写 Babel 插件: Babel 插件的写法是借助访问者模式(Visitor Pattern)对关注的节点定义处理函数</li>
        </ul>,
    },
    {
        Q: 'babel和polyfill的区别', K: <><Tag color="volcano">babel</Tag><Tag color="blue">webpack</Tag></>,
        ans: <ul>
            <li>Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API</li>
            <li>polyfill(垫片) 编译浏览器不支持的API和</li>
        </ul>
    },
    {
        Q: 'webpack工作流程是怎样的', K: <Tag color="blue">webpack</Tag>,
        ans: <ul>
            <p><Link to="/interview/webpack">详解</Link></p>
            <a target="_blank" href="https://zhuanlan.zhihu.com/p/363928061">详解2</a>
            <li>1. 初始化参数: 从配置文件和shell语句中读取并合并参数，得出最终参数</li>
            <li>2. 开始编译: 从第一步得到的参数<b>初始化Compiler对象</b>，<b>加载所有配置的插件(Plugins)</b>，执行<b>Compiler对象的run方法</b>开始执行编译</li>
            <li>3. 确定入口: 根据<b>配置中的Entry找到所有的入口文件</b></li>
            <li>4. 编译模块: 从入口文件开始，<b>调用所有配置的Loader对模块进行翻译</b>，再找出该模块依赖的模块，再<b>递归</b>本步骤，直到所有入口依赖的文件都经过本步骤的处理</li>
            <li>5. 完成模块编译: 在第四部经过Loader翻译完所有模块后，得到<b>每个模块被翻译后的最终内容和它们之间的依赖关系</b></li>
            <li>6. 输出资源: <b>根据Entry和模块之间的依赖关系</b>，组装成一个个包含多个模块的Chunk，再把<b>每个Chunk转换成一个单独的文件加入输出列表</b>，这步是可以修改输出内容的最后机会</li>
            <li>7. 输出完成: 在确定好输出内容后，<b>根据配置确定输出的路径和文件名，把文件写入到文件系统</b></li>
        </ul>,
    },
    {
        Q: 'webpack plugin', K: <><Tag color="volcano">plugin</Tag><Tag color="blue">webpack</Tag></>,
        ans: <ul>
            <li>从形态上看，插件通常是一个带有 apply 函数的类: <Highlight>{`Class Plugin { apply(compiler){ } }`}</Highlight></li>
            <li>apply 函数运行时会得到参数 compiler ，以此为起点可以调用 hook 对象注册各种钩子回调</li>
        </ul>,
    },
    {
        Q: 'webpack loader', K: <><Tag color="volcano">loader</Tag><Tag color="blue">webpack</Tag></>,
        ans: <ul>
            <li>Loader 最核心的只能是实现内容转换器 —— 将各式各样的资源转化为标准 JavaScript 内容格式</li>
        </ul>,
    },
    {
        Q: 'hash、chunkhash、contenthash', K: <Tag color="blue">webpack</Tag>,
        ans: <ul>
            <p><Link to="/interview/webpack">详解</Link></p>
            <a target="_blank" href="https://zhuanlan.zhihu.com/p/363928061">详解2</a>
            <li>1. 初始化参数: 从配置文件和shell语句中读取并合并参数，得出最终参数</li>
            <li>2. 开始编译: 从第一步得到的参数<b>初始化Compiler对象</b>，<b>加载所有配置的插件(Plugins)</b>，执行<b>Compiler对象的run方法</b>开始执行编译</li>
            <li>3. 确定入口: 根据<b>配置中的Entry找到所有的入口文件</b></li>
            <li>4. 编译模块: 从入口文件开始，<b>调用所有配置的Loader对模块进行翻译</b>，再找出该模块依赖的模块，再<b>递归</b>本步骤，直到所有入口依赖的文件都经过本步骤的处理</li>
            <li>5. 完成模块编译: 在第四部经过Loader翻译完所有模块后，得到<b>每个模块被翻译后的最终内容和它们之间的依赖关系</b></li>
            <li>6. 输出资源: <b>根据Entry和模块之间的依赖关系</b>，组装成一个个包含多个模块的Chunk，再把<b>每个Chunk转换成一个单独的文件加入输出列表</b>，这步是可以修改输出内容的最后机会</li>
            <li>7. 输出完成: 在确定好输出内容后，<b>根据配置确定输出的路径和文件名，把文件写入到文件系统</b></li>
        </ul>,
    },
]
export const dataBase = [
    {
        Q: '进程和线程的区别', K: <Tag color="gold">计算机基础</Tag>,
        ans: <ul>
            <li>1.进程是资源(CPU、内存等)分配的基本单位；线程是进程的一个实体，是独立运行和独立调度的基本单位(CPU上真正运行的是线程</li>
            <li></li>
        </ul>,
    },
    {
        Q: '进程、线程通信方式', K: <Tag color="blue">计算机基础</Tag>,
        ans: <ul>
            <li>同一进程下的线程共享全局变量、静态变量等数据</li>
            <li>进程之间的通信需要以通信的方式(Inter Process Communication，IPC)进行</li>
        </ul>,
        description: <div>
            <p>进程是资源分配的基本单位；线程是程序执行的基本单位</p>
            <p>进程拥有自己的资源空间，每启动一个进程，系统就为它分配地址空间</p>
            <p>线程与CPU资源分配无关，多个线程共享同一进程的资源，使用相同地址空间</p>
            <p>一个进程可以包含若干线程</p>
            <p>系统通信: </p>
            <ul>
                <li>进程通信: 通过管道、套接字、信号交互、共享内存、消息队列进行通信</li>
                <li>线程通信: 线程本身共享内存，指针指向同一个内容</li>
            </ul>
            <p>node通信: </p>
            <ul>
                <li>node中提供child_process模块来创建子进程(child_process.fork())</li>
                <li>cluster.fork()是child_process.fork()的上层实现，cluster的好处是可以监听共享端口</li>
                <li>node进程的通信主要是通在主从(子)进程之间进行通信，子进程之间无法直接通信，只能通过主进程转发</li>
                <li>主进程与子进程的通信是通过IPC(Inter Process Communication)进行通信，IPC基于底层libuv根据不同操作系统实现(Windows: 命名管道name pie, linux: Unix Domain Socket)</li>
            </ul>
            <p>node中cluster是怎样开启多进程的，并且一个端口可以被多个进程监听吗</p>
            <ul>
                <li>通过require(&apos;os&apos;).cpus().length获取当前机器上CPU的核数，然后根据CPU核数cluster.fork()创建相应数量的子进程</li>
                <li>操作系统中，不同的进程去共享相同端口是不允许的</li>
                <li>cluster模块中通过主进程自身TCP Server绑定端口，并将TCP Server的具柄通过IPC通道传递给子进程，相当于子进程接管了TCP Server</li>
            </ul>
        </div>
    },
    {
        Q: 'https加密过程', K: <Tag color="purple">https</Tag>,
        ans: <ul>
            <li>https经由http进行通信，但利用了SSL/TLS来加密数据包</li>
            <li>1. 客户端请求服务器，服务器返回一个CA证书(包含网站信息、CA证书由CA机构的公钥私钥加密)，证书中包含公钥A，服务器保留私钥A</li>
            <li>2. 客户端接收到CA证书之后，验证合法性(递归判断，判断到系统内置或浏览器配置好的根证书)</li>
            <li>3. 客户端生成一个用于对称加密的私钥B，通过公钥A去加密私钥B，传给服务器</li>
            <li>4. 服务器用私钥A解开用公钥A加密的私钥B</li>
            <li>5. 后续服务器和客户端的通讯都通过密钥B来加密解密</li>
        </ul>,
    },
    {
        Q: 'http2.0做了哪些改进', K: <Tag color="purple">https</Tag>,
        ans: <ul>
            <li>多路复用: 允许同一与名下同时通过单一的 HTTP/2 连接发起多重的请求-响应消息</li>
            <li>二进制分帧: 将所有传输的信息分割为更小的消息和帧(frame),并对它们采用二进制格式的编码</li>
            <li>服务端推送: 服务端推送是一种在客户端请求之前发送数据的机制</li>
            <li>头部压缩</li>
        </ul>,
    },
    {
        Q: 'http3.0做了哪些改进', K: <Tag color="purple">https</Tag>,
        ans: <ul>
            <li>使用基于UDP改造一个具有TPC协议优点的新协议: QUIC协议</li>
            <li>队头阻塞问题: QUIC协议是基于UDP协议实现的，在一条链接上可以有多个流，流与流之间是互不影响的，当一个流出现丢包影响范围非常小，从而解决队头阻塞问题</li>
            <li>服务端推送: 服务端推送是一种在客户端请求之前发送数据的机制</li>
            <li>头部压缩</li>
        </ul>,
    },
    {
        Q: '大文件上传/下载', K: <Tag color="geekblue">Blob</Tag>,
        ans: <ul>
            <li>Blob 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 ReadableStream 来用于数据操作</li>
            <li>利用 Blob.prototype.slice 切片</li>
            <li>获取切片md5 作为唯一标识</li>
            <li>利用Buffer.concat([b1,b2])合并切片</li>
        </ul>
    },
    {
        Q: '什么场景下会用策略模式', K: <Tag color="geekblue">设计模式</Tag>,
        ans: <ul>
            <li>当出现很多 if else 或者 switch 的时候，就可以考虑是否能使用策略模式了</li>
            <li>定义: 定义一系列的算法，然后传入参数，根据不同的参数来执行不同的算法规则</li>
        </ul>,
    },
    {
        Q: '发布订阅模式', K: <Tag color="geekblue">设计模式</Tag>,
        ans: <ul>
            <li>定义: 定义了对象间的一种一对多的依赖关系。当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知</li>
            <li><Link to="/examination/program">code</Link></li>
        </ul>,
    },
    {
        Q: '什么是高阶组件，请举例说明', K: <Tag color="purple">高阶组件(HOC)</Tag>,
        ans: <ul>
            <li>一个函数 接受一个或多个函数作为参数或者返回一个函数 就可称之为 高阶函数</li>
            <li>例: 函数防抖，函数节流，bind函数，函数柯里化，map，Promise的then函数</li>
        </ul>
    },

]

export const dataAlgo = [
    {
        Q: '实现一个斐波那契数列: [0, 0, 1, 2, 3, 5...]', K: <Tag color="orange">DP</Tag>,
        ans: <ul>
            <li>解1:<Highlight>{`let dp = [0, 1]; for n,i = 2,i < n ; dp[i] = dp[i - 1 ]  + dp[n - 2]; return dp[n]`}</Highlight></li>
            <li>解2:<Highlight>{`let p = 0, q = 0, r = 1; for n,i = 2,i <= n ; p = q, q = r, r = p + q; return r`}</Highlight></li>
            <li><Link to="/algorithm/dp#fib1">剑指 Offer 10- I. 斐波那契数列</Link></li>
        </ul>
    },
    {
        Q: '合并二维有序数组成一维有序数组:[[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3], [4, 5, 6]]', K: <Tag color="orange">归并</Tag>,
        ans: <ul>
            <li>解1:<Highlight>{`[...arr.flat(Infinity).sort((a, b) => a - b)]`}</Highlight></li>
            <li>解2 归并排序: 分治法，分解成小问题去解决
                <ul>
                    <li>外循环: <Highlight>{`while(arr.length > 1) { a = arr.shift(); b = arr.shift(); arr.push(merge(a, b))  } return arr[0]`}</Highlight></li>
                    <li>内循环: <Highlight>{`while(a.length > 0 && b.length > 0){ a[0] < b[0] ? res.push(a.shift()) : res.push(b.shift()) } return res.concat(a, b)`}</Highlight></li>
                </ul>
            </li>
            <li><Link to="/algorithm/array#mergeSort">合并二维有序数组成一维有序数组</Link></li>
        </ul>
    },
    {
        Q: '反转链表', K: <Tag color="orange">递归/遍历</Tag>,
        ans: <ul>
            <li>递归: <Highlight>(!head || !head.next) return head; next = reverse(head.next); head = next.next;head.next = null</Highlight></li>
            <li>遍历: <Highlight>{`prev = null, cur = head; while(cur){ next = cur.next; cur.next = pre; pre = cur; cur = next } retrun cur`}</Highlight></li>
            <li><Link to="/algorithm/listNode#reverseList">206. 反转链表</Link></li>
        </ul>
    },
    {
        Q: '判断链表是否有环', K: <Tag color="orange">哈希/快慢指针</Tag>,
        ans: <ul>
            <li>hash解: <Highlight>{`while(head){ set.has(head) ? true : set.add(head); head = head.next }`}</Highlight></li>
            <li>快慢指针: <Highlight>{`while(fast && fast.next){ slow = slow.next; fast = fast.next.next; slow === fast return true }`}</Highlight></li>
            <li><Link to="/algorithm/listNode#hasCycle">141. 环形链表</Link></li>
        </ul>
    },
    {
        Q: '找出数组中和为sum的n个数', K: <Tag color="orange">哈希/双指针</Tag>,
        ans: <ul>
            <li>hash解: <Highlight>key = target - n; .get(key) - 1 ? .set(key, .get(key) - 1) : .delete(key); .set(n, .get(key)|| 0 + 1)</Highlight></li>
            <li>双指针: <Highlight>{`while(fast && fast.next){ slow = slow.next; fast = fast.next.next; slow === fast return true }`}</Highlight></li>
            <li><Link to="/algorithm/array#pairSums">面试题 16.24. 数对和</Link></li>
        </ul>
    },
    {
        Q: '求解平方根', K: <Tag color="orange">二分法</Tag>,
        ans: <ul>
            <li><Highlight>Math.floor(Math.pow(x, 0.5)) or Math.floor(x ** 0.5)</Highlight></li>
            <li>二分法: <Highlight>{`l = 0; r = x; while(l <= r); mid = l + ((r - l) >> 1); mid * mid <= x ? l = mid + 1 : r = mid - 1; return r`}</Highlight></li>
            <li><Link to="/algorithm/math#mySqrt">69. Sqrt(x)</Link></li>
        </ul>
    },
    {
        Q: '爬楼梯问题', K: <Tag color="orange">DP</Tag>,
        ans: <ul>
            <li>滚动数组<Highlight>{`n < 2 return n; p = 0,q = 0; for i = 2, i <= n; r = p + q, p = q, q = r; return q`}</Highlight></li>
            <li>DP: <Highlight>{`n < 2 return n; dp = [0, 1]; for i = 2, i <= n; dp[i] = dp[i - 2] + dp[i - 1]; return dp[i]`}</Highlight></li>
            <li><Link to="/algorithm/dp#climbStairs">70.爬楼梯</Link></li>
        </ul>
    },
    {
        Q: '判断括号字符串是否有效', K: <Tag color="orange">计数</Tag>,
        ans: <ul>
            <li>计数<Highlight>{`for i = 0,i++; r++, (i + 1 - r < r) return false; for i = n - 1,i--; l++, (n - i - l < l) return false; return true`}</Highlight></li>
            <li><Link to="/algorithm/string#canBeValid">2116.判断一个括号字符串是否有效</Link></li>
        </ul>
    },
    {
        Q: '返回数组中第k个最大元素', K: <Tag color="orange">排序</Tag>,
        ans: <ul>
            <li>理想是堆排序，暂缓</li>
            <li>快排<Highlight>retrun quick(nums)[k]</Highlight></li>
            <li><Link to="/algorithm/array#findKthLargest">215.数组中的第K个最大元素</Link></li>
        </ul>
    },
    {
        Q: '具有给定数值的最小字符串', K: <Tag color="orange">贪心</Tag>,
        ans: <ul>
            <li>贪心1: <Highlight>{`res = Array(n).fill('a'); cur = n - 1; remain = k - n; while(remain) { remain > 25 ? res[cur] = 'z'; cur--;remain - 25 : res[cur] = fromCharCode(97 + remain); remain = 0 }`}</Highlight></li>
            <li>贪心2: <Highlight>{`k -= n;cur = 0; for(let i = n - 1; i >= 0;i--, k -= cur){ cur = Math.min(25, k); res = fromCharCode(97 + cur) }`}</Highlight></li>
            <li><Link to="/algorithm/string#getSmallestString">663.具有给定数值的最小字符串</Link></li>
        </ul>
    },
    {
        Q: '二叉树: 最大深度', K: <Tag color="orange">二叉树</Tag>,
        ans: <ul>
            <li>递归: <Highlight>{`ans = 0; function traversal(node, depth){ if(!node) return; if(depth > ans) ans = depth;  node.left && traversal(node.left, depth + 1); node.right && traversal(node.right, depth + 1)}; traversal(node, 1); return ans`}</Highlight></li>
            <li><Link to="/algorithm/binaryTree#maxDepth">104.二叉树的最大深度</Link></li>
        </ul>
    },
    {
        Q: '二叉树: 最小深度', K: <Tag color="orange">二叉树</Tag>,
        ans: <ul>
            <li>递归: <Highlight>if(!r) return 0; if(!r.L || !r.R) return 1; ans = Number.MAX_SAFE_INTEGER; r.L && M.min(ans, minDepth(ans, r.L)); r.R && M.min(ans, r.R) return ans + 1</Highlight></li>
            <li><Link to="/algorithm/binaryTree#minDepth">111.二叉树的最小深度</Link></li>
        </ul>
    },
    {
        Q: '返回1 - n的所有对称数字', K: <Tag color="orange">filter、keys()</Tag>,
        ans: <div><Highlight>{`[...Array.from(Array(n).keys())].filter(n => String(n).length > 1 && String(n) === String(n).split('').reverse().join(''))`}</Highlight></div>
    },
    {
        Q: '移动0，把数组中的0移动后面，减少操作，不实用额外数组', K: <Tag color="orange">splice、i--、j++</Tag>,
        ans: <div><Highlight>{`for(let i = 0, j = 0; i < len - j; i++) n === 0 && nums.push(0); nums.splice(i, 1);i--;j++`}</Highlight></div>
    },
]


export const dataProgram = [
    {
        Q: '实现一个trim方法', K: <Tag color="volcano">正则</Tag>,
        ans: <ul>
            <li><Highlight>{`s.replace(/^\\s*|\\s*$/g)`}</Highlight></li>
            <li><Link to="/examination/nativeMethod#string">String.trim</Link></li>
        </ul>
    },
    {
        Q: '实现 add(1)(2)(3)', K: <Tag color="volcano">柯里化</Tag>,
        ans: <ul>
            <li>单入参: <Highlight>{`return (n) => Number.isInteger(n) ? curry.call(this, ans + n) : ans`}</Highlight></li>
            <li>多入参: <Highlight>{`rest = [...rest].reduce(); return (...args) => args.length ? curry.call(this, rest += [...args].reduce()) : rest`}</Highlight></li>
            <li>不需要()执行(alert下才能调用): <Highlight>{`rest = [...rest]; add = (...args) => rest.push(...args), return curry.call(this, rest)); add.toString = () => rest.reduce(); return add`}</Highlight></li>
            <li><Link to="/examination/program#curry">柯里化</Link></li>
        </ul>
    },
    {
        Q: '拍平多维数组', K: <Tag color="volcano">数组</Tag>,
        ans: <ul>
            <li>rest: <Highlight>{`while(arr.some(i => isArray(i))) { arr = [].concat(...arr) }; return arr`}</Highlight></li>
            <li>遍历递归: <Highlight>{`forEach(i => isArray(i) ? res = [...res, ...flat(i, depth - 1)]) : res.push(i)`}</Highlight></li>
            <li>reduce递归: <Highlight>{`arr.reduce((acc, cur) => isArray(cur) ? [...acc, ...flat(cur)] : [...acc, cur])`}</Highlight></li>
            <li><Link to="/examination/nativeMethod#array">Array.flat</Link></li>
        </ul>
    },
    {
        Q: '实现防抖函数', K: <Tag color="volcano">防抖</Tag>,
        ans: <ul>
            <li>基础<Highlight>{`return(...args) => timer && clear(timer); setTimeout(() => fn.apply(this, args), delay)`}</Highlight></li>
            <li>增加immediate参数: <Highlight>{`return(...args)=> timer && clear(timer);if(immediate && !timer) fn.apply(this, args); setTimeout(() => fn.apply...)`}</Highlight></li>
            <li>leading、trailing<Highlight>{`!leading && !trailing return null; return(...args)=> (leading && !timer) ? fn.apply(this,args) : lastArgs = args; timer = setTimeout(() => (trailing && lastArgs) fn.apply(this, args); timer = null)`}</Highlight></li>
            <li><Link to="/examination/program#deboucethrottle">防抖</Link></li>
        </ul>
    },
    {
        Q: '实现节流函数', K: <Tag color="volcano">节流</Tag>,
        ans: <ul>
            <li>基础: <Highlight>{`(args)=> if(wait) return;wait = true;setTimeout(() => wait = false; fn.apply...)`}</Highlight></li>
            <li>第一次会执行: <Highlight>{`(args)=> !wait ? { wait = true; fn.apply(...); setTimeout(() => wait = false;if(last) fn.apply()) } : last = args`}</Highlight></li>
            <li>leading、trailing: <ul>
                <li><Highlight>{`timerFn = { timer = setTimeout(()=> if(trail && last) {fn.apply(...); timer && timer = null;last = null; timerFn() }else wait = false) };`}</Highlight></li>
                <li><Highlight>{`return (args)=> if(!wait){ wait = true;if(lead) fn.apply(...); timerFn()} else last = args`}</Highlight></li>
            </ul></li>
            <li><Link to="/examination/nativeMethod#deboucethrottle">节流</Link></li>
        </ul>
    },
    {
        Q: '节流API请求', K: <Tag color="volcano">节流</Tag>,
        ans: <ul>
            <li><Highlight>for..of循环执行， Array(max).fill(Array.from(tasks).entries()).map(run)</Highlight></li>
            <li><Highlight>{`map...retrun Promise => run(); task.then(() => run())`}</Highlight></li>
            <li><Link to="/examination/program#throttlePromises">节流API请求</Link></li>
        </ul>
    },
    {
        Q: '数组去重', K: <Tag color="volcano">数组</Tag>,
        ans: <ul>
            <li>ES6: <Highlight>Array.from(new Set(list))</Highlight></li>
            <li>indexOf/includes: <Highlight>{`for...of { if(res.indexOf(i) < 0) res.push(i) }`}</Highlight></li>
            <li>filter: <Highlight>{`filter => arr.indexOf(i, 0) === value`}</Highlight></li>
        </ul>
    },
    {
        Q: '实现一个模板引擎', K: <Tag color="volcano">模版引擎</Tag>,
        ans: <ul>
            <li>使用 fs.readFile() 来读取文件拿到模板字符串</li>
            <li>字符串拼接替换，让JS语句可执行</li>
            <li>使用new Function(str)执行</li>
            <li>with(data)传入数据</li>
            <li><Link to="/examination/program#template">实现一个模板引擎</Link></li>
        </ul >
    },
    {
        Q: '判断是否合法url', K: <Tag color="volcano">new URL</Tag>,
        ans: <Highlight>{`try{ const link = new URL(url); return true }catch(error){ return false }`}</Highlight>
    },
    {
        Q: '数组转树状结构', K: <Tag color="volcano">哈希</Tag>,
        ans: <Highlight>{`for(let node of list){ map[id] = node; map[id].child = []; if(!id){ res.push(node) }else { if(pId in map) {map[pId].child.push(node)}else { map[pId] = {id: pId,child: []} } } }`}</Highlight>
    },
    {
        Q: 'Promise.all', K: <Tag color="volcano">Promise、遍历、length--</Tag>,
        ans: <Highlight>{`return new Promise(resolve => { forEach( p.then(r => len === 1 ? resolve(res) : res[i] = r) )})`}</Highlight>
    },
    {
        Q: 'Promise.race', K: <Tag color="volcano">Promise、遍历</Tag>,
        ans: <Highlight>{`return new Promise(resolve => { forEach(p =>  p.then(r => resolve(r)) )})`}</Highlight>
    },
    {
        Q: '已知数据格式，实现一个函数 fn 找出链条中所有的父级 id', K: <Tag color="volcano">dfs</Tag>,
        ans: <ul>
            <li><Highlight>{`dfs(list, temp = []){ for(let n of list){ if(id === value) return temp else if(child) { res = dfs(child, temp.concat(id)) }} return [] }`}</Highlight></li>
            <li><Link to="/examination/program#findParent">找出数据链路中的所有父级</Link></li>
        </ul>
    },
]



