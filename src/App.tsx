import React, { Suspense, useEffect, useState } from "react"
import { Spin, ConfigProvider } from "antd"
import Routers from "./router/index"
import Main from "./components/Layout"
import "./App.less"
import "@css/index.normal.less"
import zhCN from "antd/es/locale/zh_CN"

const App = () => {
  return (
    <Main>
      <ConfigProvider locale={zhCN}>
        <Suspense
          fallback={
            <Spin tip="努力加载中...">
              <div className="loadingbox"></div>
            </Spin>
          }
        >
          <Routers />
        </Suspense>
      </ConfigProvider>
    </Main>
  )
}

export default App
