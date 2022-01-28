import React, { useEffect } from 'react'
import Highlight from '@components/HighLight'
import { useHistory } from 'react-router-dom'

import { Col, Row, Collapse, Typography, Tag, Space } from 'antd'

import { Wrap } from '@components/Base'
import * as eg from './egListNode'

const { Panel } = Collapse
const { Title, Link } = Typography
class ListNode {
    public val: number
    public next: ListNode | any
    public constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const AlgoListNode = () => {
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
                <Title level={3}>生成链表</Title>
                <Collapse ghost>
                    <Panel header="javascript生成链表" key="1">
                        <Space direction="vertical">
                            <Highlight language="typescript">{eg.creteNode}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>237. 删除链表中的节点（easy）<Tag color="cyan">链表的基本操作-删除</Tag></Title>
                <Collapse ghost>
                    <Panel header="请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 。题目数据保证需要删除的节点 不是末尾节点 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.deleteNode2}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="reverseList">
                <Title level={3}>206. 反转链表（easy）<Tag color="cyan">链表的基本操作-修改指针</Tag></Title>
                <Collapse ghost>
                    <Panel header="给单链表的头节点 head ，请反转链表，并返回反转后的链表" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.reverseList}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>21. 合并两个有序链表（easy）</Title>
                <Collapse ghost>
                    <Panel header="将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.mergeTwoList}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>160. 相交链表（easy）</Title>
                <Collapse ghost>
                    <Panel header="找到两个单链表相交的起始节点" key="1">
                        <Row gutter={24}>
                            <Col span={12}><Highlight language="javascript">{eg.getIntersectionNode1}</Highlight></Col>
                            <Col span={12}><Highlight language="javascript">{eg.getIntersectionNode2}</Highlight></Col>
                        </Row>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>83. 删除排序链表中的重复元素（easy）</Title>
                <Collapse ghost>
                    <Panel header="存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。返回同样按升序排列的结果链表。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.deleteDuplicates}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>234. 回文链表（easy）</Title>
                <Collapse ghost>
                    <Panel header="给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.isPalindrome}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>剑指 Offer 18. 删除链表的节点（easy）</Title>
                <Collapse ghost>
                    <Panel header="给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。返回删除后的链表的头节点。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.deleteNode}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="hasCycle">
                <Title level={3}>141. 环形链表（easy）</Title>
                <Collapse ghost>
                    <Panel header="给你一个链表的头节点 head ，判断链表中是否有环。
                            如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
                            如果链表中存在环，则返回 true 。 否则，返回 false 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.hasCycle}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>剑指 Offer 06.从尾到头打印链表</Title>
                <Collapse ghost>
                    <Panel header="输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.reversePrint}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            
            <Wrap>
                <Title level={3}>142. 环形链表 II（medium）</Title>
                <Collapse ghost>
                    <Panel header="给定一个链表，返回链表开始入环的第一个节点。如果链表无环，则返回 null。
                        如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。
                        注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
                        不允许修改 链表。" key="1">
                        <a href="https://leetcode-cn.com/problems/linked-list-cycle-ii/">题</a>
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.detectCycle}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>86. 分隔链表（medium）</Title>
                <Collapse ghost>
                    <Panel header="给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
                        你应当 保留 两个分区中每个节点的初始相对位置。" key="1">
                        <a href="https://leetcode-cn.com/problems/partition-list/">题</a>
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.partition}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>92. 反转链表 II（medium）</Title>
                <Collapse ghost>
                    <Panel header="给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。" key="1">
                        <a href="https://leetcode-cn.com/problems/reverse-linked-list-ii/">题</a>
                        <Space direction="vertical">
                            <Title level={4}>解1:</Title>
                            <Highlight language="javascript">{eg.reverseBetween}</Highlight>
                        </Space>
                        <Space direction="vertical">
                            <Title level={4}>解2:</Title>
                            <Highlight language="javascript">{eg.reverseBetween2}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>148. 排序链表（medium）❌</Title>
                <Collapse ghost>
                    <Panel header="给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。" key="1">
                        <a href="https://leetcode-cn.com/problems/sort-list/">题</a>
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.sortList}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>143. 重排链表（medium）❌</Title>
                <Collapse ghost>
                    <Panel header="给定一个单链表 L 的头节点 head ，单链表 L 表示为：
                        L0 → L1 → … → Ln - 1 → Ln
                        请将其重新排列后变为：
                        L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
                        不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。" key="1">
                        <a href="https://leetcode-cn.com/problems/reorder-list/">题</a>
                        <Space direction="vertical">
                            {/* <Highlight language="javascript">{eg.sortList}</Highlight> */}
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>


            <Wrap>
                <Title level={3}>82. 删除排序链表中的重复元素 II（medium）</Title>
                <Collapse ghost>
                    <Panel header="存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。" key="1">
                        <a href="https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/">题</a>
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.deleteDuplicates2}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>138. 复制带随机指针的链表（medium）</Title>
                <Collapse ghost>
                    <Panel header={`
                    给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。
                    构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。
                    新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。
                    复制链表中的指针都不应指向原链表中的节点 。
                    例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。
                    返回复制链表的头节点。
                    用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：
                    val：一个表示 Node.val 的整数。
                    random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
                    你的代码 只 接受原链表的头节点 head 作为传入参数。`} key="1">
                        <a href="https://leetcode-cn.com/problems/copy-list-with-random-pointer/">题</a>
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.copyRandomList}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>25. K 个一组翻转链表（hard）</Title>
                <Collapse ghost>
                    <Panel header={`给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
                            k是一个正整数，它的值小于或等于链表的长度。
                            如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
                            进阶：
                            你可以设计一个只使用常数额外空间的算法来解决此问题吗？
                            你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。`} key="1"
                    >
                        <a href="https://leetcode-cn.com/problems/reverse-nodes-in-k-group/">题</a>

                        <Space direction="vertical">
                            <Title level={4}>解1:</Title>
                            <Highlight language="javascript">{eg.reverseKGroup}</Highlight>
                        </Space>
                        <Space direction="vertical">
                            <Title level={4}>解2:</Title>
                            <Highlight language="javascript">{eg.reverseKGroup2}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
        </>
    )
}

export default AlgoListNode
