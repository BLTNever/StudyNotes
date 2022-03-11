import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Highlight from '@components/HighLight'
import { Collapse, Typography, Space } from 'antd'

import { Wrap } from '@components/Base'
import * as eg from './egDp'

import * as T from '../config'
const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const AlgoDp = () => {
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
            <Wrap id="DP">
                <Title level={3}>DP模版</Title>
                <ul>
                    <li>1. 确定DP数组以及下标的意义</li>
                    <li>2. 确定递推公式</li>
                    <li>3. DP数组如何初始化</li>
                    <li>4. 确定遍历顺序</li>
                    <li>5. 举例推导DP数组</li>
                </ul>
            </Wrap>

            <Wrap>
                <Title level={3}>背包模版</Title>
                <Highlight>{eg.backPackTemp}</Highlight>
            </Wrap>
            <Wrap id="climbStairs">
                <Title level={3}>70.爬楼梯{T.EASY}{T.DP}</Title>
                <Collapse ghost>
                    <Panel header="假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.climbStairs}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>121.买卖股票的最佳时机I{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给定一个数组 prices ,它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
                        你只能选择 某一天 买入这只股票,并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
                        返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润,返回 0" key="1">
                        <Highlight language="javascript">{eg.maxProfit}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="fib1">
                <Title level={3}>509.斐波那契数{T.EASY}{T.DP}</Title>
                <Collapse ghost>
                    <Panel header="斐波那契数,通常用 F(n) 表示,形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始,后面的每一项数字都是前面两项数字的和。也就是: 
                            F(0) = 0,F(1) = 1
                            F(n) = F(n - 1) + F(n - 2),其中 n > 1
                            给你 n ,请计算 F(n) 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.fib1}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>746.使用最小花费爬楼梯{T.EASY}{T.DP}</Title>
                <Collapse ghost>
                    <Panel header="给你一个整数数组 cost ,其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用,即可选择向上爬一个或者两个台阶。
                        你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
                        请你计算并返回达到楼梯顶部的最低花费。" key="1">
                        <Space direction="vertical">
                            {/* <Highlight language="javascript">{eg.minCostClimbingStairs}</Highlight> */}
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>剑指 Offer 10- I.斐波那契数列{T.EASY}{T.DP}</Title>
                <Collapse ghost>
                    <Panel header="写一个函数,输入 n ,求斐波那契(Fibonacci)数列的第 n 项(即 F(N))。答案需要取模 1e9+7(1000000007),如计算初始结果为: 1000000008,请返回 1" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.fib}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>剑指 Offer 10- II.青蛙跳台阶问题{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header={`一只青蛙一次可以跳上1级台阶,也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
                            答案需要取模 1e9+7(1000000007),如计算初始结果为: 1000000008,请返回 1。`} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.numWays}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>不完全背包问题{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>由若干个物品和容量为 m 的背包</li>
                        <li>给定数组 A 表示每个物品的大小,数组 V 表示米格物品的价值</li>
                        <li>每个物品使用一次,最多装入背包的价值是多大</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.backPack1}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>完全背包问题{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给定无限个物品,每个物品数量有无限个,第 i 个的物品的体积是A[i],价值是V[i]</li>
                        <li>容量为 m 的背包</li>
                        <li>最多装入背包的价值是多大</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.backPack2}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>322. 零钱兑换{T.MEDIUM}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给你一个整数数组 coins ,表示不同面额的硬币；以及一个整数 amount ,表示总金额。</li>
                        <li>计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额,返回 -1 </li>
                        <li>你可以认为每种硬币的数量是无限的</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.coinChange}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default AlgoDp


function backPack(m: number, A: number[], V: number[]) {
    let dp = new Array(m + 1).fill(0)             // 初始化0,没有物品, 价值为0
    for (let i = 0; i < m; i++) {                 // 外层循环背包
        for (let j = 0; j < A.length; j++) {      // 内存循环物品
            if (j - A[i] >= 0) {
                dp[j] = Math.max(dp[i], dp[i - A[j] + V[j]])
            }
        }
    }
    return dp[m]
}

try {
    // console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
} catch (error) { console.log(error) }



