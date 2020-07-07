import { ReactNode } from 'react'

export interface IProps {
  columns: any[] // 列表的表头项
  queryDataUrl: string // 请求的url
  sortCallback?: (arg0: any, arg1: any) => void // 筛选的回调
  showAlert?: boolean // 是否展示alert
  rowSelectCallback?: (arg0: any[], arg1: any[]) => void | undefined // 列表选择的回调
  paginationElement?: (arg0: any, arg1: any) => ReactNode | string // 分页左侧内容
  searchParams?: any // 表格搜索的参数
  tableOptions?: any // antd的table组件原生配置项
}
