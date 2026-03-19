import {MenuProps} from "antd";
import {MdOutlineDashboard} from "react-icons/md";
import React from "react";


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


