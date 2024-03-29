
import React from 'react';
import Highlight from '@components/HighLight'

import { Card, Col, Row, Divider, Collapse, Typography, Tag, Space, Tooltip } from 'antd'

import { Wrap } from '@components/Base'
import { lexicalScope, dynamicScope, executionContext } from './example';
const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography

const Closure = () => (
    <>
        <Wrap>
            <Title level={3}>作用域</Title>
            <h4>作用域: 定义变量储存的区域。,并规定了如何查找变量(标识符)。</h4>
            <p>通俗的讲,作用域就是查找变量的地方。</p>
            <p>在查找变量的时候,现在函数作用域中查找,没找到,再去全局作用域中查找,查找变量的链条,称为<b>作用域链</b></p>
            <p>作用域规定了如何查找变量,也就是确定当前执行代码对变量的访问权限。</p>
            <p>ES6之前只有全局作用域和函数作用域,ES6中加入了块级作用域</p>
            <p>JavaScript采用词法作用域(lexical scoping),也就是静态作用域。</p>
            <Collapse ghost>
                <Panel header="全局、函数作用域" key="1">
                    <h4>函数作用域: 变量在函数体内部申明,则该变量的作用域为整个函数体,在函数体外不可引用该变量</h4>
                    <h4>全局作用域: 不在任何函数内定义的变量就具有全局作用域,全局作用域的变量实际上被绑定到window的一个属性。</h4>
                    <p>1. 函数内部可以直接读取全局变量。</p>
                    <p>2. 正常情况下在函数外部是无法读取函数内的局部变量, 内部函数可以访问外部函数定义的变量。</p>
                    <p>3. 如何在函数外部读取到函数内部的局部变量:  在函数内部定义一个函数读取函数的值,并把该内部函数当作返回值。</p>
                </Panel>
                <Panel header="块级作用域" key="2">
                    <h4>for循环语句块中,无法定义具有局部作用域的变量, for循环中定义的变量是在函数内部的。</h4>
                    <h4>ES6引入新的关键字let、const,可以申明一个块级作用域的变量。</h4>
                    <p>let 声明的语法与 var 的语法一致。你基本上可以用 let 来代替 var 进行变量声明,但会将变量的作用域限制在当前代码块中。块级作用域有以下几个特点: </p>
                    <p><b>声明变量不会提升到代码块顶部</b></p>
                    <p><b>禁止重复声明</b></p>
                    <h4>块级作用域在如下情况被创建: </h4>
                    <p>在一个函数内部</p>
                    <p>在一个代码块(由一对花括号包裹)内部</p>
                </Panel>
                <Panel header="静态作用域(词法作用域)与动态作用域" key="3">
                    <h4>词法作用域就是定义在词法阶段的作用域的。</h4>
                    <h4>无论函数在哪里被调用,也无论它如何被调用,它的词法作用域都只由函数被声明时所处的位置决定。</h4>
                    <h4>动态作用域:</h4>
                    <p>词法作用域相对的是动态作用域,函数的作用域在函数调用的时候才决定。</p>
                </Panel>
                <Panel header="例" key="4">
                    <h4>词法作用域: </h4>
                    <Highlight language="javascript">{lexicalScope}</Highlight>
                    <h4>动态作用域: </h4>
                    <p>下面脚本存成scope.bash, 在相应使用命令行执行 bash scope.bash查看结果</p>
                    <Highlight language="javascript">{dynamicScope}</Highlight>
                </Panel>
            </Collapse>
        </Wrap>


        <Wrap>
            <Title level={3}>VO & AO</Title>
            <Collapse ghost>
                <Panel header="VO(Variable Object)变量对象" key="1">
                    <h4>VO对应的是函数创建阶段,JS解析引擎进行预解析的时候,所有的<b>变量</b>和<b>函数的生命</b>统称为Variable Object</h4>
                    <p>变量与<b>执行上下文</b>相关, 知道自己的数据存储在哪里,并且知道如何访问,VO是一个与执行上下文相关的特殊对象</p>
                    <p>每一个执行上下文都会分配一个变量对象(VO),变量对象的属性由变量(variable)和函数声明构成</p>
                    <p>在函数上下文情况下,参数列表也会被加入变量对象中作为属性。</p>
                    <p>变量对象与当前作用域息息相关,不同作用域的变量对象互不相同,它保存了当前作用域的所有函数和对象</p>
                </Panel>

                <Panel header="AO(Activation Object)活动对象( ECMAScript 1 / 3 中的内容)" key="2">
                    <Space direction="vertical">
                        <h4>AO对应的是函数执行阶段,函数被调用时,会建立一个执行上下文,该执行上下文包含了函数所需的所有变量</h4>
                        <p>该变量共同组成了一个新的对象,Activation Object</p>
                        <ul>
                            <li>1. 函数的所有局部变量</li>
                            <li>2. 函数所有的命名参数</li>
                            <li>3. 函数的参数集合</li>
                        </ul>
                        <p>函数在被调用的时候,那么一个活动对象(AO)就会被创建并且分配给执行上下文</p>
                        <p>活动对象由特殊对象arguments初始化而成,随后被当作变量对象(VO)用于变量初始化</p>

                        <Text mark>ECMAScript 5+之后是一个叫词法环境(Lexical Environments)的定义</Text>
                        <Text>每当函数被调用的时候,其都会创建一个活跃对象。该对象对开发者不可见,是一个隐藏的数据结构,其中包含了一些函数在执行时必要的信息和绑定,以及返回值的地址等等</Text>
                        <ul>
                            <li>对应函数对象的引用</li>
                            <li>调用者对应的活跃对象,用于 return 之后的控制权转移</li>
                            <li>调用完毕之后用于继续执行后续逻辑的恢复信息,它通常是一个将在函数调用完毕之后立即要执行的指令的地址</li>
                            <li>函数对应的形参,从实参初始化而来</li>
                            <li>函数中的变量,以 undefined 进行初始化</li>
                            <li>函数用于计算复杂表达式的临时变量</li>
                            <li>this,如果函数作为一个方法被调用,那么 this 通常就是它的宿主对象</li>
                        </ul>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>执行环境 & 作用域链</Title>
            <Collapse ghost>
                <Panel header="执行环境(Execution context)" key="1">
                    <h4>在javascript中, 执行环境可以抽象的理解为一个Object, 他由以下几个属性构成: </h4>
                    <Highlight>{executionContext}</Highlight>
                </Panel>

                <Panel header="作用域链(Scope Chain)" key="2">
                    <h4>当代码在一个环境中执行时,会创建变量对象的一个作用域链(scope chain)来保证对执行环境有全访问的变量和函数的有序访问</h4>
                    <h4>作用域链Scope其实就是对执行上下文EC中的变量对象VO|AO有序访问的链表。能按顺序访问到VO|AO,就能访问到其中存放的变量和函数的定义。</h4>
                    <p>作用域链在解释器进入到一个执行环境时初始化完成并将其分配给当前执行环境。每个执行环境的作用域链由当前环境的变量对象及父级环境的作用域链构成。</p>
                </Panel>
            </Collapse>
        </Wrap>


        <Wrap>
            <Title level={3}>闭包</Title>
            <Collapse ghost>
                <Panel header="闭包的理解" key="1">
                    <Text mark>一个拥有外层函数对象所对应的活跃对象引用的函数对象就被称为闭包</Text>
                    <p><b>1. 当函数可以记住并访问所在的词法作用域,即使函数是在当前词法作用域之外执行,这时就产生了闭包。</b></p>
                    <p><b>2. 闭包就是由函数创造的一个词法作用域,里面创建的变量被引用后,可以在这个词法环境之外自由使用。闭包通常用来创建内部变量,使得这些变量不能被外部随意修改,同时又可以通过指定的函数接口来操作。</b></p>
                    <p><b>3. 闭包是一种特殊的对象。它由两部分构成: 函数,以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。</b></p>
                    <p><b>4. 闭包就是指有权访问另一个函数作用域中的变量的函数。</b></p>
                </Panel>

                <Panel header="闭包的作用 & 注意点" key="2">
                    <p>1. 通过闭包,在外部环境访问内部环境的变量。</p>
                    <p>2. 让变量一直保存在内存中,不会被垃圾回收。</p>
                    <p>3. 在javascript中,如果一个对象不再被引用,那么这个对象就会被垃圾回收机制回收</p>
                    <p>4. 如果两个对象互相引用,而不再被第3者所引用,那么这两个互相引用的对象也会被回收</p>
                    <h4>使用闭包的注意点</h4>
                    <p>1. 通常,函数的作用域及其所有变量都会在函数执行结束后被销毁。但是,在创建了一个闭包以后,这个函数的作用域就会一直保存到闭包不存在为止。</p>
                    <p>2. 闭包会使函数中的变量被保存在内存中,内存消耗很多,不能滥用(解决办法: 退出函数之前,将不使用的局部变量全部删除)</p>
                    <p>3. 闭包会在父函数外部,改变父函数内部变量的值</p>
                </Panel>
            </Collapse>
        </Wrap>


        <Wrap>
            <Title level={3}>AST语法树</Title>
            <Collapse ghost>
                <Panel header="什么是AST" key="1">
                    <Space direction="vertical">
                        <Text mark>通过 Parser 把代码转化为抽象语法树(AST),该树定义了代码的结构,通过对树的处理,能实现对代码的分析、优化等操作</Text>
                        <Text>编译器、代码压缩、代码混淆、代码优化,所有的 lint(不仅仅是 JavaScript),所有的打包构建工具及其插件,包括 webpack、rollup、parcel、browserify 等...</Text>
                        <ul>
                            <li>词法分析: 把字符串分解成有意义的代码块,这些代码块被称为词法单元</li>
                            <li>语法分析: 词法单元流(数组)转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树,即 AST</li>
                            <li>代码生成: 将 AST 转换为可执行代码</li>
                        </ul>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

    </>
)

export default Closure


