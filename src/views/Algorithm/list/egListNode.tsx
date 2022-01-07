
export const creteNode = `
class ListNode {
    private prev: any
    private next: any
    private key: string
    public constructor(key: string) {
        // 指向前一个节点
        this.prev = null
        // 指向后一个节点
        this.next = null
        // 节点的数据(或者用于查找的键)
        this.key = key
    }
}

/**
 * 双向链表
 */
class List {
    private head: null | any
    public constructor() {
        this.head = null
    }

    public createNode(key: string) {
        return new ListNode(key)
    }

    public insert(node: any) {
        node.prev = null
        node.next = this.head
        if (this.head) {
            this.head.prev = node
        }
        this.head = node
    }

    public search(key: string) {
        let node = this.head
        while (node !== null && node.key !== key) {
            node = node.next
        }
        return node
    }

    public delete(node: any) {
        const { prev, next } = node
        delete node.prev
        delete node.next

        if (node === this.head) {
            this.head = next
        }

        if (prev) {
            prev.next = next
        }
        if (next) {
            next.prev = prev
        }
    }
}
`

export const reverseList = `
/**
 * 遍历
 * @param head 
 * @returns 
 */
function reverseList (head) {
    if(!head || !head.next) return head
    // 定义2个指针，pre在前cur在后
    // pre指向null cur 指向 head
    let cur = head
    let pre = null
    while(cur) {
        const next = cur.next // 暂存下一个节点
        cur.next = pre        // 将cur的next指向pre
        pre = cur             // pre和cur 向右移动一位
        cur = next
    }
    return pre
}

/**
 * 递归 1 -> 2 -> 3 -> 4 -> 5 -> null
 * @param head 
 * @returns 
 */
 function reverseList (head) {
    if(!head || !head.next) return head
    let next = reverseList(head.next) // 递，最终拿到 next 是 5, 注意 此时 head 是 4 
    head.next.next = head             // 归，4.next是5，4.next.next === 5.next，5.next指向了 4 进行了反转
    head.next = null                  // head的next已经改变了指向，如果不断开之前的会造成死循环

    return next
}
`

export const mergeTwoList = `
function mergeTwoList(A: any, B: any) {
    if (!A)  return B
    if (!B)  return A
    
    if (A.val < B.val) {
        A.next = mergeTwoList(A.next, B)
        return A
    } else {
        B.next = mergeTwoList(A, B.next)
        return B
    }
}
console.log(mergeTwoList([1, 2, 4], [1, 3, 4]))
`
export const getIntersectionNode1 = `
// 双指针
function getIntersectionNode(headA: any, headB: any) {
    if (!headA || !headB) return null

    let A = headA
    let B = headB
    while (A !== B) {
        A = A !== null ? A.next : headB;
        B = B !== null ? B.next : headA;
    }
    return A
}
`

export const getIntersectionNode2 = `
// hash表
function getIntersectionNode(headA: any, headB: any) {
    if (!headA || !headB) return null

    let A = headA
    let B = headB
    let map = new Map()

    while (A) {
        map.set(A, 1)
        A = A.next
    }
    while (B) {
        if (map.has(B)) return B
        B = B.next
    }
}
`




export const deleteDuplicates = `
/**
 * 遍历 O(n)
 * @param head ListNode
 * @returns 
 */
 function deleteDuplicates(head: any) {
    if (!head) return head
    let node = head // 最后要返回头节点，所以要先保存head，后面的循环会改变head的位置
    while (node && node.next) { //  判断是否为node跟node.next是否为null就结束
        if (node.val === node.next.val) { // 如果node.val等于下一个节点的val
            node.next = node.next.next // 修改next指针的位置为next.next
        } else {
            node = node.next // 不相等 指针移动到下一位置继续循环
        }
    }
    return head
}
`


export const reverseKGroup = `
/**
 * 1. 创建一个新的 node 节点  hair， hair.next 指向 head
 * 2. 定义指针 pre 指向 hair
 * 3. 开始遍历 nodelist,  head指向null 中止
 * 4. 定义指针 tail 指向pre
 * 5. tail 从 head 开始移动到链表 k 长度的地方，如果移动中遇到 tail 为null, 证明已经结束 直接返回 hair.next
 * 6. 使用变量 next 记录当前 tail 指向在链表 k 长度的 .next 的指针
 * 7. 当前 head 指向 k 长度链表的 头部，tail指向 尾部
 * 8. 反转 k 长度的链表后，pre.next 重新指向 head, tail.next 指向暂存的变量next
 * 9. 移动 pre 指针到 tail，head 移动到 next 位置
 * 10. 移动 tail, 循环。。。
 * @param head 
 * @param k 
 * @returns 
 */
 function reverseList(head, tail) {
    // let [prev, cur] = [tail.next, head]    // prev指向 tail.next, cur 指向head
    let prev = tail.next
    let cur = head
    while (prev !== tail) {
        const next = cur.next              // 暂存 head.next
        cur.next = prev                    // 将 cur 指向 tail.next
        prev = cur                         // prev 指向 head
        cur = next                         // cur 指向刚在暂存的 cur.next
    }
    return [tail, head]
}
function reverseKGroup(head, k) {
    const hair = new ListNode(0)
    hair.next = head
    let pre = hair                             // 子链表链接回原链表的“首部”

    while (head) {
        let tail = pre                         // tail 初始化在 hair 上，遍历移动到 k子链表 的尾部
        for (let i = 0; i < k; ++i) {
            tail = tail.next
            if (!tail) return hair.next        // tail移动为空说明 nodeList.lengt % k 不为0，不用翻转了 直接返回
        }
        const next = tail.next;                //  暂存需要翻转的 子链表 的下一个节点（子链表链接回原链表的“尾部”）
        // !!!const next = tail.next; 记得加分号。不然 [head, tail] 就变成右值了
        [head, tail] = reverseList(head, tail) // 反转 k 长度的子链表
        // 把子链表重新接回原链表
        pre.next = head
        tail.next = next
        // 移动指针 pre 到 子链表 尾部位置 开启下一轮 翻转
        pre = tail;
        head = tail.next                     // head移动到 下一轮需要翻转的 k子链表 位置
    }
    return hair.next
}
`