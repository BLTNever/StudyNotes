import { ReactNode } from 'react'

export interface EleProps {
  name: string // 控件的字段名
  label?: string // 控件名
  initialValue?: any // 控件的初始值
  rules?: [] // 控件的校验规则
  required?: boolean // 控件是否必填
  tooltip?: string // 控件是否需要tooltip提示
  dependencies?: (string | number)[]
  shouldUpdate?: any
  widget?: any // 控件
  formItemProps?: any // 控件单独的样式，自定义
  isButton?: boolean // 控件是否为按钮  无视参数
  type?: string // 组件类型
  valueEnums?: { value: number | string; label: string }[] // 下拉框的枚举值
  fieldOptions?: any // 组件的一些配置
}

export interface IProps {
  elements: EleProps[]
  gutter?: number // 多个 columns 时，gutter 为行之间的间距
  colon?: boolean // 标签前是否显示冒号
  leftElement?: ReactNode | string // 表单操作按钮左侧的内容
  callbackHandler?: (string, any) => void // 点击查询获取所有表单项值的回调
  formOptions?: any // 原生Form表单的配置信息
  notSearchForm?: boolean // 设置表单是否为查询表单，类型（查询表单|新增编辑等录入表单）
  // responsed?: boolean //  是否为响应式的表单结构
  defaultValues?: any // 外部默认值
}
