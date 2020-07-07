import React, { useState, useEffect, useCallback, ReactNode } from 'react'
import { Spin } from 'antd'
interface IPorps {
    loading: boolean
    children?: ReactNode
}
export default function Content(props: IPorps) {
    return (
        <Spin spinning={props.loading}>
            {props.children}
        </Spin>
    )
}