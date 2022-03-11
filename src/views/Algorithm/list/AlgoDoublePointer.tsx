import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Highlight from '@components/HighLight'
import { Collapse, Typography, Space } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egDoublePointer'
import * as T from '../config'
import * as egStack from './egStack'
const { Panel } = Collapse
const { Title } = Typography

const AlgoDoublePointer = () => {
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
                <Title level={3}>153.寻找旋转排序数组中的最小值{T.MEDIUM}{T.DOUBLE_POINTER}{T.BF}</Title>
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
                <Title level={3}>33. 搜索旋转排序数组{T.MEDIUM}{T.DOUBLE_POINTER}{T.BF}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>整数数组 nums 按升序排列, 数组中的值 <i>互不相同</i></li>
                        <li>{`在传递给函数之前, nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转, 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如,  [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2]`}</li>
                        <li>给你 旋转后 的数组 nums 和一个整数 target , 如果 nums 中存在这个目标值 target , 则返回它的下标, 否则返回 -1 </li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            {/* <Highlight language="javascript">{eg.search}</Highlight> */}
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

            <Wrap>
                <Title level={3}>27.移除元素{T.EASY}{T.SLOW_FAST_POINTER}</Title>
                <Collapse ghost>
                    <Panel header="给你一个数组 nums 和一个值 val, 你需要 原地 移除所有数值等于 val 的元素, 并返回移除后数组的新长度(不要使用额外的数组空间、O(1)空间)" key="1">
                        <Highlight language="javascript">{eg.removeElement}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>26.删除有序数组中的重复项I{T.EASY}{T.SLOW_FAST_POINTER}</Title>
                <Collapse ghost>
                    <Panel header="有序数组 nums , 请你 原地 删除重复出现的元素, 使每个元素 只出现一次 , 返回删除后数组的新长度(不要使用额外的数组空间、O(1)空间)" key="1">
                        <Highlight language="javascript">{eg.removeDuplicates}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>80.删除有序数组中的重复项 II{T.MEDIUM}{T.SLOW_FAST_POINTER}</Title>
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
                <Title level={3}>287.寻找重复数{T.MEDIUM}{T.SLOW_FAST_POINTER}{T.BF}</Title>
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
                <Title level={3}>209.长度最小的子数组(滑动窗口){T.MEDIUM}{T.SLIGDING_WINDOW}</Title>
                <Collapse ghost>
                    <Panel header={`给定一个含有 n 个正整数的数组和一个正整数 target 。
                            找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] , 
                            并返回其长度。如果不存在符合条件的子数组, 返回 0 。`} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.minSubArrayLen}</Highlight>
                        </Space>
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
    let nums = [3, 1]
    let k = 1
    // console.log(search(nums, k))
} catch (error) { }


