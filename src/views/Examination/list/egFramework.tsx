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
export const _usememo = `
function _useMemo(func, resolver) {
    let cache = {}
    return function (...args) {
        const key = resolver ? resolver(...args) : [...args].join('_')
        if (!cache[key]) {
            cache[key] = func.call(this, ...args)
        }
        return cache[key]
    }
}
`

export const _render = `
function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children
        }
    }
}
function _render(json) {
    if (typeof json === 'string') {
        return document.createTextNode(json)
    }

    const { type, props } = json
    const { children, ...attrs } = props
    const element = document.createElement(type)

    for (let [key, value] of Object.entries(attrs)) {
        element[key] = value
    }

    const childrenArr = Array.isArray(children) ? children : [children]
    for (let child of childrenArr) {
        element.append(_render(child))
    }

    return element
}
`


export const virtualize = `
function virtualize(element: Element) {
    let props: any = {}
    const { attributes, childNodes } = element
    for (let attr of [...attributes]) {
        const { name, value } = attr
        const key = name === 'class' ? 'className' : name
        props[key] = value
    }

    const children = [...childNodes].map((node: any) => {
        return node.nodeType === 3 ? node.textContent : virtualize(node)
    })
    console.log(children)
    props.children = children.length === 1 ? children[0] : children
    return {
        type: element.tagName.toLowerCase(),
        props
    }
}
function virtualRender(obj) {
    if(typeof obj === 'string') {
      return document.createTextNode(obj)
    }
    const { type, props } = obj
    const { children, ...attrs } = props
    const node = document.createElement(type)
  
    for (let [attr, value] of Object.entries(attrs)) {
      node[attr] = value
    }
  
    const childrens = Array.isArray(children) ? children : [children]
    for (let child of childrens) {
      node.append(virtualRender(child))
    }
    return node
  }
`