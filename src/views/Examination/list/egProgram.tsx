/* eslint-disable @typescript-eslint/no-invalid-this */
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
 */
 function queryURLParams(url: string) {
    if (!url?.length) return {}
    let searchIndex = url.indexOf('?')
    let hashIndex = url.indexOf('#') !== -1 ? url.indexOf('#') : url.length
    let host = searchIndex !== -1 ? url.slice(0, searchIndex) : url
    let search = searchIndex !== -1 ? url.slice(searchIndex + 1, hashIndex) : ''
    let hash = hashIndex !== -1 ? url.slice(hashIndex) : ''

    if (!search.length) return {}
    search = decodeURIComponent(search)

    let obj = {}
    if (host.length) obj['host'] = host
    if (hash.length) obj['hash'] = hash
    search.split('&').forEach((i: string) => {
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
 */
 function queryURLParams(url: string) {
    if (!url.length) return {}
    url = decodeURIComponent(url)
    let _url: any = {}
    try {
        _url = new URL(url)
    } catch (error) {
        return new Error('非法连接')
    }
    const { hash, host, search, searchParams } = _url
    const keys = searchParams.keys()
    let obj = {}
    for (let key of keys) {
        const value = searchParams.get(key)
        obj[key] = value
    }
    return obj
}
`

export const observer = `


type TEvent = () => void
class EventBus {
    mapper: Map<string, TEvent[]>
    constructor() {
        this.mapper = new Map()
    }
    on(name: string, event: TEvent) {
        const { mapper } = this
        if (mapper.has(name)) {
            const events = mapper.get(name)
            if (!events?.some((e: TEvent) => e === event)) {
                mapper.get(name)?.push(event)
            }
        } else {
            mapper.set(name, [event])
        }
    }

    off(name: string, event?: TEvent) {
        const { mapper } = this
        if (!mapper.has(name)) return
        if (!event) {
            mapper.delete(name)
        } else {
            mapper.set(name, mapper.get(name).filter((e: Function) => e !== event))
        }
    }

    emit(name: string) {
        if (this.mapper.has(name)) {
            const events: TEvent[] | undefined = this.mapper.get(name)
            events && events.forEach((e: any) => e.call())
        }
    }
}

const eventbus = new EventBus()

function a() { console.log('aaa') }
function b() { console.log('bbb') }
function c() { console.log('ccc') }

eventbus.on('a', a)
eventbus.on('a', b)
eventbus.on('a', c)
eventbus.off('a')
eventbus.on('a', b)

eventbus.emit('a')


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

export const eventEmitter = `
class EventEmit {
    events: any = {}

    substribe(eventName: string, callback?: Function) {
        const { events } = this
        // 不存在就设置一个空的map
        if (!(eventName in events)) {
            events[eventName] = new Map()
        }
        // 已存在， callback当作key, 记录一下数量count
        events[eventName].set(callback, (events[eventName].get(callback) || 0) + 1)

        return {
            release() {
                const count = events[eventName].get(callback)
                if (count === 1) {
                    // count === 0 删掉callback
                    events[eventName].delate(callback)
                    if (!events[eventName].size) {
                        // 如果删掉callback后，当前eventName为空，删掉这个元素
                        delete events[eventName]
                    }
                } else {
                    // 数量—1
                    events[eventName].set(callback, count - 1)
                }
            }
        }
    }

    emit(eventName: string, ...args: any) {
        const { events }: any = this
        if (!(eventName in events)) return

        let list: [any, number][] = Object.entries(events[eventName])
        for (let [callback, count] of list) {
            while (count) {
                callback(...args)
                count--
            }
        }
    }
}
`
export const debounce = `
// 函数防抖 —— 持续触发，只有在最后一次触发事件后延时执行
function debounce(fn, delay) {
    let timer = null
    return (...args) => {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, [...args])
        }, delay)
    }
} 
/**
 * 增加是否立即执行参数immediate
 */
 function debounce(fn: any, wait: any, immediate: any) {
    let timer: any = null
    return (...args: any) => {
        if (timer) clearTimeout(timer)
        if (immediate && !timer) {      // timer 为空表示首次触发
            fn.apply(this, args)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait)

    }
}
function handle() { console.log(Math.random()) }

window.addEventListener("mousemove", debounce(handle, 1000, true)); // 调用立即执行版本
// window.addEventListener("mousemove", debounce(handle, 1000, false)); // 调用非立即执行版本
`

export const debounce2 = `
function debounce(fn, wait, option = { leading: false, trailing: true }) {
    const { leading, trailing } = option
    if(!leading && !trailing) return null             // 都为false return
    let timer = null
    let lastArgs = null
    return (...args) => {
        if (!timer && leading) fn.apply(this, args)     // 第一次执行 同时是立即执行的话
        else lastArgs = args                              // 否-记录一下参数
        if(timer) clearTimeout(timer)                     // 延时执行并且有记录的参数数据，通过setTimeout执行
        timer = setTimeout(() => {
            if(trailing && lastArgs){
                fn.apply(this, lastArgs)
            }
            timer = null
        }, wait)
    }
}
function handle() { console.log(Math.random()) }
const option = { leading: false, trailing: true }
window.addEventListener("mousemove", debounce(handle, 1000, option)); // 调用立即执行版本
// window.addEventListener("mousemove", debounce(handle, 1000, false)); // 调用非立即执行版本
`

export const debounce3 = `
/**
 * hooks中实现
 */
function useDebounce(fn, delay, dep = []) {
    const debounceRef = useRef({ timer: null, fn })
    const { current } = debounceRef

    useEffect(() => {
        current.fn = fn
    }, [fn])

    return useCallback = (() => {
        if(current.timer) clearTimeout(current.timer)
        current.timer = setTimeout(() => {
            current.fn.apply(this, [...arguments])
        }, delay)
    }, []) // }, dep)
}
`

export const throttle11 = `
function throttle(fn, interval) {
    let last = 0
    return (...args) => {
        let now = Date.now()
        if (now - last >= interval) {
            last = now
            fn.apply(this, args)
        }
    }
}
`
export const throttle12 = `
// 写法1 第一次立即执行
function throttle(fn, interval) {
    let waiting = false
    let lastArgs = null
    return (...args) =>{
        if(!waiting) {
            waiting = true
            fn.apply(this, args)
            setTimeout(() => {
                waiting = false
                if(lastArgs) fn.apply(this, lastArgs)
            }, interval)
        }else {
            lastArgs = args
        }
    }
}
// 写法2-？？验证一下
function throttle(fn, interval) {
    let timer = null
    return (...args) => {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, [...args])
                timer = null
            }, interval)
        }
    }
}
function handle() { console.log(Math.random()) }
const option = { leading: false, trailing: true }
window.addEventListener("mousemove", throttle(handle, 1000, option)); // 调用立即执行版本
// window.addEventListener("mousemove", throttle(handle, 1000, false)); // 调用非立即执行版本
`
export const throttle13 = `
function throttle(fn, delay) {
    let start = Date.now()
    let timer = null
    return function () {
        let cur = Date.now()
        let _this = this
        let args = arguments
        let remain = delay - (cur - start)
        if (remain <= 0) {                      // 剩余时间 小于等于0 立即执行          
            fn.apply(_this, args)
            start = Date.now()
        } else {
            timer = setTimeout(fn, remain)      // 剩余时间 大于0 延时剩余时间执行
        }
    }
}
`
export const throttle2 = `
/** 
 * 计时器 + 时间戳
 * 由immediate控制是否立即执行
 */
function throttle(fn, delay, immediate) {
    let timer
    let prev = 0
    return function () {
        let context = this
        let args = arguments
        if (immediate) {
            let cur = Date.now()
            if (cur - prev > delay) {
                fn.apply(context, args)
                prev = cur
            }
        } else {
            if (!timer) {
                timer = setTimeout(() => {
                    timer = null
                    fn.apply(context, args)
                }, delay)
            }
        }
    }
}
const throttleScroll = throttle(function() {
    console.log('throttle')
}, 1000)
window.scroll = throttleScroll
`
export const throttle3 = `
function throttle(fn, delay, option = { leading: true, trailing: true }) {
    const { leading, trailing } = option
    let waiting = false
    let timer = null
    let lastArgs = null
    const timeFn = () => {
        timer = setTimeout(() => {
            if (trailing && lastArgs) {
                fn.call(this, ...lastArgs)
                if (timer) timer = null
                lastArgs = null
                timeFn()
            } else {
                waiting = false
            }
        }, delay)
    }
    return (...args) => {
        if (!waiting) {
            waiting = true
            if (leading) fn.call(this, ...args)
            timeFn()
        } else {
            lastArgs = [...args]
        }
    }
}

function throttle(fn, delay, option = { leading: true, trailing: true }) {
    const { leading, trailing } = option
    let timer = null
    let lastArgs = null
    const timeFn = () => {
        if (trailing && lastArgs) {
            fn.call(this, ...lastArgs)
            lastArgs = null
            timer = setTimeout(timeFn, delay)
        } else {
            timer = null
        }
    }
    return (...args) => {
        if (!timer) {
            if (leading) fn.call(this, ...args)
            timer = setTimeout(timeFn, delay)
        } else {
            lastArgs = [...args]
        }
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


export const promise = `
// promise 三个状态
const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"
function Promise(executor) {
    let _this = this // 当前promise实例对象
    _this.status = PENDING // 初始状态
    _this.value = undefined // fulfilled状态时 返回的信息
    _this.reason = undefined // rejected状态时 拒绝的原因
    _this.onFulfilledCallbacks = [] // 存储fulfilled状态对应的onFulfilled函数
    _this.onRejectedCallbacks = [] // 存储rejected状态对应的onRejected函数
    
    function resolve(value) { // value成功态时接收的终值
        if(value instanceof Promise) {
            return value.then(resolve, reject)
        }
        /** 为什么resolve加setTimeout?
         * 2.2.4规范 onFulfilled 和 onRejected 只允许在 execution context 栈仅包含平台代码时运行。
         * 这里的平台代码指的是引擎、环境以及 promise 的实施代码。
         * 实践中要确保 onFulfilled 和 onRejected 方法异步执行，且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。
         */
        setTimeout(() => {
            // 由pending状态 => fulfilled状态 (避免调用多次resolve reject)
            if (_this.status === PENDING) {
                _this.status = FULFILLED
                _this.value = value
                _this.onFulfilledCallbacks.forEach(cb => cb(_this.value))
            }
        })
    }
    
    function reject(reason) {
        setTimeout(() => {
            // 由pending状态 => rejected状态 (避免调用多次resolve reject)
            if (_this.status === PENDING) {
                _this.status = REJECTED
                _this.reason = reason
                _this.onRejectedCallbacks.forEach(cb => cb(_this.reason))
            }
        })
    }
    
    /**
     * resolve中的值几种情况: 
     * 1.普通值
     * 2.promise对象
     * 3.thenable对象/函数
     */
    
    /**
     * 针对resolve中不同值情况 进行处理
     * @param  promise2  promise1.then方法返回的新的promise对象
     * @param  x         promise1中onFulfilled的返回值
     * @param  resolve   promise2的resolve方法
     * @param  reject    promise2的reject方法
     */
    
    function resolvePromise(promise2, x, resolve, reject) {
        if (promise2 === x) {
            return reject(new TypeError('循环引用'))
        }
    
        let called = false // 避免多次调用
    
        if (x instanceof Promise) {  // x是一个promise对象
            if (x.status === PENDING) { // 如果为等待态需等待直至x被执行或拒绝 并解析y值
                x.then(y => {
                    resolvePromise(promise2, y, resolve, reject)
                }, reason => {
                    reject(reason)
                })
            } else { // 如果x已经处于执行态/拒绝态(值已经被解析为普通值)，用相同的值执行传递下去 promise
                x.then(resolve, reject)
            }
            // 如果x为对象或者函数
        } else if (x != null && ((typeof x === 'object') || (typeof x === 'function'))) {
            try { // 是否是thenable对象（具有then方法的对象/函数）
                let then = x.then
                if (typeof then === 'function') {
                    then.call(x, y => {
                        if(called) return
                        called = true
                        resolvePromise(promise2, y, resolve, reject)
                    }, reason => {
                        if(called) return
                        called = true
                        reject(reason)
                    })
                } else { // 说明是一个普通对象/函数
                    resolve(x)
                }
            } catch(e) {
                if(called) return
                called = true
                reject(e)
            }
        } else { // 普通值
            resolve(x)
        }
    }
    function then(onFulfilled, onRejected) {
        let newPromise
        // 处理参数默认值 保证参数后续能够继续执行
        onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value
        onRejected = typeof onRejected === "function" ? onRejected : reason => {
                throw reason
            }

        if (_this.status === FULFILLED) {
            return newPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    try{
                        let x = onFulfilled(_this.value)
                        resolvePromise(newPromise, x, resolve, reject)
                    } catch(e) {
                        reject(e)
                    }
                })
            })
        }

        if (_this.status === REJECTED) {
            return newPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        let x = onRejected(_this.reason)
                        resolvePromise(newPromise, x, resolve, reject)
                    } catch(e) {
                        reject(e)
                    }
                })
            })
        }
        
        if (_this.status === PENDING) {
            // 当异步调用resolve/rejected时 将onFulfilled/onRejected收集暂存到集合中
            return newPromise = new Promise((resolve, reject) => {
                _this.onFulfilledCallbacks.push((value) => {
                    try {
                        let x = onFulfilled(value)
                        resolvePromise(newPromise, x, resolve, reject)
                    } catch(e) {
                        reject(e)
                    }
                })
                _this.onRejectedCallbacks.push((reason) => {
                    try {
                        let x = onRejected(reason)
                        resolvePromise(newPromise, x, resolve, reject)
                    } catch(e) {
                        reject(e)
                    }
                })
            })
        }
    }

    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
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
// 箭头函数 this
function curry(ans = 1) {
    return (num) => {
        if(num) return curry.call(this, ans * num)
        return ans
    }
}
/**
 * 多个数据传入
 */
 function curry(...rest) {
    if (!rest.length) return 0
    rest = [...rest].reduce((a, b) => a + b, 1)
    return (...args) => {
        if (args.length) {
            rest += [...args].reduce((a, b) => a + b, 1)
            return curry.call(this, ...[rest])
        }
        return rest
    }
}
curry(2, 3)(3, 5)(4)()
`
export const infinityCurry2 = `
// 使用隐式调用的toString方法，但是注意 只有alert可以
function curry(...rest) {
    let _args = [...rest]
    const add = (...args) => {
        _args.push(...args)
        return curry.apply(null, _args)
    }
    add.toString = () => {
        return _args.reduce((a, b) => a + b, 0)
    }
    return add
}
alert(curry(1)(1, 2, 3)(2))

// 或者使用arguments（注意: 箭头函数没有arguments）
function curry() {
    let args = Array.prototype.slice.call(arguments)
    const add = function () {
        args.push(...arguments)
        return add
    }
    add.toString = function () {
        return args.reduce((a, b) => a + b, 0)
    }
    return add
}
alert(curry(1)(1, 2, 3)(2))
`

export const _flatFn = `
function _flat(arr){
    return [...arr.flat(Infinity)]
}
`

export const event = `
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

export const flat1 = `
// 遍历递归
function flat(arr, depth = 1) {
    let result = []
    arr.forEach(item => {
        // 去掉depth就是Infinity
        if(Array.isArray(item) && depth > 0) {
            result = [...result, ...flat(item, depth - 1)]
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
    let workers = Array(max).fill(null)
    let index = 0

    workers = workers.map(() => {
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
    return Promise.all(workers).then(() => result)
}

multiRequest(tasks, 3).then((res: any) => {
    console.log(222, res)
})
`

export const throttlePromises = `
function delay(time: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(time) }, time)
    })
}
let tasks = [delay(1000), delay(100), delay(3000), delay(2300), delay(900), delay(1500)]

function throttlePromises(list: any[], max: number) {
    const result: any = []
    async function run(interator: any) {
        for (let [index, req] of interator) {
            const res = await req
            result[index] = res
        }
    }
    const interator = Array.from(list).entries()
    const workers = Array(max).fill(interator).map(run)
    return Promise.all(workers).then(() => result)
}

try {
    throttlePromises(tasks, 3).then(res => {
        console.log(res)
    })
} catch (error) { console.log(error) }
`

export const renderTemplate = ` 
function render(template: string, data: any) {
    // 字符串内声明 str 变量，拼接并用 str 拼接模板template，并 return str，使用with传入data
    template = \`
      with(data){
        let str = '';
        str += \`\${template}\`;
        return str;
      }
    \`
    // 找到变量将{%= %}替换成 \${}
    template = template.replace(/{%=(.+)%}/g, (...args) => {
        console.log(args)
        return '\${' + args[1] + '}'
    })
    // 让js 语句可执行，删掉<% %> ，并在语句内部去拼接 str
    template = template.replace(/<%(.+?)%>/g, (...args) => {
        console.log(args)
        return \`;\${args[1]}; str+=\`
    })
    console.log(template)
    // eslint-disable-next-line no-new-func
    // 通过new Function(str)去执行
    const res = new Function('data', template)(data)
    return res
}
const html = \`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <% arr.forEach(item => { %>
        <p>{%= item %}</p>
    <% }) %>

    <%if(Array.isArray(arr)){%>
        console.log(1)
    <%}%>
</body>
</html>\`
console.log(render(html, { arr: [1, 2, 3] }))
`