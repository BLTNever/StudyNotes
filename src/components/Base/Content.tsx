import React, { useState, useEffect, useCallback, ReactNode } from 'react'

import { BackTop } from 'antd'
import { UpCircleFilled } from '@ant-design/icons'

export default function Content(props: any) {
    return (
        <div className="my-content">
            {props.children}
            <BackTop visibilityHeight={400}>
                <div className="back-top"><UpCircleFilled /></div>
            </BackTop>
        </div>
    )
}