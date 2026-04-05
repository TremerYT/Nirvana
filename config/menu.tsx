import type {MenuProps} from "antd";
import {LogoutOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
import {MdOutlineDashboard} from "react-icons/md";

export const avatarMenuItems: MenuProps["items"] = [
	{
		key: "/profile",
		label: "Profile",
		icon: <UserOutlined/>
	},
	{
		key: "/settings",
		label: "Settings",
		icon: <SettingOutlined/>
	},
	{
		key: "/auth/login",
		label: "Logout",
		icon: <LogoutOutlined/>
	},
];

type MenuItem = Required<MenuProps>["items"][number];
const getItem = (
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
) => {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem
}

export const items: MenuItem[] = [
	getItem("Dashboard", '/', <MdOutlineDashboard/>)
];