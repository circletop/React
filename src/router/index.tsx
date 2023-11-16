// 对象的写法
import Home from "@/views/Home"
// import About from "@/views/About"
import {Navigate } from "react-router-dom";
import { About, User } from "./lazyRoutes";
import React from "react";

// 懒加载loading处理
const withLoadingComponent = (comp: JSX.Element) =>
<React.Suspense fallback={<div>loading</div>}>
  {comp}
</React.Suspense>

const router = [{
  path: "/",
  element: <Navigate to="/home" />
}, {
  path: "/home",
  element: <Home></Home>
}, {
  path: "/about",
  element: withLoadingComponent(<About></About>)
},
{
  path: "/user",
  element: withLoadingComponent(<User></User>)
}
] 
export default router