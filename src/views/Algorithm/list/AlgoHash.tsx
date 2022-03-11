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
                <Title level={3}>数据转换: 数组-树{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="一维数组转成树的结构" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.createTree}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>1. 两数之和{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给一个整数数组nums和一个整数目标值target,在数组中找出两数之和为target的那两个数,返回他们在数组中下标" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.twoNums}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>697.数组的度{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="数组的度的定义是指数组里任一元素出现频数的最大值,在nums中找到与nums拥有相同大小的度的最短连续子数组,返回其长度" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.findShortSubArray}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>705. 设计哈希集合{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="不使用任何内建的哈希表库设计一个哈希集合(HashSet)" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.MyHashSet}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>706. 设计哈希映射{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="不使用任何内建的哈希表库设计一个哈希映射(HashMap)" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.MyHashMap}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>997. 找到小镇的法官{T.EASY}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>小镇里有 n 个人, 按从 1 到 n 的顺序编号。传言称, 这些人中有一个暗地里是小镇法官</li>
                        <li>如果小镇法官真的存在, 那么:
                            <ul>
                                <li>1.小镇法官不会信任任何人</li>
                                <li>2.每个人(除了小镇法官)都信任这位小镇法官</li>
                                <li>3.只有一个人同时满足属性 1 和属性 2 </li>
                            </ul>
                        </li>
                        <li>给你一个数组 trust , 其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人</li>
                        <li>如果小镇法官存在并且可以确定他的身份, 请返回该法官的编号；否则, 返回 -1</li>
                    </ul>} key="1">
                        <Highlight language="javascript">{eg.findJudge}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>811. 子域名访问计数{T.MEDIUM}</Title>
                <Collapse ghost>
                    <Panel header="给你一个 计数配对域名 组成的数组 cpdomains ,解析得到输入中每个子域名对应的 计数配对域名 ,并以数组形式返回。可以按 任意顺序 返回答案。" key="1">
                        <a href="https://leetcode-cn.com/problems/subdomain-visit-count/" target="_blank"></a>
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.subdomainVisits}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>146. LRU 缓存{T.MEDIUM}{T.DOUBLY_NODE}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构</li>
                        <li>LRUCache(int capacity)、int get(int key)、void put(int key, int value)如果插入操作导致关键字数量超过 capacity ,则应该 逐出 最久未使用的关键字</li>
                        <li>函数 get 和 put 必须以 O(1) 的平均时间复杂度运行</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.LRUCache}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>464. 我能赢吗{T.MEDIUM}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>在 &quot;100 game&quot; 这个游戏中,两名玩家轮流选择从 1 到 10 的任意整数,累计整数和,先使得累计整数和 达到或超过  100 的玩家,即为胜者</li>
                        <li>如果我们将游戏规则改为 “玩家 不能 重复使用整数” 呢？</li>
                        <li>给定两个整数 maxChoosableInteger (整数池中可选择的最大数)和 desiredTotal(累计和),若先出手的玩家是否能稳赢则返回 true ,否则返回 false 。假设两位玩家游戏时都表现 最佳</li>
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


/**
 * 
 * @param maxChoosableInteger 整数池中可选择的最大数
 * @param desiredTotal 累计和
 */
function canIWin(maxChoosableInteger: number, desiredTotal: number) {
    // 累积和 小于 最大数,直接拿就可以赢
    if (desiredTotal <= maxChoosableInteger) return true
    // [1, maxChoosableInteger]区间的和
    let sum = (1 + maxChoosableInteger) * maxChoosableInteger / 2
    // 整数池中的和加起来也小于累计和, 肯定输
    if (sum < desiredTotal) return false

    // let dp = {}
    // function dfs(total: number, state: number) {
    //     if (dp[state] !== undefined) return dp[state]
    //     for (let i = 1; i <= maxChoosableInteger; i++) {
    //         let cur = 1 << i
    //         if (state && cur) continue                       // 已经抽过这个数
    //         if (i >= total) return (dp[state] = true)        // 直接获胜
    //         if (!dfs(total - i, state || cur)) return (dp[state] = true) // 可以让对方输

    //     }
    //     return (dp[state] = false)                      // 没有任何让对方输的方法
    // }
    // return dfs(desiredTotal, 0)
    let map = new Map()
    function dfs(total: number, state: number) {
        if (total <= 0) return false
        console.log('map>>>', map)
        console.log('state>>>', state)
        if (map.has(state)) return map.get(state) === 1
        for (let i = 1; i <= maxChoosableInteger; i++) {
            let cur = 1 << i
            console.log('cur>>>', cur)
            if (state && cur) continue
            console.log(total, i)
            // if (i >= total) return true
            if (!dfs(total - i, state || cur)) {
                map.set(state, 1)
                return true
            }
        }
        map.set(state, -1)
        return false
    }
    return dfs(desiredTotal, 0)
}

try {
    // console.log(canIWin(10, 40))
} catch (error) { }




