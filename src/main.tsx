import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式重置
import "rest-css"
// 全局样式
import "@/assets/styles/global.scss"
// import App from './App.tsx'

// 路由
import Router from "./router"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Router />
  </React.StrictMode>,
)
