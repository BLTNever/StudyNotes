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