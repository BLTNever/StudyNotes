import React from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import nativetojs from '@images/rnnativetojs.png'

import { radix, radix2, ajax, traversal1, traversal2, traversal3, traversal4 } from './example'
import { orderBy } from 'lodash'
import { BSTree, nodes } from './fn'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const TS = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>1.类如何不被new</Title>
                <Collapse ghost>
                    <Panel header="访问修饰符" key="1">
                        <Space direction="vertical">
                            <Title level={4}>访问修饰符</Title>
                            <Text code>ts中修饰符分为三种:  public公有(默认)；protected: 保护(父类+子类)；private私有(本类)</Text>
                            <ul>
                                <li><Text>当属性或方法被标记为protected,只允许在子类中访问</Text></li>
                                <li><Text>当属性或方法被标记为private,则不能在声明它的类的外部访问</Text></li>
                                <li><Text>当构造函数(constructor)被标记为private,该类不允许被实例化,只允许被继承</Text></li>
                                <li><Text>只读属性关键字readonly,只允许只读</Text></li>
                            </ul>


                            <Title level={4}>抽象类</Title>
                            <ul>
                                <li><Text>抽象类方法作为其他派生类的基类使用,不会被直接实例化,仅包含定义方法的签名,不包含方法体</Text></li>
                                <li><Text>abstract关键字用于定义抽象类和在抽象类内部定义抽象方法、抽象成员</Text></li>
                                <li><Text>抽象类 方法的预发与接口方法相似,两者都定义方法签名,不包含方法体。抽象方法必须包含abstract关键字并且可以包含访问修饰符</Text></li>
                            </ul>

                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}></Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Row>

                            </Row>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default TS