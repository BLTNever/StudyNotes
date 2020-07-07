import React from "react";
import { InputNumber } from 'antd'
import './index.less'
const MyInputNumber = (props: any) => {

    const { placeholder, index, dataKey, value, max, min, addonBefore, addonAfter, disabled } = props
    return (
        <div id='my-input-number'>
            {
                addonBefore ?
                    <span className='addon'>{addonBefore}</span> : null
            }
            <InputNumber
                value={value}
                disabled={disabled}
                onChange={(e) => props.onChange(e, index, dataKey)}
                placeholder={placeholder}
                min={min} max={max} precision={2}
                className={`${addonBefore ? 'addon-before' : ''} ${addonAfter ? 'addon-after' : ''}`}
                {...props}
            />
            {
                addonAfter ?
                    <span className='addon2'>{addonAfter}</span> : null
            }
        </div>
    )
}
export default MyInputNumber
