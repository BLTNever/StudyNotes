import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'



const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Http = () => {
    const history = useHistory()
    const scrollToAnchor = (anchorName: string) => {
        let anchorElement = document.querySelector(anchorName)
        if (anchorElement) { anchorElement.scrollIntoView() }
    }
    useEffect(() => {
        const { location: { hash } } = history
        if (hash.length) scrollToAnchor(hash)
    }, [])
    return (
        <>
            <Wrap>
                <Title level={3}>https和http的区别、http2.0和http1.1的区别</Title>
                <Collapse ghost>
                    <Panel header="https和http的区别" extra="增加了SSL/TLS层、CA证书非对称加密、传输过程对称加密" key="1">
                        <Space direction="vertical">
                            <Text mark>https经由http进行通信，但利用了SSL/TLS来加密数据包</Text>
                            <ul>
                                <li>https传输过程是加密的</li>
                                <li>使用https协议需要用到CA(Certificate Authority)证书</li>
                                <li>https在http使用TCP三次握手建立连接的基础上，要在加上SSL握手需要的9个包，一共12个包</li>
                                <li>http使用80端口，https使用443端口</li>
                                <li>https在传输过程中使用对称加密加密传输数据</li>
                                <li>CA证书校验是非对称加密</li>
                            </ul>
                        </Space>
                    </Panel>

                    <Panel header="http1.0、1.1、2.0区别" key="2" extra="二进制分帧、多路复用、优先级、服务器推送、">
                        <Space direction="vertical">
                            <Text mark>http1.0默认是短连接(TCP每次都要经过三次握手，四次挥手)</Text>
                            <Text mark>http1.1默认是持久化连接(建立一次连接，多次请求均由这个连接完成(如果阻塞了，还是会开新的TCP连接的))</Text>
                            <Text mark>http2.0相比http1.x做了哪些升级？多路复用；二进制分帧；服务端推送；数据流优先级；头部压缩</Text>
                            <ul>
                                <li>在http1.0中，发送一次请求时，需要等待服务端响应了才可以继续发送请求</li>
                                <li>在http1.1中，发送一次请求时，不需要等待服务端响应了就可以发送请求了，但是回送数据给客户端的时候，客户端还是需要按照响应的顺序来一一接收(http 1.1提出了管线化(pipelining)理论，但是仅仅是限于理论的阶段上，这个功能默认还是关闭。http2.0中实现了)</li>
                                <li>http2与http1.1最重要的区别就是解决了线头阻塞的问题，其中最重要的改动是: 多路复用(Multiplexing)</li>
                                <li>http2所有性能增强的核心在于新的二进制分帧层(不再以文本格式来传输了)，它定义了如何封装http消息并在客户端与服务器之间传输</li>
                                <li>使用HPACK对HTTP/2头部压缩</li>
                                <li>服务器推送</li>
                                <li>流量控制: 针对传输中的流进行控制(TCP默认的粒度是针对连接)</li>
                                <li>流优先级(Stream Priority)它被用来告诉对端哪个流更重要</li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="http">
                <Title level={3}>http2.0</Title>
                <Text mark>二进制分帧、多路复用、头部压缩、请求优先级、服务器推送、HPACK算法</Text>
                <Collapse ghost>
                    <Panel header="1、二进制分帧(Binary Format)" key="1" extra="在应用层和传输层中增加一个二进制分帧层，把信息分成更小的帧，采用二进制编码">
                        <Text mark>二进制分帧(Binary Format)- 是http2.0的基石</Text>
                        <ul>
                            <li>http2.0之所以能够突破http1.X标准的性能限制，改进传输性能，实现低延迟和高吞吐量，就是因为其新增了二进制分帧层</li>
                            <li>在应用层(HTTP2.0)和传输层(TCP or UDP)之间增加一个二进制分帧层。在二进制分帧层上，HTTP2.0会将所有传输的信息分为更小的消息和帧，并采用二进制格式编码，其中HTTP1.x的首部信息会被封装到Headers帧，而Request Body则封装到Data帧</li>
                            <li>帧(frame)包含部分: 类型Type, 长度Length, 标记Flags, 流标识Stream和frame payload有效载荷</li>
                            <li>消息(message): 一个完整的请求或者响应，比如请求、响应等，由一个或多个 Frame 组成</li>
                            <li>流是连接中的一个虚拟信道，可以承载双向消息传输。每个流有唯一整数标识符。为了防止两端流ID冲突，客户端发起的流具有奇数ID，服务器端发起的流具有偶数ID</li>
                            <li>流标识是描述二进制frame的格式，使得每个frame能够基于http2发送，与流标识联系的是一个流，每个流是一个逻辑联系，一个独立的双向的frame存在于客户端和服务器端之间的http2连接中。一个http2连接上可包含多个并发打开的流，这个并发流的数量能够由客户端设置</li>
                            <li>在二进制分帧层上，http2.0会将所有传输信息分割为更小的消息和帧，并对它们采用二进制格式的编码将其封装，新增的二进制分帧层同时也能够保证http的各种动词，方法，首部都不受影响，兼容上一代http标准。其中，http1.X中的首部信息header封装到Headers帧中，而request body将被封装到Data帧中</li>
                        </ul>
                    </Panel>

                    <Panel header="2、多路复用 (Multiplexing) / 连接共享" key="2" extra="在新的分帧机制下，H2实现同一个域名下一个TCP建立后，承载多个流的复用">
                        <ul>
                            <li>在http1.1中，浏览器客户端在同一时间，针对同一域名下的请求有一定数量的限制(Chrome: 6个)，超过限制数目的请求会被阻塞。这也是为何一些站点会有多个静态资源 CDN 域名的原因之一</li>
                            <li>http2.0中的多路复用优化了这一性能。多路复用允许同时通过<b>单一的http/2 连接发起多重的请求-响应消息</b>。有了新的分帧机制后，http/2 不再依赖多个TCP连接去实现多流并行了。每个数据流都拆分成很多互不依赖的帧，而这些帧可以交错(乱序发送)，还可以分优先级，最后再在另一端把它们重新组合起来</li>
                            <li>http 2.0 连接都是持久化的，而且客户端与服务器之间也只需要一个连接(每个域名一个连接)即可。http2连接可以承载数十或数百个流的复用，多路复用意味着来自很多流的数据包能够混合在一起通过同样连接传输。当到达终点时，再根据不同帧首部的流标识符重新连接将不同的数据流进行组装</li>
                        </ul>
                    </Panel>

                    <Panel header="3、头部压缩(Header Compression)" key="3" extra="双方各缓存一份头部字段表，避免重复传送。有变化-将变化的部分加入header帧">
                        <ul>
                            <li>http1.x的头带有大量信息，而且每次都要重复发送。http/2使用encoder来减少需要传输的header大小，通讯双方各自缓存一份头部字段表，既避免了重复header的传输，又减小了需要传输的大小</li>
                            <li>对于相同的数据，不再通过每次请求和响应发送，通信期间几乎不会改变通用键-值对(用户代理、可接受的媒体类型，等等)只需发送一次</li>
                            <li>如果首部发生了变化，则只需将变化的部分加入到header帧中，改变的部分会加入到头部字段表中，首部表在 http 2.0 的连接存续期内始终存在，由客户端和服务器共同渐进地更新</li>
                            <li>需要注意的是，http 2.0关注的是首部压缩，而我们常用的gzip等是报文内容(body)的压缩，二者不仅不冲突，且能够一起达到更好的压缩效果</li>
                            <li>http/2使用的是专门为首部压缩而设计的HPACK算法</li>
                        </ul>
                    </Panel>

                    <Panel header="4、请求优先级(Request Priorities)" key="4" extra="每个流带有31比特的优先值">
                        <ul>
                            <li>把http消息分为很多独立帧之后，就可以通过优化这些帧的交错和传输顺序进一步优化性能。每个流都可以带有一个31比特的优先值: 0 表示最高优先级；2的31次方-1 表示最低优先级</li>
                            <li>服务器可以根据流的优先级，控制资源分配(CPU、内存、带宽)，而在响应数据准备好之后，优先将最高优先级的帧发送给客户端。高优先级的流都应该优先发送，但又不会绝对的。绝对地准守，可能又会引入首队阻塞的问题: 高优先级的请求慢导致阻塞其他资源交付</li>
                            <li>分配处理资源和客户端与服务器间的带宽，不同优先级的混合也是必须的。客户端会指定哪个流是最重要的，有一些依赖参数，这样一个流可以依赖另外一个流。优先级别可以在运行时动态改变，当用户滚动页面时，可以告诉浏览器哪个图像是最重要的，你也可以在一组流中进行优先筛选，能够突然抓住重点流</li>
                        </ul>
                    </Panel>

                    <Panel header="5、服务端推送(Server Push)" extra="静态资源通过服务器推送的方式提升速度" key="5">
                        <Space direction="vertical">
                            <ul>
                                <li>服务器可以对一个客户端请求发送多个响应，服务器向客户端推送资源无需客户端明确地请求。并且，服务端推送能把客户端所需要的资源伴随着index.html一起发送到客户端，省去了客户端重复请求的步骤</li>
                                <li>正因为没有发起请求，建立连接等操作，所以静态资源通过服务端推送的方式可以极大地提升速度。Server Push 让 http1.x 时代使用内嵌资源的优化手段变得没有意义；如果一个请求是由你的主页发起的，服务器很可能会响应主页内容、logo 以及样式表，因为它知道客户端会用到这些东西，这相当于在一个 HTML 文档内集合了所有的资源</li>
                                <li>不过与之相比，服务器推送还有一个很大的优势: 可以缓存！也让在遵循同源的情况下，不同页面之间可以共享缓存资源成为可能</li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>TCP</Title>
                <Collapse ghost>
                    <Panel header="三次握手、四次挥手" key="1">
                        <Space direction="vertical">
                            <Text mark>三次握手是指建立一个TCP连接的时候，需要客户端和服务端总共发送三个SYN包</Text>
                            <Text mark>进行三次握手的主要作用是为了确认双方的接受和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传输做准备</Text>
                            <Text mark>实质是连接服务器指定端口，建立TCP连接，并同步连接双方的序列号和确认号，交换TCP窗口大小信息</Text>
                            <ul>
                                <li>第一次握手: 客户端发送一个SYN报文，并指明客户端的初始序列号ISN(c)，客户端处于SYN_SEND状态</li>
                                <li>第二次握手: 服务端收到客户端发送的SYN报文，会以自己的SYN报文作为应答，并指定自己的初始序列号ISN(s)。同时会把客户端的ISN + 1，作为ACK的值，表示自己收到了客户端发送的SYN，此时服务端处于SYN_REVD状态</li>
                                <li>第三次握手: 客户端收到服务端发送的SYN报文，会将服务端的SYN + 1发送一个ACK报文，表示收到服务端的SYN报文，此时客户端处于ESTABLISHED状态。服务器收到 ACK 报文之后，也处于 ESTABLISHED 状态，此时，双方已建立起了连接</li>
                            </ul>

                            <Text mark>四次挥手是指TCP提供的连接一端在结束发送之后还能接受另一端数据的能力</Text>
                            <Text mark>TCP 的连接的拆除需要发送四个包，因此称为四次挥手(Four-way handshake)，客户端或服务器均可主动发起挥手动作。</Text>
                            <ul>
                                <li>第一次挥手: 客户端发送一个FIN报文，报文中会指定一个序列号。此时客户端处于FIN_WAIT1状态</li>
                                <li>第二次挥手: 服务端接收到FIN报文后，会把客户端的序列号 + 1作为ACK报文发送给客户端，表示已收到。此时服务端处于CLOSE_WAIT状态</li>
                                <li>第三次挥手: 如果服务端也想断开连接，和客户端第一次挥手一样，会发送一个FIN报文，指定一个序列号。此时服务端处于LAST_ACK状态</li>
                                <li>第四次挥手: 客户端接收到服务端的FIN报文后，以服务端的序列号 + 1作为一个ACK报文发送给服务端。此时客户端处于TIME_WAIT状态。需要过一阵子以确保服务端收到自己的 ACK 报文之后才会进入 CLOSED 状态，服务端收到 ACK 报文之后，就处于关闭连接了，处于 CLOSED 状态</li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>HTTP3.0</Title>
                <Space direction="vertical">
                    <ul>
                        <li>TCP存在问题: 三次握手四次挥手效率慢、拥塞控制、队头阻塞</li>
                        <li>UDP本身是无连接的、没有建链和拆链成本</li>
                        <li>UDP的数据包无队头阻塞问题</li>
                        <li>UDP改造成本小</li>
                    </ul>
                    <Text mark>基于UDP上改造具备TCP协议的新协议- QUIC协议</Text>
                    <a href="https://blog.csdn.net/wolfGuiDao/article/details/108729560" target="_blank">详解</a>
                </Space>
            </Wrap>

            <Wrap id="CDN">
                <Title level={3}>CDN</Title>
                <Collapse ghost>
                    <Panel header="CDN是什么" key="1" extra="内容分发网络(Content Delivery Network，简称CDN)">
                        <Space direction="vertical">
                            <Text mark>CDN 的工作原理就是将源站的资源缓存到位于全球各地的 CDN 节点上，用户请求资源时，就近返回节点上缓存的资源，而不需要每个用户的请求都回您的源站获取，避免网络拥塞、缓解源站压力，保证用户访问资源的速度和体验</Text>
                            <Text mark>建立并覆盖在承载网之上，由分布在不同区域的边缘节点服务器群组成的分布式网络</Text>
                            <Text mark>将源站内容分发至最接近用户的节点，使用户可就近取得所需内容，提高用户访问的响应速度和成功率。解决因分布、带宽、服务器性能带来的访问延迟问题</Text>
                            <ul>
                                <li>当用户点击网站页面上的内容URL，经过LDNS(本地DNS)系统解析，DNS系统会最终将域名的解析权交给CNAME指向的CDN专用DNS服务器</li>
                                <li>CDN的DNS服务器将CDN的全局负载均衡设备IP地址返回用户</li>
                                <li>用户向CDN的全局负载均衡设备发起内容URL访问请求</li>
                                <li>CDN全局负载均衡设备根据用户IP地址，以及用户请求的内容URL，选择一台用户所属区域的区域负载均衡设备，告诉用户向这台设备发起请求</li>
                                <li>区域负载均衡设备会为用户选择一台合适的缓存服务器提供服务，选择的依据包括：根据用户IP地址，判断哪一台服务器距用户最近；根据用户所请求的URL中携带的内容名称，判断哪一台服务器上有用户所需内容；查询各个服务器当前的负载情况，判断哪一台服务器尚有服务能力。基于以上这些条件的综合分析之后，区域负载均衡设备会向全局负载均衡设备返回一台缓存服务器的IP地址</li>
                                <li>全局负载均衡设备把缓存服务器的IP地址返回给用户</li>
                                <li>用户向缓存服务器发起请求，缓存服务器响应用户请求，将用户所需内容传送到用户终端。如果这台缓存服务器上并没有用户想要的内容，而区域均衡设备依然将它分配给了用户，那么这台服务器就要向它的上一级缓存服务器请求内容，直至追溯到网站的源服务器将内容拉到本地</li>
                            </ul>
                        </Space>
                    </Panel>

                    <Panel header="CDN缓存" key="2" extra="把资源 copy 一份到 CDN 服务器上的过程">
                        <ul>
                            <li>客户端浏览器先检查是否有本地缓存是否过期，如果过期，则向CDN边缘节点发起请求</li>
                            <li>CDN边缘节点会检测用户请求数据的缓存是否过期，如果没有过期，则直接响应用户请求</li>
                            <li>此时一个完成http请求结束</li>
                            <li>如果数据已经过期，那么CDN还需要向源站发出回源请求(back to the source request),拉取最新的数</li>
                        </ul>
                    </Panel>

                    <Panel header="CDN回源" key="3" extra="CDN 发现自己没有这个资源(例如缓存的数据过期)，然后向根服务器(或者它的上层服务器)去要这个资源的过程">
                        <Text mark>回源 host 决定回源请求访问到源站上的具体某个站点</Text>
                        <ul>
                            <li>例子1：源站是域名源站为www.a.com，回源host为www.b.com,那么实际回源是请求到`www.a.com解析到的IP,对应的主机上的站点www.b.com</li>
                            <li>例子2：源站是IP源站为1.1.1.1, 回源host为www.b.com,那么实际回源的是1.1.1.1对应的主机上的站点www.b.com</li>
                        </ul>
                    </Panel>
                    <Panel header="CDN回源函数计算" key="4" extra="">
                        <Text mark>回源请求在配置OSS bucket地址、IP地址、回源域名的情况下，还可以配置函数计算</Text>
                        <ul>
                            <li>CDN回源数据动态处理</li>
                            <li>CDN请求地址处理</li>
                            <li>拉通CDN请求和多类数据处理</li>
                            <li>对请求地址进行鉴权和跳转</li>
                        </ul>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="边缘计算/云计算">
                <Text mark>边缘计算： 在数据源头边缘侧发起的，采用开放平台，就近直接提供最近端的服务。减少了数据在网络上转移的过程，那么所产生的网络服务也会更快</Text>

                <Text mark>云计算： 通过网络，把众多数据计算处理程序分解，通过服务器组成的系统，把这些分解的小程序再处理分析来得到结果</Text>
                <Collapse ghost>
                    <Panel header="边缘计算" key="1">
                        <ul>
                            <li>边缘计算的应用程序是在数据源头边缘侧发起的，减少了数据在网络上转移的过程，那么所产生的网络服务也会更快，在一些行业中的实时业务、应用智能、安全与隐私保护等方面应用都很不错</li>
                            <li>更多的节点来负载流量，使得数据传输速度更快</li>
                            <li>更靠近终端设备，传输更安全，数据处理更即时</li>
                            <li>更分散的节点相比云计算故障所产生的影响更小，还解决了设备散热问题</li>
                            <li>缺点：框架的选用，通讯设备和协议的规范，终端设备的标识，更低延迟的需求</li>
                        </ul>
                    </Panel>
                    <Panel header="云计算" key="2">

                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="WebAssembly">
                <Title level={3}>WebAssembly/wasm 是一个可移植、体积小、加载快并且兼容 Web 的全新格式</Title>
                <a href="https://github.com/mcuking/Awesome-WebAssembly-Applications">wasm应用</a>
                <Collapse ghost>
                    <Panel header="wasm是什么" key="1">
                        <ul>
                            <li>wasm类似于一个跨平台的C语言，但是出于安全因素加了一些限制，比如不能内嵌汇编，不能任意跳转，其抽象程度类似于C语言，所以VM,JIT,AOT都很好做，而且做的也可以很轻量级</li>
                            <li>在浏览器使用非 JavaScript 来完成计算</li>
                            <li>兼容设备会比较多，甚至包括大量低端的IOT设备</li>
                            <li>分发比较容易，reachability很高</li>
                        </ul>
                    </Panel>
                    <Panel header="使用场景" key="2">
                        <ul>
                            <li>用比较低的代码量来扩展现有业务能力(云端、浏览器端)</li>
                            <li>充分使用客户端的计算能力，节约云服务器带宽和计算资源成本(浏览器端)</li>
                            <li>利用 wasm 高性能计算方面带来的优势，解决复杂的计算的执行效率问题(可视化、通用计算场景)</li>
                            <li>快速复用其他语言技术栈道能力，借助容器化的思路快速迭代产品(云端、浏览器端、嵌入式)</li>
                            <li>使用更流行、易于开发维护，或者贴合自己团队的语言来进行产品迭代(嵌入式)</li>
                            <li>前端敏感内容的加密处理(浏览器端)</li>
                        </ul>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Http


