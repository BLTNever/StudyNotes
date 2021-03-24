import React, { useEffect } from 'react'
import Highlight from 'react-highlight'
import { Card, Col, Row, Divider, Collapse, Typography, PageHeader, Space, Alert } from 'antd'

import { Wrap } from '@components/Base'
import PreviewImg from '@components/previewImg'

import {
    event1,
} from './example'
import { subscriber } from '@views/Exercises/list/example'
import { resolve } from 'path'


const { Panel } = Collapse
const { Paragraph, Title, Text, Link } = Typography


const Interview3 = () => {

    const queryURLParams = (url: string) => {
        if (!url?.length) return {}
        let askIndex = url.indexOf('?')
        let polIndex = url.indexOf('#') > 0 ? url.indexOf('#') : url.length
        let host = askIndex > 0 ? url.slice(0, askIndex) : url
        let askText = askIndex > 0 ? url.slice(askIndex + 1, polIndex) : ''
        let polText = polIndex > 0 ? url.slice(polIndex) : ''

        if (!askText?.length) return {}
        askText = decodeURIComponent(askText)

        let obj = {}
        if (host?.length) obj['host'] = host
        if (polText?.length) obj['hash'] = polText
        askText.split('&').forEach((i: string) => {
            let [key, value] = i.split('=')
            const arrIndex = key.indexOf('[]')
            if (arrIndex > 0) {
                key = key.slice(0, arrIndex)
                if (key in obj) {
                    obj[key].push(value)
                } else {
                    obj[key] = [value]
                }
            } else if (key === 'json') {
                obj['json'] = value?.length ? JSON.parse(value) : {}
            } else {
                obj[key] = decodeURIComponent(value)
            }
        })
        return obj
    }


    useEffect(() => {
        const url = "https://www.baidu.com?name=coder&age=20&callback=https%3A%2F%2Fbaidu.com%3Fname%3Dtest&list[]=a&list[]=b&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D"
        const test = queryURLParams(url)
        console.log('test queryUrlParams>>>>>', test)
    }, [])
    return (
        <>
            <Wrap>
                <Title level={3}>委托</Title>
                <Collapse ghost>
                    <Panel header="DOM事件委托" key="1">
                        <Space direction="vertical">
                            <Text >** 点击页面中div打印dom节点</Text>
                            <Highlight language="javascript">{event1}</Highlight>
                        </Space>
                    </Panel>
                </Collapse>
            </Wrap>

            <Wrap>
                <Title level={3}></Title>
                <Collapse ghost>
                    <Panel header="extend" key="1">
                        <Space direction="vertical">
                            {/* <Card><Highlight language="javascript">{extend8}</Highlight></Card> */}
                        </Space>
                    </Panel>
                    
                </Collapse>
            </Wrap>

         

         
        </>
    )
}

export default Interview3

