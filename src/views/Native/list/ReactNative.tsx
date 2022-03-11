import React from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'
import { Wrap } from '@components/Base'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography

const ReactNative = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>RN渲染原理</Title>
                <Collapse ghost>
                    <Panel header="JSX  →  ReactElement" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li>JSX和 StyleSheet 对象都会被统统被转化为ReactElement 对象</li>
                                <li>在之后的Render部分,RN跟ReactDom的区别就出来了</li>
                                <li>render 函数里使用的View不同</li>
                                <li>RN 使用的AppRegistry.registryComponents</li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="ReactElement  →  YogaNode" key="2">
                        <Space direction="vertical">
                            <ul>
                                <li>Yoga是Facebook出品跨平台的布局引擎, 注意不是渲染引擎</li>
                                <li>主文件只有6个 written by C, 然后出了各个平台UIKit,帮你跨平台.</li>
                                <li>他做的事情就是把 Flexbox布局 关键字以及 margin, padding, border, position 等影响布局的CSS 属性, 解析成一个一个的 YogaNode, 然后生成一个YogaNodeTree</li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="YogaNode  →  Native Element" key="3">
                        <Space direction="vertical">
                            <ul>
                                <li>iOS View基类: RCTshadowView</li>
                                <li>Android View基类: ReactShodowNode</li>
                            </ul>
                            <Text>对于各种不同对象的特殊样式,ReactNative 在js侧, 新建了不同的StyleProps, 在渲染不同的View的时候做对应</Text>
                        </Space>
                    </Panel>
                    <Panel header="Render Queue" key="4">
                        <Space direction="vertical">
                            <ul>
                                <li>MessageQueue 在将 Virtual Dom Tree 按照深度优先的方式遍历, 发送给Native</li>
                                <li>先变成YogaNode, 然后组装成YogaNodeTree. 然后执行具体渲染的</li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>RN通讯原理</Title>
                <Collapse ghost>
                    <Panel header="MessageQueue" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li>消息队列, 他承担了Native 和 JS 之间的全部通讯, 包括渲染指令, 用户相应, 已经各种互相调用</li>
                                <li>最开始的调用是 N → JS, 然后大部分是 JS → N</li>
                            </ul>
                            <ul>
                                <Text>Native 和 JS的几种交互方式</Text>
                                <li>N → JS</li>
                                <li>JS → N</li>
                                <li>JS → N(callback) → JS</li>
                                <li>JS → N(async then) → JS(Promise)you</li>
                            </ul>
                            <ul>
                                <Text>callback 和 promise的不同</Text>
                                <li>写法: callback 写起来不好看, callback hell</li>
                                <li>执行顺序: promise可以在配合await语法糖,方便的阻断执行顺序, 例如I/O,Network. callback不会阻断执行空指针: 在执行callback的时候, 经常在执行时, 主体已经被销毁了, 造成空</li>
                                <li>指针异常, promise比较像iOS的block, 相对比较安全</li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="符号表" key="2">
                        <Space direction="vertical">
                            <Text>Native 和 JS 交互的时候相当于大家相互持有一套模块和方法的Name到ID的表格(JSON格式). 这样JS 测只需要传递ID 和 具体的参数</Text>
                            <ul>
                                <li>moduleID</li>
                                <li>methodID</li>
                                <li>params(具体的参数), callbackID(回调方法的ID)</li>
                            </ul>
                            <Text>一个RCTModuleData 在JS测表现就是一块json</Text>
                            <Text>生成符号表,由Native 在初始化的时候完成</Text>
                            <Text mark>RCTModule(官方/第三方) → RCTBatchBridge(遍历全部Native给JS的RCTModuleData) → RCTModuleData... → JSRuntime(传递给JS、JS调用)</Text>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>RN实现原理</Title>
                <Collapse ghost>
                    <Panel header="RN架构: JS域、Native域、C++Bridge" key="1">
                        <ul>
                            <li>JS域: JS域为单线程,使用的编程语言是JavaScript,JS代码运行在JavaScriptCore上。JS域主要负责实现APP的业务逻辑、并指定需要渲染的组件以及组件的布局</li>
                            <li>Native域: Native域是一个多线程的环境,它有负责UI渲染的主UI线程,以及其他后台任务线程(包括运行JS代码的线程),native域的主要作用是提供宿主环境,并负责UI渲染与交互。Android主要是Java和Kotlin,iOS主要是OC和Swift</li>
                            <li>C++Bridge: 主要负责JS域与Native域的通信,而通信则是指JS与Java、OC等语言之间的相互调用</li>
                        </ul>
                    </Panel>
                    <Panel header="RN性能" key="2">
                        <ul>
                            <li>RN的性能瓶颈往往会出现在C++ Bridge上</li>
                            <li>所有跨语言的通信都需要通过C++ Bridge来完成, 数据必须序列化后才能通过。而数据的序列化与反序列化是非常耗时的</li>
                            <li>为了构建一个高性能的RN APP,我们必须将C++桥上传递的数据量保持在最低限度</li>
                        </ul>
                    </Panel>
                    <Panel header="UI的异步更新" key="3">
                        <Text>通过VirtualDOM的概念,结合diff算法,将JS侧对组件的更改批量、异步地发送到native侧</Text>
                    </Panel>
                    <Panel header="UI的异步更新" key="3">
                        <Text>通过VirtualDOM的概念,结合diff算法,将JS侧对组件的更改批量、异步地发送到native侧</Text>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default ReactNative