import React from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import { radix, radix2, createNew, extend8, call, apply, bind, myPromise, parseInt, debounce, throttle } from './example'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview3 = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>浏览器、服务器缓存</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text>在浏览器向服务器第一次发起请求拿到请求结果之后，根据响应报头（response）中的http头（response headers）的缓存标志，决定是否缓存结果</Text>

                            <Text mark>浏览器缓存分为两种：1. 强制缓存 2. 协商缓存</Text>
                            <Text>强制缓存：根据服务器返回的字段（cacheControl中设置）控制缓存时间、缓存内容等</Text>
                            <Text>协商缓存：强制缓存时间到期后，浏览器携带缓存标志请求服务端， 由服务端决定是否使用缓存</Text>
                        
                            <Text mark>服务器缓存：服务器缓存是把网页解析在内存中做一个映射，把网页存到硬盘中，当其他用户访问时根据内存中的映射返回缓存的网页</Text>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>new 函数实现</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text>创建一个全新的对象</Text>
                            <Text>对象执行[[prototype]]链接，将这个新对象的[[prototype]]链接到这个构造函数.prototype所指的对象</Text>
                            <Text>这个新对象会绑定到函数调用的this</Text>
                            <Text>函数如果没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象</Text>
                            <Card><Highlight language="javascript">{createNew}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>手写extend、promise、call、apply、bind</Title>
                <Collapse ghost>
                    <Panel header="extend" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{extend8}</Highlight></Card>
                        </Space>
                    </Panel>
                    <Panel header="promise" key="2">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{myPromise}</Highlight></Card>
                        </Space>
                    </Panel>
                    <Panel header="call" key="3">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{call}</Highlight></Card>
                        </Space>
                    </Panel>
                    <Panel header="apply" key="4">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{apply}</Highlight></Card>
                        </Space>
                    </Panel>
                    <Panel header="bind" key="5">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{bind}</Highlight></Card>
                        </Space>
                    </Panel>
                    <Panel header="parseInt" key="6">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{parseInt}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>节流和防抖</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text mark>tips: 函数节流和防抖也是一种闭包的实现</Text>
                            <Row>
                                <Col><Card><Highlight language="javascript">{debounce}</Highlight></Card></Col>
                                <Col><Card><Highlight language="javascript">{throttle}</Highlight></Card></Col>
                            </Row>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Interview3
