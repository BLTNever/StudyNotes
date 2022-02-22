import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Highlight from '@components/HighLight'
import { Card, Col, Row, Collapse, Typography, Space } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egArray'
import * as T from '../config'

const { Panel } = Collapse
const { Title, } = Typography

const AlgoArray = () => {
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
                <Title level={3}>旋转数组/字符串</Title>
                <Collapse ghost>
                    <Panel header="给定一个数组/字符串，将数组/字符串中的元素向右移动 k 个位置，其中 k 是非负数" key="1">
                        <Space><Highlight language="javascript">{eg.rotate}</Highlight></Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>53.最大子数组和</Title>
                <Collapse ghost>
                    <Panel header="给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和" key="1">
                        <Space><Highlight language="javascript">{eg.maxSubArray}</Highlight></Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>88.合并两个有序数组{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组" key="1">
                        <Row gutter={24}>
                            <Col span={12}><Card><Highlight language="javascript">{eg._merge1}</Highlight></Card></Col>
                            <Col span={12}><Card><Highlight language="javascript">{eg._merge2}</Highlight></Card></Col>
                        </Row>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>26.删除有序数组中的重复项I{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度（不要使用额外的数组空间、O(1)空间）" key="1">
                        <Highlight language="javascript">{eg.removeDuplicates}</Highlight>

                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>27.移除元素{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度（不要使用额外的数组空间、O(1)空间）" key="1">
                        <Highlight language="javascript">{eg.removeElement}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>35.搜索插入位置{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。" key="1">
                        <Highlight language="javascript">{eg.searchInsert}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>1984.学生分数的最小差值{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个 下标从 0 开始 的整数数组 nums ，其中 nums[i] 表示第 i 名学生的分数。另给你一个整数 k 。
                            从数组中选出任意 k 名学生的分数，使这 k 个分数间 最高分 和 最低分 的 差值 达到 最小化 。
                            返回可能的 最小差值 。" key="1">
                        <Highlight language="javascript">{eg.minimumDifference}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>1991.找到数组的中间位置{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个下标从 0 开始的整数数组 nums ，请你找到 最左边 的中间位置 middleIndex （也就是所有可能中间位置下标最小的一个）。
                            中间位置middleIndex 是满足 nums[0] + nums[1] + ...+ nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ...+ nums[nums.length-1] 的数组下标。
                            如果middleIndex == 0 ，左边部分的和定义为 0 。类似的，如果 middleIndex == nums.length - 1 ，右边部分的和定义为 0 。
                            请你返回满足上述条件 最左边 的 middleIndex ，如果不存在这样的中间位置，请你返回 -1 。。" key="1">
                        <Highlight language="javascript">{eg.findMiddleIndex}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>1995.统计特殊四元组{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个 下标从 0 开始 的整数数组 nums ，返回满足下述条件的 不同 四元组 (a, b, c, d) 的 数目 : 
                            nums[a] + nums[b] + nums[c] == nums[d],
                            且 a < b < c < d" key="1">
                        <Highlight language="javascript">{eg.countQuadruplets}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2006.差的绝对值为 K 的数对数目{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个整数数组 nums 和一个整数 k ，请你返回数对 (i, j) 的数目，满足 i < j 且 |nums[i] - nums[j]| == k 。" key="1">
                        <Highlight language="javascript">{eg.countKDifference}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2011.执行操作后的变量值{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="存在一种仅支持 4 种操作和 1 个变量 X 的编程语言: 
                        ++X 和 X++ 使变量 X 的值 加 1
                        --X 和 X-- 使变量 X 的值 减 1
                        最初，X 的值是 0
                        给你一个字符串数组 operations ，这是由操作组成的一个列表，返回执行所有操作后， X 的 最终值 。" key="1">
                        <Highlight language="javascript">{eg.finalValueAfterOperations}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2016.增量元素之间的最大差值{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个下标从 0 开始的整数数组 nums ，该数组的大小为 n ，请你计算 nums[j] - nums[i] 能求得的 最大差值 ，其中 0 <= i < j < n 且 nums[i] < nums[j] 。
                        返回 最大差值 。如果不存在满足要求的 i 和 j ，返回 -1 。" key="1">
                        <Highlight language="javascript">{eg.maximumDifference}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2022.将一维数组转变成二维数组{T.EASY}{T.MATRIX}</Title>
                <Collapse ghost>
                    <Panel header="给你一个下标从 0 开始的一维整数数组 original 和两个整数 m 和  n 。你需要使用 original 中 所有 元素创建一个 m 行 n 列的二维数组。
                            original 中下标从 0 到 n - 1 （都 包含 ）的元素构成二维数组的第一行，下标从 n 到 2 * n - 1 （都 包含 ）的元素构成二维数组的第二行，依此类推。
                            请你根据上述过程返回一个 m x n 的二维数组。如果无法构成这样的二维数组，请你返回一个空的二维数组。" key="1">
                        <Highlight language="javascript">{eg.construct2DArray}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2032.至少在两个数组中出现的值{T.EASY}{T.ARRAY}</Title>
                <Collapse ghost>
                    <Panel header="给你三个整数数组 nums1、nums2 和 nums3 ，请你构造并返回一个 与这三个数组都不同的 数组，且由 至少 在 两个 数组中出现的所有值组成。数组中的元素可以按 任意 顺序排列。" key="1">
                        <Highlight language="javascript">{eg.twoOutOfThree}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2037.使每位学生都有座位的最少移动次数{T.EASY}{T.SORT}</Title>
                <Collapse ghost>
                    <Panel header="一个房间里有 n 个座位和 n 名学生，房间用一个数轴表示。给你一个长度为 n 的数组 seats ，其中 seats[i] 是第 i 个座位的位置。同时给你一个长度为 n 的数组 students ，其中 students[j] 是第 j 位学生的位置。
                            你可以执行以下操作任意次: 
                            增加或者减少第 i 位学生的位置，每次变化量为 1 （也就是将第 i 位学生从位置 x 移动到 x + 1 或者 x - 1）
                            请你返回使所有学生都有座位坐的 最少移动次数 ，并确保没有两位学生的座位相同。
                            请注意，初始时有可能有多个座位或者多位学生在 同一 位置。" key="1">
                        <Highlight language="javascript">{eg.minMovesToSeat}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2053.数组中第 K 个独一无二的字符串{T.EASY}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header={`独一无二的字符串 指的是在一个数组中只出现过 一次 的字符串。
                            给你一个字符串数组 arr 和一个整数 k ，请你返回 arr 中第 k 个 独一无二的字符串 。如果 少于 k 个独一无二的字符串，那么返回 空字符串 "" 。
                            注意，按照字符串在原数组中的 顺序 找到第 k 个独一无二字符串。`} key="1">
                        <Highlight language="javascript">{eg.kthDistinct}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2057.值相等的最小索引{T.EASY}{T.ARRAY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个下标从 0 开始的整数数组 nums ，返回 nums 中满足 i mod 10 == nums[i] 的最小下标 i ；如果不存在这样的下标，返回 -1 。
                            x mod y 表示 x 除以 y 的 余数 。" key="1">
                        <Highlight language="javascript">{eg.smallestEqual}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2073.买票需要的时间{T.EASY}{T.ARRAY}</Title>
                <Collapse ghost>
                    <Panel header="有 n 个人前来排队买票，其中第 0 人站在队伍 最前方 ，第 (n - 1) 人站在队伍 最后方 。
                        给你一个下标从 0 开始的整数数组 tickets ，数组长度为 n ，其中第 i 人想要购买的票数为 tickets[i] 。
                        每个人买票都需要用掉 恰好 1 秒 。一个人 一次只能买一张票 ，如果需要购买更多票，他必须走到  队尾 重新排队（瞬间 发生，不计时间）。如果一个人没有剩下需要买的票，那他将会 离开 队伍。
                        返回位于位置 k（下标从 0 开始）的人完成买票需要的时间（以秒为单位）。" key="1">
                        <Highlight language="javascript">{eg.timeRequiredToBuy}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2078.两栋颜色不同且距离最远的房子{T.EASY}{T.GREEDY}{T.BF}</Title>
                <Collapse ghost>
                    <Panel header="街上有 n 栋房子整齐地排成一列，每栋房子都粉刷上了漂亮的颜色。给你一个下标从 0 开始且长度为 n 的整数数组 colors ，
                            其中 colors[i] 表示第  i 栋房子的颜色。
                            返回 两栋 颜色 不同 房子之间的 最大 距离。
                            第 i 栋房子和第 j 栋房子之间的距离是 abs(i - j) ，其中 abs(x) 是 x 的绝对值。" key="1">
                        <Highlight language="javascript">{eg.maxDistance}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2085.统计出现过一次的公共字符串{T.EASY}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header="给你两个字符串数组 words1 和 words2 ，请你返回在两个字符串数组中 都恰好出现一次 的字符串的数目。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.countWords}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2089.找出数组排序后的目标下标{T.EASY}{T.MATH}{T.DICHOTOMY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个下标从 0 开始的整数数组 nums 以及一个目标元素 target 。
                        目标下标 是一个满足 nums[i] == target 的下标 i 。
                        将 nums 按 非递减 顺序排序后，返回由 nums 中目标下标组成的列表。如果不存在目标下标，返回一个 空 列表。返回的列表必须按 递增 顺序排列。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.targetIndices}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2094.找出 3 位偶数{T.EASY}{T.BF}</Title>
                <Collapse ghost>
                    <Panel header="给你一个整数数组 digits ，其中每个元素是一个数字（0 - 9）。数组中可能存在重复元素。
                        你需要找出 所有 满足下述条件且 互不相同 的整数: 
                        该整数由 digits 中的三个元素按 任意 顺序 依次连接 组成。
                        该整数不含 前导零
                        该整数是一个 偶数
                        例如，给定的 digits 是 [1, 2, 3] ，整数 132 和 312 满足上面列出的全部条件。
                        将找出的所有互不相同的整数按 递增顺序 排列，并以数组形式返回。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.findEvenNumbers}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>LCP 01.猜数字{T.EASY}{T.ARRAY}</Title>
                <Collapse ghost>
                    <Panel header="小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。
                        他们一共进行三次这个游戏，请返回 小A 猜对了几次？
                        输入的guess数组为 小A 每次的猜测，answer数组为 小B 每次的选择。guess和answer的长度都等于3。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.game}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>LCP 06.拿硬币{T.EASY}{T.MATH}</Title>
                <Collapse ghost>
                    <Panel header="桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.minCount}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>剑指 Offer 03.数组中重复的数字{T.EASY}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header="在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。" key="1">
                        <Highlight language="javascript">{eg.findRepeatNumber}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>剑指 Offer 11.旋转数组的最小数字{T.EASY}{T.BF}{T.DICHOTOMY}</Title>
                <Collapse ghost>
                    <Panel header="把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
                        给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。
                        请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。 " key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.minArray}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>414.第三大的数{T.EASY}{T.SORT}</Title>
                <Collapse ghost>
                    <Panel header="给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.thirdMax}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>剑指 Offer 53 - II.0～n-1中缺失的数字{T.EASY}{T.DICHOTOMY}</Title>
                <Collapse ghost>
                    <Panel header="一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.missingNumber}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>1122.数组的相对排序{T.EASY}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header="给你两个数组，arr1 和 arr2， arr2中的元素各不相同;arr2中的每个元素都出现在 arr1 中;
                            对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。" key="1"
                    >
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.relativeSortArray}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="mergeSort">
                <Title level={3}>合并二维有序数组成一维有序数组{T.MERGE_SORT}</Title>
                <Collapse ghost>
                    <Panel header="给你两个数组，arr1 和 arr2， arr2中的元素各不相同;arr2中的每个元素都出现在 arr1 中;
                            对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。" key="1"
                    >
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.mergeSort}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap>
                <Title level={3}>380.O(1) 时间插入、删除和获取随机元素{T.MEDIUM}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header="实现RandomizedSet 类: " key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.randomizedSet}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>59.螺旋矩阵 II{T.MEDIUM}{T.MATRIX}</Title>
                <Collapse ghost>
                    <Panel header="给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.randomizedSet}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>209.长度最小的子数组（滑动窗口）{T.MEDIUM}{T.DOUBLE_POINTER}</Title>
                <Collapse ghost>
                    <Panel header={`给定一个含有 n 个正整数的数组和一个正整数 target 。
                            找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
                            并返回其长度。如果不存在符合条件的子数组，返回 0 。`} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.minSubArrayLen}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="pairSums">
                <Title level={3}>面试题 16.24.数对和{T.MEDIUM}{T.DOUBLE_POINTER}{T.HASH}</Title>
                <Collapse ghost>
                    <Panel header="设计一个算法，找出数组中两数之和为指定值的所有整数对。一个数只能属于一个数对。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.pairSums}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="findKthLargest">
                <Title level={3}>215. 数组中的第K个最大元素{T.MEDIUM}</Title>
                <Collapse ghost>
                    <Panel header="设计一个算法，找出数组中两数之和为指定值的所有整数对。一个数只能属于一个数对。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.findKthLargest}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="findDuplicate">
                <Title level={3}>287. 寻找重复数{T.MEDIUM}{T.DOUBLE_POINTER}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数</li>
                        <li>假设 nums 只有 一个重复的整数 ，找出 这个重复的数 </li>
                        <li>你设计的解决方案必须不修改数组 nums 且只用常量级 O(1) 的额外空间</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.findDuplicate}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>4. 寻找两个正序数组的中位数{T.HARD}{T.DICHOTOMY}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数</li>
                        <li>算法的时间复杂度应该为 O(log (m+n)) </li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <a href="https://leetcode-cn.com/problems/median-of-two-sorted-arrays/" target="_blank">题</a>
                            <Highlight language="javascript">{eg.findMedianSortedArrays}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}
export default AlgoArray



try {
    // console.log(findMiddleArray([1, 2, 3], [4, 5, 6, 7]))
} catch (error) {
    console.log(error)
}


