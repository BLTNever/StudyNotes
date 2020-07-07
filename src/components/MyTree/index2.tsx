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
    categoryId: string;
    status: number;
    level: number;
    children?: DataNode[];
    checked?: boolean;
}
const MyTree: React.FC<{}> = (props: any) => {
    const [visible, setVisible] = useState(false)
    const [item, setItem] = useState({})

    const onNodeRemove = (e: any, item: DataNode[]) => {
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
    const onNodeCheck = (item: DataNode[]) => {
        props.onNodeCheck(item)
    }
    const onNodeEdit = (e: any, item: DataNode[]) => {
        e.stopPropagation()
        props.onNodeEdit(item.categoryId)
    }

    const updateTreeData = (list: DataNode[], categoryId: React.Key, children: DataNode[]): DataNode[] => {
        return list.map(node => {
            if (node.categoryId === categoryId) {
                return {
                    ...node,
                    children,
                };
            } else if (node.children) {
                return {
                    ...node,
                    children: updateTreeData(node.children, categoryId, children),
                };
            }
            return node;
        });
    }
    const onLoadData = ({ categoryId, children }) => {
        return new Promise(resolve => {
            if (children) {
                resolve();
                return;
            }
            setTimeout(() => {
                props.setTreeData(origin =>
                    updateTreeData(origin, categoryId, [
                        { categoryName: '', categoryId: `${categoryId}-0` },
                    ]),
                );

                resolve();
            }, 1000);
        });
    }
    const renderEditCon = (item: DataNode[]) => {
        if (!props.showEdit) return null
        return (
            <div className="node-edit-con" onClick={(e) => onNodeEdit(e, item)}>
                <PlusCircleOutlined className="node-edit-icon add" onClick={(e) => onNodeEdit(e, item)} />
                <MinusCircleOutlined className="node-edit-icon" onClick={(e) => onNodeRemove(e, item)} />
            </div>
        )
    }
    const renderCheckboxCon = (item: DataNode[]) => {
        if (!props.showCheck) return null;
        return (
            <>
                <div className="border-view"></div>
                <div className="check-wrap">
                    <Checkbox checked={item.checked} onChange={() => onNodeCheck(item)} />
                </div>
            </>
        )
    }
    const renderTree = (treeData) => {
        if (!treeData) return;
        return treeData.map((item, key) => {
            const children = item.childBackCategory ? item.childBackCategory : item.childFrontCategory;
            if (children) {
                return (
                    <TreeNode title={(
                        <div className={`node-title ${item.id === props.selectId ? 'on-select' : ''}`}>
                            <div className="node-name">{item.backCategoryName ? item.backCategoryName : item.frontCategoryName}</div>
                            {renderEditCon(item)}
                            {renderCheckboxCon(item)}
                        </div>
                    )} key={item.id}>
                        {renderTree(children)}
                    </TreeNode>
                )
            } else {
                return (
                    <TreeNode title={(
                        <div className={`node-title ${item.id === props.selectId ? 'on-select' : ''}`}>
                            <div className="node-name">{item.backCategoryName ? item.backCategoryName : item.frontCategoryName}</div>
                            {renderEditCon(item)}
                            {renderCheckboxCon(item)}
                        </div>
                    )} key={item.id} />
                )
            }
        })
    }
    const { treeData, showCheck, showAdd } = props;
    return (
        <div id="my-tree">

            <Tree loadData={onLoadData} onSelect={props.onSelect} className={`hide-file-icon ${showCheck ? 'has-check' : ''}`}>
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