import React, { useEffect } from 'react'
import { Collapse, Typography, Space, Tooltip, Tag } from 'antd'
import { Link } from 'react-router-dom'

import Highlight from '@components/HighLight'

import { Wrap } from '@components/Base'


const { Panel } = Collapse
const { Paragraph, Title, Text } = Typography


const Performance = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>性能感知</Title>
                <ul>
                    <li>性能优化的前提是先感知问题</li>
                    <li>先收集问题</li>
                    <li>判断优化效果</li>
                    <li>避免优化后，后续迭代影响性能</li>
                    <li>通过工具去判断</li>
                </ul>
                <Collapse ghost>
                    <Panel header="白屏检查 应用可用时长耗时检查" key="1" extra="">
                        <Space direction="vertical">
                            <ul>
                                <li>加载白屏时间可以通过first meaningful paint来判定</li>
                                <li>MutationObserver</li>
                                <li>chrome.loadingTimes().firstPaintTime值</li>
                                <li>PerformanceObserver</li>
                            </ul>
                        </Space>
                    </Panel>

                    <Panel header="信息收集上报" key="2" extra="">
                        <Space direction="vertical">
                            <ul>
                                <li>常见错误类型: JS错误 - SyntaxError、TypeError、ReferenceError、RangeError、网络错误 - ResourceError、HttpError</li>
                                <li>收集错误:
                                    <ul>
                                        <li>window.onerror: 常规运行错误、异步错误</li>
                                        <li>window.addEventListener(error): 文件加载错误</li>
                                        <li>window.addEventListener(unhandledrejection): Promise错误</li>
                                        <li>componentDidCatch: React错误</li>
                                        <li>Vue.config.errorHandler: Vue错误</li>
                                        <li></li>
                                    </ul>
                                </li>
                                <li>信息上报:
                                    <ul>
                                        <p>方式1:</p>
                                        <li>收集信息后保存在内存中,之后在requestIdleCallback或离开页面前</li>
                                        <li>浏览器标签页被隐藏或显示的时候会触发visibilitychange事件(当 visibleStateState 属性的值转换为 hidden 时，Safari不会按预期触发visibilitychange； 因此，在这种情况下，您还需要包含代码以侦听 pagehide 事件)(出于兼容性原因，请确保使用  document.addEventListener 而不是window.addEventListener来注册回调。 Safari 14.0仅支持前者)</li>
                                        <li>浏览器unload(卸载的时候)</li>
                                        <li>Navigator.sendBeacon(): 请求与当前页面线程脱钩，作为浏览器进程的任务，因此可以保证会把数据发出去，不拖延卸载流程</li>
                                    </ul>
                                    <ul>
                                        <p>方式2:</p>
                                        <li>使用 POST 一个 1 x 1 的 gif 对其进行上报</li>
                                        <li>1. 没有跨域问题</li>
                                        <li>2. 发 POST 请求之后不需要获取和处理数据、服务器也不需要发送数据</li>
                                        <li>3. 不会携带当前域名 cookie</li>
                                        <li>4. 不会阻塞页面加载，影响用户的体验，只需 new Image 对象</li>
                                        <li>5. 相比于 BMP/PNG 体积最小，可以节约 41% / 35% 的网络资源小</li>
                                    </ul>
                                </li>
                            </ul>
                        </Space>
                    </Panel>

                    <Panel header="采集聚合" key="3" extra="">
                        <Space direction="vertical">
                            <ul>
                                <li>错误标识(SDK配合):定位单个错误条目，单个错误事件的能力</li>
                                <li>错误过滤(SDK配合):</li>
                                <li>避免重复上报</li>
                            </ul>
                        </Space>
                    </Panel>

                    <Panel header="性能指标" key="7" extra="">
                        <Space direction="vertical">
                            <ul>
                                <li>FP (First Paint) 首次绘制: 标记浏览器渲染任何在视觉上不同于导航前屏幕内容之内容的时间点</li>
                                <li>FCP (First Contentful Paint) 首次内容绘制: 标记浏览器渲染来自 DOM 第一位内容的时间点，该内容可能是文本、图像、SVG 甚至 元素</li>
                                <li>LCP (Largest Contentful Paint)最大内容渲染: 代表在viewport中最大的页面元素加载的时间. LCP的数据会通过PerformanceEntry对象记录, 每次出现更大的内容渲染, 则会产生一个新的PerformanceEntry对象</li>
                                <li>DCL (DomContentloaded): 当 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，无需等待样式表、图像和子框架的完成加载</li>
                                <li>FMP(First Meaningful Paint) 首次有效绘制</li>
                                <li>L (onLoad):当依赖的资源, 全部加载完毕之后才会触发 </li>
                                <li>TTI (Time to Interactive) 可交互时间: 指标用于标记应用已进行视觉渲染并能可靠响应用户输入的时间点 </li>
                                <li>TBT (Total Blocking Time) 页面阻塞总时长: TBT汇总所有加载过程中阻塞用户操作的时长，在FCP和TTI之间任何long task中阻塞部分都会被汇总</li>
                                <li>FID (First Input Delay) 首次输入延迟: 指标衡量的是从用户首次与您的网站进行交互(即当他们单击链接，点击按钮等)到浏览器实际能够访问之间的时间</li>
                                <li>CLS (Cumulative Layout Shift) 累积布局偏移: 总结起来就是一个元素初始时和其hidden之间的任何时间如果元素偏移了, 则会被计算进</li>
                                <li>SI (Speed Index):指标用于显示页面可见部分的显示速度, 单位是时间</li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>性能优化</Title>
                <ul>
                    <li><Text mark>减少资源大小: 代码压缩、图片压缩、文件切割</Text></li>
                    <li><Text mark>减少请求时间: 服务器优化(服务端渲染、chunked encoding数据分块传输)、利用缓存(cacheContol、localStorage)、优化网络(http2.0、CDN、减少重定向、域名分割资源分配在不同域名下)</Text></li>
                    <li><Text mark>代码层面: 减少DOM操作、使用外部JS，CSS文件以便方便缓存、首屏之外文件按需/延迟加载、合并声明、减少全局变量、合理使用requestAnimationFrame动画代替setTimeout</Text></li>
                    <li><Text mark>SSR: 解决请求慢或渲染慢的问题</Text></li>
                </ul>
                <Collapse ghost>

                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>*加载优化</Title>
                <Collapse ghost>
                    <Panel header="资源优化" key="1" extra="减少请求文件的体积、减少接口请求的数量、延时请求">
                        <Space direction="vertical">
                            <Text mark>减少页面请求文件的体积、减少接口请求的数量，延时请求加载</Text>
                            <ul>
                                <li>文件压缩: GZIP压缩文件，http缓存文件，优化不必要的代码</li>
                                <li>JS文件加载:
                                    <ul>
                                        <li>预加载(preload & prefetch)</li>
                                        <li>async和defer(defer在DOM Loaded后执行，下载不阻塞DOM渲染，执行会)</li>
                                        <li>按需加载(script.onload、script.readyState)</li>
                                        <li>切割JS文件(webpack.splitChunks)、JS压缩(gzip)</li>
                                    </ul>
                                </li>
                                <li>CSS优化:  避免使用import、放在head媒体查询、link添加preload、动态添加link、不使用用CSS计算、避免使用通配/高级选择器</li>
                                <li>图片优化:
                                    <ul>
                                        <li>图片懒加载: 图片offsetTop &lt; scrollTop + clintHeight时设置data-src替换src</li>
                                        <li>使用svg、iconfont、webp代替图标图片</li>
                                    </ul>
                                </li>
                                <li>静态资源部署到CDN:
                                    <ul>
                                        <li>服务器资源缓存在CDN服务器上</li>
                                        <li>请求资源的时候向CDN边缘节点发起请求(就近服务器)</li>
                                        <li>CDN边缘计算</li>
                                        <li><Link to="/inerview/Http#CDN">详解</Link></li>
                                    </ul>
                                </li>
                                <li>http协议升级: 升级到http2.0
                                    <ul>
                                        <li>多路复用: 节省TCP协议开销</li>
                                        <li>二进制分帧: 提高传输性能</li>
                                        <li>头部压缩: 减少了传输的信息</li>
                                        <li>服务器推送: 服务器缓存资源</li>
                                        <li><Link to="/interview/Http#http">详解</Link></li>
                                    </ul>
                                </li>
                                <li>资源复用:
                                    <ul>
                                        <li>客户端缓存: service work、强缓存、协商缓存</li>
                                        <li>服务器缓存: 服务器根据内存映射找到对应的缓存页面</li>
                                        <li><Link to="/interview/cache">详解</Link></li>
                                    </ul>
                                </li>
                                <li>webpack模块打包过程进行优化</li>
                                <li>扁平化Store数据结构</li>
                            </ul>
                        </Space>
                    </Panel>

                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>*渲染过程优化</Title>
                <Collapse ghost>
                    <Panel header="防止资源阻塞" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li>最后加载JS文件，防止JS文件执行阻塞DOM树和Render树的渲染</li>
                                <li>优化CSS: 压缩CSS文件，选择合适的媒体查询类型</li>
                                <li>减少关键 CSS 元素数量、避免使用CSS表达式、加载CSS推荐用 link 少用 @import</li>
                                <li>不重要的外置引入的JS使用defer或者async属性异步加载</li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="CRP(关键渲染路径Critical Rendering Path)优化" key="4">
                        <Space direction="vertical">
                            <ul>
                                <li>*关键资源的数量: 阻止网页首次渲染的资源</li>
                                <li>*关键路径长度: 获取所有关键资源所需的往返次数总时间</li>
                                <li>*关键字节: 首次渲染的总字节数，等同于所有关键资源传送文件的大小和</li>
                                <li><Text>避免持久化存储的容量持续增长</Text></li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>*交互优化</Title>
                <Collapse ghost>
                    <Panel header="*减少DOM操作" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li><Text>合并操作</Text></li>
                                <li><Text>避免浏览器 <Tooltip title="元素样式的改变并不影响它在文档流中的位置"><Tag color="#2db7f5">重绘(修改样式)</Tag></Tooltip>和
                                    <Tooltip title="当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程">
                                        <Tag color="#108ee9">回流(重新渲染)</Tag>
                                    </Tooltip>
                                </Text>
                                </li>
                                <li><Text>重排元素设置为position absolute或fixed脱离文档流</Text></li>
                                <li><Text>事件委托: 利用JS事件冒泡机制把原本需要绑定在子元素的响应事件(click，keydown)委托给父元素。减少内存占用，减少事件注册</Text></li>
                                <li><Text>高频操作使用函数防抖(debounce)、函数节流(throttle)</Text></li>
                                <li><Text>尽量使用 transition 和 animation来实现CSS动画，而不是JS实现动画(运行在主线程对动画的流畅度有影响)</Text></li>
                                <li><Text>DOM增删操作要少(虚拟长列表、DOM Diff)</Text></li>
                                <li><Text>在内存中构建DOM，完成后再添加到文档中，document fragment</Text></li>
                                <li><Text>设置display: none， 先隐藏再操作再显示</Text></li>
                                <li><Text>CSS硬件加速(GPU加速)translateZ/translate3d </Text></li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>SSR</Title>
                <Space direction="vertical">
                    <ul>
                        <li>同构: 一份代码既可以跑在浏览器端,也可以跑在服务端。这得益于 NodeJS 在服务端的流行</li>
                        <li>配置降级方案,从SSR降到到CSR</li>
                        <li>静态直出+离线缓存: cdn + 预渲染 + 客户端缓存 - </li>
                        <li>动态直出+动态缓存: 动态缓存 + 服务端渲染</li>
                    </ul>
                </Space>
                {/* <Collapse ghost>
                    <Panel header="同构" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li>一份代码既可以跑在浏览器端，也可以跑在服务端。这得益于 NodeJS 在服务端的流行</li>
                                <li></li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse> */}
            </Wrap>
        </>
    )
}

export default Performance
