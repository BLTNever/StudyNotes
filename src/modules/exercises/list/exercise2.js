import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row } from 'antd';

import { shallowClone, deepCopy1, deepCopy2, } from './example'


const Exercise1 = () => (
    <div>
        <h2>数组拷贝</h2>
        <div className="note-wrap">
            <h3></h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="浅拷贝">
                        <Highlight language="javascript">{shallowClone}</Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="深拷贝">
                    <Highlight language="javascript">{deepCopy1}</Highlight>
                    <Highlight language="javascript">{deepCopy2}</Highlight>
                    </Card>
                </Col>

            </Row>
            <Row gutter={16}>


            </Row>
        </div>




    </div>
)

export default Exercise1   
