import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'

import {
    _reverseList, creteNode,
} from './example'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const AlgoBinaryTree = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>二叉树的中序遍历</Title>
                <Collapse ghost>
                    <Panel header="给定一个二叉树的根节点 root ，返回它的 中序 遍历。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{creteNode}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}></Title>
                <Collapse ghost>
                    <Panel header="" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{creteNode}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default AlgoBinaryTree


/**
 * 二叉树中序遍历（深度优先遍历）， 递归
 * 1. 左子树
 * 2. 中根节点
 * 3. 右子树
 * 4. 无论是前、中、后序遍历，都是先访问根节点，再访问它的左子树，再访问它的右子树
 * @param node 
 */
function inorderTraversal(node: any) {
    // let result = ''
    // if (!node) return
    // result += inorderTraversal(node.left)
    // result += `${node.val}`
    // result += inorderTraversal(node.right)
    // return result
    let result = []
    function inorder(node) {
        if (!node) return
        inorder(node.left) // 遍历左子树
        result.push(node.val) // 压入根节点
        inorder(node.right) // 遍历右子树
    }
    inorder(node)
    return result
}
/**
 * 二叉树中序遍历（深度优先遍历）， 循环
 * 1. 先处理左子树 压入栈中
 * 2. 中根节点
 * 3. 右子树
 * @param node 
 */
function _inorderTraversal(node: any) {
    if (!node) return []
    let result = []
    let stack = []
    while (node || stack?.length) {
        if (node) {          // 指针访问节点，访问到最底层
            stack.push(node) // 将访问的节点依次压进栈
            node = node.left // 指针指向左子树
        }
        node = stack.pop() // 从栈顶取出来要处理的数据
        result.push(node.val) // push到result
        node = node.right // 右
    }
    return result
}


/**
 * 二叉树前序遍历（深度遍历）递归
 * 1. 先处理根节点
 * 2. 左子树
 * 3. 右子树
 * @param node 
 */
function preorderTraversal(node: any) {
    let result = []
    function preorder(node) {
        if (!node) return
        result.push(node.val)
        preorder(node.left)
        preorder(node.right)
    }
    preorder(node)
    // function preorde(node, result) {
    //     if (!node) return
    //     result.push(node.val)
    //     preorde(node.left, result)
    //     preorde(node.right, result)
    // }
    // preorde(node, result)

    return result

}
/**
 * 二叉树前序遍历（深度遍历）遍历
 * 1. 先处理根节点
 * 2. 左子树
 * 3. 右子树
 * 前序遍历： 中左右
 * 压栈顺序： 根 压入stack栈 -> 取出根 压入result栈， 取出right、left 压入stack栈 -> 顶部取出 left 压入result栈 ...等等。 压入result栈的顺序是根 左 右
 * @param node 
 */
function _preorderTraversal(node: any) {
    if (!node) return
    let result = []
    let stack = []
    stack.push(node) // 将跟元素压入栈中
    while (stack?.length) {
        const res = stack.pop()
        result.push(res.val) // 当栈中有数据时，从栈顶部取出数据
        res.right && stack.push(res.right) // 因为栈时先进后出，所以先压入右子树
        res.left && stack.push(res.left)
    }
    return result
}


/**
 * 二叉树后序遍历 （递归）
 * 1. 左子树
 * 2. 右子树
 * 3. 根节点
 * @param node 
 */
function postorderTraversal(node: any) {
    if (!node) return
    let result = []

    function order(node) {
        if (!node) return
        order(node.left)
        order(node.right)
        result.push(node.val)
    }
    order(node)
    return result
}
/**
 * 二叉树后序遍历  循环
 * 1. 左子树
 * 2. 右子树
 * 3. 根节点
 * 压栈顺序A： -> 根 压入stack栈 
 *           -> stack栈顶取出 root根 ，root根的left、right 压入 stack栈顶，root根值 插入 result栈底
 *           -> stack栈顶部取出 right, right根的left、right 压入 stack栈顶。 right根值 插入 result栈底 
 *           -> stack栈顶部取出 left, left根的left、left 压入 stack栈顶。 left根值 插入 result栈底 ...(循环执行)
 *              压入result栈的顺序是左 右 根 
 * 压栈顺序B： -> 根 压入stack栈 
 *           -> stack栈顶取出 root根, root根值 压入 result栈顶, root根的left、right 压入stack 栈顶
 *           -> stack栈顶部取出 right, right根值 压入 result栈顶, right根的left、right压入stack 栈顶 
 *           -> stack栈顶部取出 left, left根值 压入 result栈顶,  left根的left、right压入stack 栈顶 ...(循环执行)
 *              压入result栈的顺序是 根 右 左 需要 reverse
 * @param node 
 */
function _postorderTraversal(node: any) {
    if (!node) return
    let result = []
    let stack = [node]
    while (stack?.length) {
        const res = stack.pop()
        if (!res) return
        //     res.left && stack.push(res.left)
        //     res.right && stack.push(res.right)
        //     result.unshift(res.val)
        result.push(res.val)
        res.left && stack.push(res.left)
        res.right && stack.push(res.right)
    }
    // return result
    return result.reverse()
}