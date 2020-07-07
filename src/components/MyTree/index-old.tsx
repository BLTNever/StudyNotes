import React, { useState, useEffect, useCallback, useRef } from 'react'

import {
    Tree,
    Modal,
    Checkbox,
} from 'antd'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'

import './index.less'

const { TreeNode } = Tree;
interface DataNode {
    categoryName: string;
    id: string;
    status: number;
    level: number;
    children?: DataNode[];
    checked?: boolean;
}
const MyTree = (
    props: {
        onNodeEdit: (arg0: any) => void;
        onNodeAdd: (arg0: any) => void;
        onNodeRemove: (arg0: any) => void;
        onSelect: (arg0: any) => void;
        treeData: Array<DataNode>;
        selectId: string;
        showAdd?: boolean;
        showEdit?: boolean;
    }
) => {
    const [visible, setVisible] = useState(false)
    const [item, setItem] = useState({})

    const onNodeRemove = (e: any, item: DataNode) => {
        e.stopPropagation()
        setVisible(true)
        setItem(item)
    }
    const handleOk = () => {
        setVisible(false)
        props.onNodeRemove(item)
    }
    const handleCancel = () => {
        setVisible(false)
    }
    const onNodeEdit = (e: any, item: DataNode) => {
        e.stopPropagation()
        props.onNodeEdit(item.id)
    }
    const onNodeAdd = (e: any, item: DataNode) => {
        e.stopPropagation()
        props.onNodeAdd(item)
    }
    const onSelect = (selectedKeys: any) => {
        props.onSelect(selectedKeys[0])
    }
    const renderEditCon = (item: DataNode) => {
        if (!props.showEdit) return null
        return (
            <div className="node-edit-con" onClick={(e) => onNodeEdit(e, item)}>
                <PlusCircleOutlined className="node-edit-icon add" onClick={(e) => onNodeAdd(e, item)} />
                <MinusCircleOutlined className="node-edit-icon" onClick={(e) => onNodeRemove(e, item)} />
            </div>
        )
    }

    const renderTree = (treeData: DataNode[]) => {
        if (!treeData) return;
        return treeData.map((item, key) => {
            if (item.children) {
                return (
                    <TreeNode title={(
                        <div className={`node-title ${item.id === props.selectId ? 'on-select' : ''}`}>
                            <div className="node-name">{item.categoryName}</div>
                            {renderEditCon(item)}
                        </div>
                    )} key={item.id}>
                        {renderTree(item.children)}
                    </TreeNode>
                )
            } else {
                return (
                    <TreeNode title={(
                        <div className={`node-title ${item.id === props.selectId ? 'on-select' : ''}`}>
                            <div className="node-name">{item.categoryName}</div>
                            {renderEditCon(item)}
                        </div>
                    )} key={item.id} />
                )
            }
        })
    }
    const { treeData, showAdd } = props;
    return (
        <div id="my-tree">
            {/* {
                showAdd ?
                    <div className="add-btn" onClick={(e) => onNodeAdd(e, { level: 1, id: 0 })}>
                        <PlusCircleOutlined /> 新增一级类目
                    </div> : null
            } */}
            <Tree showLine={false} onSelect={onSelect} className="hide-file-icon">
                {renderTree(treeData)}
            </Tree>
            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p style={{ textAlign: 'center' }}>确认要删除该条信息吗？</p>
            </Modal>
        </div>
    )
}

export default MyTree 