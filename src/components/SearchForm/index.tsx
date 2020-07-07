import React, { useEffect, useState, memo, ReactText } from 'react';
import { Row, Col, Button, DatePicker, Select, Input, InputNumber, Form } from 'antd'
import { IformItem } from '@typings/iform'
import { SearchOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker

const colLayout = {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 22,
    xs: 24
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const layout1 = {
    labelCol: {
        md: 4,
        sm: 8
    },
    wrapperCol: {
        md: 20,
        sm: 16
    }
}


const renderComponent = (propsInfo: IformItem) => {
    const { type, labelName, fieldName, required = false } = propsInfo
    let placeholderText = ''
    const rules = [{ required, message: `${labelName}不能为空` }]
    if (type === 'INPUT') {
        placeholderText = `请输入${labelName}`
        return (
            <Col {...colLayout} key={fieldName}>
                <Form.Item label={labelName} name={fieldName} required={required} rules={rules}>
                    <Input placeholder={placeholderText} allowClear />
                </Form.Item>
            </Col>
        )
    } else if (type === 'SELECT') {
        placeholderText = `请选择${labelName}`
        const { valueEnums = [], required = false } = propsInfo
        return (
            <Col {...colLayout} key={fieldName}>
                <Form.Item label={labelName} name={fieldName} required={required} rules={rules}>
                    <Select placeholder={placeholderText} allowClear>
                        {valueEnums.map(option => {
                            return <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
                        })}
                    </Select>
                </Form.Item>
            </Col>
        )
    } else if (type === 'RANGE_PICKER') {
        placeholderText = `请选择${labelName}`
        return (
            <Col {...{ ...colLayout, xl: 12, lg: 16, md: 24 }} key='fieldName'>
                <Form.Item label={labelName} name={fieldName} {...layout1} required={required} rules={rules}>
                    <RangePicker allowClear style={{ width: '100%' }} />
                </Form.Item>
            </Col>
        )
    }
}

const SearchForm = (props: { doSubmit: (arg0: any) => void; formJson: Array<IformItem> }) => {
    const [components, setComponents] = useState<Array<React.ComponentState>>([])
    const [form] = Form.useForm()

    const handleClear = () => {
        form.resetFields()
    }

    const handleQuery = (values: any) => {
        props.doSubmit(values)
    }

    useEffect(() => {
        if (props.formJson && props.formJson.length > 0) {
            const cps = props.formJson.map((each) => {
                return renderComponent(each)
            })
            cps.push(
                <Col {...colLayout} key='buttonbox'>
                    <Form.Item {...tailLayout}>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <Button type="primary" icon={<SearchOutlined />} htmlType='submit'>查询</Button>
                            <Button style={{ marginLeft: 15 }} onClick={handleClear}>重置</Button>
                        </div>
                    </Form.Item>
                </Col>
            )
            setComponents(cps)
        } else {
            setComponents([])
        }
    }, [props.formJson])

    return (
        <Form {...layout} form={form} onFinish={handleQuery} style={{ padding: '20px 20px 0 20px', borderRadius: '10px', backgroundColor: '#FFFFFF' }}>
            <Row gutter={24}>
                {components}
            </Row>
        </Form>
    );
}

export default memo(SearchForm)
