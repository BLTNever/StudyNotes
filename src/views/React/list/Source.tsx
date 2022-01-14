import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Tag } from 'antd'

import { Wrap } from '@components/Base'

import { _createStore, _compose, _applyMiddleware, _combineReducers } from './example'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Source = () => {

    return (
        <>

            <Wrap>
                <Title level={3}>React理念-实现快速响应</Title>

                <Collapse ghost>
                    <Panel header="CPU的瓶颈" key="1">
                        <Text>例：渲染3000条li，16.6ms浏览器刷新一次。JS可以操作DOM，GUI渲染线程与JS线程是互斥的。所以JS脚本执行和浏览器布局、绘制不能同时执行。</Text>
                        <Text>JS执行时间过长，超出了16.6ms，刷新就没有时间执行样式布局和样式绘制</Text>
                        <ul>
                            <li>在浏览器每一帧的时间中，预留一些时间给JS线程，React利用这部分时间更新组件（可以看到，在源码 (opens new window)中，预留的初始时间是5ms）</li>
                            <li>当预留的时间不够用时，React将线程控制权交还给浏览器使其有时间渲染UI，React则等待下一帧时间到来继续被中断的工作</li>
                            <li>此时我们的长任务被拆分到每一帧不同的task中，JS脚本执行时间大体在5ms左右，这样浏览器就有剩余时间执行样式布局和样式绘制，减少掉帧的可能性</li>
                        </ul>
                    </Panel>
                    <Panel header="IO的瓶颈" key="2">
                        <ul>
                            <li>作为架构层面： React15的Reconciler使用递归调用方式执行，数据保存在递归调用栈里，称为stack Reconciler。React16的Reconciler基于Fiber节点实现，称为Fiber Reconciler</li>
                            <li>作为静态数据结构层面：每个Fiber Node 对应了一个Element Node。保存了组件的类型（class components、function components、原生组件），对应的DOM节点信息</li>
                            <li>作为动态工作单元： 每个Fiber Node保存了本次更新中组件改变的状态，要执行的工作（删除、插入、更新等）</li>
                        </ul>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>React架构</Title>
                <Highlight>const state = reconcile(update)</Highlight>
                <Highlight>const UI = commit(state)</Highlight>
                <Collapse ghost>
                    <Panel header="Scheduler（调度器）" key="1">
                        <Text mark>调度任务的优先级，高优任务优先进入Reconciler</Text>

                        <Text>以浏览器是否有剩余时间作为任务中断的标准，需要一种机制，当浏览器有剩余时间时通知我们</Text>
                        <ul>
                            <li>在 Scheduler 中每个任务的优先级使用过期时间表示</li>
                            <li>任务的过期时间离现在很近，说明它马上就要过期了，优先级很高，如果过期时间很长，那它的优先级就低</li>
                            <li>requestIdleCallback存在兼容和触发不稳定的原因，react17中采用MessageChannel来实现。</li>
                            <li>没有过期的任务存放在 timerQueue 中，过期的任务存放在 taskQueue 中，timerQueue 和 timerQueue都是小顶堆，所以 peek 取出来的都是离现在时间最近也就是优先级最高的那个任务，然后优先执行它</li>
                            <li>React现在使用 优先级 表示方法 Lane， Lane 用二进制位表示优先级，二进制中的1表示位置，同一个二进制数可以有多个相同优先级的位，这就可以表示‘批’的概念，而且二进制方便计算。</li>
                            <li>Lane的二进制位，1的bits越多，优先级越低</li>
                          
                        </ul>
                    </Panel>
                </Collapse>
                <Collapse ghost>
                    <Panel header="Reconciler（协调器）" key="1">
                        <Text mark>负责找出变化的组件,并打上不同的 Flags（旧版本react叫Tag）-fiber</Text>

                        <ul>
                            <li>React15中 Reconciler 使用递归处理虚拟DOM，16之后从递归变成循环可中断过程，通过shouldYield判断是否有剩余时间</li>
                            <li>在React16中 Reconciler 与Renderer不再是交替工作。当 Scheduler 将任务交给 Reconciler 后， Reconciler 会为变化的虚拟DOM打上代表增/删/更新的标记</li>
                            <li>整个 Scheduler 与 Reconciler 的工作都在内存中进行。只有当所有组件都完成 Reconciler 的工作，才会统一交给Renderer</li>
                            <li>Reconciler 会创建或者更新 Fiber 节点。在mount的时候会根据jsx生成 Fiber 对象，在update的时候会根据最新的state形成的jsx对象和current  Fiber 树对比构建workInProgress  Fiber 树，这个对比的过程就是diff算法。</li>
                            <li>diff 算法发生在render 阶段的 reconcileChild Fiber函数中，diff算法分为单节点的diff和多节点的diff（例如一个节点中包含多个子节点就属于多节点的diff），单节点会根据节点的key和type，props等来判断节点是复用还是直接新创建节点，多节点diff会涉及节点的增删和节点位置的变化</li>
                            <li>render阶段遍历 Fiber 树类似dfs的过程，‘捕获’阶段发生在beginWork函数中，该函数做的主要工作是创建 Fiber 节点，计算state和diff算法，‘冒泡’阶段发生在completeWork中，该函数主要是做一些收尾工作，例如处理节点的props、和形成一条effectList的链表，该链表是被标记了更新的节点形成的链表</li>
                        </ul>

                        <Text mark>Fiber双缓存: 双缓存是指存在两颗Fiber树，current Fiber树描述了当前呈现的dom树，workInProgress Fiber是正在更新的Fiber树，这两颗Fiber树都是在内存中运行的，在workInProgress Fiber构建完成之后会将它作为current Fiber应用到dom上</Text>

                        <ul>
                            <li>Fiber对象上面保存了包括这个节点的属性、类型、dom等，Fiber通过child、sibling、return（指向父节点）来形成Fiber树，还保存了更新状态时用于计算state的updateQueue，updateQueue是一种链表结构，上面可能存在多个未计算的update，update也是一种数据结构，上面包含了更新的数据、优先级等，除了这些之外，上面还有和副作用有关的信息。</li>
                            <li>在mount时（首次渲染），会根据jsx对象（Class Component或的render函数者Function Component的返回值），构建Fiber对象，形成Fiber树，然后这颗Fiber树会作为current Fiber应用到真实dom上</li>
                            <li>在update（状态更新时如setState）的时候，会根据状态变更后的jsx对象和current Fiber做对比形成新的workInProgress Fiber，然后workInProgress Fiber切换成current Fiber应用到真实dom就达到了更新的目的，而这一切都是在内存中发生的，从而减少了对dom好性能的操作。</li>
                        </ul>
                    </Panel>
                </Collapse>
                <Collapse ghost>
                    <Panel header="Renderer（渲染器）" key="1">
                        <Text mark>负责将变化的组件渲染到页面上</Text>
                        <Text mark>Renderer根据Reconciler为虚拟DOM打的标记，同步执行对应的DOM操作</Text>

                        <ul>
                            <li>Renderer是在commit阶段工作的，commit阶段会遍历render阶段形成的effectList，并执行真实dom节点的操作和一些生命周期，不同平台对应的Renderer不同，例如浏览器对应的就是react-dom。</li>
                            <li>commit阶段发生在commitRoot函数中，该函数主要遍历effectList，分别用三个函数来处理effectList上的节点，这三个函数是commitBeforeMutationEffects、commitMutationEffects、commitLayoutEffects</li>
                        </ul>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>Virtual Dom</Title>

                <Collapse ghost>
                    <Panel header="Virtual Dom是什么" key="1">
                        <ul>
                            <li>用js对象表示dom信息和结构，更新时重新渲染更新后的对象对应的dom，这个对象就是React.createElement()的返回结果</li>
                            <li>virtual Dom是一种编程方式，它以对象的形式保存在内存中，它描述了我们dom的必要信息，并且用类似react-dom等模块与真实dom同步，这一过程也叫协调(reconciler)，这种方式可以声明式的渲染相应的ui状态，让我们从dom操作中解放出来，在react中是以fiber树的形式存放组件树的相关信息，在更新时可以增量渲染相关dom，所以fiber也是virtual Dom实现的一部分</li>
                        </ul>
                    </Panel>

                    <Panel header="为什么要用Virtual Dom" key="2">
                        <ul>
                            <li>大量的dom操作慢，很小的更新都有可能引起页面的重新排列，js对象优于在内存中，处理起来更快，可以通过diff算法比较新老virtual Dom的差异，并且批量、异步、最小化的执行dom的变更，以提高性能</li>
                            <li>另外就是可以跨平台，jsx --&gt; ReactElement对象 --&gt; 真实节点，有中间层的存在，就可以在操作真实节点之前进行对应的处理，处理的结果反映到真实节点上，这个真实节点可以是浏览器环境，也可以是Native环境</li>
                        </ul>
                        <Text mark>virtual Dom真的快吗？其实virtual Dom只是在更新的时候快，在应用初始的时候不一定快</Text>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>Fiber</Title>

                <Collapse ghost>
                    <Panel header="Fiber架构的实现原理" key="1">
                        <ul>
                            <li>作为架构层面： React15的Reconciler使用递归调用方式执行，数据保存在递归调用栈里，称为stack Reconciler。React16的Reconciler基于Fiber节点实现，称为Fiber Reconciler</li>
                            <li>作为静态数据结构层面：每个Fiber Node 对应了一个Element Node。保存了组件的类型（class components、function components、原生组件），对应的DOM节点信息</li>
                            <li>作为动态工作单元： 每个Fiber Node保存了本次更新中组件改变的状态，要执行的工作（删除、插入、更新等）</li>
                        </ul>
                    </Panel>
                </Collapse>
            </Wrap>


        </>
    )
}

export default Source



