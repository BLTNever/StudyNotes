
import React from 'react';
 import Highlight from '@components/HighLight'
;

import { Card, Col, Row, Divider } from 'antd';
import { debounce, throttle, bind1, bind2, bind3, subscriber, publisher, eventPublish } from './example';

console.log(bind1)
const Note6 = () => (
    <div>
        <h2>遇到的一些问题记录</h2>

        <div className="note-wrap">
            <h3></h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="实现一个bind函数">
                        <Highlight language="javascript">{bind1}</Highlight>
                        <p>使用apply进行模拟bind</p>
                        <p>Array.protoype.slice.call(arguments, 1) 获取参数, 存在预置参数丢失的问题</p>
                        <Highlight language="javascript">{bind2}</Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="实现一个apply函数">
                        <Highlight language="javascript">{bind3}</Highlight>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="note-wrap">
            <h3>函数防抖、函数节流</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="函数防抖(debounce)">
                        <h4>思路: </h4>
                        <p>把目标方法fn包装在setTimeout里。fn是某个事件的回调函数</p>
                        <p>如果fn一直执行，通过clearTimeout将事件内的连续动作删掉</p>
                        <Highlight language="javascript">
                            {debounce}
                        </Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="函数节流(throttle)">
                        <h4>函数节流: 让某个方法在某个时间段内只执行一次</h4>
                        <p>需要保存上次执行的时间点与定时器</p>
                        <Highlight language="javascript">
                            {throttle}
                        </Highlight>
                    </Card>
                </Col>
            </Row>
        </div>

        <Divider />

        <div className="note-wrap">
            <h3>观察者模式与发布订阅模式</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="观察者模式(observer)">
                        <h4>在软件设计中，观察者模式是一个对象，维护一个依赖列表，当任何状态改变的时候自动通知它们</h4>
                        <p>观察者(observer)知道Subject的，Subject保持对观察者的记录，/</p>
                        <p>观察者模式大多数时候是同步的</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="发布订阅模式(publisher/subscribers)">
                        <h4>在观察者模式中的Subject就像一个发布者(Publisher)，观察者(Observer)完全和订阅者(Subscriber)关联。subject通知观察者就像一个发布者通知他的订阅者。</h4>
                        <p>在发布订阅模式中，发布者(publisher)与(subscriber)互相不知道，只能通过信息代理进行通信</p>
                        <p>发布订阅模式大多数时候是同步的</p>
                    </Card>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={12}>
                    <Card title="发布者(publisher)">
                        <p>对象subscribers:(type: [subscriberFn, ....])包含了订阅的类型及其订阅者   </p>
                        <p>函数subscribe(new subscriberFn, type)添加新的订阅者到对应的订阅者数组中</p>
                        <p>函数unsubscribe(subscriberFn, type)从数组中移除订阅者</p>
                        <p>函数publish(type)发布者状态改变，通知所有订阅者</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="订阅者(subscribers)">
                        <p>函数subscribeFn()发布者状态改变时，通知所使用的函数回调</p>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="发布者(publisher)">
                        <Highlight>{publisher}</Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="订阅者(subscribers)">
                        <Highlight>{subscriber}</Highlight>
                    </Card>
                </Col>
            </Row>

            <Row gutter={16}>
                <Card title="Event类 发布订阅模式">
                    <Highlight>{eventPublish}</Highlight>
                </Card>
            </Row>
        </div>

        <Divider />

        <div className="note-wrap">
            <h3>for...in & for...of</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="for...of">
                        <p><b>for...of语句</b>在<b>可迭代对象(包括Array，Map，Set，String，TypedArray，arguments 对象等等)</b>上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。</p>
                        <p>for...of的循环，可以由break, continue, throw 或return终止。在这些情况下，迭代器关闭。</p>
                        <p>for...of 语句遍历可迭代对象定义要迭代的数据。</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="for...in">
                        <p>for...in遍历的是数组的索引</p>
                        <p>for...in语句遍历顺序有可能不是按照实际数组的内部顺序</p>
                        <p>for...in不应该用于迭代一个 Array，其中索引顺序很重要。更适合便利 对象</p>
                        <p>for...in 循环遍历所有可枚举属性, 以及对象从其构造函数原型中继承的属性(更接近原型链中对象的属性覆盖原型属性)。</p>
                        <p>如果不想遍历原型方法和属性的话，可以在循环内部判断一下,hasOwnPropery方法可以判断某属性是否是该对象的实例属性</p>
                        <p>for...in语句以原始插入顺序迭代对象的可枚举属性。</p>
                    </Card>
                </Col>
            </Row>
        </div>

        <Divider />

        
    </div >
)

export default Note6;

