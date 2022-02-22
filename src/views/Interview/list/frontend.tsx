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


