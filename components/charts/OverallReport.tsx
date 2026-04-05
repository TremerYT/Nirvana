"use client"
import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});
const OverallReport = () => {
	const options = {
		chart: {
			type: "donut" as const
		},
		labels: ["Purchase", "Sales", "Expenses", "Gross Profit"],
		legend: {
			position: "bottom" as const
		},
		dataLabels: {
			enabled: true,
			formatter: (value: number) => `${value.toFixed(1)}%`
		},
		colors: ["#1890ff", "#52c41a", "#ff4d4f", "#722ed1"],
		tooltip: {
			y: {
				formatter: (val: number) => {
					return `KES ${val.toLocaleString("en-KE")}`;
				},
			},
		},
		plotOptions: {
			pie: {
				donut: {
					size: "50%",
				},
			},
		},
	}
	
	const series = [15000, 10000, 5000, 5000];
	return (
		<Chart options={options} series={series} type="donut" height={290}/>
	);
}

export default OverallReport;