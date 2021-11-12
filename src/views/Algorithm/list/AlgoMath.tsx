import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import { reverseNum, isPalindrome, romanToInt, plusOne, mySqrt, climbStairs } from './egMath'
const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const AlgoMath = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>整数取反</Title>
                <Collapse ghost>
                    <Panel header="给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{reverseNum}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>回文数</Title>
                <Collapse ghost>
                    <Panel header="给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{isPalindrome}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>罗马数字转整数</Title>
                <Collapse ghost>
                    <Panel header="罗马数字包含以下七种字符: I， V， X， L，C，D 和 M,给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{romanToInt}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>加一</Title>
                <Collapse ghost>
                    <Panel header="给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。你可以假设除了整数 0 之外，这个整数不会以零开头。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{plusOne}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>x 的平方根(二分法)</Title>
                <Collapse ghost>
                    <Panel header="计算并返回 x 的平方根，其中 x 是非负整数。由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{mySqrt}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>爬楼梯</Title>
                <Collapse ghost>
                    <Panel header="假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{climbStairs}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default AlgoMath


