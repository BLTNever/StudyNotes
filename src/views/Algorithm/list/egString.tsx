export const longestCommonPrefix = `
/**
 * 1. 定义ans为strs数组中第一个
 * 2. 遍历strs,定义第二个指针j
 * 3. 遍历strs数组中的元素strs[j],
 * 4. 对比ans的元素跟strs[i][j]是否相等,截取
 */
function longestCommonPrefix(strs: string[]) {
    if (!strs.length) return ''
    let ans = strs[0]

    for (let i = 1; i < strs.length; i++) {
        let j = 0
        for (; j < ans.length && j < strs[i].length; j++) {
            if (ans[j] !== strs[i][j]) break
        }
        ans = strs[i].slice(0, j)
        if(!ans.length) return ans
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
    // 解1
    for(let key of s) {
        if(map[stack[stack.length - 1]] === key) {
            stack.pop()
        }else {
            stack.push(key)
        }
    }
    // 解2
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
        // 遍历haystack,找到跟needle开头相同的值,再截取needle.length长度相同值对比needle 
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
    // split切割 过滤 多个空格情况, 取之后一个的length
    const arr = s.split(' ').filter(Boolean)
    return arr[arr.length - 1].length

    // 遍历
    let end = s.length - 1 // 取最后一位下标
    while (end >= 0 && s[end] === ' ') end--  // 往前遍历 end下标的数据是空, end向前移动一位 直到下标数据不为空
    if (end < 0) return 0 // 如果end小于0 说明 s 中全是空格, 返回0
    let start = end // 复制end不为空时的下标, 
    while (start >= 0 && s[start] !== '') start-- // 往前遍历 如果start下标的数据 不为空, start 往前移动一位, 直到数据为空

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
 * 遍历 k 次, 把str中的数字相加 
 * @param s 
 * @param k 
 * @returns 
 */
function getLucky(s: string, k: number) {
    // 解1:
    let str = ''
    for (let i of s) {
        str += String(i.charCodeAt(0) - 96)
    }
    for (let i = 0; i < k; i++) {
        str = str.split('').reduce((a: string, b: string) => String(Number(a) + Number(b)))
    }
    // 解2:
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
    let count = 0
    let prev = ''
    let ans = ''
    for (let i of s) {
        if (prev === i) {
            count++
            count < 2 && (ans += i)
        } else {
            count = 0
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
    // 解1:
    let ans = 0
    for (let p of patterns) {
        if (word.indexOf(p) > -1) {
            ans++
        }
    }
    return ans
    // 解2:
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
    //     ans += 1 + Math.min((cur - prev + 26) % 26, (prev - cur + 26) % 26) // 键入 需要 + 1S,当前值与上一个值互相减 + 26的余数比较大小
    //     prev = cur
    // }
    // return ans 
    let ans = 0
    let now = 97
    for (let i of word) {
        let step = i.charCodeAt(0) - now // 计算当前位置 跟上一个位置移动的距离
        ans += Math.min(Math.abs(step), 26 - Math.abs(step)) // 比较顺时针跟逆时针 移动的距离大小(上一步比当前步位置大的时候可能为负,所以需要取正)
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
        if (s[i] === 'X') { // 如果遇到s[i] === 'X', 那后面2个就不用考虑
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
    //     map[i] = map[i] || 0 // 如果map[i] 没有值,给个默认值0
    //     map[i]++             // map中存在word1中已有的元素 +1
    // }
    // for (let i of word2) {
    //     map[i] = map[i] || 0
    //     map[i]--             // map中存在word2中的元素,该元素 -1
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
    arr.length += count * 2         // 更新长度,每个空格要多出2个位置
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

export const buddyStrings = `
function buddyStrings(s: string, goal: string) {
    // 长度不同 返回false
    if (s.length !== goal.length) return false
    // 如果 s 跟 goal 相等, s 转成数组之后去重 对比原来的长度。 不相等证明有重复的 返回 true, 否则 false 
    if (s === goal) return new Set(s.split('')).size !== s.length

    let [first, second] = [-1, -1]          // 定义 2 个变量
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {             // 判断 s[i] yu goal[i] 如果不相等
            if (first === -1) {             // 如果 first 和 second 还没记录 记录下不相等时候的下标
                first = i
            } else if (second === -1) {
                second = i
            } else {
                // 有第三次不同 返回 false
                return false
            }
        }
    }
    // 最终判断有 2 处 不同, 同时满足 first 和 second 在 s 和 goal 中交换之后是否相等
    return second !== -1 && s[first] === goal[second] && s[second] === goal[first]
}
console.log(buddyStrings('aa', 'aa'))
`



export const isPathCrossing = `
function isPathCrossing(path: string) {
    let set = new Set()
    set.add('0,0')
    let pos = [0, 0]
    for (let p of path) {
        // if (p === 'N') pos[0]++
        // else if (p === 'S') pos[0]--
        // else if (p === 'W') pos[1]--
        // else if (p === 'E') pos[1]++
        // switch 效率更高
        switch (p) {
            case 'N':
                pos[0]++
                break;
            case 'S':
                pos[0]--
                break;
            case 'W':
                pos[1]--
                break;
            case 'E':
                pos[1]++
                break;
        }
        const str = pos.join(',')
        if (set.has(str)) return true
        set.add(str)
    }
    return false
}
`

export const canBeValid = `
function canBeValid(s: string, locked: string) {
    let n = s.length
    if (n % 2) return false
    let l = 0
    let r = 0
    for (let i = 0; i < n; i++) {
        if (locked[i] === '1' && s[i] === ')') {    // 从左往右遍历 ")", 遇到不可变的 ")" r++
            r++                                     // 0 ~ i 的区间内,")"的次数是 r,那么最多有 _l = i + 1 - r 个 "("
            if (i + 1 - r < r) return false         // 如果 _l 小于 r, 返回false
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        if (locked[i] === '1' && s[i] === '(') {    // 从右往左遍历 "(", 遇到不可变的 "(" l++
            l++                                     // i ~ n - 1 的区间内,"("的次数是 l,那么最多有 _r = n - i - l 个 ")"
            if (n - i - l < l) return false         // 如果 _r 小于 l, 返回false
        }
    }
    return true
}
`

export const getSmallestString = `
/**
 * 贪心
 */
function getSmallestString(n: number, k: number) {
    let res = Array(n).fill('a')                    // 创建一个 n 长度的数组res, 填充 'a'(满足题干的字典序最小 )
    let remain = k - n                              // res 每个都是 'a'(1), 从后往前修改,剩余的值就是 k - n
    let cur = n - 1                                 // 尾部创建一个指针
    while (remain) {                                // 差值 remain 为 0 循环结束
        if (remain > 25) {                          // 'a'默认为1, 所以大于25的 直接用 'z' 替换 
            res[cur] = 'z'
            remain -= 25                            // 差值 remain - 25
            cur--                                   // cur指针向前移动
        } else {                                    // 小于等于25的 
            res[cur] = String.fromCharCode(97 + remain) // 用 fromCharCode(97('a') + remain)找到对应的字母
            remain = 0                              // 置空差值,退出循环
        }
    }

    return res.join('')
}
/**
 * 贪心
 * 先设置n个a,再从后构造字符串
 */
function getSmallestString(n: number, k: number) {
    k -= n                                          // 用和值k 记录与 n 个 'a'的差值
    let res = ''        
    let cur = 0                                     // 要转换成字母的数
    for (let i = n - 1; i >= 0; i--, k -= cur) {    // 从尾部开始遍历, 每次减去 已经转换成字母的数
        cur = Math.min(25, k)                       // 每次遍历对比 差值 k 跟 25,>=25,计作25,这样每次遍历都用k-cur
        res = String.fromCharCode(97 + cur) + res   // 把cur 转成字母 与之前的 str 拼接
    }
    return res
}
`
export const thousandSeparator = `
function thousandSeparator(n: number) {
    if (typeof n !== 'number') throw Error('Invalid Params')
    if (n >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER) return n
    let count = 0
    let ans = ''
    const sign = n < 0 ? '-' : ''
    // 带小数位
    n = Math.abs(n)
    let [a, b = ''] = String(n).split('.')
    console.log(a, b)
    let num = Number(a)
    while (num) {
        let cur = num % 10
        num = Math.floor(num / 10)
        ans += String(cur)
        count++
        if (count % 3 === 0 && num) {
            ans += ','
        }
    }
    ans = ans.split('').reverse().join('')
    ans = sign + ans
    return b.length ? ans + '.' + b : ans

    // 整数
    n = Math.abs(n)
    while (n) {
        let cur = n % 10
        n = Math.floor(n / 10)
        ans += String(cur)
        count++
        if (count % 3 === 0 && n) {
            ans += ','
        }
    }
    return sign + ans.split('').reverse().join('')

    // 原生API
    return (n).toLocaleString().replace(/\,/g, '.')
}`

