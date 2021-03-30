import { useForm } from "antd/lib/form/Form"
import { T } from "antd/lib/upload/utils"
import { fill, reject, values } from "lodash"
import { fn } from "moment"
import { resolve } from "path"

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
                fn.apply(_this, args)
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
// fn.prototype = new Fn()每次实例化子类的时候都要调用一次父类构造函数
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

export const extend3 = `
// 构造函数继承

function Parent(name) {
    this.name = name
}
Parent.prototype.say = function() {
    console.log('hello ' + this.name)
}

function Son(name) {
    Parent.call(this, name)
}
var son1 = new Son('111')
var son2 = new Son('222')
// 所有基本属性独立，子实例拷贝了父类的内容，没办法通过修改父类来达到所有子实例同时更新
`
export const extend4 = `
// 原型链继承

function Parent(name) {
    this.name = name
}
Parent.prototype.say = function() {
    console.log('hello ' + this.name)
}

function Son() {}

Son.prototype = new Parent()
Son.prototype.constructor = Son 

var son1 = new Son()

// 实现了方法共享，但是只要某一个实例进行了修改，所有属性都会变化
`

export const extend5 = `
// 原型链构函函数组合继承
function Parent(name) {
    this.name = name
}
Parent.prototype.say = function() {
    console.log('hello ' + this.name)
}

function Son(name) {
    Parent.call(this, name)
}

Son.prototype = new Parent()
Son.prototype.constructor = Son 

var son1 = new Son()

// 通过调用Parent.call和new Parent单独拷贝了一份父类构造函数里定义的属性和方法
// 通过把父类的实例赋值给子类prototype，子类的实例对象就可以共享父类原型上定义的属性和方法
`

export const extend6 = `
// 寄生式继承

var Obj = {
    name: 'AAA',
    print: function() {
        console.log(this.name)
    }
}

var son1 = Object.create(Obj)
var son2 = Object.create(Obj)


// 通过Object.create(Obj),以Obj为原型构造对象，寄生式继承不需要构造函数，通过原型链继承共享了属性跟方法
`


export const extend7 = `
// 继承组合式继承
// es6的class语法实现原理
function Parent(name) {
    this.name = name
}

Parent.prototype.say = function () {
    console.log(this.name)
}

function Son(name) {
    Parent.call(this, name)
}

Son.prototype = Object.create(Parent.prototype)
Son.prototype.constructor = Son

var son1 = new Son('1111')
var son2 = new Son('2222')


// 使用Son.prototype = Object.create(Parent.prototype)代替 new Parent()
// 通过创建一个新对象，然后赋值给Son.prototype，所以Son的原型最终指向就是父类的原型对象
`

export const extend8 = `
function _extend(subClass, superClass) {
    var Fn = function(){}
    Fn.prototype = superClass.prototype

    subClass.prototype = new Fn()
    subClass.prototype.constructor = subClass

    subClass.superclass = superClass.prototype //？？
    if(!superClass.prototype.constructor === Object.prototype.constructor) {
        superClass.prototype.constructor = superClass
    }
}
`

export const createNew = `
// new操作符的实现
function createNew(constructor, ...args) {
    const obj = {} // 新建一个空对象
    obj.__proto__ = constructor.prototype // 将新对象的__proto__指向构造函数的prototype

    const ret = constructor.call(obj, ..args) // 将构造函数的作用域指向这个新对象

    return ret instanceof Object ? ret : obj // 无返回值或者非对象值，将obj作为新对象返回
}

function createNew2() {
    const obj = {}

    const fn = [].shift.call(arguments)
    obj.__proto__ = fn.prototype

    const res = fn.apply(obj, arguments)

    return typeof res === 'object' ? res : obj
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

export const clone1 = `
fucntion deepClone (target){
    let obj = {}
    if(typeof target !== 'object') {
        return target
    }

    for(const key in target) {
        if(typeof target[key] === 'object') {
            if(Array.isArray(target[key])) {
                obj[key] = target[key].map(item => deepClone(item))
            }else {
                obj[key] = deepClone(target[key])
            }
        }else if(typeof target[key] === 'function') {
            obj[key] = target[key].call(obj)
        }else {
            obj[key] = target[key]
        }
    }
    return obj
}
`

export const call = `
Function.prototype._call = function(context = window, ...args) {
    if(typeof !== 'function'){
        throw new Error('not a function')
    }
    var obj = context | window
    obj.fn = this

    // var args = [...arguments].slice(1)

    var res = obj.fn(...args)

    delete obj.fn

    return res
}
`

export const apply = `
Function.prototyoe._apply = function(context = winodw) {
    //...边界值
    var obj = context || window
    obj.fn = this
    var arg = [...arguments][1] | []
    var res = obj.fn(...arg)
    delete obj.fn
    return res
}
`

export const bind = `
Function.prototype._bind = function(context = window, ...outerArgs) {
    var fn = this
    return function (...innerArgs) {
        return fn.apply(context, [...outArgs, ...innerArgs])
    }

}
`

export const myPromise = `
class Promise {
    callback = []

    constructor(fn) {
        fn(this._resolve.bind(this))
    }

    then(onFulfilled) {
        this.callback.push(onFulfilled)
    }

    _resolve(value) {
        this.callback.forEach(fn => fn(value))
    }
}


class Promise {
    callback = []
    state = 'pendding'
    value = null

    constructor(fn) {
        fn(this._resolve.bind(this))
    }

    then(onFulfilled) {
        if(this.state === 'pendding') { // resolve之前 添加到callback队列中
            this.callback.push(onFulfilled)
        }else { // resolve 之后直接执行会调
            onFulfilled(this.value)
        }
        return this
    }

    _resolve(value) {
        this.state = 'fulfilled' // 改变状态
        this.value = value // 保存结果
        this.callback.forEach(fn => fn(value))
    }
}

Promise.race = promises =>
    new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(resolve, reject)
        })
    })

Promise.all = promises =>
    new Promise((resolve, reject) => {
        let len = promises.length
        let res = []
        promises.forEach((p, i) => {
            p.then(r => {
                if (len === 1) {
                    resolve(res)
                } else {
                    res[i] = r
                }
                len--
            }, reject)
        })
    })



`

export const parseInt = `
function _parseInt(str, radix = 10) {
    var res = 0
    var strType = typeof str
    var len = str.length

    if(strType !== 'string' || strType !== 'number') return NaN
    if(radix < 2 || radix > 36) return NaN
    if(!len) return NaN

    str = String(str).trim().split('.')[0]
    for(var i = 0 i < len i++) {
        var arr = str.split('').reverse().join('')
        res += Math.floor(arr[i]) * Math.pow(radix, i)
    }

    return res
}
`

export const queryUrlParams = `
/**
 * 解析链接 
 * "https://www.baidu.com?name=coder&age=20&callback=https%3A%2F%2Fbaidu.com%3Fname%3Dtest&list[]=a&list[]=b&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D"
 * 返回 {
 *    list: [...],
 *    json: {...},
 *    callback: https://baidu.com?name=...,
 *    name: code,
 *    age: 20
 * }
 * /
const queryURLParams = (url) => {
    if (!url?.length) return {}
    let askIndex = url.indexOf('?')
    let polIndex = url.indexOf('#') > 0 ? url.indexOf('#') : url.length
    let host = askIndex > 0 ? url.slice(0, askIndex) : url
    let askText = askIndex > 0 ? url.slice(askIndex + 1, polIndex) : ''
    let polText = polIndex > 0 ? url.slice(polIndex) : ''

    if (!askText?.length) return {}
    askText = decodeURIComponent(askText)

    let obj = {}
    if(host?.length) obj['host'] = host
    if (polText?.length) obj['hash'] = polText
    askText.split('&').forEach((i: string) => {
        let [key, value] = i.split('=')
        const arrIndex = key.indexOf('[]')
        if (arrIndex > 0) {
            key = key.slice(0, arrIndex)
            if (key in obj) {
                obj[key].push(value)
            } else {
                obj[key] = [value]
            }
        } else if (key === 'json') {
            obj['json'] = value?.length ? JSON.parse(value) : {}
        } else {
            obj[key] = decodeURIComponent(value)
        }
    })
    return obj
}
`

export const queryUrlParams2 = `
/**
 * 通过new URL 去解析链接
 * 
 * /
const queryURLParams = (url) => {
    if(!url?.length) return ''
    const { hash, host, search,searchParams } = new URL(url)
    const keys = searchParams.keys()

    let obj = {}
    for(key of keys) {
        const value = searchParams.get(key)
        obj[key] = value
    }
    return obj
}
`

export const observer = `

type TEvent = () => void
interface IEvent {
    name?: string
    event?: TEvent
}

class EventBus {
    map: Map<string, TEvent[]>
    
    constructor() {
        this.map = new Map()
    }

    on(name: string, event: TEvent) {
        if (!event) return
        const { map } = this
        if (!map.has(name)) {
            map.set(name, [])
        }
        map.get(name).push(event)
    }

    off(name: string, event?: TEvent) {
        if (!map.has(name)) return
        if (!event) {
            map.delete(name)
        }
        map.set(name, map.get(name).filter((e: TEvent) => e !== event))
    }

    emit(name: string, event?: TEvent) {
        if (!map.has(name)) return
        const events = map.get(name)
        events.forEach((e: any) => e.call())
    }
}


function Subject() {
    this.observers = []
}
Subject.prototype = {
    subscribe: function (observer) {
        if (this.observers.indexOf(observer) < 0) {
            this.observers.push(observer)
        }
    },
    unsubscribe: function (removeObserver) {
        this.observers = this.observers.filter(observer => observer !== removeObserver)
    },
    run: function () {
        this.observers.forEach(observer => {
            observer.call()
        })
    }
}

const subject = new Subject()

function observer1() { console.log(11111) }
function observer2() { console.log(22222) }

subject.subscribe(observer1)
subject.subscribe(observer2)
subject.run()

subject.unsubscribe(observer2)
subject.run()



`




export const publish = `
const Pu

`

export const _useState = `
/**
 * 实现1
 * /
let index = 0
let stateList = []
function _useState(initState) {
    let currentIndex = index
    let _state = stateList[currentIndex] ? stateList[currentIndex] : initState
    function setState(prevState) {
        stateList[currentIndex] = prevState
        render()
        index = 0
    }
    index++
    return [stateList[currentIndex], setState]
}

/**
 * 实现2
 * /
let states = []
let setters = []
let index = 0
function createSetter(stateIndex) {
    return function(prevState) {
        states[stateIndex] = prevState
        render()
    }
}
function _useState(initState) {
    states[index] =  states[index] ? states[index] : initState

    setters.push(createSetter(index))
    const state = states[index]
    const setState = setters[index]

    index++
    return [state, setState]
}

`

export const createContext = `
function createContext() {
    let currentValue
    function Provider(props) {
        currentValue = props.value
        return props.childred
    }
    let context = {
        Provider,
        get _currentValue() {
            return currentValue
        }
    }
    return context
}

`

const createStore = `
const createStore = (reducer, initialState) => {
    // internal variables
    const store = {}
    store.state = initialState
    store.listeners = []

    // api-subscribe
    store.subscribe = (listener) => {
        store.listeners.push(listener)
    }
    // api-dispatch
    store.dispatch = (action) => {
        store.state = reducer(store.state, action)
        store.listeners.forEach(listener => listener())
    }

    // api-getState
    store.getState = () => store.state

    return store
}
`

export const _memo = `
function memo(OldComponent) {
    return class extends React.Component {
        shouldComponentUpdate(nextProps, nextState) {
            if(nextProps === this.props) return false
            if(Object.keys(nexProps).length === Object.keys(this.props).length) return true

            if(nextProps === null || this.props === null) return true // 初始化？

            for(le key in this.props) {
                if(this.props[key] !== nextProps[key]) return true
            }

            return false
        }
        render() {
            <OldComponent {...this.props}/>
        }
    }
}
`



export const event1 = `
/**
 * 
* /
document.body.addEventListener('click', function(e) {
    let $target:any = e.target
    if(!$target) return 
    if($target?.tagName === 'DIV') {
        console.log('div>>>', $target, $target)
    }else {
        $target = $target.parentElement
        while($target && $target.tagName !== 'DIV' && $target.tagName !== 'BODY') {
            $target = $target.parentElement
        }
        if($target.tagName === 'DIV') {
            console.log('parent>>>', $target, e.target)
        }else {
            console.log('未找到div')
        }
    }
}, true)
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
`


