import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import {
    queryUrlParams, queryUrlParams2,
    clone1, observer, eventEmitter,
    debounce, debounce2, debounce3,
    throttle11, throttle12, throttle13,
    throttle2, throttle3
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
        // const test = queryURLParams(url)
        // console.log('test queryUrlParams>>>>>', test)
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
                            <Highlight language="javascript">{eventEmitter}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>queryUrlParams</Title>
                <Collapse ghost>
                    <Panel header="slice切割、遍历" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{queryUrlParams}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="new URL api" key="2">
                        <Space direction="vertical">
                            <Highlight language="javascript">{queryUrlParams2}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>深拷贝</Title>
                <Space direction="vertical">
                    <Text>基本类型的变量不存在深拷贝浅拷贝</Text>
                    <Text>引用类型的浅拷贝复制的是在栈中的地址，而非在堆中存的数据（例如直接赋值、Array的slice和concat等）</Text>
                    <Text>使用JSON.parse(JSON.stringify(obj))做深拷贝赋值会忽略掉undefined和函数表达式</Text>
                </Space>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{clone1}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>节流和防抖</Title>
                <Collapse ghost>
                    <Panel header="防抖" key="1">
                        <Title level={3}>触发高频事件后，在N秒内函数只会执行一次，N秒内再次触发高频事件，则重新计算时间</Title>
                        <Text mark>每次触发事件时都取消之前的延时调用方法</Text>
                        <Space direction="vertical">

                            <Highlight language="javascript">{debounce}</Highlight>
                            <h4>增加立即执行和是否延时执行参数</h4>
                            <Highlight language="javascript">{debounce2}</Highlight>
                            <h4>在hooks中实现</h4>
                            <Highlight language="javascript">{debounce3}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="节流1" key="2">
                        <Title level={3}>高频事件触发，N秒内只执行一次，稀释函数的执行频率</Title>
                        <Text mark>每次触发事件都会判断是否有在等待执行的延时函数</Text>
                        <Row gutter={24}>
                            <Col span={8}><Card title="时间戳"><Highlight language="javascript">{throttle11}</Highlight></Card></Col>
                            <Col span={8}><Card title="计时器"><Highlight language="javascript">{throttle12}</Highlight></Card></Col>
                            <Col span={8}><Card title="结合写法"><Highlight language="javascript">{throttle13}</Highlight></Card></Col>
                        </Row>

                    </Panel>
                    <Panel header="节流2" key="3">
                        <h4></h4>
                        <Highlight language="javascript">{throttle2}</Highlight>
                    </Panel>
                    <Panel header="节流3" key="4">
                        <h4>throttle支持leading（是否立即执行）和trailing（是否冷却后执行）</h4>
                        <Highlight language="javascript">{throttle3}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>


        </>
    )
}

export default Program






