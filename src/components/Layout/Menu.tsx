import React, { memo, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'antd'
import 'dayjs/locale/zh-cn'
import './index.less'
import menuList from '../../config/menu'
const { SubMenu } = Menu

const MyMenu = (props: any) => {
    const [selectedKeys, setSelectedKeys] = useState<Array<string>>([])
    const [openKeys, setOpenKeys] = useState<Array<string>>([])
    const { mode, theme, pathname } = props
    const setTitle = useCallback((route: string, path: string) => {
        if (!route?.length || !path?.length) return
        const list = menuList.filter(i => i.route === route)[0]?.children || []
        if (!list.length) return
        const { name } = list.filter(i => i.route === pathname)[0] || {}
        document.title = name
    }, [pathname, menuList])
    useEffect(() => {
        if (!pathname?.length) return
        const [openKey] = pathname.split('/').filter(Boolean)
        setOpenKeys([openKey])
        setSelectedKeys([pathname])
        setTitle(openKey, pathname)
    }, [pathname])
    const renderMenu = (list: any[]) => {
        return list.map((item) => {
            if (item.children?.length) {
                return (
                    <SubMenu title={item.name} key={item.route} icon={item.icon || null}>
                        {renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={item.title} key={item.route} icon={item.icon || null}>
                    <Link to={item.route}>{item.name}</Link>
                </Menu.Item>
            )
        })
    }
    const onOpenChange = (arr: any) => {
        setOpenKeys([arr[1]])
    }
    const onSelect = (val: any) => {
        const { key, selectedKeys } = val
        // console.log(selectedKeys)
        setSelectedKeys(selectedKeys)
    }
    return (
        <Menu className='menu'
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            mode={mode}
            theme={theme}
            onOpenChange={onOpenChange}
            onSelect={onSelect}
        >
            {renderMenu(menuList)}
        </Menu>
    )
}

export default MyMenu