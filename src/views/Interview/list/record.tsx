import React, { useState, useMemo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Table, Tabs } from 'antd'

import {
    columns, dataReact, dataRedux, dataNative, dataJs, dataDom,
    dataOptimize, dataModule, dataWebpack, dataBase, dataAlgo,
    dataProgram,
} from './recordConfig'
// import useResize from '@hooks/useResize'

const { TabPane } = Tabs

const Record = () => {
    const history = useHistory()
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
        history.push(`#${key}`)
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
        const { location: { hash } } = history

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


// eslint-disable-next-line no-extend-native
// Function.prototype.call = function (_context: Window, ...args: any) {
//     if (typeof this !== 'function') throw new Error('not function')
//     let obj = _context
//     obj.fn = this
//     const res = obj.fn(...args)
//     delete obj.fn
//     return res
// }

// // eslint-disable-next-line no-extend-native
// Function.prototype.apply = function (_context: Window, ...args: any) {
//     if (typeof this !== 'function') throw new Error('not function')
//     let obj = _context
//     obj.fn = this
//     const res = obj.fn(args)
//     delete obj.fn
//     return res
// }