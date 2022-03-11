export const CQueue = `
var CQueue = function() {
    this.stackA = []
    this.stackB = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackA.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(!this.stackA.length && !this.stackB.length) return -1
    if(!this.stackB.length) {
        while(this.stackA.length) {
            this.stackB.push(this.stackA.pop())
        }
    }
    return this.stackB.pop()
};
`

export const CustomStack = `
function CustomStack(maxSize: number) {
    this.stack = []
    this.maxSize = maxSize
}

CustomStack.prototype.push = function (x: number) {
    if (this.stack.length >= this.maxSize) return
    this.stack.push(x)
    return null
}

CustomStack.prototype.pop = function () {
    return this.stack.length ? this.stack.pop() : -1
}

CustomStack.prototype.increment = function (k: number, val: number) {
    for (let i = 0; i < k; i++) {
        this.stack[i] += val
    }
    return this.stack
}

class CustomStack {
    private stack: number[]
    private maxSize: number

    private constructor(maxSize: number) {
        this.stack = []
        this.maxSize = maxSize
    }

    public push(x: number) {
        if (this.stack.length >= this.maxSize) return
        this.stack.push(x)
    }

    public pop() {
        return this.stack.length ? this.stack.pop() : -1
    }

    public increment(k: number, val: number) {
        for (let i = 0; i < k && i < this.stack.length; i++) {
            this.stack[i] += val
        }
        return this.stack
    }
}
`

export const evalRPN = `
function evalRPN(tokens: string[]) {
    // 栈
    let stack = []
    for (let token of tokens) {
        if (Number.isInteger(Number(char))) {
            stack.push(Number(token))                  // 非 操作符 放入栈中
        } else {
            let num2: number = Number(stack.pop()) || 0      // 根据先进后出原则,先出栈的数据为 操作符后面的数据
            let num1: number = Number(stack.pop()) || 0      // 取出 操作符前面的数据
            if (token === '+') stack.push(num1 + num2)       // 判断 操作符类型 然后进行操作
            else if (token === '-') stack.push(num1 - num2)
            else if (token === '*') stack.push(num1 * num2)
            // 除 操作符 需要判断大于0 或者小于0, 如果大于 0 Math.floor向下取整, 小于0 Math.ceil 向上取整
            else if (token === '/') stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2))
        }
    }
    return stack.pop()      // 返回栈中最后一个

    // 数组模拟栈
    let stack: any[] = []
    let index = -1
    for (let token of tokens) {
        switch (token) {
            case '+':
                index--
                stack[index] += stack[index + 1]
                break
            case '-':
                index--
                stack[index] -= stack[index + 1]
                break
            case '*':
                index--
                stack[index] *= stack[index + 1]
                break
            case '/':
                index--
                stack[index] = stack[index] / stack[index + 1] > 0 ? Math.floor(stack[index] / stack[index + 1]) : Math.ceil(stack[index] / stack[index + 1])
                break
            default:
                index++
                stack[index] = Number(token)
        }
    }
    return stack[index]
}
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
`

export const decodeString = `
/**
 * 正则
 */
function convertString(str: string): string {
    const reg = /(\d+)\[([^\[\]]+)\]/g;
    const res = str.replace(reg, (match, p1, p2) => p2.repeat(p1));
    return reg.test(res) ? convertString(res) : res;
}
/**
 * 双栈
 */
function decodeString(s: string) {
    let numStack: number[] = []
    let strStack: string[] = []
    let result = ''                           // 暂存的字符串
    let num = 0                               // 暂存的倍数, 因为可能遇到 [ 左侧是 字母 + 数字
    for (let char of s) {
        if (Number.isInteger(Number(char))) { // 遇到倍数
            num = num * 10 + Number(char)     // 通过num暂存,num可能是多位
            continue
        } 
        if (char === '[') {            // 遇到 [ 证明需要把之前暂存的 str, num 数据入栈
            strStack.push(result)             // 入栈之后 记得把 result 跟 num 清空
            result = ''
            numStack.push(Number(num))
            num = 0
        } else if (char === ']') {            // 遇到 ], num 和 str 出栈
            const repeatNum = numStack.pop() || 1   // 取出倍数
            result = strStack.pop() + result.repeat(repeatNum) // 取出 str栈顶 保存的str + []中需要 repeat 的str( [] 中的字母已经拼接到 result上)
        } else {                             // 遇到字母 拼接到 result 上
            result += char
        }
    }
    return result
}
// 输入: s = "3[a2[c]]"
// 输入: s = "2[abc]3[cd]ef"
// 输入: s = "abc3[cd]xyz"
console.log(decodeString("2[abc]3[cd]ef"))
`

export const validateStackSequences = `
function validateStackSequences(pushed: number[], popped: number[]) {
    let index = 0
    let stack = []                // 辅助栈, 模拟 压入 / 弹出 操作
    for (let p of pushed) {
        stack.push(p)             // 将 pushed 的元素依次压入栈中
        // 判断 popped 序列的当前元素与 stack 栈顶是否相等,如果相等, 从 stack 栈顶去 pop 掉栈顶元素
        // popped 往右移动一位,继续比较,直到结束
        while (popped[index] !== undefined && stack[stack.length - 1] === popped[index]) {
            stack.pop()
            index++
        }
    }
    return !stack.length
}
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))
`

export const calculate = `
function calculate(s: string) {
    let stack: number[] = []
    let num = 0
    let sign = '+'                 // 防止第一个数字没有被判断到, 无法压入stack栈
    s += '$'                       // 追加一个运算符,不然会少做最后一次运算 也防止 只输入一个数字
    for (let char of s) {
        if (char === ' ') continue
        if (Number.isInteger(Number(char))) {
            num = num * 10 + Number(char)
            continue
        }
        if (sign === '+') stack.push(num)
        else if (sign === '-') stack.push(-num)
        else if (sign === '*') stack.push((stack.pop() || 1) * num)
        else if (sign === '/') stack.push(~~((stack.pop() || 1) / num))
        num = 0
        sign = char
    }

    return stack.reduce((acc, cur) => acc + cur, 0)
}
console.log(calculate("3+2*2"))
`

export const trap = `
/**
 * 双指针 - 时间 O(n), 空间 O(1)
 * 每一列雨水的高度,取决于,该列 左侧最高的柱子和右侧最高的柱子中最矮的那个柱子的高度 
 */
function trap(height: number[]) {
    let l = 0                                  // 维护两个指针 left 和 right, 分别指向头尾
    let r = n - 1
    let lMax = height[0]
    let rMax = height[n - 1]
    while (l <= r) {                           // 维护左右指针
        lMax = Math.max(height[l], lMax)       // 使用 height[l] 和 height[r]的值更新 lMax 和rMax 的值
        rMax = Math.max(height[r], rMax)
        // 1. 如果lMax < rMax ,那么瓶颈在于 height[l], 不需要考虑 height[r]
        // 2. 下标 l 处能接的雨水量等于 lMax - height[l]
        // 3. 下标 r 能接到的雨水量等于 rMax - height[r]
        if (lMax < rMax) {
            ans += lMax - height[l]             // 对于某一列,能接到的雨水,取决于min(左边最大值,右边最大值)
            l++
        } else {
            ans += rMax - height[r]
            r--
        }
    }
    return ans
}
/**
 * 动态规划 - 时间O(n) 空间O(n)
 * 对于每一个柱子 i, 能接的水 建模 h[i] = Math.min(左边柱子最大值, 右边柱子最大值)(h 为下雨之后的水位)
 */
function trap(height: number[]) {
    let n = height.length
    if(!n) return 0
    // 从左向右,对比 i 跟 i左侧 的最大值
    let lMax = Array(n).fill(0)
    let rMax = Array(n).fill(0)
    lMax[0] = height[0]
    rMax[n - 1] = height[n - 1]
    // 从左向右,对比 height[i] 跟 左侧侧 lMax[i - 1] 的最大值
    for (let i = 1; i < n; i++) {
        lMax[i] = Math.max(height[i], lMax[i - 1])
    }
    // 从右向左,对比 height[i] 跟 右侧 rMax[i + 1] 的最大值
    for (let i = n - 2; i >= 0; i--) {
        rMax[i] = Math.max(height[i], rMax[i + 1])
    }
    // 掐头去尾,比较当前 i 和左右侧最高柱子中 最低的那个差
    for (let i = 1; i < n - 1; i++) {
        ans += Math.min(lMax[i], rMax[i]) - height[i]
    }
    return ans
}
/**
 * 暴力解 - 时间O(n^2) 空间O(1)
 */ 
function trap(height: number[]) {
    let ans = 0
    for (let i = 1; i < n - 1; i++) {               // 从第二根柱子开始 去找当前柱子 左右两侧最 高 的柱子
        let left = 0
        let right = 0
        for (let j = i; j < n; j++) {
            right = Math.max(right, height[j])      // 找右边最高的柱子
        }
        for (let k = i; k >= 0; k--) {
            left = Math.max(left, height[k])        // 找左边最高的柱子
        }
        ans += Math.min(left, right) - height[i]    // 两侧最高柱子中,最低的柱子和当前柱子的差,就是存储的雨水量
    }
    return ans
}
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
`

export const checkValidString = `
/**
 * 栈: 时间复杂度O(n),空间复杂度O(n)
 * @param s 
 * @returns 
 */
function checkValidString(s: string) {
    let leftStack: number[] = []                         // 存左括号的栈
    let starStack: number[] = []                         // 存星号的栈
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') leftStack.push(i)             // 遇到左括号,压入栈中
        if (s[i] === '*') starStack.push(i)             // 遇到星号,压入栈中
        else {                                          // 遇到右括号
            if (leftStack.length) leftStack.pop()       // 如果leftStack有值,从栈顶取出来抵消一个
            else if (starStack.length) starStack.pop()  // 如果starStack有值,从栈顶取出来抵消一个
            else return false                           // 如果两个栈都空,证明匹配不上 return false
        }
    }
    if (leftStack.length > starStack.length) return false     // left栈大于star栈,说明最后也匹配不了
    while (leftStack.length && starStack.length) {
        if (leftStack.pop() > starStack.pop()) return false   // 每次从两个栈顶取出值, 如果 ( 的下标大于 * ,说明在*号右侧 返回false
    }
    return true
}
/**
 * 贪心: 时间复杂度O(n),空间复杂度O(1)
 * 遇到左括号,未匹配的左括号数量加 1
 * 遇到右括号,需要有一个左括号和右括号匹配,因此未匹配的左括号数量减 1
 * 遇到星号,由于星号可以看成左括号、右括号或空字符串,因此未匹配的左括号数量可能加 1、减 1 或不变
 * @param s 
 */
function checkValidString(s: string) {
    let min = 0                           // 遍历过程中未匹配的左括号数量可能的最小值和最大值,根据遍历到的字符更新最小值和最大值
    let max = 0
    for (let c of s) {
        if (c === '(') {                  // 遇到左括号,则将最小值和最大值分别加 1            
            min++;
            max++;
        } else if (c === ')') {           // 遇到右括号,则将最小值和最大值分别减 1
            min = Math.max(min - 1, 0)    // 防止减到负数
            max--
            if (max < 0) return false     // 最大值 < 0,说明没有左括号可以和右括号匹配
        } else {                          // 遇到星号,则将最小值减 1,将最大值加 1
            min = Math.max(min - 1, 0)   
            max++
        }
    }
    return min === 0                      // 所有左括号都应和右括号匹配,当最小值为 0 时,证明匹配完成
}
/**
 * 贪心
 * 
 * @param s 
 * @returns 
 */
function checkValidString(s: string) {
    let n = s.length
    let l = 0
    let r = 0
    for (let i = 0; i < n; i++) {
        l += s[i] === ')' ? -1 : 1            // 正向 匹配到 '(' 跟 '*' + 1, 遇到 ')' 就 -1,
        r += s[n - i - 1] === '(' ? -1 : 1    // 反向 匹配到 ')' 跟 '*' + 1, 遇到 ')' 就 -1,
        if (l < 0 || r < 0) return false      // 只要有一个小于0,说明不匹配
    }
    return true
}
`


