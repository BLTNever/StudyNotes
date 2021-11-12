import React from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'

import {
    findShortSubArray, createTree, _merge1, _merge2, removeDuplicates, removeElement,
    searchInsert,
} from './egArray'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography

const AlgoArray = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>数组的度</Title>
                <Text></Text>
                <Text></Text>
                <Collapse ghost>
                    <Panel header="数组的度的定义是指数组里任一元素出现频数的最大值，在nums中找到与nums拥有相同大小的度的最短连续子数组，返回其长度" key="1">
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
                <Title level={3}>合并两个有序数组</Title>
                <Collapse ghost>
                    <Panel header="给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组" key="1">
                        <Row gutter={24}>
                            <Col span={12}><Card><Highlight language="javascript">{_merge1}</Highlight></Card></Col>
                            <Col span={12}><Card><Highlight language="javascript">{_merge2}</Highlight></Card></Col>
                        </Row>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>删除有序数组中的重复项</Title>
                <Collapse ghost>
                    <Panel header="有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度（不要使用额外的数组空间、O(1)空间）" key="1">
                        <Row gutter={24}>
                            <Col span={18}><Card><Highlight language="javascript">{removeDuplicates}</Highlight></Card></Col>
                        </Row>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>移除元素</Title>
                <Collapse ghost>
                    <Panel header="给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度（不要使用额外的数组空间、O(1)空间）" key="1">
                        <Row gutter={24}>
                            <Col span={18}><Card><Highlight language="javascript">{removeElement}</Highlight></Card></Col>
                        </Row>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>搜索插入位置</Title>
                <Collapse ghost>
                    <Panel header="给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。" key="1">
                        <Row gutter={24}>
                            <Col span={18}><Card><Highlight language="javascript">{searchInsert}</Highlight></Card></Col>
                        </Row>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default AlgoArray



