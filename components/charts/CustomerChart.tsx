"use client"
import dynamic from "next/dynamic";
import React from "react";
import {useTheme} from "../../hooks/useTheme";

const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});

const CustomerChart = () => {
	const {isDark} = useTheme();
	
	const options = {
		chart: {
			type: "radialBar" as const,
			height: "100%",
			width: "100%",
			background: 'transparent'
		},
		plotOptions: {
			radialBar: {
				hollow: {
					size: "40%"
				},
				track: {
					background: isDark ? "#2a2a2a" : "#f2f2f2",
					strokeWidth: "15%"
				},
				dataLabels: {
					name: {
						show: false
					},
					value: {
						show: true,
						fontSize: "16px",
						color: isDark ? '#ffffff' : '#000000'
					}
				}
			}
		},
		colors: ["#4CAF50", "#FF7A59"],
		labels: ["New Customers", "Returning Customers"],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: "bottom" as const
					}
				}
			}
		],
		legend: {
			show: true,
			position: "bottom" as const,
			labels: {
				colors: isDark ? '#ffffff' : '#000000'
			}
		},
		tooltip: {
			theme: isDark ? "dark" as const : "light" as const
		}
	};
	
	const series = [70, 40];
	return (
		<Chart options={options} series={series} type="radialBar" height={150}/>
	);
}

export default CustomerChart;