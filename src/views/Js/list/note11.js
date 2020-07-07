
import React from 'react';
import Highlight from 'react-highlight';

import { note11Example1, note11Example2, note11Example3, note11Example4 } from './example';

import { Card, Col, Row, Divider, Tag } from 'antd';

const Note11 = () => (
    <div>
        <h2>理解原型和闭包</h2>
        <div className="note-wrap">
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="一切都是对象">
                        <h4>除了四种基本类型：<Tag color="orange">undefined、Number、String、Boolean</Tag>，引用类型都是对象；</h4>
                        <Tag color="cyan">对象是<b>属性的合集</b></Tag>
                        <Divider />
                        <h3>对象和函数的关系</h3>
                        <h4>1.对象是通过函数创建的</h4>
                        <Highlight>{note11Example1}</Highlight>
                        <h4>2.函数是一种对象</h4>
                        <p>函数是一个属性的合集，可以对函数进行自定义属性</p>
                        <Highlight>{`fn instanceof Object // true`}</Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="prototype原型">
                        <h4>函数都有一个属性：<b>prototype</b></h4>
                        <p>Fn.protoype的属性是一个<b>对象(属性的合集)</b></p>
                        <p>默认的只有一个叫做constructor的属性，指向这个函数本身。</p>
                        <Highlight>{note11Example2}</Highlight>
                        
                        <h4>在自定义的方法的prototype中新增自己的属性</h4>
                        <Highlight>{note11Example3}</Highlight>

                        <h4>每个对象都有一个隐藏的属性——“__proto__”</h4>
                        <p>这个属性引用了创建这个对象的函数的prototype</p>
                        <Highlight>{note11Example4}</Highlight>
                        <p>每个对象都有一个隐藏的属性——“__proto__”，这个属性引用了创建这个对象的函数的prototype</p>
                        <p> 即：fn.__proto__ === Fn.prototype</p>
                    </Card>
                </Col>
            </Row>
        </div>

        <Divider />

        <div className="note-wrap">
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="prototype原型">
                        <h4>函数都有一个属性：<b>prototype</b></h4>
                        <p>Fn.protoype的属性是一个<b>对象(属性的合集)</b></p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="对象和函数的关系">

                    </Card>
                </Col>
            </Row>
        </div>

        <Divider />

    </div >
)

export default Note11;
