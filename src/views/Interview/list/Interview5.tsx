import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import { traversal1, traversal2, traversal3, traversal4, radix, radix2 } from './example'
import { BSTree, nodes } from './fn'

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

    function findShortestSubArray(nums: number[]) {
        if (!nums.length) return 0
        console.log('nums>>>', nums)

        let obj = {}
        // let len = 0
        nums.forEach((item, key) => {
            if (obj.hasOwnProperty(item)) {
                obj[item].push(key)
            } else {
                obj[item] = [key]
            }
            // len = obj[item].length
            // if(obj[item].length < len) {
            //     delete obj[item]
            // }
        })
        console.log('obj>>>', obj)

        let arr: number[] = []
        let len = 0
        for (let i in obj) {
            if (obj[i].length >= len) {
                arr = obj[i].length > len ? [obj[i]] : arr.concat([obj[i]])
                len = obj[i].length
            }
        }
        console.log('arr>>>', arr)
        if (!arr.length) return 0

        let maxArr: number[] = []
        arr.forEach((item: any) => {
            if (item.length) {
                maxArr.push(item[item.length - 1] - item[0] + 1)
            }
        })
        console.log('maxArr>>>', maxArr)
        return Math.min(...maxArr)
    }



    useEffect(() => {
        const arr = [1, 2, 7, 3, 4, 1, 2, 3, 5, 6, 2, 1, 3, 4, 2, 3, 2, 3, 1, 3]

        findShortestSubArray(arr)
    }, [])
    return (
        <>
            <Wrap>
                <Title level={3}>数组的度</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{radix}</Highlight></Card>
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
                        {/* {orderFn()} */}
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


