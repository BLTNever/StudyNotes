
export const _merge1 = `
/**
 * 1. 循环遍历A跟B
 * 2. A空,从B中移除第一个push到result中
 * 3. B空,从A中移除第一个push到result中
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
 * 定义长度 为 m + n 的变量, 从后往前往 数组 A 的下标 k 添加数据
 * @param A 
 * @param m 
 * @param B 
 * @param n 
 * @returns 
 */
 function merge(A: number[], m: number, B: number[], n: number) {
    // [i--] i-- 返回 i ,指向 i 的下标,然后 i - 1 
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
            A[k--] = B[b--] // A 空, 把 B 依次放进去
            continue
        }
        if (b < 0) {
            A[k--] = A[a--] // B 空, 把 A 依次放进去
            continue
        }
        // A,B从末尾开始比较,大的数 先加到 A 数组中, 从后往前
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



export const maxSubArray = `
function maxSubArray(nums: number[]) {
    if (nums.length === 1) return nums[0]
    let ans = nums[0]
    let sum = 0

    for (let n of nums) {
        sum = Math.max((sum + n), n)
        ans = Math.max(sum, ans)
    }
    return ans
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
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
 * 遍历到第n个元素时,左侧元素之和为sum,那右侧元素之和为 total - sum - n;
 * 左右侧元素相等即为 sum === totoal - sum - n; 即 2 * sum + n  === total
 * 当满足2 * sum + n  === total的情况下。 n的下标就是middleIndex
 * @param nums 
 */
function findMiddleIndex(nums: number[]) {
    if (nums.length === 1) return 0
    const total = nums.reduce((a, b) => a + b, 0)
   
    let left = 0                                // left 初始化为0
    let right = total - nums[0]                 // right初始化为除了第一位元素 之外的所有元素和(遍历从第一位开始)
    for (let i = 0; i < nums.length; i++) {
        if (left === right) return i            // 找到中间值
        if (i === nums.length - 1) return -1    // 防止出现越界,
        left += nums[i]                         // 每向右移动一位, left和增加。 right和减少
        right -= nums[i + 1]                    // 设置i === nums.length - 1防止超出数组范围
    }
    return -1

    // ohter
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (2 * sum + nums[i] === total) return i
        sum += nums[i]
    }

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




export const maximumDifference = `
function maximumDifference(nums: number[]) {
    let ans = -1 // 默认返回值
    let min = nums[0] // 因为数组length >= 2,可以取默认最小数据为第一个
    for (let num of nums) { // min 取第一个 可以从第二个元素开始遍历, 懒得写for循环 使用 for...of
        if (num > min) { 
            ans = Math.max(ans, num - min) // 如果nums[j] > min 比较ans和 2个数据差值 的大小
        } else {
            min = Math.min(min, num) // nums[j] <= min ,比较 min和当前值的最小的 更新最小值
        }
    }
    return ans
}

console.log(maximumDifference([9, 4, 3, 2]))
`

export const construct2DArray = `
function construct2DArray(original: number[], m: number, n: number) {
    if (m * n !== original.length) return []

    // 一次循环,挨个遍历, 在里面计算位数
    let ans = Array(m).fill(0).map(() => Array(n).fill(0)) // 如果fill的参数为引用类型,会导致都执行都一个引用类型, 使用map返回新数组的特性。 保证内部数组内存指向干净
    for (let i = 0; i < original.length; i++) {
        ans[~~(i / n)][i % n] = original[i]
    }

    // 一次循环, 每次遍历 n 个长度 截取
    let ans = []
    for (let i = 0; i < original.length; i += n) { // 每次 截取到 i 跟 i + n 之间的数据之后, i = i + n
        ans.push(original.slice(i, i + n))
    }

    // 双循环, 第一层遍历m的长度 ,第二层遍历n的长度
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
    // 取 1 跟 2、1 跟 3 、2 跟 3 的交集,去重
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
    // 1. 如果买票人 i 排队在买票人 k 之前,或者恰好是 k ,即 i <= k
    // 2. 那么 i 最多可以买 tickets[k] 张票, 最少可以买到 tickets[i] 张,那么他买票需要的时间就是 min(tickets[i], tickets[k])
    // 3. 如果买票人 i 在 k 之后,那么 i 能买到的票最多是 tickets[k] - 1 最少是 tickets[i] 张
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
    while (tickets[k] !== 0) {  // 设置停止范围: 模拟购票,第 k 个人买完停止
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
    // 判断首尾是否相同, 使用两个指针 i j 同时从两端往中间移动,
    // 每移动一步,就判断 i 是否跟尾部不相等或者 j 跟首部不相等
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



export const targetIndices = `
function targetIndices(nums: number[], target: number) {
    // 暴力
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
    for (let n of nums) {
        if (n < target) a++
        else if (n === target) b++
    }
    // let ans = []
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
    // 解法一:  遍历 找相等
    let ans = 0
    for (let i = 0; i < answer.length; i++) {
        if (guess[i] === answer[i]) ans++
    }
    return ans
    // 解法二: 过滤相等的 length
    return answer.filter((item, index) => item === guess[index]).length
}
`

export const minCount = `
function minCount(coins: number[]) {
    // 解法一:  遍历
    // 求 最少次数,那就是 n / 2 或 n / 2 + 1, 通过Math.ceil 向上取整
    let ans = 0
    for (let n of coins) {
        ans += Math.ceil(n / 2)
    }
    return ans
    // 解法二:  reduce
    // accumulator + Math.ceil(currentValue / 2)
    return coins.reduce((accumulator, currentValue) => { return accumulator + Math.ceil(currentValue / 2) }, 0)
}
`



export const thirdMax = `
function thirdMax(nums: number[]) {
    // 定义 a b c 三个数,初始化为 Number.MIN_SAFE_INTEGER, 遍历 与 n 做比较
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
    // 从第二位开始遍历, 找到不相同的相邻两位元素 的第三个返回
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
    // 矩阵的的范围为 n * n ,所以四条边界是 从 0 到 n - 1
    // 矩阵四边: top → right, top → bottom, right → left, bottom → top
    // 模拟路线: 逆时针矩阵, topLeft → topRight, topRight → bottomRight, rightBottom → leftBottom, leftBottom → leftTop
    // 一层一层遍历到最后
    // 矩阵数组从 top 到 bottom 储存
    let left = 0                // left 界限值从 0 开始
    let right = n - 1           // right 界限值从 n - 1 开始
    let top = 0                 // top 界限值从 0 开始
    let bottom = n - 1          // bottom 界限值从 n - 1 开始
    let num = 1
    while (num <= n * n) {
        for (let i = left; i <= right; i++) {  // 输入 Top_Array, 设定边界值从 topLeft → topRight
            matrix[top][i] = num               // 指针从 topLeft → topRight 记录数据, 存入 top 下标的数组中
            num++
        }
        top++                                  // topLeft → topRight 数据记录完成,top 向上移动
        for (let i = top; i <= bottom; i++) {  // 输入 Right_Array, 设定边界值从 rightTop → rightBottom
            matrix[i][right] = num             // 指针从 rightTop → rightBottom 记录数据, 存入 top++ 后下标的数组中
            num++
        }
        right--                                // rightTop → rightBottom 数据记录完成, right 向左移动
        for (let i = right; i >= left; i--) {  // 输入 Bottom_Array, 设定边界值从 bottomRight → bottomLeft
            matrix[bottom][i] = num            // 指针从 bottomRight → bottomLeft 记录数据, 存入 bottom 下标的数组中
            num++
        }
        bottom--                               // bottomRight → bottomLeft 数据记录完成,bottom 向上移动
        for (let i = bottom; i >= top; i--) {  // 输入 Left_Array, 设定边界值 leftBottom → leftTop
            matrix[i][left] = num              // 指针从 leftBottom → leftTop 记录数据, 存入 left 下标的数组中
            num++
        }
        left++                                 // leftBottom → leftTop 数据记录完成,left 向右移动(开始内圈循环)
    }
    return matrix
}
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
 * flat 拍平 sort排序 时间复杂度:  O(nlogn)
 * @param arr 
 */
 function mergeSort(arr: number[][]) {
    if(!arr.length) return []
    return [...arr.flat(Infinity)].sort((a: any, b: any) => a - b)
}
function merge(arr1: number[], arr2: number[]) {
    let res = []
    while (arr1.length > 0 && arr2.length > 0) {    // 有一个数组元素空了 证明另一个数组剩下的值都大于这个数组中的元素,循环停止
        if (arr1[0] < arr2[0]) {                    // 从头取出来比较大小, 塞到res数组中
            res.push(arr1.shift())
        } else {
            res.push(arr2.shift())
        }
    }
    return res.concat(arr1, arr2)                   // 把多余的元素都塞到res中
}
/**
 * 归并排序 时间复杂度O(nlogn)(归并排序的递归树,树种每层元元素的个数最多是n,也就代表着每层最多进行n次比较,而递归树最多只有log2n层,合在一起就是nlog2n)
 * @param arr 
 * @returns 
 */
function mergeSort(arr: any[][]) {
    if (!arr.length) return []
    while (arr.length > 1) {                       // 最后一个数组就是完整的,所以需要 > 1 的时候停止
        let arr1 = arr.shift() || []               // 取出arr[0]
        let arr2 = arr.shift() || []               // 取出arr[1]
        let tempArr = merge(arr1, arr2)            // 每次合并两个子数组
        arr.push(tempArr)                          // 压入arr尾部
    }
    return arr[0]                                  // 剩下唯一一个数组就是排序好的数组
}
console.log(mergeSort([[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3], [4, 5, 6]]))
`


export const sortArray = `
/**
 * 快速排序 - 时间复杂度: O(NlogN),空间复杂度: O(logN) 
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
 * 选择排序-时间复杂度: O(N^2),空间复杂度: O(1)
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
 * 冒泡排序-时间复杂度: O(N^2),空间复杂度: O(1)
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
/**
 * 堆排序， 时间 O(nlogn) 空间O(1)
 * 例：[4, 6, 8, 5, 9], 大顶堆的 结构类似于: 
 *      4 
 *   6     8
 * 5   9
 */
function findKthLargest(nums: number[], k: number) {
    let n = nums.length
    buildHeap(nums, n) // 1. 构建一个大顶堆
    console.log(nums)
    // 2. 将堆顶元素与末尾元素进行交换
    for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        swap(nums, 0, i)        // 进行下沉, 大顶堆顶部最大元素下沉到末尾
        --n                     // 交换后， 最大的元素不进行 大顶堆的调整
        maxHeapify(nums, 0, n)  // 3. 重新调整大顶堆
    }
    console.log(nums)
    return nums[0]
}
/**
 * 1.1 自下而上构建 大顶堆
 */
function buildHeap(nums: number[], n: number) {
    // nums.length / 2 - 1，拿到最后一个 非叶子节点 的下标
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
        maxHeapify(nums, i, n)         // 调整最大的元素 放到顶堆
    }
}
/**
 * 1.2 从左向右， 自上而下 调整节点
 */
function maxHeapify(nums: number[], i: number, n: number) {
    let l = i * 2 + 1       // 第 n 个元素的 左子节点 为 2 * n + 1
    let r = i * 2 + 2       // 第 n 个元素的 右子节点 为 2 * n + 2
    let largest = i
    // 对比 非叶子节点下 左 右 子节点 l r 跟 父节点 i 的大小
    if (l < n && nums[l] > nums[largest]) {
        largest = l
    }
    if (r < n && nums[r] > nums[largest]) {
        largest = r
    }
    // 最大值 不是 非叶子节点 i，调整他们的位置
    // 当最大值已经是 非叶子节点时， buildHeap 继续找倒数 第二个非叶子节点
    if (largest !== i) {
        // [nums[i], nums[largest]] = [nums[largest], nums[i]]
        swap(nums, i, largest)
        // 调整 非叶子节点 跟它的 左右节点 找到最大的放到 叶子节点
        maxHeapify(nums, largest, n)
    }
}
function swap(nums: number[], i: number, j: number) {
    // const temp = nums[i]
    // nums[i] = nums[j]
    // nums[j] = temp
    // or 
    [nums[i], nums[j]] = [nums[j], nums[i]]
}

// 快排解法1: 
function quickSort(q, l, r, k) {
    if (l === r) return q[l];

    let i = l - 1;
    let j = r + 1;
    let x = q[l];

    while(i < j) {
        do { i++ } while(q[i] > x);
        do { j-- } while(q[j] < x);
        if (i < j) {
            [q[i], q[j]] = [q[j], q[i]];
        }
    }

    let sl = j - l + 1;
    if (k <= sl) return quickSort(q, l, j, k);
    return quickSort(q, j+1, r, k - sl);
}
function findKthLargest (nums, k) {
    const n = nums.length;
    return quickSort(nums, 0 ,n - 1, k);
}

// 快排解法2: 
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
function findKthLargest(nums: number[], k: number) {
    return quickSort(nums)[k - 1]
}
`

export const rotate = `
function rotate(nums: number[], k: number) {
    if (!k) return nums
    // 模拟栈
    while (k > 0) {
        let n: any = nums.pop()
        console.log(n)
        nums.unshift(n)
        k--
    }
    return nums
    // slice
    const len = nums.length
    const step = k % len
    return nums.slice(-step).concat(nums.slice(0, len - step))
}`

export const findMiddleArray = `
/**
 * O(m + n)的解法, O(log(m+n))暂时不理解
 */
function findMiddleArray(nums1: number[], nums2: number[]) {
    let m = nums1.length
    let n = nums2.length
    let t = (m + n)
    let k = m + n - 1
    m = m - 1
    n = n - 1
    while (m >= 0 || n >= 0) {
        if (m < 0) {
            nums1[k--] = nums2[n--]
            continue
        }
        if (n < 0) {
            nums1[k--] = nums1[m--]
            continue
        }
        if (nums1[m] < nums2[n]) {
            nums1[k--] = nums2[n--]
        } else {
            nums1[k--] = nums1[m--]
        }
    }
    if (t % 2 === 0) {
        return (nums1[t / 2 - 1] + nums1[t / 2]) / 2
    } else {
        return nums1[~~(t / 2)]
    }
}
`