import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Highlight from '@components/HighLight'
import { Collapse, Typography, Space } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egDoublePointer'

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
                <Title level={3}>剑指 Offer 57.和为s的两个数字</Title>
                <Collapse ghost>
                    <Panel header="输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.twoSum}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>

            </Wrap>
        </>
    )
}

export default AlgoDoublePointer



try {
    // console.log(twoSum([2, 7, 11, 15], 9))
} catch (error) { }