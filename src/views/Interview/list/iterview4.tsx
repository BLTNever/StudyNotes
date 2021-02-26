import React from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import { extend3, extend4, extend5, extend6, extend7, clone1 } from './example'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview3 = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>1. css/html</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text>BFC理解：</Text>
                            <ul>
                                <li><Text>常见定位方案：1.普通流-从上往下。2.浮动-向左或向右，文本环绕。3.绝对定位-脱离普通流不会对其他元素造成影响</Text></li>
                                <li><Text>BFC：Block Formatting Contexts (块级格式化上下文)，属于普通流。</Text></li>
                                <li><Text>BFC是一种独立的容器， 容器内的元素在布局上不会影响外面的元素</Text></li>
                                <li><Text>BFC触发：body元素、浮动float元素除none以外、绝对定位元素、display为inline-block，table-cell，flex、overflow除hidden以外的元素</Text></li>
                                <li><Text>BFC特性以及应用：同一个BFC下元素上下边距折叠、清除浮动、组织被float元素覆盖</Text></li>
                            </ul>

                            <Text>rem原理：</Text>
                            <Text>rem是一个相对单位，通过设置根元素html的font-size大小计算元素宽高</Text>

                            <Text>设置font-size 10px</Text>
                            <ul>
                                <li><Text>1: 通过rem设置</Text></li>
                                <li><Text>2: scale设置缩小</Text></li>
                            </ul>

                            <Text>移动端1px</Text>
                            <ul>
                                <li><Text>1: 通过devicePixelRatio设备像素比，在媒体查询中设置不同像素比设备的尺寸</Text></li>
                                <li><Text>2: scale设置缩小</Text></li>
                                <li><Text>3: rem</Text></li>
                                <li><Text>4: border-image、background-image(linear-gradient)</Text></li>
                            </ul>


                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2. 优化</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text>HTML渲染优化：</Text>
                            <ul>
                                <li><Text>1. JS优化：切割JS文件、defer/async异步加载JS、JS文件放在最后面加载、按需加载（script.onload、script.readyState）</Text></li>
                                <li><Text>2. CSS优化： 避免使用import、放在head媒体查询、link添加preload、动态添加link、不使用用CSS计算、避免使用通配/高级选择器</Text></li>
                                <li><Text mark>3. 减少资源大小：代码压缩、图片压缩、文件切割</Text></li>
                                <li><Text mark>4. 减少请求时间：服务器优化（服务端渲染、chunked encoding数据分块传输）、利用缓存（cacheContol、localStorage）、优化网络（http2.0、CDN、减少重定向、域名分割资源分配在不同域名下）</Text></li>
                                <li><Text mark>5. 代码层面：减少DOM操作、使用外部JS，CSS文件以便方便缓存、首屏之外文件按需/延迟加载、合并声明、减少全局变量、合理使用requestAnimationFrame动画代替setTimeout</Text></li>
                            </ul>

                            <Text>重绘、重排优化：</Text>
                            <ul>
                                <li><Text>1. 合并操作</Text></li>
                                <li><Text>2. 重排元素设置为position absolute或fixed脱离文档流</Text></li>
                                <li><Text>3. 在内存中构建DOM，完成后再添加到文档中，document fragment</Text></li>
                                <li><Text>4. 设置display：none， 先隐藏再操作再显示</Text></li>
                                <li><Text>5. CSS硬件加速（GPU加速）</Text></li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>3. oop编程和原型链</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text>OOP：</Text>
                            <ul>
                                <li><Text>1. 封装：定义一个类</Text></li>
                                <li><Text>2. 继承：一个类继承另一个类，代码复用</Text></li>
                                <li><Text>3. 多态：通过传递父类对象引用不同的子类对象从而表现出不同的行为，扩展性。JS属于弱类型不能实现多态</Text></li>
                            </ul>


                            <Text>继承</Text>
                            <Text>JS在创建对象（函数对象和普通对象）时都有一个__proto__的内置属性，用于指向创建它的函数的原型对象prototype</Text>
                            <ul>
                                <li>
                                    <Row>
                                        <Col><Text>1. 构造函数继承：</Text></Col>
                                        <Col><Card><Highlight language="javascript">{extend3}</Highlight></Card></Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col><Text>2. 原型链继承</Text></Col>
                                        <Col><Card><Highlight language="javascript">{extend4}</Highlight></Card></Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col><Text>3. 构造函数原型链组合继承：</Text></Col>
                                        <Col><Card><Highlight language="javascript">{extend5}</Highlight></Card></Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col><Text>4. 寄生式继承：</Text></Col>
                                        <Col><Card><Highlight language="javascript">{extend6}</Highlight></Card></Col>
                                    </Row>
                                </li>
                                <li>
                                    <Row>
                                        <Col><Text>5. 寄生组合式继承（class实现）：</Text></Col>
                                        <Col><Card><Highlight language="javascript">{extend7}</Highlight></Card></Col>
                                    </Row>
                                </li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>4. 深拷贝</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text>基本类型的变量不存在深拷贝浅拷贝</Text>
                            <Text>引用类型的浅拷贝复制的是在栈中的地址，而非在堆中存的数据（例如直接赋值、Array的slice和concat等）</Text>
                            <Text>使用JSON.parse(JSON.stringify(obj))做深拷贝赋值会忽略掉undefined和函数表达式</Text>
                            <Card><Highlight language="javascript">{clone1}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Interview3