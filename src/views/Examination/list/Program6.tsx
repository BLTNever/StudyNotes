import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import {  } from './egNative'
import { BSTree, nodes } from './fn'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview6 = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>css/html/适配</Title>
                <Collapse ghost>
                    <Panel header="BFC理解: " key="1">
                        <Space direction="vertical">
                            <ul>
                                <li><Text>常见定位方案: 1.普通流-从上往下。2.浮动-向左或向右，文本环绕。3.绝对定位-脱离普通流不会对其他元素造成影响</Text></li>
                                <li><Text>BFC: Block Formatting Contexts (块级格式化上下文)，属于普通流。</Text></li>
                                <li><Text>BFC是一种独立的容器， 容器内的元素在布局上不会影响外面的元素</Text></li>
                                <li><Text>BFC触发: body元素、浮动float元素除none以外、绝对定位元素、display为inline-block，table-cell，flex、overflow除hidden以外的元素</Text></li>
                                <li><Text>BFC特性以及应用: 同一个BFC下元素上下边距折叠、清除浮动、组织被float元素覆盖</Text></li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="移动端适配方案" key="2">
                        <Space direction="vertical">
                            <Text mark>设置 Meta 标签{`<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">`}</Text>

                            <ul>
                                <li><Text mark>rem</Text></li>
                                <li><Text mark>vm、vh</Text></li>
                                <li><Text mark>calc（）</Text></li>
                                <li><Text mark>media queries 媒体查询</Text></li>
                                <li><Text mark>百分比布局</Text></li>
                                <li><Text mark>flex，grid</Text></li>
                            </ul>

                            <Text>1. rem原理: </Text>
                            <Text>rem是一个相对单位，通过设置根元素html的font-size大小计算元素宽高</Text>
                            <Text>设置font-size 10px</Text>
                            <Text mark>rem 与 em 的区别: rem 参考根元素的font-size，em参考自己的font-size，也可能是继承得来的</Text>

                            <Text>2. vm、vh:</Text>
                            <Text>将视口分为100份</Text>

                            <Text>3. calc（）:</Text>
                            <Text>calc动态计算长度</Text>

                            <Text>移动端1px</Text>
                            <ul>
                                <li><Text>1: 通过devicePixelRatio设备像素比，在媒体查询中设置不同像素比设备的尺寸</Text></li>
                                <li><Text>2: scale设置缩小</Text></li>
                                <li><Text>3: rem</Text></li>
                                <li><Text>4: border-image、background-image(linear-gradient)</Text></li>
                            </ul>
                        </Space>
                    </Panel>
                    {/* <Panel header="" key="2">
                        <Space direction="vertical">

                        </Space>
                    </Panel>
                    <Panel header="" key="2">
                        <Space direction="vertical">

                        </Space>
                    </Panel>
                    <Panel header="" key="2">
                        <Space direction="vertical">

                        </Space>
                    </Panel>
                    <Panel header="" key="2">
                        <Space direction="vertical">

                        </Space>
                    </Panel> */}
                </Collapse>
            </Wrap>


            <Wrap>

            </Wrap>
        </>
    )
}

export default Interview6


