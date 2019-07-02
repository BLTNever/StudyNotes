import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row } from 'antd';

import { recursion1, recursion2, deepCopy2, } from './example'


const Exercise7 = () => (
    <div>
        <h2>题</h2>
        <div className="note-wrap">
            <h3></h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="递归求和、求乘积">
                        <h4>求和</h4>
                        <Highlight language="javascript">{recursion1}</Highlight>
                        <h4>求乘积</h4>
                        <Highlight language="javascript">{recursion2}</Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="手写Promise实现">
                      
                    </Card>
                </Col>

            </Row>
            <Row gutter={16}>


            </Row>
        </div>




    </div>
)

export default Exercise7   
