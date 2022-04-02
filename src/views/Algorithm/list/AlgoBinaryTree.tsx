import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egBinaryTree'
import * as T from '../config'
const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography
class TreeNode {
    public val: number | null
    public left: TreeNode | null
    public right: TreeNode | null
    public constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
const AlgoBinaryTree = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>二叉树的种类</Title>
                <p>数的种类: 二叉树(每个节点最多含有两个子树)、多叉树</p>
                <ul>
                    <li>1. 完美二叉树(满二叉树): 每个节点都有有2个子树</li>
                    <li>2. 完全二叉树: 除最后一层节点外, 其他层节点都必须要有两个子节点, 并且最后一层节点都要左排列</li>
                    <li>3. 搜索二叉树: 左子树不为空, 则左子树上所有结点的值均小于它的根结点值。右子树不为空,则由子手上所有节点的值均大于它的根节点值</li>
                    <li>4. 平衡二叉搜索树(AVL(Adelson-Velsky and Landi)树): 一棵空树或它的左右两个子树的高度差的绝对值不超过1, 并且左右两个子树都是一棵平衡二叉树</li>
                </ul>
            </Wrap>
            <Wrap>
                <Title level={3}>144.二叉树的前序遍历{T.EASY}🔥🔥</Title>
                <Collapse ghost>
                    <Panel header="给定一个二叉树的根节点 root ,返回它的 前序 遍历。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.preorderTraversal}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>94.二叉树的中序遍历{T.EASY}🔥🔥</Title>
                <Collapse ghost>
                    <Panel header="给定一个二叉树的根节点 root ,返回它的 中序 遍历。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.inorderTraversal}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>145.二叉树的后序遍历{T.EASY}🔥🔥</Title>
                <Collapse ghost>
                    <Panel header="给定一个二叉树的根节点 root ,返回它的 后序 遍历。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.postorderTraversal}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>102. 二叉树的层序遍历{T.MEDIUM}{T.STACK}{T.RECURSION}🔥🔥</Title>
                <Collapse ghost>
                    <Panel header="给你二叉树的根节点 root ,返回其节点值的 层序遍历 。 (即逐层地,从左到右访问所有节点)" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.levelOrder}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>589. N 叉树的前序遍历{T.EASY}{T.RECURSION}{T.STACK}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给定一个 n 叉树的根节点  root ,返回 其节点值的 前序遍历 </li>
                        <li>n 叉树 在输入中按层序遍历进行序列化表示,每组子节点由空值 null 分隔(请参见示例)</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.preorder}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="maxDepth">
                <Title level={3}>104.二叉树的最大深度{T.EASY}🔥</Title>
                <Collapse ghost>
                    <Panel header="给定一个二叉树,找出其最大深度。二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.maxDepth}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="minDepth">
                <Title level={3}>111.二叉树的最小深度{T.EASY}🔥</Title>
                <Collapse ghost>
                    <Panel header="给定一个二叉树,找出其最小深度。最小深度是从根节点到最近叶子节点的最短路径上的节点数量。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.minDepth}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>反转二叉树{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="反转二叉树" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.invertTree}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>112.路径总和{T.EASY}{T.RECURSION}</Title>
                <Collapse ghost>
                    <Panel header="给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ,判断该树中是否存在 根节点到叶子节点 的路径,这条路径上所有节点值相加等于目标和 targetSum 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.hasPathSum}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>108. 将有序数组转换为二叉搜索树{T.EASY}{T.RECURSION}</Title>
                <Collapse ghost>
                    <Panel header="给你一个整数数组 nums ,其中元素已经按 升序 排列,请你将其转换为一棵 高度平衡 二叉搜索树。
                        高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.sortedArrayToBST}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>100. 相同的树{T.EASY}{T.RECURSION}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给你两棵二叉树的根节点 p 和 q ,编写一个函数来检验这两棵树是否相同</li>
                        <li>如果两个树在结构上相同,并且节点具有相同的值,则认为它们是相同的</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.isSameTree}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>98. 验证二叉搜索树{T.MEDIUM}{T.STACK}{T.RECURSION}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <p>给你一个二叉树的根节点 root ,判断其是否是一个有效的二叉搜索树。</p>
                        <li>节点的左子树只包含 小于 当前节点的数</li>
                        <li>节点的右子树只包含 大于 当前节点的数</li>
                        <li>所有左子树和右子树自身必须也是二叉搜索树</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.isValidBST}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>173. 二叉搜索树迭代器{T.MEDIUM}{T.STACK}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <p>实现一个二叉搜索树迭代器类BSTIterator ,表示一个按中序遍历二叉搜索树(BST)的迭代器</p>
                        <li>BSTIterator(TreeNode root) 初始化 BSTIterator 类的一个对象。BST 的根节点 root 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字,且该数字小于 BST 中的任何元素</li>
                        <li>boolean hasNext() 如果向指针右侧遍历存在数字,则返回 true ；否则返回 false </li>
                        <li>int next()将指针向右移动,然后返回指针处的数字</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.BSTIterator}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>662. 二叉树最大宽度{T.MEDIUM}{T.DFS}{T.BFS}❌</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给定一个二叉树,编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树(full binary tree)结构相同,但一些节点为空</li>
                        <li>每一层的宽度被定义为两个端点(该层最左和最右的非空节点,两端点间的null节点也计入长度)之间的长度</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            {/* <Highlight language="javascript">{eg.BSTIterator}</Highlight> */}
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default AlgoBinaryTree


try {
    // console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))
} catch (error) { }

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0

    const left: number = maxDepth(root?.left)
    const right: number = maxDepth(root?.right)
    return Math.max(left, right) + 1
}

function minDepth(root: TreeNode) {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    let min = 0
    if (root.left) min = Math.min(min, minDepth(root.left))
    if (root.right) min = Math.min(min, minDepth(root.right))

    return min + 1
}