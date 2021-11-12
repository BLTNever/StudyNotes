export const longestCommonPrefix = `
/**
 * 1. 定义ans为strs数组中第一个
 * 2. 遍历strs，定义第二个指针j
 * 3. 遍历strs数组中的元素strs[j]，
 * 4. 对比ans的元素跟strs[i][j]是否相等，截取
 * /
function longestCommonPrefix(strs: string[]) {
    if (!strs.length) return ''
    let ans = strs[0]

    for (let i = 1; i < strs.length; i++) {
        let j = 0
        for (; j < ans.length && j < strs[i].length; j++) {
            if (ans[j] !== strs[i][j]) {
                break
            }
        }
        ans = strs[i].slice(0, j)
    }
    return ans
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
`

export const isValid = `
function isValid(s: string) {
    if (!s.length) return false
    if (s.length % 2) return false // 单数return false
    let stack: any = []
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    for (let key of s) {
        if (key in map) {
            stack.push(key) // 括号左侧的值保存起来
            continue // 右侧值跳过
        }
        if (map[stack.pop()] !== key) return false // 从stack顶取出对比。不匹配return false
    }
    return !stack.length // stack 还存在值 false
}
console.log(isValid('()[{()}]'))
`

export const strStr = `
function strStr(haystack: string, needle: string) {
    const needleLen = needle.length
    const haystackLen = haystack.length
    if (!haystackLen && !needleLen) return 0
    if (!haystackLen) return -1
    if (!needleLen) return 0
    for (let i = 0; i < haystackLen; i++) {
        // 遍历haystack，找到跟needle开头相同的值，再截取needle.length长度相同值对比needle 
        if (haystack[i] === needle[0] && haystack.substr(i, needleLen) === needle) {
            return i
        }
    }
    return -1
}
console.log(strStr('a', ''))
`

export const lengthOfLastWord = `
function lengthOfLastWord(s: string) {
    // split切割 过滤 多个空格情况， 取之后一个的length
    const arr = s.split(' ').filter(Boolean)
    return arr[arr.length - 1].length

    // 遍历
    let end = s.length - 1 // 取最后一位下标
    while (end >= 0 && s[end] === ' ') end--  // 往前遍历 end下标的数据是空， end向前移动一位 直到下标数据不为空
    if (end < 0) return 0 // 如果end小于0 说明 s 中全是空格， 返回0
    let start = end // 复制end不为空时的下标， 
    while (start >= 0 && s[start] !== '') start-- // 往前遍历 如果start下标的数据 不为空， start 往前移动一位， 直到数据为空

    return end - start
}
`