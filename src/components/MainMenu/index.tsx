import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import {Menu} from 'antd'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

 // 菜单选项
const items: MenuItem[] = [
  getItem('Option 1', '/page1', <PieChartOutlined />),
  getItem('Option 2', '/page2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const MainMenu: React.FC = () => {

   // 设置菜单单项展开
   const [openKeys, setOpenKeys] = useState(['']);
   const handleOpenChange = (keys: string[]) => {
     setOpenKeys([keys[keys.length - 1]]) 
   }

  // 点击菜单跳转
  const navigateTo = useNavigate()
  const menuClick = (e: {key: string})=> {
    navigateTo(e.key)
  }
  return <Menu onOpenChange={handleOpenChange} openKeys={openKeys} theme="dark" defaultSelectedKeys={['/page1']} mode="inline" items={items}  onClick={menuClick}/>
}

export default MainMenu