import React, { useState, useEffect, useRef, forwardRef } from 'react'
import { Select } from 'antd'
import { debounce } from 'lodash'
import { apiList } from '@config/api'
import ypRider from '@utils/ypRequest'

const { Option } = Select
function useSearch(search: string, defaultitem: any) {
    const debounceRef = useRef<any>()
    const [brandList, setBrand] = useState<any>([])
    useEffect(() => {
        // if (defaultitem && !Object.keys(defaultitem).length) setBrand([])
        // else setBrand([defaultitem])
        if(defaultitem && Object.keys(defaultitem).length && !search.length) {
            setBrand([defaultitem])
        }
    }, [defaultitem])
    useEffect(() => {
        if (debounceRef.current) {
            if (search) {
                debounceRef.current(search)
            }
        } else {
            debounceRef.current = debounce(async (search: string) => {
                const url = apiList.fuzzyQueryBrandByName
                const params = { brandName: search }
                try {
                    const res: any = await ypRider(url, params)
                    const { result, success } = res
                    if (success) {
                        setBrand(result)
                    }
                } catch (err) {
                    console.log(err)
                }
            }, 300)
        }
    }, [search])

    return [brandList, setBrand]
}

const BrandSearch = forwardRef((props: any, ref: any) => {
    const [search, setSearch] = useState('')
    const [brandList] = useSearch(search, props.defaultitem)
    return (
        <Select
            allowClear
            defaultActiveFirstOption={false}
            filterOption={false}
            showSearch
            onSearch={val => setSearch(val)}
            {...props}
        >
            {brandList?.length > 0 && brandList.map((item: any) => (
                <Option key={item?.brandId} value={item?.brandId || undefined}>
                    {item?.brandName}
                </Option>
            ))}
        </Select>
    )
})
export default BrandSearch