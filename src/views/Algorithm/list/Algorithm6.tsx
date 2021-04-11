import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import { _reverseList, } from './example'
import { BSTree, nodes } from './fn'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview6 = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>反转链表</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{_reverseList}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>

            </Wrap>
        </>
    )
}

export default Interview6


