import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Popover, Button, PageHeader, Divider, Collapse, Typography, Tag, Space, Tooltip } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography
const cacheControl = <ul>
    <li>public: 表示客服端和代理服务器都可以进行缓存</li>
    <li>private: 表示只能客户端缓存</li>
    <li>no-cache: 表示跳过当前的强制缓存，发起http请求，直接进入协商缓存</li>
    <li>no-store: 表示不进行缓存</li>
    <li>s-maxage: 表示针对代理服务器的缓时间</li>
</ul>

const frontend = () => {
    return (
        <>
            <Wrap>
                <Title level={3}>性能优化</Title>
                <ul>
                    <li><Text mark>减少资源大小: 代码压缩、图片压缩、文件切割</Text></li>
                    <li><Text mark>减少请求时间: 服务器优化（服务端渲染、chunked encoding数据分块传输）、利用缓存（cacheContol、localStorage）、优化网络（http2.0、CDN、减少重定向、域名分割资源分配在不同域名下）</Text></li>
                    <li><Text mark>代码层面: 减少DOM操作、使用外部JS，CSS文件以便方便缓存、首屏之外文件按需/延迟加载、合并声明、减少全局变量、合理使用requestAnimationFrame动画代替setTimeout</Text></li>
                </ul>
                <Collapse ghost>
                    <Panel header="加载优化" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li><Text mark>减少页面请求文件的体积、减少接口请求的数量，延时请求加载</Text></li>
                                <li><Text>GZIP压缩文件，http缓存文件，优化不必要的代码</Text></li>
                                <li><Text>JS文件加载: 预加载（preload & prefetch）、async和defer（defer在DOM Loaded后执行，下载不阻塞DOM渲染，执行会）、按需加载（script.onload、script.readyState）</Text></li>
                                <li><Text>JS文件体积: 切割JS文、JS压缩（gzip）</Text></li>
                                <li><Text>CSS优化:  避免使用import、放在head媒体查询、link添加preload、动态添加link、不使用用CSS计算、避免使用通配/高级选择器</Text></li>
                                <li><Text>图片懒加载: 图片offsetTop &lt; scrollTop + clintHeight时设置data-src替换src</Text></li>
                                <li><Text>图片优化，使用svg、iconfont</Text></li>
                                <li><Text>静态资源部署到CDN、升级到http2.0</Text></li>
                                <li><Text>资源复用: 服务端配置静态资源缓存（常见问题: http缓存策略？Cache-Control？keep-alive？304？ETag？</Text></li>
                                <li><Text>webpack模块打包过程进行优化</Text></li>
                                <li><Text>扁平化Store数据结构</Text></li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="渲染过程优化" key="2">
                        <Space direction="vertical">
                            <ul>
                                <li><Text>最后加载JS文件，防止JS文件执行阻塞DOM树和Render树的渲染</Text></li>
                                <li><Text>优化CSS: 压缩CSS文件，选择合适的媒体查询类型</Text></li>
                                <li><Text>减少关键 CSS 元素数量、避免使用CSS表达式、加载CSS推荐用 link 少用 @import</Text></li>
                                <li><Text>不重要的外置引入的JS使用defer或者async属性异步加载</Text></li>
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
                                <li><Text>事件委托: 利用JS事件冒泡机制把原本需要绑定在子元素的响应事件（click，keydown）委托给父元素。减少内存占用，减少事件注册</Text></li>
                                <li><Text>高频操作使用函数防抖（debounce）、函数节流（throttle）</Text></li>
                                <li><Text>尽量使用 transition 和 animation来实现CSS动画，而不是JS实现动画（运行在主线程对动画的流畅度有影响）</Text></li>
                                <li><Text>DOM增删操作要少（虚拟长列表、DOM Diff）</Text></li>
                                <li><Text>在内存中构建DOM，完成后再添加到文档中，document fragment</Text></li>
                                <li><Text>设置display: none， 先隐藏再操作再显示</Text></li>
                                <li><Text>CSS硬件加速（GPU加速）translateZ/translate3d </Text></li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="CRP（关键渲染路径Critical Rendering Path）优化" key="4">
                        <Space direction="vertical">
                            <ul>
                                <li>*关键资源的数量:  阻止网页首次渲染的资源</li>
                                <li>*关键路径长度: 获取所有关键资源所需的往返次数总时间</li>
                                <li>*关键字节: 首次渲染的总字节数，等同于所有关键资源传送文件的大小和</li>
                                <li><Text>避免持久化存储的容量持续增长</Text></li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>浏览器缓存、服务器缓存</Title>
                <Collapse ghost>
                    <Panel header="浏览器缓存机制" extra="强制缓存、协商缓存" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li><Text mark>
                                    1. 浏览器在发送请求时，首先会检查强制缓存（http1.0使用expires，1.1使用<Popover content={cacheControl}><Button>cache-control</Button></Popover>），如果缓存命中，则不需要发送请求。直接从缓存中获取资源数据
                                </Text></li>
                                <li><Text mark>
                                    2. 若强缓存失效，则发送请求进去协商缓存,服务器通过浏览器请求头<b>last-modified（http1.0, 通过时间点来感知，可能1s内修改多次，此时就不能体现修改。在性能上Last-modified是优于Etag的，Last-Modified仅仅只是记录一个时间点）和etag（http1.1, 通过hash感知，在精度上优于Last-modified的，因为Etag是根据资源文件内容生成的唯一标示，因为能够准确感知到资源文件内容的变化）</b>字段进行检查，若是资源则返回新的资源数据，状态码200，否则返回304
                                </Text></li>
                                <li><Text mark>
                                    3. 当服务器返回304时说明页面使用了这个资源的缓存, 而文档的内容（从上次访问以来或是根据请求条件）并没有发生变化，则服务器应该返回这个304状态码
                                </Text></li>
                                <li>4. 如果前两步都没有命中，则直接从服务端获取资源</li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="浏览器缓存位置" extra="Service Workder、Memory Cache、Disk Cache、Push Cache" key="2">
                        <Space direction="vertical">
                            <ul>
                                <li>Sevice Worker: <Text mark>JS运行在主线程之外的独立线程，虽然自己脱离了浏览器，无法访问dom元素，但是它可以实现离线缓存，消息推送等，其中离线缓存就是指Service Woker Cache，同时它也是PWA实现的重要机制</Text>
                                    <ul>
                                        <li>Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能</li>
                                        <li>使用ServiceWorker时，因为涉及到请求拦截, 所以传输协议必须为HTTPS</li>
                                        <li>Service Worker的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存那些文件如何匹配缓存，如何读取缓存，并且缓存是持续性的</li>
                                    </ul>
                                </li>
                                <li>Memory Cache: <Text mark>内存缓存，它的效率是最快的，但是它的生命周期很短，当渲染进程结束后，它也就不复存在了</Text>
                                    <ul>
                                        <li>内存中的缓存，主要包含的是当前页面中已经抓取到的资源，例如页面上已经下载的样式、脚本、图片等</li>
                                        <li>内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放，一旦我们关闭Tab页面，内存中的缓存也就被释放了</li>
                                        <li>内存缓存在缓存资源时并不关心返回资源的HTTP缓存头Cache-Control是什么值，同时资源的匹配也并非仅仅是对URL做匹配，还可能会对Content-Type,CORS等其他特征做校验</li>
                                    </ul>
                                </li>
                                <li>Disk Cache: <Text mark>硬盘缓存，它的存取效率会慢一些，但是它的存储量和存储时长相对比较有优势</Text>
                                    <ul>
                                        <li>在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的，它会根据HTTP Header中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求</li>
                                        <li>并且即使在跨站点的情况下，相同地址的资源一旦被硬盘存储下来，就不会再次去请求数据。绝大部分的缓存都来自Disk Cache</li>
                                        <li>1 对于大文件来说，大概率是不存在内存中的，反之优先。2当前系统内存使用率高的话，文件优先储存进硬盘</li>
                                    </ul>
                                </li>
                                <li>Push Cache: <Text mark>推送缓存是Http2中的内容</Text>
                                    <ul>
                                        <li>当以上三种缓存都没有命中时，它才会被使用。它只在会话（Session）中存在。一旦会哈结束就被释放，并且缓存的时间也很短暂，在Chrome浏览器中只有五分钟左右，同时它也并非严格执行HTTP头中的缓存指令</li>
                                        <li>一旦链接被关闭，Push Cache就被释放</li>
                                        <li>多个页面可以使用同一个HTTP/2的连接，也就可以使用同一个Push Cache。这主要还是依赖浏览器的实现而定，出于对性能的考虑，有的浏览器会对相同域名但不同的tab标签使用同一个HTTP连接</li>
                                    </ul>
                                </li>
                            </ul>
                        </Space>
                    </Panel>

                    <Panel header="如何触发缓存策略" key="3">
                        <Space direction="vertical">
                            <ul>
                                <li>打开网页，地址栏输入地址，查找disk cache中是否有匹配，如果有则使用，如果没有则发送网络请求</li>
                                <li>普通刷新F5 因为TAB没有关闭，因此memory cache是可用的，会被优先使用，其次才是disk cache</li>
                                <li>强制刷新Ctrl+F5 浏览器不适用缓存，因此发送的请求头均带有Cache-Control:no-Cache 为了兼容还带有Pragma: no-cache，服务器直接返回200和最新内容</li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="APP三级缓存" extra="网络缓存、本地缓存、内存缓存" key="4">
                        <Space direction="vertical">
                            <ul>
                                <li>网络缓存: 不优先加载，速度慢，浪费流量</li>
                                <li>本地缓存: 次优先加载，速度快</li>
                                <li>内存缓存: 优先加载，速度最快</li>
                            </ul>
                            <Text mark>APP三级缓存等于浏览器缓存，并不是等于三级缓存中的网络缓存</Text>
                        </Space>
                    </Panel>
                    <Panel header="服务器缓存" key="6">
                        <Space direction="vertical">
                            <Text mark>服务器缓存: 服务器缓存是把网页解析在内存中做一个映射，把网页存到硬盘中，当其他用户访问时根据内存中的映射返回缓存的网页</Text>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>https的原理、和http的区别、http2.0、http1.1</Title>
                <Collapse ghost>
                    <Panel header="https和http的区别"  extra="增加了SSL/TLS层、CA证书非对称加密、传输过程对称加密" key="1">
                        <Space direction="vertical">
                            <Text mark>https经由http进行通信，但利用了SSL/TLS来加密数据包</Text>
                            <ul>
                                <li>https传输过程是加密的</li>
                                <li>使用https协议需要用到CA（Certificate Authority）证书</li>
                                <li>https在http使用TCP三次握手建立连接的基础上，要在加上SSL握手需要的9个包，一共12个包</li>
                                <li>http使用80端口，https使用443端口</li>
                                <li>https在传输过程中使用对称加密加密传输数据</li>
                                <li>CA证书校验是非对称加密</li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="http2.0" extra="二进制分帧、多路复用、头部压缩、请求优先级、服务器推送" key="5">
                        <Space direction="vertical">
                            <Text mark>1、二进制分帧（Binary Format）- 是http2.0的基石</Text>
                            <ul>
                                <li>http2.0之所以能够突破http1.X标准的性能限制，改进传输性能，实现低延迟和高吞吐量，就是因为其新增了二进制分帧层</li>
                                <li>在应用层（HTTP2.0）和传输层（TCP or UDP）之间增加一个二进制分帧层。在二进制分帧层上，HTTP2.0会将所有传输的信息分为更小的消息和帧，并采用二进制格式编码，其中HTTP1.x的首部信息会被封装到Headers帧，而Request Body则封装到Data帧</li>
                                <li>帧(frame)包含部分: 类型Type, 长度Length, 标记Flags, 流标识Stream和frame payload有效载荷</li>
                                <li>消息(message): 一个完整的请求或者响应，比如请求、响应等，由一个或多个 Frame 组成</li>
                                <li>流是连接中的一个虚拟信道，可以承载双向消息传输。每个流有唯一整数标识符。为了防止两端流ID冲突，客户端发起的流具有奇数ID，服务器端发起的流具有偶数ID</li>
                                <li>流标识是描述二进制frame的格式，使得每个frame能够基于http2发送，与流标识联系的是一个流，每个流是一个逻辑联系，一个独立的双向的frame存在于客户端和服务器端之间的http2连接中。一个http2连接上可包含多个并发打开的流，这个并发流的数量能够由客户端设置</li>
                                <li>在二进制分帧层上，http2.0会将所有传输信息分割为更小的消息和帧，并对它们采用二进制格式的编码将其封装，新增的二进制分帧层同时也能够保证http的各种动词，方法，首部都不受影响，兼容上一代http标准。其中，http1.X中的首部信息header封装到Headers帧中，而request body将被封装到Data帧中</li>
                            </ul>

                            <Text mark>2、多路复用 (Multiplexing) / 连接共享</Text>
                            <ul>
                                <li>在http1.1中，浏览器客户端在同一时间，针对同一域名下的请求有一定数量的限制（Chrome: 6个），超过限制数目的请求会被阻塞。这也是为何一些站点会有多个静态资源 CDN 域名的原因之一</li>
                                <li>http2.0中的多路复用优化了这一性能。多路复用允许同时通过<b>单一的http/2 连接发起多重的请求-响应消息</b>。有了新的分帧机制后，http/2 不再依赖多个TCP连接去实现多流并行了。每个数据流都拆分成很多互不依赖的帧，而这些帧可以交错（乱序发送），还可以分优先级，最后再在另一端把它们重新组合起来</li>
                                <li>http 2.0 连接都是持久化的，而且客户端与服务器之间也只需要一个连接（每个域名一个连接）即可。http2连接可以承载数十或数百个流的复用，多路复用意味着来自很多流的数据包能够混合在一起通过同样连接传输。当到达终点时，再根据不同帧首部的流标识符重新连接将不同的数据流进行组装</li>
                            </ul>

                            <Text mark>3、头部压缩（Header Compression）</Text>
                            <ul>
                                <li>http1.x的头带有大量信息，而且每次都要重复发送。http/2使用encoder来减少需要传输的header大小，通讯双方各自缓存一份头部字段表，既避免了重复header的传输，又减小了需要传输的大小</li>
                                <li>对于相同的数据，不再通过每次请求和响应发送，通信期间几乎不会改变通用键-值对(用户代理、可接受的媒体类型，等等)只需发送一次</li>
                                <li>果首部发生了变化，则只需将变化的部分加入到header帧中，改变的部分会加入到头部字段表中，首部表在 http 2.0 的连接存续期内始终存在，由客户端和服务器共同渐进地更新</li>
                                <li>需要注意的是，http 2.0关注的是首部压缩，而我们常用的gzip等是报文内容（body）的压缩，二者不仅不冲突，且能够一起达到更好的压缩效果</li>
                                <li>http/2使用的是专门为首部压缩而设计的HPACK②算法</li>
                            </ul>

                            <Text mark>4、请求优先级（Request Priorities）</Text>
                            <ul>
                                <li>把http消息分为很多独立帧之后，就可以通过优化这些帧的交错和传输顺序进一步优化性能。每个流都可以带有一个31比特的优先值: 0 表示最高优先级；2的31次方-1 表示最低优先级</li>
                                <li>服务器可以根据流的优先级，控制资源分配（CPU、内存、带宽），而在响应数据准备好之后，优先将最高优先级的帧发送给客户端。高优先级的流都应该优先发送，但又不会绝对的。绝对地准守，可能又会引入首队阻塞的问题: 高优先级的请求慢导致阻塞其他资源交付</li>
                                <li>分配处理资源和客户端与服务器间的带宽，不同优先级的混合也是必须的。客户端会指定哪个流是最重要的，有一些依赖参数，这样一个流可以依赖另外一个流。优先级别可以在运行时动态改变，当用户滚动页面时，可以告诉浏览器哪个图像是最重要的，你也可以在一组流中进行优先筛选，能够突然抓住重点流</li>
                            </ul>

                            <Text mark>5、服务端推送（Server Push）</Text>
                            <ul>
                                <li>服务器可以对一个客户端请求发送多个响应，服务器向客户端推送资源无需客户端明确地请求。并且，服务端推送能把客户端所需要的资源伴随着index.html一起发送到客户端，省去了客户端重复请求的步骤</li>
                                <li>正因为没有发起请求，建立连接等操作，所以静态资源通过服务端推送的方式可以极大地提升速度。Server Push 让 http1.x 时代使用内嵌资源的优化手段变得没有意义；如果一个请求是由你的主页发起的，服务器很可能会响应主页内容、logo 以及样式表，因为它知道客户端会用到这些东西，这相当于在一个 HTML 文档内集合了所有的资源</li>
                                <li>不过与之相比，服务器推送还有一个很大的优势: 可以缓存！也让在遵循同源的情况下，不同页面之间可以共享缓存资源成为可能</li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="http1.0、1.1、2.0区别" key="2">
                        <Space direction="vertical">
                            <Text mark>http1.0默认是短连接（TCP每次都要经过三次握手，四次挥手）</Text>
                            <Text mark>http1.1默认是持久化连接（建立一次连接，多次请求均由这个连接完成（如果阻塞了，还是会开新的TCP连接的））</Text>
                            <Text mark>http2.0相比http1.x做了哪些升级？多路复用；二进制分帧；服务端推送；数据流优先级；头部压缩</Text>
                            <ul>
                                <li>在http1.0中，发送一次请求时，需要等待服务端响应了才可以继续发送请求</li>
                                <li>在http1.1中，发送一次请求时，不需要等待服务端响应了就可以发送请求了，但是回送数据给客户端的时候，客户端还是需要按照响应的顺序来一一接收（http 1.1提出了管线化（pipelining）理论，但是仅仅是限于理论的阶段上，这个功能默认还是关闭。http2.0中实现了）</li>
                                <li>http2与http1.1最重要的区别就是解决了线头阻塞的问题，其中最重要的改动是: 多路复用（Multiplexing）</li>
                                <li>http2所有性能增强的核心在于新的二进制分帧层（不再以文本格式来传输了），它定义了如何封装http消息并在客户端与服务器之间传输</li>
                                <li>使用HPACK对HTTP/2头部压缩</li>
                                <li>服务器推送</li>
                                <li>流量控制: 针对传输中的流进行控制（TCP默认的粒度是针对连接）</li>
                                <li>流优先级（Stream Priority）它被用来告诉对端哪个流更重要</li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="三次握手、四次挥手" key="3">
                        <Space direction="vertical">
                            <Text mark>三次握手是指建立一个TCP连接的时候，需要客户端和服务端总共发送三个SYN包</Text>
                            <Text mark>进行三次握手的主要作用是为了确认双方的接受和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传输做准备</Text>
                            <Text mark>实质是连接服务器指定端口，建立TCP连接，并同步连接双方的序列号和确认号，交换TCP窗口大小信息</Text>
                            <ul>
                                <li>第一次握手: 客户端发送一个SYN报文，并指明客户端的初始序列号ISN（c），客户端处于SYN_SEND状态</li>
                                <li>第二次握手: 服务端收到客户端发送的SYN报文，会以自己的SYN报文作为应答，并指定自己的初始序列号ISN（s）。同时会把客户端的ISN + 1，作为ACK的值，表示自己收到了客户端发送的SYN，此时服务端处于SYN_REVD状态</li>
                                <li>第三次握手: 客户端收到服务端发送的SYN报文，会将服务端的SYN + 1发送一个ACK报文，表示收到服务端的SYN报文，此时客户端处于ESTABLISHED状态。服务器收到 ACK 报文之后，也处于 ESTABLISHED 状态，此时，双方已建立起了连接</li>
                            </ul>

                            <Text mark>四次挥手是指TCP提供的连接一端在结束发送之后还能接受另一端数据的能力</Text>
                            <Text mark>TCP 的连接的拆除需要发送四个包，因此称为四次挥手（Four-way handshake），客户端或服务器均可主动发起挥手动作。</Text>
                            <ul>
                                <li>第一次挥手: 客户端发送一个FIN报文，报文中会指定一个序列号。此时客户端处于FIN_WAIT1状态</li>
                                <li>第二次挥手: 服务端接收到FIN报文后，会把客户端的序列号 + 1作为ACK报文发送给客户端，表示已收到。此时服务端处于CLOSE_WAIT状态</li>
                                <li>第三次挥手: 如果服务端也想断开连接，和客户端第一次挥手一样，会发送一个FIN报文，指定一个序列号。此时服务端处于LAST_ACK状态</li>
                                <li>第四次挥手: 客户端接收到服务端的FIN报文后，以服务端的序列号 + 1作为一个ACK报文发送给服务端。此时客户端处于TIME_WAIT状态。需要过一阵子以确保服务端收到自己的 ACK 报文之后才会进入 CLOSED 状态，服务端收到 ACK 报文之后，就处于关闭连接了，处于 CLOSED 状态</li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="HTTP3.0" key="4">
                        <Space direction="vertical">
                            <a href="https://blog.csdn.net/wolfGuiDao/article/details/108729560" target="_blank">详解</a>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>前端工程化</Title>
                <ul>
                    <li><Text mark>将系统化的、规范化的、可度量的方法用于前端应用的开发、运行、维护过程</Text></li>
                    <li><Text mark>用工程化方法构建和维护有效的、实用的、高质量的前端应用</Text></li>
                    <li><Text mark>提升开发效率、提升产品质量、降低开发难度、降低企业成本应该是工程化的意义所在</Text></li>
                </ul>
                <Collapse ghost>
                    <Panel header="开发" key="1">
                        <Text mark>框架选型、前后端分离、模块化、组件化、脚手架、组件库、本地开发服务器、Mock服务、微前端</Text>
                    </Panel>
                    <Panel header="构建" key="2">
                        <Text mark>依赖打包、文件压缩、代码分割、增量更新和缓存、资源定位、图标合并、ECMA Script和Babel、CSS预编译和post CSS、持续构建和集成、类库打包、构建优化</Text>
                    </Panel>
                    <Panel header="部署" key="3">
                        <Text mark>持续部署、部署流程设计、静态资源部署策略、Nginx反向代理、SPA路由配置、跨域、https证书、http2.0配置、灰度发布</Text>
                    </Panel>
                    <Panel header="性能" key="4">
                        <Text mark>缓存策略、缓存复用、CDN内容分发网络、按需加载、同步异步加载、请求合并、首屏渲染速度、http2服务器推送、日志性能监控、预加载、性能测试</Text>
                    </Panel>
                    <Panel header="规范" key="5">
                        <Text mark>目录结构规范、编码规范、技术栈规范、前后端接口规范、Commit message规范、GIT分支管理规范、CodeReview规范、设计规范、图标规范、文档规范、版本规范、开发流程规范、发布流程规范</Text>
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

                            <Title level={4}>系统通信: </Title>
                            <ul>
                                <li>进程通信: 通过管道、套接字、信号交互、共享内存、消息队列进行通信</li>
                                <li>线程通信: 线程本身共享内存，指针指向同一个内容</li>
                            </ul>

                            <Title level={4}>node通信: </Title>
                            <ul>
                                <li>node中提供child_process模块来创建子进程（child_process.fork()）</li>
                                <li>cluster.fork()是child_process.fork()的上层实现，cluster的好处是可以监听共享端口</li>
                                <li>node进程的通信主要是通在主从（子）进程之间进行通信，子进程之间无法直接通信，只能通过主进程转发</li>
                                <li>主进程与子进程的通信是通过IPC（Inter Process Communication）进行通信，IPC基于底层libuv根据不同操作系统实现（Windows: 命名管道name pie, linux: Unix Domain Socket）</li>
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

export default frontend


