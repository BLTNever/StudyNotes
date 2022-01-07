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
            let num2: number = Number(stack.pop()) || 0      // 根据先进后出原则，先出栈的数据为 操作符后面的数据
            let num1: number = Number(stack.pop()) || 0      // 取出 操作符前面的数据
            if (token === '+') stack.push(num1 + num2)       // 判断 操作符类型 然后进行操作
            else if (token === '-') stack.push(num1 - num2)
            else if (token === '*') stack.push(num1 * num2)
            // 除 操作符 需要判断大于0 或者小于0， 如果大于 0 Math.floor向下取整， 小于0 Math.ceil 向上取整
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
function decodeString(s: string) {
    // 双栈
    let numStack: number[] = []
    let strStack: string[] = []
    let result = ''                           // 暂存的字符串
    let num = 0                               // 暂存的倍数， 因为可能遇到 [ 左侧是 字母 + 数字
    for (let char of s) {
        if (Number.isInteger(Number(char))) { // 遇到倍数
            num = num * 10 + Number(char)     // 通过num暂存，num可能是多位
            // if (Number.isInteger(+s[i + 1])) { 
            //     num = num + char
            // }
        } else if (char === '[') {            // 遇到 [ 证明需要把之前暂存的 str, num 数据入栈
            strStack.push(result)             // 入栈之后 记得把 result 跟 num 清空
            result = ''
            numStack.push(Number(num))
            num = 0
        } else if (char === ']') {            // 遇到 ], num 和 str 出栈
            const repeatNum = numStack.pop() || 1   // 取出倍数
            result = strStack.pop() + result.repeat(repeatNum) // 取出 str栈顶 保存的str + []中需要 repeat 的str（ [] 中的字母已经拼接到 result上）
        } else {                             // 遇到字母 拼接到 result 上
            result += char
        }
    }
    return result
}
console.log(decodeString("2[abc]3[cd]ef"))
`

export const validateStackSequences = `
function validateStackSequences(pushed: number[], popped: number[]) {
    let index = 0
    let stack = []                // 辅助栈， 模拟 压入 / 弹出 操作
    for (let p of pushed) {
        stack.push(p)             // 将 pushed 的元素依次压入栈中
        // 判断 popped 序列的当前元素与 stack 栈顶是否相等，如果相等， 从 stack 栈顶去 pop 掉栈顶元素
        // popped 往右移动一位，继续比较，直到结束
        while (popped[index] !== undefined && stack[stack.length - 1] === popped[index]) {
            stack.pop()
            index++
        }
    }
    return !stack.length
}
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))
`

export const calculate =`
function calculate(s: string) {
    let stack: number[] = []
    let num = 0
    let sign = '+'                 // 防止第一个数字没有被判断到， 无法压入stack栈
    s += '$'                       // 追加一个运算符，不然会少做最后一次运算 也防止 只输入一个数字
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
console.log(calculate("42"))
`