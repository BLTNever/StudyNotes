
import React from 'react';
import Highlight from '@components/HighLight'

import { Card, Col, Row, Divider } from 'antd'
import { async1, async2 } from './example'


const Note6 = () => (
    <div>
        <div className="note-wrap">
            <h3>异步</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Promise">

                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Generator">

                    </Card>
                </Col>
            </Row>

            <Divider />

            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Async/Await">
                        <h4>{`Async - 定义异步函数(async function someName(){})`}</h4>
                        <ul>
                            <li>自动把函数转换为Promise</li>
                            <li>当调用异步函数时，函数返回值会被resolve处理</li>
                            <li>异步函数内部可以使用await</li>
                        </ul>
                        <h4>`Await - 暂停异步函数的执行 (var result = await someAsyncCall())`</h4>
                        <ul>
                            <li>在Promise前面使用时，await等待Promise完成，并返回Promise的结果</li>
                            <li>await只能和Promise一起使用，不能和callback一起使用</li>
                            <li>await智能在async函数中</li>
                        </ul>
                        <Divider dashed />
                        <h4>Async/Await & Promise</h4>
                        <p>Async/Await底层依然使用了Promise</p>
                        <p>多个异步函数同时执行时，可以使用Promise.all</p>
                        <Highlight language="javascript">{async1}</Highlight>
                        <p>每次遇到 await 关键字时，Promise 都会停下在，一直到运行结束。await 把异步变成了同步。</p>
                        <Highlight language="javascript">{async2}</Highlight>
                        <Divider dashed />
                        <h4>Async/Await错误处理</h4>
                        <p>在Async/Await中使用 try/catch 进行错误处理。在Promise中.catch()分支会进入到catch语句</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="">

                    </Card>
                </Col>
            </Row>

        </div>
        <div className="note-wrap">

        </div>
    </div >
)

export default Note6;
