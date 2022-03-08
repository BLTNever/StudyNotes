export const twoSum = `
/**
 * 双指针， sum > target r--, sum < target l++
 */
function twoSum(nums: number[], target: number) {
    let l = 0
    let r = nums.length - 1
    while (l < r) {
        const sum = nums[l] + nums[r]
        if (sum < target) l++
        else if (sum > target) r--
        else return [nums[l], nums[r]]
    }
}
/**
 * 哈希表
 */
function twoSum(nums: number[], target: number) {
    let map = new Map()
    for (let n of nums) {
        const other = target - n
        if (map.get(other) !== undefined) return [other, n]
        map.set(n, 1)
    }
}
`

export const findDuplicate = `
/**
 * 使用 O(1)的空间复杂度 
 */
function findDuplicate(nums: number[]) {
    // 暴力法1:
    const { length } = nums
    if (length === 1) return nums[0]
    for (let i = 0; i < length; i++) {
        let ans = nums[i]
        for (let j = i + 1; j < length; j++) {
            if (ans === nums[j]) return ans
        }
    }
    // 暴力法2:
    nums = nums.sort((a, b) => a - b)
    let ans = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (ans === nums[i]) return ans
        else ans = nums[i]
    }
    // 快慢指针1 更快一点
    let slow = 0
    let fast = 0
    slow = nums[slow]
    fast = nums[nums[fast]]
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }
    slow = 0
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }
    return slow
    // 快慢指针2
    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow === fast) {
            let slow = 0
            while (nums[slow] !== nums[fast]) {
                slow = nums[slow]
                fast = nums[fast]
            }
            return nums[slow]
        }
    }
}
`