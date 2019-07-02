import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row } from 'antd';

import { arrFn1, arrFn2, arrFn3, arrFn4, arrFn5, arrFn6, arrFn7, arrFn8, arrFn9, arrFn10, arrFn11, arrFn12, arrFn13, arrFn14 } from './example'


const Exercise1 = () => (
    <div>

        <div className="note-wrap">
            <h3>数组合并去重</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="使用ES6 Set去重">
                        <Highlight language="javascript">{arrFn1}</Highlight>
                        <p>无法去掉{'{}'}空对象</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="for循环去重">
                        <Highlight language="javascript">{arrFn2}</Highlight>
                        <p>时间复杂度O(n2)</p>
                    </Card>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={12}>
                    <Card title="indexOf去重" >
                        <Highlight language="javascript">{arrFn3}</Highlight>
                        <p>新建一个空白数组，判断是否有存在存在当前元素，有的就跳过，没有就push进数组</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="利用对象的属性不能相同的特点进行去重">
                        <Highlight language="javascript">{arrFn4}</Highlight>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="note-wrap">
            <h3>多维数组拍平排序去重</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="ES6 ">
                        <Highlight language="javascript">{arrFn13}</Highlight>

                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="递归">
                        <Highlight language="javascript">{arrFn14}</Highlight>
                    </Card>
                </Col>
            </Row>


        </div>

        <div className="note-wrap">
            <h3>flatten</h3>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="迭代">
                        <Highlight language="javascript">{arrFn5}</Highlight>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="递归">
                        <Highlight language="javascript">{arrFn6}</Highlight>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="flat">
                        <Highlight language="javascript">{arrFn7}</Highlight>
                        <p>flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。</p>
                        <p>var newArray = arr.flat(depth); //depth 可选 指定要提取嵌套数组的结构深度，默认值为 1。</p>
                        <p>使用 Infinity 作为深度，展开任意深度的嵌套数组</p>
                    </Card>
                </Col>
            </Row>

        </div>

        <div className="note-wrap">
            <h3></h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="实现一个Array.reduce函数">
                        <Highlight language="javascript">{arrFn8}</Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="实现一个compose">
                        <Highlight language="javascript">{arrFn9}</Highlight>

                        <h5>reduce实现</h5>
                        <Highlight language="javascript">{arrFn10}</Highlight>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="note-wrap">
            <h3></h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="将具有length属性的对象转成数组">
                        <Highlight language="javascript">{`Array.protoype.slice.call(arguments, 0)`}</Highlight>
                        <p>或</p>
                        <Highlight language="javascript">{`[].protoype.slice.call(arguments, 0)`}</Highlight>
                        <p>或</p>
                        <Highlight language="javascript">{arrFn11}</Highlight>
                        <p>或</p>
                        <Highlight language="javascript">{`Array.from(arguments)`}</Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="转数组函数">
                        <Highlight language="javascript">{arrFn12}</Highlight>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
)

export default Exercise1   
