import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import { } from './example'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Vite = () => {

    return (
        <>
            <Wrap>
                <Text>webpack core 是一个纯打包工具（对标 Rollup）,而 Vite 其实是一个更上层的工具链方案,对标的是 （webpack + 针对 web 的常用配置 + webpack-dev-server）</Text>
                <ul>
                    <li>webpack core 因为只针对打包不预设场景,所以设计得极其灵活,不局限于针对 web 打包,几乎所有可配置的环节都做成了可配置的</li>
                    <li>缺点就是配置项极度复杂,插件机制和内部逻辑晦涩难懂,针对常见的 web 也需要大量的配置</li>
                    <li>Webpack 启动后会做一堆事情,经历一条很长的编译打包链条,从入口开始需要逐步经历语法解析、依赖收集、代码转译、打包合并、代码优化,最终将高版本的、离散的源码编译打包成低版本、高兼容性的产物代码,这可满满都是 CPU、IO 操作啊,在 Node 运行时下性能必然是有问题</li>
                    <li>Vite 运行 Dev 命令后只做了两件事情,一是启动了一个用于承载资源服务的 service；二是使用 esbuild 预构建 npm 依赖包。之后就一直躺着,直到浏览器以 http 方式发来 ESM 规范的模块请求时,Vite 才开始“「按需编译」”被请求的模块</li>
                </ul>
            </Wrap>
            <Wrap>
                <Title level={3}>Vite性能优化</Title>
                <Collapse ghost>
                    <Panel header="第一步: 转换代码、 生成依赖" key="1">
                        <Space direction="vertical">
                            <ul>
                                <li>预编译：npm 包这类基本不会变化的模块,使用 Esbuild 在 「预构建」 阶段先打包整理好,减少 http 请求数</li>
                                <li>按需编译：用户代码这一类频繁变动的模块,直到被使用时才会执行编译操作</li>
                                <li>客户端强缓存：请求过的模块会被以 http 头 max-age=31536000,immutable 设置为强缓存,如果模块发生变化则用附加的版本 query 使其失效</li>
                                <li>产物优化：相比于 Webpack ,Vite 直接锚定高版本浏览器,不需要在 build 产物中插入过多运行时与模板代码</li>
                                <li>内置更好的分包实现：不需要用户干预,默认启用一系列智能分包规则,尽可能减少模块的重复打包</li>
                                <li>更好的静态资源处理：Vite 尽量避免直接处理静态资源,而是选择遵循 ESM 方式提供服务,例如引入图片 import img from &apos;xxx.png&apos; 语句,执行后 img 变量只是一个路径字符串</li>
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

export default Vite


