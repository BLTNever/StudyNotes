// 全局相关配置
const {
    override,
    useEslintRc,
    fixBabelImports,
    addLessLoader,
    addDecoratorsLegacy,
    addWebpackAlias,
    addWebpackPlugin,
    disableEsLint,
    addWebpackModuleRule
} = require('customize-cra')
// const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
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
                javascriptEnabled: true,
                modifyVars: antTheme.commonTheme
            }
        }
    ]
}

module.exports = override(
    // disableEsLint(),
    useEslintRc(path.resolve(__dirname, '.eslintrc.js')),
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
        "@redux": resolvePath("/src/redux"),
        "@common": resolvePath("/src/common")
    }),
    addWebpackModuleRule({
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
    }),
    addWebpackModuleRule({
        test: lessRegex,
        exclude: lessModuleRegex,
        use: getStyleLoaders()
    }),
    addWebpackModuleRule({
        test: lessModuleRegex,
        use: getStyleLoaders(true)
    }),
    // addWebpackPlugin(new AntdDayjsWebpackPlugin()),
    fixBabelImports('import', {
        // antd相关配置
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    })
)
