# React Router v6 迁移脚本说明

## 需要批量替换的文件

以下文件使用了旧的 React Router v5 API，需要更新：

### 使用 `useHistory` 的文件（需要改为 `useNavigate`）:

1. src/views/Js/list/Reference.tsx
2. src/views/Interview/list/record.tsx
3. src/views/Interview/list/Http.tsx
4. src/views/Examination/list/program.tsx
5. src/views/Examination/list/nativeMethod.tsx
6. src/views/Algorithm/list/AlgoString.tsx
7. src/views/Algorithm/list/AlgoStack.tsx
8. src/views/Algorithm/list/AlgoMath.tsx
9. src/views/Algorithm/list/AlgoListNode.tsx
10. src/views/Algorithm/list/AlgoHash.tsx
11. src/views/Algorithm/list/AlgoDp.tsx
12. src/views/Algorithm/list/AlgoDoublePointer.tsx
13. src/views/Algorithm/list/AlgoArray.tsx

## 批量替换规则

### 1. 导入语句替换

```typescript
// 旧的
import { useHistory } from 'react-router-dom'

// 新的
import { useNavigate } from 'react-router-dom'
```

### 2. Hook 使用替换

```typescript
// 旧的
const history = useHistory()

// 新的
const navigate = useNavigate()
```

### 3. 导航方法替换

```typescript
// 旧的
history.push('/path')
history.replace('/path')
history.goBack()
history.go(-1)

// 新的
navigate('/path')
navigate('/path', { replace: true })
navigate(-1)
navigate(-1)
```

### 4. 访问 location 替换

```typescript
// 旧的
const { location } = history

// 新的
import { useLocation } from 'react-router-dom'
const location = useLocation()
```

## 快速替换命令

可以使用以下命令进行批量替换（请先备份！）：

```bash
# 替换 import 语句
find src -name "*.tsx" -type f -exec sed -i '' 's/import { useHistory }/import { useNavigate }/g' {} \;

# 替换变量声明
find src -name "*.tsx" -type f -exec sed -i '' 's/const history = useHistory()/const navigate = useNavigate()/g' {} \;

# 替换 push 方法
find src -name "*.tsx" -type f -exec sed -i '' 's/history\.push/navigate/g' {} \;

# 替换 replace 方法
find src -name "*.tsx" -type f -exec sed -i '' 's/history\.replace(\(.*\))/navigate(\1, { replace: true })/g' {} \;

# 替换 goBack 方法
find src -name "*.tsx" -type f -exec sed -i '' 's/history\.goBack()/navigate(-1)/g' {} \;
```

**注意**: 以上命令适用于 macOS/Linux。Windows 用户请使用相应的工具或手动替换。

## 已完成更新的文件

- ✅ src/index.tsx - 更新为 React 18 的 createRoot API
- ✅ src/router/index.tsx - 更新为 React Router v6 的 Routes API
- ✅ src/hooks/useAhchor.tsx - 更新为 useLocation
- ✅ src/components/Layout/index.tsx - 移除 withRouter，使用 useLocation 和 useNavigate
- ✅ tsconfig.json - 更新 jsx 配置为 react-jsx

## 手动检查项

完成批量替换后，需要手动检查以下内容：

1. **动态路由参数**: 如果使用了 `history.location.state`，需要改为 `location.state`
2. **路由守卫**: 检查所有涉及路由跳转的逻辑
3. **Link 组件**: 确保 Link 组件的使用方式正确
4. **测试**: 运行所有测试，确保路由功能正常

