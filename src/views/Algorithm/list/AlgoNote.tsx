import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Collapse, Typography, Space } from 'antd'

import { Wrap } from '@components/Base'

import {
    traversal1, traversal2, traversal3, traversal4, radix, radix2,
    depJson, destructuring,
    _isEqual, infinityCurry1, infinityCurry2,
} from './egNote'

import { createTree, } from './egArray'
import { findShortSubArray } from './egHash'
import { BSTree, nodes } from './fn'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const AlgoNote = () => {
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
                <Title level={3}>数组的度</Title>
                <Collapse ghost>
                    <Panel header="定一个非空且只包含非负数的整数数组nums，数组的度的定义是指数组里任一元素出现频数的最大值
                    在nums中找到与nums拥有相同大小的度的最短连续子数组，返回其长度" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{findShortSubArray}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>数据转换：数组-树</Title>
                <Collapse ghost>
                    <Panel header="一维数组转成树的结构" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{createTree}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>JSON数据的深度</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{depJson}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>无限柯里化</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Row gutter={24}>
                            <Col span={12}><Card><Highlight language="javascript">{infinityCurry1}</Highlight></Card></Col>
                            <Col span={12}><Card><Highlight language="javascript">{infinityCurry2}</Highlight></Card></Col>
                        </Row>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>Array解构赋值</Title>
                <Collapse ghost>
                    <Panel header="将目标数组（targetArray）通过ES6的解构格式（formater）" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{destructuring}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>isEqual</Title>
                <Collapse ghost>
                    <Panel header="对比数据是否相等" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{_isEqual}</Highlight>
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
                                <Col span={12}><Card><Highlight language="javascript">{radix}</Highlight></Card></Col>
                                <Col span={12}><Card><Highlight language="javascript">{radix2}</Highlight></Card></Col>
                            </Row>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>树的遍历有几种方式，实现层次遍历</Title>
                <Collapse ghost>
                    <Panel header="遍历方式：1.前序遍历、2.中序遍历、3.后序遍历、4.层次遍历" key="1">
                        <Space direction="vertical">
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
        </>
    )
}

export default AlgoNote
