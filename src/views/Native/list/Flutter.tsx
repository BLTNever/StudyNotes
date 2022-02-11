
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
                <ul>
                    <li><a target="_blank" href="https://github.com/CarGuo/gsy_flutter_book">git地址</a></li>
                    <li><a target="_blank" href="https://guoshuyu.cn/home/wx/">在线阅读</a></li>
                </ul>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">

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