import React, { useEffect, useState, memo } from 'react';
import { Button, Table, message, Spin } from 'antd'
import { FileAddOutlined } from '@ant-design/icons';

message.config({ top: 100 })
const pageSizeOptions = [
    '10', '20', '30', '40', '50', '100',
]
const MyList = (
    props: {
        dataSource: any; page?: any; handlePage?: any; add?: any; columns?: any; rowKey?: any; loading?: any; multiSelect?: any;
    }
) => {
    const [tableData, setTableData] = useState({})
    const [selectedRowKeys, setSelectedRowKeys] = useState([])

    const onSelectChange = (rowKeys: React.SetStateAction<never[]>) => {
        setSelectedRowKeys(rowKeys);
    };

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

    const onPageChange = (current: any, pageSize: any) => {
        props.handlePage({ ...props.page, current, pageSize })
    }

    const onShowSizeChange = (_current: any, pgsize: any) => {
        props.handlePage({ ...props.page, page: 1, pageSize: pgsize })
    }

    return (
        <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#FFFFFF', marginTop: 20 }}>
            <div style={{ marginBottom: 20 }}>
                <Button type="primary" icon={<FileAddOutlined />} onClick={props.add}>新增</Button>
            </div>
            <Spin spinning={props.loading}>
                <Table {...tableData} bordered
                    pagination={{
                        showQuickJumper: true,
                        current: props.page.current,
                        total: props.page.total,
                        pageSize: props.page.pageSize,
                        // showTotal: showTotal,
                        onChange: onPageChange,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        pageSizeOptions: pageSizeOptions,
                    }}
                />
            </Spin>
        </div>
    )
}

export default memo(MyList)