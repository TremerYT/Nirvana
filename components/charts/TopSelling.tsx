"use client"
import {Card, Select} from "antd";
import {months} from "../../constants/constants";
import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});

const TopSelling = () => {
	const options = {
		chart: {
			type: "bar" as const,
			height: "100%"
		},
		plotOptions: {
			bar: {
				borderRadius: 10,
				borderRadiusApplication: "end" as const,
				horizontal: false
			}
		},
		xaxis: {
			categories: ["Beauty", "Gadgets", "Fashion", "Accessories", "Books"],
			labels: {
				rotate: -90,
				rotateAlways: true,
				style: {
					fontSize: '12px'
				}
			}
		},
		yaxis: {
			labels: {
				style: {
					fontSize: '12px'
				}
			}
		},
		colors: ["#8080ff"],
		tooltip: {
			theme: "dark" as const
		},
		grid: {
			show: false
		},
		states: {
			hover: {
				filter: {
					type: "lighten" as const,
					value: 0.1
				}
			}
		}
	};
	
	const series = [{
		name: "Amount",
		data: [200, 600, 300, 500, 700]
	}];
	
	return (
		<Card title="Top Selling Products" extra={<Select options={months} defaultValue="january" className="w-35"/>}>
			<Chart options={options} series={series} type="bar" height={350}/>
		</Card>
	);
}

export default TopSelling;