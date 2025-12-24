#!/bin/bash

# React Router v6 迁移批处理脚本
# 将 useHistory 替换为 useNavigate 和 useLocation

FILES=(
    "src/views/Interview/list/Http.tsx"
    "src/views/Examination/list/program.tsx"
    "src/views/Examination/list/nativeMethod.tsx"
    "src/views/Algorithm/list/AlgoString.tsx"
    "src/views/Algorithm/list/AlgoStack.tsx"
    "src/views/Algorithm/list/AlgoMath.tsx"
    "src/views/Algorithm/list/AlgoListNode.tsx"
    "src/views/Algorithm/list/AlgoHash.tsx"
    "src/views/Algorithm/list/AlgoDp.tsx"
    "src/views/Algorithm/list/AlgoDoublePointer.tsx"
    "src/views/Algorithm/list/AlgoArray.tsx"
)

cd /Users/Alec/github/StudyNotes

for file in "${FILES[@]}"; do
    echo "Processing: $file"
    
    # 替换 import 语句
    sed -i '' "s/import { useHistory }/import { useNavigate, useLocation }/g" "$file"
    sed -i '' "s/import { useHistory, /import { useNavigate, useLocation, /g" "$file"
    
    # 替换变量声明
    sed -i '' "s/const history = useHistory()/const navigate = useNavigate()\n    const location = useLocation()/g" "$file"
    
    # 替换 location 访问
    sed -i '' "s/const { location: { hash } } = history/const { hash } = location/g" "$file"
    
    # 替换 push 方法
    sed -i '' "s/history\.push/navigate/g" "$file"
    
    echo "✓ Updated: $file"
done

echo "完成批量更新！"

