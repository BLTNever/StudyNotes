import React, { memo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'antd'
import 'moment/locale/zh-cn'
import './index.less'
import menuList from '../../config/menu'
const { SubMenu } = Menu

const MyMenu = (props: any) => {
    const [selectedKeys, setSelectedKeys] = useState<Array<string>>([])
    const [openKeys, setOpenKeys] = useState<Array<string>>([])
    const { mode, theme, pathname } = props

    useEffect(() => {
        if (pathname?.length) {
            setOpenKeys([pathname.split('/').filter(Boolean)[0]])
            setSelectedKeys([pathname])
        }
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