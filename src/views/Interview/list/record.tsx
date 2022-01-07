import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Table, Collapse, Typography, PageHeader, Space, Tag } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import { dataSource, columns } from './recordConfig'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography

const Interview6 = () => {

    const _props: any = {
        pagination: false,
        dataSource: dataSource,
        columns: columns,
        bordered: false,
        rowKey: 'Q',
        scroll: { x: 1500, },
        expandable: {
            expandedRowRender: (record: any) => <p style={{ margin: 0 }}>{record.description}</p>,
            rowExpandable: (record: any) => record.description,
        }
    }
    return (
        <Table {..._props} />
    )
}

export default Interview6


