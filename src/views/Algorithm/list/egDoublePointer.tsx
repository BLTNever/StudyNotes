export const temp1 = `
let slow = 0
let fast = 0
while 没遍历结束 {
    if 一定条件 {
        slow += 1
    }
    fast += 1
}
return 要求的值
`
export const temp2 = `
let left = 0
let right = length - 1
while left < right {
    if 找到了 {
        return 找到的值
    }else if 条件一 {
        left += 1
    }else if 条件二 {
        right -= 1
    }
}
return 没找到
`

export const temp3 = `
初始化慢指针 = 0
初始化 ans

for 快指针 in 可迭代集合
    更新窗口内信息
    while 窗口内不符合题意
        扩展或者收缩窗口
        慢指针移动
    更新答案
返回 ans
`

export const twoSum = `
/**
 * 双指针, sum > target r--, sum < target l++
 */
function twoSum(nums: number[], target: number) {
    let l = 0
    let r = nums.length - 1
    while (l < r) {
        const sum = nums[l] + nums[r]
        if (sum < target) l++
        else if (sum > target) r--
        else return [nums[l], nums[r]]
    }
}
/**
 * 哈希表
 */
function twoSum(nums: number[], target: number) {
    let map = new Map()
    for (let n of nums) {
        const other = target - n
        if (map.get(other) !== undefined) return [other, n]
        map.set(n, 1)
    }
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

export const missingNumber = `
function missingNumber(nums: number[]) {
    // 0 ~ n - 1, 说明下标跟元素是一致的。
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
export const searchInsert = `
function searchInsert(nums: number[], target: number) {
    // 二分解
    let l = 0
    let r = nums.length - 1
    let ans = nums.length
    while (l <= r) {
        const middle = l + ((r - l) >> 1)
        if (target > nums[middle]) {    // target > middle, target在 右半区, 设置 left 为 middle + 1
            l = middle + 1
        } else {                        // target <= middle, target在 左半区
            ans = middle
            r = middle - 1
        }
    }
    return ans

    // 暴力解:  遍历ans  当target 小于等于当前值的话 返回当前下标
    const ans = nums.length
    for (let i = 0; i < ans; i++) {
        if (target <= nums[i]) {
            return i
        }
    }
    return ans
}

console.log(searchInsert([1, 2, 3, 4, 6, 7], 5))
`
export const removeDuplicates = `
function removeDuplicates(nums: number[]) {
    const len = nums.length
    if (!len) return 0

    // 解1 读写指针
    let ans = 0                      // 写指针
    for (let i = 1; i < len; i++) {  // 读指针
        if (nums[ans] !== nums[i]) {
            ans++                    // 写指针前进一步
            nums[ans] = nums[i]      // 读指针的内容写入到写指针的位置
        }
    }
    return ans + 1
   
    // 解2
    let fast = 1
    let slow = 1
    while (fast < len) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow++] = nums[fast]
        }
        fast++
    }
    return slow
}
`
export const findDuplicate = `
/**
 * 快慢指针
 */
function findDuplicate(nums: number[]) {
    let [slow, fast] = [0, 0]
    // 快慢指针解1 更快一点
    slow = nums[slow]
    fast = nums[nums[fast]]
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }
    slow = 0
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }
    return slow

    // 快慢指针解2
    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow === fast) {
            let slow = 0
            while (nums[slow] !== nums[fast]) {
                slow = nums[slow]
                fast = nums[fast]
            }
            return nums[slow]
        }
    }
}
/**
 * 暴力解
 */
function findDuplicate(nums: number[]) {
    // 暴力解1
    const { length } = nums
    if (length === 1) return nums[0]
    for (let i = 0; i < length; i++) {
        let ans = nums[i]
        for (let j = i + 1; j < length; j++) {
            if (ans === nums[j]) return ans
        }
    }
    // 暴力解2
    nums = nums.sort((a, b) => a - b)
    let ans = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (ans === nums[i]) return ans
        else ans = nums[i]
    }
   
}
`

export const removeDuplicates2 = `
/**
 * 初始化快慢指针 slow(写指针), fast(读指针),全部指向索引为 0 的元素
 * fast 每次移动一位, slow指针选择性移动,是否写入数据取决于 slow - 2 对应的数字和 fast 对应的数字是否一致
 * 如果一致,我们不应该写。 否则我们就得到了三个相同的数字,不符合题意
 * 如果不一致,我们需要将 fast 指针的数据写入到 slow 指针
 * 重复这个过程,直到 fast 走到头,说明我们已无数字可写
 */
function removeDuplicates(nums: number[]) {
    let n = nums.length
    if (!n) return
    if (n < 3) return n
    // 解一: 通过k可以控制允许每个元素最多出现的次数
    let k = 2                                  // 每个元素允许最多出现的次数 
    let i = 0                                  // 写指针
    for (let n of nums) {                      // 读指针
        // ** i < k: 前k位可以跳过 相当于初始化 读写 指针在 k 位
        // ** 当 读指针 不等于 i(写指针) - k 的 对应的数值的时候, 写指针写入 读指针数据,写完向前移动
        if (i < k || n !== nums[i - k]) {
            nums[i] = n
            i++
        }
    }
    return i
    // 解二 读写指针
    let fast = 2                             // 读指针
    let slow = 2                             // 写指针
    while (fast < n) {
        if (nums[slow - 2] !== nums[fast]) { //
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
}`

export const sortedSquares = `
function sortedSquares(nums: number[]) {
    // 双指针解: 时间 O(logn), 空间 O(n)
    // 数组平方的最大值在数组的两端
    // 对比左右两端数据的绝对值
    let res = []
    for (let l = 0, r = nums.length - 1; l <= r;) {  // l 指向 0, r 指向 length - 1
        let left = Math.abs(nums[l])                 // 取绝对值
        let right = Math.abs(nums[r])
        if (left > right) {                         // 比较两端大小, 大的值 塞到 res 头部
            res.unshift(left * left)                // 指针向中间移动
            l++
        } else {
            res.unshift(right * right)
            r--
        }
    }
    return res

    // 暴力解: length <= 10 时间 O(n^2) 空间O(1), length > 10 时间 O(nLogn) 空间 O(logn)
    return nums.map(n => n ** 2).sort((a, b) => a - b)
}`
export const minArray = `
function minArray(nums: number[]) {
    // 二分法
    let [l, r] = [0, nums.length - 1]
    while (l < r) {
        const mid = l + ((r - l) >> 1)   
        if (nums[mid] < nums[r]) {         // middle < right, 右半区是升序, 最小值在左半区,设置 middle 为新的 right 边界
            r = mid 
        } else if (nums[mid] > nums[r]) {  // middle > right, 左半区是升序, 最小值在右半区,设置 middle + 1 为新的 left 边界
            l = mid + 1   
        } else {                         
        // middle === right,由于重复元素的存在, 值相同, 无论right 是不是最小值 ,都有一个它的「替代品」 middle, 因此我们可以忽略二分查找区间的右端点 right--
            r -= 1  
        }
    }
    return nums[l]

    // 暴力
    // 数组旋转过,最小的数字肯定是 比首个 比 数组中第一位更小的数字
    for(let i = 0; i < numbers.length;i++){
        if(numbers[i] < numbers[0]) return numbers[i]
    }
    return numbers[0]
    
    // 数据少的时候 不考虑性能
    return Math.min(...numbers)
}
console.log(minArray([2, 2, 2, 0, 1]))
`
export const threeSumClosest = `
/**
 * 数组先升序排序, 初始化一个最小和
 * 遍历数组, 定义双指针, 如果当前和更接近, 更新最小值
 * 根据当前三数之和和target的关系, 移动指针
 * 若在遍历过程中, 三数之和等于target, 直接返回当前的和, 若没有返回值接近的最小值
 * @returns 
 */
function threeSumClosest(nums: number[], target: number) {
    const n = nums.length
    if (n === 3) return nums.reduce((acc, cur) => acc + cur)
    nums.sort((a, b) => a - b)                                  // 排序, 方便移动指针
    let min = Number.MAX_SAFE_INTEGER                           // 定义一个最小值基准
    for (let i = 0; i < n; i++) {
        let [l, r] = [i + 1, n - 1]                             // 定义两端指针
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]               // 初始化一个 三数之和
            if (Math.abs(sum - target) < Math.abs(min - target)) {  // 比较 sum 跟 min 哪个更接近 target
                min = sum
            }
            if (sum < target) {                                     // sum 小于 target, 根据排序后的数组, 左指针++
                l++
            } else if (sum > target) {                              // sum 大于 target, r--
                r--
            } else {
                return sum                                          // sum 等于 target 证明最符合,  直接返回
            }
        }
    }
    return min                                                  // 没有等于 target 的, 就返回最接近的
}`

export const numSubarrayProductLessThanK = `
function numSubarrayProductLessThanK(nums: number[], k: number) {
    if (k <= 1) return 0            // 因为 nums[i] 必须>= 1, 所以当 k <= 1 时, 是不存在满足条件的
    let n = nums.length
    let l = 0                       // 滑动窗口左边界
    let product = 1                 // 记录乘积
    let ans = 0                     // 记录符合条件的数量
    for (let r = 0; r < n; r++) {   // 滑动窗口右边界
        product *= nums[r]          // 求得滑动窗口右边届的乘积, 当乘积不大于 最大值 k 窗口右边届就继续扩张
        while (product >= k) {      // 如果乘积大于 最大值 k 
            product /= nums[l]      // 除去 窗口左边届的值
            l++                     // 左边届值 前进一步 窗口收缩
        }
        ans += r - l + 1            // 窗口大小收缩扩张的范围 就是每次的结果
    }
    return ans
}`


export const minSubArrayLen = `
function minSubArrayLen(target: number, nums: number[]) {
    let left = 0                                    // 滑动窗口 左值
    let right = 0                                   // 滑动窗口 右值
    let sum = nums[0]                               // 元素之和 - 默认第一个
    let ans = Number.MAX_SAFE_INTEGER               // 最小长度的子数组长度
    while (right < nums.length) {
        if (sum >= target) {                        // sum 和 大于 target
            ans = Math.min(ans, right - left + 1)   // 先 存一下 right 跟 left 区间的长度
            if (ans === 1) return ans               // 如果遇到 ans 为1的情况直接返回, 没有比1更小的长度
            sum -= nums[left]                       // 如果sum >= target的时候, 减去 移动过的值
            left++                                  // 指针 left 向右移动
        } else {                                    // left 移动前,先减去 left 值。right 移动后 加上移动后的值
            right++                                 // sum 小于 target, 指针 right 向右移动
            sum += nums[right]                      // 累计 移动过的值
        }
    }
    return ans === Number.MAX_SAFE_INTEGER ? 0 : ans
}
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
`
export const pairSums = `
/**
 * 排序双指针
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
 * 哈希 - 重点:  使用过一次要删掉,防止重复使用
 */
function pairSums(nums: number[], target: number) {
    let map = new Map()                                     // 哈希表  key:数字 => value: 出现的次数
    let res = []
    for (let n of nums) {
        const key = target - n

        if (map.has(key)) {
            res.push([key, n])

            let value = map.get(key) - 1                    // 出现的次数减一,防止两个相同的数据相加达到target,而只有一个数据
            value ? map.set(key, value) : map.delete(key)   // 出现次数减一后大于0, 保留这个数,如果没有就删掉 
        } else {
            map.set(n, (map.get(n) || 0) + 1)
        }
    }
    console.log(map)
    return res
}
`

export const findMin = `
function findMin(nums: number[]) {
    // 两端指针, 时间 - O(logn) 空间 - O(1)
    let [l, r] = [0, nums.length - 1]  // nums: [4, 5, 6, 0, 1, 2, 3]
    if (nums[r] > nums[l]) return nums[0] // 单调 递增情况
    while (l < r) {
        const mid = l + ((r - l) >> 1)
        // 以最小值为 界线, 左 右 半区都是升序排列
        if (nums[mid] < nums[r]) {     // middle < right, middle的右半区是升序,说明最小值在 mid 左侧
            r = mid                    // middle可能是最小值
        } else {                       // middle > right, middle的左半区是升序,说明最小值在 mid 右侧
            l = mid + 1                // middle > right, 即说明middle 不可能是最小值 所以 mid + 1
        }
    }
    return nums[l]

    // 双指针解2
    whil(l < r){
        const mid = l + ((r - l) >> 1)
        if (nums[mid] > nums[mid + 1]) {  // 若mid > mid + 1, 此时mid + 1就是最小值, 返回结果
            return nums[mid + 1]
        }
        if (nums[mid] < nums[mid - 1]) {  // 若mid < mid - 1, 此时mid就是最小值, 返回结果
            return nums[mid]
        }
        if (nums[mid] > nums[0]) {   // mid > first element, 说明mid的左侧是升序, 最小值肯定不在mid左边
            l = mid + 1
        } else {                     // mid < first element, 说明最小值肯定在mid左边
            r = mid - 1
        }
    }
    // 暴力1
    return Math.min(...nums)

    // 暴力2
    let ans = nums[0]
    for(let n of nums){
        if(n < ans) return n
    }
    return ans
}`

export const search1 = `
function search(nums: number[], target: number) {
    // 双指针
    let n = nums.length
    let [l, r] = [0, n - 1]
    while (l <= r) {                  // l <= r, 在l === r的时候 l、r、mid 的值相等？
        let mid = l + ((r - l) >> 1)
        if (nums[mid] === target) return mid
        // 根据 mid 判断，mid是在有序的部分还是无序的部分
        if (nums[mid] >= nums[l]) {   // middle 在左侧升序 ⚠️ 注意 等号,  会出现middle === left or right 的情况
            // 判断 target 在 left - middle之间 还是 在 middle 右侧
            if (target >= nums[l] && target < nums[mid]) { // left ... target ... middle
                r = mid - 1
            } else {                 // target 在 middle 右侧, left ... middle ... target
                l = mid + 1
            }
        } else {                     // middle 在右侧升序
            // 判断 target 在 middle - right 之间 还是 在 middle 左侧
            if (target <= nums[r] && target > nums[mid]) {  // middle ... target ... right
                l = mid + 1
            } else {                 // target ... middle ... right
                r = mid - 1
            }
        }
    }
    // 如果终止条件是 while(l < r)的时候，就需要 
    // return nums[l] === target ? l : -1
    return -1

    // 暴力
    return nums.indexOf(target)  === -1 ? -1 : nums.indexOf(target)
}
`