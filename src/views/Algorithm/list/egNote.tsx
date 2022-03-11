
export const traversal1 = `
// 1. 访问根节点
// 2. 前序遍历左子树
// 3. 前序遍历右子树

// 前序递归遍历
function preOrderRec(node) {
    let result = ''
    if (node) {
        result += \`\${node.data} \`
        result += preOrderRec(node.left)
        result += preOrderRec(node.right)
    }
    return result
}

// 前序遍历非递归
function preOrderRec(node) {
    let stack = []
    let result = ''
    while (node || stack?.length) {
        if (node) {
            result += \`\${node.data} \`
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            node = node.right
        }
    }
    return result
}
`

export const traversal2 = `
// 1. 中序遍历左子树
// 2. 访问根节点
// 3. 中序遍历右子树

/**
 *  中序遍历递归
 */
function inOrderRec(node) {
   let result = ''
   if (node) {
       result += inOrderRec(node.left)
       result += \`\${node.data} \`
       result += inOrderRec(node.right)
   }
   return result
}

/**
 *  中序遍历非递归
 */
function inOrderRec(node) {
    let stack = []
    let result = ''
    while (node || stack.length) {
        if (node) {
            stack.push(node) // 依次进栈
            node = node.left // 扫描该节点的所有左子节点
        } else {
            node = stack.pop()  // 进栈一个节点
            result += \`\${node.data} \`  // 访问该节点
            node = node.right // 扫描该节点的右子节点
        }
    }
    return result
}
`
export const traversal3 = `
// 1. 后续遍历左子树
// 2. 后序遍历右子树
// 3. 访问根节点

/**
 *  后序遍历递归
 */
function postOrderRec(node) {
   let result = ''
   if (node) {
       result += postOrderRec(node.left)
       result += postOrderRec(node.right)
       result += \`\${node.data} \`
   }
   return result
}
/**
 *  后序遍历非递归
 */
function postOrderRec(node) {
    let stack = []
    let ret = node
    let result = ''
    while (node || stack?.length) {
        if (node) {
            stack.push(node)
            node = node.left // 找到最左端的节点,路径上的节点全部入栈,包括叶子节点
        } else {
            node = stack[stack.length - 1] // 获取栈顶节点
            if (node.right && node.right !== ret) { // 如果node有有节点且从未访问过
                node = node.right
                stack.push(node)
                node = node.left // 再走到最右
            } else {
                node = stack.pop()
                result += \`\${node.data} \`
                ret = node
                node = null
            }
        }
    }
    return result
}
`

export const traversal4 = `
function levelOrder(node) {
    let queue = []
    let result = ''

    queue.push(node) // 根节点入队
    while (queue?.length) {
        node = queue.shift() // 出队
        result += \`\${node.data} \` // 访问该节点
        if (node.left) { // 如果左子树不为空
            queue.push(node.left) // 将左子树的根节点压入队
        }
        if (node.right) { // 如果右子树不为空
            queue.push(node.right) // 将右子树的根节点压入队
        }
    }
    return result
}
`

export const radix = `
parseInt(str,radix)

Number.toString(radix)
// 把m进制的数字num转为n进制
function main(num, m, n) {
    let s = num+''
    return parseInt(s, m).toString(n)
}
`

export const radix2 = `
function getNums36() {
    let num36 = []
    for(let i = 0; i <= 36; i++) {
        if(i >=0 && i <= 9) {
            nums36.push(i)
        }esle {
            nums36.push(String.fromCharCode(i + 87))
        }
    }
}

function scale36(n) {
    let arr = []
    const nums36 = getNums36()
    while(n) {
        const res = n % 36
        arr.unshift(nums36[res])
        n = parseInt(n / 36)
    }
    return arr.join('')
}
`

export const depJson = `
const a = { b: 1, c: { d: { f: { g: 2 } }, h: { j: { k: 2, l: { m: 3 } } } } }

function depJson(json) {
    const obj = typeof json === 'string' ? JSON.parse(json) : json
    if(typeof obj !== 'object') return 0
    let count = 1
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            count = Math.max(count, depJson(obj[key]) + 1)
        }
    }
    return count
}
`

export const infinityCurry1 = `
/**
 * 单个入参
 */
function curry(num) {
    let sum = 1
    return function multiply(num) {
        if(num) {
            sum *= num
            return multiply
        }
        return sum
    }
}
function curry(ans = 1) {
    return (num) => {
        if(num) return curry.call(this, ans * num)
        return ans
    }
}
`
export const infinityCurry2 = `
/**
 * 多个数据传入
 */
 function curry(...ans) {
    if (!ans.length) return 0
    ans = [...ans].reduce((a, b) => a * b, 1)
    return (...args) => {
        if (args.length) {
            ans *= [...args].reduce((a, b) => a * b, 1)
            return curry.call(this, ...[ans])
        }
        return ans
    }
}
curry(2, 3)(3, 5)(4)()
`

export const destructuring = `
function fn(targetArray: any, formater: any) {
    // formater第一次传入的是字符串,转为数组,之后递归,传入的则都是数组
    // [a-z] 匹配a到z的字母 [0-9]匹配数字, \w匹配字母数字 下划线
    let arr = Array.isArray(formater) ? formater : JSON.parse(formater.replace(/(\w+)/g, '"$1"'))
    console.log(arr)
    let obj = {}
    arr.forEach((value: any, index: number) => {
        // 缓存该键对应的值
        let res = targetArray[index]
        if (Array.isArray(value)) {// 值为数组时,需要递归
            // 将递归的值拷贝至最初的对象,思路类似深拷贝
            Object.assign(obj, fn(res, value))
        } else {// 值为数值时,直接赋值
            obj[value] = res
        }
    })
    return obj
}
console.log(fn([1, [2, [4]], 3], '[a,[b,[d,e]],c]'))
`

export const _isEqual = `
function _isEqual(a: any, b: any, map = new Map()): any {
    if (a === b) return true

    if (map.has(a) || map.has(b)) return true
    map.set(a, b)
    if (typeof a === 'object' && typeof b === 'object') {
        const aKeys = Object.keys(a)
        const bKeys = Object.keys(b)
        if (aKeys.length !== bKeys.length) return false
        for (let i in aKeys) {
            if (!_isEqual(a[aKeys[i]], b[bKeys[i]], map)) return false
        }
        return true
    }
    return false
}


let map = new Map()
let set = new Set()
function isEqual(a: any, b: any) {
    if (typeof a !== 'object' || typeof b !== 'object') return a === b
    map.set(a, b)
    // console.log(map)
    // set.add(a)
    // set.add(b)

    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false
        for (let i = 0; i < a.length; i++) {
            if (map.has(a[i]) || map.has(b[i])) return true
            // if (set.has(a[i]) || set.has(b[i])) return true
            if (!isEqual(a[i], b[i])) return false
        }
        return true
    }

    if (Object.keys(a).length !== Object.keys(b).length) return false
    for (let i in a) {
        if (map.has(a[i]) || map.has(b[i])) return true
        // if (set.has(a[i]) || set.has(b[i])) return true
        if (!isEqual(a[i], b[i])) return false
    }
    return true
}

var a = { b: 1, c: 2, d: { e: 3 } }
var b = { b: 1, d: { e: 3 }, c: 2 }
console.log(isEqual(a, b))
`
export const statistics = `
function statistics(list: string[]) {
    if (!list.length) return list
    let map = new Map()
    for (let char of list) {
        if (map.has(char)) {
            let data = map.get(char)
            data[char]++
            map.set(char, data)
        } else {
            map.set(char, { [char]: 1 })
        }
    }
    return [...Array.from(map.values())].sort((a: any, b: any) => {
        const A = Object.keys(a)[0]
        const B = Object.keys(b)[0]
        return b[B] - a[A]
    })
}
console.log(statistics(['html', 'html', 'html', 'span', 'span', 'div', 'div', 'div', 'html', 'p']))`

export const memory = `
function memory(a: number, b: number) {
    let sumMap = new Map()
    const key = a+'+'+b
    if (sumMap.has(key)) return sumMap.get(key)
    else {
        const sum = a + b
        sumMap.set(key, sum)
        return sum
    }
}`

export const compose = `
const plus = (a, b) => a + b
const multiply = (a) => a * a
const plusOne = (a) => a + 1
function compose(...fns) {
    return (...args) => {
        return [...fns].reduce((acc, cur) => acc.length > 1 ? cur(...acc) : cur(acc), args)
    }
}
const fn = compose(plus, multiply, plusOne)
console.log(fn(1, 2))
`