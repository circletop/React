// 对象的写法
// import App from "../App";
import Home from "@/views/Home"
import About from "@/views/About"
import {Navigate } from "react-router-dom";

// const baseRouter = ()=> (
//   <BrowserRouter>
//   <Routes>
//     <Route  path="/" element={<App/>}>
//       {/* 配置默认跳转路径 */}
//       <Route path="/" element={<Navigate to="/home" />}></Route>
//       <Route path="/home" element={<Home />}></Route>
//       <Route path="/about" element={<About />}></Route>
//     </Route>
//   </Routes>
//   </BrowserRouter>
// )
const router = [{
  path: "/",
  element: <Navigate to="/home" />
}, {
  path: "/home",
  element: <Home></Home>
}, {
  path: "/about",
  element: <About></About>
}]
export default router