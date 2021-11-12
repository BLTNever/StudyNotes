import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import { longestCommonPrefix, isValid, strStr, lengthOfLastWord } from './egString'

const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const AlgoString = () => {

    return (
        <>
            <Wrap>
                <Title level={3}>最长公共前缀</Title>
                <Collapse ghost>
                    <Panel header="编写一个函数来查找字符串数组中的最长公共前缀。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{longestCommonPrefix}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>有效的括号</Title>
                <Collapse ghost>
                    <Panel header="给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{isValid}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}>实现 strStr()</Title>
                <Collapse ghost>
                    <Panel header="给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{strStr}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}> 最后一个单词的长度</Title>
                <Collapse ghost>
                    <Panel header="给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度" key="1">
                        <Space direction="vertical">
                            <Highlight language="javascript">{lengthOfLastWord}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

        </>
    )
}

export default AlgoString
