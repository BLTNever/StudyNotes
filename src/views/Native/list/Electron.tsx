import React from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'
import { Wrap } from '@components/Base'
import * as eg from './code'
const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography

const Electron = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>Electron进程模型</Title>
                <Text>Electron将进程主要分为两类: 主进程和渲染进程</Text>
                <ul>
                    <li>主进程: 相当于一个管理员,可以创建与管理各种渲染进程</li>
                    <li>渲染进程: 相当于浏览器中的各个标签页</li>
                </ul>
                <Text>创建进程</Text>
                <Collapse ghost>
                    <Panel header="主进程" key="1">
                        <Space direction="vertical">
                            <Text>主进程在index.js中默认创建,并且可通过下面监听创建完毕和关闭事件</Text>
                            <Highlight>{eg.createProgress}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="渲染进程" key="2">
                        <Space direction="vertical">
                            <Text>创建渲染进程即创建一个窗口,一般一个客户端应该包含一个主渲染进程,我们给其起名为mainWindow</Text>
                            <Highlight>{eg.createRender}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="进程通信" key="3">
                        <Space direction="vertical">
                            <Text mark>在主进程中通过ipcMain来调用与其相关的函数</Text>
                            <ul>
                                <li>渲染进程 to 主进程:
                                    <ul>
                                        <li>ipcMain是仅存在于主进程中的一个对象,只能在主进程中调用,其上可以挂载多个监听器,面向所有渲染进程来监听事件</li>
                                        <li>主进程通过ipcMain.on来监听事件,渲染进程通过ipcRenderer.send(eventName)来触发事件</li>
                                        <li><Highlight>{eg.ipcRenderToMain}</Highlight></li>
                                    </ul>
                                </li>
                                <li>主进程 to 渲染进程:
                                    <ul>
                                        <li>主进程主动给渲染进程发送消息是通过渲染进程的webContents来完成</li>
                                        <li>这里的理解要准确,所说的渲染进程指的是在index.js中创建的渲染进程对象,并不指的是渲染进程的页面中的对象</li>
                                        <li><Highlight>{eg.ipcMainToRender}</Highlight></li>
                                        <li>注意,webContents中的监听事件无法像ipcMain一样自定义,对于渲染进程触发的事件,官方文档中给出了明确的列表</li>
                                    </ul>
                                </li>
                                <li>渲染进程 to 渲染进程:
                                    <ul>
                                        <li>渲染进程与渲染进程间的通信是通过ipcRenderer.sendTo来完成。</li>
                                        <li><Highlight>{eg.ipcRenderToRender}</Highlight></li>
                                    </ul>
                                </li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="上下文隔离" key="4">
                        <Space direction="vertical">
                            <ul>
                                <li>在Electron中,Node中模块在其中也可以使用(配置nodeIntegration为true)</li>
                                <li>这样的话,在一个复杂项目中,就可以造成污染,重名等问题。于是Electron特意增加了上下文隔离这一概念(开启上下文隔离的条件是contextIsolation属性设置为true,且增加preload的路径)</li>
                                <li>一旦开启该条件,渲染页面的js中无法引入Electron和Node的各种模块。因此,如果想在其中使用,需要配置preload.js,使用contextBridge来暴露全局接口到渲染页面的脚本中,在渲染脚本中直接通过window.darkMode来调用preload.js中的toggle和system函数。</li>
                                <li><Highlight>{eg.contextBridge}</Highlight></li>
                            </ul>
                        </Space>
                    </Panel>

                    <Panel header="储存" key="5">
                        <Space direction="vertical">
                            <li>electron-store</li>
                            <li><Highlight>{eg.electronStore}</Highlight></li>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>

            </Wrap>
        </>
    )
}

export default Electron