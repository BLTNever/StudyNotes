import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row, Tag, Divider } from 'antd';

import { example1, example2, example3, example4, example5, example6, example7 } from './example';

const Note15 = () => (
    <div>
        <h2>CommonJs、ES2015、AMD、CMD模块规范对比介绍</h2>
        <div className="note-wrap">
            <h3>CommonJS</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="CommonJS 基本介绍">
                        <p>1. CommonJS 是一种思想，它是为 JS 的表现来制定规范。由于 JS 没有模块系统、标准库较少、缺乏包管理工具，因此 CommonJS 应运而生。</p>
                        <p>2. CommonJS 的目标是希望 JS 可以在任何地方运行，不只是浏览器中。只要我们的 JavaScript 是根据 CommonJS API 编写的，那么就可以在与 CommonJS 兼容的系统上运行。</p>
                        <div>
                            3. 根据 CommonJS API 编写的 JavaScript 可以做下面这些事情：
                                <p>3.1 编写服务端应用</p>
                            <p>3.2 编写命令行工具</p>
                            <p>3.3 编写基于 GUI 的桌面应用</p>
                        </div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="CommonJS 的模块规范">
                        <p>一个文件就是一个模块，拥有单独的作用域。普通方式定义的变量、函数、对象都属于该模块内。</p>
                        <p><b>通过 require 来加载模块。</b></p>
                        <p><b>通过 exports 和 modul.exports 来暴露模块中的内容。</b></p>
                    </Card>
                </Col>
            </Row>
            <Divider />
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="使用 exports 暴露模块接口">
                        <p>由于目前还不支持ES2015的Module, 需要借助babel</p>
                        <Highlight language="javascript">
                            {example1}
                        </Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="使用 modul.exports 暴露模块对象">
                        <Highlight language="javascript">
                            {example2}
                        </Highlight>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="note-wrap">
            <h3>ES2015</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="ES2015 基本介绍">
                        <p>15 年 6 月， ES2015（即 ECMAScript 6、ES6） 正式发布。ES2015 是该语言的一个显著更新，也是自 2009 年 ES5 标准确定后的第一个重大更新。</p>
                        <p>虽然 ES2015 提出了许多令人激动的新特性，但由于目前 JavaScript 的运行环境众多，对 ECMAScript 标准的支持程度也不一样。</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="ES2015 的模块规范">
                        <p><b>一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。</b></p>
                        <div className="mb"><b><Tag>export</Tag> 命令用于规定模块的对外接口。</b></div>
                        <div className="mb"><b><Tag>import</Tag> 命令用于输入其他模块提供的功能。</b></div>
                        <p><b>ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。</b></p>
                    </Card>
                </Col>
            </Row>
            <Divider />
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="export & 使用 * 整体加载">
                        <p>由于目前还不支持ES2015的Module, 需要借助babel</p>
                        <Highlight language="javascript">
                            {example3}
                        </Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="export & export default">
                        <Highlight language="javascript">
                            {example4}
                        </Highlight>
                    </Card>
                </Col>
            </Row>
        </div>

        <div className="note-wrap">
            <h3>ES2015 & CommonJS混合使用</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="">
                        <Highlight language="javascript">
                            {example5}
                        </Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="">

                    </Card>
                </Col>
            </Row>
        </div>

        <div className="note-wrap">
            <h3>原生实现</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="立即执行函数">
                        <h4>使用立即执行函数（Immediately-Invoked Function Expression, IIFE）</h4>
                        <Highlight language="javascript">{example6}</Highlight>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="放大模式">
                        <p>放大模式的好处就是，可以不用考虑代码加载的先后顺序。</p>
                        <p><b>宽放大模式</b>： 实参部分的window.wall || (window.wall = {`{}`})</p>
                        <h4>多出来的分号; 是为了防止多个文件合并的时候首尾相接的问题</h4>
                        <Highlight language="javascript">{example7}</Highlight>
                    </Card>
                </Col>
            </Row>
        </div>
    </div >
)


export default Note15; 