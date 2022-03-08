
export const reverseNum = `
function reverse(x) {
    if (!x) return 0
    let result = 0
    while (x !== 0) { // 遍历(x / 10)数字x
        // 拿到x的个位数 作为result的新的个位数
        result = result * 10 + x % 10
        if (result > 2 ** 32 - 1 || result < -(2 ** 31)) return 0
        x = ~~(x / 10) // 向下取整
    }
    return result
}
`
export const isPalindrome = `
function isPalindrome(x) {
    if (x < 0) return false
    // 字符串解法， 数学解法暂缓
    return String(x) === String(x).split('').reverse().join('')
}
`


export const romanToInt = ` 
function romanToInt(s) {
    const map = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        const value = map[s[i]]
        if (i < s.length - 1 && value < map[s[i + 1]]) {
            ans -= value
        } else {
            ans += value
        }
    }
    return ans
}
`
export const plusOne = `
function plusOne(digits: number[]) {
    const len = digits.length
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++         // 从末位开始 + 1
        digits[i] %= 10     // digits[i]取余， 看是否为0，如果为0 往左一位继续 +1 直到 +1位不为0 无进位为止
        if (digits[i] !== 0) return digits // +1后 无进位 返回
    }
    // return  Array(len + 1).fill(1).fill(0, 1)
    return [1, ...Array(len).fill(0)]  // 如果digits都为0 有进位，len + 1 第一位为0
}
`
export const mySqrt = `
/**
 * 二分法
 */
function mySqrt(x: number) {
    let l = 0
    let r = x                           // 整数x的平方根一定是在1到x的范围内
    while (l <= r) {                    // 循环条件为left <= right,终止为left > right
        let mid = l + (r - l >> 1)      // 取这个范围内的中间数字 mid 去判断  
        if (mid * mid <= x) {           // 如果 mid 的平方小于x, 说明 x 的平方根比 mid 大， 从mid + 1 ～ r范围查找
            l = mid + 1
        } else {
            r = mid - 1                 // 如果 mid 的平方大于x, 说明 x 的平方根比 mid 小， 从l ~ min - 1范围查找
        }
    }
    return r                            // 由于left可能越界，优先返回right
}
`

export const isThree = `
/**
 * 除了自身和1 只有一个能被整除的整数只能是开平方为整数
 * 循环判断取余，除数 大于3就返回false
 * @param n 
 * @returns 
 */
function isThree(n: number) {
    if (n < 4) return false
    let ans = 1
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) ans++
        if (ans > 3) return false
    }
    return ans === 3
}
`



export const fraction = `
function fraction(cont: number[]) {
    const recursion = (cont: number[], i: number): number[] => {
        if (i === cont.length - 1) return [cont[i], 1]

        let nextRes: number[] = recursion(cont, i + 1)
        return [cont[i] * nextRes[0] + nextRes[1], nextRes[0]]
    }
    return recursion(cont, 0)
}
`

export const divide = `
function divide(a: number, b: number) {
    const min = -Math.pow(2, 31)            // 定义边界值
    const max = Math.pow(2, 31) - 1
    if (a <= min && b === -1) return max    // a为最小值， b 为 -1 的时候 a / b 为最大值
    if (a <= min && b === 1) return min     // a为最小值， b 为 1 的时候 a / b 为最小值

    // 判断符号， 同号为正，异号为负
    const sign = (a > 0 && b < 0) || (a < 0 && b > 0) ? -1 : 1
    // 取正
    a = Math.abs(a)
    b = Math.abs(b)
    if (a < b) return 0

    let ans = 0
    // while (a >= b) {
    //     a -= b
    //     ans++
    // }
    for (let i = 31; i >= 0; i--) {
        // 使用a >>> i代替a >> i，是为了防止a是最小值的情况
        // a >>> i >= b 由 a >= b << i 转化而来，为了防止 b << i 容易超出范围
        if ((a >>> i) >= b) {
            a -= (b << i)
            ans += (1 << i)
        }
    }
    return sign === -1 ? -ans : ans
}

console.log(divide(0, 1))
`
export const findGCD = `
function findGCD(nums: number[]) {
    let arr = nums.sort((a, b) => a - b)
    let min = arr[0]
    let max = arr[nums.length - 1]
    if (min === max) return max
    let ans = 1
    for (let i = 1; i <= min; i++) {
        ans = (min % i === 0 && max % i === 0) ? i : ans
    }
    return ans
}
console.log(findGCD([6, 7, 9]))
`

export const fourSum = `
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
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
            // 当走到这里的时候，相当于在求「三数之和」了
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

export const maxSubArray = `
/**
 * 贪心 时间O(n) 空间O(1)
 * @param nums 
 * @returns 
 */
function maxSubArray(nums: number[]) {
    let ans = nums[0]
    let pre = 0
    for (let n of nums) {
        pre = Math.max(pre + n, n) // 若之前的和加上当前数，比当前数还小，那么舍弃之前的和，从当前数开始，重新计算和
        ans = Math.max(ans, pre)
    }
    return ans
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
`

export const printNumbers = `
function printNumbers(n: number) {
    let max = Math.pow(10, n)
    let res = []
    for (let i = 1; i < max; i++) {
        res.push(i)
    }
    return res
}
`