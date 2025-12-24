import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Highlight from '@components/HighLight'
import { Collapse, Typography, Space } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egHash'
import * as T from '../config'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography

const AlgoHash = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const scrollToAnchor = (anchorName: string) => {
        let anchorElement = document.querySelector(anchorName)
        if (anchorElement) { anchorElement.scrollIntoView() }
    }
    useEffect(() => {
        const { hash } = location
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
                <Title level={3}>1. 两数之和{T.EASY}{T.HASH}🔥</Title>
                <Collapse ghost>
                    <Panel header="给一个整数数组nums和一个整数目标值target,在数组中找出两数之和为target的那两个数,返回他们在数组中下标" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.twoNums}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>15. 三数之和{T.MEDIUM}{T.DOUBLE_POINTER}🔥</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给你一个包含 n 个整数的数组 nums, 判断 nums 中是否存在三个元素 a, b, c , 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组</li>
                        <li>注意：答案中不可以包含重复的三元组</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.threeSum}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>18.四数之和{T.MEDIUM}🔥</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给你一个由 n 个整数组成的数组 nums ,和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] (若两个四元组元素一一对应,则认为两个四元组重复): </li>
                        <li>{`0 <= a, b, c, d < n`}</li>
                        <li>a、b、c 和 d 互不相同</li>
                        <li>nums[a] + nums[b] + nums[c] + nums[d] == target</li>
                        <li>你可以按 任意顺序 返回答案 </li>
                    </ul>} key="1">
                        <a href="https://leetcode-cn.com/problems/4sum/"></a>
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.fourSum}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>697.数组的度{T.EASY}{T.HASH}🔥</Title>
                <Collapse ghost>
                    <Panel header="数组的度的定义是指数组里任一元素出现频数的最大值,在nums中找到与nums拥有相同大小的度的最短连续子数组,返回其长度" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.findShortSubArray}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>705. 设计哈希集合{T.EASY}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header="不使用任何内建的哈希表库设计一个哈希集合(HashSet)" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.MyHashSet}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>706. 设计哈希映射{T.EASY}{T.HASH}</Title>
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
                <Title level={3}>剑指 Offer 03.数组中重复的数字{T.EASY}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的, 但不知道有几个数字重复了, 也不知道每个数字重复了几次</li>
                        <li>请找出数组中任意一个重复的数字</li>
                    </ul>} key="1">
                        <Highlight language="javascript">{eg.findRepeatNumber}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2011.执行操作后的变量值{T.EASY}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>存在一种仅支持 4 种操作和 1 个变量 X 的编程语言:</li>
                        <li>++X 和 X++ 使变量 X 的值 加 1</li>
                        <li>--X 和 X-- 使变量 X 的值 减 1</li>
                        <li>最初, X 的值是 0</li>
                        <li>给你一个字符串数组 operations , 这是由操作组成的一个列表, 返回执行所有操作后,  X 的 最终值</li>
                    </ul>} key="1">
                        <Highlight language="javascript">{eg.finalValueAfterOperations}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2053.数组中第 K 个独一无二的字符串{T.EASY}{T.HASH}🔥</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>独一无二的字符串 指的是在一个数组中只出现过 一次 的字符串</li>
                        <li>给你一个字符串数组 arr 和一个整数 k , 请你返回 arr 中第 k 个 独一无二的字符串 。如果 少于 k 个独一无二的字符串, 那么返回 空字符串 </li>
                        <li>注意, 按照字符串在原数组中的 顺序 找到第 k 个独一无二字符串</li>
                    </ul>} key="1">
                        <Highlight language="javascript">{eg.kthDistinct}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2085.统计出现过一次的公共字符串{T.EASY}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header="给你两个字符串数组 words1 和 words2 , 请你返回在两个字符串数组中 都恰好出现一次 的字符串的数目。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.countWords}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>811. 子域名访问计数{T.MEDIUM}{T.HASH}</Title>
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
                <Title level={3}>146. LRU 缓存{T.MEDIUM}{T.DOUBLY_NODE}{T.HASH}</Title>
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
                <Title level={3}>464. 我能赢吗{T.MEDIUM}❌</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>在 &quot;100 game&quot; 这个游戏中,两名玩家轮流选择从 1 到 10 的任意整数,累计整数和,先使得累计整数和 达到或超过  100 的玩家,即为胜者</li>
                        <li>如果我们将游戏规则改为 “玩家 不能 重复使用整数” 呢？</li>
                        <li>给定两个整数 maxChoosableInteger (整数池中可选择的最大数)和 desiredTotal(累计和),若先出手的玩家是否能稳赢则返回 true ,否则返回 false 。假设两位玩家游戏时都表现 最佳</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.canIWin}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>560. 和为 K 的子数组{T.MEDIUM}{T.HASH}{T.PREFIX}🔥</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给你一个整数数组 nums 和一个整数 k , 请你统计并返回 该数组中和为 k 的子数组的个数</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.subarraySum}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>523. 连续的子数组和{T.MEDIUM}{T.HASH}{T.PREFIX}🔥</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给你一个整数数组 nums 和一个整数 k , 编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：
                            <ul>
                                <li>子数组大小 至少为 2</li>
                                <li>子数组元素总和为 k 的倍数</li>
                            </ul>
                        </li>
                        <li>如果存在, 返回 true ；否则, 返回 false </li>
                        <li>如果存在一个整数 n , 令整数 x 符合 x = n * k , 则称 x 是 k 的一个倍数。0 始终视为 k 的一个倍数</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            {/* <Highlight language="javascript">{eg.checkSubarraySum}</Highlight> */}
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>128. 最长连续序列{T.MEDIUM}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给定一个未排序的整数数组 nums , 找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度</li>
                        <li>请你设计并实现时间复杂度为 O(n) 的算法解决此问题</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.longestConsecutive}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>442. 数组中重复的数据{T.MEDIUM}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给你一个长度为 n 的整数数组 nums , 其中 nums 的所有整数都在范围 [1, n] 内, 且每个整数出现 一次 或 两次 。请你找出所有出现 两次 的整数, 并以数组形式返回</li>
                        <li>你必须设计并实现一个时间复杂度为 O(n) 且仅使用常量额外空间的算法解决此问题</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.findDuplicates}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default AlgoHash

try {
    // console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))
} catch (error) { console.log(error) }

/**
 * 前缀和 + hash
 * 满足条件的子数组是(prefix[j] - prefix[i]) % k === 0
 * 使用同余定理：如果对于一个数 m，(a + b) 满足能被 m 整除，那么 a % m 等于 b % m
 * 过记录余数的方法找到 i 和 j
 * 用哈希表来记录余数，当遇到相等的余数，再判断 j - i 是否大于等于2
 */
function checkSubarraySum(nums: number[], k: number) {

}   