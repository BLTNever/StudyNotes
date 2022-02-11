import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Highlight from '@components/HighLight'
import { Collapse, Typography, Space } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egHash'
import * as T from '../config'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography

const AlgoHash = () => {
    const history = useHistory()
    const scrollToAnchor = (anchorName: string) => {
        let anchorElement = document.querySelector(anchorName)
        if (anchorElement) { anchorElement.scrollIntoView() }
    }
    useEffect(() => {
        const { location: { hash } } = history
        if (hash.length) scrollToAnchor(hash)
    }, [])
    return (
        <>
            <Wrap>
                <Title level={3}>1. 两数之和{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给一个整数数组nums和一个整数目标值target，在数组中找出两数之和为target的那两个数，返回他们在数组中下标" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.twoNums}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>697.数组的度{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="数组的度的定义是指数组里任一元素出现频数的最大值，在nums中找到与nums拥有相同大小的度的最短连续子数组，返回其长度" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.findShortSubArray}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>705. 设计哈希集合{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="不使用任何内建的哈希表库设计一个哈希集合（HashSet）" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.MyHashSet}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>706. 设计哈希映射{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="不使用任何内建的哈希表库设计一个哈希映射（HashMap）" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.MyHashMap}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>811. 子域名访问计数{T.MEDIUM}</Title>
                <Collapse ghost>
                    <Panel header="给你一个 计数配对域名 组成的数组 cpdomains ，解析得到输入中每个子域名对应的 计数配对域名 ，并以数组形式返回。可以按 任意顺序 返回答案。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.MyHashMap}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>146. LRU 缓存{T.MEDIUM}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构</li>
                        <li>LRUCache(int capacity)、int get(int key)、void put(int key, int value)如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字</li>
                        <li>函数 get 和 put 必须以 O(1) 的平均时间复杂度运行</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.MyHashMap}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

        </>
    )
}

export default AlgoHash

class ListNode {
    public key: any
    public value: any
    public prev: ListNode | null
    public next: ListNode | null
    public constructor(key?: any, value?: any) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}
class LRUCache {
    private hash: Object
    private count: number
    private capacity: number
    private dummyHead: ListNode
    private dummyTail: ListNode
    private constructor(capacity: number) {
        this.capacity = capacity
        this.hash = {}
        this.dummyHead = new ListNode()
        this.dummyTail = new ListNode()
        this.count = 0
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }
    public put(key: any, value: any) {
        let node = this.hash[key]
        if (node !== null) {
            node.value = value
            this.moveToHead(node)
        } else {

            if (this.count > this.capacity) {
                // this.removeNode()
            }
        }
    }
    public get(key: any) {

    }
    private moveToHead(node: any) {

    }
    private addNode() {

    }
    private removeNode(node: any) {
        let _prev = node.prev            // 暂存node的钱去节点 1(_prev) ⇆ 2(node) ⇆ 3
        let _next = node.next            // 暂存node的后继节点 1 ⇆ 2(node) ⇆ 3(_next)
        _prev.next = _prev               // 
        _next.prev = _next
    }
}



try {
    const cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
    // console.log(subdomainVisits(cpdomains))
} catch (error) { }



