import React from 'react'
import Highlight from '@components/HighLight'

import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Tooltip, Tag } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'
import VirtualDomImg from '@images/react-event.jpg'
import VirtualDomImg2 from '@images/react-event2.jpg'
import VirtualDomImg3 from '@images/react-event3.jpg'

import { _useState } from './example'
const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography
const VirtualDom = () => (
    <>
        <Wrap>
            <Title level={3}>Fiber</Title>
            <Collapse ghost>
                <Panel header="为什么会出现fiber" key="1">
                    <Space direction="vertical">
                        <Title level={4}>React16之前组件渲染更新的时候，分为2个阶段</Title>
                        <ul>
                            <li>调和阶段（Reconciler）： React会自顶向下通过递归，遍历新数据生成的Virtual DOM，然后通过Diff算法，找到需要变更的元素（patch），放到更新队列里</li>
                            <li>渲染阶段（Renderer）：遍历更新队列，调用宿主环境的API，实际更新渲染对应元素。例例如WEB、Native、WebGL</li>
                        </ul>
                        <Text>在调和阶段，由于采用递归的遍历方式（Stack Reconciler），任务一旦开始，就无法中断，JS将一直占用主线程，直到整颗Virtual DOM树计算完成，才把执行权交给渲染引擎</Text>
                    </Space>
                </Panel>

                <Panel header="fiber做了什么" key="2">
                    <Space direction="vertical">
                        <Text>之前主要的问题是任务一旦执行，就无法中断，js线程一直占用主线程，导致卡顿。</Text>
                        <Text>如果把渲染更新过程拆分成多个子任务，每次只做一小部分，做完看是否有剩余时间，如果有，继续执行下一部分</Text>
                        <Text>如果没有，挂起当前任务，将事件控制权交给主线程，等主线程不忙的时候再继续执行。</Text>
                        <Text>这种策略叫做 Cooperative Scheduling（合作式调度），操作系统常用
                            <Tooltip title="操作系统常用任务调度策略：先来先服务（FCFS）调度算法、短作业（进程）优先调度算法（SJ/PF）、最高优先权优先调度算法（FPF）、高响应比优先调度算法（HRN）、时间片轮转法（RR）、多级队列反馈法">
                                <Tag color="#2db7f5">任务调度策略</Tag>
                            </Tooltip>之一。</Text>
                        <ul>
                            <li>浏览器是一帧一帧执行的，在两个执行帧之间，主线程通常会有一小段空闲时间，<Text mark>requestIdleCallback可以在这个空闲期（Idle Period）调用空闲期回调（Idle Callback）</Text>，执行一些任务</li>
                            <li>低优先级任务由requestIdleCallback处理</li>
                            <li>高优先级任务，如动画骨干由<Text mark>requestAnimationFrame</Text>处理</li>
                            <li>requestIdleCallback可以再多个空闲期调用空闲期回调，执行任务</li>
                            <li>requestIdleCallback方法提供deadline，任务执行限制时间，切分任务，避免长时间执行，阻塞UI渲染导致掉帧</li>
                        </ul>
                    </Space>
                </Panel>

                <Panel header="什么是fiber" key="3">
                    <Space direction="vertical">
                        <Text>Fiber代表一种<Text mark>工作单元</Text></Text>
                        <Text>按照函数调用栈的方式，实现一个<Text mark>虚拟的堆栈帧</Text></Text>
                        <Text>Fiber是一种数据结构（堆栈帧），也是一种解决可中断的调用任务的解决方案，特性就是<Text mark>时间分片（time slicing）</Text>和<Text mark>暂停（supense）</Text></Text>
                        <Text>将可中断任务拆分成多个子任务，按照优先级来自由调度子任务，分段式更新，将同步渲染改为异步渲染</Text>

                        <Title level={4}>Fiber需要解决的问题</Title>
                        <ul>
                            <li>1. 如何拆分子任务？</li>
                            <li>2. 子任务多大合适？</li>
                            <li>3. 如何判断是否还有剩余时间</li>
                            <li>4. 有剩余时间怎么调度应该执行哪个一个任务</li>
                            <li>5. 没有剩余时间的任务怎么办</li>
                        </ul>
                    </Space>
                </Panel>


                <Panel header="fiber如何工作" key="4">
                    <Space direction="vertical">
                        <ul>
                            <li>1. ReactDOM.render()和setState的时候开始创建更新。</li>
                            <li>2. 将创建的更新加入任务队列，等待调度。</li>
                            <li>3. 在requestIdleCallback空闲时执行任务。</li>
                            <li>4. 从根节点开始遍历 Fiber Node，并且构建WokeInProgress Tree。</li>
                            <li>5. 生成effectList。</li>
                            <li>6. 根据EffectList更新DOM。</li>
                        </ul>
                        <ul>
                            <li>
                                第一部分从 ReactDOM.render() 方法开始，把接收的 React Element 转换为 Fiber 节点，并为其设置优先级，创建 Update，加入到更新队列，这部分主要是做一些初始数据的准备。
                            </li>
                            <li>
                                第二部分主要是三个函数：scheduleWork、requestWork、performWork，即安排工作、申请工作、正式工作三部曲，React 16 新增的异步调用的功能则在这部分实现，这部分就是 Schedule 阶段，前面介绍的 Cooperative Scheduling 就是在这个阶段，只有在这个解决获取到可执行的时间片，第三部分才会继续执行。具体是如何调度的，后面文章再介绍，这是 React 调度的关键过程。
                            </li>
                            <li>
                                第三部分是一个大循环，遍历所有的 Fiber 节点，通过 Diff 算法计算所有更新工作，产出 EffectList 给到 commit 阶段使用，这部分的核心是 beginWork 函数，这部分基本就是FiberReconciler ，包括reconciliation 和 commit阶段。
                            </li>
                        </ul>

                        <Title level={4}>一、Fiber Node</Title>
                        <Text>Fiber Node中承载了非常关键的上下文信息，可以说是贯彻整个创建和更新的流程</Text>
                        <Text>Fiber Node中记录了父节点、子节点、兄弟节点、上一次的prop值和上一次的state值、sideEffect</Text>

                        <Title level={4}>二、Fiber Reconciler</Title>
                        <Text mark>Fiber Reconciler是React里的调和器，这也是任务调度完成之后，如何去执行每个任务，如何去更新每一个节点的过程，对应上面的第三部分。</Text>

                        <Text mark>Reconciler过程：</Text>
                        <ul>
                            <li>（可中断）render/reconciliation 通过构造 WorkInProgress Tree 得出 Change。</li>
                            <li>（不可中断）commit 应用这些DOM change。</li>
                        </ul>


                        <Text>reconciliation阶段:</Text>
                        <ul>
                            <li>在 reconciliation 阶段的每个工作循环中，每次处理一个 Fiber，处理完可以中断/挂起整个工作循环。通过每个节点更新结束时向上归并 Effect List 来收集任务结果，reconciliation 结束后，根节点的 Effect List里记录了包括 DOM change 在内的所有 Side Effect。</li>
                            <li>由于 reconciliation 阶段是可中断的，一旦中断之后恢复的时候又会重新执行，所以很可能 reconciliation 阶段的生命周期方法会被多次调用，所以在 reconciliation 阶段的生命周期的方法是不稳定的，我想这也是 React 为什么要废弃 componentWillMount 和 componentWillReceiveProps方法而改为静态方法 getDerivedStateFromProps 的原因</li>
                        </ul>
                        <Text>render/reconciliation生命周期</Text>
                        <ul>
                            <li>[UNSAFE_]componentWillMount（弃用）</li>
                            <li>[UNSAFE_]componentWillReceiveProps（弃用）</li>
                            <li>getDerivedStateFromProps</li>
                            <li>shouldComponentUpdate</li>
                            <li>[UNSAFE_]componentWillUpdate（弃用）</li>
                            <li>render</li>
                        </ul>

                        <Text>commit阶段:</Text>
                        <ul>
                            <li>commit 阶段可以理解为就是将 Diff 的结果反映到真实 DOM 的过程</li>
                            <li>在 commit 阶段，在 commitRoot 里会根据 effect的 effectTag，具体 effectTag 见源码 ，进行对应的插入、更新、删除操作，根据 tag 不同，调用不同的更新方法</li>
                        </ul>

                        <Text>commit阶段生命周期</Text>
                        <ul>
                            <li>getSnapshotBeforeUpdate</li>
                            <li>componentDidMount</li>
                            <li>componentDidUpdate</li>
                            <li>componentWillUnmount</li>
                        </ul>
                    </Space>
                </Panel>

                <Panel header="Fiber Tree和WorkInProgress Tree" key="5">
                    <Space direction="vertical">
                        <Text>
                            React 在 render 第一次渲染时，会通过 React.createElement 创建一颗 Element 树，可以称之为。<Text mark>Virtual DOM Tree</Text>，由于要记录上下文信息，加入了 Fiber，每一个 Element 会对应一个 Fiber Node，将 Fiber Node 链接起来的结构成为<Text mark>Fiber Tree</Text>。它反映了用于渲染 UI 的应用程序的状态。这棵树通常被称为<Text mark>current 树（当前树，记录当前页面的状态）</Text>
                        </Text>

                        <Text>在后续的更新过程中（setState），每次重新渲染都会重新创建 Element, 但是 Fiber 不会，Fiber 只会使用对应的 Element 中的数据来更新自己必要的属性</Text>
                        <Text>Fiber Tree 一个重要的特点是链表结构，将递归遍历编程循环遍历，然后配合 requestIdleCallback API, 实现任务拆分、中断与恢复。</Text>
                        <Text>通过Fiber Node的父节点、子节点、兄弟节点构成了链表结构</Text>

                        <Text>WorkInProgress Tree：反映了要刷新到屏幕的未来状态</Text>
                        <Text>WorkInProgress Tree 构造完毕，得到的就是新的 Fiber Tree，然后喜新厌旧（把 current 指针指向WorkInProgress Tree，丢掉旧的 Fiber Tree）就好了</Text>
                        <Text>每个 Fiber上都有个alternate属性，也指向一个 Fiber，创建 WorkInProgress 节点时优先取alternate，没有的话就创建一个</Text>
                        <Text>创建 WorkInProgress Tree 的过程也是一个 Diff 的过程，Diff 完成之后会生成一个 Effect List，这个 Effect List 就是最终 Commit 阶段用来处理副作用的阶段</Text>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>hooks</Title>
            <Collapse ghost>
                <Panel header="useState" key="3">
                    <Space direction="vertical">
                        <ul>
                            <li><Text>1. setState只在合成事件和钩子函数中是“异步”的，在原生事件（addEventListener）和setTimeout中都是“同步”的</Text></li>
                            <li>
                                <Text>2. setState的异步不是在内部实现的，代码执行的过程和结都是同步的，只是在合成事件和钩子函数中的调用顺序在更新之前，导致无法拿到更新后的结果，形成所谓的异步，可以通过setState(partialState, callback)在callback中拿到结果</Text>
                            </li>
                            <li>
                                <Text>
                                    3. setState的批量更新也是建立在异步（合成事件、钩子函数）之上，在原生事件和setTimeout中是无法批量更新的
                                </Text>
                            </li>
                            <li>
                                <Text>react更新是通过“事务”（Transacation）的，通过isBatchingUpdates: boolean控制，setTimout中事务无法管控</Text>
                            </li>
                        </ul>
                        <Highlight>{_useState}</Highlight>
                    </Space>
                </Panel>

                <Panel header="useEffect" key="4">
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

                <Panel header="fiber" key="5">
                    <Space direction="vertical">
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

                <Panel header="hooks" key="6">
                    <Space direction="vertical">
                        <Text>hooks代替class Components</Text>
                        <ul>
                            <li><Text>1. 很难复用逻辑（只能用HOC，或者render props），会导致组件树层级很深</Text></li>
                            <li><Text>2. 会产生巨大的组件（指很多代码必须写在类里面）</Text></li>
                            <li><Text>3. 类组件很难理解，比如方法需要bind，this指向不明确</Text></li>
                        </ul>
                    </Space>
                </Panel>
            </Collapse >
        </Wrap>

        <Wrap>
            <Title level={3}>VirtualDom</Title>
            <Collapse defaultActiveKey="" ghost>
                <Panel header="VirtualDom" key="1">
                    <Space direction="vertical">
                        <Text>VirtualDom：使用 JavaScript对象去描述DOM</Text>
                        <ul>
                            <li>1. 维护一个使用JS对象去表示的Virtual DOM,与真实DOM 一一对应</li>
                            <li>2. 更新时，前后两个Virtual DOM 做diff, 生成变更（Mutation）</li>
                            <li>3. 把变更应用于真实DOM，生成新的真实DOM</li>
                        </ul>

                        <Card title="性能">
                            <ul>
                                <li><Text>VirtualDom和diff 算法是为了解决由命令式编程变成转变为声明式编程、数据驱动带来的性能问题</Text></li>
                                <li><Text mark>直接操作DOM的性能不会低于VirtualDom和diff算法，甚至还会优于</Text></li>
                                <li><Text>diff算法比较过程也会消耗性能。直接操作DOM 不需要比较过程</Text></li>
                                <li><Text>VirtualDom和diff算法的强处，是在数据不论怎么变化，都以最小的代价更新DOM。在内存中用心的数据刷新一个VirtualDom，然后新旧VirtualDom对比，更新到DOM树上</Text></li>
                                <li><Text>意义在于覆盖底层DOM操作，以声明式的方法描述目的。代码维护性高。</Text></li>
                            </ul>
                        </Card>

                        <Card title="VirtualDom的作用">
                            <ul>
                                <li>Virtual DOM 在牺牲部分性能前提下，增加了可维护性</li>
                                <li>实现了对DOM的集中操作，在数据改变时，线修改VirtualDom，再反映到真实DOM中，以最小的代价更新DOM</li>
                                <li>可以使用函数式UI</li>
                                <li>可以渲染DOM意外的端，跨平台使用，例如RN</li>
                                <li>更好的使用SSR，同构渲染</li>
                                <li>组件的高度抽象化</li>
                            </ul>
                        </Card>

                        <Card title="VirtualDom的缺点">
                            <ul>
                                <li>首次渲染，多了一层VirtualDom的计算，比innerHTML慢</li>
                                <li>需要在内存中维护一份VirtualDom的备份</li>
                                <li>VirtualDom需要花费事件去处理计算</li>
                            </ul>
                        </Card>
                    </Space>
                </Panel>
                <Panel header="DIFF" key="2">
                    <Space direction="vertical">
                        <Text mark>更新React 16 Fiber 之后，react的数据结构从树改成了链表结构，diff算法随之修改</Text>

                        <Title level={4}>react 16之前的diff算法策略</Title>
                        <ul>
                            <li>1. web UI中DOM节点跨层级移动的操作少，可以忽略不计</li>
                            <li>2. 拥有相同类的两个组件将会生成相似树状结构，拥有不同类的两个组件将会生成不同的树状结构</li>
                            <li>3. 对于统一曾记得一组子节点，通过唯一的id 进行区分</li>
                        </ul>
                        <Text>基于以上三个前提策略，React 分别对tree diff、component diff、 element diff 进行优化</Text>


                        <Title level={4}>react 16的diff算法策略</Title>
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

    </>
)

export default VirtualDom
