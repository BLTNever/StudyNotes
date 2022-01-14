import React from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'


import { maxSubArray, twoNums } from './example'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const AlgoAggregate = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>1. 两数之和</Title>
                <Collapse ghost>
                    <Panel header="给一个整数数组nums和一个整数目标值target，在数组中找出两数之和为target的那两个数，返回他们在数组中下标" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{twoNums}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            
            <Wrap>
                <Title level={3}>53. 最大子数组和</Title>
                <Collapse ghost>
                    <Panel header="给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和" key="1">
                        <Space><Highlight language="javascript">{maxSubArray}</Highlight></Space>
                    </Panel>
                </Collapse>
            </Wrap>



        </>
    )
}

export default AlgoAggregate


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