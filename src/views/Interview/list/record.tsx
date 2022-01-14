import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Table, Collapse, Typography, PageHeader, Space, Tag } from 'antd'

import { dataSource, columns } from './recordConfig'


const Interview6 = () => {

    const _props: any = {
        pagination: false,
        dataSource: dataSource,
        columns: columns,
        bordered: false,
        rowKey: 'Q',
        scroll: { x: 1500, },
        expandable: {
            expandedRowRender: (record: any) => <div>{record.description}</div>,
            rowExpandable: (record: any) => record.description,
        }
    }
    return (
        <Table {..._props} />
    )
}

export default Interview6


