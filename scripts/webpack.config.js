const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const antTheme = require('../config/antTheme');

const isDevelopment = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3001;

// 路径解析函数
const resolvePath = (dir) => path.join(__dirname, '..', dir);

// Less 样式加载器配置
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

const getStyleLoaders = (isModule = false) => {
  return [
    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: isModule ? { localIdentName: '[path][name]__[local]' } : false,
        sourceMap: isDevelopment,
      },
    },
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: antTheme.commonTheme,
        },
        sourceMap: isDevelopment,
      },
    },
  ];
};

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  
  // 入口文件
  entry: resolvePath('src/index.tsx'),
  
  // 输出配置
  output: {
    path: resolvePath('dist'),
    filename: isDevelopment ? '[name].js' : '[name].[contenthash:8].js',
    chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[contenthash:8].chunk.js',
    publicPath: '/',
    clean: true,
  },
  
  // 解析配置
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@': resolvePath('src'),
      '@utils': resolvePath('src/utils'),
      '@config': resolvePath('src/config'),
      '@components': resolvePath('src/components'),
      '@typings': resolvePath('src/typings'),
      '@store': resolvePath('src/store'),
      '@router': resolvePath('src/router'),
      '@views': resolvePath('src/views'),
      '@css': resolvePath('src/assets/css'),
      '@images': resolvePath('src/assets/images'),
      '@common': resolvePath('src/common'),
    },
  },
  
  // 模块加载规则
  module: {
    rules: [
      // JavaScript/TypeScript
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
            ],
          },
        },
      },
      
      // CSS
      {
        test: /\.css$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      
      // Less (非模块)
      {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: getStyleLoaders(false),
      },
      
      // Less (CSS模块)
      {
        test: lessModuleRegex,
        use: getStyleLoaders(true),
      },
      
      // Stylus
      {
        test: /\.styl$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader',
        ],
      },
      
      // 图片资源
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
        generator: {
          filename: 'static/images/[name].[hash:8][ext]',
        },
      },
      
      // 字体资源
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name].[hash:8][ext]',
        },
      },
    ],
  },
  
  // 插件配置
  plugins: [
    // HTML 模板
    new HtmlWebpackPlugin({
      template: resolvePath('public/index.html'),
      favicon: resolvePath('public/favicon.ico'),
      inject: true,
      minify: !isDevelopment && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    
    // 环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.REACT_APP_ENV': JSON.stringify(process.env.REACT_APP_ENV || 'dev'),
    }),
    
    // 生产环境下提取 CSS
    !isDevelopment && new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    
    // 模块热替换
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
  
  // 开发服务器配置
  devServer: {
    port: port,
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    static: {
      directory: resolvePath('public'),
      publicPath: '/',
    },
  },
  
  // Source Map
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  
  // 性能优化
  optimization: {
    minimize: !isDevelopment,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10,
        },
        antd: {
          test: /[\\/]node_modules[\\/]antd[\\/]/,
          name: 'antd',
          priority: 20,
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'react',
          priority: 20,
        },
      },
    },
    runtimeChunk: {
      name: 'runtime',
    },
  },
  
  // 性能提示
  performance: {
    hints: isDevelopment ? false : 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  
  // 统计信息
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  },
}
