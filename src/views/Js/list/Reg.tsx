import React, { useState, useMemo, useEffect } from 'react'
import { Table } from 'antd'


const columns = [
    { title: "KEY", dataIndex: "K", width: 120, fixed: 'left', },
    Table.EXPAND_COLUMN,
    { title: "DESC", dataIndex: "describe", },
    Table.SELECTION_COLUMN
]

const dataSource = [
    { K: '^', describe: '匹配输入字符串的开始位置，在方括号表达式中使用时，表示不接受该方括号表达式中的字符集合' },
    { K: '$', describe: '匹配输入字符串的结尾位置' },
    { K: '*', describe: '匹配前面的子表达式零次或多次' },
    { K: '+', describe: '匹配前面的子表达式一次或多次' },
    { K: '?', describe: '匹配前面的子表达式零次或一次' },
    { K: '|', describe: '指明两项之间的一个选择' },
    { K: '.', describe: '匹配除换行符 \n 之外的任何单字符' },
    { K: '\\', describe: '将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符' },
]
const Reg = () => {

    const _props: any = {
        pagination: false,
        columns: columns,
        bordered: false,
        rowKey: 'Key',
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



    return (
        <Table {..._props} dataSource={dataSource} />
    )
}

export default Reg


