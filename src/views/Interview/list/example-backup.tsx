const promise = `
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
         * 实践中要确保 onFulfilled 和 onRejected 方法异步执行,且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。
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
            } else { // 如果x已经处于执行态/拒绝态(值已经被解析为普通值),用相同的值执行传递下去 promise
                x.then(resolve, reject)
            }
            // 如果x为对象或者函数
        } else if (x != null && ((typeof x === 'object') || (typeof x === 'function'))) {
            try { // 是否是thenable对象(具有then方法的对象/函数)
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