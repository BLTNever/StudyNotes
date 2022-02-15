

export const extend1 = `
// 组合继承 - 缺点: 执行两次父类构造器
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

export const _extend = `
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

function createNew3() {
    const obj = {}
    const fn = [].shift.call(arguments)
    obj.__proto__ = fn.prototype

    const res = fn.apply(obj, arguments)

    return typeof res === 'object' ? res : obj
}
`

export const _instanceof = `
function _instanceof(left: any, right: any): any {
    // 实现1:
    // 获取对象的原型
    let proto = Object.getPrototypeOf(left)
    // 获取构造函数的 prototype 对象
    let prototype = right.prototype; 
   
    // 判断构造函数的 prototype 对象是否在对象的原型链上
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;
        // 如果没有找到，就继续从其原型上找，Object.getPrototypeOf方法用来获取指定对象的原型
        proto = Object.getPrototypeOf(proto);
    }
    // 实现2:
    let prototype = right.prototype
    if (typeof right !== 'function') throw new Error('right hand Error')
    if (left === null || (typeof left !== 'object' && typeof left !== 'function')) return false

    while (left.__proto__) {
        if (left.__proto__ === prototype) return true
        left = left.__proto__
    }
    return false

    // 实现3: 
    let proto = left.__proto__
    let queue = [proto]
    while(queue.length) {
        let item = queue.shift()
        if(item === null) return false
        if(item === prototype) return true
        queue.push(item?.__proto__)
    }
    if (proto === null) return false
    if (proto === prototype) return true
    else return _instanceof(proto, right)
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
export const multiRequest = `
function delay(time: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(time) }, time)
    })
}
let tasks = [delay(1000), delay(100), delay(3000), delay(2300), delay(900), delay(1500)]

console.time('时间')
// Promise.all实现
Promise.all(tasks).then(res => {
    console.log(res)
    console.timeEnd('object')
})
/**
 * 
 * @param tasks 任务列表
 * @param max 控制数量
 * @returns 
 */
function multiRequest(tasks: any, max = 6): any {
    if (!tasks.length) return
    let result: any = []
    let together = Array(max).fill(null)
    let index = 0

    together = together.map(item => {
        return new Promise((resolve: any, reject) => {
            function run() {
                if (index >= tasks.length) {
                    resolve()
                    return
                }
                let prevIndex = index
                let task = tasks[index++]
                task.then((res: any) => {
                    result[prevIndex] = res
                    run()
                }).catch((error: any) => {
                    reject(error)
                })
            }
            run()
        })
    })
    console.log('together>>>', together)
    console.log('result>>>', result)
    return Promise.all(together).then(() => result)
}

multiRequest(tasks, 3).then((res: any) => {
    console.log(res)
})
`


export const call = `
Function.prototype._call = function(context = window, ...args) {
    if(typeof !== 'function'){
        throw new Error('not a function')
    }
    var obj = context
    obj.fn = this
    // var args = [...arguments].slice(1) // 不使用 ...args 的时候
    var res = obj.fn(...args)
    delete obj.fn
    return res
}
`

export const apply = `
Function.prototyoe._apply = function(context = winodw) {
    //...边界值
    var obj = context
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

export const promise = `
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

export const promiseAll = `
const p1 = new Promise((res) => {
    setTimeout(() => { res(1) }, 1000);
})
const p2 = new Promise((res) => {
    setTimeout(() => { res(2) }, 2000);
})
const p3 = new Promise((res) => {
    setTimeout(() => { res(3) }, 3000);
})
function PromiseAll(arr: any[]) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) reject(new Error('not array'))
        let res: any[] = []
        let count = 0
        for (let i = 0; i < arr.length; i++) {      // 使用 for 循环，根据下标去存返回值，保证返回值顺序和执行顺序保持一致
            // Promise.resolve() 会把里面的返回值包裹成 Promise对象 
            Promise.resolve(arr[i]).then(value => {
                count++
                res[i] = value
                // 不使用 res.length 的原因是因为 arr[3] = 1, arr是 [undefined, undefined, 1]
                if (count === arr.length) {
                    resolve(res)
                }
            }).catch(e => reject(e))
        }
    })
}
PromiseAll([p1, p2, p3])
    .then((res: any) => {
        console.log(res)
    }).catch(e => console.log(e)) 
`

export const promiseDescriptor = `
const cacheMap = new Map()
function enableCache(target, name, descriptor) {
    const val = descriptor.value
    descriptor.value = async function (...args) {
        const cacheKey = name + JSON.stringify(args)
        if (!cacheMap.get(cacheKey)) {
            const cacheValue = Promise.resolve(val.apply(this, args)).catch(_ => {
                cacheMap.set(cacheKey, null)
            })
            cacheMap.set(cacheKey, cacheValue)
        }
        return cacheMap.get(cacheKey)
    }
    return descriptor
}
class PromiseClass {
    @enableCache
    static async getInfo()
}
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

export const _reverse = `
function _reverse(n: number) {
    let num = Math.abs(n)
    let arr = ''
    let r = 0

    r = parseInt(num.toString().split('').reverse().join(''), 10)
    // num.toString().split('').reverse().forEach((i) => {
    //     arr = arr + i
    //     console.log('arr>>>', arr)
    //     r = parseInt(arr, 10)
    //     console.log('r>>>', r)
    // })
    // if (n < 0) {
    //     return n > 2 ** 31 || -n > 2 ** 31 - 1 ? 0 : -r
    // } else {
    //     return n > 2 ** 31 - 1 || -n > 2 ** 31 ? 0 : r
    // }
    let x = Math.abs(n)
    let s = Math.sign(n)
    let res = parseInt(x.toString().split('').reverse().join(''), 10) * s
    if (res > Math.pow(2, 31) - 1 || res < Math.pow(2, 31) * -1) {
        return 0
    }
    return res
}

console.log(_reverse(1233456))
`


export const _assign = `
function _objectAssign(target: any, ...sources: any) {
    if (target === null || target === undefined) throw new Error('not object')
    if (typeof target !== 'object') {
        target = Object(target)
    }
    // if (typeof sources === 'number') target = new Number(target)
    // if (typeof sources === 'string') target = new String(target)
    // if (typeof sources === 'boolean') target = new Boolean(target)

    for (let source of sources) {
        if (source === null || source === undefined) continue
        console.log('target>>>', target)
        console.log('source>>>', target)
        console.log('symbol>>>', Object.getOwnPropertySymbols(source))
        // Object.defineProperties在一个对象上定义一个或多个新的属性或修改现有属性，并返回该对象
        // Object.getOwnPropertyDescriptors所指定对象的所有自身属性的描述符|| {}
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
        // Object.getOwnPropertySymbols 方法返回一个给定对象自身的所有 Symbol 属性的数组
        for (let symbol in Object.getOwnPropertySymbols(source)) {
            target[symbol] = source[symbol]
        }
    }
    return target
}
console.log(_objectAssign({}, { a: 1, b: 2, c: 3 }, { d: 4, f: 5 }))
`

export const _map = `
declare interface Array<T> {
    _map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[]
}
Array.prototype._map = function (callback, args) {
    const length = this.length
    let result = []
    for (let i = 0 i < length i++) {
        if (i in this) {
            result[i] = callback.call(args, this[i], i, this)
        }
    }
    return result
}
`
export const _trim = `
String.prototype._trim = function(s:string) {
    let res = s
    return res.replace(/^\\s*|\\s*$/g, '')
}
`
export const gen = `
/**
 * 生成器函数根据yield语句将代码分割为switch-case块，后续通过切换_context.prev和_context.next来分别执行各个case
 * @param _context 
 * @returns 
 */
function gen$(_context) {
    while (1) {
        switch (_context.prev = _context.next) {
            case 0:
                _context.next = 2;
                return 'result1';
            case 2:
                _context.next = 4;
                return 'result2';

            case 4:
                _context.next = 6;
                return 'result3';

            case 6:
            case "end":
                return _context.stop();
        }

    }
}
// 低配版context
let context = {
    next: 0,
    prev: 0,
    done: false,
    stop: function stop() {
        this.done = true
    }
}
// 低配版invoke
let gen = function () {
    return {
        next: function () {
            value = context.done ? undefined : gen$(context)
            done = context.done
            return { value, done }
        }
    }
}
var g = gen()
g.next()  // {value: "result1", done: false}
g.next()  // {value: "result2", done: false}
g.next()  // {value: "result3", done: false}
g.next()  // {value: undefined, done: true}
`

export const flat1 = `
// 遍历递归
function flat(arr, depth = 1) {
    let result = []
    arr.forEach(item => {
        // 去掉depth就是Infinity
        if(Array.isArray(item) && depth > 0) {
            result = [...result, ...flat(arr, depth - 1)]
        } else result.push(item)
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
`

export const flat2 = `
// rest
function flat(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

// 栈
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