import React from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Delegate = () => {
    const [temp, setTemp] = React.useState(5);

    return (
        <>
            <Wrap>
                <Title level={3}>事件委托</Title>
                <Collapse ghost>
                    <Panel header="事件委托" key="1">
                        <Space direction="vertical">
                            <Text>事件委托是把响应事件委托到另一个元素上</Text>
                            <Text>一般是绑定在外层或者父级元素上</Text>
                            <Text>具体的实现是由事件冒泡机制去实现的</Text>
                            <Text>事件委托的优势：1.减少内存消耗、2.动态绑定事件</Text>
                        </Space>
                    </Panel>
                    <Panel header="事件捕获、事件冒泡" key="2">
                        <Space direction="vertical">
                            <Text>事件捕获：事件从跟节点往下传递直到事件目标</Text>
                            <Text>事件冒泡：事件从事件目标往上传递直到跟节点</Text>
                            <Text>通过addEventListener(type:事件类型, listener: 监听的回调函数, useCapture: true冒泡/false捕获-默认false)监听事件目标</Text>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}></Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Delegate

