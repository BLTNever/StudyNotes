import React, { useState, useMemo, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Table, Tabs } from 'antd'

import {
    columns, dataReact, dataRedux, dataNative, dataJs, dataDom,
    dataOptimize, dataModule, dataWebpack, dataBase, dataAlgo,
    dataProgram,
} from './recordConfig'
// import useResize from '@hooks/useResize'

const { TabPane } = Tabs

const Record = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [key, setKey] = useState<string>('dataReact')
    const tabs = [
        { tab: 'React', key: 'dataReact', data: dataReact },
        { tab: 'Redux', key: 'dataRedux', data: dataRedux },
        { tab: 'Js', key: 'dataJs', data: dataJs },
        { tab: 'Dom & 浏览器', key: 'dataDom', data: dataDom },
        { tab: '优化', key: 'dataOptimize', data: dataOptimize },
        { tab: '模块化', key: 'dataModule', data: dataModule },
        { tab: 'webpack', key: 'dataWebpack', data: dataWebpack },
        { tab: '算法', key: 'dataAlgo', data: dataAlgo },
        { tab: '编程', key: 'dataProgram', data: dataProgram },
        { tab: '基础', key: 'dataBase', data: dataBase },
        { tab: 'Native', key: 'dataNative', data: dataNative },
    ]
    // const ele = document.querySelector('#content-body')
    // const size = useResize(ele)
    // const tableEle: HTMLElement | null = document.getElementById('tablePart')
    // const calculateFn = () => {
    //     const clientHeight = size?.height || document.body.clientHeight
    //     if (tableEle) {
    //         const top = tableEle?.getBoundingClientRect().top || 0

    //         const scrollY = clientHeight - top
    //         return scrollY
    //     }
    // }
    const onChange = (key: string) => {
        setKey(key)
        navigate(`#${key}`)
    }
    const _props: any = {
        pagination: false,
        columns: columns,
        bordered: false,
        sticky: true,
        rowKey: 'Q',
        scroll: {
            x: 1500,
            y: 689
            // y: calculateFn()
        },
        expandable: {
            expandedRowRender: (record: any) => <div>{record.description}</div>,
            rowExpandable: (record: any) => record.description,
        }
    }
    const renderTabs = useMemo(() => {
        if (!tabs?.length) return null
        return (
            tabs.map((item: any, index: number) => (
                <TabPane tab={<span>{item.tab}</span>} key={item.key} disabled={item.disabled}>
                    <Table {..._props} dataSource={item.data} />
                </TabPane>
            ))
        )
    }, [tabs])

    useEffect(() => {
        const { hash } = location
        if (hash.length) {
            const k = hash.slice(1)
            setKey(k)
        }
    }, [])
    return (
        <Tabs activeKey={key} onChange={onChange}>
            {renderTabs}
        </Tabs>
    )
}

export default Record


function convert(list: any[]) {
    let map: any = {}
    let tree = []
    for (let node of list) {
        map[node.id] = node
        map[node.id].children = []
        if (!node.parentId) {
            tree.push(node)
        } else {
            if (node.parentId in map) {
                map[node.parentId].children.push(node)
            } else {
                map.id = node.parentId
                map.children = []
            }
        }
    }
    return tree
}

try {
    const arr = [
        { id: 1 },
        { id: 7 },
        { id: 2, parentId: 1 },
        { id: 3, parentId: 1 },
        { id: 4, parentId: 2 },
        { id: 5, parentId: 3 },
        { id: 6, parentId: 3 },
    ]
    console.log(convert(arr))
} catch (error) { console.log(error) }
