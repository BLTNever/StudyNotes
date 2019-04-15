import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row } from 'antd';

import { arrFn1, arrFn2, arrFn3, arrFn4, } from './example'


const Exercise1 = () => (
    <div>
        <h2>数组合并去重</h2>
        <div className="note-wrap">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="使用ES6 Set去重">
                        <Highlight language="javascript">{arrFn1}</Highlight>
                        <p>无法去掉{'{}'}空对象</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="for循环去重">
                        <Highlight language="javascript">{arrFn2}</Highlight>
                        <p>时间复杂度O(n2)</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="indexOf去重" >
                        <Highlight language="javascript">{arrFn3}</Highlight>
                        <p>新建一个空白数组，判断是否有存在存在当前元素，有的就跳过，没有就push进数组</p>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="利用对象的属性不能相同的特点进行去重">
                        <Highlight language="javascript">{arrFn4}</Highlight>
                    </Card>
                </Col>
               
            </Row>
        </div>

       
      
       
    </div>
)

export default Exercise1   
