import { Button } from 'antd';

import { useRoutes,Link } from 'react-router-dom';
import router from './router';

function App() {
const outlet = useRoutes(router )
  return (
  <div>
    <Link to="/home"><Button type="text">Home</Button></Link>|
    <Link to="/about"><Button type="text">About</Button></Link>
    {/* // 组件写法 */}
    {/* <Outlet /> */}
    {outlet}
  </div>
  )
}

export default App
