import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row, Divider, Collapse, Typography, Tag, Space, Tooltip } from 'antd'

import { Wrap } from '@components/Base'
import { example1, example2, example3, example4, example5, example6, example7, AMD } from './example';

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography
const Note15 = () => (
    <>
        <Wrap>
            <Title level={3}>CommonJS</Title>
            <Collapse ghost>
                <Panel header="CommonJS介绍" key="1">
                    <Space direction="vertical">
                        <ul>
                            <li><Text>定义模块：一个文件就是一个模块，拥有单独的作用域。普通方式定义的变量、函数、对象都属于该模块内。所有代码都运行在模块作用域，不会污染全局作用域。</Text></li>
                            <li><Text>模块输出：模块只有一个出口，module.exports对象，需要把模块输出的内容放入该对象中</Text></li>
                            <li><Text>模块加载：加载模块使用require方法，该方法读取一个文件并执行，返回文件内部的module.exports对象</Text></li>
                        </ul>
                        <Text mark>CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。</Text>
                        <Text>模块加载的顺序，按照其在代码中出现的顺序。</Text>
                        <Text mark>CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值</Text>
                        <Text>模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。</Text>
                        <Text>require方法有一个main属性，可以用来判断模块是直接执行，还是被调用执行。</Text>
                        <Text mark>循环加载：会直接从缓存读取exports属性</Text>
                        <Text>CommonJS经node.js应运而生</Text>
                    </Space>
                </Panel>
                <Panel header="require的内部处理流程" key="2">
                    <Space direction="vertical">
                        <Text>require是指向当前模块的module.require，后者指向了Module._load</Text>
                        <ul>
                            <li><Text>1. 检查 Module._cache，是否缓存之中有指定模块</Text></li>
                            <li><Text>2. 如果缓存之中没有，就创建一个新的Module实例</Text></li>
                            <li><Text>3. 将它保存到缓存</Text></li>
                            <li><Text>4. 使用 module.load() 加载指定的模块文件</Text></li>
                            <li><Text>5. 读取文件内容之后，使用 module.compile() 执行文件代码</Text></li>
                            <li><Text>6. 如果加载/解析过程报错，就从缓存删除该模块</Text></li>
                            <li><Text>7. 返回该模块的 module.exports</Text></li>
                        </ul>
                    </Space>
                </Panel>
                <Panel header="code" key="3">
                    <Space direction="vertical">
                        <Text>由于浏览器不支持, 需要借助Browserify</Text>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Card title="使用exports暴露模块接口">
                                    <Highlight language="javascript">{example1}</Highlight>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card title="使用 modul.exports 暴露模块对象">
                                    <Highlight language="javascript">{example2}</Highlight>
                                </Card>
                            </Col>
                        </Row>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>


        <Wrap>
            <Title level={3}>AMD（Asynchronous Module Definition）</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <Text>AMD对应的就是很有名的RequireJS</Text>
                        <ul>
                            <li><Text>AMD采用异步方式加载模块，模块的加载不影响它后面语句的运行</Text></li>
                            <li><Text>所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行</Text></li>
                            <li><Text>require([module], callback)</Text></li>
                        </ul>
                        <Highlight language="javascript">{AMD}</Highlight>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>CMD（Common Module Definition）</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <Text>通用模块定义，对应SeaJS</Text>
                        <ul>
                            <li><Text>CMD采用异步方式加载模块</Text></li>
                            <li><Text>CMD推崇就近依赖，只有在用到某个模块的时候再去require</Text></li>
                            <li><Text>定义模块：define(id?, dependencies?, factory)</Text></li>
                            <li><Text>加载模块：require([module], callback)</Text></li>
                        </ul>
                        <Highlight language="javascript">{AMD}</Highlight>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>AMD/CDM差异性</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <Text mark>最明显的区别就是在于模块定义的时候，对依赖处理的不同</Text>
                        <ul>
                            <li><Text>AMD推崇前置依赖：定义模块时候就需要声明其依赖的模块</Text></li>
                            <li><Text>CMD推崇就近依赖：只有在用到某个模块的时候再去require</Text></li>
                            <li><Text>AMD在加载完定义（define）好的模块就就会去执行，执行完成后，遇到require的时候才会执行主逻辑代码（提前加载）</Text></li>
                            <li><Text>CDM在加载完定义（define）的模块时，仅作下载不执行，遇到require执行对应的模块（按需加载）</Text></li>
                        </ul>
                        <Highlight language="javascript">{AMD}</Highlight>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>EsModule</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <Text mark>最明显的区别就是在于模块定义的时候，对依赖处理的不同</Text>
                        <ul>
                            <li><Text>一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。</Text></li>
                            <li><Text>import 是预先解析、预先加载的</Text></li>
                            <li><Text>export命令用于规定模块的对外接口。还可以使用epxort default做默认模块输出</Text></li>
                            <li><Text>import命令用于输入其他模块提供的功能。</Text></li>
                            <li><Text>模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。</Text></li>
                        </ul>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Card title="export & 使用 * 整体加载">
                                    <p>由于目前还不支持ES Module的Module, 需要借助babel</p>
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
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>CommonJS和EsModule区别</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <Title level={4}>1. Commonjs模块输出的值的拷贝，EsModule模块输出的是值得引用</Title>
                        <ul>
                            <li><Text>CommonJS输出的是值的拷贝（浅拷贝），一旦输出一个值，模块内部的变化就影响不到这个值</Text></li>
                            <li><Text>JS引擎在遇到EsModule模块时，会生成一个只读的引用，等到代码执行的时候，再根据引用，到被加载的模块里取值。EsModule是动态引用</Text></li>
                        </ul>

                        <Title level={4}>2. CommonJs模块是运行时加载，EsModule是编译时输出</Title>
                        <ul>
                            <li><Text>运行时加载：CommonJs模块就是对象，输入时先加载整个模块，生成一个对象，再从对象上读取方法</Text></li>
                            <li><Text>编译时加载：EsModule模块不是对象，通过export命令输出指定代码。import采用静态命令的形式，import的时候指定加载某个输出值，而不是加载整个模块</Text></li>
                            <li><Text>EsModule的对外接口只是一种静态定义，在代码静态解析阶段就会生成</Text></li>
                            <li><Text>循环引用：CommonJs的循环引用是通过传递未完成的export对象解决的。EsModule传递的是引用</Text></li>
                        </ul>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>EsModule、CommonJS混合使用</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <Highlight language="javascript">{example5}</Highlight>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>原生实现</Title>
            <Collapse ghost>
                <Panel header="立即执行函数" key="1">
                    <Space direction="vertical">
                        <Title level={4}>使用立即执行函数（Immediately-Invoked Function Expression, IIFE）</Title>
                        <Highlight language="javascript">{example6}</Highlight>
                    </Space>
                </Panel>
                <Panel header="放大模式" key="2">
                    <Space direction="vertical">
                        <p>放大模式的好处就是，可以不用考虑代码加载的先后顺序。</p>
                        <p><b>宽放大模式</b>： 实参部分的window.wall || (window.wall = {`{}`})</p>
                        <h4>多出来的分号; 是为了防止多个文件合并的时候首尾相接的问题</h4>
                        <Highlight language="javascript">{example7}</Highlight>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>
    </>
)


export default Note15;