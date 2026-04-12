"use client"
import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});

const CustomerChart = () => {
	const options = {
		chart: {
			type: "radialBar" as const,
			height: "100%",
			width: "100%"
		},
		plotOptions: {
			radialBar: {
				hollow: {
					size: "40%"
				},
				track: {
					background: "#f2f2f2",
					strokeWidth: "15%"
				},
				dataLabels: {
					name: {
						show: false
					},
					value: {
						show: true,
						fontSize: "16px"
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
			position: "bottom" as const
		}
	};
	
	const series = [70, 40];
	return (
		<Chart options={options} series={series} type="radialBar" height={150}/>
	);
}

export default CustomerChart;