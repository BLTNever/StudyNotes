import React from 'react'
import { Space, Typography, PageHeader, Avatar, Tooltip } from 'antd'
import { FrownTwoTone, MehTwoTone, SmileTwoTone, HeartTwoTone } from '@ant-design/icons'
import { list } from './config'
import './index.less'
const { Text, Link } = Typography



const Home = () => {
    const getEnterIcon: any = (key: number, color: string) => {
        const enterMap = {
            1: <FrownTwoTone twoToneColor={color} />,
            2: <MehTwoTone twoToneColor={color} />,
            3: <SmileTwoTone twoToneColor={color} />,
        }
        const textMap = {
            1: '未开始',
            2: '进行中',
            3: '搞掂',
        }
        return <Tooltip title={textMap[key]}>
            {enterMap[key]}
        </Tooltip>
    }
    const onBack = () => {
        
    }
    const goTo = (link:string) => {
        
    }
    const renderItem = () => {
        return list.map((item: any) => {
            return (
                <PageHeader key={item.key}
                    title={item.title}
                    className="site-page-header"
                    subTitle={<span onClick={() => goTo(item.link)}>{item.subTitle}</span>}
                    tags={<HeartTwoTone twoToneColor={item.done ? 'red' : 'gray'} />}
                    backIcon={getEnterIcon(item.enter, item.color)}
                    onBack={onBack}
                    // extra={[
                    //     getEnterIcon(item.enter, item.color)
                    // ]}
                ></PageHeader>

            )
        })
    }


    return (
        <Space direction="vertical" className="home">
            {renderItem()}
        </Space>
    )
}

export default Home
