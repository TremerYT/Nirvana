import {Avatar, Button, Card, Input, Select, Space, Table, Tag} from "antd";
import type {ColumnsType} from "antd/es/table";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {mockCategories} from "../../mock/mock";
import React, {useState} from "react";

interface Category {
	categoryCode: string;
	categoryImage: string;
	categoryName: string;
	status: string;
}

const columns: ColumnsType<Category> = [
	{
		title: "CATOGORY CODE",
		dataIndex: "categoryCode",
		key: "categoryCode"
	},
	{
		title: "CATEGORY IMAGE",
		dataIndex: "categoryImage",
		key: "categoryCode",
		render: (image: string) => (
			<Avatar src={image} size={50} shape="square"/>
		),
	},
	{
		title: "CATEGORY NAME",
		dataIndex: "categoryName",
		key: "categoryName"
	},
	{
		title: "STATUS",
		dataIndex: "status",
		key: "status",
		render: (text: string) => (
			<Tag color={text === "active" ? "green" : "red"}>{text}</Tag>
		),
	},
	{
		title: "ACTION",
		key: "action",
		render: (_, record) => (
			<Space size="middle">
				<Button icon={<EditOutlined/>} onClick={() => console.log(record)}/>
				<Button danger icon={<DeleteOutlined/>} onClick={() => console.log(record)}/>
			</Space>
		),
	},
];

const CategoriesTable = () => {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
	
	const onSelectChange = (selectedRowKeys: React.Key[]) => {
		setSelectedRowKeys(selectedRowKeys);
	};
	return (
		<Card
			title={
				<Input.Search
					placeholder="Search by category name or category code"
					allowClear
					className="w-1/3!"
					size={"medium"}
				/>
			}
			extra={
				<div className="flex gap-2 w-80">
					<Select
						placeholder="Status"
						allowClear
						className="w-full!"
						options={[
							{label: "Active", value: "Active"},
							{label: "Inactive", value: "Inactive"},
						]}
					/>
				</div>
			}
		>
			<Table
				columns={columns}
				dataSource={mockCategories}
				rowKey="categoryCode"
				pagination={{pageSize: 10}}
				rowSelection={{
					selectedRowKeys,
					onChange: onSelectChange,
				}}
			/>
		</Card>
	);
}

export default CategoriesTable;