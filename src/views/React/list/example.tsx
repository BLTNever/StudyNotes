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