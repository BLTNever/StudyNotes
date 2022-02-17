
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
            mapper[item.parentId].children.push(item) // 找到mapper存在key为parentId的元素，在children里push当前的元素
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
 *  1.用哈希表去记录每个元素出现的次数，用元素的值做key, value存储[值第一次出现的下标start，值最后出现的下标end， 出现的次数count]
 *  2.遍历这个哈希表的值，出现的次数大于max值的时候，重新给max值赋值，记录min最短长度为当前值的end下标 - start下标
 *  3.如果count === max值，对比已存在的min值和当前的end - start值，找出最短长度
 *  4.数组下标从0开始，return的min值+1
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
// 一次遍历，
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
 * 不能使用 Obeject、Map、Set的前提下，使用Array模拟
 * 也不能使用indexOf, inCludes 前提下，遍历模拟
 * 为了尽可能避免冲突，应当将 BASE 取为一个质数
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
            if (!map.has(temp)) map.set(temp, Number(count))
            else map.set(temp, map.get(temp) + Number(count))
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