## Antd 的 Form 响应式表单组件

#### 如何使用

定义表单项的 json 结构

```tsx
const formfields = [
  {
    label: '采购单号',
    name: 'purchaseOrderNo',
    initialValue: 123123,
    type: 'INPUT', // 展示Input组件
    fieldOptions: {}
  },
  {
    label: '品类',
    name: 'categoryName',
    initialValue: undefined,
    type: 'SELECT',
    valueEnums: [
      // Select组件下拉框的值
      { value: '', label: '全部' },
      { value: '1', label: '进行中' },
      { value: '2', label: '未发布' },
      { value: '3', label: '已失效' },
      { value: '4', label: '已结束' }
    ],
    fieldOptions: {}
  },
  {
    label: '创建时间',
    name: 'gmtCreate',
    initialValue: undefined,
    type: 'DATE_PICKER',
    fieldOptions: {}
  },
  {
    label: '下单时间',
    name: 'shenghe',
    type: 'RANGE_PICKER',
    fieldOptions: {
      // antd组件的原生api配置
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss'
    }
  },
  {
    label: '下单时间',
    name: 'shenghe',
    widget: (
      <Select placeholder='请选择'>
        <Select.Option key='123' value='123'>
          sada
        </Select.Option>
      </Select>
    )
  }
]

export default formfields
```

引用 FormBuilder

```ts
// 点击查询的回调
const searchHandler = useCallback((status, values) => {
  console.log(status, values)
}, [])

// 可通过ref 获取Form的实例
// 可在父组件（引入FormBuilder的组件）内使用antd form组件的方法
const form: any = useRef()
useEffect(() => {
  console.log(form.current?.getFieldsValue())
}, [])

<FormBuilder
	ref={form}
	elements={formfields}
	gutter={24}
	colon={true}
	callbackHandler={searchHandler}
	leftElement="hahah"
	formOptions={{layout: 'vertical'}}
  notSearchForm={true}    // false 就不是查询功能的表单(不展示查询、重置按钮)，而是新增、编辑功能
/>

// API
export interface EleProps {
  name: string // 控件的字段名
  label?: string // 控件名
  initialValue?: any // 控件的初始值
  rules?: [] // 控件的校验规则
  required?: boolean // 控件是否必填
  tooltip?: string // 控件是否需要tooltip提示
  dependencies?: (string | number)[]
  shouldUpdate?: any
  widget?: any // 可自定义传入控件
  formItemProps?: any // 控件单独的样式，自定义
  isButton?: boolean // 控件是否为按钮  无视参数
  type?: string // 组件类型
  valueEnums?: { value: string; label: string }[] // 下拉框的枚举值
  fieldOptions?: any // 组件的一些配置
}
export interface IProps {
  elements: EleProps[]  // 表单项的json
  gutter?: number // 多个 columns 时，gutter 为行之间的间距
  colon?: boolean // 标签前是否显示冒号
  leftElement?: ReactNode | string // 表单操作按钮左侧的内容
  callbackHandler?: (string, any) => void // 点击查询获取所有表单项值的回调
  formOptions?: any // 原生Form表单的配置信息
  notSearchForm?: boolean // 设置表单是否为查询表单，类型（查询表单|新增编辑等录入表单）
  defaultValues?: any // 外部默认值
}
```

#### 业务场景

1. 表单项的展示隐藏

   ```ts
   const form: any = useRef()
   const show = form.current?.getFieldValue('purchaseOrderNo') === 'a'

   const formfields = [
     {
       label: '采购单号',
       name: 'purchaseOrderNo',
       initialValue: 123123,
       type: 'INPUT', // 展示Input组件
       fieldOptions: {}
     },
     show && {
       label: '品类',
       name: 'categoryName',
       initialValue: undefined,
       type: 'SELECT',
       valueEnums: [
         // Select组件下拉框的值
         { value: '', label: '全部' },
         { value: '1', label: '进行中' },
         { value: '2', label: '未发布' },
         { value: '3', label: '已失效' },
         { value: '4', label: '已结束' }
       ],
       fieldOptions: {}
     }
   ]
   ```

2. 表单内存在多个控件或者[点我](https://ant.design/components/input-cn/#components-input-demo-group)

   ```tsx
   {
         label: '供应商',
         name: 'sssdffd',
         initialValue: undefined,
         widget: (
           <div style={{ display: 'flex' }}>
             <Input onChange={(e) => handleChange(e.target.value, 'b')} />
             <Input onChange={(e) => handleChange(e.target.value, 'c')} />
           </div>
         )
       }
   /* ----------- 父组件 ---------- */
   const [input, setInput] = useState({})
   	// 此时不要用 useCallback
     // const searchHandler = useCallback((status, values) => {
     //   console.log(status, values, input)
     // }, [])
     const searchHandler = (status, values) => {
       const params = {
         ...values,
         sssdffd: Object.values(input).join('')
       }
       console.log(status, params, input)
     }

     const handleChange = (val, type) => {
       setInput((v) => {
         return { ...v, [type]: val }
       })
     }
   ```

   ![image-20200413110534816](/Users/zhouxishun/Library/Application Support/typora-user-images/image-20200413110534816.png)

3. 联动选择展示

   方式也同上
