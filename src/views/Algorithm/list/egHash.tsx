
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

export const findShortSubArray = `
/**
 *  1.用哈希表去记录每个元素出现的次数，用元素的值做key, value存储[值第一次出现的下标start，值最后出现的下标end， 出现的次数count]
 *  2.遍历这个哈希表的值，出现的次数大于max值的时候，重新给max值赋值，记录min最短长度为当前值的end下标 - start下标
 *  3.如果count === max值，对比已存在的min值和当前的end - start值，找出最短长度
 *  4.数组下标从0开始，return的min值+1
 * @param nums 
 * @returns 
 */
function findSubArray(nums: number[]) {
    let map = {}
    nums.forEach((n, key) => {
        if (map.hasOwnProperty(n)) {
            map[n][1] = key
            map[n][2]++
        } else {
            map[n] = [key, key, 1]
        }
    })
    let maxNum = 0
    let minLen = 0
    for (let [start, end, count] of Object.values(map)) {
        if (count > maxNum) {
            maxNum = count
            minLen = end - start
        } else if (count === maxNum) {
            minLen = Math.min(minLen,(end - start))
        }
    }
    return minLen + 1
}
// 一次遍历，
function findSubArray(nums) {
    let map = {}
    let max = 0
    let min = 0
    nums.forEach((n, k) => {
        if (map.hasOwnProperty(n)) {
            map[n][1] = k
            map[n][2]++
            if(map[n][2] > max) {
                max = map[n][2]
                min = map[n][1] - map[n][0]
            } else if(map[n][2] === max) {
                min = Math.min(min, map[n][1] - map[n][0])
            }
        } else {
            map[n] = [k, k, 1]
        }
    })
    return min + 1
}
`

export const MyHashSet = `
/**
 * 不能使用 Obeject、Map、Set的前提下，使用Array模拟
 * 也不能使用indexOf, inCludes 前提下，遍历模拟
 * 为了尽可能避免冲突，应当将 BASE 取为一个质数
 */
class MyHashSet {
    private BASE = 769
    private list: any = new Array(769).fill(0).map(() => new Array(undefined))
    public add(key: any) {
        const hash = this.hash(key)
        for (let ele of this.list[key]) {
            if (ele === key) return
        }
        this.list[hash].push(key)
    }
    public remove(key: any) {
        const hash = this.hash(key)
        const item = this.list(hash)
        for (let i = 0; i < item.length; i++) {
            if (item[i] === key) {
                item.splice(i, 1)
                break
            }
        }

    }
    public contain(key: any) {
        const hash = this.hash(key)
        for (let ele of this.list[hash]) {
            if (ele === key) return true
        }
        return false
    }
    private hash(key: any) {
        return key % this.BASE
    }
}

/**
 * 使用Set模拟实现  
 */
class MyHashSet {
    private set: any = new Set()
    public add(key: any) {
        if (!this.set.hash(key)) this.set.add(key)
    }
    public remove(key: any) {
        if (this.set.hash(key)) this.set.remove(key)
    }
    public contain(key: any) {
        return this.set.has(key)
    }
}`
