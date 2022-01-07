import React from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'



const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview4 = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>webpack构建、优化</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Divider orientation="left"><Title level={4}>webpack核心概念：</Title></Divider>
                        <Space direction="vertical">
                            <Text>webpack是基于enrty的，分析解析entry所需要加载的所有资源文件，通过不同的Loader来处理不同的文件，用Plugin来扩展webpack功能</Text>
                            <ul>
                                <li><Text mark>一、入口（entry）：指示webpack以哪个文件作为入口起点、分析、构建内部依赖图并进行打包</Text></li>
                                <li><Text mark>二、输出（Output）：指示webpack打包后的资源bundles输出到哪里，以及如何命名</Text></li>
                                <li><Text mark>三、Loader: 处理非javascript语言的文件（如图片、css、视音频），webpack只能理解javascript</Text></li>
                                <li><Text mark>四、插件（Plugins）：可用于执行范围更广的任务，插件的范围包括从打包到压缩，一直到定义重新定义环境中的变量</Text></li>
                                <li><Text mark>五、模式（Mode）：指示webpack使用相应模式的配置，如development和production</Text></li>
                            </ul>
                        </Space>

                        <Divider orientation="left"><Title level={4}>webpack的构建流程：</Title></Divider>
                        <Space direction="vertical">

                            <Text>webpack的运行流程是一个串行的过程</Text>
                            <ul>
                                <li><Text mark>1. 初始化参数：<b>从配置文件和shell语句中读取并合并参数</b>，得出最终参数</Text></li>
                                <li><Text mark>2. 开始编译：从第一步得到的参数<b>初始化Compiler对象</b>，<b>加载所有配置的插件（Plugins）</b>，执行<b>Compiler对象的run方法</b>开始执行编译</Text></li>
                                <li><Text mark>3. 确定入口：根据<b>配置中的Entry找到所有的入口文件</b></Text></li>
                                <li><Text mark>4. 编译模块：从入口文件开始，<b>调用所有配置的Loader对模块进行翻译</b>，再找出该模块依赖的模块，再<b>递归</b>本步骤，直到所有入口依赖的文件都经过本步骤的处理</Text></li>
                                <li><Text mark>5. 完成模块编译：在第四部经过Loader翻译完所有模块后，得到<b>每个模块被翻译后的最终内容和它们之间的依赖关系</b></Text></li>
                                <li><Text mark>6. 输出资源：<b>根据Entry和模块之间的依赖关系</b>，组装成一个个包含多个模块的Chunk，再把<b>每个Chunk转换成一个单独的文件加入输出列表</b>，这步是可以修改输出内容的最后机会</Text></li>
                                <li><Text mark>7. 输出完成：在确定好输出内容后，<b>根据配置确定输出的路径和文件名，把文件写入到文件系统</b></Text></li>
                            </ul>
                            <Text mark>以上过程中，webpack会在特定的时间点广播特定的时间，Plugins在监听到相关的事件后会执行特定的逻辑，并且Plugins可以调用webpack的api改变webpack的运行结果</Text>
                        </Space>

                        <Divider orientation="left"><Title level={4}>利用webpack优化前端性能（提高性能和体验）：</Title></Divider>
                        <Space direction="vertical">
                            <Text>用webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运行更快速，更高效</Text>
                            <ul>
                                <li>
                                    <Text mark>压缩代码：删除多余的代码、注释、简化代码写法。还可以利用webpack的<b>UglifyJsPlugin</b>和<b>ParallelUglifyPlugin</b>来压缩JS文件，利用cssnano（css-loader的minimize）</Text>
                                </li>
                                <li>
                                    <Text mark>CDN加速：构建过程中，将静态资源路径修改为CDN上对应的路径。可以用webpack对于output参数和各loader的publicPath参数来修改资源路径</Text>
                                </li>
                                <li>
                                    <Text mark>删除死代码：将代码中永远走不到的片段删掉。可以在启动webpack时追加参数 --optimize-minimize</Text>
                                </li>
                                <li>
                                    <Text mark>提取公共代码</Text>
                                </li>
                            </ul>
                        </Space>

                        <Divider orientation="left"><Title level={4}>提高webpack构建速度：</Title></Divider>
                        <Space direction="vertical">
                            <Title level={4}>优化打包过程</Title>
                            <ul>
                                <li>
                                    <Text mark>通过externals配置来提取常用库（将不常用的第三方库脱离webpack打包，不打入bundle中，减少打包时间）</Text>
                                </li>
                                <li>
                                    <Text mark>利用DllPlugin和DllReferencePlugin预编译资源模块，通过DllPlguin来对那些我们引用但是绝对不会修改的npm包进行预编译，再通过DllReferencePlugin将预编译的模块加载进来</Text>
                                </li>
                                <li>
                                    <Text mark>使用Happypack实现多线程加速编译</Text>
                                </li>
                            </ul>
                            <Title level={4}>优化打包结果</Title>
                            <ul>
                                <li>
                                    <Text mark>多入口情况下，用SplitChunksPlugin（替换了CommonsChunkPlugin）来提取公共代码（抽离公共模块、第三方库、webpack运行文件到一个新的指定文件中）</Text>
                                </li>
                                <li>
                                    <Text mark>使用webpack-uglify-parallel来提升uglifyPlugin的压缩速递，原理上webpack-uglify-parallel采用多核并行压缩来提升压缩速度</Text>
                                </li>
                                <li>
                                    <Text mark>使用Tree-shaing和Scope Hoisting剔除多余代码</Text>
                                </li>
                            </ul>
                        </Space>

                        <Divider orientation="left"><Title level={4}>webpack与gulp区别：</Title></Divider>
                        <Space direction="vertical">
                            <ul>
                                <li>
                                    <Text mark>gulp：强调的是开发的流程，通过配置一系列的task，定义task处理的事务（文件压缩合并、雪碧图、启动server、版本控制），定义执行顺序，让gulp执行task，从而构建前端项目的流程</Text>
                                </li>
                                <li>
                                    <Text mark>webpack：是一个前端模块化方案，侧重模块打包，把开发中所有的资源（图片、JS、CSS）堪称模块，通过loader和plugins对资源进行处理，打包成符合生产环境部署的前端资源</Text>
                                </li>
                                <li>
                                    <Text mark>gulp强调开发流程。webpack强调模块开发。</Text>
                                </li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>





            <Wrap>
                <Title level={3}>webpack热更新</Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Text>webpack热更新</Text>
                            <Text>Hot Module Replacement热更新Server端和Client端的处理工作</Text>
                            <ul>
                                <li>
                                    <Text mark>1. 在webpack的watch模式下，某一文件发生变化，监听变化，根据配置配件重新编译打包，把打包后的代码以对象形式保存在内存中</Text>
                                </li>
                                <li>
                                    <Text mark>2. webpack-dev-server和webpack之间的接口交互，dev-server的中间件webpack-dev-middleware调用webpack暴露的API对代码编码进行监控，并通知webpack，将代码打包到内存中</Text>
                                </li>
                                <li>
                                    <Text mark>3. webpack-dev-serer对静态文件的变化进行监听（devServer.watchContentBase为true），变化后会通知浏览器对应用进行live-reload（浏览器刷新）</Text>
                                </li>
                                <li>
                                    <Text mark>4. 通过sockJs在浏览器和服务端之间建立一个websocket长链接，将webpack编译打包的各个阶段的状态信息告知浏览器，同时也包含第三部Server监听静态文件变化的信息，浏览器根据socket信息进行操作</Text>
                                </li>
                                <li>
                                    <Text mark>5. webpack-dev-server/client端并不能欧请求更新的代码，也不会执行热更新模块操作，而是把这些工作交回webpack，webpack/hot/dev-server的工作就是根据webpack-dev-server/client传给它的信息以及dev-server的配置决定是刷新浏览器还是进行模块热更新</Text>
                                </li>
                                <li>
                                    <Text mark>6. HotModuleReplacement.runtTime是客户端HMR的中枢，接受上一部传递给他的新模块的hash值，通过JsonpMainTemplate.runtime向server端发送Ajax请求，服务端返回一个json，该json包含了所有要更新的模块的hash值，获取到更新列表后，该模块再次通过jsonp请求，获取最新的代码模块</Text>
                                </li>
                                <li>
                                    <Text mark>7. HotModulePlugin将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用 </Text>
                                </li>
                                <li>
                                    <Text mark>8. 当HMR失败后，回退到live reload操作，也就是浏览器刷新来获取最新打包代码</Text>
                                </li>
                            </ul>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default Interview4


