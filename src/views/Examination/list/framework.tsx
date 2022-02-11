/* eslint-disable @typescript-eslint/explicit-member-accessibility */


import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Table } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import {
    _useState, _memo, createContext,
    _render, virtualize,
} from './egFramework'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography
export const columns = [
    {
        title: "地图", dataIndex: "arena_name", render: (arena_name: any,) => <span style={{ fontSize: 24 }}>{arena_name}</span>
    },
    {
        title: "领地", dataIndex: "child", render: (child: any,) => {
            return <ul>
                {child.map((item: any) => {
                    return <li key={String(item.area)}>{item.time}: {
                        item.area.map((i: any) => <span key={i}> {i}</span>)
                    }</li>
                })
                }
            </ul >
        }
    },

]
const map = [
    {
        arena_name: '费舍尔湾',
        child: [
            { time: '20:00', area: ['翠学海', '慧仁海'] },
            { time: '20:15', area: ['南群海', '澜宁海'] },
            { time: '21:00', area: ['芸先之地', '怜政山', '紫国之地'] },
            { time: '21:15', area: ['玛超海', '玲生山', '语志之地'] },
            { time: '22:00', area: ['巧茂山', '阳河海'] },
            { time: '22:15', area: ['桂良山'] },
        ]
    },
    {
        arena_name: '小镇争夺战',
        child: [
            { time: '20:00', area: ['霜有之地'] },
            { time: '20:15', area: ['柳军之地', '融鸣山'] },
            { time: '21:00', area: ['莲鹏山', '易毅山'] },
            { time: '21:15', area: ['露琛山', '唯刚山'] },
            { time: '22:00', area: ['寒风山'] },
            { time: '22:15', area: ['琳坚山', '绮壮之地'] },
        ]
    },
    {
        arena_name: '卡累利阿',
        child: [
            { time: '20:00', area: ['平克之地'] },
            { time: '20:15', area: ['白俊海'] },
            { time: '21:00', area: ['娥飞之地', '英涛之地'] },
            { time: '21:15', area: ['锦旭之地', '纨敬之地', '贤辰之地', '雁伦山'] },
            { time: '22:00', area: [] },
            { time: '22:15', area: ['萍若山', '惜翔海'] },
        ]
    },
    {
        arena_name: '马利诺夫卡',
        child: [
            { time: '20:00', area: ['凤永之地', '雁善之地'] },
            { time: '20:15', area: ['茜雄之地'] },
            { time: '21:00', area: ['梅鹏山'] },
            { time: '21:15', area: ['青先山', '仪世山'] },
            { time: '22:00', area: ['卉策山', '烁有山', '雨兴山'] },
            { time: '22:15', area: ['从利山', '芙贵海'] },
        ]
    },
    {
        arena_name: '鲁别克', child: [
            { time: '20:00', area: ['纨榕之地'] },
            { time: '20:15', area: [] },
            { time: '21:00', area: ['璐家山', '融德之地', '易发之地'] },
            { time: '21:15', area: ['柏彬之地', '听平海'] },
            { time: '22:00', area: ['菱兴之地'] },
            { time: '22:15', area: [] },
        ]
    },
    {
        arena_name: '湖边的角逐',
        child: [
            { time: '20:00', area: ['露楠海', '幼炎海', '珍俊山'] },
            { time: '20:15', area: [] },
            { time: '21:00', area: ['蝶思山', '苇胜之地', '烟朋之地'] },
            { time: '21:15', area: ['琦顺山', '阅晨之地'] },
            { time: '22:00', area: [] },
            { time: '22:15', area: ['半强海', '羽之之地', ''] },
        ]
    },
]

const Framework = () => {
    const _props: any = {
        pagination: false,
        columns: columns,
        bordered: true,
        sticky: true,
        rowKey: (_: any, index: number) => index + 1,
    }
    return (
        <>
            <Wrap>
                <Title level={3}>React源码实现</Title>
                <Collapse ghost>
                    <Panel header="render" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{_render}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="virtualize" key="2">
                        <Space direction="vertical">
                            <Highlight language="javascript">{virtualize}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="useState" key="3">
                        <Space direction="vertical">
                            <Highlight language="javascript">{_useState}</Highlight>
                        </Space>
                    </Panel>

                    <Panel header="memo" key="4">
                        <Space direction="vertical">
                            <Highlight language="javascript">{_memo}</Highlight>
                        </Space>
                    </Panel>
                    <Panel header="usememo" key="6">
                        <Space direction="vertical">
                            <Highlight language="javascript">{_memo}</Highlight>
                        </Space>
                    </Panel>

                    <Panel header="createContext" key="5">
                        <Space direction="vertical">
                            <Highlight language="javascript">{createContext}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                {/* <Table {..._props} dataSource={map} /> */}
            </Wrap>
        </>
    )
}

export default Framework

