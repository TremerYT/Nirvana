import type {MenuProps} from "antd";
import {LogoutOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";

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
		key: "/login",
		label: "Logout",
		icon: <LogoutOutlined/>
	},
];