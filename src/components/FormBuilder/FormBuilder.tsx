/**
 * 通用表单组件
 */
import React, { useMemo, useRef } from 'react'
import { Row, Col, Form, Tooltip, Button } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import * as Fields from './Field'
import {
  defaultFormItemLayout,
  normalColLayout,
  rangeColLayout,
  rangeFormLayout,
  fullColLayout,
  twoColsMap
} from './constance'
import { IProps, EleProps } from './interface'
import styles from './index.module.less'

const { Item: FormItem } = Form

/**
 * @func pickProps - 遍历相关部件的 props，（我们不应把 element 的 props 都传入每个部件，只需要传对应需要的 props!）
 * @param {Object} source - 每个 element 对象
 * @param {Array} props
 */
function pickProps(source, props) {
  const target = {}
  props.forEach((prop) => {
    if (prop in source) target[prop] = source[prop]
  })
  return target
}

const FormBuilder = (props: IProps, ref) => {
  const [form] = Form.useForm()

  // 表单验证完成
  const onFinish = (values) => {
    console.log('Success:', values)
    if (props.callbackHandler) {
      props.callbackHandler('success', values)
    }
  }
  // 表单验证失败
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
    if (props.callbackHandler) {
      props.callbackHandler('error', errorInfo)
    }
  }

  const resetField = () => {
    form.resetFields()
  }

  // 表单排布，栅格布局渲染
  const renderLayout = (elements) => {
    const colElements = elements.map((ele, key) => {
      const { name, fieldtype, isbutton } = ele.props

      // 如果当前表单项是时间区间选择，设置特定的样式，按钮设置为占据一行
      const colLayout =
        isbutton === 'true'
          ? fullColLayout
          : twoColsMap[fieldtype]
          ? rangeColLayout
          : normalColLayout

      return (
        <Col key={name + key} {...colLayout}>
          {ele}
        </Col>
      )
    })

    return <Row gutter={24}>{colElements}</Row>
  }

  //  渲染表单项
  const renderElement = (element) => {
    // Handle form item props
    const label = element.tooltip ? (
      <span>
        {element.label}
        <Tooltip title={element.tooltip}>
          <QuestionCircleOutlined />
        </Tooltip>
      </span>
    ) : (
      element.label
    )

    // 设置校验的属性
    let rules = element.rules || []
    if (element.required) {
      rules = [
        ...rules,
        {
          required: true,
          message: `${element.label || element.key || element.id}不能为空.`
        }
      ]
    }
    const formItemProps = {
      name: element.name || element.id,
      colon: props.colon,
      label,
      dependencies: element.dependencies,
      shouldUpdate: element.shouldUpdate,
      rules,
      key: element.name || element.key,
      ...pickProps(element, [
        'help',
        'extra',
        'labelCol',
        'wrapperCol',
        'colon',
        'hasFeedback',
        'validateStatus',
        'noStyle',
        'labelAlign'
      ]),
      ...element.formItemProps
    }

    if (element.type) {
      const options = { ...element.fieldOptions, label }
      const formLayout = twoColsMap[element.type] ? rangeFormLayout : {}

      return (
        <FormItem {...formItemProps} {...formLayout} fieldtype={element.type}>
          {Fields[element.type](options, element.valueEnums)}
        </FormItem>
      )
    }

    return (
      <FormItem {...formItemProps} isbutton={(!!element.isButton).toString()}>
        {element.widget}
      </FormItem>
    )
  }

  // 获取所有表单项的初始值
  const initialValues = useMemo(() => {
    return props.elements.reduce((prev, next: any) => {
      if (!next) return prev

      return { ...prev, [next.name]: next.initialValue }
    }, {})
  }, [])

  // 定义按钮的json项
  const btns = useRef({
    isButton: true,
    name: '',
    label: '',
    key: 'btn',
    formItemProps: { labelCol: { span: 0 }, wrapperCol: { span: 24 } },
    widget: (
      <div className={styles.optionBtns}>
        <div className={styles.ellipsis}>{props.leftElement}</div>
        <Button type='primary' htmlType='submit' className={`${styles.mRight10} ${styles.mLeft16}`}>
          查询
        </Button>
        <Button onClick={resetField}>重置</Button>
      </div>
    )
  })

  // 添加按钮的操作
  const newElements: EleProps[] = useMemo(() => {
    // 如果不是 查询功能的 form 表单，则不添加「查询、重置」按钮
    if (props.notSearchForm) {
      return props.elements
    }
    return [...props.elements, btns.current]
  }, [])

  return (
    <div className={styles.formBuilder}>
      <Form
        ref={ref}
        form={form}
        initialValues={props.defaultValues || initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        {...defaultFormItemLayout}
        {...props.formOptions}
      >
        {renderLayout(newElements.map(renderElement))}
      </Form>
    </div>
  )
}

export default React.forwardRef(FormBuilder)
