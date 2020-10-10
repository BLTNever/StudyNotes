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