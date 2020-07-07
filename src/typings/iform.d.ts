export interface Ioption {
    value: string | React.ReactText
    label: string | React.ReactNode
}
export interface Ioption2 {
    value: string | null | number
    name: string | React.ReactNode
}
export interface IformItem {
    labelName: string
    fieldName: string
    type: string
    required?: boolean | false
    valueEnums?: Array<Ioption> | []
}

export interface IformItem2 {
    type: string
    label: string
    placeholder: string
    field: string
    width?: string
    initialValue?: any
    list?: Array<Ioption2> | []
}