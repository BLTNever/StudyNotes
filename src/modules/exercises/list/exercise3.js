import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row, Divider } from 'antd';

import { inherit1, inherit2, inherit3, } from './example'


const Exercise1 = () => (
    <div>
        <h2>继承</h2>
        <div className="note-wrap">
            <h3>ES5继承</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="原型链继承">
                        <Highlight language="javascript">{inherit1}</Highlight>
                        <p>继承过程，都是通过原型链之间的指向进行委托关联，直到最后形成了”由构造函数所构造“的结局</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="深拷贝">
                        <Highlight language="javascript">{inherit2}</Highlight>
                        <p>构造继承关键在于，通过在子类的内部调用父类，即通过使用apply()或call()方法可以在将来新创建的对象上获取父类的成员和方法。</p>
                    </Card>
                </Col>

            </Row>

            <Divider />

            <h3>ES6继承</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="class">
                        <Highlight language="javascript">{inherit3}</Highlight>
                        <p>es6通过class来定义类，通过extends实现了继承。实际上这些关键字只是一些语法糖，底层实现还是通过原型链之间的委托关联关系实现继承。</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="">
                    </Card>
                </Col>

            </Row>


        </div>




    </div>
)

export default Exercise1   
