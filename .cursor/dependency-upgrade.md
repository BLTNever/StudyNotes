# 依赖升级文档

## 升级概述

本次升级将项目的所有依赖包升级到与 Node v20.18.1 兼容的最新稳定版本。这是一次重大升级，涉及多个主要版本变更。

**升级日期**: 2025-12-24  
**目标 Node 版本**: v20.18.1  
**包管理器**: npm

---

## 主要依赖升级

### 核心框架

#### React 生态系统
- **React**: `16.13.1` → `18.3.1`
  - 🔴 **破坏性变更**: React 18 引入了新的并发特性和自动批处理
  - **需要注意**: 
    - `ReactDOM.render` 已废弃，需改用 `createRoot`
    - 类型定义有变化，事件处理器类型更严格
    - Suspense 和并发渲染的新特性可用
  
- **React-DOM**: `16.13.1` → `18.3.1`
  - 需要配合 React 18 使用

- **React Scripts**: `3.4.1` → `5.0.1`
  - 升级到支持 Webpack 5 的版本
  - 移除了一些旧的 polyfills
  - 支持 React 18

#### UI 框架

- **Ant Design**: `4.17.2` → `5.22.5`
  - 🔴 **破坏性变更**: Ant Design 5 重大升级
  - **主要变化**:
    - 不再需要 `moment`，完全使用 `dayjs`
    - 不再需要 `antd-dayjs-webpack-plugin`（已移除）
    - CSS-in-JS 解决方案改用 `@ant-design/cssinjs`
    - 部分组件 API 发生变化
    - Form.Item 的 `rules` 验证更严格
    - `less` 变量配置方式改变
  
- **@ant-design/icons**: `4.0.5` → `5.5.2`
  - 配合 Ant Design 5 使用

#### 路由

- **react-router-dom**: `5.1.2` → `6.28.0`
  - 🔴 **破坏性变更**: React Router v6 重大升级
  - **主要变化**:
    - `<Switch>` 改为 `<Routes>`
    - `<Route>` 的 API 完全改变，不再支持 `component` prop
    - 使用 `element` prop 代替
    - `useHistory` 改为 `useNavigate`
    - `useRouteMatch` 被移除
    - 路由配置方式更简洁

#### 状态管理

- **Redux**: `4.0.5` → `5.0.1`
  - 🟡 **轻微破坏性变更**: Redux 5 主要是内部优化
  - 建议使用 Redux Toolkit（未包含在本次升级中）

- **React-Redux**: `7.2.0` → `9.1.2`
  - 完全支持 React 18
  - TypeScript 类型定义改进

#### HTTP 客户端

- **axios**: `0.19.2` → `1.7.9`
  - 🟡 **轻微破坏性变更**: Axios 1.x 版本
  - 改进了 TypeScript 支持
  - 更好的错误处理

---

### 开发依赖升级

#### TypeScript 生态

- **TypeScript**: `3.8.3` → `5.7.2`
  - 🔴 **破坏性变更**: TypeScript 主版本升级
  - **新特性**:
    - 更严格的类型检查
    - 支持装饰器元数据
    - 更好的类型推断
    - `satisfies` 操作符
    - 常量类型参数

- **@typescript-eslint/eslint-plugin**: `2.27.0` → `8.18.1`
- **@typescript-eslint/parser**: `2.27.0` → `8.18.1`
  - 支持 TypeScript 5.x
  - 新增许多规则

#### 测试库

- **@testing-library/react**: `9.3.2` → `16.1.0`
  - 支持 React 18
  - 异步工具函数改进

- **@testing-library/jest-dom**: `4.2.4` → `6.6.3`
- **@testing-library/user-event**: `7.1.2` → `14.5.2`
  - 更真实的用户交互模拟

- **@types/jest**: `25.1.4` → `29.5.14`

#### 构建工具

- **less**: `3.11.1` → `4.2.1`
  - 🟡 **轻微破坏性变更**: Less 4.x
  - 性能改进和 bug 修复

- **less-loader**: `5.0.0` → `12.2.0`
  - 支持 Webpack 5
  - 需要 Less 4.x

- **stylus**: `0.54.7` → `0.63.0`
- **stylus-loader**: `3.0.2` → `8.1.1`
  - 支持 Webpack 5

#### ESLint

- **eslint**: `6.8.0` → `8.57.1`
  - 🟡 **轻微破坏性变更**: ESLint 8.x
  - **注意**: eslint-loader 已被移除（react-scripts 5 不再需要）
  - 新的规则和性能优化

- **eslint-config-alloy**: `3.6.0` → `5.1.2`
- **eslint-plugin-react**: `7.19.0` → `7.37.3`
- **eslint-plugin-react-hooks**: `3.0.0` → `5.0.0`
- **eslint-plugin-html**: `6.0.0` → `8.1.2`
- **eslint-plugin-import**: `2.20.2` → `2.31.0`

#### 其他开发依赖

- **@babel/plugin-proposal-decorators**: `7.8.3` → `7.25.9`
- **cross-env**: `7.0.2` → `7.0.3`
- **customize-cra**: `0.9.1` → `1.0.0`
- **babel-plugin-import**: `1.13.0` → `1.13.8`
- **screenfull**: `3.3.2` → `6.0.2`

---

### 类型定义更新

- **@types/node**: `13.13.6` → `20.17.9` (匹配 Node 20)
- **@types/react**: `16.9.31` → `18.3.18`
- **@types/react-dom**: `16.9.6` → `18.3.5`
- **@types/react-redux**: `7.1.7` → `7.1.34`
- **@types/lodash**: `4.14.154` → `4.17.13`
- **@types/classnames**: `2.2.10` → `2.3.1`
- **@types/screenfull**: `4.1.0` → `5.0.4`
- **@types/react-syntax-highlighter**: `13.5.2` → `15.5.13`

---

### 移除的依赖

以下依赖在新版本中不再需要或已被废弃：

1. **moment** (`2.24.0`) - Ant Design 5 完全使用 dayjs，不再需要 moment
2. **antd-dayjs-webpack-plugin** (`1.0.0`) - Ant Design 5 默认使用 dayjs
3. **react-loadable** (`5.5.0`) - 使用 React.lazy 和 Suspense 代替
4. **babel-eslint** (`10.1.0`) - 已被 @babel/eslint-parser 取代，但 react-scripts 5 内置
5. **eslint-loader** (`3.0.3`) - react-scripts 5 不再使用
6. **eslint-plugin-typescript** (`0.14.0`) - 使用 @typescript-eslint 代替
7. **@types/redux-thunk** (`2.1.0`) - 项目中未使用 redux-thunk

---

## 升级后需要修改的代码

### 1. 入口文件 (src/index.tsx)

**React 18 渲染方式变更**

```typescript
// 旧方式
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// 新方式
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root')!);
root.render(<App />);
```

### 2. React Router 升级

**路由定义变更**

```typescript
// 旧方式 (v5)
import { Switch, Route } from 'react-router-dom';

<Switch>
  <Route path="/home" component={Home} />
  <Route path="/about" component={About} />
</Switch>

// 新方式 (v6)
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

**导航 Hook 变更**

```typescript
// 旧方式
import { useHistory } from 'react-router-dom';
const history = useHistory();
history.push('/home');

// 新方式
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/home');
```

### 3. Ant Design 5 迁移

**ConfigProvider 配置**

```typescript
// 如果使用了 moment，需要移除相关配置
// Ant Design 5 默认使用 dayjs

import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

<ConfigProvider locale={zhCN}>
  <App />
</ConfigProvider>
```

**Form 组件变更**

某些 Form API 可能需要调整，建议查看 [Ant Design 5 迁移文档](https://ant.design/docs/react/migration-v5)

### 4. TypeScript 配置

可能需要更新 `tsconfig.json`：

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true
  }
}
```

---

## 安装步骤

### 1. 清理旧依赖

```bash
# 删除旧的 node_modules 和 lock 文件
rm -rf node_modules package-lock.json

# 清理 npm 缓存（可选）
npm cache clean --force
```

### 2. 安装新依赖

```bash
npm install
```

### 3. 验证安装

```bash
# 检查是否有安装错误
npm list

# 检查过时的包
npm outdated
```

---

## 测试检查清单

升级完成后，需要测试以下功能：

- [ ] 项目能否正常启动 (`npm start`)
- [ ] 项目能否正常构建 (`npm build`)
- [ ] 路由跳转是否正常
- [ ] Ant Design 组件渲染是否正常
- [ ] Form 表单提交是否正常
- [ ] Redux 状态管理是否正常
- [ ] HTTP 请求是否正常
- [ ] 日期选择器等涉及 dayjs 的组件是否正常
- [ ] TypeScript 类型检查是否通过
- [ ] ESLint 检查是否通过

---

## 可能遇到的问题

### 1. React 18 警告

**问题**: 看到关于 `ReactDOM.render` 的警告

**解决**: 按照上述方式修改入口文件使用 `createRoot`

### 2. React Router 错误

**问题**: `Switch is not exported from 'react-router-dom'`

**解决**: 将所有 `Switch` 改为 `Routes`，`component` prop 改为 `element`

### 3. Ant Design 样式问题

**问题**: 组件样式显示异常

**解决**: 
- 检查是否正确引入了样式
- Ant Design 5 使用 CSS-in-JS，确保没有遗留的 less 变量配置冲突

### 4. TypeScript 类型错误

**问题**: 大量类型错误

**解决**:
- 逐步修复，优先修复 React 和 Ant Design 相关的类型
- 使用 `any` 作为临时方案，但应尽快替换

### 5. Webpack 配置问题

**问题**: 自定义的 webpack 配置不工作

**解决**:
- `react-app-rewired` 和 `customize-cra` 已升级
- 检查 `config-overrides.js` 中的配置是否需要更新
- less-loader 配置可能需要调整

---

## 性能优化建议

升级到新版本后，可以利用以下新特性优化性能：

### 1. React 18 并发特性

```typescript
import { useTransition } from 'react';

const [isPending, startTransition] = useTransition();

startTransition(() => {
  // 低优先级更新
  setSearchResults(results);
});
```

### 2. 使用 React.lazy 代替 react-loadable

```typescript
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./Component'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

### 3. Ant Design 5 性能优化

Ant Design 5 的 CSS-in-JS 方案在生产环境中性能更好，无需额外配置。

---

## 参考资源

- [React 18 升级指南](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)
- [React Router v6 迁移指南](https://reactrouter.com/en/main/upgrading/v5)
- [Ant Design 5 迁移文档](https://ant.design/docs/react/migration-v5)
- [TypeScript 5.0 发布说明](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html)
- [Redux 5.0 发布说明](https://github.com/reduxjs/redux/releases/tag/v5.0.0)

---

## 维护说明

本文档应在以下情况更新：

1. 依赖包再次升级时
2. 发现新的破坏性变更时
3. 添加新的依赖包时
4. 修复升级相关问题时

**最后更新**: 2025-12-24

