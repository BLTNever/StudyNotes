import React from 'react';
 import Highlight from '@components/HighLight'
;

import { Card, Col, Row, Divider } from 'antd';

import { createNew, createNew2 } from './example'



const Exercise4 = () => (
    <div>
        <h2></h2>
        <div className="note-wrap">
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="new操作符">
                        <h4>new操作符的原理</h4>
                        <p>1. 创建了一个临时对象: obj = new Object()</p>
                        <p>2. 设置原型链: obj.__proto__ = Fn.prototype</p>
                        <p>3. 将构造函数中的 this指向临时对象,并传入参数: Fn.call(obj, arguments)</p>
                        <p>4. 返回临时对象: return obj</p>
                        <Highlight>{createNew}</Highlight>
                        <Highlight>{createNew2}</Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="原型">
                        <h4></h4>
                    </Card>
                </Col>

            </Row>

            <Divider />




        </div>
    </div>
)

export default Exercise4
