import React, { useState, useEffect } from 'react'
import { Select, Radio } from 'antd'

const { Option } = Select

interface IList {
    value: string | number
    name: string
}
interface ISupply {
    supplierCode: string
    supplierName: string
}
interface IMerchant {
    merchantId: string
    merchantName: string
}
const renderOptions = (list: IList[]) => {
    if (!list?.length) return false
    return list.map(item => <Option value={item.value} key={item.value}>{item.name}</Option>)
}
const renderSupplyOptions = (list: ISupply[]) => {
    if (!list?.length) return false
    return list.map(item => <Option value={item.supplierCode} key={item.supplierCode}>{item.supplierName}</Option>)
}
const renderMerchantOptions = (list: IMerchant[]) => {
    if (!list?.length) return false
    return list.map(item => <Option value={item.merchantId} key={item.merchantId}>{item.merchantName}</Option>)
}
const renderRadioGroup = (list: IList[]) => {
    if (!list.length) return false
    return list.map(item => <Radio value={item.value} key={item.value}>{item.name}</Radio>)
}

export { renderOptions, renderMerchantOptions, renderRadioGroup, renderSupplyOptions }