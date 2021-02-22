import { useForm } from "antd/lib/form/Form"

export const debounce = `
// 函数防抖 —— 设定时间内触发一次
function debounce(fn, delay) {
    let timeout = null
    return () => {
        if(timeout) clearTimeout(timeout)

        const args = arguments
        const _this = this // 指向全局

        timeout = setTimeout(() => {
            fn.apply(_this,args)
        }, delay)
    }
} 

window.onscroll = debounce(function() {
    cnsonle.log('debounce')
}, 1000)
`


export const throttle = `
// 函数节流 —— 只允许一个函数在N秒内执行一次
function throttle(fn, delay) {
    let prevTime = Date.now()
    let timeout = null
    return () => {
        cleratTimeout(timeout)
        const _this = this
        const args = arguments
        let curTime = Date.now()
        if(curTime  - prevTime > delay)  {
            fn.apply(_this, args)
            prevTime = curTime
        } else {
            timeout = setTimeout(() => {
                fn.apply(_this, args);
            }, delay)
        }
    }
}

const throttleScroll = throttle(function() {
    console.log('throttle')
}, 1000)
window.scroll = throttleScroll
`

export const extend1 = `
// 组合继承 - 缺点：执行两次父类构造器
function Fn(name) {
    this.name = name
}

Fn.prototype.getName = function() {
    return this.name
}

function fn (name) {
    Fn.call(this, name)
}
fn.prototype = new Fn()
fn.prototype.constructor = fn // 修复构造函数指向问题

const f = new fn('alec')
`

export const extend2 = `
// es5 模拟es6继承
function Fn(name) {
    this.name = name
}

Fn.prototype.getName = function() {
    return this.name
}

function fn (name) {
    Fn.call(this, name)
}

(function () {
    let Super = function() {}
    Super.prototype = Fn.prototype
    fn.prototype = new Super
})()

fn.prototype = new Fn()
fn.proptotype.constructor = fn

const f = new fn('Alec')
`

export const createNew = `
// new操作符的实现
function createNew(constructor, ...args) {
    const obj = {} // 新建一个空对象
    obj.__proto__ = constructor.prototype // 将新对象的__proto__指向构造函数的prototype

    const ret = constructor.call(obj, ..args) // 将构造函数的作用域指向这个新对象

    return ret instanceof Object ? ret : obj // 无返回值或者非对象值，将obj作为新对象返回
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
    for(let i = 0;i <= 36;i++) {
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

export const ajax = `
const ajax = {
    get: function(url, fn) {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function() {
            // readyState === 4 请求已完成
            if(xhr.readyState === 4 && xhr.status === 200 || xhr.status === 304) {
                fn.call(this, xhr.responseText)
            }
        }

        xhr.send()
    },
    post: function(url, data, fn) {
        let xhr = new XMLHttpRequest()
        // opent(method, url, async) merhod:请求方法， url: 地址， async: 请求是异步还是同步处理
        xhr.open('POST', url, true)
        // Content-Type: text/* 开头（html、text、plain）, application/*开头（json、x-www-form-form-urlencoded）, multipart/form-data文件上传
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200 || xhr.status === 304) {
                fn.call(this, xhr.responseText)
            }
        }
        xhr.send()
    }
}
`

export const traversal1 = `
// 1. 访问根节点
// 2. 前序遍历左子树
// 3. 前序遍历右子树
class BSTree {
    constructor() {
        this.root = null
    }
    // 前序递归遍历
    preOrderRec(node = this.root) {
        let result = ''
        if (node) {
            result += \`\${node.data} \`
            result += this.preOrderRec1(node.left)
            result += this.preOrderRec1(node.right)
        }
        return result
    }

    // 前序遍历非递归
    preOrderRec(node = this.root) {
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
}
`

export const traversal2 = `
// 1. 中序遍历左子树
// 2. 访问根节点
// 3. 中序遍历右子树
class BSTree {
    constructor() {
        this.root = null
    }
    // 中序遍历递归
     inOrderRec(node = this.root) {
        let result = ''
        if (node) {
            result += this.inOrderRec1(node.left)
            result += \`\${node.data} \`
            result += this.inOrderRec1(node.right)
        }
        return result
    }

    // 中序遍历非递归
    inOrderRec(node = this.root) {
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
}
`
export const traversal3 = `
// 1. 后续遍历左子树
// 2. 后序遍历右子树
// 3. 访问根节点
class BSTree  {
    constructor() {
        this.root = null
    }
    // 后序遍历递归
     postOrderRec(node = this.root) {
        let result = ''
        if (node) {
            result += this.postOrderRec1(node.left)
            result += this.postOrderRec1(node.right)
            result += \`\${node.data} \`
        }
        return result
    }

    // 后序遍历非递归
    postOrderRec(node = this.root) {
        let stack = []
        let ret = node
        let result = ''
        while (node || stack?.length) {
            if (node) {
                stack.push(node)
                node = node.left // 找到最左端的节点，路径上的节点全部入栈，包括叶子节点
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
}
`

export const traversal4 = `
class BSTree {
    constructor() {
        this.root = null
    }
    levelOrder(node =  this.root) {
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
}
`

