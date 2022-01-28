
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
function fib(n: number) {
    if (n < 2) return n
    let a = 0
    let b = 0
    let ans = 1
    for (let i = 2; i <= n; i++) {
        a = b
        b = ans
        ans = (a + b) % 1000000007
    }
    return ans
}
`

export const fib1 = `
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


export const maxProfit = `
/**
 * 买卖股票的最佳时机I —— 动态规划
 * length小于等于1，只有一天数据 获利 0
 * 定义min 和 max，遍历数组， 比较min跟数组元素大小。 取最小的替换min
 * 比较max 和数组元素 - min的值 获得最大获利
 * @param prices 
 * @returns 
 */
function maxProfit(prices: number[]) {
    if (prices?.length <= 1) return 0
    let min = 0
    let max = prices[0]
    for (let p of prices) {
        min = Math.min(p, min)
        max = Math.max(p - min, max)
    }
    return max
}
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

export const minCostClimbingStairs = `
/**
 * 确定DP数组初始化的时候判断 是否要为第一步花费体力。 如果第一步不需要花费体力 初始化为 dp = [0, 0]
 * 那么推导公式就是 dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])，从 -1 -2 到 i 需要的最小体力
 * 最后的dp[n]就是到 可以直接登顶 需要的体力了
 * 如果是第一步计算了体力，最后一步就不需要消耗体力。理解为 dp[i] 是从之前上来需要的体力。 还是从当前往上需要的体力
 * 如果第一步花费体力，初始化就是 dp = [cost[0], cost[1]], 
 * 推导公式 dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i], 之前消耗的体力 + 当前台阶需要的体力
 * 最后判断 dp[n - 1] 跟dp[n - 2]哪个消耗最小
 * @param cost 
 * @returns 
 */
function minCostClimbingStairs(cost: number[]) {
    let n = cost.length
    // 起始消耗体力
    let dp = [cost[0], cost[1]]                                     // dp记录爬楼梯花费的体力，爬到 i 阶需要的最少体力就是dp[i]
    for (let i = 2; i <= n; i++) {                                  // 爬第一阶花费了体力， 最后一阶就不需要花费体力
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]            // 因为可以选择一次爬一阶或者二阶，比较dp[i-1]、dp[i-2]的大小。加上爬到 i 需要的体力
    }
    return Math.min(dp[n - 1], dp[n - 2])                           // 第一步花费体力了。 最后一步就不需要花费体力了。 返回 -1 -2最小的值

    // 起始不消耗体力
    let dp = [0, 0]
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1])
    }
    return dp[i]
    
    // 滚动数组 空间复杂度O(1)
    let pre = 0
    let cur = 0
    for (let i = 2; i <= n; i++) {
        let temp = Math.min(cost[i - 2] + pre, cost[i - 1] + cur)
        pre = cur
        cur = temp
    }
    return cur
}
`