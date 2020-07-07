## Antd 的通用 table 组件

```ts
const columns = [
  {
    title: '货主',
    dataIndex: 'name',
    key: 'name',
    width: 120,
    filters: [
      { text: 'Joe', value: 'Joe' },
      { text: 'Jim', value: 'Jim' }
    ],
    filteredValue: filteredInfo.name || null,
    onFilter: (value, record) => record.name.includes(value),
    sorter: (a, b) => a.name.length - b.name.length,
    sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    ellipsis: true
  },
  {
    title: '制单人',
    dataIndex: 'okoo',
    key: 'okoo',
    width: 100,
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'ji',
    key: 'ji',
    width: 160,
    ellipsis: true
  }
]

const sortCallback = useCallback((filters, sorters) => {
  console.log(filters, sorters)
}, [])
const rowSelectCallback = useCallback((keys, rows) => {
  console.log(keys, rows)
}, [])
const paginationElement = (total, range) => {
  console.log(total, range)
}

;<CommonTable
  columns={columns}
  queryDataUrl='settlement.sheet.querySettlementSheets'
  canSelect={true}
  showAlert={true}
  alertMsg='haha'
  rowSelectCallback={rowSelectCallback}
  searchParams={} // 表格搜索的参数，修改此参数表格重新发送请求更新
  sortCallback={sortCallback}
  paginationElement={paginationElement}
  tableOptions={{
    // antd的table组件原生配置项
    scroll: { x: 1400 }
  }}
/>

export interface IProps {
  columns: any[] // 列表的表头项
  queryDataUrl: string // 请求的url
  sortCallback?: (arg0: any, arg1: any) => void // 筛选的回调
  showAlert?: boolean // 是否展示alert
  rowSelectCallback?: (arg0: any[], arg1: any[]) => void | undefined // 列表选择的回调
  alertMsg?: string // 自定义alert的文案配置
  paginationElement?: (arg0: any, arg1: any) => ReactNode | string // 分页左侧内容
  searchParams?: any // 表格搜索的参数
  tableOptions?: any // antd的table组件原生配置项
}
```
