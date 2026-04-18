import React, {JSX, useState} from "react";
import {Button, Space, Table, Tag, Tooltip} from "antd";
import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {purchaseMockData} from "../../mock/mock";
import type {ColumnsType} from "antd/es/table";

interface Purchase {
	date: string;
	referenceNumber: string;
	supplierName: string;
	wareHouse: string;
	status: string;
	grandTotal: number;
	paid: number;
	due: number;
	paymentStatus: string;
}

const columns: ColumnsType<Purchase> = [
	{
		title: "DATE",
		dataIndex: "date",
		key: "date"
	},
	{
		title: "REFERENCE",
		dataIndex: "referenceNumber",
		key: "referenceNumber"
	},
	{
		title: "SUPPLIER NAME",
		dataIndex: "supplierName",
		key: "supplierName"
	},
	{
		title: "WAREHOUSE",
		dataIndex: "wareHouse",
		key: "warehouse"
	},
	{
		title: "STATUS",
		dataIndex: "status",
		key: "status",
		render: (value: string): JSX.Element => (
			<Tag color={
				value === "pending" ? "red" :
					value === "received" ? "green" :
						value === "ordered" ? "blue" : ""
			}>
				{value}
			</Tag>
		),
	},
	{
		title: "GRAND TOTAL",
		dataIndex: "grandTotal",
		key: "grandTotal"
	},
	{
		title: "PAID",
		dataIndex: "paid",
		key: "paid"
	},
	{
		title: "DUE",
		dataIndex: "due",
		key: "due"
	},
	{
		title: "PAYMENT STATUS",
		dataIndex: "paymentStatus",
		key: "paymentStatus",
		render: (value: string): JSX.Element => (
			<Tag color={
				value === "unpaid" ? "red" :
					value === "paid" ? "green" :
						value === "partial" ? "orange" : ""
			}>
				{value}
			</Tag>
		),
	},
	{
		title: "ACTION",
		dataIndex: "action",
		key: "action",
		render: (_, record): JSX.Element => (
			<Space size={"middle"}>
				<Tooltip title="View">
					<Button icon={<EyeOutlined/>}/>
				</Tooltip>
				<Tooltip title="Edit">
					<Button icon={<EditOutlined style={{color: 'blue'}}/>}/>
				</Tooltip>
				<Tooltip title="Delete">
					<Button icon={<DeleteOutlined style={{color: 'red'}}/>}/>
				</Tooltip>
			</Space>
		),
	}
]

const PurchaseTable = () => {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
	
	const onSelectChange = (selectedRowKeys: React.Key[]) => {
		setSelectedRowKeys(selectedRowKeys);
	};
	
	return (
		<Table
			columns={columns}
			rowKey="referenceNumber"
			dataSource={purchaseMockData}
			pagination={{pageSize: 5}}
			rowSelection={{
				selectedRowKeys,
				onChange: onSelectChange,
			}}
		/>
	);
}

export default PurchaseTable;