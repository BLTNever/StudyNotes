import React, { Component } from 'react';
import { } from 'antd';
import './index.less';


export default class PreviewImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preview: false,
        }
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    previewImg() {
        this.setState({
            preview: true,
        })
    }
    closeGallery() {
        this.setState({
            preview: false,
        })
    }

    render() {
        const { preview } = this.state;
        
        const { src = '###' } = this.props;
        return (
            <div className="preview-img">
                <img src={src} alt="" onClick={() => this.previewImg()} />

                <div id="show-picture"
                    style={{ 'display': preview ? 'block' : 'none' }}
                    onClick={() => this.closeGallery()}>
                    <img src={src} alt="" />
                </div>
            </div>
        )
    }
};