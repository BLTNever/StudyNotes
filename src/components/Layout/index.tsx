import React, { memo, useState, useEffect } from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { Layout, ConfigProvider, Button, Menu, Switch } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import './index.less'
import menuList from '../../config/menu'
const { SubMenu } = Menu
const { Header, Footer, Sider, Content } = Layout
import Top from './Top'
import avatar from '../../assets/images/avatar.jpeg'
moment.locale('en')

interface IProps {
    children: any
    location?: any
}

const MyMenu = (props: any) => {
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<Array<string>>([])
    const [defaultOpenKeys, setDefaultOpenKeys] = useState<Array<string>>([])
    const { mode, theme } = props
    useEffect(() => {
        // const path = window.location.hash.slice(1);
        if (menuList && menuList.length > 0) {
            const firstMenu = menuList[0]
            if (firstMenu.children && firstMenu.children.length > 0) {
                setDefaultOpenKeys([firstMenu.id])
                setDefaultSelectedKeys([firstMenu.children[0].id])
            }
        }
    }, [])

    const renderMenu = (list: any[]) => {
        return list.map((item) => {
            if (item.children && item.children.length > 0) {
                return (
                    <SubMenu title={item.name} key={item.id}>
                        {renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={item.title} key={item.id}>
                    <Link to={item.route}>{item.name}</Link>
                </Menu.Item>
            )
        })
    }

    return (
        <Menu
            className='menu'
            defaultSelectedKeys={defaultSelectedKeys}
            defaultOpenKeys={defaultOpenKeys}
            mode={mode}
            theme={theme}
        >
            {renderMenu(menuList)}
        </Menu>
    )
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
                <MyMenu mode={mode} theme={theme} />
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
