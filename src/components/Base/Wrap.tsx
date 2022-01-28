import React, { useState, useEffect, useCallback, ReactNode } from 'react'
import './index.less'

export default function Wrap(props: any) {
    const { children, ...args } = props
    return (
        <div className="wrap" {...args}>
            {children}
        </div>
    )
}