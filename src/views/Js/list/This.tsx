
import React from 'react';
import Highlight from '@components/HighLight'

import { Card, Col, Row, Divider, Collapse, Typography, Tag, Space, Tooltip } from 'antd'

import { Wrap } from '@components/Base'
import { objectThis1, objectThis2, fnThis, constructedFnThis, arrowFn, arrowFn2 } from './example';

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography
const This = () => (
    <>

        <Wrap>
            <Title level={3}>this调用</Title>
            <Text mark>this的含义非常多，可以是全局对象、当前对象或者是任意对象，取决于<b>函数的调用方式</b></Text>
            <p>函数有以下几种调用方式: </p>
            <ul>
                <li>作为对象方法调用</li>
                <li>作为函数调用</li>
                <li>作为构造函数调用</li>
                <li>apply或call调用</li>
            </ul>
            <Collapse ghost>
                <Panel header="对象方法调用" key="1">
                    <Space direction="vertical">
                        <Text mark>作为对象方法调用的时候，this会被绑定到该对象。</Text>
                        <Highlight language="javascript">{objectThis1}</Highlight>
                        <Divider dashed />
                        <Text mark>this在函数执行的时候去获取对应的值，而不是函数定义时。即使是对象方法调用，如果该方法的函数属性以函数名的形式传入别的作用域，也会改变this的指向</Text>
                        <Highlight language="javascript">{objectThis2}</Highlight>
                    </Space>
                </Panel>

                <Panel header="函数调用" key="2">
                    <Space direction="vertical">
                        <p>函数直接调用， this绑定到全局对象</p>
                        <p>在函数内部定义的函数， this指向的也会指向全局</p>
                        <p>解决方案: 进入函数中的函数时，<b>将this保存到一个变量中，再运用该变量即可</b></p>
                        <Highlight language="javascript">{fnThis}</Highlight>
                    </Space>
                </Panel>

                <Panel header="构造函数调用" key="3">
                    <Space direction="vertical">
                        <Text mark>在javascript中自己创建构造函数时可以利用this来指向新创建的对象上。这样就可以避免函数中的this指向全局了。</Text>
                        <Highlight language="javascript">{constructedFnThis}</Highlight>
                    </Space>
                </Panel>

                <Panel header="apply、call、bind调用" key="4">
                    <Space direction="vertical">
                        <Text mark>apply 和 call 能切换函数执行的上下文环境,也就是<b>改变this绑定的对象</b></Text>
                        <Text>aTextply与call的区别:  <b>apply入参要求是数组(fn.call(obj, [1, 2, 3]);)</b>、<b>call入参要求是分开传入(fn.call(obj, 1, 2, 3);)</b></Text>
                        <Text mark>bind也可以用来改变this的指向</Text>
                        <ul>
                            <li>与apply、call的区别是，<b>bind方法返回的是一个修改过的函数</b></li>
                            <li>多次bind是无效的。bind()的实现，相当于使用函数在内部报了一个call/apply</li>
                            <li>call和apply都是改变上下文中的this并立即执行这个函数，bind方法是让对应的函数调用的时候再执行，并且可以将参数在执行的时候添加，这是它们的区别</li>
                        </ul>
                        <Highlight language="javascript">{fnThis}</Highlight>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>箭头函数</Title>
            <Collapse ghost>
                <Panel header="箭头函数特性" key="1">
                    <Space direction="vertical">
                        <p>箭头函数内部<b>没有constructor方法</b>, 也<b>没有prototype</b>, <b>不支持new操作</b></p>
                        <p>箭头函数对this的处理与一般的普通函数不同。</p>
                        <p>箭头函数的this <b>始终指向函数定义时的this, 而非执行时</b></p>
                        <Highlight language="javascript">{arrowFn}</Highlight>
                        <Text mark>箭头函数里的this是不会改变指向对象，使用call、apply、bind也无效</Text>
                        <Highlight language="javascript">{arrowFn2}</Highlight>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

    </>
)
export default This;