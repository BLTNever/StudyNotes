import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Tag } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import { _createStore, _compose, _applyMiddleware, _combineReducers } from './example'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Redux = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>redux简介</Title>
                <Text>暴露出来的API: </Text>
                <ul>
                    <li><Text mark>CreateStore</Text></li>
                    <li><Text mark>CombineReducers</Text></li>
                    <li><Text mark>BindActionCreators</Text></li>
                    <li><Text mark>ApplyMiddleware</Text></li>
                    <li><Text mark>Compose</Text></li>
                </ul>
                <Text>解决的问题: 组件数据共享，同时不会有数据被任意修改</Text>
                <Text>改变数据的方式就是通过dispatch一个action来返回一个新的state</Text>
            </Wrap>

            <Wrap>
                <Title level={3}>CreateStore</Title>
                <Space direction="vertical">
                    <Text>创建一个Store来管理app的状态，返回一个Object，包含了<Tag color="orange">dispatch</Tag>、<Tag color="orange">subscribe</Tag>、<Tag color="orange">getState</Tag></Text>
                </Space>
                <Collapse ghost>
                    <Panel header="CreateStore" key="1">
                        <Highlight language="javascript">{_createStore}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>ApplyMiddleware</Title>
                <Space direction="vertical">
                    <Text>在dispatch一个action到reducer，在reducer处理数据之前做的操作就是middleware</Text>
                </Space>
                <Collapse ghost>
                    <Panel header="ApplyMiddleware" key="1">
                        <Highlight language="javascript">{_applyMiddleware}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>Compose</Title>
                <Space direction="vertical">
                    <Text>compose做的事情就是上一个函数的返回结果作为下一个函数的参数传入</Text>
                </Space>
                <Collapse ghost>
                    <Panel header="Compose" key="1">
                        <Highlight language="javascript">{_compose}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>combineReducers</Title>
                <Space direction="vertical">
                    <Text>主要作用是合并reducer</Text>
                </Space>
                <Collapse ghost>
                    <Panel header="combineReducers" key="1">
                        <Highlight language="javascript">{_combineReducers}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Redux



