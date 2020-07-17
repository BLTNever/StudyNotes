
import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row, Tag, Popover } from 'antd';
// import type from '@images/type.jpg';
import refCopy from '@images/refCopy.jpg';

import { note3Subject, valueType } from './example';
import PreviewImg  from '../../../components/previewImg';

const pureFn = (
    <div>
        <p>对于一个函数，给定一个输入，返回一个唯一的输出。</p>
        <p>除此之外，不会对外部环境产生任何附带影响。我们机会称该函数为纯函数。</p>
        <p>所有函数内部定义的变量在函数返回之后都被垃圾回收掉。</p>
    </div>
)

const Note3 = () => (
    <div>
         <h2>值类型</h2>
        <div className="note-wrap">
           
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="基本类型">
                        <p>基础类型将内容直接存储在<b>栈</b>中(大小固定位置连续的存储空间)，记录的是该数据类型的值，即直接访问，基础类型赋值是<b>复制(copy)</b></p>
                        <p>基本类型在赋值的时候是通过值传递的方式。</p>
                        <div><Tag>String</Tag>为字符串基本类型。</div>
                        <div><Tag>Number</Tag>为数值基本类型。</div>
                        <div><Tag>Boolean</Tag>为布尔基本类型。</div>
                        <div><Tag>Symbol</Tag>(ECMAScript2015)为字面量基本类型。</div>
                        <div><Tag>null</Tag>(特殊类型)</div>
                        <div><Tag>undefined</Tag>(特殊类型)</div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="复杂类型">
                        <p>复杂类型将内容存储在<b>堆</b>中，堆所对应的栈中记录的是<b>指针(堆的地址)</b>,外部访问时先引出地址，再通过地址去找到值所存放的位置。复杂类型赋值是<b>地址引用</b>。</p>
                        <p>复杂类型通过引用来传递</p>
                        <div>
                            复杂类型是指object即广义的对象类型，可由多个简单类型的值的合成，可以看作是一个存放各种值的容器。比如
                                <Tag>Array</Tag>、<Tag>Object</Tag>、<Tag>Regx</Tag>
                            等
                            </div>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="note-wrap">
            <h3>JS值类型和引用类型的区别</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="值类型：">
                        <p> 1、占用空间固定，保存在栈中（当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束，这个方法的内存栈也将自然销毁了。因此，所有在方法中定义的变量都是放在栈内存中的；栈中存储的是基础变量以及一些对象的引用变量，<b>基础变量的值是存储在栈中，而引用变量存储在栈中的是指向堆中的数组或者对象的地址，这就是为何修改引用类型总会影响到其他指向这个地址的引用变量。</b>）</p>
                        <p>2、<b>保存与复制的是值本身</b></p>
                        <p>3、它们是完全独立的拷贝，互不干涉。</p>
                        <p>4、使用typeof检测数据的类型</p>
                        <p>5、<b>基本类型</b>数据传递是值类型</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="引用类型：">
                        <p>1、占用空间不固定，保存在堆中（当我们在程序中创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大），这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法结束后，这个对象还可能被另一个引用变量所引用（方法的参数传递时很常见），则这个对象依然不会被销毁，只有当一个对象没有任何引用变量引用它时，系统的垃圾回收机制才会在核实的时候回收它。）</p>
                        <p>2、保存与复制的是指向对象的一个指针</p>
                        <p>3、使用instanceof检测数据类型</p>
                        <p>4、使用new()方法构造出的对象是引用型</p>
                        <p>5、<b>复杂类型</b>数据传递是引用类型</p>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="note-wrap">
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="实例：">
                        <Highlight language="javascript">{valueType}</Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="引用传递图示：">
                        <PreviewImg src={refCopy} />
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="note-wrap">
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="== 和 ===">
                        <p>对于引用类型的变量，==和===只会判断引用的地址是否相同，而不会判断对象具体里属性以及值是否相同。因此，如果两个变量指向相同的对象，则返回true。</p>
                        <p>如果是不同的对象，及时包含相同的属性和值，也会返回false。</p>
                        <p>如果想判断两个不同的对象是否真的相同，可以将它们转换为字符串然后判断。或递归去判断每一个属性的值</p>
                        {/* <Highlight language="javascript">{note3Subject}</Highlight> */}
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="函数参数">
                        <p><b>基本类型输入：</b>当我们将基本类型数据传入函数，函数会将这些数据拷贝赋值给函数的参数变量。</p>
                        <p><b>复杂类型输入：</b>传入的是一个引用。对该变量的操作将会影响到原本的对象。这样的编程手法将产生附带影响，使得代码的逻辑复杂和可读性变低。</p>
                        <div>
                            我们想要达到的效果是&nbsp;
                                <Popover content={pureFn} title="纯函数">
                                <Tag color="orange">纯函数</Tag>
                            </Popover>&nbsp;,
                            比如Array.map和Array.filter是以纯函数的形式实现。虽然它们的参数是一个数组变量，但是通过深度拷贝并赋值给一个新的变量，然后在新的数组上操作，来防止原始数组被更改。
                            </div>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="note-wrap">
            <Card title="题：">
                <Highlight language="javascript">{note3Subject}</Highlight>
            </Card>
        </div>

    </div >
)

export default Note3;
