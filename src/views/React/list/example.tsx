export const _useState = `
/**
 * 实现1
 */
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
 */
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

export const _createStore = `

`


export const _compose = `
function compose(...fn) {
    if(!fn.length) return arg => arg
    if(fn.length === 1) return fn[0]

    const last = fn[fn.length - 1]
    const rest = fn.slice(0, -1)
    // 用到了 reduceRight，因此执行顺序是从右到左
    return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args))
    // return fn.reduce((a, b) => (...args) => a(b(...args)))
}
`

export const _applyMiddleware = `
function applyMiddleware(...middlewares) {
    return (createStore) => (...args) => {
        // 先建立一个store
        const store = createStore(...args)
        let dispatch = store.dispatch
        let chain = []
        // 将getState 跟dispatch函数暴露出去
        const middlewareAPI = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        }

        // 这边返回chain的一个数组，里面装的是wrapDispatchToAddLogging那一层，相当于先给
        // middle剥了一层皮，也就是说
        // 接下来只需要开始传入dispatch就行
        // 相当于reducer
        chain = middlewares.map(middleware => middleware(middlewareAPI))

        dispatch = compose(...chain)(store.dispatch)
        // wrapCrashReport(wrapDispatchToAddLogging(store.dispatch))
        // 此时返回了上一个dispatch的函数作为wrapCrashReport的next参数
        // wrapCrashReport(dispatchAndLog)
        // 最后返回最终的dipatch
        return {
            ...store,
            dispatch
        }
    }
}
`
export const _combineReducers = `
function _combineReducers(reducers) {
    let finalReducers = {}
    // 过滤非function的reducer
    for (let key in reducers) {
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key]
        }
    }
    // 根据key调用每个reducer，将他们的值合并在一起
    let hasChange = false
    const nextState = {}
    return function (state = [], action) {
        for (let key in finalReducers) {
            // 第一步先获取目前的state[key]，所以说传入reducer的key === store的key
            const previousValue = state[key]
            // 就用reducer[key]来处理，得到下一个状态
            const nextValue = reducers[key](previousValue, action)
            // 根据key更新store的值
            nextState[key] = nextValue;
            hasChange = hasChange || previousValue !== nextValue
        }
        // 如果整个循环都没有被更新过，返回state
        return hasChange ? nextState : state
    }
}
`


// /**
//  * 
//  * @param reducer:Fucntion 通过传入当前state、action，计算出下一个state， 返回出来
//  * @param preloadedState:any 默认state initial state
//  * @param enhancer:Function  增加Store的功能，例如applyMiddleware()
//  * @returns 
//  */
//  function createStore(reducer, preloadedState, enhancer) {
//     // 当第二个参数没有传preloadedState，而直接传function的话，就会直接把这个function当成enhancer
//     if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
//         enhancer = preloadedState
//         preloadedState = undefined
//     }

//     // 当第三个参数传了但是不是function也会报错
//     if (typeof enhancer !== 'undefined') {
//         if (typeof enhancer !== 'function') {
//             // ... throw new Error()
//         }
//         // 如果第三个参数是(enhancer)函数也是我们的applyMiddleware，那就会直接返回这个
//         // 实际就是把createStore这件事在applyMiddleware里面做
//         return enhancer(createStore)(reducer, preloadedState)
//     }

//     if (typeof reducer !== 'function') {
//         // ... throw new Error()
//     }

//     let currentReducer = reducer
//     let currentState = preloadedState // 默认State
//     let currentListeners = [] // 储存订阅的回调函数， dispatch
//     let nextListeners = currentListeners
//     let isDispatching = false

//     function getState() {
//         return currentState
//     }

//     // *这个函数的作用就是，如果发现nextListeners，nextListeners指向同一个堆栈的话，就浅复制一份，这样改nextListeners就不会改到currentListeners
//     function ensureCanMutateNextListeners() {
//         if (nextListeners === nextListeners) {
//             nextListeners = currentListeners.slice()
//         }
//     }

//     function subscribe(listener) {
//         if (typeof listener !== 'function') {
//             throw new Error('Expected listener to be a function.')
//         }
//         let isSubscribed = true

//         ensureCanMutateNextListeners()
//         // 直接将监听的函数放进nextListeners里
//         nextListeners.push(listener)

//         return function unsubscribe() {
//             // 如果已经移除了就直接返回
//             if (!isSubscribed) {
//                 return
//             }

//             isSubscribed = false

//             ensureCanMutateNextListeners()
//             // 没有移除的话，先找到位置，通过splice移除
//             const index = nextListeners.indexOf(listener)
//             nextListeners.splice(index, 1)
//         }
//     }

//     function dispatch(action) {
//         if (!isPlainObject(action)) {
//             // ... throw new Error()
//         }
//         if (typeof action.type === 'undefined') {
//             // ... throw new Error()
//         }
//         // 防止多次dispatch请求同时改状态，一定是前面的dispatch结束之后，才dispatch下一个
//         if (isDispatching) {
//             // ... throw new Error()
//         }

//         try {
//             isDispatching = true
//             currentState = currentReducer(currentState, action)
//         } finally {
//             isDispatching = false
//         }
//         // 在dispatch的时候，又将nextListeners 赋值回currentListeners，
//         const listeners = currentListeners = nextListeners
//         for (let i = 0; i < listeners.length; i++) {
//             const listener = listeners[i]
//             listener()
//         }
//         return action
//     }

//     return {
//         dispatch,
//         subscribe,
//         getState,
//     }
// }