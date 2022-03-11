import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'

import { } from './egNative'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview6 = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>TS</Title>
                <Collapse ghost>
                    <Panel header="基础" key="1">
                        <Space direction="vertical">
                            <Title level={4}>type和interface相同与不同</Title>
                            <Text>interface表示funciton、object、class,type除了这么写类型,还可以表示其他类型</Text>
                            <Text>interface可以合并同名接口,type不支持</Text>
                            <Text>interface可以继承interface和type,使用extends关键字。type也可以继承interface和type,使用&符号</Text>

                            <Title level={4}>TS的优势</Title>
                            <Text mark>静态类型的优势: </Text>
                            <ul>
                                <li><Text>杜绝手误导致变量名写错</Text></li>
                                <li><Text>自动完成</Text></li>
                                <li><Text>重构支持</Text></li>
                                <li><Text>类型充当文档以及注释</Text></li>
                            </ul>
                            <Text mark>静态类型的不足: </Text>
                            <ul>
                                <li><Text>类型标注麻烦</Text></li>
                                <li><Text>类型系统不够强</Text></li>
                                <li><Text>eval和new Function()类型支持不到</Text></li>
                            </ul>
                        </Space>
                    </Panel>

                    <Panel header="范性" key="2">
                        <Space direction="vertical">
                            <ul>
                                <li><Text>范型不同于string,number等具体的类型,是一种抽象的类型</Text></li>
                                <li><Text>范型就是对类型进行编程</Text></li>
                                <li><Text> </Text></li>
                                <li><Text></Text></li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>

            </Wrap>
        </>
    )
}

export default Interview6


