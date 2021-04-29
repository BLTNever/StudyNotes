import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import { _reverseList, creteNode, mergeTwoList, getIntersectionNode1, getIntersectionNode2 } from './example'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview6 = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>生成链表</Title>
                <Collapse ghost>
                    <Panel header="javascript生成链表" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{creteNode}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>反转链表</Title>
                <Collapse ghost>
                    <Panel header="给单链表的头节点 head ，请反转链表，并返回反转后的链表" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{_reverseList}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>合并2个有序链表</Title>
                <Collapse ghost>
                    <Panel header="将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{mergeTwoList}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>相交链表</Title>
                <Collapse ghost>
                    <Panel header="找到两个单链表相交的起始节点" key="1">
                        <Row gutter={24}>
                            <Col span={12}><Card><Highlight language="javascript">{getIntersectionNode1}</Highlight></Card></Col>
                            <Col span={12}><Card><Highlight language="javascript">{getIntersectionNode2}</Highlight></Card></Col>
                        </Row>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Interview6

