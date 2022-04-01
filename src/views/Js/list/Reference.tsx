
import React, { useState, useMemo, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Tabs, Table } from 'antd'

import * as C from './referenceConfig'
const { TabPane } = Tabs

const Reference = () => {

    const history = useHistory()
    const [key, setKey] = useState<string>('Array')
    const onChange = (key: string) => {
        setKey(key)
        history.push(`#${key}`)
    }
    useEffect(() => {
        const { location: { hash } } = history
        if (hash.length) {
            const k = hash.slice(1)
            setKey(k)
        }
    }, [])
    const tabs = [
        { tab: 'Array', key: 'Array', data: C.arrayData },
        { tab: 'String', key: 'String', data: C.stringData },
        { tab: '正则', key: 'Reg', data: C.regData },
        // { tab: '运算符', key: 'Operation', data: C.operationData },
    ]
    const _props: any = {
        pagination: false,
        columns: C.columns,
        bordered: false,
        rowKey: 'K',
        scroll: { x: 1500, y: 689 },
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
    return (
        <Tabs activeKey={key} onChange={onChange}>
            {renderTabs}
        </Tabs>

    )
}
export default Reference