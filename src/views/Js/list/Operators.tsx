/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row, Tag, Popover, Table, Divider } from 'antd';
import coercion from '@images/coercion.jpg';
import stateTransition from '@images/state-transition.jpg'

import { note4Subject, compareTable, bitNot } from './example'
import PreviewImg from '@components/previewImg'
const { Column } = Table

const booleanFn = (
    <div>
        <p>number ：只有0、 NaN 是false</p>
        <p>string：空字符串为false其他字符串为ture</p>
        <p>null：false</p>
        <p>undefined：false</p>
        <p>Object：全是ture</p>
        <p>五个falsy值：0,  NaN , '' , null , undefined</p>
        <p>(falsy: 是在Boolean上下文中认定可以转换为false的值)</p>
    </div>
)
const intFn = (
    <div>
        <p>parseInt('x,10'),函数解析一个字符串参数，并返回一个指定基数的整数,括号里的10表示10进制。</p>
        <p>parseInt()可以将一个字符串中的有效<b>整数</b>内容取出来，然后转换为Number，从左往右读，读到非整数就停止</p>
    </div>
)
const floatFn = (
    <div>
        <p> parseFloat('x')函数解析一个字符串参数并返回一个浮点数</p>
        <p>parseFloat()作用和parseInt()类似，不同的是他可以获得有效的小数</p>
    </div>
)
const numberFn = (
    <div>
        <div>
            <h4>字符串转数字：</h4>
            <p>1. 如果是纯数字的字符串，直接转换为数字</p>
            <p>2. 如果字符串中有非数字的内容 则转换为NaN</p>
            <p>3. 如果字符串是一个空串或者全是空格的字符串，则转为0</p>
        </div>
        <div>
            <h4>布尔转数字：</h4>
            <p>true转成1，false转成0</p>
        </div>
        <div>
            <h4>null转数字：</h4>
            <p>结果为0</p>
        </div>
        <div>
            <h4>undefined转数字：</h4>
            <p>结果为NaN</p>
        </div>
    </div>
)
const stringFn = (
    <div>
        <p>调用String（）函数，并将被转换的数据作为参数传递给函数</p>
        <p>使用String（）函数做强制类型转换时，对于Number和Boolean实际上就是调用的toString（）方法。</p>
        <p>但是对于null和undefined就不会调用toString（）方法，它会将null直接转换为“null”；</p>
        <p>将undefined直接转换为“undefined”</p>
    </div>
)
const toStringFn = (
    <div>
        <p>调用被转换数据类型的toString（）方法</p>
        <p>该方法不会影响原变量，它会将转换的结果返回</p>
        <p>注意：null和undefined这两个值没有toString（）方法，如果调用他们的方法会报错。</p>
    </div>
)

const Note4 = () => (
    <div>
        <h2>类型转换</h2>
        <div className="note-wrap">
            <Row gutter={16}>
                <h4>JavaScript是弱类型语言</h4>
                <p><b>变量没有类型限制，可以随时赋予任意值</b></p>
                <p><b>数据类型转换指将一个数据类型强制转换为其他的数据类型</b></p>
                <div className="mb">
                    <b>数据类型转换分为<Tag>显式数据类型转换</Tag>和<Tag>隐式数据类型转换</Tag>。</b>
                </div>
                <p><b>因为变量的数据类型是不确定的，且各种运算符对数据类型是有要求的，所以如果运算符发现运算子的类型与预期不符，就会自动转换类型。</b></p>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="显示类型转换">
                        <h4>调用构造函数进行强制类型转换</h4>
                        <div className="mb">
                            <Popover content={booleanFn} title="Boolean()">
                                <Tag color="orange">Boolean()</Tag>
                            </Popover>
                            转换为Boolean
                            </div>
                        <div className="mb">
                            <Popover content={numberFn} title="Number()">
                                <Tag color="orange">Number()</Tag>
                            </Popover>
                            转换为Number
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
                        <p>1. 'hello' + 'world'; // 'hello world'(字符串通过“+”号连接)</p>
                        <p>2. '2' + 3 or 2 + '3'; // '23'(字符串和数字相加，把数字转成字符串，不论顺序)</p>
                        <p>3. 1 + 2 + '3'; // '33'; 1 + '2' + '3'; // '123' (“+”的运算方向是从做到右)</p>
                        <p>4. 3 + true; // 4 (在遇到算数运算符(- 、* 、/ 和 %)的时候会在运算之前将参与运算的双方转换成数字。 Number(true) === 1)</p>

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
                        <p>详细请看下一章== vs ===, typeof vs instanceof</p>
                        <h3>
                            建议在所有使用条件判断的时候都使用全等运算符 === 来进行条件判断。全等运算符会先进行数据类型判断，并且不会发生隐式类型转换。
                            </h3>
                    </Card>
                </Col>
            </Row>
        </div>
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
                            <p>typeof <b className="orange">Undefined</b> \// 'undefined'</p>
                            <p>typeof <b className="orange">Null</b> \// 'object'</p>
                            <p>typeof <b className="orange">Boolean</b> \// 'boolean'</p>
                            <p>typeof <b className="orange">Number</b> \// 'number'</p>
                            <p>typeof <b className="orange">String</b> \// 'string'</p>
                            <p>typeof <b className="orange">Symbol(（ECMAScript6新增)</b> \// 'symbol'</p>
                            <p>typeof <b className="orange">Function</b> \// ‘function'</p>
                            <p>typeof <b className="orange">Array</b> \// 'object'</p>
                            <p>typeof <b className="orange">Object</b> \// 'object'</p>
                            <p>typeof <b className="orange">new Date()</b> \// 'object'</p>
                            <p>typeof <b className="orange">/abc/g</b> \// 'object'</p>
                            <p>typeof <b className="orange">new RegExp('meow')</b> \// 'object'</p>
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

        <h2>位运算</h2>
        <div className="note-wrap">
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="位与(&)">
                        <h4>真真为真，其余为假</h4>
                        <p>9和10二进制位与运算</p>
                        <pre>
                            1001
                            & 1010
                            -------
                            1000
                       </pre>
                        <p>由于奇数的二进制末位为1，偶数为0，跟1的位与运算后，分别为1和0，因此可以用位与运算来判断奇偶数。</p>
                        <code>{`if(n & 1) {
                            console.log('n为奇数');
                            } else {
                                console.log('n为偶数');
                            }`}
                        </code>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="位或(|)">
                        <h4>假假为假，其余为真</h4>
                        <p>9和10二进制位或运算</p>
                        <pre>
                            1001
                            | 1010
                            -------
                            1011
                        </pre>
                        <p>整数与0的位或运算，都是本身。浮点数不支持位运算，过程中会自动转化成整数，利用这一点，可以将浮点数与0进行位或运算即可达到取整目的。console</p>
                        <code>
                            console.log(15.22 | 0); // 15
                        </code>
                    </Card>
                </Col>

            </Row>

            <Divider />

            <Row gutter={16}>
                <Col span={12}>
                    <Card title="位非(~)">
                        <h4>真为假，假为真</h4>
                        <p>9二进制位非运算</p>
                        <pre>
                            {bitNot}
                        </pre>
                        <p>按位非操作，首先每一位取反，然后，第一位为负数符号位保持不变，剩余取反加1就是最后结果。</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="异或(^)">
                        <h4>相同为假，不同为真</h4>
                        <p>9和10二进制异或运算</p>
                        <pre>
                            1001
                            | 1010
                            -------
                            0011
                        </pre>
                        <p>可以用于交换两个整数的值，不过一般很少这么用</p>
                        <code>
                            var a = 3, b = 5;
                            a ^= b;
                            b ^= a;
                            a ^= b;
                            console.log(a, n); // 5 3
                        </code>
                    </Card>
                </Col>

            </Row>

        </div>
        <div className="note-wrap">
            <Card title="类型转换图示：">
                <PreviewImg src={coercion} />
            </Card>
        </div>

        <div className="note-wrap">
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="题：">
                        <Highlight language="javascript">{note4Subject}</Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="JS原始类型转换表">
                        <PreviewImg src={stateTransition} />
                    </Card>
                </Col>
            </Row>
        </div>

    </div >
)

export default Note4;
