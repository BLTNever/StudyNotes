import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import {
    traversal1, traversal2, traversal3, traversal4, radix, radix2, twoNums,
    findShortSubArray, createTree, depJson, infinityCurry
} from './example'
import { BSTree, nodes } from './fn'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Algorithm1 = () => {
    const orderFn = () => {
        console.group("%c 二叉树遍历", "background: #333; color: yellow")
        console.log('data>>>', nodes)
        console.log('前序递归>>>', BSTree.preOrderRec1(nodes))
        console.log('前序非递归>>>', BSTree.preOrderRec2(nodes))
        console.log('中序递归>>>', BSTree.inOrderRec1(nodes))
        console.log('中序非递归>>>', BSTree.inOrderRec2(nodes))
        console.log('后序递归>>>', BSTree.postOrderRec1(nodes))
        console.log('后序非递归>>>', BSTree.postOrderRec2(nodes))
        console.log('层次遍历>>>', BSTree.levelOrder(nodes))
        console.groupEnd()
    }


    useEffect(() => {
        const arr = [1, 2, 7, 3, 4, 1, 2, 3, 5, 6, 2, 1, 3, 4, 2, 3, 2, 3, 1, 3]
        // orderFn()
        // findShortestSubArray(arr)
    }, [])
    return (
        <>
            <Wrap>
                <Title level={3}>两数之和</Title>
                <Text>给一个整数数组nums和一个整数目标值target，在数组中找出两数之和为target的那两个数，返回他们在数组中下标</Text>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{twoNums}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>数组的度</Title>
                <Text>定一个非空且只包含非负数的整数数组nums，数组的度的定义是指数组里任一元素出现频数的最大值</Text>
                <Text>在nums中找到与nums拥有相同大小的度的最短连续子数组，返回其长度</Text>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{findShortSubArray}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>数据转换：数组-树</Title>
                <Text>一维数组转成树的结构</Text>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{createTree}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>JSON数据的深度</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{depJson}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>无限柯里化</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{infinityCurry}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>树的遍历有几种方式，实现层次遍历</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text mark>遍历方式：1.前序遍历、2.中序遍历、3.后序遍历、4.层次遍历</Text>
                            <ul>
                                <li>前序：根 -&gt; 左 -&gt; 右</li>
                                <li>中序：左 -&gt; 根 -&gt; 右</li>
                                <li>后序：左 -&gt; 右 -&gt; 根</li>
                            </ul>
                            <Row>
                                <Col span={12}><Card><Highlight language="javascript">{traversal1}</Highlight></Card></Col>
                                <Col span={12}><Card><Highlight language="javascript">{traversal2}</Highlight></Card></Col>
                            </Row>
                            <Row>
                                <Col span={12}><Card><Highlight language="javascript">{traversal3}</Highlight></Card></Col>
                                <Col span={12}><Card><Highlight language="javascript">{traversal4}</Highlight></Card></Col>
                            </Row>
                        </Space>

                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>实现36进制转换</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Row>
                                <Col><Card><Highlight language="javascript">{radix}</Highlight></Card></Col>
                                <Col><Card><Highlight language="javascript">{radix2}</Highlight></Card></Col>
                            </Row>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Algorithm1




// function curry(fn) {
//     return function curried(...args) {
//         console.log('args>>>', args)
//         const complete = args.length >= fn.length && !args.slice(0, fn.length).includes(curry.placeholder)
//         console.log('complete>>>', complete)
//         if (complete) return fn.apply(this, args)
//         return function (...otherArgs) {
//             console.log('otherArgs>>>', otherArgs)
//             const res = args.map(arg => arg === curry.placeholder && otherArgs.length ? otherArgs.shift() : arg);
//             console.log('res>>>', res)
//             return curried(...res, ...otherArgs);
//         }
//     }
// }

// curry.placeholder = Symbol()
// const join = (a, b, c) => {
//     return `${a}_${b}_${c}`
// }

// const curriedJoin = curry(join)
// const _ = curry.placeholder
// console.log(111, curriedJoin(1, 2, 3))
// console.log(222, curriedJoin(_, 2)(1, 3))
// console.log(333, curriedJoin(_, _, _)(1)(_, 3)(2))

const arr = [1, [2], [3, [4]]];
function flat(arr: any, depth = 1) {
    const stack = arr.map((item: any) => [item, depth])
    console.log(stack)
    const res = []
    while (stack.length > 0) {
        const [item, itemDepth] = stack.pop()
        if (Array.isArray(item) && itemDepth > 0) {
            stack.push(...item.map(i => [i, itemDepth - 1]))
        } else {
            res.push(item)
        }
    }
    return res.reverse()
}
console.log(flat(arr, 3))