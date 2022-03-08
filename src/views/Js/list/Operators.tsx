/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Highlight from '@components/HighLight'
    ;

import { Card, Col, Row, Tag, Popover, Table, Divider, Collapse, Typography, PageHeader, Space } from 'antd';
import coercion from '@images/coercion.jpg';
import stateTransition from '@images/state-transition.jpg'

import { note4Subject, bitNot } from './example'
import PreviewImg from '@components/previewImg'
import { Wrap } from '@components/Base'
const { Panel } = Collapse
const { Paragraph, Title, Text, Link, } = Typography
const { Column } = Table


const Operator = () => (
    <>
        <Wrap>
            <PageHeader title="运算符" subTitle="加、减、乘、除、取模" />
            <Collapse defaultActiveKey="" ghost>
                <Panel header="加性运算符" key="1">
                    <Space direction="vertical">
                        <ul>
                            <li>某个运算数是NaN: 结果为NaN</li>
                            <li>-Infinity加-Infinity: 结果为-Infinity</li>
                            <li>Infinity加-Infinity: 结果为NaN</li>
                            <li>+0 加 -0: 结果为 +0</li>
                            <li>-0 加 +0: 结果为 +0</li>
                            <li>-0 加 -0: 结果为 -0</li>
                        </ul>
                        <Title level={4}>如果某个运算数是字符串，那么采用下列规则: </Title>
                        <ul>
                            <li>如果两个运算数都是字符串，把第二个字符串连接到第一个上</li>
                            <li>如果只有一个运算数是字符串，把另一个运算数转换成字符串，结果是两个字符串连接成的字符串</li>
                        </ul>
                        <Text mark>**如果有一个操作数是对象、数值或布尔值，则调用它们的toString()方法取得相应的字符串值，然后再应用前面关于字符串的规则</Text>
                        <Text mark>**加号后面跟一个操作元，叫 Unary + Operator ，会将操作元转换为 Number 形式</Text>
                        <Text>对于undefined和null，则分别调用String()函数并取得字符串“undefined” 和“null”</Text>
                    </Space>
                </Panel>
                <Panel header="减性运算符" key="2">
                    <Space direction="vertical">
                        <ul>
                            <li>某个运算数是NaN: 结果为NaN</li>
                            <li>Infinity减Infinity: 结果为NaN</li>
                            <li>-Infinity减-Infinity: 结果为NaN</li>
                            <li>Infinity减-Infinity: 结果为Infinity</li>
                            <li>-Infinity减Infinity: 结果为-Infinity</li>
                            <li>+0 减 +0: 结果为+0</li>
                            <li>-0 减 -0: 结果为-0</li>
                            <li>+0 减 -0: 结果为+0</li>
                            <li>如果某个运算符不是数字:  返回NaN</li>
                        </ul>
                    </Space>
                </Panel>
                <Panel header="乘性运算符" key="3">
                    转成Number
                </Panel>
                <Panel header="除性运算符" key="4">
                    转成Number
                </Panel>
                <Panel header="取模运算符" key="5">
                </Panel>
                <Panel header="code&原始类型转换表" key="6">
                    <Space direction="vertical">
                        <Row gutter={24}>
                            <Col span={10}><Highlight language="javascript">{note4Subject}</Highlight></Col>
                            <Col span={14}><PreviewImg src={stateTransition} /></Col>
                        </Row>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <PageHeader title="i++ & ++i" />
            <Collapse defaultActiveKey="" ghost>
                <Panel header="i++" key="1">
                    <Space direction="vertical">
                        <h4>i++ 返回原来的值</h4>
                        <ul>
                            <li>i++ 先返回i , 再自增加1</li>
                            <li>i++ 先运算，后加1</li>
                            <li>i++ 不能做为左值</li>
                        </ul>
                    </Space>
                </Panel>
                <Panel header="++i" key="2">
                    <Space direction="vertical">
                        <h4>++i 返回加1后的值</h4>
                        <ul>
                            <li>++i 先自增加1, 再返回i</li>
                            <li>++i 先加1，后运算</li>
                            <li>++i 可以作为左值</li>
                            <li>左值是对应内存中有确定存储地址的对象的表达式的值，而右值是所有不是左值的表达式的值</li>
                        </ul>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>


        <Wrap>
            <PageHeader title="位运算" />
            <Collapse defaultActiveKey="" ghost>
                <Panel header="左移运算<<和右移运算>>" key="1">
                    <Space direction="vertical">
                        <Text mark>左移运算{"<<"}: 简洁记法——乘({"例: 4 << 3 4乘2的3次方，向下取整"})</Text>
                        <Text>左移运算: 把数字中的所有数位向左移动指定的数量。例如，把数字 2(等于二进制中的 10)左移 5 位，结果为 64(等于二进制中的 1000000)</Text>
                        <Text mark>右移运算{">>"}: 简洁记法——除({"例: 4 >> 3 4除2的3次方，向下取整"})</Text>
                        <Text> 右移运算: 把32位数字中的所有数位整体右移，同时保留该数的符号(正号或负号)。有符号右移运算符恰好与左移运算相反。例如，把64右移5位，将变为2</Text>
                    </Space>
                </Panel>

                <Panel header="位与(&)" key="2">
                    <Space direction="vertical">
                        <Title level={4}>真真为真，其余为假</Title>
                        <Text>9和10二进制位与运算</Text>
                        <pre>
                            1001
                            & 1010
                            -------
                            1000
                        </pre>
                        <Text>由于奇数的二进制末位为1，偶数为0，跟1的位与运算后，分别为1和0，因此可以用位与运算来判断奇偶数。</Text>
                        <code>{`if(n & 1) {
                            console.log('n为奇数');
                            } else {
                                console.log('n为偶数');
                            }`}
                        </code>
                    </Space>
                </Panel>

                <Panel header="位或(|)" key="3">
                    <Space direction="vertical">
                        <Title level={4}>假假为假，其余为真</Title>
                        <Text>9和10二进制位或运算</Text>
                        <pre>
                            1001
                            | 1010
                            -------
                            1011
                        </pre>
                        <Text>整数与0的位或运算，都是本身。浮点数不支持位运算，过程中会自动转化成整数，利用这一点，可以将浮点数与0进行位或运算即可达到取整目的。console</Text>
                        <code>
                            console.log(15.22 | 0); // 15
                        </code>
                    </Space>
                </Panel>

                <Panel header="位非(~)" key="4">
                    <Space direction="vertical">
                        <Title level={4}>真为假，假为真</Title>
                        <Text>9二进制位非运算</Text>
                        <pre>
                            {bitNot}
                        </pre>
                        <Text>按位非操作，首先每一位取反，然后，第一位为负数符号位保持不变，剩余取反加1就是最后结果。</Text>
                    </Space>
                </Panel>

                <Panel header="异或(^)" key="5">
                    <Space direction="vertical">
                        <Title level={4}>相同为假，不同为真</Title>
                        <Text>9和10二进制异或运算</Text>
                        <pre>
                            1001
                            | 1010
                            -------
                            0011
                        </pre>
                        <Text>可以用于交换两个整数的值，不过一般很少这么用</Text>
                        <code>
                            var a = 3, b = 5;
                            a ^= b;
                            b ^= a;
                            a ^= b;
                            console.log(a, b); // 5 3
                        </code>
                    </Space>
                </Panel>

            </Collapse>
        </Wrap>




    </>
)

export default Operator;
