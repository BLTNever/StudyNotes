import React, { Component, useState } from 'react';
import { } from 'antd';
import './index.less';

const PreviewImg = (props: { src: string }) => {
    const [state, setState] = useState<boolean>(false)
    const { src = '###' } = props
    return (
        <div className="preview-img">
            <img src={src} alt="" onClick={() => setState(true)} />

            <div id="show-picture"
                style={{ 'display': state ? 'block' : 'none' }}
                onClick={() => setState(false)}>
                <img src={src} alt="" />
            </div>
        </div>
    )
}
export default PreviewImg