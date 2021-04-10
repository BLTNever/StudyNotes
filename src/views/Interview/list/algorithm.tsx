
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
    for(let i = 0i <= 36i++) {
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
export const _flat = `
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];
// concat + 递归
function flat(arr) {
    let list = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            list = list.concat(arguments.callee(item)));   // 递归
            // 或者用扩展运算符
            // list.push(...arguments.callee(item));
        } else {
            list.push(item);
        }
    });
    return list;
}
// reduce
const flat = arr => {
    return arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
    }, []);
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
for(let i=0;i<50;i++){
    arr.push(i);
};
//将数组的值随机交换位置
function fn_random(arr){
    arr.sort(function(){
        return .5-Math.random();
    });
};
function fn_random2(arr){
    let currentIndex=arr.length;
    while(currentIndex)
    {
        let randomIndex=Math.floor(Math.random()*currentIndex);
        currentIndex--;
        let temp=arr[currentIndex];
        arr[currentIndex]=arr[randomIndex];
        arr[randomIndex]=temp;
    }
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
    const arr =list.filter((i: any) => i.pId === pId)
    return arr.map((i: any) => {
        return {
            ...i,
            children: listToTree(list, i.id)
        }
    })
}
`

