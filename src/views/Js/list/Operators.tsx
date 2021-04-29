/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Highlight from 'react-highlight';

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
                        <ul>
                            <li><Text>引用类型将内容存储在<b>堆</b>中，堆所对应的栈中记录的是<b>指针(堆的地址)</b>,外部访问时先引出地址，再通过地址去找到值所存放的位置。引用类型赋值是<b>地址引用</b>。</Text></li>
                            <li> <Text>引用类型通过引用来传递</Text></li>
                            <li><Text>
                                引用类型是指object即广义的对象类型，可由多个简单类型的值的合成，可以看作是一个存放各种值的容器。比如<Tag>Array</Tag>、<Tag>Object</Tag>、<Tag>Regx</Tag>等
                            </Text></li>
                        </ul>
                    </Space>
                </Panel>

                <Panel header="类型转换图示：" key="6">
                    <PreviewImg src={coercion} />
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <PageHeader title="运算符" subTitle="加、减、乘、除、取模" />
            <Collapse defaultActiveKey="" ghost>
                <Panel header="加性运算符" key="1">
                    <Space direction="vertical">
                        <ul>
                            <li>某个运算数是NaN：结果为NaN</li>
                            <li>-Infinity加-Infinity：结果为-Infinity</li>
                            <li>Infinity加-Infinity：结果为NaN</li>
                            <li>+0 加 -0：结果为 +0</li>
                            <li>-0 加 +0: 结果为 +0</li>
                            <li>-0 加 -0: 结果为 -0</li>
                        </ul>
                        <Title level={4}>如果某个运算数是字符串，那么采用下列规则：</Title>
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
                            <li>某个运算数是NaN：结果为NaN</li>
                            <li>Infinity减Infinity：结果为NaN</li>
                            <li>-Infinity减-Infinity：结果为NaN</li>
                            <li>Infinity减-Infinity：结果为Infinity</li>
                            <li>-Infinity减Infinity：结果为-Infinity</li>
                            <li>+0 减 +0：结果为+0</li>
                            <li>-0 减 -0：结果为-0</li>
                            <li>+0 减 -0：结果为+0</li>
                            <li>如果某个运算符不是数字： 返回NaN</li>
                        </ul>
                    </Space>
                </Panel>
                <Panel header="乘性运算符" key="3">
                </Panel>
                <Panel header="除性运算符" key="4">
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
                            <li>i++ : 先运算，后加1</li>
                            <li>i++ 不能做为左值</li>
                        </ul>
                    </Space>
                </Panel>
                <Panel header="++i" key="2">
                    <Space direction="vertical">
                        <h4>++i 返回加1后的值</h4>
                        <ul>
                            <li>++i 先自增加1, 再返回i</li>
                            <li>++i : 先加1，后运算</li>
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
                        <Text mark>左移运算{"<<"}: 简洁记法——乘（{"例：4<<3 4乘2的三次方，向下取整"}）</Text>
                        <Text>左移运算：把数字中的所有数位向左移动指定的数量。例如，把数字 2（等于二进制中的 10）左移 5 位，结果为 64（等于二进制中的 1000000）</Text>
                        <Text mark>右移运算{">>"}: 简洁记法——除（{"例：4>>3 4除2的三次，方向下取整"}）</Text>
                        <Text> 右移运算: 把32位数字中的所有数位整体右移，同时保留该数的符号（正号或负号）。有符号右移运算符恰好与左移运算相反。例如，把64右移5位，将变为2</Text>
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
