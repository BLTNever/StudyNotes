import React from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'

import {
    flat1, flat2, arrFn13, arrFn14,
    sort, bubbleSort, sort2, random, quickSort,
} from './example'
import { time } from 'console'
import { last } from 'lodash'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const AlgoBase = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>实现flat</Title>
                <Collapse ghost>
                    <Panel header="递归" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{flat1}</Highlight></Card>
                        </Space>
                    </Panel>

                    <Panel header="非递归" key="2">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{flat2}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>多维数组拍平排序去重</Title>
                <Collapse ghost>
                    <Panel header="ES6" key="1">
                        <Highlight language="javascript">{arrFn13}</Highlight>
                    </Panel>
                    <Panel header="递归" key="2">
                        <Highlight language="javascript">{arrFn14}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={4}>基础排序操作</Title>
                <Collapse ghost>
                    <Panel header="sort排序" key="3">
                        <Highlight language="javascript">{sort}</Highlight>
                    </Panel>
                    <Panel header="冒泡排序" key="4">
                        <Highlight language="javascript">{bubbleSort}</Highlight>
                    </Panel>
                    <Panel header="选择排序" key="5">
                        <Highlight language="javascript">{sort2}</Highlight>
                    </Panel>
                    <Panel header="快速排序" key="6">
                        <Highlight language="javascript">{quickSort}</Highlight>
                    </Panel>
                    <Panel header="洗牌算法" key="7">
                        <Highlight language="javascript">{random}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default AlgoBase



