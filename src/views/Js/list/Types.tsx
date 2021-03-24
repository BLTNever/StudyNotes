
import React from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Popover, Collapse, Typography, PageHeader, Space, Tag, Table } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

// import type from '@images/type.jpg'
import refCopy from '@images/refCopy.jpg'

import { note3Subject, valueType } from './example'
import { booleanFn, intFn, floatFn, numberFn, stringFn, toStringFn, } from './fn'
import { compareTable } from '../config'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography
const { Column } = Table

const pureFn = (
    <div>
        <Text>对于一个函数，给定一个输入，返回一个唯一的输出。</Text>
        <Text>除此之外，不会对外部环境产生任何附带影响。我们机会称该函数为纯函数。</Text>
        <Text>所有函数内部定义的变量在函数返回之后都被垃圾回收掉。</Text>
    </div>
)

const Types = () => (

    <>
        <Wrap>
            <PageHeader title="值类型" subTitle="值类型分为基本类型和引用类型" />
            <Collapse defaultActiveKey="" ghost>
                <Panel header="基本类型" key="1">
                    <Space direction="vertical">
                        <Text>基本类型将内容直接存储在<Text mark>栈</Text>中(大小固定位置连续的存储空间)，记录的是该数据类型的值，即直接访问，基本类型赋值是<Text mark>复制(copy)</Text></Text>
                        <Text>基本类型在赋值的时候是通过值传递的方式。</Text>
                        <ul>
                            <li><Tag>String</Tag>为字符串基本类型。</li>
                            <li><Tag>Number</Tag>为数值基本类型。</li>
                            <li><Tag>Boolean</Tag>为布尔基本类型。</li>
                            <li><Tag>Symbol</Tag>(ECMAScript2015)为字面量基本类型。</li>
                            <li><Tag>null</Tag>(特殊类型)</li>
                            <li><Tag>undefined</Tag>(特殊类型)</li>
                        </ul>
                    </Space>
                </Panel>

                <Panel header="引用类型" key="2">
                    <Space direction="vertical">
                        <Text>引用类型将内容存储在<b>堆</b>中，堆所对应的栈中记录的是<b>指针(堆的地址)</b>,外部访问时先引出地址，再通过地址去找到值所存放的位置。引用类型赋值是<b>地址引用</b>。</Text>
                        <Text>引用类型通过引用来传递</Text>
                        <Text>
                            引用类型是指object即广义的对象类型，可由多个简单类型的值的合成，可以看作是一个存放各种值的容器。比如<Tag>Array</Tag>、<Tag>Object</Tag>、<Tag>Regx</Tag>等
                            </Text>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <PageHeader title="值类型和引用类型的区别" />
            <Collapse defaultActiveKey="" ghost>
                <Panel header="区别" key="1">
                    <Row gutter={24}>
                        <Col span={12}>
                            <Card title="值类型：">
                                <Text> 1、占用空间固定，保存在栈中（当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束，这个方法的内存栈也将自然销毁了。因此，所有在方法中定义的变量都是放在栈内存中的；栈中存储的是基础变量以及一些对象的引用变量，<b>基础变量的值是存储在栈中，而引用变量存储在栈中的是指向堆中的数组或者对象的地址，这就是为何修改引用类型总会影响到其他指向这个地址的引用变量。</b>）</Text>
                                <Text>2、<b>保存与复制的是值本身</b></Text>
                                <Text>3、它们是完全独立的拷贝，互不干涉。</Text>
                                <Text>4、使用typeof检测数据的类型</Text>
                                <Text>5、<b>基本类型</b>数据传递是值类型</Text>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card title="引用类型：">
                                <Text>1、占用空间不固定，保存在堆中（当我们在程序中创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大），这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法结束后，这个对象还可能被另一个引用变量所引用（方法的参数传递时很常见），则这个对象依然不会被销毁，只有当一个对象没有任何引用变量引用它时，系统的垃圾回收机制才会在核实的时候回收它。）</Text>
                                <Text>2、保存与复制的是指向对象的一个指针</Text>
                                <Text>3、使用instanceof检测数据类型</Text>
                                <Text>4、使用new()方法构造出的对象是引用型</Text>
                                <Text>5、<b>引用类型</b>数据传递是引用类型</Text>
                            </Card>
                        </Col>
                    </Row>
                </Panel>

                <Panel header="图示" key="2">
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
                </Panel>

                <Panel header="==和===" key="3">
                    <Space direction="vertical">
                        <ul>
                            <li><Text>对于引用类型的变量，==和===只会判断引用的地址是否相同，而不会判断对象具体里属性以及值是否相同。因此，如果两个变量指向相同的对象，则返回true</Text></li>
                            <li><Text>如果是不同的对象，及时包含相同的属性和值，也会返回false</Text></li>
                            <li><Text>如果想判断两个不同的对象是否真的相同，可以将它们转换为字符串然后判断。或递归去判断每一个属性的值</Text></li>
                        </ul>
                    </Space>
                </Panel>

                <Panel header="函数参数" key="4">
                    <Space direction="vertical">
                        <Text><b>基本类型输入：</b>当我们将基本类型数据传入函数，函数会将这些数据拷贝赋值给函数的参数变量。</Text>
                        <Text><b>引用类型输入：</b>传入的是一个引用。对该变量的操作将会影响到原本的对象。这样的编程手法将产生附带影响，使得代码的逻辑复杂和可读性变低。</Text>
                        <Text>
                            我们想要达到的效果是&nbsp;
                                <Popover content={pureFn} title="纯函数">
                                <Tag color="orange">纯函数</Tag>
                            </Popover>&nbsp;,
                            比如Array.map和Array.filter是以纯函数的形式实现。虽然它们的参数是一个数组变量，但是通过深度拷贝并赋值给一个新的变量，然后在新的数组上操作，来防止原始数组被更改。
                        </Text>
                    </Space>
                </Panel>

                <Panel header="题" key="5">
                    <Space direction="vertical">
                        <Highlight language="javascript">{note3Subject}</Highlight>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>


        <Wrap>
            <PageHeader title="类型转换" />
            <Collapse defaultActiveKey="" ghost>
                <ul>
                    <li>JavaScript是弱类型语言</li>
                    <li>变量没有类型限制，可以随时赋予任意值</li>
                    <li>数据类型转换指将一个数据类型强制转换为其他的数据类型</li>
                    <li>数据类型转换分为<Tag>显式数据类型转换</Tag>和<Tag>隐式数据类型转换</Tag></li>
                    <li>因为变量的数据类型是不确定的，且各种运算符对数据类型是有要求的，所以如果运算符发现运算子的类型与预期不符，就会自动转换类型</li>
                </ul>
                <Panel header="显示类型转换" key="1">
                    <Space direction="vertical">
                        <Title level={4}>调用构造函数进行强制类型转换</Title>
                        <ul>
                            <li><Popover content={booleanFn} title="Boolean()"><Tag color="orange">Boolean()</Tag></Popover>转换为Boolean</li>
                            <li>
                                <Popover content={numberFn} title="Number()"><Tag color="orange">Number()</Tag></Popover>
                                转换为Number
                            </li>
                        </ul>
                    </Space>

                </Panel>

                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="显示类型转换">

                            <div className="mb">

                            </div>
                            <div className="mb">
                                <Popover content={intFn} title="parseInt()">
                                    <Tag color="orange">parseInt()</Tag>
                                </Popover>
                            转换为Number
                            </div>
                            <div className="mb">
                                <Popover content={floatFn} title="parseFloat()">
                                    <Tag color="orange">parseFloat()</Tag>
                                </Popover>
                            转换为Number
                            </div>
                            <div className="mb">
                                <Popover content={stringFn} title="String()">
                                    <Tag color="orange">String()</Tag>
                                </Popover>
                            转换为String
                            </div>
                            <div className="mb">
                                <Popover content={toStringFn} title="toString()">
                                    <Tag color="orange">toString()</Tag>
                                </Popover>
                            转换为String
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="隐式类型转换">
                            {/* <h4>Strings &lt; &minus; &gt; Numbers</h4> */}
                            <h4>“+” 运算符</h4>
                            <Text>1. &quot;hello&quot; + &quot;world&quot;; // &quot;hello world&quot;(字符串通过“+”号连接)</Text>
                            <Text>2. &quot;2&quot; + 3 or 2 + &quot;3&quot;; // &quot;23&quot;(字符串和数字相加，把数字转成字符串，不论顺序)</Text>
                            <Text>3. 1 + 2 + &quot;3&quot;; // &quot;33&quot;; 1 + &quot;2&quot; + &quot;3&quot;; // &quot;123&quot; (“+”的运算方向是从做到右)</Text>
                            <Text>4. 3 + true; // 4 (在遇到算数运算符(- 、* 、/ 和 %)的时候会在运算之前将参与运算的双方转换成数字。 Number(true) === 1)</Text>

                            <h4>条件判断运算 == </h4>
                            <div className="mb">
                                1. 如果比较的两者中有布尔值(Boolean)，会把 <Tag>Boolean</Tag> 先转换为对应的 <Tag>Number</Tag>，即 0 和 1，然后进行比较。
                            </div>
                            <div className="mb">
                                2. 如果比较的双方中有一方为 <Tag>Number</Tag>，一方为 <Tag>String</Tag>时，会把 <Tag>String</Tag> 通过 Number() 方法转换为数字，然后进行比较。
                            </div>
                            <div className="mb">
                                3. 如果比较的双方中有一方为 <Tag>Boolean</Tag>，一方为 <Tag>String</Tag>时，会将双方转换为数字，然后再进行比较。
                            </div>
                            <div className="mb">
                                4. 如果比较的双方中有一方为 <Tag>Number</Tag>，一方为<Tag>Object时</Tag>，则会调用 <Tag>valueOf</Tag> 方法将O<Tag>bject</Tag>转换为数字，然后进行比较。
                            </div>
                            <div className="mb">
                                Javascript 中，只有 <Tag>空字符串</Tag>、<Tag>数字0</Tag>、<Tag>false</Tag>、<Tag>null</Tag>、<Tag>undefinedl</Tag> 和<Tag> NaNl</Tag> 这 6 个值为假之外，其他所有的值均为真值。
                            </div>
                            <Text>详细请看下一章== vs ===, typeof vs instanceof</Text>
                            <h3>
                                建议在所有使用条件判断的时候都使用全等运算符 === 来进行条件判断。全等运算符会先进行数据类型判断，并且不会发生隐式类型转换。
                            </h3>
                        </Card>
                    </Col>
                </Row>
            </Collapse>
        </Wrap>

        <div>
            <h2>相等判断、类型判断</h2>
            <div className="note-wrap">
                <h3> == VS === </h3>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="JS相等行判断">
                            <h4>ES2015中有四种相等算法：</h4>
                            <Text><b>抽象相等比较 (==)</b></Text>
                            <Text>
                                <b>严格相等比较 (===): </b>
                            用于  Array.prototype.indexOf, Array.prototype.lastIndexOf, 和 case-matching
                        </Text>
                            <Text><b>同值零:</b> 用于 %TypedArray% 和 ArrayBuffer 构造函数、以及Map和Set操作, 并将用于 ES2016/ES7 中的String.prototype.includes</Text>
                            <Text><b>同值:</b> 用于所有其他地方</Text>


                            <h4>JavaScript提供三种不同的值比较操作：</h4>
                            <Text>严格相等 (&quot;triple equals&quot; 或 &quot;identity&quot;)，使用 === </Text>
                            <Text>宽松相等 (&quot;double equals&quot;) ，使用 ==</Text>
                            <Text>以及 Object.is （ECMAScript 2015/ ES6 新特性）</Text>


                            <h5>
                                <Text>==将执行类型转换;</Text>
                                <Text>===将进行相同的比较，而不进行类型转换 (如果类型不同, 只是总会返回 false ); </Text>
                                <Text>而Object.is的行为方式与三等号相同，但是对于NaN和-0和+0进行特殊处理，所以最后两个不相同，而Object.is（NaN，NaN）将为 true;</Text>
                            </h5>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="==和===的异同点">
                            <Text>比较双方都是对象时，只有指向同一个对象才会相等(包含==/===)。</Text>
                            <Text>===要求比较双方类型相同并且值相等。</Text>
                            <Text>==在比较双方类型不同的时候通常会进行隐式类型转换。</Text>
                            <Text>null==undefined, null/undefined不进行隐式类型转换。</Text>
                            <Text>进行隐式类型或转换时，优先转换成Number型。</Text>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className="note-wrap">
                <h3> typeof VS instanceof </h3>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="typeof">
                            <Space direction="vertical">
                                <h4>typeof方法返回一个字符串，来表示数据的类型。</h4>
                                <Text>typeof <b className="orange">Undefined</b> =&gt; &quot;undefined&quot;</Text>
                                <Text>typeof <b className="orange">Null</b> =&gt; &quot;object&quot;</Text>
                                <Text>typeof <b className="orange">Boolean</b> =&gt; &quot;boolean&quot;</Text>
                                <Text>typeof <b className="orange">Number</b> =&gt; &quot;number&quot;</Text>
                                <Text>typeof <b className="orange">String</b> =&gt; &quot;string&quot;</Text>
                                <Text>typeof <b className="orange">Symbol(（ECMAScript6新增)</b> =&gt; &quot;symbol&quot;</Text>
                                <Text>typeof <b className="orange">Function</b> =&gt; ‘function&quot;</Text>
                                <Text>typeof <b className="orange">Array</b> =&gt; &quot;object&quot;</Text>
                                <Text>typeof <b className="orange">Object</b> =&gt; &quot;object&quot;</Text>
                                <Text>typeof <b className="orange">new Date()</b> =&gt; &quot;object&quot;</Text>
                                <Text>typeof <b className="orange">/abc/g</b> =&gt; &quot;object&quot;</Text>
                                <Text>typeof <b className="orange">new RegExp(&quot;meow&quot;)</b> =&gt; &quot;object&quot;</Text>
                            </Space>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Object.prototype.toString">
                            <h4>typeof来判断数据类型其实并不准确。比如数组、正则、日期、对象的typeof返回值都是object，这就会造成一些误差</h4>
                            <Text>所以在typeof判断类型的基础上，我们还需要利用<b>Object.prototype.toString</b>方法来进一步判断数据类型</Text>
                            <Table dataSource={compareTable} pagination={false}>
                                <Column title="数据" dataIndex="data" key="data" />
                                <Column title="toString" dataIndex="toString" key="toString" />
                                <Column title="typeof" dataIndex="typeof" key="typeof" />
                            </Table>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <h4>instanceof</h4>
                    <Col span={12}>
                        <Card title="instanceof">
                            <Text>instanceof运算符可以用来判断某个构造函数的prototype属性<b>是否存在于另外一个要检测对象的原型链上</b>。</Text>

                            <Text>待续...</Text>
                        </Card>
                    </Col>
                    <Col span={12}>
                        {/* <Card title="instanceof">
                    </Card> */}
                    </Col>
                </Row>
            </div>
        </div >
    </>
)

export default Types
