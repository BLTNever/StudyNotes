const arrFn1 = `
Array.from(new Set(arr))

***** or *****

[...new Set(arr)]
`;

const arrFn2 = `
for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length - 1; j++) {
        if(arr[i] === arr[j]) {
            arr.splice(i, 1)
        }
    }
}
`;

const arrFn3 = `
for(var i = 0; i < arr.length; i++) {
    var array = [];
    if(array.indexOf(arr[i]) === -1) {
        array.push(arr[i]);
    }
}
`;

const arrFn4 = `
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

const deepCopy1 = `
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
const deepCopy2 = `
// 序列化(不能拷贝函数以及解决循环引用的问题)
const output = JSON.parse(JSON.stringify(source));
`;

const shallowClone = `
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


const inherit1 = `
// 定义父类
function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = function() {
    return this.name;
}

// 定义子类
function Children() {
    this.age = 24;
}

// 通过Children的prototype属性和Parent 进行关联
Children.prototype = new Parent('Alec'); // Children.prototype.constructor === Parent.protoype.constructor = Parent

const child = new Children(); // child.constructor === Children.prototype.constructor = Parent

child.age // 24
child.getName() // Alec
`;
const inherit2 = `
// 定义父类
function Parent (value) {
    this.language = ['javascript', 'react', 'node'];
    this.value = value;
}

// 定义子类
function Children() {
    Parent.apply(this, arguments);
}

const child = new Children('666');
child.language; // ['javascript', 'react', 'node']
child.value; // 666
`;
const inherit3 = `
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

module.exports = {
    arrFn1,
    arrFn2,
    arrFn3,
    arrFn4,
    deepCopy1,
    deepCopy2,
    shallowClone,
    inherit1,
    inherit2,
    inherit3,
}