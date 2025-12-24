import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Highlight from '@components/HighLight'
import { Collapse, Typography, Space } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egDoublePointer'
import * as T from '../config'
import * as egStack from './egStack'
const { Panel } = Collapse
const { Title } = Typography

const AlgoDoublePointer = () => {
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
                <Title level={3}>双指针模版</Title>
                <Collapse ghost>
                    <Panel header="快慢指针(读写指针)" key="1">
                        <Highlight language="javascript">{eg.temp1}</Highlight>
                    </Panel>
                    <Panel header="左右端点指针" key="2">
                        <Highlight language="javascript">{eg.temp2}</Highlight>
                    </Panel>
                    <Panel header="固定间距指针(滑动窗口)" key="3">
                        <Highlight language="javascript">{eg.temp3}</Highlight>
                    </Panel>

                    <Panel header="寻找一个数(基本的二分搜索)" key="4">
                        <Highlight>{eg.temp4}</Highlight>
                        <a href="https://leetcode-cn.com/problems/binary-search/solution/er-fen-cha-zhao-xiang-jie-by-labuladong/" target="_blank">详解</a>
                        <ul>
                            <li>{`为什么 while 循环的条件中是 <=, 而不是 <`}
                                <ul>
                                    <li>因为初始化 right 的赋值是 nums.length - 1, 即最后一个元素的索引, 而不是 nums.length</li>
                                    <li>这二者可能出现在不同功能的二分查找中, 区别是: 前者(小于等于)相当于两端都闭区间 [left, right], 后者(小于)相当于左闭右开区间 [left, right), 因为索引大小为 nums.length 是越界的</li>
                                    <li>我们这个算法中使用的是前者 [left, right] 两端都闭的区间。这个区间其实就是每次进行搜索的区间</li>
                                    <li>找到了目标值的时候可以终止, 如果没找到, 就需要 while 循环终止, 然后返回 -1。那 while 循环什么时候应该终止？搜索区间为空的时候应该终止, 意味着你没得找了, 就等于没找到</li>
                                    <li>{`while(left <= right) 的终止条件是 left == right + 1, 写成区间的形式就是 [right + 1, right], 或者带个具体的数字进去 [3, 2], 可见这时候区间为空, 因为没有数字既大于等于 3 又小于等于 2 的吧。所以这时候 while 循环终止是正确的, 直接返回 -1 即可`}</li>
                                    <li>{`while(left < right) 的终止条件是 left == right, 写成区间的形式就是 [left, right], 或者带个具体的数字进去 [2, 2], 这时候区间非空, 还有一个数 2, 但此时 while 循环终止了。也就是说这区间 [2, 2] 被漏掉了, 索引 2 没有被搜索, 如果这时候直接返回 -1 就是错误的`}</li>
                                    <li>{`如果你非要用 while(left < right) 也可以, 知道了出错的原因, 就打个补丁: return nums[left] == target ? left : -1;`}</li>
                                </ul>
                            </li>
                            <li>为什么 left = mid + 1, right = mid - 1, 有的代码是 right = mid 或者 left = mid, 没有这些加加减减, 怎么判断
                                <ul>
                                    <li>刚才明确了「搜索区间」这个概念, 而且本算法的搜索区间是两端都闭的, 即 [left, right]。那么当我们发现索引 mid 不是要找的 target 时</li>
                                    <li>下一步就要去搜索 [left, mid-1] 或者 [mid+1, right], 因为 mid 已经搜索过, 应该从搜索区间中去除</li>
                                </ul>
                            </li>
                        </ul>
                    </Panel>

                    <Panel header="寻找左侧边界的二分搜索" key="5">
                        <Highlight>{eg.temp5}</Highlight>
                        <ul>
                            <li>{`为什么 while 中是 < 而不是 <=`}
                                <ul>
                                    <li>因为 right = nums.length 而不是 nums.length - 1。因此每次循环的「搜索区间」是 [left, right) 左闭右开</li>
                                    <li>{`while(left < right) 终止的条件是 left == right, 此时搜索区间 [left, left] 为空, 所以可以正确终止`}</li>
                                    <li>为啥这里非要写成 nums.length 使得「搜索区间」变成左闭右开呢:因为对于搜索左右侧边界的二分查找, 这种写法比较普遍</li>
                                </ul>
                            </li>
                            <li>为什么没有返回 -1 的操作？如果 nums 中不存在 target 这个值, 怎么办？
                                <ul>
                                    <li>函数的返回值(即 left 变量的值)取值区间是闭区间 [0, nums.length]</li>
                                    <li>如果不存在: nums[left] == target ? left : -1;加一行判断的语句</li>
                                </ul>
                            </li>
                            <li>为什么 left = mid + 1, right = mid
                                <ul>
                                    <li>因为的「搜索区间」是 [left, right) 左闭右开, 所以当 nums[mid] 被检测之后</li>
                                    <li>下一步的搜索区间应该去掉 mid 分割成两个区间, 即 [left, mid) 或 [mid + 1, right)</li>
                                </ul>
                            </li>
                            <li>为什么该算法能够搜索左侧边界
                                <ul>
                                    <li>关键在于对于 nums[mid] == target 这种情况的处理</li>
                                    <li>if (nums[mid] == target) right = mid;</li>
                                    <li>找到 target 时不要立即返回, 而是缩小「搜索区间」的上界 right, 在区间 [left, mid) 中继续搜索, 即不断向左收缩, 达到锁定左侧边界的目的</li>
                                </ul>
                            </li>
                            <li>为什么返回 left 而不是 right: 一样, 因为 while 终止的条件是 left == right</li>
                            <li>当搜索区间两端都闭, [left, right]范围是[0, length - 1]时, while的终止条件是left == right + 1</li>
                        </ul>
                    </Panel>

                    <Panel header="寻找右侧边界的二分查找" key="6">
                        <Highlight>{eg.temp6}</Highlight>
                        <ul>
                            <li>类似寻找左侧边界的算法, 提供两种写法, 常见的左闭右开的写法, 只有两处和搜索左侧边界不同</li>
                            <li>为什么这个算法能够找到右侧边界
                                <ul>
                                    <li>当 nums[mid] == target 时, 不要立即返回, 而是增大「搜索区间」的下界 left, 使得区间不断向右收缩, 达到锁定右侧边界的目的</li>
                                </ul>
                            </li>
                            <li>为什么最后返回 left - 1 而不像左侧边界的函数, 返回 left？而且我觉得这里既然是搜索右侧边界, 应该返回 right 才对
                                <ul>
                                    <li>while 循环的终止条件是 left == right, 所以 left 和 right 是一样的, 你非要体现右侧的特点, 返回 right - 1 也可以</li>
                                    <li>至于为什么要减一, 这是搜索右侧边界的一个特殊点, 关键在 if(nums[mid] === target) l = mid + 1</li>
                                    <li>因为我们对 left 的更新必须是 left = mid + 1, 就是说 while 循环结束时, nums[left] 一定不等于 target 了, 而 nums[left-1] 可能是 target</li>
                                </ul>
                            </li>
                            <li>为什么没有返回 -1 的操作？如果 nums 中不存在 target 这个值, 怎么办
                                <ul>
                                    <li>类似之前的左侧边界搜索, 因为 while 的终止条件是 left == right, 就是说 left 的取值范围是 [0, nums.length], 所以可以添加两行代码, 正确地返回 -1 if(left === 0) return -1;</li>
                                </ul>
                            </li>
                        </ul>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>剑指 Offer 53 - II.0 ~ n-1中缺失的数字{T.EASY}{T.DOUBLE_POINTER}</Title>
                <Collapse ghost>
                    <Panel header="一个长度为n-1的递增排序数组中的所有数字都是唯一的, 并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中, 请找出这个数字。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.missingNumber}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="twoSum">
                <Title level={3}>剑指 Offer 57.和为s的两个数字{T.EASY}{T.DOUBLE_POINTER}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header="输入一个递增排序的数组和一个数字s,在数组中查找两个数,使得它们的和正好是s。如果有多对数字的和等于s,则输出任意一对即可" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.twoSum}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>35.搜索插入位置{T.EASY}{T.DOUBLE_POINTER}</Title>
                <Collapse ghost>
                    <Panel header="给定一个排序数组和一个目标值, 在数组中找到目标值, 并返回其索引。如果目标值不存在于数组中, 返回它将会被按顺序插入的位置。" key="1">
                        <Highlight language="javascript">{eg.searchInsert}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>977.有序数组的平方{T.EASY}{T.DOUBLE_POINTER}</Title>
                <Collapse ghost>
                    <Panel header="给你一个按 非递减顺序 排序的整数数组 nums, 返回 每个数字的平方 组成的新数组, 要求也按 非递减顺序 排序" key="1">
                        <Highlight language="javascript">{eg.sortedSquares}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>剑指 Offer 11.旋转数组的最小数字{T.EASY}{T.DOUBLE_POINTER}{T.BF}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>把一个数组最开始的若干个元素搬到数组的末尾, 我们称之为数组的旋转</li>
                        <li>给你一个可能存在 <i>重复</i> 元素值的数组 numbers , 它原来是一个升序排列的数组, 并按上述情形进行了一次旋转</li>
                        <li>请返回旋转数组的最小元素。例如, 数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转, 该数组的最小值为1</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.minArray}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>153.寻找旋转排序数组中的最小值{T.MEDIUM}{T.DOUBLE_POINTER}{T.BF}🔥</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>已知一个长度为 n 的数组, 预先按照升序排列, 经由 1 到 n 次 旋转 后, 得到输入数组</li>
                        <li>注意, 数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]]</li>
                        <li>给你一个元素值 <i>互不相同</i> 的数组 nums , 它原来是一个升序排列的数组, 并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素</li>
                        <li>你必须设计一个时间复杂度为 O(log n) 的算法解决此问题</li>
                    </ul>} key="1">
                        <Highlight language="javascript">{eg.findMin}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>33. 搜索旋转排序数组{T.MEDIUM}{T.DOUBLE_POINTER}{T.BF}🔥</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>整数数组 nums 按升序排列, 数组中的值 <i>互不相同</i></li>
                        <li>{`在传递给函数之前, nums 在预先未知的某个下标 k(0 <= k < nums.length)上进行了 旋转, 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]](下标 从 0 开始 计数)。例如,  [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2]`}</li>
                        <li>给你 旋转后 的数组 nums 和一个整数 target , 如果 nums 中存在这个目标值 target , 则返回它的下标, 否则返回 -1 </li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.search1}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>81. 搜索旋转排序数组 II{T.MEDIUM}{T.DOUBLE_POINTER}{T.BF}🔥</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>已知存在一个按非降序排列的整数数组 nums <i>不必互不相同</i></li>
                        <li>{`在传递给函数之前, nums 在预先未知的某个下标 k(0 <= k < nums.length)上进行了 旋转, 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]](下标 从 0 开始 计数)。例如,  [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2]`}</li>
                        <li>给你 旋转后 的数组 nums 和一个整数 target , 如果 nums 中存在这个目标值 target , 则返回true, 否则返回 false</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.search2}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>16.最接近的三数之和{T.MEDIUM}{T.DOUBLE_POINTER}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数, 使它们的和与 target 最接近</li>
                        <li>返回这三个数的和</li>
                        <li>假定每组输入只存在恰好一个解</li>
                    </ul>} key="1">
                        <Highlight language="javascript">{eg.threeSumClosest}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="pairSums">
                <Title level={3}>面试题 16.24.数对和{T.MEDIUM}{T.DOUBLE_POINTER}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header="设计一个算法, 找出数组中两数之和为指定值的所有整数对。一个数只能属于一个数对。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.pairSums}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="minEatingSpeed">
                <Title level={3}>875. 爱吃香蕉的珂珂{T.DOUBLE_POINTER}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>珂珂喜欢吃香蕉。这里有 N 堆香蕉, 第 i 堆中有 piles[i] 根香蕉。警卫已经离开了, 将在 H 小时后回来</li>
                        <li>珂珂可以决定她吃香蕉的速度 K (单位: 根/小时)。每个小时, 她将会选择一堆香蕉, 从中吃掉 K 根。如果这堆香蕉少于 K 根, 她将吃掉这堆的所有香蕉, 然后这一小时内不会再吃更多的香蕉</li>
                        <li>珂珂喜欢慢慢吃, 但仍然想在警卫回来前吃掉所有的香蕉</li>
                        <li>返回她可以在 H 小时内吃掉所有香蕉的最小速度 K (K为整数)</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.minEatingSpeed}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="pairSums">
                <Title level={3}>881. 救生艇{T.DOUBLE_POINTER}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给定数组 people 。people[i]表示第 i 个人的体重 , 船的数量不限, 每艘船可以承载的最大重量为 limit</li>
                        <li>每艘船最多可同时载两人, 但条件是这些人的重量之和最多为 limit</li>
                        <li>返回 承载所有人所需的最小船数</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.numRescueBoats}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>202. 快乐数{T.EASY}{T.SLOW_FAST_POINTER}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>编写一个算法来判断一个数 n 是不是快乐数</li>
                        <li>快乐数」 定义为：<ul>
                            <li>对于一个正整数, 每一次将该数替换为它每个位置上的数字的平方和</li>
                            <li>然后重复这个过程直到这个数变为 1, 也可能是 无限循环 但始终变不到 1</li>
                            <li>如果这个过程 结果为 1, 那么这个数就是快乐数</li>
                        </ul></li>
                        <li>如果 n 是 快乐数 就返回 true ；不是, 则返回 false</li>
                    </ul>} key="1">
                        <Highlight language="javascript">{eg.isHappy}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>27.移除元素{T.EASY}{T.SLOW_FAST_POINTER}🔥</Title>
                <Collapse ghost>
                    <Panel header="给你一个数组 nums 和一个值 val, 你需要 原地 移除所有数值等于 val 的元素, 并返回移除后数组的新长度(不要使用额外的数组空间、O(1)空间)" key="1">
                        <Highlight language="javascript">{eg.removeElement}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>26.删除有序数组中的重复项I{T.EASY}{T.SLOW_FAST_POINTER}🔥</Title>
                <Collapse ghost>
                    <Panel header="有序数组 nums , 请你 原地 删除重复出现的元素, 使每个元素 只出现一次 , 返回删除后数组的新长度(不要使用额外的数组空间、O(1)空间)" key="1">
                        <Highlight language="javascript">{eg.removeDuplicates}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>80.删除有序数组中的重复项 II{T.MEDIUM}{T.SLOW_FAST_POINTER}🔥</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>你一个有序数组 nums ,请你 原地 删除重复出现的元素,使每个元素 最多出现两次 ,返回删除后数组的新长度</li>
                        <li>不要使用额外的数组空间,你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成</li>
                    </ul>} key="1">
                        <Highlight language="javascript">{eg.removeDuplicates2}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>287.寻找重复数{T.MEDIUM}{T.SLOW_FAST_POINTER}{T.BF}🔥</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给定一个包含 n + 1 个整数的数组 nums ,其数字都在 [1, n] 范围内(包括 1 和 n),可知至少存在一个重复的整数</li>
                        <li>假设 nums 只有 一个重复的整数 ,返回 这个重复的数 </li>
                        <li>你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.findDuplicate}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>3.无重复字符的最长子串(滑动窗口){T.MEDIUM}{T.SLIGDING_WINDOW}</Title>
                <Collapse ghost>
                    <Panel header="给定一个字符串 s , 请你找出其中不含有重复字符的 最长子串 的长度。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.lengthOfLongestSubstring}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>209.长度最小的子数组(滑动窗口){T.MEDIUM}{T.SLIGDING_WINDOW}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给定一个含有 n 个正整数的数组和一个正整数 target</li>
                        <li>找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]</li>
                        <li>并返回其长度。如果不存在符合条件的子数组, 返回 0</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.minSubArrayLen}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>438. 找到字符串中所有字母异位词{T.MEDIUM}{T.SLIGDING_WINDOW}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给定两个字符串 s 和 p, 找到 s 中所有 p 的 异位词 的子串, 返回这些子串的起始索引。不考虑答案输出的顺序</li>
                        <li>位词 指由相同字母重排列形成的字符串（包括相同的字符串）</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.findAnagrams}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>904. 水果成篮{T.MEDIUM}{T.SLIGDING_WINDOW}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>农场从左到右种植了一排果树。这些树用一个整数数组 fruits 表示, 其中 fruits[i] 是第 i 棵树上的水果 种类</li>
                        <li>你想要尽可能多地收集水果。然而, 农场的主人设定了一些严格的规矩, 你必须按照要求采摘水果：
                            <ul>
                                <li>你只有 两个 篮子, 并且每个篮子只能装 单一类型 的水果。每个篮子能够装的水果总量没有限制</li>
                                <li>你可以选择任意一棵树开始采摘, 你必须从 每棵 树（包括开始采摘的树）上 恰好摘一个水果 。采摘的水果应当符合篮子中的水果类型。每采摘一次, 你将会向右移动到下一棵树, 并继续采摘</li>
                                <li>一旦你走到某棵树前, 但水果不符合篮子的水果类型, 那么就必须停止采摘</li>
                            </ul>
                        </li>
                        <li>给你一个整数数组 fruits , 返回你可以收集的水果的 最大 数目</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.totalFruit}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>930. 和相同的二元子数组{T.MEDIUM}{T.SLIGDING_WINDOW}{T.HASH}{T.PREFIX}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给你一个二元数组 nums , 和一个整数 goal , 请你统计并返回有多少个和为 goal 的 非空 子数组</li>
                        <li>子数组 是数组的一段连续部分</li>
                        <li>nums[i] 不是 0 就是 1</li>
                    </ul>} key="1">
                        <Highlight language="javascript">{eg.numSubarraysWithSum}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>713. 乘积小于K的子数组{T.MEDIUM}{T.SLIGDING_WINDOW}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给定一个正整数数组 nums和整数 k </li>
                        <li>请找出该数组内乘积小于 k 的连续的子数组的个数</li>
                    </ul>} key="1">
                        <Highlight language="javascript">{eg.numSubarrayProductLessThanK}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>1456. 定长子串中元音的最大数目{T.MEDIUM}{T.SLIGDING_WINDOW}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给你字符串 s 和整数 k </li>
                        <li>请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数</li>
                        <li>英文中的 元音字母 为（a, e, i, o, u）</li>
                    </ul>} key="1">
                        <Highlight language="javascript">{eg.maxVowels}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>42.接雨水{T.HARD}{T.DOUBLE_POINTER}{T.DP}{T.MONOTONE_STACK}{T.BF}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>定 n 个非负整数表示每个宽度为 1 的柱子的高度图, 计算按此排列的柱子, 下雨之后能接多少雨水</li>
                        <li>输入: height = [0,1,0,2,1,0,1,3,2,1,2,1]</li>
                        <li>输出: 6</li>
                        <li>解释: 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图, 在这种情况下, 可以接 6 个单位的雨水(蓝色部分表示雨水)</li>
                        <li><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png" /></li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <a href="https://leetcode-cn.com/problems/trapping-rain-water/" target="_blank">题</a>
                            <Highlight language="javascript">{egStack.trap}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default AlgoDoublePointer

try {
    // console.log(numSubarraysWithSum([0, 1, 1, 0, 0], 1))
} catch (error) { }


function minArray(nums: number[], target: number) {
    let [l, r] = [0, nums.length - 1]
    let ans = nums.length
    while (l <= r) {
        let mid = l + ((r - l) >> 1)
        if (target > nums[mid]) {
            l = mid + 1
        } else {
            ans = mid
            r = mid - 1
        }
    }
    return ans
}
