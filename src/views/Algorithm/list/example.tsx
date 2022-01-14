
export const twoNums = `
function twoSum(nums: number[], target: number) {
    let map = new Map()
    for (let [key, value] of Object.entries(nums)) {
        let other = target - value
        if (map.get(other) !== undefined) return [map.get(other), key]
        map.set(value, key)
    }
}
console.log(twoSum([2, 7, 11, 15], 18))
`

export const flat1 = `
// 遍历递归
function flat(arr, depth = 1) {
    let result = []
    arr.forEach(item => {
        // 去掉depth就是Infinity
        if(Array.isArray(item) && depth > 0) {
            result = [...result, ...flat(arr, depth - 1)]
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

//
function flat(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
`

export const flat2 = `
// 不使用递归
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
export const quickSort = `
function quickSort(arr) {
    if (arr.length <= 1) return arr
    const len = arr.length
    const index = Math.floor(len >> 1)
    const pivot = arr.splice(index, 1)[0]
    const left = []
    const right = []
    for (let i = 0; i < len; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i])
        } else if (arr[i] <= pivot) {
                left.push(arr[i])
        }
    }
    return quick(left).concat([pivot], quick(right))
    
}
`

export const random = `
//定义一个数组arr
let arr = new Array();
//给这个数组按添加值
for(let i = 0;i < 50;i++){
    arr.push(i);
};
//将数组的值随机交换位置
function fn_random(arr){
    arr.sort(function(){
        return .5 - Math.random();
    });
};
function fn_random2(arr){
    let currentIndex = arr.length;
    while(currentIndex) {
        let randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
        let temp = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
}

`
export const filterSame = `
// Set
array = Array.from(new Set(array))

// filter
array = array.filter((el, index) => array.indexOf(el) === index)

// reduce
array = array.reduce((unique, el) => unique.includes(el) ? unique : [...unique, el], [])

const unique = arr => {
    let obj = {}
    arr.forEach(value=>{
        obj[value] = 0
    })
    return Object.keys(obj)
}
`

export const sort = `
function systemSort(arr) {
    return arr.sort(function(a, b) {
        return a - b
    })
 }
`

export const bubbleSort = `
function bubbleSort(arr) {
    var len = arr.length
    for(var i = len-1; i > 0; i--) {
        for(var j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                var tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1]= tmp
            }  
        }
    }
    return arr
}
const sort = arr => {
    let isSwap;
    for(let i=0;i<arr.length;i++){
        isSwap = false;
        for(let j=0;j<arr.length;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                isSwap = true;
            }
        }
        if(!isSwap){
            break;
        }
    }
    return arr;
}
`

export const sort2 = `
const sort = arr => {
    arr.forEach((v,i)=>{
        for(let j=i+1;j<arr.length;j++){
            if (arr[i] > arr[j]) {
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    })
    return arr;
}
`
export const arrFn13 = `
function flat(arr) {
    return Array.form(new Set(arr.flat(Infinity))).sort((a, b) => a - b);
}
`;

export const arrFn14 = `
const arr = [1,[1,2,3],1,[6,2],3,4,5,[6],[6,7,9]]
function flat(arr) {
    let result = []
    arr.forEach((item, key) => {
        if(Array.isArray(item)) {
            // arr.splice(key, 1, ...flat(item))
            result.push(...flat(item))
        }else {
            result.push(...flat(item))
        }
    })

    return result
}
const result5 = Array.from(new Set(flat(arr))).sort((a, b) => a - b)
`



export const maxSubArray = `
function maxSubArray(nums: number[]) {
    if (nums.length === 1) return nums[0]
    let ans = nums[0]
    let sum = 0

    for (let num of nums) {
        // if (sum > 0) sum += num
        // else sum = num
        sum = Math.max((sum + num), num)
        ans = Math.max(sum, ans)
    }
    return ans
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
`



