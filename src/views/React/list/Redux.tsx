import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Tag } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import { _createStore, _compose, _applyMiddleware, _combineReducers } from './example'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Redux = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>redux简介</Title>
                <Text>暴露出来的API: </Text>
                <ul>
                    <li><Text mark>CreateStore</Text></li>
                    <li><Text mark>CombineReducers</Text></li>
                    <li><Text mark>BindActionCreators</Text></li>
                    <li><Text mark>ApplyMiddleware</Text></li>
                    <li><Text mark>Compose</Text></li>
                </ul>
                <Text>解决的问题: 组件数据共享,同时不会有数据被任意修改</Text>
                <Text>改变数据的方式就是通过dispatch一个action来返回一个新的state</Text>
            </Wrap>

            <Wrap>
                <Title level={3}>CreateStore</Title>
                <Space direction="vertical">
                    <Text>创建一个Store来管理app的状态,返回一个Object,包含了<Tag color="orange">dispatch</Tag>、<Tag color="orange">subscribe</Tag>、<Tag color="orange">getState</Tag></Text>
                </Space>
                <Collapse ghost>
                    <Panel header="CreateStore" key="1">
                        <Highlight language="javascript">{_createStore}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>combineReducers</Title>
                <Space direction="vertical">
                    <Text>主要作用是合并reducer</Text>
                </Space>
                <Collapse ghost>
                    <Panel header="combineReducers" key="1">
                        <Highlight language="javascript">{_combineReducers}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>ApplyMiddleware</Title>
                <Space direction="vertical">
                    <Text>在dispatch一个action到reducer,在reducer处理数据之前做的操作就是middleware</Text>
                </Space>
                <Collapse ghost>
                    <Panel header="ApplyMiddleware" key="1">
                        <Highlight language="javascript">{_applyMiddleware}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>Compose</Title>
                <Space direction="vertical">
                    <Text>compose做的事情就是上一个函数的返回结果作为下一个函数的参数传入</Text>
                </Space>
                <Collapse ghost>
                    <Panel header="Compose" key="1">
                        <Highlight language="javascript">{_compose}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>React-Redux(待补充)</Title>
                <a href="https://zhuanlan.zhihu.com/p/80655889" target="_blank"></a>
                <Collapse ghost>
                    <Panel header="将redux应用在react中" key="1">
                        <ul>
                            <li>创建一个Provider,将store传入Provider,作为当前context的值,便于组件通过context获取Redux store({`<Provider store={createStore(reducers)}>`})</li>
                            <li>store订阅一个组件更新的统一逻辑
                                <ul>
                                    <li>concat(mapStateToProps, mapDispatchToProps)(Child)</li>
                                    <li>mapStateToProps: 用于建立组件和store中存储的状态的映射关系,它是一个函数,第一个参数是state,也就是redux中存储的顶层数据,第二个参数是组件自身的props。返回一个对象,对象内的字段就是该组件需要从store中获取的值</li>
                                    <li>mapDispatchToProps: 用于建立组件和store.dispatch的映射关系。它可以是一个对象,也可以是一个函数,当它是一个函数的时候,第一个参数就是dispatch,第二个参数是组件自身的props</li>
                                    <li>当不传mapStateToProps的时候,当store变化的时候,不会引起组件UI的更新</li>
                                    <li>当不传mapDispatchToProps的时候,默认将dispatch注入到组件的props中</li>
                                </ul>
                            </li>
                            <li>组件需要更新数据时,需要调用store.dispatch派发action,进而触发订阅的更新</li>
                            <li>组件获取数据时候,使用store.getState()获取数据</li>
                        </ul>
                    </Panel>

                    <Panel header="React-Redux做了什么" key="2">
                        <ul>
                            <li>提供Subscrption类,实现订阅更新的逻辑</li>
                            <li>提供Provider,将store传入Provider,便于下层组件从context或者props中获取store；并订阅store的变化,便于在store变化的时候执行被订阅到react-redux内的更新函数</li>
                            <li>提供selector,负责将获取store中的stat和dispacth一些action的函数(或者直接就是dispatch)或者组件自己的props,从中选择出组件需要的值,作为selector的返回值</li>
                            <li>提供connect高阶组件,主要做了两件事:
                                <ul>
                                    <li>执行selector,获取到要注入到组件中的值,将它们注入到组件的props</li>
                                    <li>订阅props的变化,负责在props变化的时候更新组件</li>
                                </ul>
                            </li>
                        </ul>
                    </Panel>

                    <Panel header="React-Redux如何做的" key="3">
                        <ul>
                            <li>Provider是怎么把store放入context中的</li>
                            <li>如何将store中的state和dispatch(或者调用dispatch的函数)注入组件的props中的</li>
                            <li>我们都知道在Redux中,可以通过store.subscribe()订阅一个更新页面的函数,来实现store变化,更新UI,而React-Redux是如何做到store变化,被connect的组件也会更新的</li>
                        </ul>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Redux



