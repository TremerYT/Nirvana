import {Button, Space, Table, Tag, Tooltip} from "antd";
import React, {JSX, useState} from "react";
import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {salesMockData} from "../../mock/mock";
import type {ColumnsType} from "antd/es/table";

interface Sales {
	date: string;
	referenceNumber: string;
	customerName: string;
	status: string;
	grandTotal: number;
	paid: number;
	due: number;
	paymentStatus: string;
}


const columns: ColumnsType<Sales> = [
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
		title: "CUSTOMER NAME",
		dataIndex: "customerName",
		key: "customerName"
	},
	{
		title: "STATUS",
		dataIndex: "status",
		key: "status",
		render: (text: string, record: { status: string }): JSX.Element => (
			<Tag color={
				record.status === "pending" ? "red" :
					record.status === "received" ? "green" :
						record.status === "ordered" ? "blue" : ""
			}>
				{record.status}
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
		render: (text: string, record: { paymentStatus: string }): JSX.Element => (
			<Tag color={
				record.paymentStatus === "unpaid" ? "red" :
					record.paymentStatus === "paid" ? "green" :
						record.paymentStatus === "partial" ? "orange" : ""
			}>
				{record.paymentStatus}
			</Tag>
		)
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

const SalesTable = () => {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
	
	const onSelectChange = (selectedRowKeys: React.Key[]) => {
		setSelectedRowKeys(selectedRowKeys);
	};
	
	return (
		<Table
			columns={columns}
			dataSource={salesMockData}
			pagination={{pageSize: 5}}
			rowSelection={{
				selectedRowKeys,
				onChange: onSelectChange,
			}}
		/>
	)
}

export default SalesTable;