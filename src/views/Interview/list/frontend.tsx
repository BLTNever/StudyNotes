import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Popover, Button, PageHeader, Divider, Collapse, Typography, Tag, Space, Tooltip } from 'antd'

import { Wrap } from '@components/Base'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Frontend = () => {
    return (
        <>
            <Wrap>
                <Title level={3}>DOM渲染流程</Title>
                <Text>*关键渲染路径</Text>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>4. 根据 Render Object Tree 计算节点的几何信息并以此进行布局</li>
                    <li>5. 绘制页面需要先构建 Render Layer Tree 以便用正确的顺序展示页面，这棵树的生成与 Render Object Tree 的构建同步进行。然后还要构建 Graphics Layer Tree 来避免不必要的绘制和使用硬件加速渲染，最终才能在屏幕上展示页面</li>
                </ul>
                <Collapse ghost>
                    <Panel header="DOM Tree" key="1" extra="1. 处理 HTML 并构建 DOM Tree">
                        <ul>
                            <li>1. 编码: HTML 原始字节数据转换为文件指定编码的字符串</li>
                            <li>2. 词法分析(标记化)：对输入字符串进行逐字扫描，根据 构词规则 识别单词和符号，分割成一个个我们可以理解的词汇(学名叫 Token )的过程</li>
                            <li>3. 语法分析（解析器）：对 Tokens 应用 HTML 的语法规则，进行配对标记、确立节点关系和绑定属性等操作，从而构建 DOM Tree 的过程</li>
                        </ul>
                    </Panel>
                    <Panel header="CSSOM Tree" key="2" extra="2. 处理 CSS 并构建 CSSOM Tree">
                        <ul>
                            <li>加载: 在构建 DOM Tree 的过程中，如果遇到 link 标记，浏览器就会立即发送请求获取样式文件。当然我们也可以直接使用内联样式或嵌入样式，来减少请求；但是会失去模块化和可维护性，并且像缓存和其他一些优化措施也无效了，利大于弊，性价比实在太低了；除非是为了极致优化首页加载等操作，否则不推荐这样做</li>
                            <li>阻塞: CSS 的加载和解析并不会阻塞 DOM Tree 的构建，因为 DOM Tree 和 CSSOM Tree 是两棵相互独立的树结构。但是这个过程会阻塞页面渲染</li>
                            <li>解析: 词法分析、语法分析</li>
                            <li>css选择器: 选择器命中规则是从右向左匹配，减少大量无效的查询(例：div → p → .red)</li>
                        </ul>
                    </Panel>
                    <Panel header="Render Object Tree" key="3" extra="3. 将DOMTree和CSSOMTree合并成RenderObjectTree,根据RenderObjectTree计算节点的几何信息并以此进行布局">
                        <ul>
                            <li>创建 Render Object</li>
                            <li>布局（重排）: 重新计算位置（转换成实际大小），布局是从 Root Render Object 开始递归的（先计算子节点，再计算父节点）</li>
                            <li>数值类型: 所有相对的测量值（rem、em、百分比...）都必须转换成屏幕上的绝对像素,百分比，则需要乘以父节点宽或高的最大值</li>
                            <li>盒模型: box-sizing,</li>
                        </ul>
                    </Panel>
                    <Panel header="Render Layer Tree" key="4" extra="实现层叠上下文，渲染合成层">
                        <Text mark>缓存策略、缓存复用、CDN内容分发网络、按需加载、同步异步加载、请求合并、首屏渲染速度、http2服务器推送、日志性能监控、预加载、性能测试</Text>
                    </Panel>
                    <a href="https://zhuanlan.zhihu.com/p/39879808" target="_blank">待补充</a>
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

            </Wrap>
        </>
    )
}

export default Frontend


