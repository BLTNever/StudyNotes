---
description: JS执行过程分为代码编译阶段、代码执行阶段
---

# 执行栈

### 一、代码编译阶段

> 由编译器完成,将代码翻译成可执行代码,这个阶段确定作用域规则

### 二、代码执行阶段

> 由引擎完成,执行可执行代码,这个阶段创建执行上下文

#### 什么是执行上下文？

> 执行上下文是评估和执行 JavaScript 代码的环境的抽象概念。每当 Javascript 代码在运行的时候,它都是在执行上下文中运行

**执行上下文的类型:**

1. 全局执行上下文:这是默认或者说基础的上下文,任何不在函数内部的代码都在全局上下文中。它会执行两件事:
   1. 创建一个全局的 window 对象(浏览器的情况下)
   2. 设置 this 的值等于这个全局对象。一个程序中只会有一个全局执行上下文。
2. 函数执行上下文: &#x20;
   1. 每当一个函数被调用时, 都会为该函数创建一个新的上下文。
   2. 每个函数都有它自己的执行上下文,不过是在函数被调用时创建的。
   3. 函数上下文可以有任意多个。每当一个新的执行上下文被创建,它会按定义的顺序执行一系列步骤。
3. eval 函数执行上下文:  执行在 eval 函数内部的代码也会有它属于自己的执行上下文。



```
            
        
    </Wrap>

        <PageHeader title="JS执行上下文" />
        
            <Panel header="什么是执行上下文？" key="1">
                <Space direction="vertical">
                    执行上下文是评估和执行 JavaScript 代码的环境的抽象概念。每当 Javascript 代码在运行的时候,它都是在执行上下文中运行</Text>
                    <Title level={4}>执行上下文的类型:
                    
                        
                            1. 全局执行上下文:这是默认或者说基础的上下文,任何不在函数内部的代码都在全局上下文中。它会执行两件事: </Text>
                            
                                1.1 创建一个全局的 window 对象(浏览器的情况下)</Text></li>
                                1.2 设置 this 的值等于这个全局对象。一个程序中只会有一个全局执行上下文。</Text></li>
                            
                        </li>
                        2. 函数执行上下文: 每当一个函数被调用时, 都会为该函数创建一个新的上下文。每个函数都有它自己的执行上下文,不过是在函数被调用时创建的。函数上下文可以有任意多个。每当一个新的执行上下文被创建,它会按定义的顺序执行一系列步骤。</Text></li>
                        3. Eval函数执行上下文: 执行在 eval 函数内部的代码也会有它属于自己的执行上下文。</Text></li>
                    
                </Space>
            </Panel>
            <Panel header="执行栈" key="2">
                <Space direction="vertical">
                    执行栈,也就是在其它编程语言中所说的“调用栈”,是一种拥有 LIFO(后进先出)</Text>数据结构的栈,被用来存储代码运行时创建的所有执行上下文。</Text>
                    当 JavaScript 引擎第一次遇到你的脚本时,它会创建一个全局的执行上下文并且压入当前执行栈。每当引擎遇到一个函数调用,它会为该函数创建一个新的执行上下文并压入栈的顶</Text>
                </Space>
            </Panel>
            <Panel header="code" key="3">
                <Highlight>{note1Fn}</Highlight>
                <PreviewImg src={callStack} />
            </Panel>
        </Collapse>
    </Wrap>

    <Wrap>
        <PageHeader title="怎么创建执行上下文？" subTitle="创建执行上下文有两个阶段: 1) 创建阶段 和 2) 执行阶段" />
        
            <Panel header="创建阶段" key="1">
                <Row gutter={24}>
                    <Col span={8}>
                        <Card title="1、This绑定">
                            <Space direction="vertical">
                                
                                    在全局执行上下文中,this 的值指向全局对象</Text>(在浏览器中,this引用 Window 对象)</li>
                                    在函数执行上下文中,this 的值取决于该函数是如何被调用的</Text>。如果它被一个引用对象调用,那么 this 会被设置成那个对象,否则 this 的值被设置为全局对象或者 undefined(在严格模式下)</li>
                                
                            </Space>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="2、创建词法环境">
                            <Space direction="vertical">
                                
                                    
                                        词法环境是一种规范类型,基于 ECMAScript 代码的词法嵌套结构来定义标识符和具体变量和函数的关联。一个词法环境由环境记录器和一个可能的引用外部词法环境的空值组成。
                                    </li>
                                    在此阶段,完成对所有这些变量的分配,最后执行代码。</li>
                                    注意 — 在执行阶段,如果 JavaScript 引擎不能在源码中声明的实际位置找到 let 变量的值,它会被赋值为 undefined。</li>
                                
                            </Space>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="3、创建变量环境">
                            <Space direction="vertical">
                                
                                    它同样是一个词法环境,其环境记录器持有变量声明语句在执行上下文中创建的绑定关系</li>
                                    变量环境也是一个词法环境,所以它有着上面定义的词法环境的所有属性。</li>
                                    在 ES6 中,词法环境组件和变量环境的一个不同就是前者被用来存储函数声明和变量(let 和 const)绑定,而后者只用来存储 var 变量绑定。</li>
                                
                            </Space>
                        </Card>
                    </Col>
                </Row>
            </Panel>
            <Panel header="执行阶段" key="2">
                <Space direction="vertical">
                    在此阶段,完成对所有这些变量的分配,最后执行代码。</Text>
                    注意 — 在执行阶段,如果 JavaScript 引擎不能在源码中声明的实际位置找到 let 变量的值,它会被赋值为 undefined。</Text>
                </Space>
            </Panel>
        </Collapse>
    </Wrap>

    <Wrap>
        <PageHeader title="词法环境详解" />

        
            <Panel header="词法环境类型" key="1">
                <Space direction="vertical">
                    1. <b>全局环境(在全局执行上下文中):</b>是没有外部环境引用的词法环境。全局环境的外部环境引用是 null。它拥有内建的 Object/Array/等、在环境记录器内的原型函数(关联全局对象,比如 window 对象)还有任何用户定义的全局变量,并且 this的值指向全局对象。。</Text>
                    2. <b>在函数环境:</b>函数内部用户定义的变量存储在环境记录器</Text>中。并且引用的外部环境可能是全局环境,或者任何包含此内部函数的外部函数。</Text>
                </Space>
            </Panel>
            <Panel header="图示" key="2">
                <PreviewImg src={creationPhase} />
            </Panel>
        </Collapse>
    </Wrap>
</>
```

)
