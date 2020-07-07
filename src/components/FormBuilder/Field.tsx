import React from 'react'
import { Select, Input, DatePicker, Radio } from 'antd'

const { RangePicker } = DatePicker
const { TextArea } = Input

export const SELECT = (options, dataSource) => {
  const { label, ...rest } = options
  return (
    <Select allowClear placeholder={`请选择${label}`} {...rest}>
      {dataSource &&
        dataSource.map((val, key) => {
          const optKey = val.key ?? val.value ?? key
          return (
            <Select.Option key={optKey} value={val.value}>
              {val.label}
            </Select.Option>
          )
        })}
    </Select>
  )
}

export const INPUT = (options) => {
  const { label, ...rest } = options
  return <Input placeholder={`请输入${label}`} allowClear {...rest} />
}

export const TEXTAREA = (options) => {
  const { label, ...rest } = options
  return <TextArea placeholder={`请输入${label}`} allowClear autoSize={{ minRows: 2 }} {...rest} />
}

export const RANGE_PICKER = (options) => {
  return <RangePicker allowClear style={{ width: '100%' }} {...options} />
}

export const DATE_PICKER = (options) => {
  return <DatePicker style={{ width: '100%' }} {...options} />
}

export const RADIO = (options, dataSource) => {
  return (
    <Radio.Group {...options}>
      {dataSource &&
        dataSource.map((val, key) => {
          const optKey = val.key ?? val.value ?? key
          return (
            <Radio value={optKey} key={optKey}>
              {val.label}
            </Radio>
          )
        })}
    </Radio.Group>
  )
}
