

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
 */
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
 * 把 B 数组合并到 A 数组中, 不使用额外的空间
 * 定义长度 为 m + n 的变量， 从后往前往 数组 A 的下标 k 添加数据
 * @param A 
 * @param m 
 * @param B 
 * @param n 
 * @returns 
 */
 function merge(A: number[], m: number, B: number[], n: number) {
    // [i--] i-- 返回 i ,指向 i 的下标，然后 i - 1 
    // [--i] --i 返回 i -= 1, 指向 i - 1 的下标
    let k = m + n - 1
    while (k >= 0) {
        if (n === 0) return  // 已经合并完成
        if (m < 1) {
            A[k--] = B[--n]
            continue
        }
        if (n < 1) {
            A[k--] = A[--m]
            continue
        }

        if (A[m - 1] > B[n - 1]) {
            A[k--] = A[--m]
        } else {
            A[k--] = B[--n]
        }
    }

    // 双指针 额外空间
    let a = m - 1
    let b = n - 1
    let k = m + n - 1
    while (a >= 0 || b >= 0) {
        if (a < 0) {
            A[k--] = B[b--] // A 空， 把 B 依次放进去
            continue
        }
        if (b < 0) {
            A[k--] = A[a--] // B 空， 把 A 依次放进去
            continue
        }
        // A，B从末尾开始比较，大的数 先加到 A 数组中， 从后往前
        if (A[a] > B[b]) {
            A[k--] = A[a--]
        } else {
            A[k--] = B[b--] 
        }
    }
    return A
}
console.log(merge([1, 2, 3], 3, [2, 5, 6], 3))
`


export const removeDuplicates = `
function removeDuplicates(nums: number[]) {
    const len = nums.length
    if (!len) return 0

    // 解法1 双指针
    let fast = 1
    let slow = 1
    while (fast < len) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow++] = nums[fast]
        }
        fast++
    }
    return slow
  
    // 解法2
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
export const maxSubArray = `
function maxSubArray(nums: number[]) {
    if (nums.length === 1) return nums[0]
    let ans = nums[0]
    let sum = 0

    for (let num of nums) {
        // if (sum > 0) sum += num
        // else sum = num
        sum = Math.max((sum + num), num)
        ans = Math.max(sum, ans)
    }
    return ans
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
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
        const middle = l + ((r - l) >> 1)
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

export const findRepeatNumber = `
function findRepeatNumber(nums: number[]) {
    if (nums.length < 2) return nums[0]

    let map = {}
    for (let i of nums) {
        if (map[i]) return i
        map[i] = 1
    }
}
`

export const minimumDifference = `
function minimumDifference(nums: number[], k: number) {
    if (nums.length === 1) return 0
    if (nums.length === 2) return Math.abs(nums[0] - nums[1])
    nums = nums.sort((a, b) => a - b)                               // 先从小到大排列
    let ans = Number.MAX_SAFE_INTEGER
    for (let i = 0; i <= nums.length - k; i++) {                  // 设置一个0 到 nums.length - k的区间 ?? 
        ans = Math.min(ans, Math.abs(nums[i + k - 1] - nums[i]))  // 从0开始移动 i 跟 i + k - 1的区间 比较大小
    }
    return ans
}
console.log(minimumDifference([9, 4, 1, 7], 2))
`

export const findMiddleIndex = `
/**
 * 数组全部元素之和为total
 * 遍历到第n个元素时，左侧元素之和为sum，那右侧元素之和为 total - sum - n;
 * 左右侧元素相等即为 sum === totoal - sum - n; 即 2 * sum + n  === total
 * 当满足2 * sum + n  === total的情况下。 n的下标就是middleIndex
 * @param nums 
 */
function findMiddleIndex(nums: number[]) {
    if (nums.length === 1) return 0
    const total = nums.reduce((a, b) => a + b, 0)
    // let sum = 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (2 * sum + nums[i] === total) return i
    //     sum += nums[i]
    // }

    let left = 0                                // left 初始化为0
    let right = total - nums[0]                 // right初始化为除了第一位元素 之外的所有元素和（遍历从第一位开始）
    for (let i = 0; i < nums.length; i++) {
        if (left === right) return i            // 找到中间值
        if (i === nums.length - 1) return -1    // 防止出现越界，
        left += nums[i]                         // 每向右移动一位， left和增加。 right和减少
        right -= nums[i + 1]                    // 设置i === nums.length - 1防止超出数组范围
    }
    return -1
}
`

export const countQuadruplets = `
function countQuadruplets(nums: number[]) {
    let ans = 0
    for (let a = 0; a < nums.length - 3; a++) {
        for (let b = a + 1; b < nums.length - 2; b++) {
            for (let c = b + 1; c < nums.length - 1; c++) {
                for (let d = c + 1; d < nums.length; d++) {
                    if (nums[a] + nums[b] + nums[c] === nums[d]) ans++
                }
            }
        }
    }
    return ans
}
console.log(countQuadruplets([1, 1, 1, 3, 5]))
`

export const countKDifference = `
function countKDifference(nums: number[], k: number) {
    let ans = 0
    // 暴力法
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) ans++
        }
    }

    // 快慢指针
    let i = 0
    let j = 1
    while (j < nums.length) {
        if (Math.abs(nums[i] - nums[j]) === k) ans++
        j++
        if (j === nums.length) { // 遍历到最后一个的时候。 i + 1, j的值重置为i + 1继续开始遍历
            i += 1 // i++ ?? i+=1比i++ 执行用时更少。猜测是因为i += 1
            j = i + 1
        }
    }
    return ans
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

export const maximumDifference = `
function maximumDifference(nums: number[]) {
    let ans = -1 // 默认返回值
    let min = nums[0] // 因为数组length >= 2,可以取默认最小数据为第一个
    for (let num of nums) { // min 取第一个 可以从第二个元素开始遍历， 懒得写for循环 使用 for...of
        if (num > min) { 
            ans = Math.max(ans, num - min) // 如果nums[j] > min 比较ans和 2个数据差值 的大小
        } else {
            min = Math.min(min, num) // nums[j] <= min ，比较 min和当前值的最小的 更新最小值
        }
    }
    return ans
}

console.log(maximumDifference([9, 4, 3, 2]))
`

export const construct2DArray = `
function construct2DArray(original: number[], m: number, n: number) {
    if (m * n !== original.length) return []

    // 一次循环，挨个遍历， 在里面计算位数
    let ans = Array(m).fill(0).map(() => Array(n).fill(0)) // 如果fill的参数为引用类型，会导致都执行都一个引用类型, 使用map返回新数组的特性。 保证内部数组内存指向干净
    for (let i = 0; i < original.length; i++) {
        ans[~~(i / n)][i % n] = original[i]
    }

    // 一次循环， 每次遍历 n 个长度 截取
    let ans = []
    for (let i = 0; i < original.length; i += n) { // 每次 截取到 i 跟 i + n 之间的数据之后， i = i + n
        ans.push(original.slice(i, i + n))
    }

    // 双循环， 第一层遍历m的长度 ，第二层遍历n的长度
    let ans = []
    for (let i = 0; i < m; i++) {
        let temp = []
        for (let j = 0; j < n; j++) {
            temp.push(original[i * n + j])
        }
        ans.push(temp)
    }
    return ans
}

console.log(construct2DArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3))
`

export const twoOutOfThree = `
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]) {
    // 解法1:
    // 取 1 跟 2、1 跟 3 、2 跟 3 的交集，去重
    let a = nums1.filter(n => nums2.includes(n))
    let b = nums1.filter(n => nums3.includes(n))
    let c = nums2.filter(n => nums3.includes(n))
    return Array.from(new Set([...a, ...b, ...c]))

    // 解法2:
    // 第一次遍历 取 1 跟 2 、 1 跟 3的交集。去重 放入 ans
    let ans: number[] = []
    for (let n of nums1) {
        if (ans.includes(n)) continue
        if (nums2.includes(n) || nums3.includes(n)) ans.push(n)
    }
    // 第二次遍历 取 2 跟 3 的交集 去重 放入 ans 
    for(let n of nums2) {
        if(ans.includes(n)) continue
        if(nums3.includes(n)) ans.push(n)
    }
    return ans
}

console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]))
`

export const minMovesToSeat = `
function minMovesToSeat(seats: number[], students: number[]) {
    const a = seats.sort((a, b) => a - b)
    const b = students.sort((a, b) => a - b)
    let ans = 0
    for (let i = 0; i < a.length; i++) {
        ans += Math.abs(a[i] - b[i])
    }
    return ans
}
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6]))
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
    return k > res.length ? '' : res[k - 1] // 如果过滤后 key 的 value 为 1 的数组长度小于 k 则证明没有， 反之返回 k - 1 的下标

    // 通过对比arr中元素的 indexOf 和 lastIndexOf 判断是否是同一个。找出唯一的
    let res = []
    for (let s of arr) {
        if (arr.indexOf(s) === arr.lastIndexOf(s)) res.push(s)
    }
    return k > res.length ? '' : res[k - 1]
}

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2))
`

export const smallestEqual = `
function smallestEqual(nums: number[]) {
    let ans = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        if ((i % 10) === nums[i]) ans = Math.min(ans, i)
    }
    return ans === Number.MAX_SAFE_INTEGER ? -1 : ans
}

console.log(smallestEqual([4, 3, 2, 1]))
`

export const timeRequiredToBuy = `
function timeRequiredToBuy(tickets: number[], k: number) {
    if(tickets.length === 1) return tickets[0]
    // 解法1
    // 1. 如果买票人 i 排队在买票人 k 之前，或者恰好是 k ,即 i <= k
    // 2. 那么 i 最多可以买 tickets[k] 张票， 最少可以买到 tickets[i] 张，那么他买票需要的时间就是 min(tickets[i], tickets[k])
    // 3. 如果买票人 i 在 k 之后，那么 i 能买到的票最多是 tickets[k] - 1 最少是 tickets[i] 张
    let ans = 0
    for (let i = 0; i < tickets.length; i++) { // 计算过程中每个人 i 所需要的买票时间
        if (i <= k) {   // 买票人 i 在 买票人 k 之前
            ans += Math.min(tickets[i], tickets[k]) 
        } else {        // 买票人 i 在 买票人 k 之后
            ans += Math.min(tickets[i], tickets[k] - 1)
        }
    }
    return ans
    // 解法2
    let i = 0 // 当前购买人
    let ans = 0 // 买票时间累积
    while (tickets[k] !== 0) {  // 设置停止范围：模拟购票，第 k 个人买完停止
        if (tickets[i] > 0) {   // 剔除已经买完票的人
            tickets[i]--        // 购票次数 -1
            ans++               // 累积买票人的时间
        }
        i++
        if (i === tickets.length) i = 0 // 开启下一轮排队购票
    }
    return ans
}

console.log(timeRequiredToBuy([2, 3, 2], 2))
`
export const maxDistance = `
function maxDistance(colors: number[]) {
    // 暴力
    let ans = 0
    for (let i = 0; i < colors.length; i++) {
        for (let j = i + 1; j < colors.length; j++) {
            if (colors[i] !== colors[j]) {
                ans = Math.max(ans, Math.abs(i - j))
            }
        }
    }
    return ans

    // 贪心
    // 判断首尾是否相同， 使用两个指针 i j 同时从两端往中间移动，
    // 每移动一步，就判断 i 是否跟尾部不相等或者 j 跟首部不相等
    // 最大长度就是首尾不相等
    let n = colors.length
    let i = 0
    let j = n - 1
    while (i < j) {
        // 为什么不用colors[i] !== colors[j] 考虑[1, 2, 2, 1]
        if (colors[i] !== colors[n - 1] || colors[j] !== colors[0]) break 
        i++
        j--
    }
    return j
}
console.log(maxDistance([1, 8, 3, 8, 3]))
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

export const targetIndices = `
function targetIndices(nums: number[], target: number) {
    // 遍历
    // 1. 先排序
    // 2. 找到 nums[i] === target 的下标 返回
    nums = nums.sort((a: number, b: number) => a - b)
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) ans.push(i)
    }
    return ans

    // 计数
    // 1. 统计 数组中小于 target 的数量a
    // 2. 统计 数组汇总等于 target 的数量b
    // 3. 返回的目标 数组 长度为 b
    // 4. 目标中数组 的下标 是 小于 target数量 a + b数组中的下标
    let a = 0
    let b = 0
    let ans = []
    for (let n of nums) {
        if (n < target) a++
        else if (n === target) b++
    }
    // for (let i = 0; i < b; i++) {
    //     let index = i + a
    //     ans.push(index)
    // }
    // return ans
    return Array(b).fill(0).map((v, i) => i + a)
}

console.log(targetIndices([1, 2, 5, 2, 3], 3))
`

export const findEvenNumbers = `
function findEvenNumbers(digits: number[]) {
    let ans = []
    let len = digits.length
    for (let i = 0; i < len; i++) {
        if (digits[i] === 0) continue             // 百位为 0 的跳过
        for (let j = 0; j < len; j++) {
            if (i === j) continue                 //  i === j 跳过
            for (let k = 0; k < len; k++) {
                if (digits[k] % 2 !== 0) continue // 分位 不是偶数的 跳过
                if (k === i || k === j) continue  // i === k, k === j 跳过  
                let sum = digits[i] * 100 + digits[j] * 10 + digits[k]
                ans.push(sum)
            }
        }
    }
    return Array.from(new Set(ans)).sort((a, b) => a - b)
}

console.log(findEvenNumbers([2, 2, 8, 8, 2]))
`

export const game = `
function game(guess: number[], answer: number[]) {
    // 解法一： 遍历 找相等
    let ans = 0
    for (let i = 0; i < answer.length; i++) {
        if (guess[i] === answer[i]) ans++
    }
    return ans
    // 解法二：过滤相等的 length
    return answer.filter((item, index) => item === guess[index]).length
}
`

export const minCount = `
function minCount(coins: number[]) {
    // 解法一： 遍历
    // 求 最少次数，那就是 n / 2 或 n / 2 + 1, 通过Math.ceil 向上取整
    let ans = 0
    for (let n of coins) {
        ans += Math.ceil(n / 2)
    }
    return ans
    // 解法二： reduce
    // accumulator + Math.ceil(currentValue / 2)
    return coins.reduce((accumulator, currentValue) => { return accumulator + Math.ceil(currentValue / 2) }, 0)
}
`

export const minArray = `
function minArray(numbers: number[]) {
    // 暴力
    // 数组旋转过，最小的数字肯定是 比首个 比 数组中第一位更小的数字
    for(let i = 0; i < numbers.length;i++){
        if(numbers[i] < numbers[0]) return numbers[i]
    }
    return numbers[0]
    
    // 数据少的时候 不考虑性能
    return Math.min(...numbers)

    // 二分法
    // 1. 找出中间数字，（left + (right - left),是为了防止 left 跟 right 过大造成相加 溢出）
    // 2. middle数 小于 right, 说明最小值在左半区，设置 middle 为 right 边界
    // 3. middle数 大于 right，说明最小值在右半区，设置 middle + 1 为 left 边界
    // 4. middle数 等于 right, right--
    let left = 0
    let right = numbers.length - 1
    while (left < right) {
        // (right - left) >> 1 等同于 Math.floor((right - left) / 2) or ~~((right - left) / 2)
        const middle = left + ((right - left) >> 1)   
        if (numbers[middle] < numbers[right]) right = middle 
        else if (numbers[middle] > numbers[right]) left = middle + 1   
        else right -= 1
    }
    return numbers[left]
}
console.log(minArray([2, 2, 2, 0, 1]))
`

export const thirdMax = `
function thirdMax(nums: number[]) {
    // 定义 a b c 三个数，初始化为 Number.MIN_SAFE_INTEGER, 遍历 与 n 做比较
    // a b c 为降序排列的 nums 中的前三位数字
    let [a, b, c] = Array(3).fill(Number.MIN_SAFE_INTEGER)
    for (let n of nums) {
        if (n > a) {
            [a, b, c] = [n, a, b]
        } else if (a > n && n > b) {
            [b, c] = [n, b]
        } else if (b > n && n > c) {
            c = n
        }
    }
    return c > Number.MIN_SAFE_INTEGER ? c : a

    // 先降序排序数组
    // 数组 小于三位 直接返回最大值
    // 从第二位开始遍历， 找到不相同的相邻两位元素 的第三个返回
    nums = nums.sort((a, b) => b - a)
    if (nums.length < 3) return Math.max(...nums)
    let count = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            ++count
            if (count === 3) return nums[i]
        }
    }
    return nums[0]
}

console.log(thirdMax([2, 1, 2, 3, 4]))
`

export const missingNumber = `
function missingNumber(nums: number[]) {
    // 二分法
    // 0 ~ n - 1， 说明下标跟元素是一致的。
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        let m = (l + r) >> 1
        if (nums[m] === m) { // nums[m] === m 说明想寻找的数在 m 右半区
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return l
}
console.log(missingNumber([0]))
`

export const randomizedSet = `
function RandomizedSet() {
    this.nums = []                  // 储存 val 的数组
    this.numsLocation = new Map()   // 储存 val 在数组中的下标
}

RandomizedSet.prototype.insert = (val) => {
    if (this.numsLocation.has(val)) return false    // 已存在val 返回false

    this.numsLocation.set(val, this.nums.length)    // 为什么先储存 val 的下标。因为 val的下标 刚好是 nums的length - 1
    this.nums.push(val)                             // 所以在储存到nums前先储存 val的下标 不需要 - 1了, 放到尾部的操作是 O(1)
    return true
}

RandomizedSet.prototype.remove = (val) => {
    if (!this.numsLocation.has(val)) return false

    const location = this.numsLocation.get(val)    // 找到被删除目标 val 的下标
    this.numsLocation.set(this.nums[this.nums.length - 1], location) // 将数组中最后一个位置的 元素 下标改成 val的下标
    this.numsLocation.delete(val)

    this.nums[location] = this.nums[this.nums.length - 1] // 将 nums 最后一个位置的元素覆盖目标 val 的下标位置
    this.nums.length--                                    // 通过减去length 删除最后一位
    return true
}

RandomizedSet.prototype.getRandom = () => {
    const index = Math.floor(Math.random() * this.nums.length)
    return this.nums[index]
}

class RandomizedSet {
    private nums: any[]
    private locationMap: Map<any, number>

    private constructor() {
        this.nums = []
        this.locationMap = new Map()
    }
    public insert(val: any): boolean {
        if (this.locationMap.has(val)) return false

        this.locationMap.set(val, this.nums.length)
        this.nums.push(val)
        return true
    }
    public remove(val: any): boolean {
        if (!this.locationMap.has(val)) return false

        const location: number = this.locationMap.get(val) || 0
        this.locationMap.set(this.nums[this.nums.length - 1], location)
        this.locationMap.delete(val)

        this.nums[location] = this.nums[this.nums.length - 1]
        this.nums.pop()
        return true
    }
    public getRandom(): number {
        const index = Math.floor(Math.random() * this.nums.length)
        return this.nums[index]
    }
}
`

export const generateMatrix = `
function generateMatrix(n: number) {
    let matrix = Array(n).fill(0).map(() => Array(n).fill(0)) // 创建一个 n * n 的数组
    // 矩阵的的范围为 n * n ，所以四条边界是 从 0 到 n - 1
    // 矩阵四边：top -> right, top -> bottom, right -> left, bottom -> top
    // 模拟路线：逆时针矩阵， topLeft -> topRight, topRight -> bottomRight, rightBottom -> leftBottom, leftBottom -> leftTop
    // 一层一层遍历到最后
    // 矩阵数组从 top 到 bottom 储存
    let left = 0                // left 界限值从 0 开始
    let right = n - 1           // right 界限值从 n - 1 开始
    let top = 0                 // top 界限值从 0 开始
    let bottom = n - 1          // bottom 界限值从 n - 1 开始
    let num = 1
    while (num <= n * n) {
        for (let i = left; i <= right; i++) {  // 输入 Top_Array, 设定边界值从 topLeft -> topRight
            matrix[top][i] = num               // 指针从 topLeft -> topRight 记录数据, 存入 top 下标的数组中
            num++
        }
        top++                                  // topLeft -> topRight 数据记录完成，top 向上移动
        for (let i = top; i <= bottom; i++) {  // 输入 Right_Array, 设定边界值从 rightTop -> rightBottom
            matrix[i][right] = num             // 指针从 rightTop -> rightBottom 记录数据, 存入 top++ 后下标的数组中
            num++
        }
        right--                                // rightTop -> rightBottom 数据记录完成， right 向左移动
        for (let i = right; i >= left; i--) {  // 输入 Bottom_Array, 设定边界值从 bottomRight -> bottomLeft
            matrix[bottom][i] = num            // 指针从 bottomRight -> bottomLeft 记录数据, 存入 bottom 下标的数组中
            num++
        }
        bottom--                               // bottomRight -> bottomLeft 数据记录完成，bottom 向上移动
        for (let i = bottom; i >= top; i--) {  // 输入 Left_Array, 设定边界值 leftBottom -> leftTop
            matrix[i][left] = num              // 指针从 leftBottom -> leftTop 记录数据, 存入 left 下标的数组中
            num++
        }
        left++                                 // leftBottom -> leftTop 数据记录完成，left 向右移动（开始内圈循环）
    }
    return matrix
}
`

export const minSubArrayLen = `
function minSubArrayLen(target: number, nums: number[]) {
    let left = 0                                    // 滑动窗口 左值
    let right = 0                                   // 滑动窗口 右值
    let sum = nums[0]                               // 元素之和 - 默认第一个
    let ans = Number.MAX_SAFE_INTEGER               // 最小长度的子数组长度
    while (right < nums.length) {
        if (sum >= target) {                        // sum 和 大于 target
            ans = Math.min(ans, right - left + 1)   // 先 存一下 right 跟 left 区间的长度
            if (ans === 1) return ans               // 如果遇到 ans 为1的情况直接返回， 没有比1更小的长度
            sum -= nums[left]                       // 如果sum >= target的时候， 减去 移动过的值
            left++                                  // 指针 left 向右移动
        } else {                                    // left 移动前，先减去 left 值。right 移动后 加上移动后的值
            right++                                 // sum 小于 target， 指针 right 向右移动
            sum += nums[right]                      // 累计 移动过的值
        }
    }
    return ans === Number.MAX_SAFE_INTEGER ? 0 : ans
}
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
`

export const relativeSortArray = `
function relativeSortArray(arr1: number[], arr2: number[]) {
    let map = new Map()
    arr2.forEach((val, key) => map.set(val, key))
    return arr1.sort((a, b) => {
        const A = map.has(a) ? map.get(a) : (1000 + a)
        const B = map.has(b) ? map.get(b) : (1000 + b)
        return A - B
    })
}
console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]))
`

export const mergeSort = `
/**
 * flat 拍平 sort排序 时间复杂度： O(nlogn)
 * @param arr 
 */
 function mergeSort(arr: number[][]) {
    if(!arr.length) return []
    return [...arr.flat(Infinity)].sort((a: any, b: any) => a - b)
}
function merge(arr1: number[], arr2: number[]) {
    let res = []
    while (arr1.length > 0 && arr2.length > 0) {    // 有一个数组元素空了 证明另一个数组剩下的值都大于这个数组中的元素，循环停止
        if (arr1[0] < arr2[0]) {                    // 从头取出来比较大小， 塞到res数组中
            res.push(arr1.shift())
        } else {
            res.push(arr2.shift())
        }
    }
    return res.concat(arr1, arr2)                   // 把多余的元素都塞到res中
}
/**
 * 归并排序 时间复杂度O(nlogn)(归并排序的递归树，树种每层元元素的个数最多是n，也就代表着每层最多进行n次比较，而递归树最多只有log2n层，合在一起就是nlog2n)
 * @param arr 
 * @returns 
 */
function mergeSort(arr: any[][]) {
    if (!arr.length) return []
    while (arr.length > 1) {                       // 最后一个数组就是完整的，所以需要 > 1 的时候停止
        let arr1 = arr.shift() || []               // 取出arr[0]
        let arr2 = arr.shift() || []               // 取出arr[1]
        let tempArr = merge(arr1, arr2)            // 每次合并两个子数组
        arr.push(tempArr)                          // 压入arr尾部
    }
    return arr[0]                                  // 剩下唯一一个数组就是排序好的数组
}
console.log(mergeSort([[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3], [4, 5, 6]]))
`


export const pairSums = `
/**
 * 排序双指针
 * @param nums 
 * @param target 
 * @returns 
 */
function pairSums(nums: number[], target: number) {
    let l = 0
    let r = nums.length - 1
    let res = []
    nums = nums.sort((a, b) => a - b)
    while (l < r) {
        const sum = nums[l] + nums[r]
        if (sum > target) {
            r--
        } else if (sum < target) {
            l++
        } else {
            res.push([nums[l], nums[r]])
            l++
            r--
        }
    }
    return res
}
/**
 * 哈希 - 重点： 使用过一次要删掉，防止重复使用
 * @param nums 
 * @param target 
 * @returns 
 */
function pairSums(nums: number[], target: number) {
    let map = new Map()                                     // 哈希表  key:数字 => value: 出现的次数
    let res = []
    for (let n of nums) {
        const key = target - n

        if (map.has(key)) {
            res.push([key, n])

            let value = map.get(key) - 1                    // 出现的次数减一，防止两个相同的数据相加达到target，而只有一个数据
            value ? map.set(key, value) : map.delete(key)   // 出现次数减一后大于0, 保留这个数，如果没有就删掉 
        } else {
            map.set(n, (map.get(n) || 0) + 1)
        }
    }
    console.log(map)
    return res
}
`

export const sortArray = `
/**
 * 快速排序 - 时间复杂度：O(NlogN),空间复杂度：O(logN) 
 */
function sortArray(nums: number[]): number[] {
    if (nums.length <= 1) return nums
    let left = []
    let right = []
    let mid = nums.length >> 1
    let pivot = nums.splice(mid, 1)[0]
    for (let n of nums) {
        if (n > pivot) {
            right.push(n)
        } else {
            left.push(n)
        }
    }
    return sortArray(left).concat([pivot], sortArray(right))
}
/**
 * 选择排序-时间复杂度：O(N^2)，空间复杂度：O(1)
 */
function sortArray(nums: number[]) {
    let n = nums.length
    for (let i = n - 1; i > 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (nums[j] > nums[i]) {
                [nums[j], nums[i]] = [nums[i], nums[j]]
            }
        }
    }
    return nums
}
/**
 * 冒泡排序-时间复杂度：O(N^2)，空间复杂度：O(1)
 */
function sortArray(nums: number[]) {
    let n = nums.length
    for (let i = n - 1; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (nums[j - 1] > nums[j]) {
                [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]]
            }
        }
    }
    return nums
}
`

export const findKthLargest = `
function quickSort(nums: number[]): number[] {
    if (nums.length <= 1) return nums
    let left = []
    let right = []
    let mid = nums.length >> 1
    let pivot = nums.splice(mid, 1)[0]
    for (let n of nums) {
        if (n > pivot) left.push(n)
        else right.push(n)
    }
    return quickSort(left).concat([pivot], quickSort(right))
}
/**
 * 快排降序，取第k个数，
 * 堆排序暂缓
 */
function findKthLargest(nums: number[], k: number) {
    return quickSort(nums)[k - 1]
}
`