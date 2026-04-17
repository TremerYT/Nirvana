"use client"
import dynamic from "next/dynamic";
import React from "react";
import {useTheme} from "../../hooks/useTheme";

const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});
const OverallReport = () => {
	const {isDark} = useTheme();
	
	const options = {
		chart: {
			type: "donut" as const,
			background: 'transparent'
		},
		labels: ["Purchase", "Sales", "Expenses", "Gross Profit"],
		legend: {
			position: "bottom" as const,
			labels: {
				colors: isDark ? '#ffffff' : '#000000'
			}
		},
		dataLabels: {
			enabled: true,
			formatter: (value: number) => `${value.toFixed(1)}%`,
			style: {
				colors: [isDark ? '#ffffff' : '']
			}
		},
		colors: ["#1890ff", "#52c41a", "#ff4d4f", "#722ed1"],
		tooltip: {
			theme: isDark ? "dark" as const : "light" as const,
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
		stroke: {
			colors: isDark ? ['#1f1f1f'] : ['#ffffff']
		}
	}
	
	const series = [15000, 10000, 5000, 5000];
	return (
		<Chart options={options} series={series} type="donut" height={290}/>
	);
}

export default OverallReport;