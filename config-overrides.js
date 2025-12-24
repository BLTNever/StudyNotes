// 全局相关配置
const {
    override,
    addDecoratorsLegacy,
    addWebpackAlias,
    addWebpackModuleRule
} = require('customize-cra')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const antTheme = require('./config/antTheme')

const isDev = process.env.NODE_ENV === 'development'

const outPutFn = config => {
    const paths = require('react-scripts/config/paths')
    paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist')
    return config
}

const resolvePath = function (dir) {
    return path.join(__dirname, dir)
}

const lessRegex = /\.less$/
const lessModuleRegex = /\.module.less$/
const getStyleLoaders = (mod = false) => {
    return [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: mod ? { localIdentName: '[path][name]__[local]' } : undefined
            }
        },
        {
            loader: 'less-loader',
            options: {
                lessOptions: {
                    javascriptEnabled: true,
                    modifyVars: antTheme.commonTheme
                }
            }
        }
    ]
}

module.exports = override(
    outPutFn(),
    addDecoratorsLegacy(), // 添加修饰器语法支持
    addWebpackAlias({ // 设置别名
        "@": resolvePath("src/"),
        "@utils": resolvePath("/src/utils"),
        "@config": resolvePath("/src/config"),
        "@components": resolvePath("/src/components"),
        "@typings": resolvePath("/src/typings"),
        "@store": resolvePath("/src/store"),
        "@router": resolvePath("/src/router"),
        "@views": resolvePath("/src/views"),
        "@css": resolvePath("/src/assets/css"),
        "@images": resolvePath("/src/assets/images"),
        "@common": resolvePath("/src/common")
    }),
    addWebpackModuleRule({
      test: /\.styl$/,
      use: ['style-loader', 'css-loader', 'stylus-loader'],
    }),
    // Ant Design 5 使用 CSS-in-JS，自动按需加载，无需 babel-plugin-import
)
