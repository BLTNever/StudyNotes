/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, memo, useEffect } from 'react'
import { Table, Alert, Spin } from 'antd'
import ypRider from '@utils/ypRequest'
import './index.less'
import { IProps } from './interface'

const CommonTable: React.FC<IProps> = (props) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const [tableParams, setTableParams] = useState({
        dataSource: [],
        loading: false,
        total: 0,
        current: 1,
        pageSize: 10,
        order: {},
        isEnd: false,
        filters: {},
        sorters: {}
    })

    /**
     * values 外部查询调用传参
     * pageParams 分页等查询参数
     */
    const sendRequest = async () => {
        setTableParams((v) => ({ ...v, loading: true }))

        const { current, pageSize, isEnd } = tableParams
        const pageNo = isEnd ? 1 : current

        const params = {
            ...props.searchParams,
            page: pageNo,
            size: pageSize
        }

        try {
            const result: any = await ypRider(props.queryDataUrl, params)
            const { isEnd, total = 0, list = [] } = result.result

            setTableParams((v) => ({
                ...v,
                dataSource: list,
                total,
                isEnd
            }))
            setSelectedRowKeys([])
        } catch (error) {
            console.log('request error ==>', error)
        } finally {
            setTableParams((v) => ({ ...v, loading: false }))
        }
    }

    // 表格事件操作
    const changeTable = (pagination: any, filters: any, sorters: any) => {
        const { current, pageSize } = pagination
        const { column } = sorters
        // 防止没有排序的列发生请求
        if (sorters.column && !column.sorter) {
            return
        }

        setTableParams((v) => ({ ...v, current, pageSize, filters, sorters }))

        // 排序的回调
        if (props.sortCallback) {
            props.sortCallback(filters, sorters)
        }
        // 页面切换后，清空选中项
        setSelectedRowKeys([])
        if (props.rowSelectCallback) {
            props.rowSelectCallback([], [])
        }
    }

    useEffect(() => {
        sendRequest()
    }, [tableParams.current, tableParams.pageSize, props.searchParams])

    const selection = {
        selectedRowKeys: selectedRowKeys,
        onChange: (selectedRowKeys: any, selectedRows: any) => {
            setSelectedRowKeys(selectedRowKeys)

            if (props.rowSelectCallback) {
                props.rowSelectCallback(selectedRowKeys, selectedRows)
            }
        }
    }
    const rowSelection = props.rowSelectCallback ? selection : undefined

    const pagination = {
        total: tableParams.total,
        current: tableParams.current,
        pageSize: tableParams.pageSize,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ['10', '25', '50', '100'],
        showTotal: (total: number, range: any) => {
            if (props.paginationElement) {
                return <div className='paginationElement'>{props.paginationElement(total, range)}</div>
            }
            return null
        }
    }

    // const msg = props.alertMsg ? props.alertMsg : `共有${tableParams.total}条数据`
    return (
        <Spin spinning={tableParams.loading} wrapperClassName='commonTable'>
            {props.showAlert && (
                <Alert
                    message={`共有${tableParams.total}条数据`}
                    type='warning'
                    showIcon
                    key='alert'
                    className='table-alert'
                />
            )}
            <Table
                columns={props.columns}
                dataSource={tableParams.dataSource}
                rowKey={(key, record: any) => (record.id ? record.id : key)}
                rowSelection={rowSelection}
                pagination={pagination}
                onChange={changeTable}
                key='table'
                size='small'
                {...props.tableOptions}
            />
        </Spin>
    )
}

export default memo(CommonTable)
