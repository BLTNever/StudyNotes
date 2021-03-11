export const arrFn1 = `
Array.from(new Set(arr))

***** or *****

[...new Set(arr)]
`;

export const arrFn2 = `
for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length - 1; j++) {
        if(arr[i] === arr[j]) {
            arr.splice(i, 1)
        }
    }
}
`;

export const arrFn3 = `
for(var i = 0; i < arr.length; i++) {
    var array = [];
    if(array.indexOf(arr[i]) === -1) {
        array.push(arr[i]);
    }
}
`;

export const arrFn4 = `
var array = [];
var obj = {}
for(var i = 0; i < arr.length; i++) {
    if(!obj[arr[i]) {
        array.push.push(arr[i])
        obj[arr[i]] = 1;
    }else {
        obj[arr[i]]++;
    }
}
`;
export const arrFn5 = `
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]];

function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr;
}
console.log(flatten(arr));
`;
export const arrFn6 = `
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]];

const flatten = arr => arr.reduce((acc, cur) => {
    return Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur]
}, []);
console.log(flatten(arr));
`;

export const arrFn7 = `
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]];

const flatten = arr => {
    return Array.from(arr.flat(Infinty));
}
console.log(flatten(arr));
`;


export const deepCopy1 = `
// 检测类型
function typeIs(obj) {
    if(!obj) return false;

    if(Object.prototype.toString.call(obj) === '[object Array]')  {
        return 'Array';
    }else if(Object.prototype.toString.call(obj) === '[object Object]'){
        return 'Object';
    }else {
        return false;
    }
}

function deepCopy(source) {
    if(!typeIs(source)) return source;
    let output = typeIs(source) === 'Object' ? {} : [];

    for(let i in source) {
        if(source.hasOwnProperty(i)) {
            output[i] = typeIs[i] ? deepCopy(source[i]) :  source[i];
        }
    }
    return output;
}
`;
export const deepCopy2 = `
// 序列化(不能拷贝函数以及解决循环引用的问题)
const output = JSON.parse(JSON.stringify(source));
`;

export const shallowClone = `
// 检测类型
function typeIs(obj) {
    if(Object.prototype.toString.call(obj) === '[object Array]')  {
        return 'Array';
    }else if(Object.prototype.toString.call(obj) === '[object Object]'){
        return 'Object';
    }else {
        return false;
    }
}
//浅拷贝
// 方法1
function shallowClone(source) {
    if(!typeIs(source)) return source;
    let output = typeIs(source) === 'Object' ? {} : [];

    for(let i in source) {
        if (src.hasOwnProperty(i)) {
            output[i] = source[i]
        }
    }
    reutrn output;
}
// 方法2
const output = {...source}; // {}结构
// 方法3
const output = Object.assign({}, source) // Object.assign
// 方法4
const output = Object.create({}, source) // Object.create
`;


export const inherit1 = `
// 定义父类
function Fn(name) {
    this.name = name;
}

Fn.prototype.getName = function() {
    return this.name;
}

// 定义子类
function fn() {
    this.age = 24;
}

// 通过fn的prototype属性和Fn 进行关联
fn.prototype = new Fn('Alec'); // fn.prototype.constructor === Fn.protoype.constructor = Fn

const f = new fn(); // f.constructor === fn.prototype.constructor = Fn

f.age // 24
f.getName() // Alec
`;
export const inherit2 = `
// 定义父类
function Fn (value) {
    this.language = ['javascript', 'react', 'node'];
    this.value = value;
}

// 定义子类
function fn() {
    Fn.apply(this, arguments);
}

const f = new fn('666');
f.language; // ['javascript', 'react', 'node']
f.value; // 666
`;
export const inherit3 = `
function Fn(num) {
    this.num = num;
}
function fn(num) {
    let instance = new Fn();
    instance.num = num;
    return instance;
}

let f = new fn(66);
`;
export const inherit4 = `
function Fn(name, age) {
    this.name = name;
    this.age = age;
}
Fn.prototype.getName = function() {
    return this.name + ':' this.age
}

function fn (name, age){
    Fn.call(this, name, age);
}
fn.prototype.constructor = fn;

let f = new fn('Alec', '28');
`;
export const inherit5 = `
function Fn(name, age){
    this.name = name;
    this.age = age;
};
Fn.protoype.getName = function(){
    return this.name;
}
function fn(name, age){
    Fn.call(this, name, age);
}

(function(){
    let Super = function(){};
    Super.prototype = Fn.prototyp;
    fn.prototype = new Super();
})()

fn.prototype.constructort = fn; //修复构造函数指向问题

let f = new Fn();
`;
export const inherit6 = `
// 定义父类
class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log('我叫:' + this.name, '今年:' + this.age + '岁')
    }
};

// 通过extends关键字继承
class Children extends Parent {

};

const child = new Children('Alec', 29);
child.show();
`;

export const createNew = `
function Fn() {};
var fn = new Fn();

fn = function () {
    // 新建一个空对象
    var obj = {}; 

    // 将新对象的__proto_指向构造函数的prototype
    obj.__proto__ = Fn.prototype; 

    // 将构造函数的作用域指向这个新对象
    var result = Fn.call(obj);

    // 考察第3步返回的返回值，如果无返回值或者返回一个非对象值，则将obj返回作为新对象；否则会将返回值作为新对象返回。
    return typeof result === 'object'? result : obj; 
}();
`;

export const recursion1 = `
    function sum(n) {
        if(!n) return n;
        if(n == 1) {
            return 1;
        }else {
            return sum(n - 1) + n;
        }
    }
`;

export const recursion2 = `
    function sum(n) {
        if(!n) return n;
        if(n == 1) {
            return 1;
        }else {
            return sum(n - 1) * n;
        }
    }
`;

export const arrFn8 = `
Array.prototype.reduce = Array.prototype.reduce || function(fn, initialValue) {
    const arr = this;
    const base = typeof initialValue === 'undefined' 
        ? arr[0] 
        : initialValue;
    const start = typeof initialValue === 'undefined' 
        ? 1 
        : 0;

    for(let a = start; i < arr.length; i++) {
        base = fn(base, arr[i], i + start, arr);
    }
    return base
}
`;

export const arrFn9 = `
const compose = function(...args) {
    const length = args.length;
    let count = length -1;
    let result;

    return function fn(...fnArgs) {
        result = args[count].apply(this, fnArgs);

        if(count <= 0) {
            count = length - 1;
            return result;
        }
        count--;
        return fn.call(null, result)
    }
}
`;

export const arrFn10 = `
function compose(...fns) {
    if(fns.length === 0) {
        return arg => arg;
    }
    if(fns.length === 1) {
        return fns[0];
    }

    return fns.reduce((a, b) => {
        return (...args) => a(b(...args));
    })
}
`;

export const arrFn11 = `
var arr = []
for(var i = 0; i < arguments.length; i++){
    arr.push(arguments[i])
}
`;

export const arrFn12 = `
function toArray(data) {
    try(
        return Array.protoype.slice.call(data, 0);
    )catch(e) {
        var arr = [];
        for(var i = 0; i < arguments.length; i++){
            arr[i] = arguments[i];
        }
        return arr;
    }
}
`;

export const bind1 = `
Function.prototype.bind = Function.prototype.bind || function(context) {
    const _this = this;
    const argsArray = Array.prototype.slice.call(arguments, 1);

    return function() {
        return _this.apply(context, argsArray)
    }
}
`;

export const bind2 = `
Function.prototype.bind = Function.prototype.bind || function(context) {
    const _this = this;
    const args = Array.protoype.slice.call(arguments, 1);

    return function() {
        const innerArgs = Array.protoype.slice.call(arguments)
        const finalArgs = args.concat(innerArgs);

        return _this.apply(context, args);
    }
}
`;

export const bind3 = `

`;

export const publisher = `
const Publish = {
    // 订阅者类型及其订阅者
    subscribers: {
        dailyPaper: [],
        monthlyPaer:[],
        all:[],
    },
    // 添加新的订阅者到订阅类型的数组中
    subscribe(newSubscribeFn, type) {
        let type = type || 'all';
        this.subscribers[type].push(newSubscribeFn)
    },
    // 从订阅类型的数组中删除订阅者
    unsubscribe(subscribeFn, type) {
        let type = type || 'all';
        let index = null;
        for(let i = 0; i < this.subscribers[type].length; i++) {
            if(this.subscribers[type][i] === subscribeFn) {
                index = i;
                break;
            }
        }

        this.subscribers[type].splice(index, 1);
    },
    // 发布状态
    publish(type, value) {
        for(let i = 0; i < this.subscribers[type].length; i++) {
            this.subscribers[typr][i](value)
        }
        for(let i = 0; i < this.subscribers['all'].length; i++) {
            this.subscribers[typr][i](value)
        }
    },
    publishDaily() {
        this.publish('dailyPaper', '日报')
    },
    publishMonthly() {
        this.publish('monthlyPaer', '月报')
    },
}
`;

export const subscriber = `
const alexSubscriber = {
    subcribeFn(value) {
        console.log('我在读' + value)
    }
}

const abbySubscriber = {
    subcribeFn(value) {
        console.log('我在读' + value)
    }
}

const gibertSubscriber = {
    subcribeFn(value) {
        console.log('我在读' + value)
    }
}
// 订阅
Publsh.subscribe(alexSubscriber.subscibeFn, 'dailyPaper');
Publsh.subscribe(abbySubscriber.subscibeFn, 'monthlyPaper');
Publsh.subscribe(gibertSubscriber.subscibeFn);

// 发布
PaperPublisher.publishDaily();
PaperPublisher.publishMonthly();
`;

export const eventPublish = `
class EventPublish {
    constructor () {
        // 储存事件的数据结构
        // 为查找迅速， 使用对象（字典）
        this._cache = {}
    }

    // 绑定
    on(type, callback) {
        // 为了按类查找方便和节省空间
        // 将同一类型事件放到一个数组中
        // 这里的数组是队列， 遵循先进先出
        // 即新绑定的事件先触发
        let fns = (this._cache[type] = this._cache[type] || [])
        if(fns.indexOf(callback) === -1) {
        fns.push(callback)
        }
        return this
    }

    // 触发
    // emit
    trigger(type, data) {
        let fns = this._cache[type]
        if(Array.isArray(fns)) {
            fns.forEach((fn) => {
                fn(data)
            })
        }
        return this
    }
  
    // 解绑
    off (type, callback) {
        let fns = this._cache[type]
        if(Array.isArray(fns)) {
            if(callback) {
                let index = fns.indexOf(callback)
                if(index !== -1) {
                    fns.splice(index, 1)
                }
            } else {
                // 全部清空
                fns.length = 0
            }
        }
        return this
    }
}
`;
export const debounce = `
function debounce (fn, delay) {
    let timeout = null;
    return (e) => {
        cleaTimeout(timeout);

        const _this = this;
        const args = arguments;
        timeout = setTimeout(() => {
            fn.apply(_this, arg);
        }, delay)
    }
}
const validate = debounce((e) => {
    console.log('change', e.target.value, new Date - 0)
}, 400)

document.querySelector('input').addEventListener('input', validate)`;

export const throttle = `
function throttle(fn ,threshhold = 160) {
    let timeout = null;
    let start = new Date();
    return () => {
        const _this = this;
        const args = arguments;
        const cur = new Date() - 0;

        clearTimeout(timeout);

        if(cur - start >= threshhold) {
            console.log('now:', cur, cur - start);
            
            fn.apply(_this, args);
            start = cur;
        }else {
            timeout = setTimeout(() => {
                fn.apply(_this, args);
            }, threshhold)
        }
    }
}

const mouseMove = throttle((e) => {
    console.log(e.pageX, e.pageY);
})

document.querySelector('#panel').addEventListener('mousemove, mouseMove);
`;


export const arrFn13 = `
function flat(arr) {
    return Array.form(new Set(arr.flat(Infinity))).sort((a, b) => a - b);
}
`;

export const arrFn14 = `
const arr = [1,[1,2,3],1,[6,2],3,4,5,[6],[6,7,9]]
function flat(arr) {
    arr.forEach((item, key) => {
        if(Array.isArray(item)) {
            arr.splice(key, 1, ...flat(item))
        }
    })
    arr.forEach(item => {
        if(!arr.includes[item]) {

        }
    })
}
`;

export const createNew2 = `
function _new (fn, ...args) {
    const obj = Object.create(fn.protoype);
    const result = fn.apply(obj, ...args);

    return Object.protoype.toString.call(result) === '[Object Object]'
                ? result
                : obj
}
`;
