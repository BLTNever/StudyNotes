import React from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import lifeCircle from '@images/lifeCircle.jpg'

import { debounce, throttle, extend1, extend2, createNew } from './example'



const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview1 = () => (
    <>
        <Wrap>
            <Title level={3}>性能优化</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                       
                        <Text mark>*浏览器渲染流程的优化*</Text>

                        <Title level={4}>加载优化</Title>
                        <ul>
                            <li><Text mark>减少页面请求文件的体积、减少接口请求的数量，延时请求加载</Text></li>
                            <li><Text>优化DOM：GZIP压缩文件，HTTP缓存文件，优化不必要的代码</Text></li>
                            <li><Text>优化JS：预加载（preload & prefetch）、async和defer（defer在DOM Loaded后执行，下载不阻塞DOM渲染，执行会）</Text></li>
                            <li><Text>图片懒加载：图片offsetTop &lt; scrollTop + clintHeight时设置data-src替换src</Text></li>
                            <li><Text>图片优化，使用svg、iconfont</Text></li>
                            <li><Text>静态资源部署到CDN、升级到http2.0</Text></li>
                            <li><Text>资源复用：服务端配置静态资源缓存（常见问题：HTTP缓存策略？Cache-Control？keep-alive？304？ETag？</Text></li>
                            <li><Text>webpack模块打包、JavaScript压缩（gzip）</Text></li>
                            <li><Text>扁平化Store数据结构</Text></li>
                        </ul>

                        <Title level={4}>渲染过程优化</Title>
                        <ul>
                            <li><Text>最后加载JS文件，防止JS文件执行阻塞DOM树和Render树的渲染</Text></li>
                            <li><Text>优化CSS：压缩CSS文件，选择合适的媒体查询类型</Text></li>

                        </ul>

                        <Title level={4}>交互优化</Title>
                        <ul>
                            <li><Text>避免浏览器重绘（修改样式）和回流（重新渲染）</Text></li>
                            <li><Text>事件委托：利用JS事件冒泡机制把原本需要绑定在子元素的响应事件（click，keydown）委托给父元素。减少内存占用，减少事件注册</Text></li>
                            <li><Text>高频操作使用函数防抖（debounce）、函数节流（throttle）</Text></li>
                            <li><Text>尽量使用 transition 和 animation来实现CSS动画，而不是JS实现动画（运行在主线程对动画的流畅度有影响）</Text></li>
                            <li><Text>DOM增删操作要少（虚拟长列表、DOM Diff）</Text></li>
                        </ul>

                        <Title level={4}>CRP（关键渲染路径Critical Rendering Path）优化</Title>
                        <ul>
                            <li>*关键资源的数量： 阻止网页首次渲染的资源</li>
                            <li>*关键路径长度：获取所有关键资源所需的往返次数总时间</li>
                            <li>*关键字节：首次渲染的总字节数，等同于所有关键资源传送文件的大小和</li>
                            <li><Text>避免持久化存储的容量持续增长</Text></li>
                        </ul>

                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}> TS</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <Title level={4}>type和interface相同与不同</Title>
                        <Text>interface表示funciton、object、class，type除了这么写类型，还可以表示其他类型</Text>
                        <Text>interface可以合并同名接口，type不支持</Text>
                        <Text>interface可以继承interface和type，使用extends关键字。type也可以继承interface和type，使用&符号</Text>

                        <Title level={4}>TS的优势</Title>
                        <Text mark>静态类型的优势：</Text>
                        <ul>
                            <li><Text>杜绝手误导致变量名写错</Text></li>
                            <li><Text>自动完成</Text></li>
                            <li><Text>重构支持</Text></li>
                            <li><Text>类型充当文档以及注释</Text></li>
                        </ul>
                        <Text mark>静态类型的不足：</Text>
                        <ul>
                            <li><Text>类型标注麻烦</Text></li>
                            <li><Text>类型系统不够强</Text></li>
                            <li><Text>eval和new Function()类型支持不到</Text></li>
                            <li><Text>需要bian ji</Text></li>
                        </ul>

                        <Title level={4}>TS范型</Title>
                        <ul>
                            <li><Text>范型不同于string,number等具体的类型，是一种抽象的类型</Text></li>
                            <li><Text>范型就是对类型进行编程</Text></li>
                            <li><Text>eval和new Function()类型支持不到</Text></li>
                            <li><Text>需要bian</Text></li>
                        </ul>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}> React事件机制</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <Link href="/react/Event">查看</Link>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>4. React diff机制</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <Link href="/react/VirtualDom">查看</Link>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>React 优化</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <Text mark>react hooks 优化思路</Text>
                        <ul>
                            <li>1. 减少render次数：在React中最小号事件的就是reconction（diff），如果不render，就不会reconction</li>
                            <li>2. 减少计算的量：减少重复计算，对于函数组件来说，每次render都会重新开始执行函数调用</li>
                        </ul>

                        <Text code>具体方法：</Text>
                        <ul>
                            <li>memo：在props不变的情况，通过记忆渲染结果的方法，提高组件的性能，可以传入第二个参数，做自定义比较函数</li>
                            <li>useCallback：在依赖项发生变化才会更新（useCallback返回的是函数，缓存函数）</li>
                            <li>usememo：在依赖项发生变化才会更新（usememo返回的是函数运行的结果，缓存计算的值）</li>
                            <li>合理拆分组件：控制更小粒度的更新</li>
                        </ul>

                        <Text mark>react class Components 优化思路</Text>
                        <ul>
                            <li>减少render次数：使用<Text code>shouldComponentUpdate</Text>和<Text code>PureComponent</Text>，减少父组件更新引起子组件更新的情况</li>
                        </ul>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>闭包</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <ul>
                            <li>JS所有函数都是闭包，因为有全局环境，所有函数都可以访问全局变量</li>
                            <li>当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时就产生了闭包</li>
                            <li>闭包就是由函数创造的一个词法作用域，里面创建的变量被引用后，可以在这个词法环境之外自由使用。闭包通常用来创建内部变量，使得这些变量不能被外部随意修改，同时又可以通过指定的函数接口来操作</li>
                            <li>闭包就是指有权访问另一个函数作用域中的变量的函数。</li>
                        </ul>
                        <Link href="/js/Closure">考察作用域、执行上下文、AV/VO、执行环境、作用域链</Link>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        

        <Wrap>
            <Title level={3}>8. 原型、继承、ES6 extend翻译成ES5</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <Text mark>在 Javascript 中创建对象有两种方式：对象字面量(const obj = {'{}'})和使用new表达式(const obj = new Object())</Text>
                        <Text mark>在 JS 中，每当创建一个函数对象 fn 时，该对象中都会内置一些属性，其中包括 <Text code>prototype</Text>和<Text code>__proto__</Text>， prototype 即原型对象，它记录着 fn 的一些属性和方法</Text>
                    </Space>

                    <Row>
                        <Col><Card><Highlight language="javascript">{extend1}</Highlight></Card></Col>
                        <Col><Card><Highlight language="javascript">{extend2}</Highlight></Card></Col>
                        <Col><Card><Highlight language="javascript">{createNew}</Highlight></Card></Col>
                    </Row>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>React、Redux</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <Text>React：<Text code>UI = f(state)</Text></Text>
                        <Text>Redux：store、reduce、action、actionCreater、dispatch</Text>
                        <Text>hooks生命周期：函数组件不存在声明周期， 通过useEffect进行操作，生命周期所做的都是副作用，放在useEffect里最合适</Text>
                        <Text>React16生命周期的变化：</Text>
                        <ul>
                            <li>废除掉了<Text code>componentWillMount</Text>、<Text code>componentWillReceiveProps</Text>、<Text code>componentWillUpdate</Text></li>
                            <li>新增了<Text code>getDrivedStateFromProps</Text>、<Text code>getSnapshotBeforeUpdate</Text></li>
                            <li><Text mark>reconciliation</Text>阶段是可中断的，所以废掉了那三个周期</li>
                            <li>getDrivedStateFromProps：static方法，将传入的props映射到state上，在<Text mark>每次re-rendering之前调用</Text></li>
                        </ul>
                        <Card><PreviewImg src={lifeCircle} /></Card>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>

        <Wrap>
            <Title level={3}>笔试</Title>
            <Collapse ghost>
                <Panel header="" key="1">
                    <Space direction="vertical">
                        <Text>React：<Text code>UI = f(state)</Text></Text>
                        <Text>Redux：store、reduce、action、actionCreater、dispatch</Text>
                        <Text>hooks生命周期：函数组件不存在声明周期， 通过useEffect进行操作，生命周期所做的都是副作用，放在useEffect里最合适</Text>

                        <Card><PreviewImg src={lifeCircle} /></Card>
                    </Space>
                </Panel>
            </Collapse>
        </Wrap>
    </>
)

export default Interview1