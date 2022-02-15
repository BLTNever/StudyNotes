import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Highlight from '@components/HighLight'
import { Card, Col, Row, Collapse, Typography, Space } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egProgram'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Program = () => {

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
                <Title level={3}>设计模式</Title>
                <Collapse ghost>
                    <Panel header="观察者模式" key="1">
                        <Space direction="vertical">
                            <Text mark>被观察者对象（subject）维护一组观察者（observer），subject状态发生变化时，通过observer的某些方法把变化通知到observer</Text>
                            <Highlight language="javascript">{eg.observer}</Highlight>
                            <Highlight language="javascript">{eg.eventEmitter}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>queryUrlParams</Title>
                <Collapse ghost>
                    <Panel header="slice切割、遍历" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.queryUrlParams}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="new URL api" key="2">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.queryUrlParams2}</Highlight>
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
                            <Highlight language="javascript">{eg.clone1}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap id="deboucethrottle">
                <Title level={3}>节流和防抖</Title>
                <Collapse ghost>
                    <Panel header="防抖-基础版/immediate版" key="1">
                        <Title level={3}>触发高频事件后，在N秒内函数只会执行一次，N秒内再次触发高频事件，则重新计算时间</Title>
                        <Text mark>每次触发事件时都取消之前的延时调用方法</Text>
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.debounce}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="防抖--{leading（是否立即执行）,trailing（是否冷却后执行）}" key="2">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.debounce2}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="防抖-hooks" key="3">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.debounce3}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="节流-基础版" key="4">
                        <Title level={3}>高频事件触发，N秒内只执行一次，稀释函数的执行频率</Title>
                        <Text mark>每次触发事件都会判断是否有在等待执行的延时函数</Text>
                        <Row gutter={24}>
                            <Col span={8}><Card title="时间戳: 立即执行"><Highlight language="javascript">{eg.throttle11}</Highlight></Card></Col>
                            <Col span={8}><Card title="计时器: 最后一次会延时执行"><Highlight language="javascript">{eg.throttle12}</Highlight></Card></Col>
                            <Col span={8}><Card title="结合写法"><Highlight language="javascript">{eg.throttle13}</Highlight></Card></Col>
                        </Row>

                    </Panel>
                    <Panel header="节流2" key="5">
                        <Highlight language="javascript">{eg.throttle2}</Highlight>
                    </Panel>
                    <Panel header="节流-{leading（是否立即执行）,trailing（是否冷却后执行）}" key="6">
                        <h4>throttle支持leading（是否立即执行）和trailing（是否冷却后执行）</h4>
                        <Highlight language="javascript">{eg.throttle3}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap  id="curry">
                <Title level={3}>柯里化</Title>
                <Collapse ghost>
                    <Panel header="curry(1,2)(3,4)(5)() 需要调用一次执行" key="1">
                        <Highlight language="javascript">{eg.infinityCurry1}</Highlight>
                    </Panel>
                    <Panel header="curry(1,2)(3,4)(5) 直接执行(利用toString隐式转换特性，最后执行时隐式转换，只有alert情况下可以)" key="2">
                        <Highlight language="javascript">{eg.infinityCurry2}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>事件委托</Title>
                <Collapse ghost>
                    <Panel header="DOM事件委托" key="1">
                        <Space direction="vertical">
                            <Text >** 点击页面中div打印dom节点</Text>
                            <Highlight language="javascript">{eg.event}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="throttlePromises">
                <Title level={3}>节流API请求</Title>
                <Collapse ghost>
                    <Panel header="for..of循环执行， Array(max).fill(Array.from(tasks).entries()).map(run)" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.throttlePromises}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="map...retrun Promise => run(); task.then(() => run())" key="2">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.multiRequest}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="template">
                <Title level={3}>实现一个模板引擎</Title>
                <Collapse ghost>
                    <Panel header="使用 fs.readFile() 来读取文件拿到模板字符串；字符串拼接替换；使用new Function(str)执行；with(data)传入数据" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.renderTemplate}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Program

