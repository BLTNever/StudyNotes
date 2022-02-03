import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egBinaryTree'
import * as T from '../config'
const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const AlgoBinaryTree = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>144.二叉树的前序遍历{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给定一个二叉树的根节点 root ，返回它的 前序 遍历。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.preorderTraversal}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>94.二叉树的中序遍历{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给定一个二叉树的根节点 root ，返回它的 中序 遍历。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.inorderTraversal}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>145.二叉树的后序遍历{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给定一个二叉树的根节点 root ，返回它的 后序 遍历。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.postorderTraversal}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="maxDepth">
                <Title level={3}>104.二叉树的最大深度{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给定一个二叉树，找出其最大深度。二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.maxDepth}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="minDepth">
                <Title level={3}>111.二叉树的最小深度{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给定一个二叉树，找出其最小深度。最小深度是从根节点到最近叶子节点的最短路径上的节点数量。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.minDepth}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>112.路径总和{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.hasPathSum}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>102. 二叉树的层序遍历{T.MEDIUM}</Title>
                <Collapse ghost>
                    <Panel header="给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.hasPathSum}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>98. 验证二叉搜索树{T.MEDIUM}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <p>给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。</p>
                        <li>节点的左子树只包含 小于 当前节点的数</li>
                        <li>节点的右子树只包含 大于 当前节点的数</li>
                        <li>所有左子树和右子树自身必须也是二叉搜索树</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.hasPathSum}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


        </>
    )
}

export default AlgoBinaryTree

/**
 * 递归，时间复杂度O(n),空间复杂度O(n)
 */
function levelOrder(root: any) {
    if (!root) return []
    let res: any = []
    function helper(node: any, result: any, depth: number) {
        if (!node) return
        if (!Array.isArray(result[depth])) result[depth] = []
        result[depth].push(node.val)
        if (node.left) helper(node.left, result, depth + 1)
        if (node.right) helper(node.right, result, depth + 1)
    }
    helper(root, res, 0)
    return res
}

function isValidBST(root: any) {

}

/**
 * 相同的树
 * @param p 
 * @param q 
 * @returns 
 */
function isSameTree(p: any, q: any): boolean {
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
/**
 * 反转二叉树
 * @param root 
 */
function invertTree(root: any) {
    if (!root) return null
    root.left = invertTree(root.right)
    root.right = invertTree(root.left)
    return root
}


