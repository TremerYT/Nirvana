'use client';

import {Avatar, Badge, Button, Dropdown, Layout, Menu,} from "antd";
import React, {useState} from "react";
import {BellOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
import {usePathname, useRouter} from "next/navigation";
import {avatarMenuItems, items} from "../../config/menu";
import Image from 'next/image';

const {Header, Sider, Content} = Layout;
type LayoutProps = {
	children: React.ReactNode;
}
const PageLayout = ({children}: LayoutProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const pathname = usePathname();
	const router = useRouter()
	return (
		<Layout className="h-screen w-full overflow-hidden">
			<Sider
				width={320}
				theme={"light"}
				trigger={null}
				collapsible
				collapsed={collapsed}
				className="border-r border-gray-200 hidden lg:block"
				breakpoint="lg"
				collapsedWidth={80}
			>
				<div className="flex justify-center p-2 border-b border-solid border-gray-200 bg-white">
					{
						collapsed ? (
							<Image
								src="/Nirvana_icon.png"
								alt="Nirvana-icon"
								width={145}
								height={45}
								className="h-auto w-auto object-contain max-w-45 max-h-11.25 min-w-45 min-h-12.25"
							/>) : (
							<Image
								src="/Nirvana.png"
								alt="Nirvana logo"
								width={145}
								height={45}
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
						<h1 className="text-2xl whitespace-nowrap">Jeffery Mutuku</h1>
						<p className="text-[14px] whitespace-nowrap">Sytem Administrator</p>
					</div>
				</div>
				<div className="flex-1 overflow-y-auto custom-scrollbar">
					<Menu
						items={items}
						selectedKeys={[pathname]}
						mode="inline"
						theme="light"
						onClick={({key}) => router.push(String(key))}
					/>
				</div>
			</Sider>
			<Layout>
				<Header
					className="bg-white shadow-sm flex justify-between items-center px-4 sticky top-0 z-10 border-b border-gray-100"
					style={{backgroundColor: '#ffffff'}}
				>
					<div className="flex items-center gap-4">
						<Button
							type="text"
							icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
							onClick={() => setCollapsed(!collapsed)}
							className="text-[22px]! w-10! h-12!"
						/>
					</div>
					<div className="flex gap-4 items-center">
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
				<Content className="flex-1 overflow-y-auto bg-gray-50 p-6">
					{children}
				</Content>
			</Layout>
		</Layout>
	);
}

export default PageLayout;
