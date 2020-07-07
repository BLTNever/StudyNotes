import React, { useState, useEffect, forwardRef } from 'react'

import { TreeSelect, } from 'antd'
import ypRider from '../../utils/ypRequest'

import './index.less'
const { TreeNode } = TreeSelect

interface IProps {
    api: string
    setCategoryId: (e: string) => void
    categoryId?: any
    disabled?: boolean
}

interface ITreeData {
    backCategoryName: string
    id: string
    backCategoryId: string
    status: number
    level: number
    childBackCategory: ITreeData[] | undefined
    checked?: boolean
}

const MyTreeSelect = forwardRef((props: IProps, ref: any) => {
    const [treeData, setTreeData] = useState<ITreeData[]>([])

    useEffect(() => {
        getTreeData()
    }, [])

    const getTreeData = async () => {
        const url = props.api
        const params = {};
        try {
            const res: any = await ypRider(url, params)
            const { result, success } = res;
            if (success) {
                const { childBackCategory = [] } = result;
                setTreeData(childBackCategory)
            }
        } catch (err) {
            console.log(err)
        }
    }
    // const getData = (id: string | null) => {
    //     return new Promise(async (resolve, reject) => {
    //         const url = apiList.category
    //         const params = { categoryId: id ? parseInt(id, 10) : null }
    //         try {
    //             const res: any = await ypRider(url, params)
    //             const { result, success } = res
    //             if (success) {
    //                 if (!id) {
    //                     setTreeData(result)
    //                 } else {
    //                     resolve(result)
    //                 }
    //             }
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     })
    // }
    // const onLoadTree = (treeNode: any) => {
    //     return new Promise(async (resolve) => {
    //         console.log(treeNode)
    //         const { value }: any = treeNode
    //         const nodeData = await getData(value)
    //         let newTree = [...treeData]
    //         newTree.forEach(item => {

    //         })
    //         console.log(newTree)

    //         // setTreeData(data)
    //         resolve();
    //     })
    // }
    const renderTreeNode = (treeData: ITreeData[]) => {
        if (!treeData) return;
        return treeData.map((item: ITreeData, key: number) => {
            if (item.childBackCategory) {
                return (
                    <TreeNode value={item.backCategoryId} title={item.backCategoryName} key={item.backCategoryId}>
                        {renderTreeNode(item.childBackCategory)}
                    </TreeNode>
                )
            } else {
                return (
                    <TreeNode value={item.backCategoryId} title={item.backCategoryName} key={item.backCategoryId} />
                )
            }
        })
    }
    const onTreeChange = (e: any) => {
        props.setCategoryId(e)
    }
    return (
        <div id="my-tree-select">
            <TreeSelect
                treeDataSimpleMode
                style={{ width: '100%' }}
                value={props.categoryId || undefined}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="请选择商品类目"
                onChange={onTreeChange}
                disabled={props.disabled}
            >
                {renderTreeNode(treeData)}
            </TreeSelect>
        </div>
    )
})

export default MyTreeSelect