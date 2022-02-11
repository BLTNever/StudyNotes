import React from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './example'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const AlgoBase = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>多维数组拍平排序去重</Title>
                <Collapse ghost>
                    <Panel header="ES6" key="1">
                        <Highlight language="javascript">{eg.arrFn13}</Highlight>
                    </Panel>
                    <Panel header="递归" key="2">
                        <Highlight language="javascript">{eg.arrFn14}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={4}>基础排序操作</Title>
                <Collapse ghost>
                    <Panel header="sort排序: V8对 sort 的实现，length <= 10 采用插入排序（时间复杂度O(n^2),空间复杂度O(1)）,>10 快速排序（时间复杂度O(nlogn), 空间复杂度O(logn)）" key="1">
                        <Highlight language="javascript">{eg.sort}</Highlight>
                    </Panel>
                    <Panel header={<ul>
                        <li>冒泡排序: 循环遍历多次每次从前往后把大元素往后调，每次确定一个最大(最小)元素，多次后达到排序序列</li>
                        <li>{`i >= 0; j < i; [j, j+1] = [j+1, j]`}</li>
                    </ul>} key="2">
                        <Highlight language="javascript">{eg.bubbleSort}</Highlight>
                    </Panel>
                    <Panel header={<ul>
                        <li>选择排序: 在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到「已排序序列的末尾」</li>
                        <li>{`i = 0; min = i; j = i; min > j, min = j; i !== min && [i, min] = [min, i]`}</li>
                    </ul>} key="3">
                        <Highlight language="javascript">{eg.selectSort}</Highlight>
                    </Panel>
                    <Panel header={<ul>
                        <li>插入排序: 选取当前位置(当前位置前面已经有序) 目标就是将当前位置数据插入到前面合适位置</li>
                        <li>{`i = 0; temp = nums[i]; j = i - 1, j >= 0; j > temp ? j + 1 = j, j = temp : break`}</li>
                    </ul>} key="4">
                        <Highlight language="javascript">{eg.insertSort}</Highlight>
                    </Panel>
                    <Panel header={<ul>
                        <li>快速排序: 分治</li>
                        <li>{`len <= 1 return arr;pivot = splice(mid, 1)[0]; quicksort(left).concat([pivot], quicksort(right))`}</li>
                    </ul>} key="5">
                        <Highlight language="javascript">{eg.quickSort}</Highlight>
                    </Panel>
                    <Panel header="洗牌算法" key="6">
                        <Highlight language="javascript">{eg.random}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default AlgoBase


