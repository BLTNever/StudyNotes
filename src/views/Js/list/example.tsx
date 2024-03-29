

export const note1Fn = `
function multiplyFn(x, y) {
    return x * y;  
}
function printSquare(x) { 
    const s = multiply(x, x); 
    console.log(s); 
}
printSquare(5);
`;

export const note2Fn = `
setTimeout(function() {
    console.log('setTimeout');
})

new Promise(function(resolve) {
    console.log('promise');
}).then(function() {
    console.log('then');
})

console.log('console');
`;

export const note3Fn = `
setImmediate(function(){
    console.log(1);
},0);
setTimeout(function(){
    console.log(2);
},0);   
new Promise(function(resolve){
    console.log(3);
    resolve();
    console.log(4);
}).then(function(){
    console.log(5);
});
console.log(6);
process.nextTick(function(){
    console.log(7);
});
console.log(8);
结果是: 3 4 6 8 7 5 2 1
`

export const note2Subject = `
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})

process.nextTick(function() {
    console.log('6');
})

new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
// console执行的顺序`;

export const valueType = `
// 值类型:  Number、 String、 Boolean、 undefined、 Symbol
var a = 100;
var b = a;
a = 200;
console.log(b) // 100

// 引用类型: Object、 Array、 Function、 null(空指针)
// 可以扩展属性
var men = {
    age: 20
}
var women = men;
women.age = 22;
console.log(man.age) // 22

typeof undefined // undefined
typeof 'a211sdga2' // string
typeof 1234 // number
typeof true // boolean
// typeof 区分不出来引用类型(除了函数)
typeof {} // object
typeof [] // object
typeof null // object
typeof function(){} // function

// 要准确的判断类型。
// 请使用Object.prototype.toString.call()
`;

export const toStringfly = `
var arrToStr1 = JSON.stringify(arr1);
var arrToStr2 = JSON.stringify(arr2);`;

export const note3Subject = `
function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: 'John',
        age: 50
    };
    
    return person;
}
var personObj1 = {
    name: 'Alex',
    age: 30
};
var personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // → ?
console.log(personObj2); // → ?`;

export const note4Subject = `
[] == ![] // true
NaN !== NaN // true

1 == true // true
2 == true // true
"2" == true // false

null > 0 // false
null < 0 // false
null == 0 // false
null >= 0 // true

// +加法运算符
true + 1 // 2
undefined + 1 // NaN

{} + 1 // 1 
{1 + 1} + 1 // 1 !!!???

let obj = {}
obj + 1 // "[object Object]1"  !!!???

{} + {}  // "[object Object][object Object]"
[] + {} // "[object Object]"
{} + []  // 0
[] + [] // ""

var a = 1
[] + a // '1'
{} + a // 1
a + [] // '1'
a + {} // "1[object Object]"

[2,3] + [1,2] // "2,31,2"
[2] + 1 // "21"
[2] + (-1) // "2-1"

// 减法运算符
[2] - 1 // 1
[2,3] - 1  // NaN
{} - 1  // -1
`


export const objectThis1 = `
var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y) {
        this.x = this.x + this.x;
        this.y = this.y + this.y;
    }
}
point.moveTo(1, 2) // this绑定到当前对象,point上
`

export const objectThis2 = `
var a = {
    aa : 0,
    bb : 0,
    fn : function(x,y){
        this.aa = this.aa + x;
        this.bb = this.bb + y;
    }
};
var aa = 1;
var b = {
    aa:0,
    bb:0,
    fn : function(){return this.aa;}
}	

a.fn(3,2);

console.log(a.aa); // 3, this指向对象本身
console.log(b.fn()); // 0, this指向对象本身

(function(aa){ // 传入的是函数,而不是函数执行的结果
    var c = aa();
    console.log(c); // 1, 由于fn在该处执行,导致this不再指向对象本身,而是指向window
})(b.fn);
`

export const fnThis = `
var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y) {
        var _this = this; // 将this保存到一个变量中
        var moveX = function(x) {
            _this.x = x;
        };
        var moveY = function(y) {
            _this.y = y;
        };
        moveX(x);
        moveY(y);
    }
}
point.moveTo(1, 2);
point.x; // 1
point.y; // 2
`

export const constructedFnThis = `
var x = 1;
function Fn () {
    this.x = 2;
}
var fn = new Fn();

console.log(fn.x) // 2
console.log(x) // 1
`

export const arrowFn = `
var obj = {
    x : 1,
    fn : function() { 
        console.log(this.x) 
    },
    arrowFn : function() {
        setTimeout(() => { 
            this.fn() 
        }, 100);
    }
};

obj.arrowFn();
`


export const arrowFn2 = `
var x = 1;
var obj =  {
    x: 10,
    fn: () => this.x
}
obj.fn(); // 1
obj.fn.call(obj) // 1
`

export const lexicalScope = `
var a = 2;

function foo1 () {
   console.log(a);
}

function foo2 () {
   var a = 10;

   foo1();
}

foo2();
`

export const dynamicScope = `
value=1
function foo () {
    echo $value;
}
function bar() {
    local value=2;
    foo;
}
bar
`

export const async1 = `

const getValueA = new Promise(resolve => {
    setTimeout(() => {
        resolve(2)
    }, 2000)
})
const getValueB = new Promise(resolve => {
    setTimeout(() => {
        resolve(4)
    }, 4000)
})
const getValueC = new Promise(resolve => {
    setTimeout(() => {
        resolve(3)
    }, 3000)
})

async function getABC() {
    const start = new Date();

    const A = await getValueA(); // getValueA 花费 2 秒
    const B = await getValueB(); // getValueA 花费 4 秒
    const C = await getValueC(); // getValueA 花费 3 秒
    
    const end = new Date();
    const time = end - start;
    console.log('time:' + time);

    return A * B * C;
}
`



export const async2 = `
async function getABC() {
    const start = new Date();
    
    // Promise.all() 允许同时执行所有的异步函数
    const results = await Promise.all([ getValueA, getValueB, getValueC ]); 
    
    const end = new Date();
    const time = end - start;
    console.log('time:' + time);

    return results.reduce((total,value) => total * value);
}
`

export const note11Example1 = `
var obj = { 'a' : 1, 'b': 2 };
var arr = [0, 1 , 2];

// 等于

var obj = new Object();
obj.a = 1;
obj.b =2;

var arr = new Array();
arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
`


export const note11Example2 = `
function fn(){}
console.log(fn.prototype);

{
    constructor: ƒ fn()
    __protp__: Object
}`


export const note11Example3 = `
function fn() {};

fn.prototype.name = 'Alec';
fn.prototype.getAge = function () {
    return 16;
}`


export const note11Example4 = `
function Fn () {};

Fn.prototype.name = 'Alec';
Fn.prototype.getAge = function () {
    return 16;
}

var fn = new Fn();
console.log(fn.name); // Alec;
console.log(fn.getAge); // 16
`


export const example1 = `
(1) 创建 Hello.js
exports.say = function() {
    console.log('Hello World');
}

(2) 引入并调用
var hello = require('./Hello');
hello.say();
`

export const example2 = `
(1) 把对象封装到模块中,文件名为:  Say.js
//私有变量
var test = 110;
 
//公开方法
function Say() {
    var name;
    this.setName = function(theName) {
        name = theName;
    };
    this.hello = function() {
        console.log('Hello ' + name);
    };
};
 
module.exports = Say;

(2) 在其他js文件中引入这个模块并调用。
var Say = require('./Say);
var say = new Say();
say.setName('Alec');
say.hello();
`

export const example3 = `
(1) 创建一个文件compute.js
//圆面积计算
export function area(radius) {
  return Math.PI * radius * radius;
}
 
//圆周长计算
export function circumference(radius) {
  return 2 * Math.PI * radius;
}

(2) 在其他文件中引入这个模块并调用。这里 import 命令使用大括号的形式加载模块对外的接口。
import {area,circumference} from './compute';
console.log('圆面积: ' + area(10));
console.log('圆周长: ' + circumference(11));

// 也可以使用 * 制定一个对象, 实现模块整体加载
import * as circle from './compute';
console.log('圆面积: ' + circle.area(10));
console.log('圆周长: ' + circle.circumference(11));
`

export const example4 = `
(1) 使用 export default 命令用于指定模块的默认输出。 模块文件: compute.js
//圆面积计算
export default function area(radius) {
  return Math.PI * radius * radius;
}
 
//圆周长计算
export function circumference(radius) {
  return 2 * Math.PI * radius;
}4

(2) 在其他文件中引入这个模块并调用。注意: 对于 export default 指定模块的默认输出,import 语句不需要使用大括号。
import area, { circumference } from './compute';
console.log('圆面积: ' + area(10));
console.log('圆周长: ' + circumference(11));
`

export const example5 = `
// congfig.js 内使用module.exports导出

const getA = () => {
    ...
}
const getB = () => {
    ...
}

module.exports = {
    getA,
    getB,
}

//main.js中 import 引入使用
import { getA, getB } from './config.js'
`

export const example6 = `
var module1 = (function() {
    count: 1;
    var fn1 = function() {
        ...
    };
    var fn2 = function() {
        ...
    };
    return {
        f1: f1,
        f2: f2
    }
})()
`

export const example7 = `
;(function(window, WALL, undefined) {
   // 给wall命名空间绑定方法say
   WALL.say = function() {
       console.log('hellp');
   }
})(window, window.wall || (window.wall = {}) );

(function(window, WALL, undefined){
    // 给wall命名空间绑定方法 whoIam
    WALL.whoIam = function(){
        console.log('wall');
    }
})(window, window.wall || (window.wall = {}));

// 调用
wall.say();
wall.whoIam();
`
export const AMD = `
// 导出 math.js
define(function() {
    var add = function(x, y) {
        return x + y
    }
    return {
        add: add
    }
})

// 加载
require(['math'], function(math) {
    console.log(math.add(1, 2))
})


/*
*  define导出的模块如果有其他依赖需要在define第一个参数中指定
*/
define(['jQuery'], function(jQuery) {
    function fn () {
        jQuery.doSomething()
    }

    return {
        fn: fn
    }
})
`

export const CMD = `
// 定义模块 myModule
define(function(require, exports, module){
    var $ = require(jQuery)

}) 

// 加载模块
seajs.use(['myModule'], function(my) {
    ...
})
`

export const UMD = `
(function(window, factory){
    if(typeof exports === "objects"){
        // commonjs
        module.exports = factory();
    }else if(typeof define === "function" && define.amd){
        // amd
        define(factory);
    }else{
        window.moduleA = factory();
    }
})(window, function(){
    // 返回module
    let modlueA = {
        name : "张三",
        setName(newName){
            thie.name = newName;
        },
        getName(){
            return this.name;
        }
    }
    return modlueA;s
})
`
export const bitNot = `~0000000000000000 => 0000000000001001
-------取反
~1111111111111111 => 1111111111110110
-------符号位不变,其余取反
~1000000000000000 => 0000000000001001
-------加1
~1000000000000000 => 0000000000001010`;

export const executionContext = `
executionContext = {
    variable object: var, function, arguments,
    scope chain: varible scope + all parents scope,
    thisValue: context object
}
`

export const gen = `
function* g() {
    yield 'a';
    yield 'b';
    yield 'c';
    return 'ending';
}

g(); // 返回一个对象
`