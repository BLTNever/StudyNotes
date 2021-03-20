import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, Tag, Space, Tooltip } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'


import { debounce, throttle, extend1, extend2, createNew } from './example'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography



const Interview7 = () => {



    return (
        <>
            <Wrap>
                <Title level={3}>性能优化</Title>
                <ul>
                    <li><Text mark>减少资源大小：代码压缩、图片压缩、文件切割</Text></li>
                    <li><Text mark>减少请求时间：服务器优化（服务端渲染、chunked encoding数据分块传输）、利用缓存（cacheContol、localStorage）、优化网络（http2.0、CDN、减少重定向、域名分割资源分配在不同域名下）</Text></li>
                    <li><Text mark>代码层面：减少DOM操作、使用外部JS，CSS文件以便方便缓存、首屏之外文件按需/延迟加载、合并声明、减少全局变量、合理使用requestAnimationFrame动画代替setTimeout</Text></li>
                </ul>
                <Collapse ghost>
                    <Panel header="加载优化" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li><Text mark>减少页面请求文件的体积、减少接口请求的数量，延时请求加载</Text></li>
                                <li><Text>GZIP压缩文件，HTTP缓存文件，优化不必要的代码</Text></li>
                                <li><Text>JS文件加载：预加载（preload & prefetch）、async和defer（defer在DOM Loaded后执行，下载不阻塞DOM渲染，执行会）、按需加载（script.onload、script.readyState）</Text></li>
                                <li><Text>JS文件体积：切割JS文、JS压缩（gzip）</Text></li>
                                <li><Text>CSS优化： 避免使用import、放在head媒体查询、link添加preload、动态添加link、不使用用CSS计算、避免使用通配/高级选择器</Text></li>
                                <li><Text>图片懒加载：图片offsetTop &lt; scrollTop + clintHeight时设置data-src替换src</Text></li>
                                <li><Text>图片优化，使用svg、iconfont</Text></li>
                                <li><Text>静态资源部署到CDN、升级到http2.0</Text></li>
                                <li><Text>资源复用：服务端配置静态资源缓存（常见问题：HTTP缓存策略？Cache-Control？keep-alive？304？ETag？</Text></li>
                                <li><Text>webpack模块打包过程进行优化</Text></li>
                                <li><Text>扁平化Store数据结构</Text></li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="渲染过程优化" key="2">
                        <Space direction="vertical">
                            <ul>
                                <li><Text>最后加载JS文件，防止JS文件执行阻塞DOM树和Render树的渲染</Text></li>
                                <li><Text>优化CSS：压缩CSS文件，选择合适的媒体查询类型</Text></li>

                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="交互优化" key="3">
                        <Space direction="vertical">
                            <Text mark>*减少DOM操作</Text>
                            <ul>
                                <li><Text>合并操作</Text></li>
                                <li>
                                    <Text>
                                        避免浏览器
                                    <Tooltip title="元素样式的改变并不影响它在文档流中的位置">
                                            <Tag color="#2db7f5">重绘（修改样式）</Tag>
                                        </Tooltip>和
                                    <Tooltip title="当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程">
                                            <Tag color="#108ee9">回流（重新渲染）</Tag>
                                        </Tooltip>
                                    </Text>
                                </li>
                                <li><Text>重排元素设置为position absolute或fixed脱离文档流</Text></li>
                                <li><Text>事件委托：利用JS事件冒泡机制把原本需要绑定在子元素的响应事件（click，keydown）委托给父元素。减少内存占用，减少事件注册</Text></li>
                                <li><Text>高频操作使用函数防抖（debounce）、函数节流（throttle）</Text></li>
                                <li><Text>尽量使用 transition 和 animation来实现CSS动画，而不是JS实现动画（运行在主线程对动画的流畅度有影响）</Text></li>
                                <li><Text>DOM增删操作要少（虚拟长列表、DOM Diff）</Text></li>
                                <li><Text>在内存中构建DOM，完成后再添加到文档中，document fragment</Text></li>
                                <li><Text>设置display：none， 先隐藏再操作再显示</Text></li>
                                <li><Text>CSS硬件加速（GPU加速）</Text></li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="CRP（关键渲染路径Critical Rendering Path）优化" key="4">
                        <Space direction="vertical">
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
                <Title level={3}>浏览器缓存、服务器缓存</Title>
                <Collapse ghost>
                    <Panel header="缓存" key="1">
                        <Space direction="vertical">
                            <Text>在浏览器向服务器第一次发起请求拿到请求结果之后，根据响应报头（response）中的http头（response headers）的缓存标志，决定是否缓存结果</Text>
                            <Title level={4}>缓存机制</Title>
                            <ul>
                                <li>1. 浏览器发送请求前，根据请求头的expires和cache-control判断是否命中（包括是否过期）强缓存策略，如果命中，直接从缓存获取资源，并不会发送请求。如果没有命中，则进入下一步。 </li>
                                <li>2. 没有命中强缓存规则，浏览器会发送请求，根据请求头的last-modified和etag判断是否命中协商缓存，如果命中，直接从缓存获取资源。如果没有命中，则进入下一步。</li>
                                <li>3. 如果前两步都没有命中，则直接从服务端获取资源。</li>
                            </ul>
                            <Title level={4}>浏览器缓存分为两种：1. 强制缓存 2. 协商缓存</Title>
                            <ul>
                                <li><Text>强制缓存：强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程</Text></li>
                                <li><Text>协商缓存：强制缓存时间到期后，浏览器携带缓存标志请求服务端， 由服务端决定是否使用缓存</Text></li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="服务器缓存" key="2">
                        <Space direction="vertical">
                            <Text mark>服务器缓存：服务器缓存是把网页解析在内存中做一个映射，把网页存到硬盘中，当其他用户访问时根据内存中的映射返回缓存的网页</Text>
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

            </Wrap>
        </>
    )
}

export default Interview7


