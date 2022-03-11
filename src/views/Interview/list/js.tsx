import React from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, Tag, Space, Tooltip } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'


import { extend1, extend2, createNew, extend3, extend4, extend5, extend6, extend7, clone1 } from './example'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Js = () => (
    <>


        <Wrap>
            <Title level={3}>闭包</Title>
            <Collapse ghost>
                <Panel header="闭包就是指有权访问另一个函数作用域中的变量的函数" key="1">
                    <Space direction="vertical">
                        <ul>
                            <li>JS所有函数都是闭包,因为有全局环境,所有函数都可以访问全局变量</li>
                            <li>当函数可以记住并访问所在的词法作用域,即使函数是在当前词法作用域之外执行,这时就产生了闭包</li>
                            <li>闭包就是由函数创造的一个词法作用域,里面创建的变量被引用后,可以在这个词法环境之外自由使用。闭包通常用来创建内部变量,使得这些变量不能被外部随意修改,同时又可以通过指定的函数接口来操作</li>
                        </ul>
                        <Link href="/js/Closure">考察作用域、执行上下文、AV/VO、执行环境、作用域链</Link>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>


        <Wrap>
            <Title level={3}>原型、继承、new</Title>
            <Collapse ghost>
                <Panel header="原型、继承" key="1">
                    <Space direction="vertical">
                        <ul>
                            <li><Text mark>在 Javascript 中创建对象有两种方式: 对象字面量(const obj = {'{}'})和使用new表达式(const obj = new Object())</Text></li>
                            <li><Text mark>在JS中,每当创建一个函数对象 fn 时,该对象中都会内置一些属性,其中包括 <Text code>prototype</Text>和<Text code>__proto__</Text>, prototype 即原型对象,它记录着 fn 的一些属性和方法</Text></li>
                            <li><Text>JS在创建对象(函数对象和普通对象)时都有一个__proto__的内置属性,用于指向创建它的函数的原型对象prototype</Text></li>
                            <li><Text mark>proto是一个内部属性,不建议对其进行直接操作。 而是建议通过prototype来进行操作。</Text></li>
                            <li><Text mark>原型链: 当我们访问一个对象的属性的时候,引擎首先会在当前对象进行查找,如果找不到就会访问该对象的__proto__, 如果__proto__有了,就返回,如果没有则递归执行上述过程,直到__proto__ 为 null。</Text></li>
                            <li><Text mark>继承和原型这部分知识和new是强相关的</Text></li>
                            <a href="https://github.com/mqyqingfeng/Blog/issues/2" target="_blank">从原型到原型链</a>
                        </ul>
                    </Space>
                    <Row>
                        <Col><Card><Highlight language="javascript">{extend1}</Highlight></Card></Col>
                        <Col><Card><Highlight language="javascript">{extend2}</Highlight></Card></Col>
                    </Row>
                </Panel>
                <Panel header="new的原理" key="2">
                    <Space direction="vertical">
                        <Text mark>引擎内部新建一个空对象</Text>
                        <Text mark>然后将这个空对象的proto 指向构造函数的prototype.然后调用构造函数</Text>
                        <Text mark>去填充我们创建的空对象(如果有必要)。 最后将this指向我们刚刚创建的新对象。</Text>
                    </Space>
                    <Row>
                        <Col><Card><Highlight language="javascript">{createNew}</Highlight></Card></Col>
                    </Row>
                </Panel>
                <Panel header="继承的种类" key="3">
                    <Space direction="vertical">
                        <Card title="1. 构造函数继承: "><Highlight language="javascript">{extend3}</Highlight></Card>
                        <Card title="2. 原型链继承: "><Highlight language="javascript">{extend4}</Highlight></Card>
                        <Card title="3. 构造函数原型链组合继承: "><Highlight language="javascript">{extend5}</Highlight></Card>
                        <Card title="4. 寄生式继承: "><Highlight language="javascript">{extend6}</Highlight></Card>
                        <Card title="5. 寄生组合式继承(class实现): "><Highlight language="javascript">{extend7}</Highlight></Card>
                    </Space>
                    <Row><Col><Card><Highlight language="javascript">{createNew}</Highlight></Card></Col></Row>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>模块化</Title>
            <Link href="/js/Moudles">详解...</Link>
            <Collapse ghost>
                <Panel header="模块化方案" key="1">
                    <Space direction="vertical">
                        <ul>
                            <li> <Text>1. 匿名闭包: IIFE模式(立即执行函数)</Text></li>
                            <li><Text>2. CommonJs: 浏览器中使用需要Browserify。CommonJs是同步的,CommonJs的加载机制是,输入的是被输出的值的拷贝。也就是说,一旦输出一个值,模块内部的变化就影响不到这个值</Text></li>
                            <li><Text>3. AMD: 采用非同步加载,推崇前置依赖: 定义模块时候就需要声明其依赖的模块。提前加载</Text></li>
                            <li><Text>4. CMD: 采用非同步加载,崇就近依赖: 只有在用到某个模块的时候再去require。按需加载</Text></li>
                            <li><Text>5. EsModule: 输出值的引用,模块的设计思想是尽量的静态化,使得编译时就能确定模块的依赖关系,以及输入和输出的变量。</Text></li>
                        </ul>
                    </Space>
                </Panel>

                <Panel header="CommonJs和EsModule的区别" key="2">
                    <Space direction="vertical">
                        <ul>
                            <li><Text>1. CommonJs模块输出的值的拷贝,EsModule模块输出的是值得引用</Text></li>
                            <li><Text>2. CommonJs模块是运行时加载,EsModule是编译时输出</Text></li>
                            <li><Text>3.循环引用: CommonJs的循环引用是通过传递未完成的export对象解决的。esModule传递的是引用</Text></li>
                        </ul>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>OOP和FP</Title>
            <Collapse ghost>
                <Panel header="OOP: " key="1">
                    <Space direction="vertical">
                        <ul>
                            <li><Text>1. 封装: 定义一个类</Text></li>
                            <li><Text>2. 继承: 一个类继承另一个类,代码复用</Text></li>
                            <li><Text>3. 多态: 通过传递父类对象引用不同的子类对象从而表现出不同的行为,扩展性。JS属于弱类型不能实现多态</Text></li>
                        </ul>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>var let const的区别</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <ul>
                            <li><Text mark>var: 创建 → 初始化提升到顶部 → 执行代码 → 赋值</Text></li>
                            <li><Text mark>let: 创建(提升?) → 初始化(?存疑) → 执行代码 → 赋值</Text></li>
                            <li><Text mark>const: 创建 → 执行代码 → 初始化必须赋值</Text></li>
                        </ul>

                        <ul>
                            <li>1. var声明的变量会提升,let(ECMA会提升 只是有TDZ(暂时性死区))、const不会</li>
                            <li>2. const和let具有块级作用域,存在暂时性死区</li>
                            <li>3. const创建后不可修改,var允许重复声明,let不允许允许重复声明</li>
                            <li>4. const声明创建一个值的只读引用。只有变量标示不能重新分配(对象的引用内容是地址,内容是可以修改的)</li>
                            <li>5. 全局作用域中使用var或者不是用var声明的变量会挂载到Windows上,let跟const不会</li>
                        </ul>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>
    </>
)

export default Js

