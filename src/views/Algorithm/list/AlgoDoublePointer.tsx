import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Highlight from '@components/HighLight'
import { Collapse, Typography, Space } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egDoublePointer'
import * as T from '../config'

const { Panel } = Collapse
const { Title } = Typography

const AlgoDoublePointer = () => {
    const history = useHistory()
    const scrollToAnchor = (anchorName: string) => {
        let anchorElement = document.querySelector(anchorName)
        if (anchorElement) { anchorElement.scrollIntoView() }
    }
    useEffect(() => {
        const { location: { hash } } = history
        if (hash.length) scrollToAnchor(hash)
    }, [])
    return (
        <>
            <Wrap id="twoSum">
                <Title level={3}>剑指 Offer 57.和为s的两个数字{T.EASY}{T.DOUBLE_POINTER}</Title>
                <Collapse ghost>
                    <Panel header="输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.twoSum}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>287. 寻找重复数{T.MEDIUM}{T.SLOW_FAST_POINTER}{T.BF}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内(包括 1 和 n)，可知至少存在一个重复的整数</li>
                        <li>假设 nums 只有 一个重复的整数 ，返回 这个重复的数 </li>
                        <li>你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.findDuplicate}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default AlgoDoublePointer


try {
    // console.log(findDuplicate([7, 8, 1, 2, 3, 4, 5, 6, 5]))
} catch (error) { }