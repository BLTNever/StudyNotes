
import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row, Tag, Table, Divider } from 'antd';

import { compareTable } from './example';


const { Column } = Table;

const Note5 = () => (
    <div>
        <h2>相等判断、类型判断</h2>
        <div className="note-wrap">
            <h3> == VS === </h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="JS相等行判断">
                        <h4>ES2015中有四种相等算法：</h4>
                        <p><b>抽象相等比较 (==)</b></p>
                        <p>
                            <b>严格相等比较 (===): </b>
                            用于  Array.prototype.indexOf, Array.prototype.lastIndexOf, 和 case-matching
                        </p>
                        <p><b>同值零:</b> 用于 %TypedArray% 和 ArrayBuffer 构造函数、以及Map和Set操作, 并将用于 ES2016/ES7 中的String.prototype.includes</p>
                        <p><b>同值:</b> 用于所有其他地方</p>

                        <Divider dashed />

                        <h4>JavaScript提供三种不同的值比较操作：</h4>
                        <p>严格相等 ("triple equals" 或 "identity")，使用 === </p>
                        <p>宽松相等 ("double equals") ，使用 ==</p>
                        <p>以及 Object.is （ECMAScript 2015/ ES6 新特性）</p>

                        <Divider dashed />

                        <h5>
                            <p>==将执行类型转换;</p>
                            <p>===将进行相同的比较，而不进行类型转换 (如果类型不同, 只是总会返回 false ); </p>
                            <p>而Object.is的行为方式与三等号相同，但是对于NaN和-0和+0进行特殊处理，所以最后两个不相同，而Object.is（NaN，NaN）将为 true;</p>
                        </h5>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="==和===的异同点">
                        <p>比较双方都是对象时，只有指向同一个对象才会相等(包含==/===)。</p>
                        <p>===要求比较双方类型相同并且值相等。</p>
                        <p>==在比较双方类型不同的时候通常会进行隐式类型转换。</p>
                        <p>null==undefined, null/undefined不进行隐式类型转换。</p>
                        <p>进行隐式类型或转换时，优先转换成Number型。</p>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="note-wrap">
            <h3> typeof VS instanceof </h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="typeof">
                        <h4>typeof方法返回一个字符串，来表示数据的类型。</h4>
                        <p>typeof <b className="orange">Undefined</b> // 'undefined'</p>
                        <p>typeof <b className="orange">Null</b> // 'object'</p>
                        <p>typeof <b className="orange">Boolean</b> // 'boolean'</p>
                        <p>typeof <b className="orange">Number</b> // 'number'</p>
                        <p>typeof <b className="orange">String</b> // 'string'</p>
                        <p>typeof <b className="orange">Symbol(（ECMAScript6新增)</b> // 'symbol'</p>
                        <p>typeof <b className="orange">Function</b> // ‘function'</p>
                        <p>typeof <b className="orange">Array</b> // 'object'</p>
                        <p>typeof <b className="orange">Object</b> // 'object'</p>
                        <p>typeof <b className="orange">new Date()</b> // 'object'</p>
                        <p>typeof <b className="orange">/abc/g</b> // 'object'</p>
                        <p>typeof <b className="orange">new RegExp('meow')</b> // 'object'</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Object.prototype.toString">
                        <h4>typeof来判断数据类型其实并不准确。比如数组、正则、日期、对象的typeof返回值都是object，这就会造成一些误差</h4>
                        <p>所以在typeof判断类型的基础上，我们还需要利用<b>Object.prototype.toString</b>方法来进一步判断数据类型</p>
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
                        <p>instanceof运算符可以用来判断某个构造函数的prototype属性<b>是否存在于另外一个要检测对象的原型链上</b>。</p>

                        <p>待续...</p>
                    </Card>
                </Col>
                <Col span={12}>
                    {/* <Card title="instanceof">
                    </Card> */}
                </Col>
            </Row>
        </div>
    </div >
)
export default Note5;
