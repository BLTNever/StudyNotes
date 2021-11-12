
export const reverseNum = `
function reverse(x) {
    if (!x) return 0
    let result = 0
    while (x !== 0) { // 遍历（x / 10）数字x
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
        // digits[i] = digits[i] % 10,
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
 * 定义l为0， r为x
 * 循环遍历，定义middle为  l + r + 1的一半
 * 如果middle 小于等于 x / middle，从右半区开始继续循环 反之从左半区开始
 * /
function mySqrt(x: number) {
    let l = 0
    let r = x
    while (l < r) {
        let middle = l + r + 1 >> 1 // 取中间值
        if (middle <= x / middle) { // 中间值小于x / 中间值，设置中间值为left开始继续循环，反之 则设置中间值设置为right继续循环
            l = middle
        } else {
            r = middle - 1 // ？？
        }
    }
    return l
}
`

export const climbStairs = `
/**
 * 动态规划 数组 复杂度O(n)
 * 爬楼梯可以通过拆分成多个子问题
 * 爬到n - 1的方法数量。再爬1层就到n阶
 * 爬到n - 2的方法数量。再爬2层就到n阶
 * @param n number
 */
 function climbStairs(n: number) {
    if (n <= 2) return n // 1阶台阶（1）跟2阶台阶（1+1、2），直接返回n
    let dp = [] // 数组的指针对应的是台阶数，值存出台阶数需要的方法数，0阶不需要爬，且n为正整数。

    // dp[0] = 1 // 也可以根据数组指针式从0开始定义，没有方法数。（从斐波那契数列来说可以设置dp[0]为0，然后从dp[2]开始）
    dp[1] = 1 // 定义第一阶的爬楼梯方法数
    dp[2] = 2 // 定义第二阶的爬楼梯方法数

    // 从第三个台阶开始遍历，第三个台阶对应的就是第二个台阶+第一个台阶之和: dp[3 - 1]+dp[3 - 2]
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] // 到第n个台阶刚好结束
    }
    return dp[n]
}

/**
 * 动态规划 非数组双指针
 * @param n 
 */
function climbStairs(n: number) {
    if (n <= 2) return n
    let prev = 1
    let cur = 2
    for (let i = 3; i < n; i++) {
        let ans = prev + cur
        prev = cur
        cur = ans
    }
    return cur
}


/**
 * 动态规划 滚动数组 空间O(1)
 * @param n 
 */
function climbStairs(n: number) {
    let l = 0
    let r = 0
    let ans = 1

    for (let i = 2; i < n; i++) {
        l = r
        r = ans
        ans = l + r
    }
    return ans
}
`