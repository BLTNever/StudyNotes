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
export const isPalindrome = `
function isPalindrome(s: string) {
    let str = s.toLowerCase().match(/[a-z0-9]+/g)
    if (!str) return true
   
    // let p = str.join('')
    // let q = p.split('').reverse().join('')
    // return str.join('') === str.join('').split('').reverse().join('')
    let res = str.join('')
    let l = 0
    let r = res.length - 1
    while (l < r) {
        console.log(res[l], res[r])
        if (res[l] === res[r]) {
            l++
            r--
        } else {
            return false
        }
    }
    return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
`

export const getLucky = `
/**
 * 字符串转化后的各位数字之和
 * 先把 s 中的字母通过charCodeAt转成对应的数字 
 * 遍历 k 次， 把str中的数字相加 
 * @param s 
 * @param k 
 * @returns 
 */
function getLucky(s: string, k: number) {
    let str = ''
    // for (let i of s) {
    //     str += String(i.charCodeAt(0) - 96)
    // }
    // for (let i = 0; i < k; i++) {
    //     str = str.split('').reduce((a: string, b: string) => String(Number(a) + Number(b)))
    // }
    str = s.split('').map((i: string) => i.charCodeAt(0) - 96).join('')
    while (--k + 1) {
        str = str.split('').reduce((a: string, b: string) => String(Number(a) + Number(b)))
        // k--
    }
    return str
}
console.log(getLucky('abcdef', 1))
`

export const makeFancyString = `
function makeFancyString(s: string) {
    if (s.length < 3) return s
    let num = 0
    let prev = ''
    let ans = ''
    for (let i of s) {
        if (prev === i) {
            num++
            num < 2 && (ans += i)
        } else {
            num = 0
            prev = i
            ans += i
        }
    }
    return ans
}
console.log(makeFancyString("leeetcode"))
`

export const isPrefixString = `
function isPrefixString(s: string, words: string[]) {
    let res = ''
    for (let i of words) {
        res += i
        if (res === s) return true
    }
    return false
}
console.log(isPrefixString('a', ['aa', 'aaa', 'bbb']))
`

export const numOfStrings = `
function numOfStrings(patterns: string[], word: string) {
    // let ans = 0
    // for (let p of patterns) {
    //     if (word.indexOf(p) > -1) {
    //         ans++
    //     }
    // }
    // return ans
    return patterns.reduce((count, p) => {
        if (word.indexOf(p) > -1) count++
        return count
    }, 0)
}
`

export const minTimeToType = `
function minTimeToType(word: string): number {
    // let ans = 0
    // let prev = 0
    // for (let i of word) {
    //     let cur = i.charCodeAt(0) - 97 // a 从 0 开始
    //     ans += 1 + Math.min((cur - prev + 26) % 26, (prev - cur + 26) % 26) // 键入 需要 + 1S，当前值与上一个值互相减 + 26的余数比较大小
    //     prev = cur
    // }
    // return ans 
    let ans = 0
    let now = 97
    for (let i of word) {
        let step = i.charCodeAt(0) - now // 计算当前位置 跟上一个位置移动的距离
        ans += Math.min(Math.abs(step), 26 - Math.abs(step)) // 比较顺时针跟逆时针 移动的距离大小（上一步比当前步位置大的时候可能为负，所以需要取正）
        now = i.charCodeAt(0) // 存一下当前的位置 为下一步计算作准备
    }
    return ans + word.length // 添加 键入 的时间
}
console.log(minTimeToType('axbcz'))
`

export const reversePrefix = `
function reversePrefix(word: string, ch: string) {
    const index = word.indexOf(ch)
    return word.slice(0, index).split('').reverse().join('') + word.slice(index + 1)
}
`

export const minimumMoves = `
function minimumMoves(s: string) {
    if (s.indexOf('X') === -1) return 0
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'X') { // 如果遇到s[i] === 'X'， 那后面2个就不用考虑
            ans++
            i += 2 // 因为 i++之后 i已经增1 所以只需要 +=2 
        }
    }
    // let i = 0
    // while (i < s.length) {
    //     console.log(i)
    //     if (s[i] === 'X') {
    //         ans++
    //         i += 3
    //     } else {
    //         i++
    //     }
    // }
    return ans
}
console.log(minimumMoves('XXXOOOXOXOOX'))
`

export const areNumbersAscending = `
function areNumbersAscending(s: string) {
    const res = s.split(' ').filter(Number)
    // const res = s.match(/\d+/g) || ''
    for (let i = 1; i < res.length; i++) {
        if (Number(res[i]) >= Number(res[i - 1])) return false
    }
    return true

}
`

export const countValidWords = `
function countValidWords(sentence: string) {
    let res = sentence.split(' ').filter(Boolean)
    // let res = sentence.match(/\w+/g) || []
    let ans = 0
    for (let item of res) {
        // [a-z]+  匹配 a-z 的字符串一次或多次
        // -[a-z]+  匹配 -[a-z] 的字符串一次或多次
        // (-[a-z]+)?  匹配 (-[a-z]+) 的字符串0或者一次
        // ^([a-z]+(-[a-z]+)?)? 匹配 [a-z]+(-[a-z]+)? 在字符串开始位置的次数一次
        // [,\.!]?$ 在字符串结尾位置匹配是否是 ,.! 一次
        const reg = /^([a-z]+(-[a-z]+)?)?[,\.!]?$/
        console.log(item, reg.test(item))
        if (reg.test(item)) ans++
    }
    return ans

    // return sentence.trim().split(/\s+/g).filter(s => {
    //     return s.match(/^([a-z]+(-[a-z]+)?)?[!\.,]?$/)
    // }).length
}
console.log(countValidWords("he bought 2 pencils, 3 erasers, and 1  pencil-sharpener."))
`

export const countVowelSubstrings = `
function countVowelSubstrings(word: string) {
    if (word.length < 5) return 0
    let ans = 0
    let y = new Set(['a', 'e', 'u', 'i', 'o',])
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 4; j < word.length; j++) {
            const temp = new Set(word.slice(i, j + 1))
            console.log(temp)
            if (Array.from(temp).sort().join('') === 'aeiou') ans++
            // if (Array.from(temp).every(i => y.has(i)) && Array.from(y).every(i => temp.has(i))) ans++
        }
    }
    return ans
}

console.log(countVowelSubstrings("aeiouu"))
`

export const checkAlmostEquivalent = `
function checkAlmostEquivalent(word1: string, word2: string) {
    if (word1.length !== word2.length) return false
    // let map = {} // 建一个哈希表存储
    // for (let i of word1) { 
    //     map[i] = map[i] || 0 // 如果map[i] 没有值，给个默认值0
    //     map[i]++             // map中存在word1中已有的元素 +1
    // }
    // for (let i of word2) {
    //     map[i] = map[i] || 0
    //     map[i]--             // map中存在word2中的元素，该元素 -1
    // }
    // for (let key in map) {
    //     if ((Math.abs(map[key]) > 3)) return false  //  筛选出map 中值大于3的 证明不符合返回false
    // }
    // return true
    let res = Array(26).fill(0) // 按照字母表长度创建一个数组
    for (let i = 0; i < word1.length; i++) { // word1和word2 length 相同。随便选一个
        let a = word1[i].charCodeAt(0) - 97  // 把字母转成数字。字母 a 的charcode 是97. 从0开始算
        let b = word2[i].charCodeAt(0) - 97  
        res[a]++                             // 数组中已存在的 word1 元素 +1
        res[b]--                             // 数组中已存在的 word2 元素 -1
        console.log(res)
    }
    return res.every(i => Math.abs(i) <= 3)  // 使用every判断每个都 <= 3返回true, 或者 some 判断 > 3取反
}

console.log(checkAlmostEquivalent("aaaa", "bccb"))
`

export const replaceSpace = `
function replaceSpace(s: string) {
    // 使用原生api
    // return s.replace(/\s/g, '%20')

    // 循环 O(n)
    // let res = ''
    // for (let i of s) {
    //     if (i === ' ') res += '%20'
    //     else res += i
    // }
    // return res

    // 双指针  O(n), O(1) 是模拟的 C++ 语言中的可变长度字符串的实现原理
    let arr = s.split('')           // 转成arr
    let count = 0
    for (let i of arr) {
        if (i === ' ') count++      // 统计空格的数量
    }
    const len = arr.length          // 保存之前的长度
    console.log(arr)
    arr.length += count * 2         // 更新长度，每个空格要多出2个位置
    console.log(arr)
    let left = len - 1              // 设置左指针 在旧数组的尾部
    let right = arr.length - 1      // 设置右指针 在新数组长度的尾部
    while (left >= 0) {             // 指针移动到头部停止
        if (arr[left] !== ' ') {    // 遇到左指针的值不为空
            arr[right] = arr[left]  // 将左指针的值赋给右指针
        } else {
            arr[right - 2] = '%'    // 为空的话。 将右指针跟右指针前2个的值 设置成 %20
            arr[right - 1] = '2'
            arr[right] = '0'
            right -= 2              // 右指针的位置移动 2 位
        }
        left--                      // 左、右指针 移动一位
        right--
    }
    return arr.join('')
}

console.log(replaceSpace("We are happy."))
`

export const lengthOfLongestSubstring = `
/**
 * 滑动窗口
 * @param s 
 * @returns 
 * /
function lengthOfLongestSubstring(s: string) {
    let ans = Number.MIN_SAFE_INTEGER
    let left = 0
    let right = 0
    let set = new Set()
    while (right < s.length) {
        if (!set.has(s[right])) {
            // 遇到不重复的元素，添加元素，窗口右指针向右移动， 记录比较一下大小
            set.add(s[right])
            right++
            ans = Math.max(ans, set.size)
        } else {
            // 遇到重复的元素，删除之前出现的元素，窗口左指针向右移动
            set.delete(s[left])
            left++
        }
    }
    return ans === Number.MIN_SAFE_INTEGER ? 0 : ans
}
/**
 * 数组解法
 * 判断 res 数组中是否包含了元素， 包含了删除该元素及之前的
 * 如果 res 数组中包含元素，不能使用 continue ,因为是连续元素， 所以要把之前的都删掉
 * @param s 
 * @returns 
 */
function lengthOfLongestSubstring(s: string) {
    let ans = Number.MIN_SAFE_INTEGER
    let res = []
    for (let char of s) {
        if (res.indexOf(char) !== -1) {
            res.splice(0, res.indexOf(char) + 1)
        }
        res.push(char)
        ans = Math.max(res.length, ans)
    }
    return ans === Number.MIN_SAFE_INTEGER ? 0 : ans
}
console.log(lengthOfLongestSubstring("aab"))
`