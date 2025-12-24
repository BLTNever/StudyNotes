import React from "react"
import { Space, Typography, Tooltip, Button } from "antd"
import {
  FrownTwoTone,
  MehTwoTone,
  SmileTwoTone,
  HeartTwoTone,
} from "@ant-design/icons"
import { list } from "./config"
import "./index.less"
const { Text, Link } = Typography
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const getEnterIcon: any = (key: number, color: string) => {
    const enterMap = {
      1: <FrownTwoTone twoToneColor={color} />,
      2: <MehTwoTone twoToneColor={color} />,
      3: <SmileTwoTone twoToneColor={color} />,
    }
    const textMap:{[key: string]: string} = {
      1: "未开始",
      2: "进行中",
      3: "搞掂",
    }
    return (
      <Tooltip title={textMap?.[String(key)] || ""}>
        {enterMap?.[key as keyof typeof enterMap] as React.ReactNode}
      </Tooltip>
    )
  }
  const goTo = (link: string) => {
    navigate(link)
  }
  const renderItem = () => {
    return list.map((item: any) => {
      return (
        <div style={{display:"flex", alignItems:"baseline", flexDirection:"row", }}>
          <Typography.Title level={2} key={item.key}>
            {item.title}
          </Typography.Title>
          <Typography.Text type="secondary" style={{cursor:"pointer"}} onClick={() => goTo(item.link)}>
            {item.subTitle}
          </Typography.Text>
          <HeartTwoTone twoToneColor={item.done ? "red" : "gray"} />
          {getEnterIcon(item.enter, item.color)}
        </div>
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
