import React from 'react';

import './App.css';
import { Frame } from'./components/wizards/transaction/frame';
import { MenuIcon} from './components/menu/MenuIcon';

import { LaptopOutlined, NotificationOutlined, UserOutlined, FileSyncOutlined, FileUnknownOutlined, FileOutlined, FileTextOutlined, FileExclamationOutlined, FileZipOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { MenuInfo, MenuClickEventHandler } from 'rc-menu/lib/interface'

const { Header, Content, Footer, Sider } = Layout;

const menu = [
  {
    key: 1000,
    icon: MenuIcon(FileSyncOutlined), // React.createElement(FileSyncOutlined, { className: "antdicon" }),
    label: "Транзакции",
    children: [
      { key: 1100, label: "Активные", icon: React.createElement(FileExclamationOutlined, { style: { color: "blue", fontSize: "21px" }}), onClick: function(args: MenuInfo) {console.log(args.domEvent); alert("Активные");} },
      { key: 1200, label: "Выполненные", icon: React.createElement(FileTextOutlined, { style: { color: "blue", fontSize: "21px" }}) },
      { key: 1300, label: "Неопознанные", icon: React.createElement(FileUnknownOutlined, { style: { color: "blue", fontSize: "21px" }}) },
      { key: 1400, label: "Архив", icon: React.createElement(FileZipOutlined, { style: { color: "blue", fontSize: "21px" }}) },
    ]
  },
  {
    key: 2000,
    icon: MenuIcon(FileSyncOutlined), // React.createElement(FileSyncOutlined, { className: "antdicon" }),
    label: "Баланс",
    children: [
      { key: 2100, label: "Активы", icon: React.createElement(FileExclamationOutlined, { style: { color: "blue", fontSize: "21px" }}), onClick: function(args: MenuInfo) {console.log(args.domEvent); alert("Активные");} },
      { key: 2200, label: "Пассивы", icon: React.createElement(FileExclamationOutlined, { style: { color: "blue", fontSize: "21px" }}), onClick: function(args: MenuInfo) {console.log(args.domEvent); alert("Активные");} },
      { key: 2300, label: "Доходы", icon: React.createElement(FileTextOutlined, { style: { color: "blue", fontSize: "21px" }}) },
      { key: 2400, label: "Расходы", icon: React.createElement(FileTextOutlined, { style: { color: "blue", fontSize: "21px" }}) },
    ]
  },  
  {
    key: 3000,
    icon: MenuIcon(FileSyncOutlined), // React.createElement(FileSyncOutlined, { className: "antdicon" }),
    label: "Акторы",
    children: [
      { key: 3100, label: "Контрагенты", icon: React.createElement(FileExclamationOutlined, { style: { color: "blue", fontSize: "21px" }}), onClick: function(args: MenuInfo) {console.log(args.domEvent); alert("Активные");} },
      { key: 3200, label: "Организации", icon: React.createElement(FileTextOutlined, { style: { color: "blue", fontSize: "21px" }}) },
      { key: 3300, label: "Банки", icon: React.createElement(FileTextOutlined, { style: { color: "blue", fontSize: "21px" }}) },
    ]
  },
  {
    key: 4000,
    icon: MenuIcon(FileSyncOutlined), // React.createElement(FileSyncOutlined, { className: "antdicon" }),
    label: "Безопасность",
    children: [
      { key: 4100, label: "Пользователи", icon: React.createElement(FileExclamationOutlined, { style: { color: "blue", fontSize: "21px" }}), onClick: function(args: MenuInfo) {console.log(args.domEvent); alert("Активные");} },
      { key: 4200, label: "Доступ", icon: React.createElement(FileUnknownOutlined, { style: { color: "blue", fontSize: "21px" }}) },
      { key: 4300, label: "Роли", icon: React.createElement(FileExclamationOutlined, { style: { color: "blue", fontSize: "21px" }}), onClick: function(args: MenuInfo) {console.log(args.domEvent); alert("Активные");} },
    ]
  }
];

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey: number = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
          icon: React.createElement(UserOutlined)
        };
      }),
    };
  },
);

const App: React.FC = () => (
<div className='main'>
  <Layout className="layout">
    <Header>
      <div className="logo"><div>БПС 2022</div></div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1200']}
            defaultOpenKeys={['1200']}
            style={{ height: '100%', borderRight: 0 }}
            items={menu}
          />
      </Sider>
      <Layout style={{ padding: '0 24px 24px', minHeight: "100%" }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content className="site-layout-background"
          style={{
            padding: 24,
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            margin: 0,
            height: "100%",
          }}>
          <div className="site-layout-content"><Frame/></div>
        </Content>
      </Layout>
    </Layout>
  </Layout>
</div>
);

export default App;
