import React from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import nativetojs from '@images/rnnativetojs.png'
import lifeCircle from '@images/lifeCircle.jpg'

import { _useState } from './example'



const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const framework = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>React事件机制</Title>
                <Link href="/react/Event'">详细说明</Link>
                <Collapse ghost>
                    <Panel header="原生事件" key="1">
                        <Space direction="vertical">
                            <Text>JS原生事件有三种：</Text>
                            <Paragraph>
                                <blockquote>
                                    <ul>
                                        <li>直接在标签属性绑定：{`<div onclick="console.log(123)"></div>`}</li>
                                        <li>通过DOM绑定：{`document.getElementByTagName("div").onclick = function () {
                                        console.log(111)
                                        }`}</li>
                                        <li>通过EventTaget的监听事件：{`document.addEventListener('onclick',(e) => {
                                            console.log(111)
                                        })`}</li>
                                    </ul>
                                </blockquote>
                            </Paragraph>
                        </Space>
                    </Panel>
                    <Panel header="React合成事件" key="2">
                        <Space direction="vertical">
                            <Title level={4}>React合成事件是指将原生事件合成一个React事件</Title>
                            <Text mark>React封装自己的一套事件机制，目的是为了实现全浏览器的一致性，抹平不同浏览器之间的差异性</Text>
                            <Paragraph>
                                <blockquote>
                                    <Text>事件流包括三个阶段：事件捕获、目标阶段和事件冒泡（window -&gt; document -&gt; html -&gt; body ... -&gt; target）</Text>
                                    <Text>React合成事件的工作原理大致可以分为两个阶段：1. 事件绑定 2.事件触发</Text>
                                    <Text>在React17之前，React是把事件委托在document上的，React17及以后版本不再把事件委托在document上，而是委托在挂载的容器上</Text>
                                    <Text>React合成事件一套机制：React并不是将click事件直接绑定在dom上面，而是采用事件冒泡的形式冒泡到document上面，然后React将事件封装给SyntheticEvent函数处理、运行和处理。</Text>
                                    <Text>如果DOM上绑定了过多的事件处理函数，整个页面响应以及内存占用可能都会受到影响。React为了避免DOM事件滥用，同时屏蔽底层不同浏览器之间的事件系统差异，实现了一个中间层——SyntheticEvent。</Text>
                                </blockquote>
                            </Paragraph>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>React diff机制</Title>
                <Collapse ghost>
                    <Panel header="react16之前" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li>1. web UI中DOM节点跨层级移动的操作少，可以忽略不计</li>
                                <li>2. 只会对相同层级的节点进行比较</li>
                                <li>3. 只有删除、创建操作</li>
                                <li>4. 官方不建议做跨节点操作</li>
                                <li>5. 拥有相同类的两个组件将会生成相似树状结构，拥有不同类的两个组件将会生成不同的树状结构</li>
                                <li>6. 对于统一曾记得一组子节点，通过唯一的id 进行区分</li>
                            </ul>
                            <Text>基于以上三个前提策略，React 分别对tree diff、component diff、 element diff 进行优化</Text>
                        </Space>
                    </Panel>
                    <Panel header="react16的diff算法策略" key="2">
                        <Space direction="vertical">
                            <Text mark>更新React.16 Fiber 之后，react的数据结构从树改成了链表结构，diff算法随之修改</Text>
                            <Text>react16的diff策略采用从链表头部开始比较的算法，是层次遍历，算法是建立在一个节点的插入、删除、移动等操作都是在节点数的统一层级进行</Text>
                            <Text>对于diff TextNode有两种情况，currentFirstNode是否是Text Node。区分两种情况是为了复用节点</Text>
                            <Text mark>判断是否复用节点的点是: 1. key相同 2. 节点类型相同。</Text>
                            <Card title="diff的过程">
                                <ul>
                                    <li>1. 第一遍历新数组，新老数组以相同index进行对比，通过<Text code>updateSlot</Text>方法找到可以复用的节点，直到找到不可以复用的节点就推出循环</li>
                                    <li>2. 第一遍历完后，删除剩下的老节点，追加剩余的新节点。如果新节点已经遍历完成，将剩余的老节点批量删除。如果老节点遍历完仍有新节点剩余，将新节点插入</li>
                                    <li>3. 把所有的老数组元素按key 或index 放到Map里，遍历新数组，插入老数组的元素，这是移动的情况</li>
                                </ul>
                            </Card>

                            <Text>reconcileChildren</Text>
                            <ul>
                                <li><Text code>reconcileChildren</Text>只是一个入口函数</li>
                                <li>如果首次渲染，current 空 null，通过<Text code>mountChildFibers</Text>创建子节点的Fiber 实例</li>
                                <li>如果不是首次渲染，调用<Text code>reconcileChildFibers</Text>去做diff, 然后得处effect list</li>
                                <li>reconcileChildren和reconcileChildFibers通过<Text code>ChildReconciler</Text>函数去处理</li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>React优势</Title>
                <Collapse ghost>
                    <Panel header="React性能在少量更新DOM情况下没有原生操作更快，优势体现在安全性，规范和兼容性" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li><Text mark>性能：操作一次DOM，原生更快，整个项目操作react更好</Text></li>
                                <li><Text mark>安全性：react不需要考虑xss</Text></li>
                                <li><Text mark>事件委托：react合成事件对原生事件的封装以及兼容性问题</Text></li>
                                <li><Text mark>维护性：react制定了团队规范。掩盖了底层DOM操作，用声明式的方式来描述目的，让代码更容易维护</Text></li>
                                <li><Text mark>react实现了batchupdate，更规范的DOM操作</Text></li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>setState</Title>
                <Collapse ghost>
                    <Panel header="由 React 控制的事件处理过程 setState 不会同步更新 this.state; 在 React 控制之外的情况，setState 会同步更新 this.state" key="1">
                        <Space direction="vertical"><ul>
                            <li>setState只在合成事件和钩子函数中是“异步”的，在原生事件（addEventListener）和setTimeout中都是“同步”的</li>
                            <li>setState的异步不是在内部实现的，代码执行的过程和结都是同步的，只是在合成事件和钩子函数中的调用顺序在更新之前，导致无法拿到更新后的结果，形成所谓的异步，可以通过setState(partialState, callback)在callback中拿到结果</li>
                            <li>setState的批量更新也是建立在异步（合成事件、钩子函数）之上，在原生事件和setTimeout中是无法批量更新的</li>
                            <li>react更新是通过“事务”（Transacation）的，通过isBatchingUpdates: boolean控制，setTimout中事务无法管控</li>
                            <li>batchedUpdates: 在一个上下文中同时触发多次更新，这些更新会合并成一次更新</li>
                        </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>useState</Title>
                <Collapse ghost>
                    <Panel header="useState内部存储的states/setter是个数组，会按照数组顺序进行改变，所以useState不能在if/else循环里, " key="1">
                        <Highlight>{_useState}</Highlight>
                    </Panel>
                    <Panel header="useState调用一次，每次渲染触发2次" key="2">
                        <Space direction="vertical">
                            <Text mark>组件的一次更新流程，在视图真正刷新之前的部分都是可能被多次调用的，因而这些部分中不能出现副作用，开发环境下会刻意触发两次以使得开发者能注意到误用的副作用。</Text>
                            <Text>React 在 Dev mode 下会刻意执行两次渲染，以防止组件内有什么 side effect 引起 bug，提前预防。</Text>
                        </Space>
                    </Panel>

                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>fiber解决了什么问题</Title>
                <Collapse ghost>
                    <Panel header="React16之前出现的问题" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li>大量的同步计算任务在主线程运行阻塞了浏览器的 UI 渲染。默认情况下，JS 运算、页面布局和页面绘制都是运行在浏览器的主线程当中，他们之间是互斥的关系。</li>
                                <li>如果 JS 运算持续占用主线程或者占用主线程时间过长（以60Hz刷新频率来算，一帧耗时16毫秒），页面就没法得到及时的更新，出现卡顿。</li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="Fiber 主要解决两个问题" key="2">
                        <Space direction="vertical">
                            <ul>
                                <li>保证任务在浏览器空闲时执行: 依赖浏览器提供的 API requestIdleCallback() 实现任务调度 -- 优先级高的任务优先执行，优先级低的任务尽量在浏览器空闲时执行。</li>
                                <li>任务碎片化: 链表结构</li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="Fiber 的优点" key="3">
                        <Space direction="vertical">
                            <ul>
                                <li>Fiber双缓存可以在构建好workinprogress Fiber树之后切换成current Fiber，内存中直接一次性切换，提高了性能</li>
                                <li>Fiber的存在使异步可中断的更新成为了可能，作为工作单元，可以在时间片内执行工作，没时间了交还执行权给浏览器，下次时间片继续执行之前暂停之后返回的Fiber</li>
                                <li>Fiber可以在reconcile的时候进行相应的diff更新，让最后的更新应用在真实节点上</li>
                            </ul>
                            <Link href="/react/VirtualDom?callback='/interview/2'">详解</Link>
                            <Text mark> React16之前的版本有一个主要的问题 —— 虚拟 dom 的 diff 操作是同步完成的。</Text>
                            <Text>js在单线程环境里运行，操作很多时，便会造成阻塞</Text>
                            <Text>fiber将diff操作变成可中断的，只有当浏览器空闲时再做diff。避免diff更新长时间占据浏览器线程。fiber就是用的这个思路</Text>
                            <Text>fiber解决的是调度问题</Text>
                            <Text mark>用户交互属于高优先级，尽快响应，diff操作优先级低</Text>
                            <Text mark>fiber将diff递归操作变成遍历操作，类似链表操作，返回子节点</Text>
                            <Text>浏览器API：requestIdleCallback方法将在浏览器的空闲时段内调用函数做异步diff。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。</Text>
                            <ul>
                                <li><Text>每一个fiber都分配一个expirationTime属性</Text></li>
                                <li><Text>使用lane取代expirationTime？？？</Text></li>
                            </ul>
                        </Space>
                    </Panel>

                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>useEffect</Title>
                <Collapse ghost>
                    <Panel header="useEffect概念和流程" key="4">
                        <Space direction="vertical">
                            <ul>
                                <li>
                                    <Text>每次Render的内容都会形成一个快照保存下来，当状态改变Rerender的时候，形成了N个Render状态，每个状态都拥有自己固定不变的Props和State，函数在每次渲染时也是独立的。这就是 Capture Value 特性</Text>
                                </li>
                                <li><Text>useEffect 也一样具有Capture Value的特性</Text></li>
                                <li><Text>利用useRef可以绕过Capture Value特性，ref在render中保持了唯一的引用，对ref的取值和赋值拿到的都是最终状态</Text> </li>
                                <li>
                                    <Text>回收机制：组件被销毁时，通过useEffect注册的监听事件也要被销毁，通过useEffect的return返回值做到</Text>
                                </li>
                                <li><Text>优化：通过useEffect的第二个参数告诉React用到哪些外部变量，制定变量更新是才会再次执行useEffect</Text></li>
                                <li><Text>通过useReducer节耦useEffect的更新与操作，但是是绕过了diff算法</Text></li>
                                <li><Text mark>性能：useEffect在渲染结束时执行，所以不会阻塞浏览器渲染进程</Text></li>
                                <li><Text mark>符合React fiber的特性，Fiber会根据情况暂停或插入执行不同组件的Render，如果代码遵循Capture Value的特性，在Fiber环境下能保证值的安全访问，弱化生命周期也能解决执行中断的问题</Text></li>
                            </ul>
                            <Title level={4}>effect渲染流程</Title>
                            <ul>
                                <li><Text mark>mount阶段：执行了mountEffect，执行pushEffect,创建一个新的effect，跟之前的effect通过next链接成一个环形链表，用于顺序执行</Text></li>
                                <li>
                                    update阶段：
                                    <ul>
                                        <li><Text mark>1. 调用dispatchAction，创建一个update，绑定到hooks.queue上，通过链表next指向</Text></li>
                                        <li><Text mark>2. 执行到updateEffectImpl</Text></li>
                                        <li><Text mark>3. 这里的pushEffect跟mountEffect的区别是传入了第三个参数，上一个effect的消除函数</Text></li>
                                        <li><Text mark>4. 在update阶段，调用了areHookInputsEqual来判断依赖是否变化，如果变化就会再执行一次</Text></li>
                                    </ul>
                                </li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>hooks</Title>
                <Collapse ghost>
                    <Panel header="hooks的优势" key="6">
                        <Space direction="vertical">
                            <Text>hooks代替class Components</Text>
                            <ul>
                                <li><Text>1. 很难复用逻辑（只能用HOC，或者render props），会导致组件树层级很深</Text></li>
                                <li><Text>2. 会产生巨大的组件（指很多代码必须写在类里面）</Text></li>
                                <li><Text>3. 类组件很难理解，比如方法需要bind，this指向不明确</Text></li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>React优化</Title>
                <Collapse ghost>
                    <Panel header="react hooks 优化思路" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li>1. 减少render次数：在React中最小号事件的就是reconction（diff），如果不render，就不会reconction</li>
                                <li>2. 减少计算的量：减少重复计算，对于函数组件来说，每次render都会重新开始执行函数调用</li>
                            </ul>
                            <Text code>具体方法：</Text>
                            <ul>
                                <li>memo：在props不变的情况，通过记忆渲染结果的方法，提高组件的性能，可以传入第二个参数，做自定义比较函数</li>
                                <li>useCallback：在依赖项发生变化才会更新（useCallback返回的是函数，缓存函数）</li>
                                <li>useMemo：在依赖项发生变化才会更新（usememo返回的是函数运行的结果，缓存计算的值）</li>
                                <li>合理拆分组件：控制更小粒度的更新</li>
                            </ul>
                            <Text mark>react class Components 优化思路</Text>
                            <ul>
                                <li>减少render次数：使用<Text code>shouldComponentUpdate</Text>和<Text code>PureComponent</Text>，减少父组件更新引起子组件更新的情况</li>
                            </ul>
                            <a href="https://github.com/brickspert/blog/issues/36" target="_blank">React 项目性能分析及优化</a>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>React、Redux</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text>React：<Text code>UI = f(state)</Text></Text>
                            <Text>Redux：store、reduce、action、actionCreater、dispatch</Text>
                            <Text>hooks生命周期：函数组件不存在声明周期， 通过useEffect进行操作，生命周期所做的都是副作用，放在useEffect里最合适</Text>
                            <Text>React16生命周期的变化：</Text>
                            <ul>
                                <li>废除掉了<Text code>componentWillMount</Text>、<Text code>componentWillReceiveProps</Text>、<Text code>componentWillUpdate</Text></li>
                                <li>新增了<Text code>getDrivedStateFromProps</Text>、<Text code>getSnapshotBeforeUpdate</Text></li>
                                <li><Text mark>reconciliation</Text>阶段是可中断的，所以废掉了那三个周期</li>
                                <li>getDrivedStateFromProps：static方法，将传入的props映射到state上，在<Text mark>每次re-rendering之前调用</Text></li>
                            </ul>
                            <Card><PreviewImg src={lifeCircle} /></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>RN、Flutter底层实现</Title>
                <Collapse ghost>
                    <Panel header="RN" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li><Text mark>C/C++实现UI逻辑与统一的组件组成控制中心</Text></li>
                                <li><Text mark>通过NativeModule和C++Bridge作为中间系统跨语言调用各个平台相关组件</Text></li>
                                <li><Text mark>然后由各个系统的UI系统进行渲染</Text></li>
                                <li><Text mark>JavaScript层负责<b>控制</b>渲染，不负责渲染</Text></li>
                                <li><Text mark>RN里编译并集成了一个JS引擎（JavaScriptCore）</Text></li>
                                <li><Text mark>数据传递：利用C++实现一个桥，RN与原生端通过C++Bridge双向通讯</Text></li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="Flutter" key="2">
                        <Space direction="vertical">
                            <ul>
                                <li><Text mark>Flutter自身实现一个跨平台的UI系统，自建渲染框架</Text></li>
                                <li><Text mark>底层skia引擎绘制渲染引擎</Text></li>
                                <li><Text mark>数据通信：通过MethodChannel钩子函数</Text></li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>RN、Flutter、Hybird通信</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Title>RN &lt;---&gt; 原生</Title>
                            <Row>
                                <Col span={10}>
                                    <Card title="iOS">
                                        <Text mark>RN与Native通信</Text>
                                        <ul>
                                            <li>Native通过创建RCTRootView传入属性</li>
                                            <li>通过RCTBridgeModule协议获取或传递数据给原生平台</li>
                                            <li>RN也可以通过callback或者NativeEventEmitter模块来监听事件</li>
                                            <li>通过Native模块中声明一个事件处理函数，传递给javascript使用</li>
                                        </ul>

                                        <Text mark>RN使用Native模块</Text>
                                        <ul>
                                            <li>1. 视图在createViewInstance中创建</li>
                                            <li>2. 通过@ReactProp注解导出属性的设置方法</li>
                                            <li>3. 注册ViewManager</li>
                                            <li>4. 创建Javascript模块并定义javascript和Java之间的接口层（通过requireNativeComponent(模块名称)）</li>
                                        </ul>
                                        <PreviewImg src={nativetojs} />
                                    </Card>
                                </Col>
                                <Col span={10}>
                                    <Card title="Android">
                                        <Text mark>RN与Native通信</Text>
                                        <ul>
                                            <li>把Android原生模块在应用的package类的CreateNativeModule方法中添加这个模块，在RN中引入</li>
                                            <li>Native通过RCTDeviceEventEmitter向RN发送事件通知</li>
                                            <li>RN也可以通过callback或者NativeEventEmitter模块来监听事件</li>
                                        </ul>
                                        <Text mark>RN使用Native模块</Text>
                                        <ul>
                                            <li>1. 视图在createViewInstance中创建</li>
                                            <li>2. 通过@ReactProp注解导出属性的设置方法</li>
                                            <li>3. 注册ViewManager</li>
                                            <li>4. 创建Javascript模块并定义javascript和Java之间的接口层（通过requireNativeComponent(模块名称)）</li>
                                        </ul>
                                    </Card>
                                </Col>
                            </Row>

                            <Title>Hybrid &lt;---&gt; 原生</Title>
                            <Text mark>通过JSBridge完成h5与Native的双向通讯</Text>
                            <ul>
                                <li>JS上下文注入：Native获取javascript环境上下文，在上面挂载对象或者方法（iOS：UIWebview JavascriptCore、WKWebView scriptMessageHandler注入；Android：addJavascriptInterface注入）</li>
                                <li>弹窗拦截：通过修改webview对象的方法，拦截固定规则参数（alert、confirm、prompt）</li>
                                <li>URL Schema：拦截Url 请求，解析这个scheme协议（iOS：UIWebView的delegate函数；Android：shouldOverrideUrlLoading）</li>
                            </ul>

                            <Title>Flutter &lt;---&gt; 原生</Title>
                            <Text mark>Flutter Plugin：通过Platform Channels与Flutter（dart）层通讯并暴露API</Text>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default framework
