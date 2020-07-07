import React, { useState, useEffect, useCallback, useRef, memo } from 'react'
import ypRider from '../../utils/ypRequest'
import { apiList } from '@config/api'
import { Cascader } from 'antd';

interface IProps {
    setCategoryId: (e: string[]) => void
    categoryId?: []
}
const useCascader = (setCategoryId: (e: string[]) => void) => {
    const [options, setOptions] = useState<any>([])
    useEffect(() => {
        getData(null)
    }, [])

    const onChange = (value: any, selectedOptions: any) => {
        setCategoryId(value)
    };

    const loadData = (selectedOptions: any) => {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;
        setTimeout(async () => {
            targetOption.loading = false;
            targetOption.children = await getData(targetOption?.value)
            setOptions([...options])

        }, 500);
    };
    const getData = async (id: string | null) => {
        const url = apiList.category
        const params = { categoryId: id ? parseInt(id, 10) : null }
        let res = []
        try {
            const { result, success }: any = await ypRider(url, params)
            if (success) {
                res = result.map((item: any) => {
                    return {
                        value: item.categoryId,
                        label: item.categoryName,
                        isLeaf: item.deptLevelId === 4 ? true : false,
                    }
                })
                if (!id) {
                    setOptions(res)
                }
            }
        } catch (err) {
            console.log(err)
        }
        return res
    }
    return [options, loadData, onChange]

}
const MyCascader = (props: IProps) => {
    const [options, loadData, onChange] = useCascader(props.setCategoryId)
    return (
        <Cascader
            value={props.categoryId}
            options={options}
            loadData={loadData}
            onChange={onChange}
            changeOnSelect
        />
    )
}

export default MyCascader