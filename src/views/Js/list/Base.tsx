
import React from 'react'

import { Card, Col, Row, Divider } from 'antd'

import { } from './example';

import stack from '@images/stack.jpg'
import queue from '@images/queue.jpg'

import PreviewImg from '@components/previewImg'

const Note14 = () => (
    <div>
        <div className="note-wrap">
            <h3>基础知识</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="进程（process）">
                        <p>进程是系统资源分配一个独立单位，一个程序至少有一个进程。比方说: 一个工厂代表一个 CPU, 一个车间就是一个进程，任一时刻，只能有一个进程在运行，其他进程处于非运行状态。</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="线程（Thread）">
                        <p>线程是CPU调度和分派的基本单位，一个线程只能属于一个进程，一个进程可以有多个线程且至少有一个。比方说一个车间的工人，可以有多个工人一起工作。</p>
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Row gutter={16}>
                <Col span={12}>
                    <Card title="栈(stack)">
                        <p>栈是一种数据结构，具有后进先出的特点，最开始进入栈结构的数据反而最后才能出来。</p>
                        <PreviewImg src={stack} />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="队列(queue)">
                        <p>队列是一种数据结构，数据只能从一边进，一边出，先进去的自然就先出来。</p>
                        <PreviewImg src={queue} />
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Row gutter={16}>
                <Col span={12}>
                    <Card title="同步和异步(sync async)">
                        <p>同步和异步关注的消息通信机制，同步在函数调用时，如果调用者没有拿到响应结果，程序会继续等待，知道拿到结果为止。而异步会执行其后的代码，等到有响应结果后，才处理响应。</p>
                        同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；
                        异步任务指的是，不进入主线程、而进入”任务队列”（task queue）的任务，只有”任务队列”通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="阻塞和非阻塞(blocking & non-blocking)">
                        <h4>阻塞和非阻塞关注的是程序等待调用结果时的状态，阻塞的意思是，在调用结果返回响应前，线程会被挂起占用，程序无法继续往下走，而非阻塞的线程则不会挂起，后面的代码能够继续往下执行。</h4>
                        <p>比方说: 我去超市买包薯片，老板告诉我货架上没货了，马上去库房拿，这过程中，老板要我站着等他，直到他拿到货出来给我。这个过程就是阻塞。</p>
                        <p>如果老板告诉我，可以先回去，他一会去库房拿，拿到了之后打电话给我。这个过程，就是非阻塞的，我不用等待，还可以干其他的事情。</p>
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Card title="为什么 JS 是单线程模型？">
                <h4>浏览器执行环境的核心思想在于任务调度方式的特别</h4>
                <p>JavaScript 的一个非常有趣的特性是事件循环模型，与许多其他语言不同，它永不阻塞。 处理 I/O 通常通过事件和回调来执行</p>
                <p>哪个任务的优先级高，先来就先运行，直到执行完了才执行下一个，并且同一时刻只能执行一个代码片段，即所谓的单线程模型。</p>
            </Card>

        </div>
    </div >
)
export default Note14;
