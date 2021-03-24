/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row, Tag, Popover, Table, Divider } from 'antd';
import coercion from '@images/coercion.jpg';
import stateTransition from '@images/state-transition.jpg'

import { note4Subject, bitNot } from './example'
import PreviewImg from '@components/previewImg'

const { Column } = Table


const Note4 = () => (
    <div>
        

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
