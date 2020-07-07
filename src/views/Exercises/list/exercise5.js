import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row, Divider } from 'antd';

import { createNew, } from './example'
import PreviewImg from '../../../components/previewImg';

import equation from '../../../images/equation.jpg';
import equation2 from '../../../images/equation2.jpg';
import equation3 from '../../../images/equation3.jpg';
import equation4 from '../../../images/equation4.jpg';
import equation5 from '../../../images/equation5.jpg';
import equation6 from '../../../images/equation6.jpg';

const Exercise4 = () => (
    <div>
        <h2>进制</h2>
        <div className="note-wrap">
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="2进制">
                        <h4>二进制计数规则:</h4>
                        <ul>
                            <li>-&nbsp;&nbsp;二进制由数字1、0组合而成</li>
                            <li>-&nbsp;&nbsp;基数为2。</li>
                            <li>-&nbsp;&nbsp;有2个数字，即0和1。</li>
                            <li>-&nbsp;&nbsp;逢2进1，借1当2</li>
                        </ul>
                        <Divider />
                        <h4>二进制位置的含义:</h4>
                        <p>二进制每一位数字所处位置不同，所代表的大小也不同，其所处位置称作权。从右向左顺序各个位表示十进制的含义</p>
                        <p>二进制数 例：1011</p>
                        <ul>
                            <li>-&nbsp;&nbsp;第一个1表示：1的个数</li>
                            <li>-&nbsp;&nbsp;第二个1表示：2的个数</li>
                            <li>-&nbsp;&nbsp;第三个0表示：4的个数</li>
                            <li>-&nbsp;&nbsp;第四个1表示：8的个数</li>
                        </ul>
                        <p>(在此可以类比十进制1011，由1个1000，0个100，1个10，1个1组成)</p>
                        <Divider />
                        <h4>二进制与十进制的转换规则:</h4>
                        <h5>二进制转十进制:</h5>
                        <img src={equation} alt="" />
                        <h5>十进制转二进制:</h5>
                        <img src={equation2} alt="" />
                        <p>十进制转换成二进制整数就通常采用“除2取余，逆序排列”的方法</p>
                        <Divider />

                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="二进制计算">
                        <h4>二进制加法</h4>
                        <Row gutter={16}>
                            <Col span={6}>
                                <ul>
                                    <li>0 + 0 = 0</li>
                                    <li>0 + 1 = 1</li>
                                    <li>1 + 0 = 1</li>
                                    <li>1 + 1 = 10</li>
                                    <li>(逢二进一)</li>
                                </ul>
                            </Col>
                            <Col span={18}>
                                <img src={equation3} alt="" />
                            </Col>
                        </Row>
                        <Divider />
                        <h4>二进制减法</h4>
                        <Row gutter={16}>
                            <Col span={6}>
                                <ul>
                                    <li>0 - 0 = 0</li>
                                    <li>1 - 0 = 1</li>
                                    <li>1 - 1 = 0</li>
                                    <li>0 - 1 = 1</li>
                                    <li>(借一当二)</li>
                                </ul>
                            </Col>
                            <Col span={18}>
                                <img src={equation4} alt="" />
                            </Col>
                        </Row>
                        <Divider />
                        <h4>二进制乘法</h4>
                        <Row gutter={16}>
                            <Col span={6}>
                                <ul>
                                    <li>0 * 0 = 0</li>
                                    <li>1 * 0 = 0</li>
                                    <li>0 * 1 = 0</li>
                                    <li>1 * 1 = 1</li>
                                </ul>
                            </Col>
                            <Col span={18}>
                                <img src={equation5} alt="" />
                            </Col>
                        </Row>
                        <Divider />
                        <h4>二进制除法</h4>
                        <Row gutter={16}>
                            <Col span={8}>
                                <ul>
                                    <li>0 / 1 = 0</li>
                                    <li>1 / 1 = 1</li>
                                    <li>(借一当二)</li>
                                </ul>
                            </Col>
                            <Col span={16}>
                                <img src={equation6} alt="" />
                                <p>除法是乘法的逆运算，二进制乘法有4种，除法也是应该对应4种，考虑0作为除数是没有意义的。所以除法有以下两种：</p>
                            </Col>
                        </Row>
                    </Card>
                </Col>

            </Row>

            <Divider />




        </div>
    </div>
)

export default Exercise4
