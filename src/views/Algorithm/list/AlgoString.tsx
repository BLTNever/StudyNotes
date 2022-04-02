import React, { useRef, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'

import Highlight from '@components/HighLight'
import { Divider, Collapse, Typography, Space } from 'antd'

import { Wrap } from '@components/Base'

import * as eg from './egString'
import * as T from '../config'
const { Panel } = Collapse
const { Title } = Typography


const AlgoString = () => {

    // const handle: any = useRef(null)
    // const count: any = useRef(0)
    // function handleData() {
    //     console.log(111, count.current)
    //     count.current++
    //     if (count.current === 10) clearInterval(handle.current)
    // }
    // function fetch() {
    //     handle.current = setInterval(() => handleData(), 1000)
    // }
    // useEffect(() => {
    //     fetch()
    // }, [])
    const history = useHistory()
    const scrollToAnchor = (anchorName: string) => {
        let anchorElement = document.querySelector(anchorName)
        if (anchorElement) { anchorElement.scrollIntoView() }
    }
    useEffect(() => {
        const { location: { hash } } = history
        if (hash.length) scrollToAnchor(hash)
    }, [])
    return (
        <>
            <Wrap>
                <Title level={3}>14.最长公共前缀{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="编写一个函数来查找字符串数组中的最长公共前缀。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.longestCommonPrefix}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>1961.检查字符串是否为数组前缀{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个字符串 s 和一个字符串数组 words , 请你判断 s 是否为 words 的 前缀字符串 。
                            字符串 s 要成为 words 的 前缀字符串 , 需要满足: s 可以由 words 中的前 k(k 为 正数 )个字符串按顺序相连得到, 且 k 不超过 words.length 。
                            如果 s 是 words 的 前缀字符串 , 返回 true ；否则, 返回 false " key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.isPrefixString}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2000.反转单词前缀{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个下标从 0 开始的字符串 word 和一个字符 ch 。找出 ch 第一次出现的下标 i , 反转 word 中从下标 0 开始、直到下标 i 结束(含下标 i )的那段字符。
                            如果 word 中不存在字符 ch , 则无需进行任何操作。
                            返回 结果字符串 " key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.reversePrefix}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>20.有效的括号{T.EASY}{T.STACK}{T.HASH}🔥</Title>
                <Collapse ghost>
                    <Panel header="给定一个只包括 '(', ')', '{', '}', '[', ']' 的字符串 s , 判断字符串是否有效" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.isValid}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>28.实现 strStr(){T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你两个字符串 haystack 和 needle , 请你在 haystack 字符串中找出 needle 字符串出现的第一个位置(下标从 0 开始)。如果不存在, 则返回  -1 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.strStr}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2843.最后一个单词的长度{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个字符串 s, 由若干单词组成, 单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.lengthOfLastWord}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>125.验证回文串{T.EASY}🔥</Title>
                <Collapse ghost>
                    <Panel header="给定一个字符串, 验证它是否是回文串, 只考虑字母和数字字符, 可以忽略字母的大小写" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.isPalindrome}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>1945.字符串转化后的各位数字之和{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个由小写字母组成的字符串 s , 以及一个整数 k 。首先, 用字母在字母表中的位置替换该字母, 将 s 转化 为一个整数(也就是, 'a' 用 1 替换, 'b' 用 2 替换, ...'z' 用 26 替换)。接着, 将整数 转换 为其 各位数字之和 。共重复 转换 操作 k 次 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.getLucky}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>1957.删除字符使字符串变好{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="一个字符串如果没有 三个连续 相同字符, 那么它就是一个 好字符串 。给你一个字符串 s , 请你从 s 删除 最少 的字符, 使它变成一个 好字符串 。请你返回删除后的字符串。题目数据保证答案总是 唯一的 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.makeFancyString}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>



            <Wrap>
                <Title level={3}>1974.作为子字符串出现在单词中的字符串数目{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个字符串数组 patterns 和一个字符串 word , 统计 patterns 中有多少个字符串是 word 的子字符串。返回字符串数目。
                            子字符串 是字符串中的一个连续字符序列。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.numOfStrings}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>使用特殊打字机键入单词的最少时间{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="有一个特殊打字机, 它由一个 圆盘 和一个 指针 组成,  圆盘上标有小写英文字母 'a' 到 'z'(顺时针排列)。只有 当指针指向某个字母时, 它才能被键入。指针 初始时 指向字符 'a' 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.minTimeToType}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>



            <Wrap>
                <Title level={3}>2027.转换字符串的最少操作次数{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header="给你一个字符串 s , 由 n 个字符组成, 每个字符不是 'X' 就是 'O' 。
                            一次 操作 定义为从 s 中选出 三个连续字符 并将选中的每个字符都转换为 'O' 。注意, 如果字符已经是 'O' , 只需要保持 不变 。
                            返回将 s 中所有字符均转换为 'O' 需要执行的 最少 操作次数。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.minimumMoves}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2042.检查句子中的数字是否递增{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>句子是由若干 token 组成的一个列表, token 间用 单个 空格分隔, 句子没有前导或尾随空格。每个 token 要么是一个由数字 0-9 组成的不含前导零的 正整数, 要么是一个由小写英文字母组成的 单词 </li>
                        <li>示例, ‘a puppy has 2 eyes 4 legs’ 是一个由 7 个 token 组成的句子: 2 和 4 是数字, 其他像 puppy 这样的 tokens 属于单词</li>
                        <li>给你一个表示句子的字符串 s , 你需要检查 s 中的 全部 数字是否从左到右严格递增(即, 除了最后一个数字, s 中的 每个 数字都严格小于它 右侧 的数字)</li>
                        <li>如果满足题目要求, 返回 true , 否则, 返回 false </li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.areNumbersAscending}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2047.句子中的有效单词数{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>句子仅由小写字母( a 到 z )、数字( 0  到  9 )、连字符( - )、标点符号( ! 、 .  和  , )以及空格(   )组成。每个句子可以根据空格分解成 一个或者多个 token , 这些 token 之间由一个或者多个空格     分隔</li>
                        <li>如果一个 token 同时满足下述条件, 则认为这个 token 是一个有效单词:</li>
                        <li>仅由小写字母、连字符和/或标点(不含数字)。</li>
                        <li>至多一个 连字符  -  。如果存在, 连字符两侧应当都存在小写字母(“a-b“ 是一个有效单词, 但 “-ab“ 和 “ab-“ 不是有效单词)。</li>
                        <li>至多一个 标点符号。如果存在, 标点符号应当位于 token 的 末尾 。</li>
                        <li>这里给出几个有效单词的例子: a-b.、afad、ba-c、a! 和 ! </li>
                        <li>给你一个字符串 sentence , 请你找出并返回 sentence 中 有效单词的数目</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.countValidWords}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2062.统计字符串中的元音子字符串{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>子字符串 是字符串中的一个连续(非空)的字符序列</li>
                        <li>元音子字符串 是 仅 由元音( a 、 e 、 i 、 o  和  u )组成的一个子字符串, 且必须包含 全部五种 元音</li>
                        <li>给你一个字符串 word , 统计并返回 word 中 元音子字符串的数目</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.countVowelSubstrings}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>2068.检查两个字符串是否几乎相等{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>如果两个字符串 word1 和 word2 中从 a 到 z 每一个字母出现频率之差都 不超过 3 , 那么我们称这两个字符串 word1 和 word2 几乎相等 </li>
                        <li>给你两个长度都为 n 的字符串 word1 和 word2 , 如果 word1 和 word2 几乎相等 , 请你返回 true , 否则返回 false </li>
                        <li>一个字母 x 的出现 频率 指的是它在字符串中出现的次数</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.checkAlmostEquivalent}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>剑指 Offer 05.替换空格{T.EASY}</Title>
                <Collapse ghost>
                    <Panel header={`请实现一个函数, 把字符串 s 中的每个空格替换成"%20"。`} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.replaceSpace}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>1496.判断路径是否相交{T.EASY}</Title>
                <Collapse ghost>
                    <Panel
                        header={<ul>
                            <li>给你一个字符串 path, 其中 path[i] 的值可以是 N、S、E 或者 W, 分别表示向北、向南、向东、向西移动一个单位</li>
                            <li>你从二维平面上的原点 (0, 0) 处开始出发, 按 path 所指示的路径行走</li>
                            <li> 如果路径在任何位置上与自身相交, 也就是走到之前已经走过的位置, 请返回 true ；否则, 返回 false</li>
                        </ul>} key="1"
                    >
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.isPathCrossing}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>859.亲密字符串{T.EASY}🔥</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>给你两个字符串 s 和 goal , 只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果, 就返回 true ;否则返回 false </li>
                        <li> 交换字母的定义是: 取两个下标 i 和 j (下标从 0 开始)且满足 i != j , 接着交换 s[i] 和 s[j] 处的字符</li>
                        <li>例如, 在 &quot;abcd&quot; 中交换下标 0 和下标 2 的元素可以生成 &quot;cbad&quot;</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.buddyStrings}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="getSmallestString">
                <Title level={3}>663.具有给定数值的最小字符串{T.MEDIUM}{T.GREEDY}</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <li>字符串由若干小写字符组成, 字符串的数值 为各字符的数值之和。例如, 字符串 &rdquo;abe&rdquo; 的数值等于 1 + 2 + 5 = 8 </li>
                        <li>给你两个整数 n 和 k 。返回 长度 等于 n 且 数值 等于 k 的 字典序最小 的字符串</li>
                        <li>如果字符串 x 在字典排序中位于 y 之前, 就认为 x 字典序比 y 小</li>
                    </ul>
                    } key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.getSmallestString}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap id="checkValidString">
                <Title level={3}>678.有效的括号字符串{T.MEDIUM}{T.STACK}{T.GREEDY}🔥</Title>
                <Collapse ghost>
                    <Panel header={<ul>
                        <p>给定一个只包含三种字符的字符串: ( ,) 和 *,写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则: </p>
                        <li>任何左括号 ( 必须有相应的右括号 )</li>
                        <li>任何右括号 ) 必须有相应的左括号 ( </li>
                        <li>左括号 ( 必须在对应的右括号之前 )</li>
                        <li>* 可以被视为单个右括号 ) ,或单个左括号 ( ,或一个空字符串</li>
                        <li>一个空字符串也被视为有效字符串</li>
                    </ul>} key="1">
                        <Space direction="vertical">
                            <Link to="/algorithm/stack#checkValidString">题解</Link>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>
            <Wrap id="canBeValid">
                <Title level={3}>2116.判断一个括号字符串是否有效{T.MEDIUM}❌不是太理解{T.COUNT}</Title>
                <Collapse ghost>
                    <Panel header={<div>
                        <p>一个括号字符串是只由 `&apos;(`&apos; 和 `&apos;)`&apos; 组成的 非空 字符串。如果一个字符串满足下面 任意 一个条件, 那么它就是有效的: </p>
                        <ul>
                            <li>字符串为 ().</li>
                            <li>它可以表示为 AB(A 与 B 连接), 其中A 和 B 都是有效括号字符串。</li>
                            <li>它可以表示为 (A) , 其中 A 是一个有效括号字符串。</li>
                        </ul>
                        <p>给你一个括号字符串 s 和一个字符串 locked , 两者长度都为 n 。locked 是一个二进制字符串, 只包含 `&apos;0`&apos; 和 `&apos;1`&apos; 。对于 locked 中 每一个 下标 i : </p>
                        <ul>
                            <li>如果 locked[i] 是 `&apos;1`&apos; , 你 不能 改变 s[i] 。</li>
                            <li>`如果 locked[i] 是 `&apos;0`&apos; , 你 可以 将 s[i] 变为 `&apos;(`&apos; 或者 `&apos;)`&apos;`</li>
                        </ul>
                        <p>如果你可以将 s 变为有效括号字符串, 请你返回 true , 否则返回 false</p>
                    </div>} key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{eg.canBeValid}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

        </>
    )
}

export default AlgoString

function isValid() {

}

try {
    // console.log(getSmallestString(6, 73))
} catch (error) { }

function test(s: string) {

}

function test1(s: string[]) {
    let pre = s[0]
    for (let i = 1; i < s.length; i++) {
        let j = 0
        for (; j < s[i].length && j < pre.length; j++) {
            if (s[i][j] !== pre[j]) break
        }
        pre = s[i].slice(0, j)
    }
}