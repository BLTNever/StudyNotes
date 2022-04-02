
export const twoNums = `
function twoSum(nums: number[], target: number) {
    let map = new Map()
    for (let [key, value] of Object.entries(nums)) {
        let other = target - value
        if (map.get(other) !== undefined) return [map.get(other), key]
        map.set(value, key)
    }
}
console.log(twoSum([2, 7, 11, 15], 18))
`

export const createTree = `
const arr = [
    { id: 1 },
    { id: 2, parentId: 1},
    { id: 3, parentId: 1},
    { id: 4, parentId: 2},
    { id: 5, parentId: 3},
    { id: 6, parentId: 3},
]
转化为树的形式: 
root = {
    id: 1,
    children: [
        { id: 2, children: [{id: 4, children: [] }] }, 
        { id: 3, children: [{id: 5, children: [] },{id: 6, children: [] }] }
    ]
}
// 设置哈希表去操作
let ans: any = null
const mapper = {}
function createTree(list: any) {
    for (const item of list) {
        mapper[item.id] = item // 在哈希表中通过id去存储每个item
        item.children = [] // 给item初始化添加children
        if (!item.parentId) { // 如果没有parentId设置为root节点
            ans = item
        } else {
            // 通过parentId去哈希表里查找id === parentId的元素
            if (!mapper[item.parentId]) { // 未找到 创建一条新的数据
                mapper[item.parentId] = {
                    id: item.parentId,
                    children: [],
                }
            }
            mapper[item.parentId].children.push(item) // 找到mapper存在key为parentId的元素,在children里push当前的元素
        }
    }
    return ans
}

function createTree(list: any) {
    if (!list?.length) return {}
    let obj = null
    let mapper = {}
    for (let item of list) {
        mapper[item.id] = item
        item.children = []
        if (!item.parentId) {
            obj = item
        } else {
            if (mapper[item.parentId]) {
                mapper[item.parentId].children.push(item)
            } else {
                mapper[item.parentId] = {
                    id: item.parentId,
                    children: []
                }
            }
        }
    }
    return obj
}

// 递归的方法 需要传id进去
function listToTree(list: any[], pId?: number): any {
    const arr = list.filter((i: any) => i.pId === pId)
    return arr.map((i: any) => {
        return {
            ...i,
            children: listToTree(list, i.id)
        }
    })
}
`

export const findShortSubArray = `
/**
 *  1.用哈希表去记录每个元素出现的次数,用元素的值做key, value存储[值第一次出现的下标start,值最后出现的下标end, 出现的次数count]
 *  2.遍历这个哈希表的值,出现的次数大于max值的时候,重新给max值赋值,记录min最短长度为当前值的end下标 - start下标
 *  3.如果count === max值,对比已存在的min值和当前的end - start值,找出最短长度
 *  4.数组下标从0开始,return的min值+1
 * @param nums 
 * @returns 
 */
function findSubArray(nums: number[]) {
    let map = {}
    nums.forEach((n, key) => {
        if (map.hasOwnProperty(n)) {
            map[n][1] = key
            map[n][2]++
        } else {
            map[n] = [key, key, 1]
        }
    })
    let maxNum = 0
    let minLen = 0
    for (let [start, end, count] of Object.values(map)) {
        if (count > maxNum) {
            maxNum = count
            minLen = end - start
        } else if (count === maxNum) {
            minLen = Math.min(minLen,(end - start))
        }
    }
    return minLen + 1
}
// 一次遍历,
function findSubArray(nums) {
    let map = {}
    let max = 0
    let min = 0
    nums.forEach((n, k) => {
        if (map.hasOwnProperty(n)) {
            map[n][1] = k
            map[n][2]++
            if(map[n][2] > max) {
                max = map[n][2]
                min = map[n][1] - map[n][0]
            } else if(map[n][2] === max) {
                min = Math.min(min, map[n][1] - map[n][0])
            }
        } else {
            map[n] = [k, k, 1]
        }
    })
    return min + 1
}
`

export const MyHashSet = `
/**
 * 不能使用 Obeject、Map、Set的前提下,使用Array模拟
 * 也不能使用indexOf, inCludes 前提下,遍历模拟
 * 为了尽可能避免冲突,应当将 BASE 取为一个质数
 */
class MyHashSet {
    private BASE = 769
    private list: any = new Array(769).fill(0).map(() => new Array(undefined))
    public add(key: any) {
        const hash = this.hash(key)
        for (let ele of this.list[key]) {
            if (ele === key) return
        }
        this.list[hash].push(key)
    }
    public remove(key: any) {
        const hash = this.hash(key)
        const item = this.list(hash)
        for (let i = 0; i < item.length; i++) {
            if (item[i] === key) {
                item.splice(i, 1)
                break
            }
        }

    }
    public contain(key: any) {
        const hash = this.hash(key)
        for (let ele of this.list[hash]) {
            if (ele === key) return true
        }
        return false
    }
    private hash(key: any) {
        return key % this.BASE
    }
}

/**
 * 使用Set模拟实现  
 */
class MyHashSet {
    private set: any = new Set()
    public add(key: any) {
        if (!this.set.hash(key)) this.set.add(key)
    }
    public remove(key: any) {
        if (this.set.hash(key)) this.set.remove(key)
    }
    public contain(key: any) {
        return this.set.has(key)
    }
}`


export const MyHashMap = `
class MyHashMap {
    private BASE = 769
    private list: any = new Array(this.BASE).fill(0).map(() => new Array(undefined))

    public put(key: any, value: any) {
        const hash = this.hash(key)
        for (let item of this.list[hash]) {
            if (item[0] === key) {
                item[1] = value
                return
            }
        }
        this.list[hash].push([key, value])
    }
    public get(key: any) {
        const hash = this.hash(key)
        for (let item of this.list[hash]) {
            if (item[0] === key) return item[1]
        }
        return -1
    }
    public remove(key: any) {
        const hash = this.hash(key)
        for (let [index, item] of Object.entries(this.list[hash])) {
            if (item[0] === key) {
                this.list[hash].splice(index, 1)
                return
            }
        }
    }
    private hash(key: any) {
        return key % this.BASE
    }
}`

export const subdomainVisits = `
function subdomainVisits(cpdomains: string[]) {
    let map = new Map()
    for (let item of cpdomains) {
        const [count, domain] = item.split(' ')
        let domains = domain.split('.')
        for (let i = 0; i < domains.length; i++) {
            const temp = domains.slice(i).join('.')
            if (!map.has(temp)) {
                map.set(temp, Number(count))
            } else {
                map.set(temp, map.get(temp) + Number(count))
            }
        }
    }
    return Array.from(map).map(item => item[1] + ' ' + item[0])
}`

export const LRUCache = `
class DoublyNode {
    public key: any
    public value: any
    public prev: DoublyNode | null
    public next: DoublyNode | null
    public constructor(key?: any, value?: any) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}
/**
 *  哈希 + 双向链表
 */
class LRUCache {
    private hash: Object
    private count: number
    private capacity: number
    private dummyHead: DoublyNode
    private dummyTail: DoublyNode
    private constructor(capacity: number) {
        this.capacity = capacity
        this.hash = {}
        this.dummyHead = new DoublyNode()
        this.dummyTail = new DoublyNode()
        this.count = 0
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }
    public put(key: any, value: any) {
        let node = this.hash[key]           // 取key下标的node节点
        if (!node) {                        // 如果该节不存在
            node.value = value              // 更新value值
            this.moveToHead(node)           // 移动到头部
        } else {
            if (this.count === this.capacity) {
                this.removeTail()           // 超出 capacity 值 从尾部删掉最久未使用的节点
            }
            const newNode = new DoublyNode(key, value)
            this.hash[key] = newNode        // 添加到hash中
            this.addNode(newNode)           // 添加到头部
            this.count++
        }
    }
    public get(key: any) {
        const node = this.hash[key]
        if (!node) return -1
        this.moveToHead(node)
        return node.value
    }
    private moveToHead(node: any) {
        this.removeNode(node)               // 先删除
        this.addNode(node)                  // 再添加到头部
    }
    private addNode(node: any) {
        const _next = this.dummyHead.next ?? null   // 暂存 dummy节点的next值
        node.prev = this.dummyHead          // node prev指针指向dummy. dummy ← node
        node.next = _next                   // node next指针指向之前dummy指针的下一个节点 dummy ← node → _next
        if (_next) _next.prev = node        // 暂存的next 指向 node.  dummy ← node ⇆ _next
        this.dummyHead.next = node          // dummy指回node. dummy ⇆ node ⇆ _next
    }
    private removeNode(node: any) {
        let _prev = node.prev            // 暂存node的钱去节点 _prev ← node
        let _next = node.next            // 暂存node的后继节点 _prev ← node → _next
        _prev.next = _prev               // _prev → _next
        _next.prev = _next               // _prev ⇆ _next
    }
    private removeTail() {
        const tailNode = this.dummyTail.prev  // 取出最后一个节点
        this.removeNode(tailNode)             // 从链表中删除
        delete this.hash[tailNode?.key]       // 从hash表中删除
        this.count--
    }
}

/**
 * Map解 
 */
class LRUCache {
    private hashMap: Map<number, number>
    private capacity: number

    private constructor(capacity: number) {
        this.capacity = capacity
        this.hashMap = new Map()
    }
    public put(key: any, value: any) {
        if (this.hashMap.has(key)) {
            this.hashMap.delete(key)
            this.hashMap.set(key, value)
        } else {
            if (this.hashMap.size === this.capacity) {
                const oldData = this.hashMap.keys().next().value
                this.hashMap.delete(oldData)
            }
            this.hashMap.set(key, value)
        }
    }
    public get(key: any) {
        if (!this.hashMap.has(key)) return -1
        const value: any = this.hashMap.get(key)
        this.hashMap.delete(key)
        this.hashMap.set(key, value)
        return value
    }
}`

export const findJudge = `
/**
 * 1. 小镇的法官不相信任何人。             => 法官不会出现在 trust[i][0]
 * 2. 每个人(除了小镇法官外)             => n - 1个人相信法官
 * 3. 只有一个人同时满足条件 1 和条件 2     => 这个人是法官
 */
function findJudge(n: number, trust: number[][]) {
    let A = Array(n).fill(0)           // 信任他人的人。 小镇居民, 不包含法官
    let B = Array(n).fill(0)           // 被信任的人。 包含法官或小镇居民
    for (let [a, b] of trust) {
        A[a - 1]++
        B[b - 1]++
    }
    for (let i = 0; i < n; i++) {     // 法官不会出现在 A 队列,  同时信任他的人为 n - 1个, 满足着2个条件
        if (A[i] === 0 && B[i] === n - 1) return i + 1
    }
    return -1
}`

export const subarraySum = `
/**
 * nums[j] + ... + nums[i] === prefix[i] − prefix[j − 1]
 * 题意：有几种 j、i 的组合, 使得从第 j 到 i 的子数组和等于 k,  nums[j] = prefix[j] - prefix[j - 1]
 * 有几种 j、i 的组合, 满足 nums[j] + ... + nums[i] === prefix[i] − prefix[j - 1]
 * 如果 pre[i] - pre[j - 1] === k 证明 j ... i 区间肯定存在和为k的值
 * prefix[j - 1] = prefix[i] - k 「当前前缀和 - 该前缀和 == k」
 * 只需要统计0 ~ i 中有多少 prefix[i] - k 的数量
 */
function subarraySum(nums: number[], k: number) {
    // 解法1:
    let map = new Map()
    let ans = 0
    let sum = 0                 // 记录 prefix[j - 1]的值
    map.set(0, 1)
    for (let n of nums) {
        sum += n
        if (map.get(sum - k)) {     // nums数组中只有一个元素 需要判断一下
            ans += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)

    }
    return ans
    // 解法2:
    let map = {}                            // 累加值 sum 为 key, 出现的次数为 value
    let ans = 0
    let sum = 0
    for (let n of nums) {
        sum += n
        if (sum === k) ans++                // sum 存在 ans++
        if (map[sum - k] !== 0) {           // sum - k 也存在 ans += sum对应的value 
            ans += map[sum - k]
        }
        map[sum] = (map[sum] || 0) + 1
    }
    return ans
}`

export const longestConsecutive = `
function longestConsecutive(nums: number[]) {
    let set = new Set(nums)              // 数组存入 hash 表中, 去重, 方便查找
    let ans = 0
    for (let n of nums) {
        if (!set.has(n - 1)) {           // 找 连续数组的 第一个数, 
            let cur = n
            let count = 1                // 如果是第一个数, count 初始值为 1
            while (set.has(cur + 1)) {   // 在 hash 表中找第一个数的下一个连续数
                count++
                cur++
            }
            ans = Math.max(ans, count)   // 对比 最长子串
        }
    }
    return ans
}`

export const findDuplicates = `
/**
 * 原地哈希 时间O(n) 空间O(1)
 * 由条件1 ≤ num ≤ n, 可以使用 num作为索引,  去查找其他值
 * 如果以 nums[num - 1]查找到的值为 负值, 证明已经出现过一次
 * 如果找到的值不为 负, 就把它变成 负值
 */
function findDuplicates(nums: number[]) {
    let res = []
    for (let n of nums) {
        let absN = Math.abs(n)
        if (nums[absN - 1] < 0) {
            res.push(absN)
        } else {
            nums[absN - 1] *= -1
        }
    }
    return res
}
/**
 * 时间 O(n) 空间O(n) 
 */
function findDuplicates(nums: number[]) {
    let set = new Set()
    let res = []
    for (let n of nums) {
        if (set.has(n)) {
            res.push(n)
        } else {
            set.add(n)
        }
    }
    return res
}`

export const findRepeatNumber = `
function findRepeatNumber(nums: number[]) {
    if (nums.length < 2) return nums[0]

    let set = new Set()
    for (let n of nums) {
        if (set.has(n)) return n
        set.add(n)
    }
}
`
export const finalValueAfterOperations = `
function finalValueAfterOperations(operations: string[]) {
    // 哈希表
    let ans = 0
    const map = {
        'X++': 1,
        '++X': 1,
        'X--': -1,
        '--X': -1,
    }
    for (let i of operations) {
        ans += map[i]
    }
    return ans
    
    // reduce 相加
    return operations.reduce((ans, cur) => {
        return cur === 'X++' || cur === '++X' ? ans + 1 : ans - 1
    }, 0)
}

console.log(finalValueAfterOperations(["++X", "++X", "X++"]))
`

export const kthDistinct = `
function kthDistinct(arr: string[], k: number) {
    // 哈希
    let map = {}
    for (let s of arr) {
        if (map[s]) map[s]++  // 已存在的值 value += 1
        else map[s] = 1       // 未存在的值已 arr 的元素作为 key, value = 1
    }
    let res = []
    for (let [key, val] of Object.entries(map)) {
        if (val === 1) res.push(key)  //  过滤value 为 1 的 key
    }
    return k > res.length ? '' : res[k - 1] // 如果过滤后 key 的 value 为 1 的数组长度小于 k 则证明没有, 反之返回 k - 1 的下标

    // 通过对比arr中元素的 indexOf 和 lastIndexOf 判断是否是同一个。找出唯一的
    let res = []
    for (let s of arr) {
        if (arr.indexOf(s) === arr.lastIndexOf(s)) res.push(s)
    }
    return k > res.length ? '' : res[k - 1]
}

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2))
`
export const countWords = `
function countWords(words1: string[], words2: string[]) {
    // 遍历数组1 放入map1中
    let map1 = {}
    for (let s of words1) {
        map1[s] = map1[s] || 0
        map1[s]++
    }
    // 遍历数组2 放入map2中
    let map2 = {}
    for (let s of words2) {
        map2[s] = map2[s] || 0
        map2[s]++
    }
    // 遍历 map1 中出现过1次的 key ,在map2中找 这个 key 对应的 count 同样为1的 ++
    let ans = 0
    for (let [key, count] of Object.entries(map1)) {
        if (count === 1 && map2[key] === 1) ans++
    }
    return ans
}
`
export const canIWin = `
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
`

export const threeSum = `
/**
 * 排序双指针 时间复杂度：O(n^2) 空间复杂度 O(1)
 */
function threeSum(nums: number[]) {
    const n = nums.length
    if (n <= 3) return []
    let res = []
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) break               // 第一个数 > 0,三数之和必然无法等于 0, 结束循环
        if (i > 0 && nums[i - 1] !== nums[i]) continue  // 去重
        let [l, r] = [i + 1, n - 1]          // 定义 b c 两端指针
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]])
                while (l < r && nums[l] === nums[l + 1]) {  // 去重
                    l++
                }
                while (l < r && nums[r] === nums[r - 1]) { // 去重
                    r--
                }
                l++
                r--
            } else if (sum < 0) {
                l++
            } else if (sum > 0) {
                r--
            }
        }
    }
    return res
}`

export const fourSum = `
/**
 */
function nSum(nums: number[], target: number) {
    let res: any[] = []
    let len = nums.length
    nums.sort((a, b) => a - b)

    const helper = (index: number, N: number, temp: number[]) => {
        // 如果下标越界了或者 N < 3 就没有必要在接着走下去了
        if (index === len || N < 3) return

        for (let i = index; i < len; i++) {
            // 剔除重复的元素
            if (i > index && nums[i] === nums[i - 1]) {
                continue
            }
            // 如果 N > 3 的话就接着递归
            // 并且在递归结束之后也不走下边的逻辑
            // 注意这里不能用 return
            // 否则循环便不能跑完整
            if (N > 3) {
                helper(i + 1, N - 1, [nums[i], ...temp])
                continue
            }
            // 当走到这里的时候,相当于在求「三数之和」了
            // temp 数组在这里只是把前面递归加入的数组算进来
            let left = i + 1
            let right = len - 1
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right] + temp.reduce((prev, curr) => prev + curr)
                if (sum === target) {
                    res.push([...temp, nums[i], nums[left], nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--
                    }
                    left++
                    right--
                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }

    helper(0, 4, [])
    return res
};
console.log(nSum([1, 0, -1, 0, -2, 2], 0))
`
