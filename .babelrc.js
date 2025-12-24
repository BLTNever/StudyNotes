module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['>0.2%', 'not dead', 'not op_mini all']
      },
      modules: false
    }],
    ['@babel/preset-react', {
      runtime: 'automatic', // 使用新的 JSX 转换
      development: process.env.NODE_ENV === 'development'
    }],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }]
  ]
};

