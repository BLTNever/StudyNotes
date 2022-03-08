
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Highlight from '@components/HighLight'
import { Card, Col, Row, Collapse, Typography, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egNative'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const NativeMethod = () => {

    const history = useHistory()
    const scrollToAnchor = (anchorName: string) => {
        let anchorElement = document.querySelector(anchorName)
        if (anchorElement) { anchorElement.scrollIntoView() }
    }
    useEffect(() => {
        const { location: { hash } } = history
        if (hash.length) scrollToAnchor(hash)
    }, [])
    return (
        <>
            <Wrap>
                <Title level={3}>Function</Title>
                <Collapse ghost>
                    <Panel header="call、apply、bind实现" key="3">
                        <Row>
                            <Col span={12}><Card><Highlight language="javascript">{eg.call}</Highlight></Card></Col>
                            <Col span={12}><Card><Highlight language="javascript">{eg.apply}</Highlight></Card></Col>
                        </Row>
                        <Row><Col span={12}><Card><Highlight language="javascript">{eg.bind}</Highlight></Card></Col></Row>
                    </Panel>

                    <Panel header="new函数" key="6">
                        <Space direction="vertical">
                            <Text>创建一个全新的对象</Text>
                            <Text>对象执行[[prototype]]链接，将这个新对象的[[prototype]]链接到这个构造函数.prototype所指的对象</Text>
                            <Text>这个新对象会绑定到函数调用的this</Text>
                            <Text>函数如果没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象</Text>
                            <Highlight language="javascript">{eg.createNew}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="instanceof(测构造函数的 prototype 属性是否出现在某个实例对象的原型链上)" key="8">
                        <Space direction="vertical">
                            <Text>instanceof 用于判断左侧值是否是右侧值的实例，所以左侧必须是一个对象，而右侧是一个类</Text>
                            <Text>instanceof 会查找原型链，知道 null 之前如果还不是这个对象的实例则会返回 false，否则返回 true</Text>
                            <Highlight language="javascript">{eg._instanceof}</Highlight>
                        </Space>
                    </Panel>


                    <Panel header="extend" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg._extend}</Highlight>
                        </Space>
                    </Panel>


                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>Promise</Title>
                <Collapse ghost>
                    <Panel header="实现一个Promise" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.promise}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="模拟Promise.all" key="2">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.promiseAll}</Highlight>
                        </Space>
                    </Panel>

                    <Panel header="promise装饰器" key="4">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.promiseAll}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>ajax</Title>
                <Collapse ghost>
                    <Panel header="实现" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.ajax}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="并发" key="2">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.multiRequest}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="array">
                <Title level={3}>Array</Title>
                <Collapse ghost>
                    <Panel header="flat(递归实现)" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{eg.flat1}</Highlight></Card>
                        </Space>
                    </Panel>
                    <Panel header="flat(非递归实现)" key="2">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{eg.flat2}</Highlight></Card>
                        </Space>
                    </Panel>

                    <Panel header="map" key="3">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg._map}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="string">
                <Title level={3}>String</Title>
                <Collapse ghost>
                    <Panel header="trim" key="1" extra="replace(/^\s*|\s*$/g, '')">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg._trim}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="indexOf" key="2" extra="val === str.slice(i, i + val.length)">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg._indexOf}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>Object</Title>
                <Collapse ghost>
                    <Panel header="assign" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg._assign}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>Number</Title>
                <Collapse ghost>
                    <Panel header="parseInt" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.parseInt}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default NativeMethod


try {
    // console.log(flat(arr))
} catch (error) { }

