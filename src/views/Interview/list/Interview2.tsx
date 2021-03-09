import React from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import nativetojs from '@images/rnnativetojs.png'

import { radix, radix2, ajax, traversal1, traversal2, traversal3, traversal4 } from './example'
import { orderBy } from 'lodash'
import { BSTree, nodes } from './fn'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview2 = () => {
    const orderFn = () => {
        console.group("%c 二叉树遍历", "background: #333; color: yellow")
        console.log('data>>>', nodes)
        console.log('前序递归>>>', BSTree.preOrderRec1(nodes))
        console.log('前序非递归>>>', BSTree.preOrderRec2(nodes))
        console.log('中序递归>>>', BSTree.inOrderRec1(nodes))
        console.log('中序非递归>>>', BSTree.inOrderRec2(nodes))
        console.log('后序递归>>>', BSTree.postOrderRec1(nodes))
        console.log('后序非递归>>>', BSTree.postOrderRec2(nodes))
        console.log('层次遍历>>>', BSTree.levelOrder(nodes))
        console.groupEnd()
    }
    return (
        <>
            <Wrap>
                <Title level={3}>算法：实现36进制转换</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Row>
                                <Col><Card><Highlight language="javascript">{radix}</Highlight></Card></Col>
                                <Col><Card><Highlight language="javascript">{radix2}</Highlight></Card></Col>
                            </Row>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>HTTPS的原理、和HTTP的区别、HTTPS2.0</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text mark>HTTPS经由HTTP进行通信，但利用了SSL/TLS来加密数据包</Text>
                            <ul>
                                <li>HTTPS传输过程是加密的</li>
                                <li>使用HTTPS协议需要用到CA（Certificate Authority）证书</li>
                                <li>HTTPS在HTTP使用TCP三次握手建立连接的基础上，要在加上SSL握手需要的9个包，一共12个包</li>
                                <li>HTTP使用80端口，HTTPS使用443端口</li>
                                <li>HTTPS在传输过程中使用对称加密加密传输数据</li>
                                <li>CA证书校验是非对称加密</li>
                            </ul>

                            <Text mark>HTTP2.0相比HTTP1.x做了哪些升级？多路复用；二进制分帧；服务端推送；数据流优先级；头部压缩</Text>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>操作系统中进程和线程如何通信</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text mark>进程是资源分配的基本单位；线程是程序执行的基本单位</Text>
                            <Text mark>进程拥有自己的资源空间，每启动一个进程，系统就为它分配地址空间</Text>
                            <Text mark>线程与CPU资源分配无关，多个线程共享同一进程的资源，使用相同地址空间</Text>
                            <Text mark>一个进程可以包含若干线程</Text>

                            <Title level={4}>系统通信：</Title>
                            <ul>
                                <li>进程通信：通过管道、套接字、信号交互、共享内存、消息队列进行通信</li>
                                <li>线程通信：线程本身共享内存，指针指向同一个内容</li>
                            </ul>

                            <Title level={4}>node通信：</Title>
                            <ul>
                                <li>node中提供child_process模块来创建子进程（child_process.fork()）</li>
                                <li>cluster.fork()是child_process.fork()的上层实现，cluster的好处是可以监听共享端口</li>
                                <li>node进程的通信主要是通在主从（子）进程之间进行通信，子进程之间无法直接通信，只能通过主进程转发</li>
                                <li>主进程与子进程的通信是通过IPC（Inter Process Communication）进行通信，IPC基于底层libuv根据不同操作系统实现（Windows：命名管道name pie, linux: Unix Domain Socket）</li>
                            </ul>

                            <Title level={4}>node中cluster是怎样开启多进程的，并且一个端口可以被多个进程监听吗</Title>
                            <ul>
                                <li>通过require(&apos;os&apos;).cpus().length获取当前机器上CPU的核数，然后根据CPU核数cluster.fork()创建相应数量的子进程</li>
                                <li>操作系统中，不同的进程去共享相同端口是不允许的</li>
                                <li><Text mark>cluster模块中通过主进程自身TCP Server绑定端口，并将TCP Server的具柄通过IPC通道传递给子进程，相当于子进程接管了TCP Server</Text></li>
                            </ul>



                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>RN、Flutter、Hybird通信</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Title>RN &lt;---&gt; 原生</Title>
                            <Row>
                                <Col span={10}>
                                    <Card title="iOS">
                                        <Text mark>RN与Native通信</Text>
                                        <ul>
                                            <li>Native通过创建RCTRootView传入属性</li>
                                            <li>通过RCTBridgeModule协议获取或传递数据给原生平台</li>
                                            <li>RN也可以通过callback或者NativeEventEmitter模块来监听事件</li>
                                            <li>通过Native模块中声明一个事件处理函数，传递给javascript使用</li>
                                        </ul>

                                        <Text mark>RN使用Native模块</Text>
                                        <ul>
                                            <li>1. 视图在createViewInstance中创建</li>
                                            <li>2. 通过@ReactProp注解导出属性的设置方法</li>
                                            <li>3. 注册ViewManager</li>
                                            <li>4. 创建Javascript模块并定义javascript和Java之间的接口层（通过requireNativeComponent(模块名称)）</li>
                                        </ul>
                                        <PreviewImg src={nativetojs} />
                                    </Card>
                                </Col>
                                <Col span={10}>
                                    <Card title="Android">
                                        <Text mark>RN与Native通信</Text>
                                        <ul>
                                            <li>把Android原生模块在应用的package类的CreateNativeModule方法中添加这个模块，在RN中引入</li>
                                            <li>Native通过RCTDeviceEventEmitter向RN发送事件通知</li>
                                            <li>RN也可以通过callback或者NativeEventEmitter模块来监听事件</li>
                                        </ul>
                                        <Text mark>RN使用Native模块</Text>
                                        <ul>
                                            <li>1. 视图在createViewInstance中创建</li>
                                            <li>2. 通过@ReactProp注解导出属性的设置方法</li>
                                            <li>3. 注册ViewManager</li>
                                            <li>4. 创建Javascript模块并定义javascript和Java之间的接口层（通过requireNativeComponent(模块名称)）</li>
                                        </ul>
                                    </Card>
                                </Col>
                            </Row>

                            <Title>Hybrid &lt;---&gt; 原生</Title>
                            <Text mark>通过JSBridge完成h5与Native的双向通讯</Text>
                            <ul>
                                <li>JS上下文注入：Native获取javascript环境上下文，在上面挂载对象或者方法（iOS：UIWebview JavascriptCore、WKWebView scriptMessageHandler注入；Android：addJavascriptInterface注入）</li>
                                <li>弹窗拦截：通过修改webview对象的方法，拦截固定规则参数（alert、confirm、prompt）</li>
                                <li>URL Schema：拦截Url 请求，解析这个scheme协议（iOS：UIWebView的delegate函数；Android：shouldOverrideUrlLoading）</li>
                            </ul>

                            <Title>Flutter &lt;---&gt; 原生</Title>
                            <Text mark>Flutter Plugin：通过Platform Channels与Flutter（dart）层通讯并暴露API</Text>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>原生ajax</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Card><Highlight language="javascript">{ajax}</Highlight></Card>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>算法：树的遍历有几种方式，实现层次遍历</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text mark>遍历方式：1.前序遍历、2.中序遍历、3.后序遍历、4.层次遍历</Text>
                            <ul>
                                <li>前序：根 -&gt; 左 -&gt; 右</li>
                                <li>中序：左 -&gt; 根 -&gt; 右</li>
                                <li>后序：左 -&gt; 右 -&gt; 根</li>
                            </ul>
                            <Row>
                                <Col span={12}><Card><Highlight language="javascript">{traversal1}</Highlight></Card></Col>
                                <Col span={12}><Card><Highlight language="javascript">{traversal2}</Highlight></Card></Col>
                            </Row>
                            <Row>
                                <Col span={12}><Card><Highlight language="javascript">{traversal3}</Highlight></Card></Col>
                                <Col span={12}><Card><Highlight language="javascript">{traversal4}</Highlight></Card></Col>
                            </Row>
                        </Space>
                        {orderFn()}
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>var let const的区别</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Row>
                                <Col span={8}>
                                    <Card title="var">
                                        <ul>
                                            <li>过程：var变量声明创建、初始化提升到顶部 -&gt; 执行代码 -&gt; 赋值</li>
                                        </ul>
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card title="let">
                                        <ul>
                                            <li>过程：let声明变量创建时提升到顶部 -&gt; 初始化 -&gt; 执行代码 -&gt; 赋值</li>
                                        </ul>
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card title="const">
                                        <ul>
                                            <li>过程：创建 -&gt; 执行代码 -&gt; 初始化</li>
                                        </ul>
                                    </Card>
                                </Col>
                            </Row>
                            <ul>
                                <li>1. var声明的变量会提升，let const不会</li>
                                <li>2. const和let具有块级作用域</li>
                                <li>3. const创建后不可修改，var、let允许 重复声明</li>
                                <li>4. const声明创建一个值的只读引用。只有变量标示不能重新分配（对象的引用内容是地址，内容是可以修改的）</li>
                                <li>5. 全局作用域中使用var或者不是用var声明的变量会挂载到Windows上，let跟const不会</li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Interview2