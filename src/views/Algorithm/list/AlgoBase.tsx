import React from 'react'
import Highlight from '@components/HighLight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egBase'

import * as _heapImg from '../../../assets/heapImg'
const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const AlgoBase = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>多维数组拍平排序去重</Title>
                <Collapse ghost>
                    <Panel header="ES6" key="1">
                        <Highlight language="javascript">{eg.arrFn13}</Highlight>
                    </Panel>
                    <Panel header="递归" key="2">
                        <Highlight language="javascript">{eg.arrFn14}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>基础排序操作</Title>
                <Collapse ghost>
                    <Panel header="sort排序: V8对 sort 的实现,length <= 10 采用插入排序(时间复杂度O(n^2),空间复杂度O(1)),>10 快速排序(时间复杂度O(nlogn), 空间复杂度O(logn))" key="1">
                        <Highlight language="javascript">{eg.sort}</Highlight>
                    </Panel>
                    <Panel header={<ul>
                        <li>冒泡排序: 循环遍历多次每次从前往后把大元素往后调,每次确定一个最大(最小)元素,多次后达到排序序列</li>
                        <li><code>{`i >= 0; j < i; [j, j+1] = [j+1, j]`}</code></li>
                    </ul>} key="2">
                        <Highlight language="javascript">{eg.bubbleSort}</Highlight>
                    </Panel>
                    <Panel header={<ul>
                        <li>选择排序: 在未排序序列中找到最小(大)元素,存放到排序序列的起始位置,然后,再从剩余未排序元素中继续寻找最小(大)元素,然后放到「已排序序列的末尾」</li>
                        <li><code>{`i = 0; min = i; j = i; min > j, min = j; i !== min && [i, min] = [min, i]`}</code></li>
                    </ul>} key="3">
                        <Highlight language="javascript">{eg.selectSort}</Highlight>
                    </Panel>
                    <Panel header={<ul>
                        <li>插入排序: 选取当前位置(当前位置前面已经有序) 目标就是将当前位置数据插入到前面合适位置</li>
                        <li><code>{`i = 1; temp = nums[i]; j = i - 1, j >= 0; j > temp ? j + 1 = j, j = temp : break`}</code></li>
                    </ul>} key="4">
                        <Highlight language="javascript">{eg.insertSort}</Highlight>
                    </Panel>
                    <Panel header={<ul>
                        <li>快速排序: 分治</li>
                        <li><code>{`len <= 1 return arr;pivot = splice(mid, 1)[0]; quicksort(left).concat([pivot], quicksort(right))`}</code></li>
                    </ul>} key="5">
                        <Highlight language="javascript">{eg.quickSort}</Highlight>
                    </Panel>
                    <Panel header="洗牌算法" key="6">
                        <Highlight language="javascript">{eg.random}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>前缀和</Title>
                <Collapse ghost>
                    <a href="https://leetcode-cn.com/problems/unique-substrings-in-wraparound-string/solution/xi-fa-dai-ni-xue-suan-fa-yi-ci-gao-ding-qian-zhui-/" target="_blank">详解</a>

                    <Panel header="前缀和公式" key="5">
                        <Highlight language="javascript">{eg.prefixSum}</Highlight>
                    </Panel>

                    <Panel header="有 N 个的正整数放到数组 A 里, 现在要求一个新的数组 B, 新数组的第 i 个数 B[i]是原数组 A 第 0 到第 i 个数的和" key="1">
                        <Highlight language="javascript">{eg.prefix1}</Highlight>
                    </Panel>

                    <Panel header="求一个数组的连续子数组总个数, 你会如何求？其中连续指的是数组的索引连续。 比如 [1,3,4], 其连续子数组有：[1], [3], [4], [1,3], [3,4] , [1,3,4], 你需要返回 6" key="2">
                        <Highlight language="javascript">{eg.countSubArray1}</Highlight>
                    </Panel>

                    <Panel header="求一个数组相邻差为 1 连续子数组的总个数呢？其实就是索引差 1 的同时, 值也差 1" key="3">
                        <Highlight language="javascript">{eg.countSubArray2}</Highlight>
                    </Panel>

                    <Panel header="求出不大于 k 的子数组的个数呢？不大于 k 指的是子数组的全部元素都不大于 k" key="4">
                        <Highlight language="javascript">{eg.countSubArray2}</Highlight>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>堆排序</Title>
                <Collapse ghost>
                    <a href="https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/xie-gei-qian-duan-tong-xue-de-ti-jie-yi-kt5p2/" target="_blank">详解</a>

                    <Panel header="堆排序" key="1">
                        <ul>
                            <li>堆排序是利用 堆 这种 数据结构 而设计的一种排序算法, 它是一种选择排序, 最坏 、最好、平均时间复杂度均为 O(nlogn), 它是不稳定排序</li>
                            <li>注意因为完全二叉树的性质, 可以用数组表示对应的树结构（所以, 堆排序过程中, 你是看不到树这数据结构的, 用数组进行映射了）, 这叫顺序存储</li>
                        </ul>
                    </Panel>

                    <Panel header="顺序存储二叉树" key="2">
                        <ul>
                            <li>第 n 个元素的 左子节点 为 2 * n + 1</li>
                            <li>第 n 个元素的 右子节点 为 2 * n + 2</li>
                            <li>第 n 个元素的 父节点 为 (n - 1) / 2</li>
                            <li>最后一个非叶子节点为 Math.floor(arr.length / 2) - 1</li>
                        </ul>
                        <p>堆是具有以下性质的完全二叉树：</p>
                        <ul>
                            <li>大顶堆：每个节点的值都 大于或等于 其左右孩子节点的值(注：没有要求左右值的大小关系)</li>
                            <li>小顶堆：每个节点的值都 小于或等于 其左右孩子节点的值</li>
                            <li>升序：一般采用大顶堆</li>
                            <li>降序：一般采用小顶堆</li>
                        </ul>
                    </Panel>
                    <Panel header="大顶堆" key="4">
                        <img src={_heapImg.img1} />
                        <p>对堆中的节点按层进行编号, 映射到数组中如下图</p>
                        <img src={_heapImg.img2} alt="" />
                        <p>大顶堆特点：<code>{`arr[i] >= arr[2 * i + 1] && arr[i] >= arr[2 * i + 2]`}</code>, i 对应第几个节点, i 从 0 开始编号</p>
                    </Panel>

                    <Panel header="小顶堆" key="5">
                        <img src={_heapImg.img3} alt="" />
                        <p>小顶堆特点：<code>{`arr[i] <= arr[2 * i + 1] && arr[i] <= arr[2 * i + 2]`}</code>, i 对应第几个节点, i 从 0 开始</p>
                    </Panel>

                    <Panel header="基本思想" key="3">
                        <ul>
                            <li>将待排序序列构造成一个大顶堆</li>
                            <li>注意：这里使用的是数组, 而不是一颗二叉树</li>
                            <li>此时：整个序列的 <b>最大值就是堆顶的根节点</b></li>
                            <li>将其 <b>与末尾元素进行交换</b>, 此时末尾就是最大值</li>
                            <li>然后将剩余 n - 1 个元素重新构造成一个堆, 这样 就会得到 n 个元素的次小值。如此反复, 便能的得到一个有序序列</li>
                        </ul>
                    </Panel>


                    <Panel header="堆排序步骤图解" key="6">
                        <p>对数组 4,6,8,5,9 进行堆排序, 将数组升序排序</p>
                        <Title level={4}>步骤一：构造初始堆</Title>
                        <ul>
                            <li>
                                <p>1. 给定无序序列结构 如下：注意这里的操作用数组, 树结构只是参考理解</p>
                                <img src={_heapImg.img4} alt="" />
                                <p>将给定无序序列构造成一个大顶堆</p>
                            </li>
                            <li>
                                <p>2. 此时从最后一个非叶子节点开始调整, 从左到右, 从上到下进行调整</p>
                                <p>叶节点不用调整, 第一个非叶子节点 <code>arr.length / 2 - 1 = 5 / 2 - 1 = 1</code>, 也就是 元素为 6 的节点</p>
                                <p>比较时：先让 5 与 9 比较, 得到最大的那个, 再和 6 比较, 发现 9 大于 6, 则调整他们的位置</p>
                                <img src={_heapImg.img5} alt="" />
                            </li>
                            <li>
                                <p>3. 找到第二个非叶子节点 4, 由于 [4, 9, 8] 中, 9 元素最大, 则 4 和 9 进行交换</p>
                                <img src={_heapImg.img6} alt="" />
                            </li>
                            <li>
                                <p>4. 此时, 交换导致了子根 [4, 5, 6] 结构混乱, 将其继续调整。[4, 5, 6] 中 6 最大, 将 4 与 6 进行调整</p>
                                <img src={_heapImg.img7} alt="" />
                            </li>
                        </ul>


                        <Title level={4}>步骤二：将堆顶元素与末尾元素进行交换</Title>
                        <p>将堆顶元素与末尾元素进行交换, 使其末尾元素最大。然后继续调整, 再将堆顶元素与末尾元素交换, 得到第二大元素。如此反复进行交换、重建、交换</p>
                        <ul>
                            <li>
                                <p>1. 将堆顶元素 9 和末尾元素 4 进行交换</p>
                                <img src={_heapImg.img8} alt="" />
                            </li>
                            <li>
                                <p>2. 重新调整结构, 使其继续满足堆定义</p>
                                <img src={_heapImg.img9} alt="" />
                            </li>
                            <li>
                                <p>3. 再将堆顶元素 8 与末尾元素 5 进行交换, 得到第二大元素 8</p>
                                <img src={_heapImg.img10} alt="" />
                            </li>
                            <li>
                                <p>4. 后续过程, 继续进行调整、交换, 如此反复进行, 最终使得整个序列有序</p>
                                <img src={_heapImg.img11} alt="" />
                            </li>
                        </ul>


                        <Title level={4}>总结思路</Title>
                        <ul>
                            <li>1. 将无序序列构建成一个堆, 根据升序降序需求选择大顶堆</li>
                            <li>2. 将堆顶元素与末尾元素交换, 将最大元素「沉」到数组末端</li>
                            <li>3. 重新调整结构, 使其满足堆定义, 然后继续交换堆顶与当前末尾元素, 反复执行调整、交换步骤, 直到整个序列有序</li>
                        </ul>


                        <Title level={4}>步骤</Title>
                        <ul>
                            <li>第一步构建初始堆：是自底向上构建, 从最后一个非叶子节点开始</li>
                            <li>第二步就是下沉操作让尾部元素与堆顶元素交换, 最大值被放在数组末尾, 并且缩小数组的length, 不参与后面大顶堆的调整</li>
                            <li>第三步就是调整：是从上到下, 从左到右,因为堆顶元素下沉到末尾了, 要重新调整这颗大顶堆</li>
                        </ul>
                    </Panel>

                </Collapse>
            </Wrap>
        </>
    )
}
export default AlgoBase


