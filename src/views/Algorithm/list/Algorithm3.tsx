/* eslint-disable @typescript-eslint/explicit-member-accessibility */


import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import {
    flat1, flat2, sort, bubbleSort, sort2, filterSame, random, quickSort,
    arrFn13, arrFn14,
} from './example'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview3 = () => {


    return (
        <>
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

            <Wrap>

            </Wrap>

        </>
    )
}

export default Interview3

