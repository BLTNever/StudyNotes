import React from 'react'
import Highlight from 'react-highlight'

import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'
import ReactEventImg from '@images/react-event.jpg'
import ReactEventImg2 from '@images/react-event2.jpg'
import ReactEventImg3 from '@images/react-event3.jpg'

// import { } from './example'
const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography
const ReactEvent = () => (
    <>
        <PageHeader title="事件机制理解" />
        <Wrap>
            <Collapse defaultActiveKey={['1']} ghost>
                <Panel header="表象理解" key="1">
                    <Space direction="vertical">
                        <Text>react自身实现了一套自己的事件机制，包括事件注册、事件合成、事件冒泡、事件派发，基于浏览器的事件机制下完成</Text>
                        <Text>react事件没有绑定到具体的dom节点上，而是绑定在document上，基于浏览器的冒泡事件机制统一在document上触发</Text>
                        <Text>原生事件由于合成事件执行， 在合成事件内阻止冒泡只是阻止合成事件</Text>
                        <ul>
                            <li>原生事件（阻止冒泡）会阻止合成事件的执行</li>
                            <li>合成事件（阻止冒泡）不会阻止原生事件执行</li>
                        </ul>

                        <Card title="意义">
                            <ul>
                                <li>1. 减少内存消耗，提升性能，不需要注册那么多事件，每种注事件类型只在document上注册一次</li>
                                <li>2. 统一规范，解决ie兼容性问题，简化事件逻辑</li>
                                <li>3. 对开发者友好</li>
                            </ul>
                        </Card>
                    </Space>
                </Panel>

                <Panel header="合成事件" key="2">
                    <Space direction="vertical">
                        <ul>
                            <li>1. 对原生事件的封装</li>
                            <li>2. 对某些原生事件的升级和改造</li>
                            <li>3. 浏览器兼容性处理</li>
                        </ul>

                        <Card title="原生事件封装">
                            <Text>SyntheticEvent是react合成事件的基类，定义了合成事件的基础公共方法</Text>
                            <Text>根据事件类型不同使用不同的合成事件对象。例如鼠标单击事件-SyntheticMouseEvent，焦点事件-SyntheticFocusEvent等，这些都继承于SyntheticEvent</Text>
                        </Card>

                        <Card title="原生事件的升级和改造">
                            <Text>例onChange: 融合了原生的blur、change、click、focus、input、keydown、keyup、selectionchange等</Text>
                        </Card>

                        <Card title="浏览器兼容性">
                            <Text>对于IE的兼容处理</Text>
                        </Card>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <PageHeader title="事件机制注册" />
        <Wrap>
            <Collapse defaultActiveKey={['1']} ghost>
                <Panel header="流程" key="1">
                    <Space direction="vertical">
                        <ul>
                            <li>事件注册 - 组件挂载阶段，根据组件内声明的事件类型 onChange、onClick、等，给document上添加事件 addEventListener，并指定统一的事件处理程序dispatchEvent</li>
                            <li>事件储存 - 把react组件内的所有事件统一存放到一个对象里，缓存起来，在触发事件的时候查找对应的方法去执行</li>
                        </ul>
                        <Card>
                            <PreviewImg src={ReactEventImg} />
                        </Card>

                    </Space>
                </Panel>

                <Panel header="关键步骤" key="2">
                    <Space direction="vertical">
                        <Text>react拿到将要挂载组件的虚拟dom（react element对象），然后处理react dom的props，判断属性内是否有声明为事件的属性</Text>
                        <Text>例如onClick、onChange，拿到事件类型click、change和对应的事件处理程序fn。执行下面第三部</Text>

                        <ul>
                            <li>1. 完成事件注册</li>
                            <li>2. 将react dom，事件类型，处理函数fn放到数组储存</li>
                            <li>3. 组件挂载完成后，处理第2步生成的数组，便利该数组把事件处理函数存储到listenerBrank对象中</li>
                        </ul>

                        <Card>
                            <PreviewImg src={ReactEventImg2} />
                        </Card>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>


        <PageHeader title="事件执行机制" />
        <Wrap>
            <Card title="流程">
                <ul>
                    <li>1. 进入统一的事件分发函数（dispatchEvent）</li>
                    <li>2. 结合原生事件找到当前节点对应的ReactDOMComponent对象</li>
                    <li>
                        3. 合成事件的开始
                    <ul>
                            <li>3.1 根据当前事件类型生成指定的合成对象</li>
                            <li>3.2 封装原生事件和冒泡机制</li>
                            <li>3.3 查找当前元素以及他素有的父级</li>
                            <li>3.4 在listenerBank查找事件回调并合成到 event（合成事件结束）</li>
                        </ul>
                    </li>
                    <li>4. 批量处理合成事件内的回调事件（事件触发完成end）</li>
                </ul>
            </Card>
            <Card>
                <PreviewImg src={ReactEventImg3} />
            </Card>

        </Wrap>
    </>
)

export default ReactEvent