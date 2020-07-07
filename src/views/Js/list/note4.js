
import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row, Tag, Popover } from 'antd';
import coercion from '../../../images/coercion.jpg';
import stateTransition from '../../../images/state-transition.jpg'

import { note4Subject } from './example';
import PreviewImg from '../../../components/previewImg';

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
                        <p>1. 'hello' + ' world'; // 'hello world'(字符串通过“+”号连接)</p>
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
