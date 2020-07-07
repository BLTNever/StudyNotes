import React, { useEffect, useState, memo } from 'react';
import { Button, Table, message } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'
import './index.less'
message.config({ top: 100 })
const wrappedTable = (
    props: {
        dataSource: any; page?: any; handlePage?: any; add?: any;
        columns?: any; rowKey?: any; multiSelect?: any; total?: any
        scroll?: any
    }
) => {
    const [tableData, setTableData] = useState<any>({})
    const [selectedRowKeys, setSelectedRowKeys] = useState([])

    const onSelectChange = (rowKeys: React.SetStateAction<never[]>) => {
        setSelectedRowKeys(rowKeys)
    }

    useEffect(() => {
        const { dataSource = [], columns = [], rowKey, multiSelect } = props
        let params: any
        params = {
            dataSource,
            columns,
            rowKey
        }
        if (multiSelect) {
            const rowSelection = {
                selectedRowKeys,
                onChange: onSelectChange
            }
            params['rowSelection'] = rowSelection
        }
        setTableData(params)
    }, [props.dataSource, selectedRowKeys, props.page])

    const showTotal = (totalCount: any) => `共${totalCount}条数据`

    const onPageChange = (page: any, size: any) => {
        props.handlePage({ ...props.page, page, size })
    }

    const onShowSizeChange = (_page: any, size: any) => {
        props.handlePage({ ...props.page, page: 1, size })
    }

    return (
        <div className="wrapped-table">
            <div className="info-wrap">
                <div className="unusual">
                    <ExclamationCircleFilled style={{ color: '#1890ff', marginRight: '10px' }} />
                    数据总计：&nbsp;{props.page.total ? props.page.total : 0}条数据
                </div>
            </div>
            <Table {...tableData} bordered
                scroll={props.scroll}
                pagination={{
                    showQuickJumper: true,
                    current: props.page.page,
                    total: props.page.total,
                    pageSize: props.page.size,
                    showTotal: showTotal,
                    onChange: onPageChange,
                    showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange
                }} />
        </div>
    )
}

export default memo(wrappedTable)