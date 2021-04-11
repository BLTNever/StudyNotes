
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

export const twoNums = `
function twoNum(nums: any, target: any) {
    const map: any = new Map()
    for (let [key, val] of nums.entries()) {
        let other = target - val
        if (map.get(other) !== undefined) return [map.get(other), key]
        map.set(val, key)
    }
}
`
export const findShortSubArray = `
/**
 *  1.用哈希表去记录每个元素出现的次数，用元素的值做key, value存储[值第一次出现的下标start，值最后出现的下标end， 出现的次数count]
 *  2.遍历这个哈希表的值，出现的次数大于max值的时候，重新给max值赋值，记录min最短长度为当前值的end下标 - start下标
 *  3.如果count === max值，对比已存在的min值和当前的end - start值，找出最短长度
 *  4.数组下标从0开始，return的min值+1
 * /
function findSubArray(nums) {
    let obj = {}
    let max = 0
    nums.forEach((item, key) => {
        if (obj.hasOwnProperty(item)) {
            obj[item][1] = key
            obj[item][2]++
        } else {
            obj[item] = [key, key, 1]
        }
    })
    let min = 0
    for (let [start, end, count] of Object.values(obj)) {
        if (count > max) {
            max = count
            min = end - start
        } else if (count === max) {
            min = Math.min(min, (end - start))
        }
    }
    return min + 1
}

// 一次遍历，
function findSubArray(nums) {
    let obj = {}
    let max = 0
    let min = 0
    nums.forEach((v, k) => {
        if (obj.hasOwnProperty(v)) {
            obj[v][1] = k
            obj[v][2]++
            if(obj[v][2] > max) {
                max = obj[v][2]
                min = obj[v][1] - obj[v][0]
            } else if(obj[v][2] === max) {
                min = Math.min(min, obj[v][1] - obj[v][0])
            }
        } else {
            obj[v] = [k, k, 1]
        }
    })
    return min + 1
}
`

export const createTree = `
const arr = [
    { id: 1 },
    { id: 2, parentId: 1},
    { id: 3, parentId: 1},
    { id: 4, parentId: 2},
    { id: 5, parentId: 3},
    { id: 6, parentId: 3},
]
转化为树的形式：
root = {
    id: 1,
    children: [{
        id: 2,
        children: [{id: 4, children: [] }]
    }, {
        id: 3,
       children: [{id: 5, children: [] },{id: 6, children: [] }]
    }]
}
// 设置哈希表去操作
let ans: any = null
const mapper = {}
function createTree(list: any) {
    for (const item of list) {
        mapper[item.id] = item // 在哈希表中通过id去存储每个item
        item.children = [] // 给item初始化添加children
        if (!item.parentId) { // 如果没有parentId设置为root节点
            ans = item
        } else {
            // 通过parentId去哈希表里查找id === parentId的元素
            if (!mapper[item.parentId]) { // 未找到 创建一条新的数据
                mapper[item.parentId] = {
                    id: item.parentId,
                    children: [],
                }
            }
            mapper[item.parentId].children.push(item) // 找到mapper存在key为parentId的元素，在children里push当前的元素
        }
    }
}

function createTree(list: any) {
    if (!list?.length) return {}
    let obj = null
    let mapper = {}
    for (let item of list) {
        mapper[item.id] = item
        item.children = []
        if (!item.parentId) {
            obj = item
        } else {
            if (mapper[item.parentId]) {
                mapper[item.parentId].children.push(item)
            } else {
                mapper[item.parentId] = {
                    id: item.parentId,
                    children: []
                }
            }
        }
    }
    return obj
}

// 递归的方法 需要传id进去
function listToTree(list: any[], pId?: number): any {
    const arr = list.filter((i: any) => i.pId === pId)
    return arr.map((i: any) => {
        return {
            ...i,
            children: listToTree(list, i.id)
        }
    })
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

export const infinityCurry = `
/**
 * 单个入参
 * /
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

/**
 * 多个数据传入
 * /
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

export const flat1 = `
// 遍历递归
function flat(arr, depth = 1) {
    let result = []
    arr.forEach(item => {
        // 去掉depth就是Infinity
        if(Array.isArray(item) && depth > 0) {
            result = [...result, ...flat(arr, depth - 1)]
        } esle result.push(item)
    })
}
// reduce 递归
function flat(arr, depth = 1) {
    return depth ? 
        arr.reduce((acc, cur) => {
            return [...acc, ...(Array.isArray(cur) ? flat(cur, depth - 1) : [cur])]
        }, []) : arr
}
function flat(arr) {
    return arr.reduce((acc, cur) => {
        return Array.isArray(cur) ? [...acc, ...flat(cur)] : [...acc, cur]
    }, [])
}

//
function flat(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
`

export const flat2 = `
// 不使用递归
function flat(arr, depth = 1) {
    let result = []
    let stock = arr.map(item => ([item, depth]))

    while(stock.length) {
        // shift比pop慢，因为一旦删除第一个元素，它还需要将所有元素向左移。
        const [top, dep] = stock.pop()

        if(Array.isArray(top) && dep) {
            stock.push(...top.map(item => ([item, dep - 1])))
        }else {
            result.push(top)
        }
    }
    return result.reverse()
}
`
export const quickSort = `
function quickSort(arr) {
    if (arr.length <= 1) return arr
    const len = arr.length
    const index = Math.floor(len >> 1)
    const pivot = arr.splice(index, 1)[0]
    const left = []
    const right = []
    for (let i = 0; i < len; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i])
        } else if (arr[i] <= pivot) {
                left.push(arr[i])
        }
    }
    return quick(left).concat([pivot], quick(right))
    
}
`

export const random = `
//定义一个数组arr
let arr = new Array();
//给这个数组按添加值
for(let i = 0;i < 50;i++){
    arr.push(i);
};
//将数组的值随机交换位置
function fn_random(arr){
    arr.sort(function(){
        return .5 - Math.random();
    });
};
function fn_random2(arr){
    let currentIndex = arr.length;
    while(currentIndex) {
        let randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
        let temp = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
}

`
export const filterSame = `
// Set
array = Array.from(new Set(array))

// filter
array = array.filter((el, index) => array.indexOf(el) === index)

// reduce
array = array.reduce((unique, el) => unique.includes(el) ? unique : [...unique, el], [])

const unique = arr => {
    let obj = {}
    arr.forEach(value=>{
        obj[value] = 0
    })
    return Object.keys(obj)
}
`

export const sort = `
function systemSort(arr) {
    return arr.sort(function(a, b) {
        return a - b
    })
 }
`

export const bubbleSort = `
function bubbleSort(arr) {
    var len = arr.length
    for(var i = len-1; i > 0; i--) {
        for(var j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                var tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1]= tmp
            }  
        }
    }
    return arr
}
const sort = arr => {
    let isSwap;
    for(let i=0;i<arr.length;i++){
        isSwap = false;
        for(let j=0;j<arr.length;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                isSwap = true;
            }
        }
        if(!isSwap){
            break;
        }
    }
    return arr;
}
`

export const sort2 = `
const sort = arr => {
    arr.forEach((v,i)=>{
        for(let j=i+1;j<arr.length;j++){
            if (arr[i] > arr[j]) {
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    })
    return arr;
}
`
export const arrFn13 = `
function flat(arr) {
    return Array.form(new Set(arr.flat(Infinity))).sort((a, b) => a - b);
}
`;

export const arrFn14 = `
const arr = [1,[1,2,3],1,[6,2],3,4,5,[6],[6,7,9]]
function flat(arr) {
    let result = []
    arr.forEach((item, key) => {
        if(Array.isArray(item)) {
            // arr.splice(key, 1, ...flat(item))
            result.push(...flat(item))
        }else {
            result.push(...flat(item))
        }
    })

    return result
}
const result5 = Array.from(new Set(flat(arr))).sort((a, b) => a - b)
`

export const destructuring = `
function fn(targetArray: any, formater: any) {
    // formater第一次传入的是字符串，转为数组，之后递归，传入的则都是数组
    // [a-z] 匹配a到z的字母 [0-9]匹配数字， \w匹配字母数字 下划线
    let arr = Array.isArray(formater) ? formater : JSON.parse(formater.replace(/(\w+)/g, '"$1"'))
    console.log(arr)
    let obj = {}
    arr.forEach((value: any, index: number) => {
        // 缓存该键对应的值
        let res = targetArray[index]
        if (Array.isArray(value)) {// 值为数组时，需要递归
            // 将递归的值拷贝至最初的对象，思路类似深拷贝
            Object.assign(obj, fn(res, value))
        } else {// 值为数值时，直接赋值
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


export const _reverseList = `
/**
 * 遍历
 * @param head 
 * @returns 
 */
function reverseList (head) {
    if(!head || !head.next) return head
    let cur = head
    let pre = null
    while(cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }

    return pre
}

/**
 * 递归
 * @param head 
 * @returns 
 */
 function reverseList (head) {
    if(!head || !head.next) return head
    // 递归反转子链表
    let next = reverseList(head.next)
    // 获取原来链表的第二个节点
    let nextTail = head.next
    // 调整原来头结点和第二个节点的指向
    nextTail.next = head
    head.next = null    

    return next
}
`
export const _merge1 = `
function _merge(A, B) {
    let result = []

    while(A.length || B.length) {
        if(!A.length) {
            result.push(B.shift())
            continue
        }
        if(!B.length) {
            result.push(A.shift())
            continue
        }

        let a = A[0]
        let b = B[0]
        if(a > b) {
            result.push(B.shift())
        }else {
            result.push(A.shift())
        }
    }
}
`
export const _merge2 = `
function __merge(A, m, B, n) {
    // 设置一个指针，指针初始化指向A的末尾
    // 然后向左移动指针
    let current = m + n - 1

    while (current >= 0) {
        if (n === 0) return

        if (m < 1) {
            A[current--] = B[--n]
            continue
        }
        if (n < 1) {
            A[current--] = A[--m]
            continue
        }

        if (A[m - 1] > B[n - 1]) {
            A[current--] = A[--m]
        } else {
            A[current--] = B[--n]
        }
    }
}

`

