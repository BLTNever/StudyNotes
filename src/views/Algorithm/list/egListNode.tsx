
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
export const baseInsert = `
temp = 待插入位置的前驱节点.next
待插入位置的前驱节点.next = 待插入指针
待插入指针.next = temp

const temp = pre.next
pre.next = insert
insert.next = temp
`

export const baseDelete = `
待删除位置的前驱节点.next = 待删除位置的前驱节点.next.next

pre.next = pre.next.next
`

export const baseTraversal = `
当前指针 = 头指针
while 当前指针不为空 {
   print(当前节点)
   当前指针 = 当前指针.next
}

const cur = head
while(cur) {
    cur = cur.next
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
    // 定义2个指针,pre在前cur在后
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
 * 递归 1 → 2 → 3 → 4 → 5 → null
 * @param head 
 * @returns 
 */
 function reverseList (head) {
    if(!head || !head.next) return head
    let next = reverseList(head.next) // 递,最终拿到 next 是 5, 注意 此时 head 是 4 
    head.next.next = head             // 归,4.next是5,4.next.next === 5.next,5.next指向了 4, 形成一个环 4 → 5, 5 → 4
    head.next = null                  // head的next已经改变了指向,如果不断开之前的会造成死循环, 最后一个刚好指向null 

    return next                       // 返回最后一个节点(一直被递归传递)
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
        A = A !== null ? A.next : headB;    // A 是否为null, 是-指针移动到下一个节点,否-指针指向 headB, 继续遍历
        B = B !== null ? B.next : headA;    // B 是否为null, 是-指针移动到下一个节点,否-指针指向 headA, 继续遍历
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
    let cur = head                      // 最后要返回头节点,所以要先保存head,后面的循环会改变head的位置
    while (cur && cur.next) {           // 判断是否为cur跟cur.next是否为null就结束
        if (cur.val === cur.next.val) { // 如果cur.val等于下一个节点的val
            cur.next = cur.next.next    // 修改next指针的位置为next.next
        } else {
            cur = cur.next              // 不相等 指针移动到下一位置继续循环
        }
    }
    return head
}
`
export const reverseKGroup = `
function reverseList(start, end) {
    let pre = start                 // start 目前指向 dummy 节点,dummy.next指向 head 头节点
    let cur = start.next            // cur 指向 head 头节点
    const first = cur               // ？？？ 先保存一下 cur 指针？指向 head?
    // k === 3的情况下,反转 1 → 2 → 3的区间
    // end 传进来 end.next(3 → 4) 记下反转区块 后面的那个节点
    // 反转前 0(dummy、pre、start) → 1(cur、first、head) → 2 → 3 → 4(end)
    // 反转后 0 ← 1 ← 2 ← 3(pre、cur) ← 4(end)
    while (cur !== end) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    start.next = pre                // start 指向 反转之后的 尾 节点  0(start) → 3(pre) → 2 → 1
    first.next = cur                // ？？？返回反转之后的 头 节点  1(first) → 4(cur) → 3 - > 2 → 1
    return first
}
function reverseKGroup(head, k) {
    let dummy = new ListNode(0)
    dummy.next = head
    let start = dummy
    let end = dummy.next

    let count = 0

    while (end) {
        count++
        if (count % k === 0) {
            start = reverseList(start, end.next)
            end = start.next
        } else {
            end = end.next
        }
    }
    return dummy.next
}
`

export const reverseKGroup2 = `
/**
 * 1. 创建一个新的 node 节点  hair, hair.next 指向 head
 * 2. 定义指针 pre 指向 hair
 * 3. 开始遍历 nodelist,  head指向null 中止
 * 4. 定义指针 tail 指向pre
 * 5. tail 从 head 开始移动到链表 k 长度的地方,如果移动中遇到 tail 为null, 证明已经结束 直接返回 hair.next
 * 6. 使用变量 next 记录当前 tail 指向在链表 k 长度的 .next 的指针
 * 7. 当前 head 指向 k 长度链表的 头部,tail指向 尾部
 * 8. 反转 k 长度的链表后,pre.next 重新指向 head, tail.next 指向暂存的变量next
 * 9. 移动 pre 指针到 tail,head 移动到 next 位置
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
        let tail = pre                         // tail 初始化在 hair 上,遍历移动到 k子链表 的尾部
        for (let i = 0; i < k; ++i) {
            tail = tail.next
            if (!tail) return hair.next        // tail移动为空说明 nodeList.lengt % k 不为0,不用翻转了 直接返回
        }
        const next = tail.next;                //  暂存需要翻转的 子链表 的下一个节点(子链表链接回原链表的“尾部”)
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

export const isPalindrome = `
function isPalindrome(head: ListNode) {
    if (!head) return true
    // 转数组,双指针判断, 时间复杂度 O(n) 空间复杂度 O(n)
    let arr = []
    while (head) {
        if (head.val !== null) arr.push(head.val)
        head = head.next
    }
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        if (arr[i] !== arr[j]) return false
    }
    return true

    // 快慢指针 时间复杂度O(n),空间复杂度O(1)
    let slow = head
    let fast = head
    while (fast && fast.next) {         // slow 走一步,fast走两步,slow 指向中间节点 or 中间节点后面一位
        slow = slow.next
        fast = fast.next.next
    }
    if (fast !== null) slow = slow.next // 如果是fast是奇数情况下,保证slow指向的是后半段起始节点,slow需再单独往后走一个
    let head2 = null
    while (slow) {                      // 翻转后半段链表 
        const next = slow.next
        slow.next = head2
        head2 = slow
        slow = next
    }
    while (head && head2) {          // 对比
        if (head.val !== head2.val) return false
        head = head.next
        head2 = head2.next
    }
    return true
}
`

export const deleteNode = `
function deleteNode(head: ListNode, val: any) {
    let dummy = new ListNode(0)         // 定义一个假节点
    dummy.next = head                   // dummy.next 指向head,  从dummy的 下一个节点值开始对比, 刚好是从head 开始
    let cur = dummy                     // 定义指针
    while (cur && cur.next) {           
        if (cur.next.val === val) {     // 从头开始对比每个节点的值跟 val 是否相等,相等的话 把 next 指向 next.next
            cur.next = cur.next.next
        }
        cur = cur.next
    }
    return dummy.next
}
`

export const deleteDuplicates2 = `
function deleteDuplicates(head: any) {
    if (!head) return head
    // 解法1
    let dummy = new ListNode(0)                 // 头节点可能会被修改,创建一个哑节点保存链表
    dummy.next = head                           // 哑节点 next 指向 head
    let A = dummy                               // 当前指针
    while (A.next && A.next.next) {             // next 节点存在, 同时 当 删除 next 后 要链接的 next.next的节点也存在
        if (A.next.val === A.next.next.val) {   // 值相等的情况下 
            let nextVal = A.next.val            // 把相同的值保存起来
            while (A.next && A.next.val === nextVal) {  // 直接删除后面链接中值等于这个值的节点
                A.next = A.next.next
            }
        } else {
            A = A.next                           // 相邻结点的值不相等,指针移动到next
        }
    }
    return dummy.next

    // 解法2
    let dummy = new ListNode(999)
    dummy.next = head
    let A = dummy
    let set = new Set()
    while (A && A.next) {
        if (A.val === A.next.val) {
            set.add(A.val)
            A.next = A.next.next
        } else {
            A = A.next
        }
    }
    A = dummy
    while (A && A.next) {
        if (set.has(A.next.val)) {
            A.next = A.next.next
        } else {
            A = A.next
        }
    }
    return dummy.next
}
`

export const deleteNode2 = `
function deleteNode(node: ListNode) {
    // 1 → 5 → 2 → 3
    // 删除第二个节点 5
    // 把第二个节点的值变成第三个节点的值, 题目得知 node 肯定不是尾节点
    // 1 → 2 → 2 → 3
    // 把第二个节点的指针 next 指向第三个节点的 next
    // 1 → 2 → 3
    node.val = node.next.val
    node.next = node.next.next
}
`

export const hasCycle = `
function hasCycle(head: ListNode) {
    if (!head) return false
    // 哈希解法
    let set = new Set()
    while (head.next) {
        if (set.has(head)) return true
        set.add(head)
        head = head.next
    }
    return false

    // 快慢指针
    let slow = head
    let fast = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) return true
    }

    // 天秀解法。。。JSON.stringify()方法在对象出现循环引用的时候会报错
    try {
        JSON.stringify(head)
    } catch (e) {
        return true
    }
    return false

    // 标记法
    while (head) {
        if (head.tag) return true
        head.tag = true
        head = head.next
    }
}
`


export const reversePrint = `
function reversePrint(head: any | null): number[] {
    if(head === null)return []
    // 遍历
    let res = []
    while (head !== null) {
        res.unshift(head.val)
        head = head.next
    }
    return res.reverse()
    // 递归
    return [...reversePrint(head.next), head.val]
}
`

export const detectCycle = `
/**
 * 假设从头结点到环形入口节点 的节点数为x
 * 环形入口节点到 fast指针与slow指针相遇节点 节点数为y
 * 从相遇节点 再到环形入口节点节点数为 z
 * 相遇时：slow指针走过的节点数为: x + y, fast指针走过的节点数为: x + y + n (y + z)
 * fast指针是一步走两个节点,slow指针一步走一个节点: (x + y) * 2 = x + y + n (y + z)
 * 两边消掉一个(x+y): x + y = n (y + z)
 * 我们要求x : 那么公式就是 x = n (y + z) - y
 */
function detectCycle(head: ListNode) {
    if (!head) return null
    // 快慢指针 时间复杂度O(n) 空间复杂度 O(1)
    // 先判断是否是环形链表,是的话,把任意指针指回  head, 然后跟另外的指针同步前进,相遇的点就是 环形点
    let fast = head
    let slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {        // 快慢指针相遇,说明有环
            fast = head             // 任意指针指向头部
            while (fast !== slow) { // fast 和 slow 相遇
                fast = fast.next
                slow = slow.next
            }
            return fast
        }
    }
    return null

    // 哈希表 时间复杂度O(n) 空间复杂度 O(n)
    let set = new Set()
    while (head) {
        if (set.has(head)) return head
        set.add(head)
        head = head.next
    }
    return null
}
`

export const partition = `
function partition(head: ListNode, x: number) {
    // 设定2个哨兵节点,后面挂载 大于等于或小于 x 的 node 节点
    // 然后把 A、B 两个链表拼接一起
    let A = new ListNode(0)
    const a = A
    let B = new ListNode(0)
    const b = B
    while (head) {
        if (head.val < x) {
            A.next = head
            A = A.next
        } else {
            B.next = head
            B = B.next
        }
        head = head.next
    }
    B.next = null
    A.next = b.next
    return a.next

    // Fiber链表解法
    // React Fiber: >= 目标值节点放入tag链表并从原链表删除。拼接原链表最后节点和tag
    // Reconcile阶段: 找到所有 >= 目标值的节点,放入tag链表。记忆指针,可随时中断或继续迭代
    // Commit阶段: 对tag链表中节点作影响性能的操作,如DOM。操作时机,先操作谁,可自定策略
    // 好处: 长期占用主线程的分散的影响性能操作 → 可中断地收集tag集中到一起 → 自定优先级操作
    let dummy = new ListNode(0)
    let p = dummy
    let tag = new ListNode(0)
    let t = tag
    while (head) {
        if (head.val >= x) {
            dummy.next = head.next
            tag.next = head
            tag = tag.next
        } else {
            dummy = head
        }
        head = head.next
    }
    tag.next = null
    dummy.next = t.next
    return p.next
}
`

export const reverseBetween = `
function reversetList(head: ListNode) {
    let pre = null
    let cur = head
    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
}
function reverseBetween1(head: ListNode, left: number, right: number) {
    let dummy = new ListNode(0)
    dummy.next = head
    // left = 2 right = 4
    // dummy(pre) → 1 → 2 → 3 → 4 → 5
    let pre = dummy
    // dummy → 1(pre) → 2 → 3 → 4 → 5 
    for (let i = 0; i < left - 1; i++) {            // 走 left - 1 步,找到 left 位置节点前面一位的节点
        pre = pre.next
    }
    // dummy → 1(pre、rightNode) → 2 → 3 → 4 → 5 
    let rightNode = pre
    // dummy → 1(pre) → 2 → 3 → 4(rightNode) → 5 
    for (let i = 0; i < right - left + 1; i++) {   // 走 right - left + 1 步,找到 right 节点
        rightNode = rightNode.next
    }
    // 截取链表
    // dummy → 1(pre) → 2(leftNode) → 3 → 4(rightNode) → 5(cur)
    let leftNode = pre.next                        // 找到 left 节点
    let cur = rightNode.next                       // 记录 right 节点后面的位置
    // 切断链接
    // dummy → 1(pre)   2(leftNode) → 3 → 4(rightNode)   5(cur)
    pre.next = null
    rightNode.next = null
    // 反转
    // dummy → 1(pre)   2(leftNode) ← 3 ← 4(rightNode)   5(cur)
    reversetList(leftNode)
    // 链接回原来的链表
    // dummy → 1(pre) → 4(rightNode) → 3 → 2(leftNode) → 5(cur)
    pre.next = rightNode
    leftNode.next = cur
    return dummy.next
}
`

export const reverseBetween2 = `
function reverseBetween2(head: ListNode, left: number, right: number) {
    let dummy = new ListNode(0)
    dummy.next = head
    let pre = dummy
    // left: 2   right: 4
    // dummy(pre) → 1 → 2 → 3 → 4 → 5
    // dummy → 1(pre) → 2 → 3 → 4 → 5
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }
    // dummy → 1(pre) → 2(cur) → 3 → 4 → 5
    let cur = pre.next
    for (let i = 0; i < right - left + 1; i++) {    // 循环 right - left 次
        // dummy → 1(pre) → 2(cur) → 3(next) → 4 → 5
        let next = cur.next
        // dummy → 1(pre) → 2(cur)   3(next) → 4 → 5 
        //                  2(cur) → 4 → 5 
        cur.next = next.next
        // dummy → 1(pre) → 2(cur) ← 3(next)   4 → 5 
        //                  2(cur) → 4 → 5 
        next.next = pre.next
        // dummy → 1(pre) → 3(next) → 2(cur)   4 → 5 
        //                    2(cur) → 4 → 5 
        pre.next = next
    }
    return dummy.next
}
`

export const copyRandomList = `
/**
 * hash表  时间复杂度 O(n)  空间复杂度 O(n)
 * @param head 
 * @returns 
 */
function copyRandomList(head: ListNode) {
    let map = new Map()
    let cur = head
    // 第一次遍历,复制各节点值,生成一个具有val属性的链表
    while (cur) {
        map.set(cur, new Node(cur.val))
        cur = cur.next
    }
    cur = head
    // 第二次遍历,复制连接关系,根据map映射关系,将random和next指针指向对应的节点或者null
    while (cur) {
        map.get(cur).next = cur.next ? map.get(cur.next) : null
        map.get(cur).random = cur.random ? map.get(cur.random) : null
        cur = cur.next
    }
    return map.get(head)
}

/**
 * 递归 时间复杂度 O(n)  空间复杂度 O(1)
 * @param head 
 * @param map 
 * @returns 
 */
function _copyRandomList(head: ListNode, map = new Map()) {
    if (!head) return null
    if (!map.get(head)) {   // 如果当前map没有要找的head,新建一份
        map.set(head, { val: head.val })
        Object.assign(      // 第二个作为第一个的新增参数
            map.get(head),  // map.get(head)得到的其实就是新的head,所以下面的next和random属性就是为新的head增加的属性
            {
                next: _copyRandomList(head.next, map),
                random: _copyRandomList(head.random, map)
            }
        )
    }
    return map.get(head)
}
`

export const sortList = `
// 解1:
function sortList(head: ListNode): ListNode {
    if (!head || !head.next) return head
    let slow = head                             // 定义快慢指针 找到中间的节点
    let fast = head
    while (fast && fast.next) {                // 快指针一次2步,慢指针一次1步
        slow = slow.next
        fast = fast.next
        if(fast.next) fast = fast.next
    }
    let left = head                             // 左链表
    let right = slow.next                       // 右链表
    slow.next = null                            // 左链表断掉
    left = sortList(left)                       // 分别对左右链表排序
    right = sortList(right)

    let cur = null                              // 排序后的链表头节点
    let next = null                             // 排序链表的指针
    while (left || right) {
        const leftVal = left?.val ?? null
        const rightVal = right?.val ?? null
        let node = null                         // 用来记录每个节点
        if (leftVal === null) {                 // 左链表没值了 接上右链表
            node = right
            right = right.next
        } else if (rightVal === null) {         // 右链表没值了接上左链表
            node = left
            left = left.next
        } else {
            if (leftVal < rightVal) {         // 对比左右链表的值
                node = left
                left = left.next
            } else {
                node = right
                right = right.next
            }
        }
        if (next) {                             // 如果next指针已经指向cur链表中某个节点
            next.next = node                    // next.next指到对比后的node节点
            next = node                         // 指针移动
        }
        if (!cur) {                             // 首次对比
            cur = node                          // cur 和 next 记录节点
            next = node
        }
    }
    return cur
}
// 解2:
function merge(head1: ListNode, head2: ListNode) {
    const dummyHead = new ListNode(0)
    let cur = dummyHead
    let A = head1
    let B = head2
    while (A !== null && B !== null) { // 合并子区间 小的节点先连
        if (A.val <= B.val) {
            cur.next = A
            A = A.next
        } else {
            cur.next = B
            B = B.next
        }
        cur = cur.next
    }
    if (A !== null) {              // 两条链表还有节点没合并完,直接合并过来
        cur.next = A
    } else if (B !== null) {
        cur.next = B
    }
    return dummyHead.next
}

function toSortList(head: ListNode, tail: ListNode | null): any {
    if (head === null) return head    // 极端情况

    if (head.next === tail) {         // 分割到只剩一个节点
        head.next = null
        return head
    }
    let slow = head
    let fast = head
    while (fast !== tail) {           // 的到中间节点
        slow = slow.next
        fast = fast.next
        if (fast !== tail) {
            fast = fast.next
        }
    }
    const mid = slow
    return merge(toSortList(head, mid), toSortList(mid, tail))  // 分割区间 递归合并
}


function sortList(head: ListNode) {
    return toSortList(head, null)
}
`

export const reorderList = `
function reorderList(head: ListNode) {
    let slow = head
    let fast = head
    while (fast && fast.next) {       // 把链表拆成2段
        slow = slow.next
        fast = fast.next
        if (fast.next) {
            fast = fast.next
        }
    }
    let mid = slow.next
    slow.next = null
    let prev = null
    while (mid) {                     // 翻转后半段链表
        const next = mid.next
        mid.next = prev
        prev = mid
        mid = next
    }
    let A = head                
    let B = prev
    // A: 1 → 2 → 3
    // B: 6 → 5 → 4
    while (A && B) {                // 拼接左右 2个链表
        let next = A.next           // 先保存 A节点 的next指针:  next(2)
        A.next = B                  // A节点的next指针指向 B:  1(A) → 6(B) → 5 → 4
        B = B.next                  // 移动指针 B 到下一位:  6 → 5(B) → 4 
        A.next.next = next          // A.next.next 链接之道前保存的 next 节点:  1(A) → 6 → 2(next) → 1
        A = next                    // 移动 A 指针位置:  1 → 6 → 2(A) → 1
    }

    return head
}`

export const addTwoNumbers = `
/**
 * 1. 因为是l1、l2是逆序, 所以相加完的顺序刚好是正确输出，如果不是逆序 需要翻转结果
 * 2. 注意进位
 */ 
function addTwoNumbers(l1: ListNode, l2: ListNode) {
    let dummy = new ListNode(0)
    let cur = dummy
    let sum = 0
    while (l1 || l2 || sum) {
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        cur.next = new ListNode(sum % 10)
        cur = cur.next
        sum /= 10
    }
    return dummy.next
}`