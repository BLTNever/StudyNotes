import React from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'

import {
    arrFn13, arrFn14,
    sort, bubbleSort, sort2, random, quickSort,
} from './example'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const AlgoBase = () => {

    return (
        <>
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
                    <Panel header="冒泡排序：双循环，外层循环遍历数组的长度，内循环遍历交换位置。外循环遍历完内循环len - i" key="4">
                        <Highlight language="javascript">{bubbleSort}</Highlight>
                    </Panel>
                    <Panel header="选择排序：双循环，i = n - 1,j = 0; j > i ? [j, i] = [i, j]" key="5">
                        <Highlight language="javascript">{sort2}</Highlight>
                    </Panel>
                    <Panel header="快速排序：分治，len<=1 return arr;pivot = splice(mid, 1)[0]; quicksort(left).concat([pivot], quicksort(right))" key="6">
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



