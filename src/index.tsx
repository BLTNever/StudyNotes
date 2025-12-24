import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"
import App from "./App"

const container = document.getElementById("root")

if (!container) {
  throw new Error("Root element not found")
}

const root = createRoot(container)

const render = (Comp: React.FC) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Comp />
      </BrowserRouter>
    </React.StrictMode>
  )
}

render(App)

// 模块热替换的 API
declare const module: any

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextEntry = require("./App").default
    render(NextEntry)
  })
}

serviceWorker.unregister()
