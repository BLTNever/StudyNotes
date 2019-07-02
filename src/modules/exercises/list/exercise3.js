import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row, Divider, Tag } from 'antd';

import { inherit1, inherit2, inherit3, inherit4, inherit6, inherit5 } from './example'


const Exercise1 = () => (
    <div>
        <h2>继承</h2>
        <div className="note-wrap">
            <h3>原型、原型链</h3>
            <h4>在 Javascript 中创建对象有两种方式：对象字面量(const obj = {'{}'})和使用new表达式(const obj = new Object())</h4>
            <h4>在 JS 中，每当创建一个函数对象 fn 时，该对象中都会内置一些属性，其中包括 <Tag>prototype</Tag> 和 <Tag>__proto__</Tag>， prototype 即原型对象，它记录着 fn 的一些属性和方法。</h4>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="原型(prototype)">
                        <p><b>prototype</b>对fn 是不可见的，fn不会去查找<b>prototype</b>中的属性和方法</p>
                        <p><b>prototype</b>的主要作用就是继承</p>
                        <p>子类可以通过<b>prototype</b>去访问父类的属性和方法</p>
                        <p>函数的 prototype 不属于自身的原型链，它是创建子类的核心，决定了子类的数据类型，是连接子类原型链的桥梁。</p>
                        <p>在原型对象上定义方法和属性，是为了被子类继承和使用。</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="原型链(__proto__)">
                        <p><b>__proto__</b>存在于普通对象和函数对象中，它的作用就是引用父类的 prototype 对象</p>
                        <p>JS在通过 new 操作符创建一个对象的时候，通常会把父类的 prototype 赋值给新对象的 __proto__属性，这样就形成了一代代传承</p>
                        <p>JS引擎执行对象的方法时，先查找对象本身是否存在该方法，如果不存在，会在原型链上查找，但不会查找自身的prototype。</p>
                    </Card>
                </Col>

            </Row>

            <Divider />

            <h3>ES5继承</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="原型链继承">
                        <Highlight language="javascript">{inherit1}</Highlight>
                        <h5>优点：</h5>
                        <p>简单易于实现，父类的新增的实例与属性子类都能访问</p>
                        <h5>缺点</h5>
                        <p>可以在子类中增加实例属性，如果要新增加原型属性和方法需要在new 父类构造函数的后面</p>
                        <p>无法实现多继承</p>
                        <p>创建子类实例时，不能向父类构造函数中传参数</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="构造继承">
                        <Highlight language="javascript">{inherit2}</Highlight>
                        <h5>优点：</h5>
                        <p>解决了子类构造函数向父类构造函数中传递参数</p>
                        <p>可以实现多继承（call或者apply多个父类）</p>
                        <h5>缺点：</h5>
                        <p>方法都在构造函数中定义，无法复用</p>
                        <p>不能继承原型属性/方法，只能继承父类的实例属性和方法</p>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="实例继承">
                        <Highlight language="javascript">{inherit3}</Highlight>
                        <h5>优点：</h5>
                        <p>不限制调用方式、简单，易实现</p>
                        <h5>缺点：</h5>
                        <p>不能多次继承</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="组合式继承">
                        <Highlight language="javascript">{inherit4}</Highlight>
                        <h5>优点：</h5>
                        <p>函数可以复用</p>
                        <p>不存在引用属性问题</p>
                        <p>可以继承属性和方法，并且可以继承原型的属性和方法</p>
                        <h5>缺点：</h5>
                        <p>由于调用了两次父类，所以产生了两份实例</p>
                    </Card>
                </Col>
            </Row>

            <Divider />

            <h3>ES6继承</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="class">
                        <Highlight language="javascript">{inherit6}</Highlight>
                        <p>es6通过class来定义类，通过extends实现了继承。实际上这些关键字只是一些语法糖，底层实现还是通过原型链之间的委托关联关系实现继承。</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="es5模拟class继承(寄生组合继承)">
                    <Highlight language="javascript">{inherit5}</Highlight>
                    </Card>
                </Col>

            </Row>


        </div>




    </div>
)

export default Exercise1   
