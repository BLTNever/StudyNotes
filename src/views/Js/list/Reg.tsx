import React, { useState, useMemo, useEffect } from 'react'
import { Table } from 'antd'


const columns = [
    { title: "KEY", dataIndex: "K", width: 120, fixed: 'left', },
    Table.EXPAND_COLUMN,
    { title: "DESC", dataIndex: "describe", },
]

const dataSource = [
    { K: '^', describe: '匹配输入字符串的开始位置,在方括号表达式中使用时,表示不接受该方括号表达式中的字符集合' },
    { K: '$', describe: '匹配输入字符串的结尾位置' },
    { K: '*', describe: '匹配前面的子表达式零次或多次' },
    { K: '+', describe: '匹配前面的子表达式一次或多次' },
    { K: '?', describe: '匹配前面的子表达式零次或一次' },
    { K: '|', describe: '指明两项之间的一个选择' },
    { K: '.', describe: '匹配除换行符 \\n 之外的任何单字符' },
    { K: '\\', describe: '将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符' },
    { K: '[ABC]', describe: '匹配 [...] 中的所有字符,例如 [aeiou] 匹配字符串 "google runoob taobao" 中所有的 e o u a 字母' },
    { K: '[^ABC]', describe: '匹配 [...] 中的所有字符,例如 [aeiou] 匹配字符串 "google runoob taobao" 中除了 e o u a 字母的所有字母' },
    { K: '[A-Z]', describe: '[A-Z] 表示一个区间,匹配所有大写字母,[a-z] 表示所有小写字母' },
    { K: '[\\s\\S]', describe: '匹配所有。\\s 是匹配所有空白符,包括换行,\\S 非空白符,不包括换行' },
    { K: '\\w', describe: '匹配所有。\\s 是匹配所有空白符,包括换行,\\S 非空白符,不包括换行' },
]
const Reg = () => {
    const _props: any = {
        pagination: false,
        columns: columns,
        bordered: false,
        rowKey: 'K',
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


