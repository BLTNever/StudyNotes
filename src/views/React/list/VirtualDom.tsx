import React from 'react'
import Highlight from 'react-highlight'

import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'
import VirtualDomImg from '@images/react-event.jpg'
import VirtualDomImg2 from '@images/react-event2.jpg'
import VirtualDomImg3 from '@images/react-event3.jpg'

// import { } from './example'
const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography
const VirtualDom = () => (
    <>
        <PageHeader title="虚拟DOM" />
        <Wrap>
            <Collapse defaultActiveKey={['1']} ghost>
                <Panel header="虚拟DOM" key="1">
                    <Space direction="vertical">
                        <Text>虚拟DOM：使用 JavaScript对象去描述DOM</Text>
                        <ul>
                            <li>1. 维护一个使用JS对象去表示的Virtual DOM,与真实DOM 一一对应</li>
                            <li>2. 更新时，前后两个Virtual DOM 做diff, 生成变更（Mutation）</li>
                            <li>3. 把变更应用于真实DOM，生成新的真实DOM</li>
                        </ul>

                        <Card title="性能">
                            <Text>虚拟DOM和diff 算法是为了解决由命令式编程变成转变为声明式编程、数据驱动带来的性能问题</Text>
                            <Text mark>直接操作DOM的性能不会低于虚拟DOM和diff算法，甚至还会优于</Text>
                            <Text>diff算法比较过程也会消耗性能。直接操作DOM 不需要比较过程</Text>
                            <Text>虚拟DOM和diff算法的强处，是在数据不论怎么变化，都以最小的代价更新DOM。在内存中用心的数据刷新一个虚拟DOM，然后新旧虚拟DOM对比，更新到DOM树上</Text>
                            <Text>意义在于覆盖底层DOM操作，以声明式的方法描述目的。代码维护性高。</Text>
                        </Card>

                        <Card title="虚拟DOM的作用">
                            <ul>
                                <li>Virtual DOM 在牺牲部分性能前提下，增加了可维护性</li>
                                <li>实现了对DOM的集中操作，在数据改变时，线修改虚拟DOM，再反映到真实DOM中， 以最小的代价更新DOM</li>
                                <li>可以使用函数式UI</li>
                                <li>可以渲染DOM意外的端，跨平台使用，例如RN</li>
                                <li>更好的使用SSR，同构渲染</li>
                                <li>组件的高度抽象化</li>
                            </ul>
                        </Card>

                        <Card title="虚拟DOM的缺点">
                            <ul>
                                <li>首次渲染，多了一层虚拟DOM的计算，比innerHTML慢</li>
                                <li>需要在内存中维护一份虚拟DOM的备份</li>
                                <li>虚拟DOM需要花费事件去处理计算</li>
                            </ul>
                        </Card>
                    </Space>
                </Panel>

                <Panel header="DIFF" key="2">
                    <Space direction="vertical">
                        <Text mark>更新React 16 Fiber 之后，react的数据结构从树改成了链表结构，diff算法随之修改</Text>

                        <Title>react 16之前的diff算法策略</Title>
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

                <Panel header="Fiber" key="3">
                    <Space direction="vertical">
                        <Card>
                            <Text mark>React16之前组件渲染更新的时候，分为2个阶段</Text>
                            <ul>
                                <li>调和阶段（Reconciler）： React会自顶向下通过递归，遍历新数据生成的Virtual DOM，然后通过Diff算法，找到需要变更的元素（patch），放到更新队列里</li>
                                <li>渲染阶段（Renderer）：遍历更新队列，调用宿主环境的API，实际更新渲染对应元素。例例如WEB、Native、WebGL</li>
                            </ul>
                            <Text>在调和阶段，优于采用递归的遍历方式 （Stack Reconciler），优于任务一旦开始，就无法中断，JS将一直占用主线程，直到整颗Virtual DOM树计算完成，才把执行权交给渲染引擎</Text>
                        </Card>

                        <Title>如何解决上述的问题</Title>
                        <Card>
                            <Text>把渲染更新过程拆分成多个子任务，每次只做一小部分，做完看是否有剩余时间，如果有，继续执行下一部分</Text>
                            <Text>如果没有，挂起当前任务，将事件控制权交给主线程，等主线程不忙的时候再继续执行。</Text>
                            <ul>
                                <li>低优先级任务由<Text mark>requestIdleCallback</Text>处理</li>
                                <li>高优先级任务，如动画县骨干由<Text mark>requestAnimationFrame</Text>处理</li>
                                <li><Text mark>requestIdleCallback</Text>可以再多个空闲期调用空闲期回调，执行任务</li>
                                <li><Text mark>requestIdleCallback</Text>方法提供deadline，任务执行限制时间，切分任务，避免长时间执行，阻塞UI渲染导致掉帧</li>
                            </ul>
                        </Card>
                        <Card>
                            <Title>Fiber</Title>
                            <ul>
                                <li>1. 如何拆分子任务？</li>
                                <li>2. 子任务多大合适？</li>
                                <li>3. 如何判断是否还有剩余时间</li>
                                <li>4. 有剩余时间怎么调度应该执行哪个一个任务</li>
                                <li>5. 没有剩余时间的任务怎么办</li>
                            </ul>

                            <Text>Fiber代表一种<Text mark>工作单元</Text></Text>
                            <Text>按照函数调用栈的方式，实现一个<Text mark>虚拟的堆栈帧</Text></Text>
                            <Text>Fiber是一种数据结构（堆栈帧），也是一种解决可中断的调用任务的解决方案，特性就是<Text mark>时间分片（time slicing）</Text>和<Text mark>暂停（supense）</Text></Text>
                            <Text>将可中断任务拆分成多个子任务，按照优先级来自由调度子任务，分段式更新，将同步渲染改为异步渲染</Text>

                        </Card>

                        <Card title="Fiber如何工作">
                            <ul>
                                <li>1. ReactDOM.render()和setState的时候创建更新</li>
                                <li>2. 将创建的更新加入任务队列，等待调度</li>
                                <li>3. 在<Text mark>requestIdleCallback</Text>空闲时执行任务</li>
                                <li>4. 从根结点开始遍历Fiber Node，并且构建WokeInProgress Tree</li>
                                <li>5. 生成effectList</li>
                                <li>6. 根据effectList更新DOM</li>
                            </ul>
                        </Card>


                        待续。。。。
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <PageHeader title="事件机制注册" />
        <Wrap>
            <Collapse defaultActiveKey={['1']} ghost>
                <Panel header="流程" key="1">
                    <Space direction="vertical">
                        <ul>
                            <li>事件注册 - 组件挂载阶段，根据组件内声明的事件类型 onChange、onClick、等，给document上添加事件 addEventListener，并指定统一的事件处理程序dispatchEvent</li>
                            <li>事件储存 - 把react组件内的所有事件统一存放到一个对象里，缓存起来，在触发事件的时候查找对应的方法去执行</li>
                        </ul>
                        <Card>
                            <PreviewImg src={VirtualDomImg} />
                        </Card>

                    </Space>
                </Panel>

                <Panel header="关键步骤" key="2">
                    <Space direction="vertical">
                        <Text>react拿到将要挂载组件的虚拟dom（react element对象），然后处理react dom的props，判断属性内是否有声明为事件的属性</Text>
                        <Text>例如onClick、onChange，拿到事件类型click、change和对应的事件处理程序fn。执行下面第三部</Text>

                        <ul>
                            <li>1. 完成事件注册</li>
                            <li>2. 将react dom，事件类型，处理函数fn放到数组储存</li>
                            <li>3. 组件挂载完成后，处理第2步生成的数组，遍历该数组把事件处理函数存储到listenerBrank对象中</li>
                        </ul>

                        <Card>
                            <PreviewImg src={VirtualDomImg2} />
                        </Card>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>


        <PageHeader title="事件执行机制" />
        <Wrap>
            <Card title="流程">
                <ul>
                    <li>1. 进入统一的事件分发函数（dispatchEvent）</li>
                    <li>2. 结合原生事件找到当前节点对应的ReactDOMComponent对象</li>
                    <li>
                        3. 合成事件的开始
                    <ul>
                            <li>3.1 根据当前事件类型生成指定的合成对象</li>
                            <li>3.2 封装原生事件和冒泡机制</li>
                            <li>3.3 查找当前元素以及他素有的父级</li>
                            <li>3.4 在listenerBank查找事件回调并合成到 event（合成事件结束）</li>
                        </ul>
                    </li>
                    <li>4. 批量处理合成事件内的回调事件（事件触发完成end）</li>
                </ul>
            </Card>
            <Card>
                <PreviewImg src={VirtualDomImg3} />
            </Card>

        </Wrap>
    </>
)

export default VirtualDom