'use client';

import {Avatar, Badge, Button, Dropdown, Layout, Menu,} from "antd";
import React, {useState} from "react";
import {BellOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
import {items} from "../../utils/MenuItems";
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image";
import {avatarMenuItems} from "../../utils/DropdownItems";

const {Header, Footer, Sider, Content} = Layout;
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
				width="18%"
				trigger={null}
				collapsible={true}
				collapsed={collapsed}
				theme={!collapsed ? "light" : "dark"}
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
					<div className={`overflow-hidden transition-all duration-600 text-right ${
						collapsed
							? 'max-w-0 opacity-0 -translate-x-2'
							: 'max-w-[220px] opacity-100 translate-x-0'
					}`}>
						<h1 className="text-2xl whitespace-nowrap">Jeffery Mutuku</h1>
						<p className="text-[14px] whitespace-nowrap">Sytem Administrator</p>
					</div>
				</div>
				<Menu
					items={items}
					selectedKeys={[pathname]}
					mode="inline"
					theme={!collapsed ? "light" : "dark"}
					onClick={({key}) => router.push(String(key))}
				/>
			</Sider>
			<Layout>
				<Header
					className="bg-white! shadow-sm flex justify-between items-center px-4! relative z-10"
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
				<Content>{children}</Content>
				<Footer></Footer>
			</Layout>
		</Layout>
	);
}

export default PageLayout;