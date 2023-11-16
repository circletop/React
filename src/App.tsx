import { Button } from 'antd';
import { Outlet } from 'react-router-dom';

function App() {

  return (
  <div>
    顶级组建
    <Button type="primary">按钮</Button>
    <Outlet />
  </div>
  )
}

export default App
