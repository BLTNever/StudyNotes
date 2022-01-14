
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
 */
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
    for (let i = 3; i <= n; i++) {
        let ans = prev + cur
        prev = cur
        cur = ans
    }
    return cur
}

`

export const fib = `
/**
 * 斐波那契数列 - 动态规划 滚动数组
 * 
 * @param n 
 * @returns 
 */
function fib(n: number) {
    if (n < 2) return n
    let a = 1
    let b = 1
    for (let i = 3; i <= n; i++) {
        let ans = (a + b) % 1000000007
        a = b
        b = ans
    }
    return b
}
`

export const fib1  = `
function fib1(n: number) {
    if (n < 2) return n
    // 滚动数组1
    let prev = 0
    let cur = 0
    let ans = 1
    for (let i = 2; i <= n; i++) {
        prev = cur
        cur = ans
        ans = prev + cur
    }
    return ans

    // 滚动数组2
    let prev = 0
    let cur = 1
    for (let i = 2; i <= n; i++) {
        let sum = prev + cur
        prev = cur
        cur = sum
    }
    return cur

    // 动态规划
    let dp = [0, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
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

export const numWays = `
function numWays(n: number) {
    if (n < 2) return 1
    // 滚动数组
    let prev = 1
    let cur = 1
    for (let i = 2; i <= n; i++) {
        let ans = (prev + cur) % 1000000007
        prev = cur
        cur = ans
    }
    return cur
    // 动态规划
    let dp = [1, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
    }
    return dp[n]
}

console.log(numWays(44))
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