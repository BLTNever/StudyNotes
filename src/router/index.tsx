import React, { lazy } from 'react'
import { Route, Redirect, Switch, Router } from 'react-router-dom'
import { list } from './list'
import { Layout } from 'antd'
const { Content } = Layout

const RouteItem = (props: any) => {
    const { redirect, path, component } = props
    if (redirect) {
        return <Redirect key={path} from={path} to={redirect} />
    }
    return <Route key={path} component={component} path={path} />
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
        <Switch>
            {Routes}
        </Switch>
    )
}

export default convertedRoutes
