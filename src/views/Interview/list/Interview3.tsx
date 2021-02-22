import React from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import { radix, radix2, ajax, traversal1, traversal2, traversal3, traversal4 } from './example'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview3 = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>1. 浏览器缓存</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text>在浏览器向服务器第一次发起请求拿到请求结果之后，根据响应报头（response）中的http头（response headers）的缓存标志，决定是否缓存结果</Text>

                            <Text mark>浏览器缓存分为两种：1. 强制缓存 2. 协商缓存</Text>
                            <Text>强制缓存：</Text>
                            <Text>强制缓存就是向浏览器缓存查找结果</Text>
                            <ul>
                                <li></li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2. https2.0</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Row>
                                <Col><Card><Highlight language="javascript">{radix}</Highlight></Card></Col>
                                <Col><Card><Highlight language="javascript">{radix2}</Highlight></Card></Col>
                            </Row>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>3. 性能优化</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Row>
                                <Col><Card><Highlight language="javascript">{radix}</Highlight></Card></Col>
                                <Col><Card><Highlight language="javascript">{radix2}</Highlight></Card></Col>
                            </Row>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Interview3