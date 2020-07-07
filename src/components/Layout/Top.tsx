import React, { useState } from 'react'
import { Menu, Layout } from 'antd'
import { Link } from 'react-router-dom'
import * as screenfull from 'screenfull'
import './index.less'
import { ArrowsAltOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons'
const { SubMenu } = Menu
const { Header } = Layout

const Top = (props: any) => {
    const [username, setUsername] = useState<string>('Alec')




    const getUser = () => {
        setUsername('Alec')
    }

    const setScreenFull = () => {
        if (screenfull.enabled) {
            screenfull.request()
        }
    }
    return (
        <Header className="layout-top">
            {
                props.collapsed ?
                    <MenuFoldOutlined onClick={props.toggle} /> :
                    <MenuUnfoldOutlined onClick={props.toggle} />
            }
            <div className="top-right">
                <ArrowsAltOutlined onClick={setScreenFull} className="screen-full" />
                <Menu mode="horizontal" className="log-out">
                    <SubMenu title={<span><UserOutlined />{username}</span>} >
                        <Menu.Item key="logOut"><Link to="/login" >退出</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        </Header >
    )
}

export default Top