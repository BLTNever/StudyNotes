import React, { useEffect, useState, memo, forwardRef } from 'react';
import { Table, message } from 'antd'
import './index.less'
message.config({ top: 100 })

interface IProps {
    dataSource: any
    columns: any
    rowKey?: any
    handlePage?: any
    page?: any
    multiSelect?: any
    setRowKeys?: any
    scroll?: any
}
const simpleTable = forwardRef((
    props: IProps,
    ref: any
) => {
    const [tableData, setTableData] = useState<any>({})
    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const [selectedRows, setSelectedRows] = useState([])
    const [pagination, setPagination] = useState<any>({})


    const onSelectChange = (selectedKeys: any, selectedRows: any) => {
        setSelectedRowKeys(selectedKeys)
        setSelectedRows(selectedRows)
        props?.setRowKeys && props.setRowKeys(selectedKeys, selectedRows)
    }
    const resetSelectedKeys = () => {
        setSelectedRowKeys([])
        props?.setRowKeys && props.setRowKeys([])
    }
    const onPageChange = (page: any, size: any) => {
        props.handlePage && props.handlePage({ ...props.page, page, size })
    }
    const onShowSizeChange = (_page: any, size: any) => {
        props.handlePage && props.handlePage({ ...props.page, page: 1, size })
    }
    if (ref) { ref.current = { selectedRowKeys, selectedRows, resetSelectedKeys } }
    useEffect(() => {
        if (props.page) {
            const obj = {
                showQuickJumper: true,
                current: props.page.page,
                total: props.page.total,
                pageSize: props.page.size,
                onChange: onPageChange,
                showSizeChanger: true,
                onShowSizeChange: onShowSizeChange
            }
            setPagination(obj)
        } else {
            setPagination(false)
        }
    }, [props.page])
    useEffect(() => {
        const { multiSelect, dataSource } = props
        let params: any = {
            dataSource
        }
        if (multiSelect) {
            const rowSelection = {
                selectedRowKeys,
                onChange: onSelectChange,
                ...multiSelect
            }
            params['rowSelection'] = rowSelection
        }
        setTableData(params)

    }, [selectedRowKeys, props.dataSource])

    return (
        <div className="simple-table">
            <Table {...tableData}
                dataSource={props.dataSource}
                columns={props.columns}
                rowKey={props.rowKey ? props.rowKey : (record: any, index: number) => index + 1}
                bordered
                scroll={props.scroll}
                pagination={pagination}
            />
        </div>
    )
})

export default memo(simpleTable)