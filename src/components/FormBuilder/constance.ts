const defaultFormItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}

const normalColLayout = {
  xl: 6,
  lg: 8,
  md: 12,
  sm: 22,
  xs: 24
}

const rangeColLayout = { ...normalColLayout, xl: 12, lg: 16, md: 24 }
const rangeFormLayout = {
  labelCol: {
    md: 4,
    sm: 8
  },
  wrapperCol: {
    md: 20,
    sm: 16
  }
}
const fullColLayout = {
  xl: 24,
  lg: 24,
  md: 24,
  sm: 24,
  xs: 24
}

export enum twoColsMap {
  RANGE_PICKER,
  TEXTAREA
}

export { defaultFormItemLayout, normalColLayout, rangeColLayout, rangeFormLayout, fullColLayout }
