# 配置文件更新说明

本文档记录了升级过程中对配置文件的所有修改。

---

## 1. package.json

**文件路径**: `package.json`

### 主要变更

#### 依赖包升级

详见 `dependency-upgrade.md` 文档。

#### 移除的依赖

- `moment` - 改用 `dayjs`
- `antd-dayjs-webpack-plugin` - Ant Design 5 不再需要
- `react-loadable` - 使用 React.lazy 替代
- `babel-eslint` - 使用 @typescript-eslint 替代
- `eslint-loader` - react-scripts 5 内置
- `eslint-plugin-typescript` - 使用 @typescript-eslint 替代
- `@types/redux-thunk` - 项目未使用

---

## 2. tsconfig.json

**文件路径**: `tsconfig.json`

### 变更内容

```json
{
  "compilerOptions": {
    "target": "ES2020",  // 从 "es5" 升级
    "lib": [
      "ES2020",  // 新增
      "dom",
      "dom.iterable"
    ],
    "jsx": "react-jsx"  // 从 "react" 改为 "react-jsx"
  }
}
```

### 变更原因

1. **target: ES2020**
   - 支持更现代的 JavaScript 特性
   - 与 Node 20.18.1 更好地兼容
   - 提升代码性能和可读性

2. **lib: ES2020**
   - 提供 ES2020 的类型定义
   - 支持 Promise.allSettled、optional chaining 等特性

3. **jsx: react-jsx**
   - 使用 React 17+ 的新 JSX 转换
   - 无需在每个文件中导入 React
   - 减少打包体积

---

## 3. config-overrides.js

**文件路径**: `config-overrides.js`

### 变更 1: less-loader 配置更新

**变更前**:

```javascript
{
    loader: 'less-loader',
    options: {
        javascriptEnabled: true,
        modifyVars: antTheme.commonTheme
    }
}
```

**变更后**:

```javascript
{
    loader: 'less-loader',
    options: {
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: antTheme.commonTheme
        }
    }
}
```

**变更原因**:
- less-loader 12.x 要求将 Less 选项放在 `lessOptions` 对象中
- 这是 less-loader 的破坏性变更

### 变更 2: 移除 fixBabelImports

**变更前**:

```javascript
fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
})
```

**变更后**:

```javascript
// Ant Design 5 使用 CSS-in-JS，不再需要 fixBabelImports
// 如果需要按需加载其他库，可以在这里添加
```

**变更原因**:
- Ant Design 5 使用 CSS-in-JS 方案
- 样式自动按需加载，无需配置
- 移除可以减少构建配置复杂度

### 变更 3: 保留 AntdDayjsWebpackPlugin 注释

**说明**:
- 该插件已在之前的版本中被注释掉
- Ant Design 5 默认使用 dayjs，不需要此插件
- 保留注释仅供参考

---

## 4. .eslintrc.js (如果存在)

**文件路径**: `.eslintrc.js`

### 建议更新

如果项目中有 `.eslintrc.js` 文件，建议更新以下配置：

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,  // 更新为 2020
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks'
  ],
  rules: {
    // 自定义规则
  }
}
```

---

## 5. .gitignore

**文件路径**: `.gitignore`

### 当前配置

```
node_modules
npm-debug.log
build
yarn-error.log
package-lock.json
yarn.lock
```

### 建议添加

```
# 添加以下内容
dist
.DS_Store
*.log
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.idea
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# 测试覆盖率
coverage
*.lcov

# 临时文件
.cache
.temp
```

---

## 6. 环境变量配置

### React Scripts 5 变更

React Scripts 5 中环境变量的处理有一些变化：

**推荐创建**: `.env` 文件

```bash
# 开发环境
REACT_APP_ENV=dev
PORT=9999

# API 配置
REACT_APP_API_URL=http://localhost:3000

# 其他自定义变量
REACT_APP_VERSION=$npm_package_version
```

**注意事项**:
1. 所有自定义环境变量必须以 `REACT_APP_` 开头
2. 构建时会将环境变量硬编码到打包文件中
3. 敏感信息不要放在环境变量中

---

## 7. Webpack 配置兼容性

### React Scripts 5 升级到 Webpack 5

React Scripts 5 使用 Webpack 5，以下是主要变更：

#### 1. 模块联邦 (Module Federation)

如果需要使用模块联邦，可以在 `config-overrides.js` 中添加：

```javascript
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

addWebpackPlugin(
    new ModuleFederationPlugin({
        name: 'app',
        remotes: {},
        shared: {
            react: { singleton: true },
            'react-dom': { singleton: true }
        }
    })
)
```

#### 2. 资源模块

Webpack 5 内置了资源模块，无需额外配置 file-loader、url-loader 等。

```javascript
// 自动处理
import logo from './logo.png';
import data from './data.json';
```

#### 3. 缓存优化

Webpack 5 改进了缓存机制，首次构建后，增量构建速度显著提升。

---

## 8. package.json scripts 配置

### 当前配置

```json
{
  "scripts": {
    "start": "cross-env REACT_APP_ENV=dev PORT=9999 react-app-rewired start",
    "build": "cross-env REACT_APP_ENV=prod react-app-rewired build"
  }
}
```

### 建议添加

```json
{
  "scripts": {
    "start": "cross-env REACT_APP_ENV=dev PORT=9999 react-app-rewired start",
    "build": "cross-env REACT_APP_ENV=prod react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject",
    "lint": "eslint src --ext .ts,.tsx,.js,.jsx",
    "lint:fix": "eslint src --ext .ts,.tsx,.js,.jsx --fix",
    "type-check": "tsc --noEmit",
    "analyze": "cross-env ANALYZE=true npm run build"
  }
}
```

---

## 9. 浏览器兼容性配置

### browserslist

当前配置已经很合理，无需修改：

```json
{
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

**说明**:
- 生产环境支持市场份额 > 0.2% 的浏览器
- 开发环境只需支持最新版本的主流浏览器
- 这个配置会影响 Babel 的 polyfill 和 PostCSS 的 autoprefixer

---

## 10. 性能优化配置

### 建议在 config-overrides.js 中添加

```javascript
const webpack = require('webpack');

module.exports = override(
    // ... 现有配置
    
    // 添加性能优化
    (config) => {
        // 生产环境优化
        if (process.env.NODE_ENV === 'production') {
            // 代码分割优化
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors',
                            priority: 10
                        },
                        antd: {
                            test: /[\\/]node_modules[\\/]antd[\\/]/,
                            name: 'antd',
                            priority: 20
                        },
                        react: {
                            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
                            name: 'react',
                            priority: 20
                        }
                    }
                }
            };
        }
        return config;
    }
);
```

---

## 配置文件更新检查清单

升级完成后，请检查以下配置文件：

- [x] package.json - 依赖已更新
- [x] tsconfig.json - TypeScript 配置已更新
- [x] config-overrides.js - Webpack 配置已更新
- [ ] .eslintrc.js - 根据项目需要更新
- [ ] .env - 根据项目需要创建
- [ ] .gitignore - 建议添加更多忽略项

---

## 总结

所有关键配置文件已更新完成，主要变更点：

1. **TypeScript 配置** - 升级到 ES2020，使用新的 JSX 转换
2. **Webpack 配置** - less-loader 选项嵌套，移除 Ant Design 按需加载配置
3. **构建工具** - 升级到 Webpack 5，享受更快的构建速度和更好的缓存

**下一步**: 运行 `npm install` 安装依赖，然后 `npm start` 启动项目进行测试。

