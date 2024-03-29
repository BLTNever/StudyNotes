
export const debounce = `
// 函数防抖 —— 持续触发,只有在最后一次触发事件后延时执行
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
function debounce(fn, delay, immediate = false) {
    let timer = null
    return function() {
        let _this =this
        let args = arguments
        if(timer) clearTimeout(timer)
        
        if(immediate) {
            timer = setTimeout(function() {
                timer = null
            }, delay)
            if(!timer) fn.apply(_this, args)
        } else {
            timer = setTimeout(function() {
                fn.apply(_this, args)
            }, delay)
        }
    }
} 
window.onscroll = debounce(function() {
    cnsonle.log('debounce')
}, 1000)

`

export const debounce2 = `
/**
 *  
 * @param func 
 * @param wait 
 * @param option leading: 是否立即执行； trailing: 是否延时执行；
 * @returns 
 */
function debounce(fn, wait, option = { leading: false, trailing: true }) {
    const { leading, trailing } = option
    let timer = null
    let lastArgs = null
    return (...args) => {
        let _this = this
        if(!leading && !trailing) return null             // 都为false return
      
        if (!timer && leading) fn.call(this, ...args)   // 第一次执行 同时是立即执行的话
        else lastArgs = args                              // 否-记录一下参数

        if(timer) clearTimeout(timer)                     // 延时执行并且有记录的参数数据,通过setTimeout执行
      
        timer = setTimeout(() => {
            if(trailing && lastArgs){
                fn.call(_this, ...lastArgs)
            }
            timer = null
        }, wait)
    }
}
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

export const throttle = `
/**
 * 时间戳写法 第一次立即执行
 * @param fn 
 * @param interval 
 */
function throttle(fn, interval) {
    let last = 0
    return function () {
        let now = Date.now()
        if (now - last >= interval) {
            last = now
            fn.apply(this, arguments)
        }
    }
}
/**
 * 计时器写法, 最后一次会延时执行
 * @param fn 
 * @param interval 
 * @returns 
 */
function throttle(fn, interval) {
    let timer = null
    return function () {
        let _this = this
        let args = arguments
        if (!timer) {
            timer = setTimeout(function() {
                fn.apply(_this, args)
                timer = null
            })
        }
    }
}
/**
 * 
 * @param fn 
 * @param delay 
 * @returns 
 */
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
/** 
 * setTimeout, 第一次立即执行
 * 
 */
function throttle(fn, delay) {
    let waiting = false
    let lastArgs = null
    return (...args) => {
        if (!waiting) {
            waiting = true
            fn.call(this, ...args)
            setTimeout(() => {
                lastArgs && fn.call(this, ...lastArgs)
                waiting = false
            }, delay)
        } else {
            lastArgs = [...args]
        }
    }
}
function throttle(fn, delay) {
    let timer = null
    let lastArgs = null

    return (...args) => {
        if (!timer) {
            fn.call(this, ...args)
            timer = setTimeout(() => {
                lastArgs && fn.call(this, ...lastArgs)
                timer = null
            }, delay)
        } else {
            lastArgs = [...args]
        }
    }
}
const throttleScroll = throttle(function() {
    console.log('throttle')
}, 1000)
window.scroll = throttleScroll
`
export const throttle2 = `
/**
 *  
 * @param fn 
 * @param wait 
 * @param option leading: 是否立即执行； trailing: 是否延时执行；
 * @returns 
 */
function throttle(fn, wait, option = { leading: true, trailing: true }) {
    const { leading, trailing } = option
    let timer = null
    let lastArgs = null
    const timeFn = () => {
        if (trailing && lastArgs) {
            fn.call(this, ...lastArgs)
            lastArgs = null
            timer = setTimeout(timeFn, wait)
        } else {
            timer = null
        }
    }
    return (...args) => {
        if (timer) {
            lastArgs = [...args]
        } else {
            if (leading) func.call(this, ...args)
            timer = setTimeout(timeFn, wait)
        }
    }
}

/**
 * 
 * @param fn 
 * @param wait 
 * @param option leading: 是否立即执行； trailing: 是否延时执行；
 * @returns 
 */
function throttle(fn, wait, option = { leading: true, trailing: true }) {
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
        }, wait)
    }
    return (...args) => {
        if (!waiting) {
            waiting = true
            // leading为true 立即执行函数
            if (leading) func.call(this, ...args)
            timeFn()
        } else {
            lastArgs = [...args]
        }
    }
}
`

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
// 所有基本属性独立,子实例拷贝了父类的内容,没办法通过修改父类来达到所有子实例同时更新
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

// 实现了方法共享,但是只要某一个实例进行了修改,所有属性都会变化
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
// 通过把父类的实例赋值给子类prototype,子类的实例对象就可以共享父类原型上定义的属性和方法
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


// 通过Object.create(Obj),以Obj为原型构造对象,寄生式继承不需要构造函数,通过原型链继承共享了属性跟方法
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
// 通过创建一个新对象,然后赋值给Son.prototype,所以Son的原型最终指向就是父类的原型对象
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

    return ret instanceof Object ? ret : obj // 无返回值或者非对象值,将obj作为新对象返回
}

function createNew2() {
    const obj = {}

    const fn = [].shift.call(arguments)
    obj.__proto__ = fn.prototype

    const res = fn.apply(obj, arguments)

    return typeof res === 'object' ? res : obj
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
        // opent(method, url, async) merhod:请求方法, url: 地址, async: 请求是异步还是同步处理
        xhr.open('POST', url, true)
        // Content-Type: text/* 开头(html、text、plain), application/*开头(json、x-www-form-form-urlencoded), multipart/form-data文件上传
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
Promise.all实现
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
                console.log('index>>>', index)
                let task = tasks[index++]
                task.then((res: any) => {
                    console.log('res>>>', res)
                    console.log('prevIndex>>>', prevIndex)
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
 */
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
 */
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




export const publish = `
const Pu

`

export const _useState = `
/**
 * 简单实现
 */
let index = 0
let states = []
function useState(initState) {
    let currentIndex = index
    let _state = states[currentIndex] ? states[currentIndex] : initState
    function setState(prevState) {
        states[currentIndex] = prevState
        render()
        index = 0
    }
    index++
    return [states[currentIndex], setState]
}

/**
 * 实现2
 */
let states = []
let setter = []
let index = 0
function createSetter(stateIndex) {
    return function(prevState) {
        states[stateIndex] = prevState
        render()
    }
}
function useState(initState) {
    states[index] = states[index] ? states[index] : initState

    setter.push(createSetter(index))
    const state = states[index]
    const setState = setter[index]

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




export const useServiceWork = `
/* 判断当前浏览器是否支持serviceWorker */
if ('serviceWorker' in navigator) {
    /* 当页面加载完成就创建一个serviceWorker */
    window.addEventListener('load', function () {
        /* 创建并指定对应的执行内容 */
        /* scope 参数是可选的,可以用来指定你想让 service worker 控制的内容的子目录。 在这个例子里,我们指定了 '/',表示 根网域下的所有内容。这也是默认值。 */
        navigator.serviceWorker.register('./serviceWorker.js', {scope: './'})
            .then(function (registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(function (err) {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}`