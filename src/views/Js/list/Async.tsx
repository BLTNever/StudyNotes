import React from 'react';
import Highlight from '@components/HighLight'

import { Card, Col, Row, Divider, Collapse, Typography, Tag, Space, Tooltip } from 'antd'

import { Wrap } from '@components/Base'
import * as eg from './example'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography
const Async = () => (
    <>
        <Wrap>
            <Title level={3}>Promise</Title>
            <Collapse ghost>
                <Panel header="promise原理" key="1">
                    <Space direction="vertical">

                    </Space>
                </Panel>

                <Panel header="promise实现" key="2">
                    <Space direction="vertical">

                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>async/await</Title>
            <Collapse ghost>
                <Panel header="async/await原理" key="1">
                    <Space direction="vertical">
                        <Text>async - 定义异步函数(async function someName(){ })</Text>
                        <Text>await - 暂停异步函数的执行 (const result = await someAsyncCall())</Text>
                        <ul>
                            <li>自动把函数转换为Promise</li>
                            <li>当调用异步函数时，函数返回值会被resolve处理</li>
                            <li>异步函数内部可以使用await</li>
                        </ul>
                        <ul>
                            <li>在Promise前面使用时，await等待Promise完成，并返回Promise的结果</li>
                            <li>await只能和Promise一起使用，不能和callback一起使用</li>
                            <li>await智能在async函数中</li>
                        </ul>
                        <h4>Async/Await & Promise</h4>
                        <p>Async/Await底层依然使用了Promise</p>
                        <p>多个异步函数同时执行时，可以使用Promise.all</p>
                        <Highlight language="javascript">{eg.async1}</Highlight>
                        <p>每次遇到 await 关键字时，Promise 都会停下在，一直到运行结束。await 把异步变成了同步。</p>
                        <Highlight language="javascript">{eg.async2}</Highlight>
                        <Divider dashed />
                        <h4>Async/Await错误处理</h4>
                        <p>在Async/Await中使用 try/catch 进行错误处理。在Promise中.catch()分支会进入到catch语句</p>
                    </Space>
                </Panel>
                <Panel header="async/await实现" key="2">

                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>generator</Title>
            <Collapse ghost>
                <Panel header="generator实现原理" key="1">
                    <Space direction="vertical">
                        <ul>
                            <p>「Generator实现的核心在于上下文的保存，函数并没有真的被挂起，每一次yield，其实都执行了一遍传入的生成器函数，只是在这个过程中间用了一个context对象储存上下文，使得每次执行生成器函数的时候，都可以从上一个执行结果开始执行，看起来就像函数被挂起了一样」</p>
                            <li>定义的function*生成器函数被转化分为三大块:
                                <ul>
                                    <li>1. gen$(_context)由yield分割生成器函数代码而来</li>
                                    <li>2. context对象用于储存函数执行上下文</li>
                                    <li>3. 迭代器法定义invoke()方法定义next()，用于执行gen$(_context)来跳到下一步s</li>
                                </ul>
                            </li>
                            <li>当我们调用g.next()，就相当于调用invoke()方法，执行gen$(_context)，进入switch语句，switch根据context的标识，执行对应的case块，return对应结果</li>
                            <li>当生成器函数运行到末尾(没有下一个yield或已经return)，switch匹配不到对应代码块，就会return空值，这时g.next()返回{`{value: undefined, done: true}`}</li>
                        </ul>
                    </Space>
                </Panel>
                <Panel header="generator实现" key="2">
                    <Space direction="vertical">
                        <Highlight>{eg.gen}</Highlight>
                    </Space>

                </Panel>
            </Collapse>
        </Wrap>
    </>
)

export default Async;
