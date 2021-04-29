/* eslint-disable @typescript-eslint/explicit-member-accessibility */


import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import {
    createNew, extend8, call, apply, bind, myPromise, parseInt, event1, _instanceof, ajax,
    multiRequest, _assign, _map
} from './example'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Program = () => {

    const queryURLParams = (url: string) => {
        if (!url?.length) return {}
        let askIndex = url.indexOf('?')
        let polIndex = url.indexOf('#') > 0 ? url.indexOf('#') : url.length
        let host = askIndex > 0 ? url.slice(0, askIndex) : url
        let askText = askIndex > 0 ? url.slice(askIndex + 1, polIndex) : ''
        let polText = polIndex > 0 ? url.slice(polIndex) : ''

        if (!askText?.length) return {}
        askText = decodeURIComponent(askText)

        let obj = {}
        if (host?.length) obj['host'] = host
        if (polText?.length) obj['hash'] = polText
        askText.split('&').forEach((i: string) => {
            let [key, value] = i.split('=')
            const arrIndex = key.indexOf('[]')
            if (arrIndex > 0) {
                key = key.slice(0, arrIndex)
                if (key in obj) {
                    obj[key].push(value)
                } else {
                    obj[key] = [value]
                }
            } else if (key === 'json') {
                obj['json'] = value?.length ? JSON.parse(value) : {}
            } else {
                obj[key] = decodeURIComponent(value)
            }
        })
        return obj
    }


    useEffect(() => {
        const url = "https://www.baidu.com?name=coder&age=20&callback=https%3A%2F%2Fbaidu.com%3Fname%3Dtest&list[]=a&list[]=b&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D"
        const test = queryURLParams(url)
        console.log('test queryUrlParams>>>>>', test)
    }, [])
    return (
        <>


            <Wrap>
                <Title level={3}>原生方法的实现</Title>
                <Collapse ghost>
                    <Panel header="call" key="3">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{call}</Highlight></Card>
                        </Space>
                    </Panel>
                    <Panel header="apply" key="4">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{apply}</Highlight></Card>
                        </Space>
                    </Panel>
                    <Panel header="bind" key="5">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{bind}</Highlight></Card>
                        </Space>
                    </Panel>
                    <Panel header="new函数" key="6">
                        <Space direction="vertical">
                            <Text>创建一个全新的对象</Text>
                            <Text>对象执行[[prototype]]链接，将这个新对象的[[prototype]]链接到这个构造函数.prototype所指的对象</Text>
                            <Text>这个新对象会绑定到函数调用的this</Text>
                            <Text>函数如果没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象</Text>
                            <Card><Highlight language="javascript">{createNew}</Highlight></Card>
                        </Space>
                    </Panel>
                    <Panel header="_instanceof" key="8">
                        <Space direction="vertical">
                            <Text>instanceof 用于判断左侧值是否是右侧值的实例，所以左侧必须是一个对象，而右侧是一个类</Text>
                            <Text>instanceof 会查找原型链，知道 null 之前如果还不是这个对象的实例则会返回 false，否则返回 true</Text>
                            <Card><Highlight language="javascript">{_instanceof}</Highlight></Card>
                        </Space>
                    </Panel>
                    <Panel header="parseInt" key="7">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{parseInt}</Highlight></Card>
                        </Space>
                    </Panel>

                    <Panel header="extend" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{extend8}</Highlight></Card>
                        </Space>
                    </Panel>

                    <Panel header="map" key="9">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{_map}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>原生ajax</Title>
                <Collapse ghost>
                    <Panel header="实现" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{ajax}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="并发" key="2">
                        <Space direction="vertical">
                            <Highlight language="javascript">{multiRequest}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>Object.assign</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{_assign}</Highlight>
                        </Space>
                    </Panel>

                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>Promise</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{myPromise}</Highlight>
                        </Space>
                    </Panel>

                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>委托</Title>
                <Collapse ghost>
                    <Panel header="DOM事件委托" key="1">
                        <Space direction="vertical">
                            <Text >** 点击页面中div打印dom节点</Text>
                            <Highlight language="javascript">{event1}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


        </>
    )
}

export default Program

