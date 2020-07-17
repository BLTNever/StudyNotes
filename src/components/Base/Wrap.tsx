import React, { useState, useEffect, useCallback, ReactNode } from 'react'
import './index.less'

export default function Wrap(props: any) {
    return (
        <div className="my-wrap">
            {props.children}
        </div>
    )
}