import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import * as eg from './egListNode'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography
class ListNode {
    private prev: any
    private next: any
    private key: string
    public constructor(key: any) {
        // 指向前一个节点
        this.prev = null
        // 指向后一个节点
        this.next = null
        // 节点的数据(或者用于查找的键)
        this.key = key
    }
}

const AlgoListNode = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>生成链表</Title>
                <Collapse ghost>
                    <Panel header="javascript生成链表" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.creteNode}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>206. 反转链表</Title>
                <Collapse ghost>
                    <Panel header="给单链表的头节点 head ，请反转链表，并返回反转后的链表" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.reverseList}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>21. 合并两个有序链表</Title>
                <Collapse ghost>
                    <Panel header="将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.mergeTwoList}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>160. 相交链表</Title>
                <Collapse ghost>
                    <Panel header="找到两个单链表相交的起始节点" key="1">
                        <Row gutter={24}>
                            <Col span={12}><Card><Highlight language="javascript">{eg.getIntersectionNode1}</Highlight></Card></Col>
                            <Col span={12}><Card><Highlight language="javascript">{eg.getIntersectionNode2}</Highlight></Card></Col>
                        </Row>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>83. 删除排序链表中的重复元素</Title>
                <Collapse ghost>
                    <Panel header="存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。返回同样按升序排列的结果链表。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.deleteDuplicates}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>25. K 个一组翻转链表（hard）</Title>
                <Collapse ghost>
                    <Panel header={`给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
                            k是一个正整数，它的值小于或等于链表的长度。
                            如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
                            进阶：
                            你可以设计一个只使用常数额外空间的算法来解决此问题吗？
                            你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。`} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.reverseKGroup}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default AlgoListNode

