import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate, Outlet } from 'react-router-dom';
import { log } from 'console';

const { Header, Content, Footer, Sider } = Layout;

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

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigateTo = useNavigate()
  const menuClick = (e: {key: string})=> {
    navigateTo(e.key)

  }
  // 设置菜单单项展开
  const [openKeys, setOpenKeys] = useState(['']);
  const handleOpenChange = (keys: string[]) => {
    console.log(keys);
    setOpenKeys([keys[keys.length - 1]])
    
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu onOpenChange={handleOpenChange} openKeys={openKeys} theme="dark" defaultSelectedKeys={['/page1']} mode="inline" items={items}  onClick={menuClick}/>
      </Sider>
      <Layout>
        <Header style={{ paddingLeft: '16px', background: colorBgContainer }}>
          <Breadcrumb style={{ lineHeight: "64px" }} items={[{title: "User"}, {title: "Bill"}]}>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: '16px 16px 0', background: colorBgContainer }} className="site-layout-background" >
        <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default View;