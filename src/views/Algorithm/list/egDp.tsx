
export const climbStairs = `
/**
 * 动态规划 数组 复杂度O(n)
 * 爬楼梯可以通过拆分成多个子问题
 * 爬到n - 1的方法数量。再爬1层就到n阶
 * 爬到n - 2的方法数量。再爬2层就到n阶
 */
 function climbStairs(n: number) {
    if (n <= 2) return n // 1阶台阶(1)跟2阶台阶(1+1、2),直接返回n
    let dp = [] // 数组的指针对应的是台阶数,值存出台阶数需要的方法数,0阶不需要爬,且n为正整数。
    // dp[0] = 1 // 也可以根据数组指针式从0开始定义,没有方法数。(从斐波那契数列来说可以设置dp[0]为0,然后从dp[2]开始)
    dp[1] = 1 // 定义第一阶的爬楼梯方法数
    dp[2] = 2 // 定义第二阶的爬楼梯方法数

    // 从第三个台阶开始遍历,第三个台阶对应的就是第二个台阶+第一个台阶之和: dp[3 - 1]+dp[3 - 2]
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] // 到第n个台阶刚好结束
    }
    return dp[n]
}
/**
 * 动态规划 非数组双指针
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
/**
 * 递归
 */
function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climbStairs(n - 1) + climbStairs(n - 2);
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
 * length小于等于1,只有一天数据 获利 0
 * 定义min 和 max,遍历数组, 比较min跟数组元素大小。 取最小的替换min
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
 * 那么推导公式就是 dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]),从 -1 -2 到 i 需要的最小体力
 * 最后的dp[n]就是到 可以直接登顶 需要的体力了
 * 如果是第一步计算了体力,最后一步就不需要消耗体力。理解为 dp[i] 是从之前上来需要的体力。 还是从当前往上需要的体力
 * 如果第一步花费体力,初始化就是 dp = [cost[0], cost[1]], 
 * 推导公式 dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i], 之前消耗的体力 + 当前台阶需要的体力
 * 最后判断 dp[n - 1] 跟dp[n - 2]哪个消耗最小
 * @param cost 
 * @returns 
 */
function minCostClimbingStairs(cost: number[]) {
    let n = cost.length
    // 起始消耗体力
    let dp = [cost[0], cost[1]]                                     // dp记录爬楼梯花费的体力,爬到 i 阶需要的最少体力就是dp[i]
    for (let i = 2; i <= n; i++) {                                  // 爬第一阶花费了体力, 最后一阶就不需要花费体力
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]            // 因为可以选择一次爬一阶或者二阶,比较dp[i-1]、dp[i-2]的大小。加上爬到 i 需要的体力
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

export const backPack1 = `
function backPack(m: number, A: number[], V: number[]) {
    let dp = new Array(m + 1).fill(0)       // 初始化0,没有物品, 价值为0
    for (let i = 0; i < A.length; i++) {    // 外层循环物品
        for (let j = m; j >= 0; j--) {      // 内存循环背包
            if (j - A[i] >= 0) {
                dp[j] = Math.max(dp[j], dp[j - A[i] + V[i]])
            }
        }
    }
    return dp[m]
}`
export const backPack2 = `
function backPack(m: number, A: number[], V: number[]) {
    let dp = new Array(m + 1).fill(0)             // 初始化0,没有物品, 价值为0
    for (let i = 0; i < m; i++) {                 // 外层循环背包
        for (let j = 0; j < A.length; j++) {      // 内存循环物品
            if (j - A[i] >= 0) {
                dp[j] = Math.max(dp[i], dp[i - A[j] + V[j]])
            }
        }
    }
    return dp[m]
}`
export const backPackTemp = `
target: 背包
nums: 物品
let dp = new Array(target + 1).fill(0)
dp[0] = 1               // 根据情况是否设置初始值
for (let i = 1; i < target; i++) {               // 外层循环背包
    for (let j = 0; j < nums.length; j++) {      // 内存循环物品
        // 公式
        if (j - A[i] >= 0) {
            dp[j] = Math.max(dp[i], dp[i - A[j] + V[j]])
        }
    }
}
`

export const coinChange = `
/**
 *  - 假设给出的不同面额的硬币是[1, 2, 5],目标是 120,问最少需要的硬币个数？
    - 我们要分解子问题,分层级找最优子结构,看到这又要晕了哈,憋急~~ 下面马上举例。
    - 这里我们使用「自顶向下」思想来考虑这个题目,然后用「自底向上」的方法来解题,
    体验算法的冰火两重天。
    - dp[i]: 表示总金额为 i 的时候最优解法的硬币数
    - 我们想一下：求总金额 120 有几种方法？下面这个思路关键了 !!!
    一共有 3 种方式,因为我们有 3 种不同面值的硬币。
        1.拿一枚面值为 1 的硬币 + 总金额为 119 的最优解法的硬币数量
            这里我们只需要假设总金额为 119 的最优解法的硬币数有人已经帮我们算好了,
            不需要纠结于此。(虽然一会也是我们自己算,哈哈)
            即：dp[119] + 1
        2.拿一枚面值为 2 的硬币 + 总金额为 118 的最优解法的硬币数
            这里我们只需要假设总金额为 118 的最优解法的硬币数有人已经帮我们算好了
            即：dp[118] + 1
        3.拿一枚面值为 5 的硬币 + 总金额为 115 的最优解法的硬币数
            这里我们只需要假设总金额为 115 的最优解法的硬币数有人已经帮我们算好了
            即：dp[115] + 1
    
    - 所以,总金额为 120 的最优解法就是上面这三种解法中最优的一种,也就是硬币数最少
        的一种,我们下面试着用代码来表示一下：
        
    - dp[120] = Math.min(dp[119] + 1, dp[118] + 1, dp[115] + 1);
        
    - 推导出「状态转移方程」：
        dp[i] = Math.min(dp[i - coin] + 1, dp[i - coin] + 1, ...)
        其中 coin 有多少种可能,我们就需要比较多少次,那么我们到底需要比较多少次呢？
        当然是 coins 数组中有几种不同面值的硬币,就是多少次了~ 遍历 coins 数组,
        分别去对比即可
        
    - 上面方程中的 dp[119],dp[118],dp[115] 我们继续用这种思想去分解,
        这就是动态规划了,把这种思想,思考问题的方式理解了,这一类型的题目
        问题都不会太大。
 * @param coins 硬币面值 数组
 * @param amount 总金额
 */
function coinChange(coins: number[], amount: number) {
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 0
    for (let i = 0; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}`