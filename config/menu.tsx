import {
  AppstoreOutlined,
  DashboardOutlined,
  LogoutOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React from 'react';

export const avatarMenuItems: MenuProps['items'] = [
  {
    key: '/profile',
    label: 'Profile',
    icon: <UserOutlined />,
  },
  {
    key: '/settings',
    label: 'Settings',
    icon: <SettingOutlined />,
  },
  {
    key: '/auth/login',
    label: 'Logout',
    icon: <LogoutOutlined />,
  },
];

type MenuItem = Required<MenuProps>['items'][number];
const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
) => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
};

export const items: MenuItem[] = [
  getItem('Dashboard', '/', <DashboardOutlined />),
  getItem('Products', '/products', <AppstoreOutlined />, [
    getItem('Add Product', '/products/add', null),
    getItem('Product List', '/products/list', null),
    getItem('Product Units', '/products/units', null),
    getItem('Brand List', '/products/brands', null),
    getItem('Category List', '/products/categories', null),
  ]),
  getItem('Trading', '/trading', <ShoppingCartOutlined />, [
    getItem('Sales', '/trading/sales', null, [
      getItem('New Sale', '/trading/sales/add', null),
      getItem('POS Sale', '/trading/sales/pos', null),
      getItem('Sales List', '/trading/sales/list', null),
      getItem('Sales Return', '/trading/sales/return', null),
    ]),
    getItem('Purchase', '/trading/purchase', null, [
      getItem('New Purchase', '/trading/purchase/add', null),
      getItem('Purchase List', '/trading/purchase/list', null),
      getItem('Purchase Return', '/trading/purchase/return', null),
    ]),
  ]),
];
