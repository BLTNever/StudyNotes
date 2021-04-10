import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import {
    traversal1, traversal2, traversal3, traversal4, radix, radix2, twoNums,
    findShortSubArray, createTree, arrFn13, arrFn14, _flat, sort, bubbleSort,
    sort2, filterSame, random, quickSort
} from './algorithm'
import { BSTree, nodes } from './fn'
import { stringFn } from '@views/Js/list/fn'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview5 = () => {
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
                <Title level={3}>数组操作</Title>
                <Collapse ghost>
                    <Panel header="多维数组拍平排序去重" key="1">
                        <Card title="ES6">
                            <Highlight language="javascript">{arrFn13}</Highlight>
                        </Card>
                        <Card title="递归">
                            <Highlight language="javascript">{arrFn14}</Highlight>
                        </Card>
                        <Card title="flat的实现">
                            <Highlight language="javascript">{_flat}</Highlight>
                        </Card>
                    </Panel>
                    <Panel header="去重" key="2">
                        <Highlight language="javascript">{filterSame}</Highlight>
                    </Panel>
                    <Panel header="sort排序" key="3">
                        <Highlight language="javascript">{sort}</Highlight>
                    </Panel>
                    <Panel header="冒泡排序" key="4">
                        <Highlight language="javascript">{bubbleSort}</Highlight>
                    </Panel>
                    <Panel header="选择排序" key="5">
                        <Highlight language="javascript">{sort2}</Highlight>
                    </Panel>
                    <Panel header="快速排序" key="6">
                        <Highlight language="javascript">{quickSort}</Highlight>
                    </Panel>
                    <Panel header="洗牌算法" key="7">
                        <Highlight language="javascript">{random}</Highlight>
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

export default Interview5



const arr = [
    { id: 1 },
    { id: 2, pId: 3 },
    { id: 3, pId: 1 },
    { id: 4, pId: 2 },
    { id: 5, pId: 1 },
    { id: 6, pId: 3 },
]

function createTree1(list: any) {
    if (!list?.length) return []

    let mapper: any = {}
    let obj = null
    for (let item of list) {
        mapper[item.id] = item
        item.children = []
        if (!item.pId) {
            obj = item
        } else {
            if (mapper[item.pId]) {
                mapper[item.pId].children.push(item)
            } else {
                mapper[item.pId] = {
                    id: item.pId,
                    children: []
                }
            }
        }
    }
    return obj
}


function deep(target: any): any {
    if (typeof target !== 'object') return 0
    let ans = 0
    for (const key in target) {
        if (typeof target[key] === 'object') {
            ans = Math.max(ans, deep(target[key]) + 1)
        }
    }
    return ans
}
let obj = {
    a: {
        b: {
            c: { 
                d: 1 }
        },
        e: {
            f: {
                g: {
                    h: {
                        x: {}
                    }
                }
            }
        }
    }
}
console.log(deep(obj))