import React, { useEffect, useState, memo, useRef, ReactNode } from 'react';
import { apiList } from '@config/api';
import ypRider from '@utils/ypRequest'
import {
    Form, Row, Col, Button, DatePicker, Select, Input, InputNumber, message
} from 'antd';
import { IformItem2 } from '@typings/iform'
import { useEventListener } from './hooks'
// import styles from './index.module.less'
import Session from '@utils/session'
import { BrandSearch } from '@components/SelectSearch'
import './index.less'
const Option = Select.Option

export interface ArrayOption {
    categoryId: string
    categoryName: string
    parentCategoryId: string
    deptLevelId: number
}
const SearchForm = (
    props: {
        handleSearch: (arg0: any) => void;
        resetSearch: (arg0: any) => void;
        formJson: Array<IformItem2>;
        needStorage?: Boolean;
        formType?: string;
    }
) => {
    const [formParams, setFormParams] = useState<any>({})
    const [categoryId, setCategoryId] = useState<string | undefined>(undefined)
    const [categoryIds, setCategoryIds] = useState<{}>({ 1: undefined, 2: undefined, 3: undefined, 4: undefined })
    const [goodsBrand, setGoodsBrand] = useState([{ id: '1', name: '品牌1' }])
    const [categoryList1, setCategoryList1] = useState([])
    const [categoryList2, setCategoryList2] = useState([])
    const [categoryList3, setCategoryList3] = useState([])
    const [categoryList4, setCategoryList4] = useState([])

    const categoryFunc = async (type: number, e: string) => {
        const value = e;
        setCategoryId(value)
        const newIds = { ...categoryIds }
        newIds[type] = value
        setCategoryIds(newIds)
        if (type === 1) {
            // 第一级改变给第二级赋值，清空3，4级
            setCategoryList2([]);
            setCategoryList3([]);
            setCategoryList4([]);

            getCategory(2, value);
        } else if (type === 2) {
            // 第2级改变给第3级赋值，清空4级
            setCategoryList3([]);
            setCategoryList4([]);
            getCategory(3, value)
        } else if (type === 3) {
            setCategoryList4([]);
            getCategory(4, value)
            // 第3级改变给第4级赋值
        } else if (type === 4) {
            // 第4级
        }
    }
    const getCategory = async (type: number, id: string | null) => {
        const url = apiList.category
        const dataVal = { categoryId: id ? parseInt(id, 10) : null }
        try {
            const { result }: any = await ypRider(url, dataVal)
            if (result) {
                switch (type) {
                    case 1:
                        setCategoryList1(result)
                        break
                    case 2:
                        setCategoryList2(result)
                        break
                    case 3:
                        setCategoryList3(result)
                        break
                    case 4:
                        setCategoryList4(result)
                        break
                    default:
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    const renderCategory = (list: Array<ArrayOption>, placeholder: string, level: number) => {
        if (!list || !list.length) return

        return (
            <div className="categoryItem">
                <Select value={categoryIds[level]} onChange={(e: string) => categoryFunc(level, e)} placeholder={placeholder}>
                    {list.map((item) => <Option value={item.categoryId} key={item.categoryId}>{item.categoryName}</Option>)}
                </Select>
            </div>
        )
    }
    const renderItem = (item: any, child: ReactNode) => {
        const { label, field } = item;
        return (
            <Col span={6} key={field}>
                <Row className="rowItem">
                    <Col span={8} className="itemLabel">{label}</Col>
                    <Col span={16} className="itemValue">{child}</Col>
                </Row>
            </Col>
        )
    }
    const initForm = () => {
        let formItemList: Array<ReactNode> = [];
        const { formJson } = props;
        if (formJson && formJson.length) {
            formJson.forEach((item: any, i) => {
                const { type, label, field, initialValue, placeholder } = item;
                if (item.type === 'COMMON_INPUT') {
                    const child = <Input type="text"
                        placeholder={placeholder}
                        value={formParams && formParams[field] ? formParams[field] : null}
                        onChange={(e) => onChange(e, field)}
                    />;
                    const NODE = renderItem(item, child)
                    formItemList.push(NODE)
                } else if (item.type === 'COMMON_INPUT_NUMBER') {
                    const child = <InputNumber
                        placeholder={placeholder}
                        value={formParams && formParams[field] ? formParams[field] : null}
                        onChange={(e) => onChange(e, field)}
                    />
                    const NODE = renderItem(item, child)
                    formItemList.push(NODE)
                } else if (item.type === 'COMMON_INPUT_NUMBER_CODE') {
                    const child = <InputNumber
                        placeholder={placeholder}
                        value={formParams && formParams[field] ? formParams[field] : null}
                        onChange={(e) => onChange(e, field)}
                    />
                    const NODE = renderItem(item, child)
                    formItemList.push(NODE)
                } else if (item.type === 'COMMON_TYPE_SELECT') {
                    const child = <Select
                        // showSearch
                        value={formParams && formParams[field] ? formParams[field] : (initialValue ?? undefined)}
                        placeholder={placeholder}
                        optionFilterProp="children"
                        filterOption={(input: any, option: any) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        onChange={(e) => onChange(e, field)}
                    >
                        {item.list.map((i: any) => {
                            return <Option value={i.value} key={i.value}>{i.name}</Option>
                        })}
                    </Select>
                    const NODE = renderItem(item, child)
                    formItemList.push(NODE)
                } else if (item.type === 'GOODS_BRAND') {
                    const child = <BrandSearch placeholder={placeholder}
                        value={formParams && formParams[field] ? formParams[field] : (initialValue?.length ? initialValue : undefined)}
                        onChange={(e: string) => onChange(e, field)}
                    />
                    const NODE = renderItem(item, child)
                    formItemList.push(NODE)
                } else if (item.type === 'COMMON_GOODS_SORT') {
                    const NODE = <Col span={24} key={field}>
                        <Row className="rowItem">
                            <Col span={2} className="itemLabel">{label}</Col>
                            <Col span={22} className="itemValue">
                                {renderCategory(categoryList1, item.placeholder, 1)}
                                {renderCategory(categoryList2, item.placeholder, 2)}
                                {renderCategory(categoryList3, item.placeholder, 3)}
                                {renderCategory(categoryList4, item.placeholder, 4)}
                            </Col>
                        </Row></Col>

                    formItemList.push(NODE)
                }
            })
        }
        return formItemList;
    }

    const onChange = (e: any, field: string, validateMsg?: string, type?: string) => {
        const value = e && e.target ? e.target.value : e
        if (validateMsg && !value) {
            message.info(validateMsg)
            return false
        }
        let obj = { ...formParams }
        obj[field] = value
        setFormParams(obj)
    }
    const handleSubmit = (e: any) => {
        e && e.preventDefault();
        const { formType } = props;
        let values = { ...formParams }
        if (formType === 'hascategory') {
            values['categoryId'] = categoryId
        }

        if (props.needStorage) {
            Session.set('searchStorage', values)
        }
        props.handleSearch(values)
    }

    const reset = () => {
        const fieldsValue = { ...formParams }
        setCategoryId(undefined)
        setCategoryIds({ 1: undefined, 2: undefined, 3: undefined, 4: undefined })
        setCategoryList2([])
        setCategoryList3([])
        setCategoryList4([])
        for (let i in fieldsValue) {
            fieldsValue[i] = null
        }
        if (props.needStorage) {
            Session.set('searchStorage', '{}')
        }
        setFormParams(fieldsValue)
        props.resetSearch(fieldsValue)
    }
    useEffect(() => {
        if (props?.formType === 'hascategory') {
            getCategory(1, null)
        }
    }, [props.formType])
    useEffect(() => {
        if (props?.needStorage && Session.get('searchStorage') !== '{}') {
            setFormParams(JSON.parse(Session.get('searchStorage')))
        }
    }, [props.needStorage])
    useEventListener('keyup', handleSubmit)
    return (
        <div id="serachFrom">
            <Row>
                {initForm()}
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <Button onClick={reset} style={{ marginRight: '25px' }}>重置</Button>
                <Button type="primary" id="search-btn" onClick={handleSubmit} htmlType="submit">查询</Button>
            </Row>
        </div >

    )
}

export default memo(SearchForm)
