import React, { useState, useEffect, forwardRef } from 'react'

import { Tree, Modal, } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import './index.less'

const { TreeNode } = Tree;
interface DataNode {
    backCategoryName: string
    id: string
    backCategoryId: string
    status: number
    level: number
    childBackCategory?: DataNode[]
    checked?: boolean
}
interface IProps {
    onNodeEdit: (arg0: any) => void
    onNodeAdd: (arg0: any) => void
    onSelect: (arg0: any) => void
    treeData: Array<DataNode>
    expandAll: boolean
    searchName: string
    showAdd?: boolean
    showEdit?: boolean
}
function isNum(val: string) {
    if (val === "" || val === null) return false;
    return !isNaN(parseInt(val, 10)) ? true : false;
}

const MyTree = forwardRef((props: IProps, ref: any) => {
    const [visible, setVisible] = useState(false)
    const [expandedKeys, setExpandedKeys] = useState([])
    const handleOk = () => {
        setVisible(false)
    }
    const handleCancel = () => {
        setVisible(false)
    }
    const onNodeEdit = (e: any, item: DataNode) => {
        // e.stopPropagation()
        props.onNodeEdit(item)
    }
    const onNodeAdd = (e: any, item: DataNode) => {
        e.stopPropagation()
        props.onNodeAdd(item)
    }
    const onSelect = (selectedKeys: any) => {
        if (!selectedKeys.length) return
        props.onSelect(selectedKeys[0])
    }
    const filterId = (list: DataNode[]) => {
        if (!list.length) return
        if (!props.searchName.length) return
        const validate = isNum(props.searchName)
        let arr: any = []
        const filter = (list: DataNode[]) => {
            list.forEach((i: any) => {
                if ((validate ? i.backCategoryId : i.backCategoryName) !== props.searchName) {
                    if (i.childBackCategory.length > 0) {
                        filter(i.childBackCategory)
                    }
                    arr.push(i.backCategoryId)
                }
            })
        }
        filter(list)
        return arr
    }
    const renderEditCon = (item: DataNode) => {
        if (!props.showEdit) return null
        return (
            <div className="node-edit-con" >
                {item.level !== 4 && item.status !== 2 ? <PlusCircleOutlined className="node-edit-icon add" onClick={(e) => onNodeAdd(e, item)} /> : null}
            </div>
        )
    }
    const renderTree = (treeData: DataNode[]) => {
        if (!treeData) return;
        return treeData.map((item, key) => {
            if (item.childBackCategory) {
                return (
                    <TreeNode title={(
                        <div className="node-title" onClick={(e) => onNodeEdit(e, item)}>
                            <div className="node-name">{item.backCategoryName}</div>
                            {renderEditCon(item)}
                        </div>
                    )} key={item.backCategoryId}>
                        {renderTree(item.childBackCategory)}
                    </TreeNode>
                )
            } else {
                return (
                    <TreeNode title={(
                        <div className="node-title" onClick={(e) => onNodeEdit(e, item)}>
                            <div className="node-name">{item.backCategoryName}</div>
                            {renderEditCon(item)}
                        </div>
                    )} key={item.backCategoryId} />
                )
            }
        })
    }
    const onExpand = (e: any) => {
        setExpandedKeys(e)
    }
    const resetExpand = () => {
        setExpandedKeys([])
    }
    if (ref) {
        ref.current = { resetExpand }
    }
    useEffect(() => {
        setExpandedKeys([])
        if (props.searchName.length && props.expandAll) {
            const arr = filterId(props.treeData)
            setExpandedKeys(arr)
            console.log(arr)
        }
    }, [props.searchName, props.treeData, props.expandAll])
    const { treeData } = props;
    return (
        <div id="my-tree">
            <Tree showLine={true} onSelect={onSelect}
                className="hide-file-icon"
                expandedKeys={expandedKeys}
                onExpand={onExpand}
                blockNode
            >
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
})

export default MyTree