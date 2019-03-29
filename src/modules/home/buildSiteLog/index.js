import React from 'react'
import {
    Col, Card, Timeline, Icon,
} from 'antd'

const BuildSiteLog = () => (
    <Col span={8}>
        <div className="cloud-box">
            <Card>
                <div className="pb-m">
                    <h3>记录</h3>
                    {/* <small>JS学习ing</small> */}
                    <small>CommonJs、ES2015、AMD、CMD模块规范对比介绍(note15)未完待续..</small>
                </div>
                <span className="card-tool"><Icon type="sync" /></span>
                <Timeline>
                    {/* <Timeline.Item color="#108ee9">
                        <p>学习...</p>
                    </Timeline.Item> */}
                    <Timeline.Item color="red">类型转换</Timeline.Item>
                    <Timeline.Item color="green">值类型&引用类型</Timeline.Item>
                    <Timeline.Item color="green">原始类型</Timeline.Item>
                    <Timeline.Item color="green">调用堆栈</Timeline.Item>
                </Timeline>
            </Card>
        </div>
    </Col>)

export default BuildSiteLog
