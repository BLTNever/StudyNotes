import React, { memo, useState, useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Layout, Switch } from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'
import './index.less'
import Top from './Top'
import avatar from '../../assets/images/avatar.jpeg'
import MyMenu from './MyMenu'

moment.locale('en')

const { Sider, Content } = Layout

interface IProps {
    children: any
    location?: any
}

const Main = memo((props: IProps & RouteComponentProps) => {
    const { location } = props
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [mode, setMode] = useState<string>('inline')
    const [theme, setTheme] = useState<string>('dark')
    const loginOut = () => {
        props.history.push('/login')
        console.log('loginOut')
    }

    const toggle = () => {
        setCollapsed(!collapsed)
        setMode(collapsed ? 'inline' : 'vertical')
    }
    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light')
    }

    return (
        <Layout style={{ minHeight: '100%' }} className="containAll">
            <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} >
                <img src={avatar} alt="" className="avatar" />
                <span className="author">Alec</span>
                {
                    theme === 'light'
                        ? <span className="author">Alec</span>
                        : <span className="author white">Alec</span>
                }
                <MyMenu mode={mode} theme={theme} pathname={location.pathname} />
                <div className="switch">
                    <Switch checked={theme === 'dark'}
                        onChange={changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                </div>
            </Sider>
            <Layout>
                <Top toggle={toggle} collapsed={collapsed} />
                <Content className="content" >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
})

export default withRouter(Main)
