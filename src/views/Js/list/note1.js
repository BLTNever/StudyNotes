import React from 'react';
import Highlight from 'react-highlight';

import { Card, Col, Row } from 'antd';
import callStack from '../../../images/call-stack.png';
import creationPhase from '../../../images/creation-phase.jpg';

import { note1Fn } from './example';
import PreviewImg from '../../../components/previewImg';

const Note1 = () => (
    <div>
        <h2>JS执行上下文</h2>
        <div className="note-wrap">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="什么是执行上下文？">
                        <p>执行上下文是评估和执行 JavaScript 代码的环境的抽象概念。每当 Javascript 代码在运行的时候，它都是在执行上下文中运行</p>
                        <h4>执行上下文的类型:</h4>
                        <i>JavaScript 中有三种执行上下文类型。</i>
                        <p><b>全局执行上下文</b> — 这是默认或者说基础的上下文，任何不在函数内部的代码都在全局上下文中。它会执行两件事：创建一个全局的 window 对象（浏览器的情况下），并且设置 this 的值等于这个全局对象。一个程序中只会有一个全局执行上下文。</p>
                        <p><b>函数执行上下文</b> — 每当一个函数被调用时, 都会为该函数创建一个新的上下文。每个函数都有它自己的执行上下文，不过是在函数被调用时创建的。函数上下文可以有任意多个。每当一个新的执行上下文被创建，它会按定义的顺序执行一系列步骤。</p>
                        <p><b>Eval 函数执行上下文</b> — 执行在 eval 函数内部的代码也会有它属于自己的执行上下文。</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="执行栈">
                        <p>执行栈，也就是在其它编程语言中所说的<b>“调用栈”</b>，是一种拥有 LIFO（后进先出）数据结构的栈，被用来存储代码运行时创建的所有执行上下文。</p>
                        <p>当 JavaScript 引擎第一次遇到你的脚本时，它会创建一个全局的执行上下文并且压入当前执行栈。每当引擎遇到一个函数调用，它会为该函数创建一个新的执行上下文并压入栈的顶</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="调用栈(示例)" >
                        <Highlight language="javascript">{note1Fn}</Highlight>                   
                        <PreviewImg src={callStack} />
                    </Card>
                </Col>
            </Row>
        </div>

        <h2>怎么创建执行上下文？</h2>
        <div className="note-wrap">
            <h3>创建执行上下文有两个阶段：1) 创建阶段 和 2) 执行阶段</h3>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="创建阶段">
                        <ul>
                            <li>1. this 值的决定，即我们所熟知的 This 绑定。</li>
                            <li>2. 创建词法环境组件。</li>
                            <li>3. 创建变量环境组件。</li>
                        </ul>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="执行阶段">
                        <p>在此阶段，完成对所有这些变量的分配，最后执行代码。</p>
                        <p>注意 — 在执行阶段，如果 JavaScript 引擎不能在源码中声明的实际位置找到 let 变量的值，它会被赋值为 undefined。</p>
                    </Card>
                </Col>
            </Row>
            <h3>创建阶段</h3>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="1、This 绑定：">
                        <p>在全局执行上下文中，this 的值指向全局对象。(在浏览器中，this引用 Window 对象)。</p>
                        <p>在函数执行上下文中，this 的值取决于该函数是如何被调用的。如果它被一个引用对象调用，那么 this 会被设置成那个对象，否则 this 的值被设置为全局对象或者 undefined（在严格模式下）</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="2、词法环境">
                        <div className="tips">
                            词法环境是一种规范类型，基于 ECMAScript 代码的词法嵌套结构来定义标识符和具体变量和函数的关联。一个词法环境由环境记录器和一个可能的引用外部词法环境的空值组成。
                            </div>
                        <p>在此阶段，完成对所有这些变量的分配，最后执行代码。</p>
                        <p>注意 — 在执行阶段，如果 JavaScript 引擎不能在源码中声明的实际位置找到 let 变量的值，它会被赋值为 undefined。</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="3、变量环境">
                        <p>它同样是一个词法环境，其环境记录器持有变量声明语句在执行上下文中创建的绑定关系</p>
                        <p>变量环境也是一个词法环境，所以它有着上面定义的词法环境的所有属性。</p>
                        <p>在 ES6 中，词法环境组件和变量环境的一个不同就是前者被用来存储函数声明和变量（let 和 const）绑定，而后者只用来存储 var 变量绑定。</p>
                    </Card>
                </Col>
            </Row>
            <h3>词法环境详解</h3>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="词法环境有2种类型">
                        <p>1. <b>全局环境</b>（在全局执行上下文中）是没有外部环境引用的词法环境。全局环境的外部环境引用是 null。它拥有内建的 Object/Array/等、在环境记录器内的原型函数（关联全局对象，比如 window 对象）还有任何用户定义的全局变量，并且 this的值指向全局对象。。</p>
                        <p>2. <b>在函数环境</b>中，函数内部用户定义的变量存储在<b>环境记录器</b>中。并且引用的外部环境可能是全局环境，或者任何包含此内部函数的外部函数。</p>
                    </Card>
                </Col>
                <Col span={16}>
                    <Card title="图示">
                        {/* <img src={creationPhase} alt="" onClick={() => openGallery(creationPhase)} /> */}
                        <PreviewImg src={creationPhase} />
                    </Card>
                </Col>

            </Row>
        </div>
    </div>
)

export default Note1   
