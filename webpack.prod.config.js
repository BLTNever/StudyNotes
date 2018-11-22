const config = require('./webpack.config')
const webpack=require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


config.mode = 'production'
config.optimization ={
	minimize:true
}
config.devtool = '#source-map';
config.plugins = [
	...config.plugins,
	// 生产环境打包
	new CleanWebpackPlugin(['dist']), // 删除dist文件
	new webpack.DefinePlugin({
		"process.env":{
			NODE_ENV:JSON.stringify('production')
		}
	}),
	new CompressionWebpackPlugin({ //gzip 压缩
		asset: '[path].gz[query]',
		algorithm: 'gzip',
		test: new RegExp(
			'\\.(js|css)$'    //压缩 js 与 css
		),
		threshold: 10240,
		minRatio: 0.8
	})
]

module.exports = config