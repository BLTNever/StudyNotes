/* eslint-disable react/no-this-in-sfc */
import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Collapse, Typography, Tag, Space } from 'antd'

import { Wrap } from '@components/Base'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography

import * as eg from './egStack'

const AlgoStack = () => {

    return (
        <>
            <Title level={2}>栈</Title>
            <Wrap>
                <Title level={3}>剑指 Offer 09. 用两个栈实现队列</Title>
                <Collapse ghost>
                    <Panel header="用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.CQueue}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>1381. 设计一个支持增量操作的栈(medium)</Title>
                <Collapse ghost>
                    <Panel header="请你设计一个支持下述操作的栈。
                            实现自定义栈类 CustomStack ：
                            CustomStack(int maxSize)：用 maxSize 初始化对象，maxSize 是栈中最多能容纳的元素数量，栈在增长到 maxSize 之后则不支持 push 操作。
                            void push(int x)：如果栈还未增长到 maxSize ，就将 x 添加到栈顶。
                            int pop()：弹出栈顶元素，并返回栈顶的值，或栈为空时返回 -1 。
                            void inc(int k, int val)：栈底的 k 个元素的值都增加 val 。如果栈中元素总数小于 k ，则栈中的所有元素都增加 val 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.CustomStack}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>150. 逆波兰表达式求值(medium)</Title>
                <Collapse ghost>
                    <Panel header="根据 逆波兰表示法，求表达式的值。
                            有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
                            说明：
                            整数除法只保留整数部分。
                            给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.evalRPN}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>394. 字符串解码(medium)</Title>
                <Collapse ghost>
                    <Panel header="给定一个经过编码的字符串，返回它解码后的字符串。
                            编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。 a 或 2[4] 的输入。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.decodeString}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>946. 验证栈序列(medium)</Title>
                <Collapse ghost>
                    <Panel header="给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.validateStackSequences}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>227. 基本计算器 II(medium)</Title>
                <Collapse ghost>
                    <Panel header="给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。整数除法仅保留整数部分。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.calculate}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>42. 接雨水(hard)</Title>
                <Collapse ghost>
                    <Panel header="给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
                        输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
                        输出：6
                        解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。"  key="1">
                        <Space direction="vertical">
                            <a href="https://leetcode-cn.com/problems/trapping-rain-water/" target="_blank">题</a>
                            <Highlight language="javascript">{eg.trap}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Title level={2}>队列、单调栈暂缓 自闭中</Title>
        </>
    )
}

export default AlgoStack

