import React, { useState, useEffect, useCallback, ReactNode } from 'react'

import { Form, Col } from 'antd'
import './index.less'

interface IPorps {
    name: string
    required: boolean
    row: boolean
    label?: string | ReactNode
    span?: number
    children?: ReactNode
}
export default function FormItem(props: any) {
    const labelChildren = props.label
    return (
        <div className={`my-item ${props.class || ''} ${props.row ? 'row' : ''}`} >
            <div className={`${props.required ? 'requeired' : ''} item-label`} style={{ width: `${props.span}0%` }}>{labelChildren}</div>
            <div className="item-value">{props.children}</div>
        </div>
    )
}