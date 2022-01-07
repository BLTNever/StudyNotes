/* eslint-disable @typescript-eslint/explicit-member-accessibility */


import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import {
    _useState, _memo, createContext,
    _render, virtualize,
} from './example'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Program3 = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>React源码实现</Title>
                <Collapse ghost>
                    <Panel header="render" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{_render}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="virtualize" key="2">
                        <Space direction="vertical">
                            <Highlight language="javascript">{virtualize}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="useState" key="3">
                        <Space direction="vertical">
                            <Highlight language="javascript">{_useState}</Highlight>
                        </Space>
                    </Panel>

                    <Panel header="memo" key="4">
                        <Space direction="vertical">
                            <Highlight language="javascript">{_memo}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="usememo" key="6">
                        <Space direction="vertical">
                            <Highlight language="javascript">{_memo}</Highlight>
                        </Space>
                    </Panel>

                    <Panel header="createContext" key="5">
                        <Space direction="vertical">
                            <Highlight language="javascript">{createContext}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>

            </Wrap>
        </>
    )
}

export default Program3

