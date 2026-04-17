'use client';

import {Avatar, Badge, Button, Dropdown, Layout, Menu, Typography,} from "antd";
import React, {useState} from "react";
import {BellOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
import {usePathname, useRouter} from "next/navigation";
import {avatarMenuItems, items} from "../../config/menu";
import Image from 'next/image';
import ThemeToggle from "../user_interface/ThemeToggle";
import {useTheme} from "../../hooks/useTheme";

const {Header, Sider, Content} = Layout;
const {Title, Text} = Typography;
type LayoutProps = {
	children: React.ReactNode;
}
const PageLayout = ({children}: LayoutProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const pathname = usePathname();
	const router = useRouter();
	const {isDark} = useTheme();
	return (
		<Layout className="h-screen w-full overflow-hidden">
			<Sider
				width={340}
				theme={isDark ? "dark" : "light"}
				trigger={null}
				collapsible
				collapsed={collapsed}
				className="hidden lg:block"
				breakpoint="lg"
				collapsedWidth={80}
			>
				<div
					className={`flex justify-center p-2`}>
					{
						collapsed ? (
							<Image
								src={isDark ? "/Nirvana_icon_dark.png" : "/Nirvana_icon_light.png"}
								alt="Nirvana-icon"
								width={145}
								height={45}
								loading="eager"
								className="h-auto w-auto object-contain max-w-45 max-h-11.25 min-w-45 min-h-12.25"
							/>) : (
							<Image
								src={isDark ? "/Nirvana_Dark.png" : "/Nirvana_Light.png"}
								alt="Nirvana logo"
								width={145}
								height={45}
								loading="eager"
								className="h-auto w-auto object-contain max-w-45 max-h-11.25 min-w-45 min-h-12.25"
							/>
						)
					}
				</div>
				<div className="flex justify-between p-4 items-center overflow-hidden">
					<div>
						<Avatar
							icon={<UserOutlined/>}
							size={collapsed ? 40 : 60}
							className="transition-all duration-300"
						/>
					</div>
					<div className={`overflow-hidden transition-all duration-500 text-right ${
						collapsed
							? 'max-w-0 opacity-0 -translate-x-2'
							: 'max-w-[220px] opacity-100 translate-x-0'
					}`}>
						<Title level={3} className={"m-0! whitespace-nowrap"}>Jeffery Mutuku</Title>
						<Text className={`whitespace-nowrap`}>Sytem Administrator</Text>
					</div>
				</div>
				<div className="flex-1 overflow-y-auto custom-scrollbar">
					<Menu
						items={items}
						selectedKeys={[pathname]}
						mode="inline"
						theme={isDark ? "dark" : "light"}
						onClick={({key}) => router.push(String(key))}
					/>
				</div>
			</Sider>
			<Layout>
				<Header
					className="flex justify-between items-center px-4! sticky top-0 z-10"
					style={{
						background: isDark ? "#001529" : "#ffffff",
						borderBottom: `1px solid ${isDark ? "#333333" : "#f0f0f0"}`,
						boxShadow: isDark ? "none" : "0 1px 4px rgba(0,0,0,0.08)",
					}}
				>
					<div className="flex items-center gap-4">
						<Button
							type="text"
							icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
							onClick={() => setCollapsed(!collapsed)}
							className="text-[22px]!"
						/>
					</div>
					<div className="flex gap-4 items-center">
						<ThemeToggle/>
						<Badge count={3} size="small" offset={[-5, 5]}>
							<Button
								type="text" icon={<MailOutlined/>}
								className="text-[20px]!"
								onClick={() => {
								}}
							/>
						</Badge>
						<Badge count={3} size="small" offset={[-5, 5]}>
							<Button
								type="text" icon={<BellOutlined/>}
								className="text-[20px]!"
								onClick={() => {
								}}
							/>
						</Badge>
						<Dropdown
							menu={{
								items: avatarMenuItems,
								onClick: ({key}) => router.push(String(key))
							}}
							placement="bottomLeft"
							trigger={["click"]}
						>
							<Avatar icon={<UserOutlined/>}/>
						</Dropdown>
					</div>
				</Header>
				<Content className="flex-1 overflow-y-auto p-6">
					{children}
				</Content>
			</Layout>
		</Layout>
	);
}

export default PageLayout;
