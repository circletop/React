import { useLocation, useRoutes, useNavigate } from 'react-router-dom';
import router from './router';
import { useEffect } from 'react';


const ToPage=()=> {
  const navTo = useNavigate()
  useEffect(()=> {
    navTo('/page1')
  }, [navTo])
  return <div></div>
}
const ToLogin = ()=> {
  const navTo = useNavigate()
  useEffect(()=> {
    navTo('/login')
  }, [navTo])
  return <div></div>
}
// 路由守卫
const BeforeRouterEnter = ()=> {
  const token = sessionStorage.getItem('token')
  const outlet = useRoutes(router)
  const location = useLocation();

  if (token && location.pathname === '/login' ) {
    return <ToPage />
  }
  if(!token && location.pathname !=='/login') {
    return <ToLogin />
  }
  return outlet
}

function App() {
// const outlet = useRoutes(router )
  return (
  <>
      {BeforeRouterEnter()}
  </>
  )
}

export default App
