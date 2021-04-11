import React from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import {
    flat1, flat2, _merge1, _merge2, arrFn13, arrFn14,
} from './example'
import { time } from 'console'
import { last } from 'lodash'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Algorithm2 = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>实现flat</Title>
                <Collapse ghost>
                    <Panel header="递归" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{flat1}</Highlight></Card>
                        </Space>
                    </Panel>

                    <Panel header="非递归" key="2">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{flat2}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>多维数组拍平排序去重</Title>
                <Collapse ghost>
                    <Panel header="ES6" key="1">
                        <Highlight language="javascript">{arrFn13}</Highlight>
                    </Panel>
                    <Panel header="递归" key="2">
                        <Highlight language="javascript">{arrFn14}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>合并两个有序数组</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Row gutter={24}>
                            <Col span={12}><Card><Highlight language="javascript">{_merge1}</Highlight></Card></Col>
                            <Col span={12}><Card><Highlight language="javascript">{_merge2}</Highlight></Card></Col>
                        </Row>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Algorithm2



