import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式重置
import "rest-css"
// 全局样式
import "@/assets/styles/global.scss"
import App from './App.tsx'

// 路由
// 组件形式
// import Router from "./router"
// 对象形式
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Router /> */}
  </React.StrictMode>,
)
