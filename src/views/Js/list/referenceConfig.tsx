import React from 'react'
import { Table } from 'antd'

export const columns = [
    { title: "KEY", dataIndex: "K", width: 120, fixed: 'left', },
    Table.EXPAND_COLUMN,
    { title: "DESC", dataIndex: "describe", },
]
export const arrayData = [
    {
        K: 'slice()', describe: <ul>
            <li>**不会改变原始数组</li>
            <li>slice(start,end): 给定的 start 下标开始(包括), 并在给定的 end 下标处结束(重点: 不包括end下标)</li>
            <li>返回截取的数组</li>
            <li>start: 可选、可为负数、负数从尾部开始(length - start)</li>
            <li>end: 可选、可为负数、负数从尾部开始(length - start)</li>
            <li>可作为浅拷贝</li>
        </ul>
    },
    {
        K: 'splice()', describe: <ul>
            <li>**会改变原始数组</li>
            <li>splice(start,deleteCount,item1,...,itemN):指定修改的开始位置 start, 移动deleteCount个整数的数据, 添加进item的数据</li>
            <li>start: 必选。 超过length从尾部开始。如果为负数,从leng - start位置计算, abs(start)大于length, 则从0开始</li>
            <li>deleteCount: 可选。整数,表示要移除的数组元素的个数。大于 length - start, 从start后全移除。为0、负数、忽略, 不移除</li>
            <li>item1...: 要添加进数组的元素,从start 位置开始。如果不指定, 则 splice() 将只删除数组元素。</li>
        </ul>
    },
    {
        K: 'join()', describe: <ul>
            <li>将一个数组(或一个类数组对象)的所有元素连接成一个字符串并返回这个字符串</li>
            <li>join(separator): 可选。 separator指定的分隔符, 忽略默认使用&quot;,&quot;</li>
            <li>元素为 undefined 或 null,它会被转换为空字符串</li>
        </ul>
    },
    {
        K: 'push()、pop()、shift()、unshift()', describe: <ul>
            <li>**会修改原数组</li>
            <li>**push、unshift 返回修改后数组的新长度</li>
            <li>**pop、shift 返回删除的元素</li>
            <li>push: 尾部添加、pop: 尾部删除、unshift: 头部添加、shift: 头部删除</li>
        </ul>
    },
    {
        K: 'sort', describe: <ul>
            <li>**会修改原数组</li>
            <li>默认排序顺序是在将元素转换为字符串, 然后比较它们的UTF-16代码单元值序列时构建, 返回数组</li>
            <li>{`V8对 sort 的实现, length <= 10 采用插入排序(时间复杂度O(n^2),空间复杂度O(1))`}</li>
            <li>{`length > 10 快速排序(时间复杂度O(nlogn), 空间复杂度O(logn))`}</li>
        </ul>
    },

]

export const stringData = [
    {
        K: 'slice()', describe: <ul>
            <li>**不会改变原字符串</li>
            <li>返回截取的一个新的字符串</li>
            <li>slice(start, end): 给定的 start 下标开始(包括), 并在给定的 end 下标处结束(不包括end下标)</li>
            <li>start: 可选、可为负数、负数从尾部开始(length - start)</li>
            <li>end: 可选、可为负数、负数从尾部开始(length - start)</li>
        </ul>
    },
    {
        K: 'substr()', describe: <ul>
            <li>**不会改变原字符串</li>
            <li>substr(start, length): 给定的 start 下标开始(包括) 处开始的 length 个字符(不填, 到尾部)</li>
            <li>返回截取的一个新的字符串</li>
            <li>start: 必需、可为负数、负数从尾部开始(length - start)</li>
            <li>length: 截取的长度。必须是数值。如果省略了该参数返回从start到结尾的字符串</li>
        </ul>
    },
    {
        K: 'substring()', describe: <ul>
            <li>**不会改变原字符串</li>
            <li>slice(start, stop): 截取从 start 下标到 stop-1 处下标的所有字符, 其长度为 stop 减 start</li>
            <li>start: 必需。一个非负的整数</li>
            <li>stop: 可选。一个非负的整数</li>
            <li>可作为浅拷贝</li>
        </ul>
    },
    {
        K: 'split()', describe: <ul>
            <li>**不会改变原数组</li>
            <li>把字符串分割为字符串数组</li>
        </ul>
    },
    {
        K: 'charAt()、indexOf()、lastIndexOf()', describe: <ul>
            <li>charAt(index): 返回指定索引位置的字符, 不在 0 - length 返回空string</li>
            <li>indeOf(search, index): 返回search字符串值在字符串中首次出现的位置。 index 开始检索位置, 范围0到length-1(可选, 默认0)</li>
            <li>lastIndeOf(search, index): 返回search字符串值在字符串中最后出现的位置,从尾部开始。 index 开始检索位置, 范围0到length-1(可选, 默认从length - 1)</li>
        </ul>
    },
]

export const regData = [
    { K: '^', describe: '匹配输入字符串的开始位置,在方括号表达式中使用时,表示不接受该方括号表达式中的字符集合' },
    { K: '$', describe: '匹配输入字符串的结尾位置' },
    { K: '*', describe: '匹配前面的子表达式零次或多次' },
    { K: '+', describe: '匹配前面的子表达式一次或多次' },
    { K: '?', describe: '匹配前面的子表达式零次或一次' },
    { K: '|', describe: '指明两项之间的一个选择' },
    { K: '.', describe: '匹配除换行符 \\n 之外的任何单字符' },
    { K: '\\', describe: '将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符' },
    { K: '[ABC]', describe: '匹配 [...] 中的所有字符,例如 [aeiou] 匹配字符串 "google runoob taobao" 中所有的 e o u a 字母' },
    { K: '[^ABC]', describe: '匹配 [...] 中的所有字符,例如 [aeiou] 匹配字符串 "google runoob taobao" 中除了 e o u a 字母的所有字母' },
    { K: '[A-Z]', describe: '[A-Z] 表示一个区间,匹配所有大写字母,[a-z] 表示所有小写字母' },
    { K: '[\\s\\S]', describe: '匹配所有。\\s 是匹配所有空白符,包括换行,\\S 非空白符,不包括换行' },
    { K: '\\w', describe: '匹配所有。\\s 是匹配所有空白符,包括换行,\\S 非空白符,不包括换行' },
]