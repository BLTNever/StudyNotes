
import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row, Divider } from 'antd';
import { debounce, throttle } from './example';

const Note10 = () => (
    <div>
        <h2>理解HTTPS</h2>
        <div className="note-wrap">
            <h3>SSL</h3>
            <h4>SSL（Secure Sockets Layer）直译过来是安全套接层。</h4>
            <p>HTTPS协议就是基于SSL层来实现的</p>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="网络通信的四层模型">
                        <h4>4—应用层:</h4>
                        <p>HTTP, FTP, Tenlnet, SMTP</p>
                        <h4>3—传输层:</h4>
                        <p>TCP, UDP</p>
                        <h4>2—网络层:</h4>
                        <p>IP, ARP, RARP, ICMP, IGMP</p>
                        <h4>1—网络接口层</h4>
                        <p>物理链路访问，光纤、WIFI、4G等</p>

                        <h4>HTTP协议建立在传输层协议之上,而HTTPS就是在两者（应用层和传输层）之间加入一个SSL层，称为加密传输协议。</h4>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="SSL具体功能">
                        <p>1）SSL在实际的数据传输开始前，通讯双方会进行身份认证，确保数据发送到正确的客户机和服务器。</p>
                        <p>2）SSL对传输的数据进行了加密，防止数据中途被窃取。</p>
                        <p>3）SSL对传输的数据进行了封装，用以维护数据的完整性，确保数据在传输过程中不被改变。</p>
                        <p>4）SSL对传输的数据进行了压缩</p>
                    </Card>
                </Col>
            </Row>
        </div>
        <Divider />

        <div className="note-wrap">
            <h3>for...in & for...of</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="for...of">
                        <p><b>for...of语句</b>在<b>可迭代对象（包括Array，Map，Set，String，TypedArray，arguments 对象等等）</b>上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。</p>
                        <p>for...of的循环，可以由break, continue, throw 或return终止。在这些情况下，迭代器关闭。</p>
                        <p>for...of 语句遍历可迭代对象定义要迭代的数据。</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="for...in">
                        <p>for...in语句以任意顺序遍历一个对象的可枚举属性。对于每个不同的属性，语句都会被执行。</p>
                        <p>for...in不应该用于迭代一个 Array，其中索引顺序很重要。</p>
                        <p>for...in 循环只遍历可枚举属性。像 Array和Object使用内置构造函数所创建的对象都会继承自Object.prototype和String.prototype的不可枚举属性，例如 String 的 indexOf()  方法或 Object的toString()方法。循环将遍历对象本身的所有可枚举属性，以及对象从其构造函数原型中继承的属性（更接近原型链中对象的属性覆盖原型属性）。</p>
                        <p>for...in语句以原始插入顺序迭代对象的可枚举属性。</p>
                    </Card>
                </Col>
            </Row>
        </div>


        <div className="note-wrap">
            <h3>i++ & ++i</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="i++">
                        <h4>i++ 返回原来的值</h4>
                        <p>i++ 先返回i , 再自增加1</p>
                        <p>i++ : 先运算，后加1</p>
                        <p>i++ 不能做为左值</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="++i">
                        <h4>++i 返回加1后的值</h4>
                        <p>++i 先自增加1, 再返回i</p>
                        <p>++i : 先加1，后运算</p>
                        <p>++i 可以作为左值</p>
                        <p>左值是对应内存中有确定存储地址的对象的表达式的值，而右值是所有不是左值的表达式的值</p>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="note-wrap">
            <h3>i+=1 & i=i+1</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="i+=1">

                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="i=i+1">

                    </Card>
                </Col>
            </Row>
        </div>
    </div >
)

export default Note10;
