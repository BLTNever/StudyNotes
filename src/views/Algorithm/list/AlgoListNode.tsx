import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import {
    _reverseList, creteNode, mergeTwoList, getIntersectionNode1, getIntersectionNode2,
    deleteDuplicates,
} from './example'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const AlgoListNode = () => {

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

            <Wrap>
                <Title level={3}>删除排序链表中的重复元素</Title>
                <Collapse ghost>
                    <Panel header="存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。返回同样按升序排列的结果链表。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{deleteDuplicates}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default AlgoListNode

