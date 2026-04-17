"use client"
import {Card} from "antd";
import dynamic from "next/dynamic";
import React from "react";
import {useTheme} from "../../hooks/useTheme";

const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});

const TotalRevenue = () => {
	const {isDark} = useTheme();
	
	const options = {
		chart: {
			type: "area" as const,
			height: 343,
			background: 'transparent'
		},
		stroke: {
			curve: "smooth" as const,
			width: 4
		},
		dataLabels: {
			enabled: false
		},
		grid: {
			borderColor: isDark ? "#2a2a2a" : "#e7e7e7",
			clipMarkers: false,
			xaxis: {
				lines: {
					show: true
				}
			},
			yaxis: {
				lines: {
					show: true
				}
			}
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			labels: {
				style: {
					colors: isDark ? '#ffffff' : '#000000'
				}
			},
			axisBorder: {
				color: isDark ? "#2a2a2a" : "#e7e7e7"
			}
		},
		yaxis: {
			labels: {
				formatter: (val: number) => val.toLocaleString(),
				style: {
					colors: isDark ? '#ffffff' : '#000000'
				}
			}
		},
		colors: ["#86d39b", "#ff4d4f"],
		legend: {
			position: "top" as const,
			labels: {
				colors: isDark ? '#ffffff' : '#000000'
			}
		},
		tooltip: {
			theme: isDark ? "dark" as const : "light" as const,
			y: {
				formatter: (val: number) => val.toLocaleString()
			}
		}
	};
	
	const series = [
		{
			name: "Income",
			data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 4200, 3800, 4600, 5000, 6000]
		},
		{
			name: "Expenses",
			data: [2400, 1398, 2800, 3908, 4800, 3800, 4300, 3100, 2900, 3200, 3500, 4000]
		}
	];
	
	return (
		<Card title="Total Revenue">
			<Chart options={options} series={series} type="area" height={315}/>
		</Card>
	);
}

export default TotalRevenue;