import React from 'react';
 import Highlight from '@components/HighLight'
;

import { Card, Col, Row } from 'antd';

import { shallowClone, deepCopy1, deepCopy2, } from './example'


const Exercise7 = () => (
    <div>
        <h2>正则</h2>
        <div className="note-wrap">
            <h3></h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="语法">
                        <Highlight language="javascript">`var patt=new RegExp(pattern,modifiers);`</Highlight>
                        <p>或</p>
                        <Highlight language="javascript">`var patt=/pattern/modifiers;`</Highlight>
                        <ul>
                            <li>pattern（模式） 描述了表达式的模式</li>
                            <li>modifiers(修饰符) 用于指定全局匹配、区分大小写的匹配和多行匹配</li>
                        </ul>
                        <p>注意：使用构造函数(new RegExp)创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 \）</p>
                        <h5>例：</h5>
                        <Highlight>{`var re = new RegExp("\\w+");`}</Highlight>
                        <Highlight>{`var re = /\w+/;`}</Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="">
                      
                    </Card>
                </Col>

            </Row>
            <Row gutter={16}>


            </Row>
        </div>




    </div>
)

export default Exercise7   
