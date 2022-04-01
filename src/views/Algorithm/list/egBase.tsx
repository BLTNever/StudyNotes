


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
function bubbleSort(nums: number[]) {
    const len = nums.length
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums
}
`
export const selectSort = `
function selectSort(nums: number[]) {
    const len = nums.length
    let min = 0
    for (let i = 0; i < len; i++) {
        min = i
        for (let j = i; j < len; j++) {
            if (nums[j] < nums[min]) {
                min = j
            }
        }
        if (i !== min) {
            [nums[i], nums[min]] = [nums[min], nums[i]]
        }
    }
    return nums
}
`
export const insertSort = `
function insertSort(nums: number[]) {
    let len = nums.length
    for (let i = 1; i < len; i++) {
        let temp = nums[i]
        for (let j = i - 1; j >= 0; j--) {
            if (nums[j] > temp) {
                nums[j + 1] = nums[j]
                nums[j] = temp
            } else {
                break
            }
        }
    }
    return nums
}
`

export const quickSort = `
function quickSort(arr) {
    if (arr.length <= 1) return arr
    const len = arr.length
    const mid = len >> 1
    const pivot = arr.splice(mid, 1)[0]
    const left = []
    const right = []
    for (let i = 0; i < len; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i])
        }else (arr[i] <= pivot) {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
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
            result.push(item)
        }
    })

    return result
}
const result5 = Array.from(new Set(flat(arr))).sort((a, b) => a - b)
`
export const prefix1 = `
function prefix (A:number[]){
    let B = [A[0]]
    for(let i = 1; i < A.length; i++){
        B[i] = B[i - 1] + A[i]
    }
    return B
}`

export const countSubArray1 = `
function countSubArray(nums:number[]) {
    let pre = 0
    let ans = 0
    for(let _ of nums) {
        pre += 1
        ans += pre
    }
    return ans
}
// 也可以用 等差数列求和公式
const n = nums.length
// 由于以索引为 i 结尾的子数组个数就是 i + 1
return (1 + n) * n / 2
`

export const countSubArray2 = `
function countSubArray(nums:number[]) {
    let pre = 0
    let ans = 0
    for(let i = 1; i < nums.length;i++){
        if(nums[i] - nums[i - 1] === 1) {
            pre += 1
        }else {
            pre = 0
        }
        ans += pre
    }
    return ans
}
`

export const countSubArray3 = `
function countSubArray(nums:number[], k:number) {
    let pre = 0
    let ans = 0
    for(let n of nums) {
        if(n <= k) {
            pre += 1
        }else {
            pre = 0
        }
        ans += pre
    }
    return ans
}
`

export const prefixSum = `
// 0 ~ i 项的和
prefixSum[i] = nums[0] + ... + nums[i]

// nums的某项 ===  两个相邻前缀和的差值
nums[i] === prefixSum[i] - prefixSum[i - 1]

// i ~ j 项的和
prefixSum[j] - prefixSum[i - 1] === nums[i] + ... + nums[j]
`