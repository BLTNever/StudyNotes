import React, { lazy } from 'react'
import { Route, Navigate, Routes as RouterRoutes } from 'react-router-dom'
import { list } from './list'
import { Layout } from 'antd'
const { Content } = Layout

const RouteItem = (props: any) => {
    const { redirect, path, component: Component } = props
    if (redirect) {
        return <Route key={path} path={path} element={<Navigate to={redirect} replace />} />
    }
    return <Route key={path} path={path} element={<Component />} />
}
let Routes: any = []

// 获取子路由

const loopRoute = (route: any, i: any) => {
    return route.children.forEach((routeChild: any, idx: number) => {
        const { redirect, component, children, path } = routeChild
        if (children && children.length) {
            // 递归获取子路径
            if (component) {
                Routes = Routes.flat()
                Routes.push(
                    RouteItem({
                        redirect,
                        path,
                        component: component
                    })
                )
            }
            loopRoute(routeChild, idx)
        } else {
            Routes.push(
                RouteItem({
                    redirect,
                    path,
                    component: component
                })
            )
        }
    })
}

list.forEach((route: any, key) => {
    if (route?.children?.length) {
        loopRoute(route, key)
    } else {
        Routes.push(RouteItem({ key, ...route }))
    }
})

const convertedRoutes = () => {
    return (
        <RouterRoutes>
            {Routes}
        </RouterRoutes>
    )
}

export default convertedRoutes
