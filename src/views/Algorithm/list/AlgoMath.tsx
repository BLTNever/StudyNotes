import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'

import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egMath'
const { Panel } = Collapse
const { Title } = Typography


const AlgoMath = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>7. 整数反转</Title>
                <Collapse ghost>
                    <Panel header="给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.reverseNum}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>9. 回文数</Title>
                <Collapse ghost>
                    <Panel header="给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.isPalindrome}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>13. 罗马数字转整数</Title>
                <Collapse ghost>
                    <Panel header="罗马数字包含以下七种字符: I， V， X， L，C，D 和 M,给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.romanToInt}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>66. 加一</Title>
                <Collapse ghost>
                    <Panel header="给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。你可以假设除了整数 0 之外，这个整数不会以零开头。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.plusOne}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>69. Sqrt(x)</Title>
                <Collapse ghost>
                    <Panel header="计算并返回 x 的平方根，其中 x 是非负整数。由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.mySqrt}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>70. 爬楼梯</Title>
                <Collapse ghost>
                    <Panel header="假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.climbStairs}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>剑指 Offer 10- I. 斐波那契数列</Title>
                <Collapse ghost>
                    <Panel header="写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.fib}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>509. 斐波那契数</Title>
                <Collapse ghost>
                    <Panel header="斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
                            F(0) = 0，F(1) = 1
                            F(n) = F(n - 1) + F(n - 2)，其中 n > 1
                            给你 n ，请计算 F(n) 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.fib1}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>1952. 三除数</Title>
                <Collapse ghost>
                    <Panel header="给你一个整数 n 。如果 n 恰好有三个正除数 ，返回 true ；否则，返回 false 。如果存在整数 k ，满足 n = k * m ，那么整数 m 就是 n 的一个 除数 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.isThree}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>1979. 找出数组的最大公约数</Title>
                <Collapse ghost>
                    <Panel header="给你一个整数数组 nums ，返回数组中最大数和最小数的 最大公约数 。两个数的 最大公约数 是能够被两个数整除的最大正整" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.findGCD}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>LCP 02. 分式化简</Title>
                <Collapse ghost>
                    <Panel header="输入的cont代表连分数的系数（cont[0]代表上图的a0，以此类推）。返回一个长度为2的数组[n, m]，使得连分数的值等于n / m，且n, m最大公约数为1。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.fraction}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>剑指 Offer II 001. 整数除法</Title>
                <Collapse ghost>
                    <Panel header={`给定两个整数 a 和 b ，求它们的除法的商 a/b ，要求不得使用乘号 '*'、除号 '/' 以及求余符号 '%' 。
                            注意：
                            整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
                            假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231, 231−1]。本题中，如果除法结果溢出，则返回 231 − 1`} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.divide}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>剑指 Offer 10- II. 青蛙跳台阶问题</Title>
                <Collapse ghost>
                    <Panel header={`一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
                            答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。`} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.numWays}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>剑指 Offer 17. 打印从1到最大的n位数</Title>
                <Collapse ghost>
                    <Panel header={`输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
                            示例 1:
                            输入: n = 1
                            输出: [1,2,3,4,5,6,7,8,9]`} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.numWays}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>18. 四数之和（medium）</Title>
                <Collapse ghost>
                    <Panel header={`给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
                        0 <= a, b, c, d < n
                        a、b、c 和 d 互不相同
                        nums[a] + nums[b] + nums[c] + nums[d] == target
                        你可以按 任意顺序 返回答案 。`} key="1">
                        <a href="https://leetcode-cn.com/problems/4sum/"></a>
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.fourSum}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

        </>
    )
}

export default AlgoMath

function printNumbers(n: number) {
    let res = []
    for (let i = 1; i < Math.pow(10, n); i++) {
        res.push(i)
    }
}



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function nSum(nums: number[], target: number) {
    let res: any[] = []
    let len = nums.length
    nums.sort((a, b) => a - b)

    const helper = (index: number, N: number, temp: number[]) => {
        // 如果下标越界了或者 N < 3 就没有必要在接着走下去了
        if (index === len || N < 3) return

        for (let i = index; i < len; i++) {
            // 剔除重复的元素
            if (i > index && nums[i] === nums[i - 1]) {
                continue
            }
            // 如果 N > 3 的话就接着递归
            // 并且在递归结束之后也不走下边的逻辑
            // 注意这里不能用 return
            // 否则循环便不能跑完整
            if (N > 3) {
                helper(i + 1, N - 1, [nums[i], ...temp])
                continue
            }
            // 当走到这里的时候，相当于在求「三数之和」了
            // temp 数组在这里只是把前面递归加入的数组算进来
            let left = i + 1
            let right = len - 1
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right] + temp.reduce((prev, curr) => prev + curr)
                if (sum === target) {
                    res.push([...temp, nums[i], nums[left], nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--
                    }
                    left++
                    right--
                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }

    helper(0, 4, [])
    return res
};
// console.log(nSum([1, 0, -1, 0, -2, 2], 0))