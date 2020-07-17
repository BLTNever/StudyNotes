/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Highlight from 'react-highlight'

import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import syncAsync from '@images/syncAsync.jpg'
import macroMicro from '@images/macroMicro.jpg'
import sync from '@images/sync.png';
import multithreading from '@images/multithreading.png'

import { note2Fn, note2Subject } from './example'
import PreviewImg from '../../../components/previewImg'
import { Wrap } from '@components/Base'
const { Panel } = Collapse
const { Paragraph, Title, Text } = Typography
const EventLoop = () => (
    <>
        <PageHeader title="JS事件循环" />
        <Wrap>
            <Collapse defaultActiveKey={['1']} ghost>
                <Panel header="什么是事件循环？" key="1">
                    <Space direction="vertical">
                        <Text>JavaScript是单线程的，但是JavaScript的宿主环境不是单线程的，如浏览器、nodejs(引入web workers之前)</Text>
                        <Text>为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。</Text>
                        <Text>单线程在程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行。</Text>

                        <Text>所有任务可以分成两种：</Text>
                        <ul>
                            <li>同步任务（synchronous）:在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务</li>
                            <li>异步任务（asynchronous）:不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行</li>
                        </ul>
                        <Text>异步执行的运行机制:（同步执行也是如此，因为它可以被视为没有异步任务的异步执行）</Text>
                        <ul>
                            <li> 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）</li>
                            <li>主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件</li>
                            <li>一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行</li>
                            <li>主线程不断重复上面的第三步</li>
                        </ul>
                        <Text>只要主线程空了，就会去读取"任务队列"，这就是JavaScript的运行机制。这个过程会不断重复。所以整个的这种运行机制又称为Event Loop（事件循环）</Text>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>
        <div className="note-wrap">
            <h3>同步、异步任务</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="同步、异步">
                        <ul>
                            <li>1. 同步和异步任务分别进入不同的执行'场所'，同步的进入主线程，异步的进入<b>Event Table(事件表)</b>并注册函数。</li>
                            <li>2. 当指定的事情完成时，Event Table会将这个函数移入<b>Event Queue(事件队列)</b>。</li>
                            <li>3. 主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。</li>
                            <li>4. 上述过程会不断重复，也就是常说的<b>Event Loop(事件循环)</b>。</li>
                            <li>5. js引擎存在monitoring process进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去Event Queue那里检查是否有等待被调用的函数。</li>
                        </ul>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="图示">
                        <PreviewImg src={syncAsync} />
                    </Card>
                </Col>
            </Row>
        </div>
        <div className="note-wrap">
            <h3>执行栈与任务队列</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="执行环境的两个结构">
                        <h4>执行栈(execution context stack)，也可以叫执行上下文栈：JavaScript执行栈，顾名思义，是由执行上下文组成，当函数调用时，创建并插入一个执行上下文，通常称为执行栈帧（frame），存储着函数参数和局部变量，当该函数执行结束时，弹出该执行栈帧</h4>
                        <h4>任务队列（task queue）：存储待处理消息及对应的回调函数或事件处理程序(除了IO设备（ajax获取服务器数据）的事件以外，还包括一些用户产生的事件（mouseover、click、scroll、keyup等）和定时器等)</h4>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="事件循环流程">
                        <Text>1. 宿主环境为JavaScript创建线程时，会创建堆(heap)和栈(stack)，堆内存储JavaScript对象，栈内存储执行上下文。</Text>
                        <Text>2. 栈内执行上下文的同步任务按序执行，执行完即退栈，而当异步任务执行时，该异步任务进入等待状态（不入栈），同时通知线程：当触发该事件时（或该异步操作响应返回时），需向任务队列（task queue）插入一个事件消息。</Text>
                        <Text>3. 当事件触发或响应返回时，线程向任务队列（task queue）插入该事件消息（包含事件及回调）。</Text>
                        <Text>4. 当栈内同步任务执行完毕后，线程从任务队列（task queue）取出一个事件消息，其对应异步任务（函数）入栈，执行回调函数，如果未绑定回调，这个消息会被丢弃，执行完任务后退栈。</Text>
                        <Text>5. 当线程空闲（即执行栈清空）时继续拉取任务队列（task queue）下一轮消息（next tick，事件循环流转一次称为一次tick）。</Text>
                    </Card>
                </Col>
            </Row>
            <Divider dashed />
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="同步">
                        <Text>计算机一行一行按顺序依次执行代码，当前代码任务耗时执行会阻塞后续代码的执行。</Text>
                        <Text>同步编程，即是一种典型的请求-响应模型，当请求调用一个函数或方法后，需等待其响应返回，然后执行后续代码。</Text>
                        <PreviewImg src={sync} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="异步">
                        <Text>使用异步编程时，在等待当前任务的响应返回之前，可以继续执行后续代码，即当前执行任务不会阻塞后续执行。</Text>
                        <Text>异步编程，不同于同步编程的请求-响应模式，其是一种事件驱动编程，请求调用函数或方法后，无需立即等待响应，可以继续执行其他任务，而之前任务响应返回后可以通过状态、通知和回调来通知调用者。</Text>
                        <Text>同时开启多个线程，不同操作能并行执行</Text>
                        <Text>在异步任务中，又可以分为两种，macrotask(宏任务)和micro(微任务)</Text>
                        <PreviewImg src={multithreading} />
                    </Card>
                </Col>
            </Row>
            <Divider dashed />
            <Card title="并行与并发">
                <Text>JavaScript语言执行环境在V8引擎下是单线程的，单线程在程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行，而使用异步实现时，多个任务可以并发执行。</Text>
                <h4>多线程的任务可以并行执行，而JavaScript单线程异步编程可以实现多任务并发执行</h4>
                <Text>并行，指同一时刻内多任务同时进行；</Text>
                <Text>并发，指在同一时间段内，多任务同时进行着，但是某一时刻，只有某一任务执行；</Text>
            </Card>
        </div>



        <div className="note-wrap">

            <h3>Tasks(宏任务、micro-task(微任务)</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="task(宏任务、micro-task(微任务)">
                        <Text><b>Tasks(宏任务)：</b>包括整体代码script，setTimeout，setInterval</Text>
                        <Text><b>micro-task(微任务)：</b>Promise，process.nextTick</Text>
                        <Text>事件循环的顺序，决定js代码的执行顺序。进入整体代码(宏任务)后，开始第一次循环。接着执行所有的微任务。然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有的微任务</Text>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="图示">
                        <PreviewImg src={macroMicro} />
                    </Card>
                </Col>
            </Row>

            <h3>代码示例</h3>
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
        </div>

        <div className="note-wrap">
            <Card title="题：">
                <code lang="JavaScript">
                    <Highlight language="javascript">{note2Subject}</Highlight>
                </code>
            </Card>
        </div>


    </ >
)

export default EventLoop