"use client";

import {Card, Col, Divider, Row, Select, Tabs, Tag} from "antd";
import React, {useState} from "react";
import SummaryCards from "../../../components/cards/SummaryCards";
import CountUp from "react-countup";
import {
	FaBan,
	FaBoxOpen,
	FaChartLine,
	FaExclamationTriangle,
	FaMoneyBillWave,
	FaShoppingCart,
	FaUser,
	FaUsers,
} from "react-icons/fa";
import OverallReport from "../../../components/charts/OverallReport";
import {getGreeting, parseValue} from "../../../utils/utils";
import CustomerChart from "../../../components/charts/CustomerChart";
import TotalRevenue from "../../../components/charts/TotalRevenue";
import TopSelling from "../../../components/charts/TopSelling";
import SalesOrdersAnalytics from "../../../components/charts/SalesOrdersAnalytics";
import DashboardCalendar from "../../../components/calendar/DashboardCalendar";
import SalesTable from "../../../components/tables/SalesTable";
import PurchasesTable from "../../../components/tables/PurchasesTable";

const Dashboard = () => {
	const [greeting] = useState(getGreeting);
	const currencyFormatter = React.useCallback((value: string | number | undefined) => (
		<CountUp
			end={parseValue(value)}
			duration={2}
			separator=","
			prefix="Ksh "
		/>
	), []);
	
	const countFormatter = React.useCallback((value: string | number | undefined) => (
		<CountUp end={parseValue(value)} duration={1.5}/>
	), []);
	
	const summaryCards = [
		{
			bgIconColor: "rgba(24,144,255,0.15)",
			icon: FaChartLine,
			iconColor: "#1890ff",
			value: 10000,
			label: "Total Sales",
			formatter: currencyFormatter,
		},
		{
			bgIconColor: "rgba(255,77,79,0.15)",
			icon: FaMoneyBillWave,
			iconColor: "#ff4d4f",
			value: 5000,
			label: "Total Expenses",
			formatter: currencyFormatter,
		},
		{
			bgIconColor: "rgba(82,196,26,0.15)",
			icon: FaShoppingCart,
			iconColor: "#52c41a",
			value: 15000,
			label: "Total Purchases",
			formatter: currencyFormatter,
		},
		{
			bgIconColor: "rgba(114,46,209,0.15)",
			icon: FaBoxOpen,
			iconColor: "#722ed1",
			value: 320,
			label: "Total Products",
			formatter: countFormatter,
		},
		{
			bgIconColor: "rgba(250,173,20,0.15)",
			icon: FaExclamationTriangle,
			iconColor: "#faad14",
			value: 23,
			label: "Low Stock",
			formatter: countFormatter,
		},
		{
			bgIconColor: "rgba(255,77,79,0.15)",
			icon: FaBan,
			iconColor: "#ff4d4f",
			value: 5,
			label: "Out of Stock",
			formatter: countFormatter,
		},
	];
	
	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between gap-4 items-center">
				<div>
					<h1 className="text-4xl mb-2 font-bold">
						Good {greeting}, Jeffery
					</h1>
					<p className="mb-2 font-light text-sm md:text-base">
						Your dashboard gives you a quick view of key business operations.
					</p>
				</div>
				<Select
					defaultValue={"today"}
					size="medium"
					options={
						[
							{label: "Today", value: "today"},
							{label: "Yesterday", value: "yesterday"},
							{label: "Last 7 days", value: "last 7 days"},
							{label: "Last 30 days", value: "last 30 days"},
							{label: "This month", value: "this month"},
							{label: "Last month", value: "last month"},
							{label: "Last year", value: "last year"},
						]
					}
					className="w-60"
				/>
			</div>
			
			<div className="flex flex-col lg:flex-row gap-4 w-full">
				<div className="flex-1 min-w-0">
					<Row gutter={[16, 16]}>
						{summaryCards.map((card) => (
							<Col
								key={card.label}
								xs={24}
								sm={12}
								md={8}
								lg={8}
								xl={8}
							>
								<SummaryCards {...card} />
							</Col>
						))}
					</Row>
					<Row gutter={[16, 16]} className="mt-4">
						<Col xs={24} lg={12}>
							<TopSelling/>
						</Col>
						<Col xs={24} lg={12}>
							<SalesOrdersAnalytics/>
						</Col>
					</Row>
					<div className="mt-4">
						<TotalRevenue/>
					</div>
				</div>
				
				<div className="flex flex-col gap-4 w-full lg:w-80 xl:w-96 shrink-0">
					<Card title="Overall Report Piechart">
						<OverallReport/>
					</Card>
					<Card title="Overall information">
						<div className="mt-4 flex gap-4">
							<div
								className="bg-gray-100 rounded-lg px-4 py-3 flex flex-col items-center justify-center gap-2 w-1/3">
								<FaUser className="text-xl text-blue-500"/>
								<p className="text-sm">Suppliers</p>
								<p className="text-lg font-bold!">25</p>
							</div>
							<div
								className="bg-gray-100 rounded-lg px-4 py-3 flex flex-col items-center justify-center gap-2 w-1/3">
								<FaUsers className="text-xl text-amber-500"/>
								<p className="text-sm">Customers</p>
								<p className="text-lg font-bold!">135</p>
							</div>
							<div
								className="bg-gray-100 rounded-lg px-4 py-3 flex flex-col items-center justify-center gap-2 w-1/3">
								<FaShoppingCart className="text-xl text-green-500"/>
								<p className="text-sm">Orders</p>
								<p className="text-lg font-bold!">202</p>
							</div>
						</div>
						<Divider style={{borderWidth: 0.5, color: "#cfcfcf"}}/>
						<div className="flex items-center gap-6">
							<div className="w-[50%] h-37.5">
								<CustomerChart/>
							</div>
							<div className="flex w-[50%] justify-center">
								<div className="text-center mr-4">
									<p className="text-2xl font-bold">245</p>
									<p className="text-gray-600 text-sm">First time</p>
									<Tag color="green">25% inc</Tag>
								</div>
								<div className="text-center">
									<p className="text-2xl font-bold">245</p>
									<p className="text-gray-600 text-sm">Return</p>
									<Tag color="blue">21% inc</Tag>
								</div>
							</div>
						</div>
					</Card>
					<DashboardCalendar/>
				</div>
			</div>
			<Card title={"Recent Transactions"}>
				<Tabs
					defaultActiveKey="1"
					items={[
						{
							label: 'Sales',
							key: 'sales',
							children: <SalesTable/>,
						},
						{
							label: 'Purchases',
							key: 'purchases',
							children: <PurchasesTable/>,
						},
					]}
				/>
			</Card>
		</div>
	);
};

export default Dashboard;