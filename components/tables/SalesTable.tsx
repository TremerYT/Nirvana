import {Button, Space, Table, Tag, Tooltip} from "antd";
import {JSX} from "react";
import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {salesMockData} from "../../mock/mock";

const columns = [
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
		render: (_: unknown, record: { status: string }): JSX.Element => (
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
	return (
		<Table
			columns={columns}
			dataSource={salesMockData}
			pagination={{pageSize: 5}}
		/>
	)
}

export default SalesTable;