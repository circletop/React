// 对象的写法
import Home from "@/views/Home"
// import About from "@/views/About"
import {Navigate } from "react-router-dom";
import { About, Page1, Page2, User } from "./lazyRoutes";
import React from "react";
import NotFound from "@/views/NotFound"

// 懒加载loading处理
const withLoadingComponent = (comp: JSX.Element) =>
<React.Suspense fallback={<div>loading</div>}>
  {comp}
</React.Suspense>

const router = [{
  path: "/",
  element: <Navigate to="/page1" />
}, {
  path: "/",
  element: <Home />,
  children: [{
    path: 'page1',
    element: withLoadingComponent(<Page1></Page1>)
  }, {
    path: 'page2',
    element: withLoadingComponent(<Page2></Page2>)
  }]
},
{
  path: "*",
  element: <NotFound /> 
}
// , {
//   path: "/about",
//   element: withLoadingComponent(<About></About>)
// },
// {
//   path: "/user",
//   element: withLoadingComponent(<User></User>)
// }
] 
export default router