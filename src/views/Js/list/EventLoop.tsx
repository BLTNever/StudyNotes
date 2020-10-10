/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Highlight from 'react-highlight'

import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import eventLoopGif from '@images/eventLoop.gif'
import eventLoop from '@images/eventloop.jpeg'
import macroMicro from '@images/macro-micro.jpg'
import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import { note2Fn, note2Subject } from './example'
const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography
const EventLoop = () => (
    <>
        <PageHeader title="JS事件循环" />

        <Wrap>
            <Collapse defaultActiveKey={['1']} ghost>
                <Panel header="什么是事件循环？" key="1">
                    <Space direction="vertical">
                        <Text>JavaScript是单线程的，但是JavaScript的宿主环境不是单线程的，如浏览器（引入web workers之前）、nodejs</Text>
                        <Text>为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。</Text>
                        <Text>单线程在程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行。</Text>

                        <Text>所有任务可以分成两种：</Text>
                        <ul>
                            <li><Text mark>同步任务（synchronous）</Text>:在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务</li>
                            <li><Text mark>异步任务（asynchronous）</Text>:不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行</li>
                        </ul>
                        <Text>异步执行的运行机制:（同步执行也是如此，因为它可以被视为没有异步任务的异步执行）</Text>
                        <ul>
                            <li> 所有同步任务都在主线程上执行，形成一个<Text mark>执行栈（execution context stack）</Text></li>
                            <li>主线程之外，还存在一个<Text mark>"任务队列"（task queue</Text>）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件</li>
                            <li>一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行</li>
                            <li>主线程不断重复上面的第三步</li>
                        </ul>
                        <Text>只要主线程空了，就会去读取"任务队列"，这就是JavaScript的运行机制。这个过程会不断重复。所以整个的这种运行机制又称为Event Loop（事件循环）</Text>

                        <Link href="http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!" target="_blank">
                            查看EventLoop执行
                        </Link>
                    </Space>
                </Panel>

                <Panel header="同步、异步任务" key="2">
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card title="同步、异步">
                                <ul>
                                    <li>1. 主线程运行的时候会生成堆（heap）和栈（stack）</li>
                                    <li>2. js从上到下解析方法，将其中的<Text mark>同步任务按照执行顺序</Text>排列到<Text mark>执行栈</Text>中</li>
                                    <li>3. 当程序调用外部的API时，比如ajax、setTimeout等，会将此类异步任务挂起，继续执行执行栈中的任务，等异步任务返回结果后，再按照执行顺序排列到事件队列中</li>
                                    <li>4. 主线程先将执行栈中的同步任务清空，然后检查<Text mark>事件队列（QUEUE）</Text>中是否有任务，如果有，就将第一个事件对应的回调推到执行栈中执行，若在执行过程中遇到异步任务，则继续将这个异步任务排列到事件队列中</li>
                                    <li>5. js引擎存在monitoring process进程，主线程每次将执行栈清空后，就去事件队列中检查是否有任务，如果有，就每次取出一个推到执行栈中执行，这个过程是循环往复的... ...，这个过程被称为“Event Loop 事件循环”</li>
                                </ul>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="图示">
                                <PreviewImg src={eventLoopGif} />
                            </Card>
                        </Col>
                    </Row>
                </Panel>

                <Panel header="执行栈与任务队列" key="3">
                    <Space direction="vertical">
                        <Title level={4}>执行栈（execution context stack），也可以叫执行上下文栈：JavaScript执行栈，顾名思义，是由执行上下文组成，当函数调用时，创建并插入一个执行上下文，通常称为执行栈帧（frame），存储着函数参数和局部变量，当该函数执行结束时，弹出该执行栈帧</Title>
                        <Title level={4}>任务队列（task queue）：存储待处理消息及对应的回调函数或事件处理程序（除了IO设备（ajax获取服务器数据）的事件以外，还包括一些用户产生的事件（mouseover、click、scroll、keyup等）和定时器等）</Title>
                    </Space>
                </Panel>

                <Panel header="Macrotask 和 Microtask" key="4">
                    <Space direction="vertical">
                        <ul>
                            <li><Text mark>Macrotask</Text>（宏任务）: <Text code>setTimeout</Text>, <Text code>setInterval</Text>, <Text code>setImmediate</Text>, I/O, UI rendering</li>
                            <li><Text mark>Microtask</Text>（微任务）: <Text code>process.nextTick</Text>, <Text code>Promises</Text>, <Text code>Object.observe</Text>（废弃）,<Text code>MutationObserver</Text></li>
                        </ul>
                        <Text mark>同一次事件循环中，微任务永远在宏任务之前执行</Text>
                        <Link href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" target="_blank">
                            Macrotask 和 Microtask执行顺序的可视化操作演示
                        </Link>
                        <Card>
                            <ul>
                                <li>Macrotask的回调任务会推到<Text mark>Macrotask Queues</Text>中</li>
                                <li>Microtask任务中的函数会被推入<Text mark>Microtasks Queues </Text>队列</li>
                                <li><Text mark>在每一次事件循环中， Macrotask 只会提取一个执行，而 Microtask 会一直提取，直到 Microtasks Queues 队列清空</Text></li>
                                <li><Text mark>事件循环每次只会入栈一个 Macrotask ，主线程执行完该任务后又会先检查 Microtasks Queues 队列并完成里面的所有任务后再执行 Macrotask</Text></li>
                                <li><Text strong>当microtask队列为空时，event loop检查是否需要执行UI重渲染，如果需要则重渲染UI。这样就结束了当次循环，继续从头开始检查macrotask队列</Text></li>
                            </ul>
                        </Card>

                        <Card title="macrotask跟microtask执行顺序">
                            <Space direction="vertical">
                                <ul>
                                    <li>macrotasks: setTimeout 、setInterval、 setImmediate、requestAnimationFrame,I/O 、UI渲染microtasks: Promise、 process.nextTick、 Object.observe、 MutationObserver</li>
                                    <li>microtasks: Promise、 process.nextTick、 Object.observe、 MutationObserver</li>
                                </ul>
                                <Text>当一个程序有：setTimeout， setInterval ，setImmediate， I/O， UI渲染，Promise ，process.nextTick， Object.observe， MutationObserver的时候：</Text>
                                <Text>1.先执行 macrotasks：I/O -》 UI渲染-》requestAnimationFrame</Text>
                                <Text>2.再执行 microtasks ：process.nextTick -》 Promise -》MutationObserver -》 Object.observe</Text>
                                <Text>3.再把setTimeout setInterval setImmediate【三个货不讨喜】 塞入一个新的macrotasks，依次：setTimeout、setInterval -》setImmediate</Text>

                                <Row gutter={16}>
                                    <Col span={12}>
                                        <PreviewImg src={macroMicro} />

                                    </Col>
                                    <Col span={12}>
                                        <Card title="code">
                                            <Highlight language="javascript">{note2Fn}</Highlight>
                                        </Card>
                                    </Col>
                                </Row>
                            </Space>
                        </Card>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>


        <PageHeader title="事件循环进程模型" />
        <Wrap>
            <Collapse defaultActiveKey={['1']} ghost>
                <Panel header="模型" key="1">
                    <Space direction="vertical">
                        <Card>
                            <ul className="no-style">
                                <li>1. 选择最先进入 事件循环任务队列的一个任务， 如果队列中没有任务，则直接跳到第6步的 Microtask</li>
                                <li>2. 设置 事件循环的当前运行任务为上一步所选择的任务</li>
                                <li>3. Run: 运行所选任务</li>
                                <li>4. 设置 事件循环的当前运行任务为 null</li>
                                <li>5. 将刚刚第3步运行的任务从它的任务队列中删除</li>
                                <li>6.  Microtasks: perform a microtask checkpoint</li>
                                <li>7. 更新并渲染界面</li>
                                <li>8. 返回第1步</li>
                            </ul>
                        </Card>
                        <Text strong>perform a microtask checkpoint 的执行步骤:</Text>
                        <Card>
                            <ul className="no-style">
                                <li>1. 设置 performing a microtask checkpoint 的标记为 true</li>
                                <li>2. Microtask queue handling: 如果事件循环的 microtask queue 是空，跳到第8步 Done</li>
                                <li>3. 选取最先进入 microtask queue 的 microtask</li>
                                <li>4. 设置 事件循环的当前运行任务 为上一步所选择的任务</li>
                                <li>5. Run: 执行所选取的任务</li>
                                <li>6. 设置 事件循环的当前运行任务 为 null</li>
                                <li>7. 将刚刚第5步运行的 microtask 从它的 microtask queue 中删除</li>
                                <li>8. Done: For each environment settings object whose responsible event loop is this event loop, notify about rejected promises on that environment settings object</li>
                                <li>9. 清理 Index Database 的事务</li>
                                <li>10. 使 performing a microtask checkpoint 的标记为 false</li>
                            </ul>
                        </Card>

                        <Card >
                            <PreviewImg src={eventLoop} />
                        </Card>
                    </Space>
                </Panel>

                <Panel header="示例" key="2">
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card title="code">
                                <Highlight language="javascript">{note2Fn}</Highlight>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="代码执行顺序">
                                <ul>
                                    <li>1. 这段代码作为宏任务，进入主线程。</li>
                                    <li>2. 先遇到setTimeout，那么将其回调函数注册后分发到宏任务Event Queue。</li>
                                    <li>3. 接下来遇到了Promise，new Promise立即执行，then函数分发到微任务Event Queue。</li>
                                    <li>4. 遇到console.log()，立即执行。</li>
                                    <li>5. 整体代码script作为第一个宏任务执行结束。查看有哪些微任务？我们发现了then在微任务Event Queue里面，执行。</li>
                                    <li>6. 第一轮事件循环结束了，我们开始第二轮循环，要从宏任务Event Queue开始。我们发现了宏任务Event Queue中setTimeout对应的回调函数，立即执行。</li>
                                    <li>7. 结束。</li>
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                </Panel>

                <Panel header="题：" key="7">
                    <Card>
                        <code lang="JavaScript">
                            <Highlight language="javascript">{note2Subject}</Highlight>
                        </code>
                    </Card>
                </Panel>
            </Collapse>
        </Wrap>
    </ >
)

export default EventLoop