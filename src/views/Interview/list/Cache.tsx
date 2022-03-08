
import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Popover, Collapse, Typography, Button, Space } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './example'
const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography
const cacheControl = <ul>
    <li>public: 表示客服端和代理服务器都可以进行缓存</li>
    <li>private: 表示只能客户端缓存</li>
    <li>no-cache: 表示跳过当前的强制缓存，发起http请求，直接进入协商缓存</li>
    <li>no-store: 表示不进行缓存</li>
    <li>s-maxage: 表示针对代理服务器的缓时间</li>
</ul>
const Cache = () => {


    return (
        <>
            <Wrap>
                <Title level={3}>浏览器缓存</Title>
                <Collapse ghost>
                    <Panel header="浏览器缓存机制" extra="强制缓存、协商缓存" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li><Text mark>
                                    1. 浏览器在发送请求时，首先会检查强制缓存(http1.0使用expires，1.1使用<Popover content={cacheControl}><Button>cache-control</Button></Popover>)，如果缓存命中，则不需要发送请求。直接从缓存中获取资源数据
                                </Text></li>
                                <li><Text mark>
                                    2. 若强缓存失效，则发送请求进去协商缓存,服务器通过浏览器请求头<b>last-modified(http1.0, 通过时间点来感知，可能1s内修改多次，此时就不能体现修改。在性能上Last-modified是优于Etag的，Last-Modified仅仅只是记录一个时间点)和etag(http1.1, 通过hash感知，在精度上优于Last-modified的，因为Etag是根据资源文件内容生成的唯一标示，因为能够准确感知到资源文件内容的变化)</b>字段进行检查，若是资源则返回新的资源数据，状态码200，否则返回304
                                </Text></li>
                                <li><Text mark>
                                    3. 当服务器返回304时说明页面使用了这个资源的缓存, 而文档的内容(从上次访问以来或是根据请求条件)并没有发生变化，则服务器应该返回这个304状态码
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
                                        <li>当以上三种缓存都没有命中时，它才会被使用。它只在会话(Session)中存在。一旦会哈结束就被释放，并且缓存的时间也很短暂，在Chrome浏览器中只有五分钟左右，同时它也并非严格执行HTTP头中的缓存指令</li>
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
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>服务器缓存</Title>
                <Text mark>服务器缓存: 服务器缓存是把网页解析在内存中做一个映射，把网页存到硬盘中，当其他用户访问时根据内存中的映射返回缓存的网页</Text>
                {/* <Collapse>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text mark>服务器缓存: 服务器缓存是把网页解析在内存中做一个映射，把网页存到硬盘中，当其他用户访问时根据内存中的映射返回缓存的网页</Text>
                        </Space>
                    </Panel>
                </Collapse> */}
            </Wrap>

            <Wrap>
                <Title level={3}>APP缓存</Title>
                <Collapse ghost>
                    <Panel header="APP三级缓存" extra="网络缓存、本地缓存、内存缓存" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li>网络缓存: 不优先加载，速度慢，浪费流量</li>
                                <li>本地缓存: 次优先加载，速度快</li>
                                <li>内存缓存: 优先加载，速度最快</li>
                            </ul>
                            <Text mark>APP三级缓存等于浏览器缓存，并不是等于三级缓存中的网络缓存</Text>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>Service Work</Title>
                <Collapse ghost>
                    <Panel header="service worker定义" extra="基于web worker,在web worker的基础上增加了离线缓存的能力, 服务器与浏览器之间的代理服务器" key="1">
                        <Space direction="vertical">
                            <Text>一个服务器与浏览器之间的中间人角色，如果网站中注册了service worker那么它可以拦截当前网站所有的请求，进行判断(需要编写相应的判断程序)，如果需要向服务器发起请求的就转给服务器，如果可以直接使用缓存的就直接返回缓存不再转给服务器。从而大大提高浏览体验</Text>
                            <ul>
                                <li>基于web worker(一个独立于JavaScript主线程的独立线程，在里面执行需要消耗大量资源的操作不会堵塞主线程)</li>
                                <li>在web worker的基础上增加了离线缓存的能力</li>
                                <li>本质上充当Web应用程序(服务器)与浏览器之间的代理服务器(可以拦截全站的请求，并作出相应的动作 → 由开发者指定的动作)</li>
                                <li>创建有效的离线体验(将一些不常更新的内容缓存在浏览器，提高访问体验)</li>
                                <li>由事件驱动的,具有生命周期</li>
                                <li>可以访问cache和indexDB</li>
                                <li>支持推送</li>
                                <li>并且可以让开发者自己控制管理缓存的内容以及版本</li>
                            </ul>
                        </Space>
                    </Panel>
                    <Panel header="service worker注意事项" extra="" key="2">
                        <Text mark>SW更新策略:
                            <ul>
                                <li>修改sw.js触发更新
                                    <ul>
                                        <li>为了避免 SW 缓存自己导致死锁无法升级,通常将 sw.js 本身的缓存直接交给 HTTP 服务器缓存</li>
                                        <li>每次进入页面时，浏览器都会进行sw的比对，当sw.js有变化时，就会重新安装加载</li>
                                        <li>更新过程(Soft Update)由浏览器触发，在独立进程中进行的，只有逐字节比对不同时才会启动 更新算法(Update Algorithm)</li>
                                        <li>旧的 service worker 还在运行，新的 service worker 完成安装后会进入 waiting 状态，直到所有已打开的页面都关闭</li>
                                        <li>新服务工作线程取得控制权后，将会触发其 activate 事件</li>
                                        <li>在新的 SW.js 里面监听 activate 事件，进行相关资源的删除操作</li>
                                    </ul>
                                </li>
                                <li>特殊缓存: 如果该文件已 24 小时没有更新，当 Update 触发时会强制更新</li>
                                <li>skipWaiting: 让新的 SW “插队”，强制令它立刻取代老的 SW 控制所有页面</li>
                                <li>手动更新: Registration.update()</li>
                            </ul>
                        </Text>
                        <Text mark>静态资源文件更新: SW 的 fetch 阶段使用 caches 进行缓存更新</Text>
                        <Text mark>SW更新策略: 遇到新的sw.js，安装新的，老得进入waiting，提示用户手动刷新，调用skipWaiting</Text>
                        <Text mark>怎么预cache:
                            <ul>
                                <li>在 Service Worker 处于激活状态之前下载和缓存文件。 在 Service Worker 生命周期的“install ”步骤中完成的</li>
                                <li>降级处理的策略逻辑: 监控所有 http 请求，当请求资源已经在缓存里了，直接返回缓存里的内容；否则使用 fetch API 继续请求</li>
                            </ul>
                        </Text>
                        <Text mark>sw存储在哪里的，怎么去控制:
                            <ul>
                                <li>储存在Chache中，这是用来控制缓存专门分离出来的一个对象</li>
                                <li>原则是不在 SW 中缓存 sw.js 自己，让服务器来决定 sw.js 本身的更新</li>
                                <li>浏览器在检查 SW 是否有更新时会遵循该文件的HTTP缓存设置，但每天至少一次</li>
                            </ul>
                        </Text>
                        <Text mark>sw异常怎么处理</Text>
                        <ul>
                            <li>SW运行在worker上下文 → 不能访问DOM</li>
                            <li>它设计为完全异步，同步API(如XHR和localStorage)不能在SW中使用</li>
                            <li>出于安全考量，SWs只能由HTTPS承载</li>
                            <li>在Firefox浏览器的用户隐私模式，SW不可用</li>
                            <li>其生命周期与页面无关(关联页面未关闭时，它也可以退出，没有关联页面时，它也可以启动)</li>
                        </ul>
                    </Panel>
                    <Panel header="service worker使用" extra="navigator.serviceWorker.register('./serviceWorker.js', {scope: './'})" key="4">
                        <Highlight>{eg.useServiceWork}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

        </>
    )
}

export default Cache

