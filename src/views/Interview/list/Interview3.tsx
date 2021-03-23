import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import {
    ajax, queryUrlParams, createNew, extend8, call, apply, bind, myPromise, parseInt, debounce, throttle, queryUrlParams2,
    clone1, _useState, _memo, createContext, observer,
} from './example'
import { subscriber } from '@views/Exercises/list/example'
import { resolve } from 'path'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview3 = () => {

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
                <Title level={3}>设计模式</Title>
                <Collapse ghost>
                    <Panel header="观察者模式" key="1">
                        <Space direction="vertical">
                            <Text mark>被观察者对象（subject）维护一组观察者（observer），subject状态发生变化时，通过observer的某些方法把变化通知到observer</Text>
                            <Highlight language="javascript">{observer}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>原生方法的实现</Title>
                <Collapse ghost>
                    <Panel header="extend" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{extend8}</Highlight></Card>
                        </Space>
                    </Panel>
                    <Panel header="promise" key="2">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{myPromise}</Highlight></Card>
                        </Space>
                    </Panel>
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
                    <Panel header="parseInt" key="7">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{parseInt}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>节流和防抖</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text mark>tips: 函数节流和防抖也是一种闭包的实现</Text>
                            <Row>
                                <Col><Card><Highlight language="javascript">{debounce}</Highlight></Card></Col>
                                <Col><Card><Highlight language="javascript">{throttle}</Highlight></Card></Col>
                            </Row>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>React</Title>
                <Collapse ghost>
                    <Panel header="useState" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{_useState}</Highlight></Card>
                        </Space>
                    </Panel>

                    <Panel header="memo" key="2">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{_memo}</Highlight></Card>
                        </Space>
                    </Panel>

                    <Panel header="createContext" key="3">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{createContext}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>queryUrlParams</Title>
                <Collapse ghost>
                    <Panel header="slice切割、遍历" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{queryUrlParams}</Highlight></Card>
                        </Space>
                    </Panel>
                    <Panel header="new URL api" key="2">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{queryUrlParams2}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>深拷贝</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text>基本类型的变量不存在深拷贝浅拷贝</Text>
                            <Text>引用类型的浅拷贝复制的是在栈中的地址，而非在堆中存的数据（例如直接赋值、Array的slice和concat等）</Text>
                            <Text>使用JSON.parse(JSON.stringify(obj))做深拷贝赋值会忽略掉undefined和函数表达式</Text>
                            <Card><Highlight language="javascript">{clone1}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>原生ajax</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{ajax}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Interview3

