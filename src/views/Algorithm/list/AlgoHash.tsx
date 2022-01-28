import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Highlight from '@components/HighLight'
import {  Collapse, Typography, Space } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egHash'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography

const AlgoHash = () => {
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
            <Wrap>
                <Title level={3}>1. 两数之和</Title>
                <Collapse ghost>
                    <Panel header="给一个整数数组nums和一个整数目标值target，在数组中找出两数之和为target的那两个数，返回他们在数组中下标" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.twoNums}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>697.数组的度（easy）</Title>
                <Collapse ghost>
                    <Panel header="数组的度的定义是指数组里任一元素出现频数的最大值，在nums中找到与nums拥有相同大小的度的最短连续子数组，返回其长度" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.findShortSubArray}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>



        </>
    )
}

export default AlgoHash


const arr = [7, 1, 5, 3, 6, 4]
// function maxProfit(price: number[]) {
//     if (price.length <= 1) return 0
//     let max = 0
//     let min = price[0]
//     for (let p of price) {
//         min = Math.min(min, p)
//         max = Math.max(max, p - min)
//     }
//     return max
// }
// console.log(maxProfit(arr))

function maxProfit(price: number[]) {
    if (price.length <= 1) return 0
    let ans = 0
    let cur = 0
    for (let i = 0; i < price.length; i++) {
        if (price[i] > price[cur]) {
            ans = Math.max(ans, price[i] - price[cur])
        } else {
            cur = i
        }
    }
    return ans
}
console.log(maxProfit(arr))