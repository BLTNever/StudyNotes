export const findShortSubArray = `
/**
 *  1.用哈希表去记录每个元素出现的次数，用元素的值做key, value存储[值第一次出现的下标start，值最后出现的下标end， 出现的次数count]
 *  2.遍历这个哈希表的值，出现的次数大于max值的时候，重新给max值赋值，记录min最短长度为当前值的end下标 - start下标
 *  3.如果count === max值，对比已存在的min值和当前的end - start值，找出最短长度
 *  4.数组下标从0开始，return的min值+1
 * /
function findSubArray(nums) {
    let obj = {}
    let max = 0
    nums.forEach((item, key) => {
        if (obj.hasOwnProperty(item)) {
            obj[item][1] = key
            obj[item][2]++
        } else {
            obj[item] = [key, key, 1]
        }
    })
    let min = 0
    for (let [start, end, count] of Object.values(obj)) {
        if (count > max) {
            max = count
            min = end - start
        } else if (count === max) {
            min = Math.min(min, (end - start))
        }
    }
    return min + 1
}

// 一次遍历，
function findSubArray(nums) {
    let obj = {}
    let max = 0
    let min = 0
    nums.forEach((v, k) => {
        if (obj.hasOwnProperty(v)) {
            obj[v][1] = k
            obj[v][2]++
            if(obj[v][2] > max) {
                max = obj[v][2]
                min = obj[v][1] - obj[v][0]
            } else if(obj[v][2] === max) {
                min = Math.min(min, obj[v][1] - obj[v][0])
            }
        } else {
            obj[v] = [k, k, 1]
        }
    })
    return min + 1
}
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
转化为树的形式：
root = {
    id: 1,
    children: [{
        id: 2,
        children: [{id: 4, children: [] }]
    }, {
        id: 3,
       children: [{id: 5, children: [] },{id: 6, children: [] }]
    }]
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

export const _merge1 = `
/**
 * 1. 循环遍历A跟B
 * 2. A空，从B中移除第一个push到result中
 * 3. B空，从A中移除第一个push到result中
 * 4. A B不为空取数组第一个判断大小 选择push不同的数据
 * /
function _merge(A, B) {
    let result = []

    while(A.length || B.length) {
        if(!A.length) {
            result.push(B.shift())
            continue
        }
        if(!B.length) {
            result.push(A.shift())
            continue
        }

        let a = A[0]
        let b = B[0]
        if(a > b) {
            result.push(B.shift())
        }else {
            result.push(A.shift())
        }
    }
    return result
}
`
export const _merge2 = `
/**
 * 
 * /
function __merge(A, m, B, n) {
    // 设置一个指针，指针初始化指向A的末尾
    // 然后向左移动指针
    let current = m + n - 1

    while (current >= 0) {
        if (n === 0) return

        if (m < 1) {
            A[current--] = B[--n]
            continue
        }
        if (n < 1) {
            A[current--] = A[--m]
            continue
        }

        if (A[m - 1] > B[n - 1]) {
            A[current--] = A[--m]
        } else {
            A[current--] = B[--n]
        }
    }
}
`


export const removeDuplicates = `
function removeDuplicates(nums: number[]) {
    // const len = nums.length
    // if (!len) return 0
    // let fast = 1
    // let slow = 1
    // while (fast < len) {
    //     if (nums[fast] !== nums[fast - 1]) {
    //         nums[slow++] = nums[fast]
    //     }
    //     fast++
    // }
    // return slow
    const len = nums.length
    if (!len) return 0
    let ans = 0                      // 写指针
    for (let i = 1; i < len; i++) {  // 读指针
        if (nums[ans] !== nums[i]) {
            ans++                    // 写指针前进一步
            nums[ans] = nums[i]      // 读指针的内容写入到写指针的位置
        }
    }
    return ans + 1
}
`
export const removeElement = `
function removeElement(nums: number[], val: number) {
    const len = nums.length
    if (!len) return 0
    let ans = 0
    for (let i = 0; i < len; i++) {
        if (nums[i] !== val) {
            nums[ans] = nums[i] // 先覆盖值
            ans++               // 写指针前进一步
        }
    }
    return ans
}
console.log(removeElement([3, 2, 3, 2], 3))
`

export const searchInsert = `
function searchInsert(nums: number[], target: number) {
    // 解法1 ： 遍历ans  当target 小于等于当前值的话 返回当前下标
    const ans = nums.length
    for (let i = 0; i < ans; i++) {
        if (target <= nums[i]) {
            return i
        }
    }
    return ans

    // 解法2: 二分法
    // l从0开始，r 取最后一位
    // 循环执行 定义middle中间值 取 l + (r - l)
    // target 大于当前值的话  l 等于中间值 + 1
    // target 小于等于当前值 r 等于中间值 - 1 同时数组的长度等于  左半区 数据的长度
    let l = 0
    let r = nums.length - 1
    let ans = nums.length
    while (l <= r) {
        const middle = l + Math.floor((r - l) >> 1)
        if (target > nums[middle]) {
            l = middle + 1
        } else {
            ans = middle
            r = middle - 1
        }
    }
    return ans
}

console.log(searchInsert([1, 2, 3, 4, 6, 7], 5))
`