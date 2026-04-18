"use client";


import {Button, Typography} from "antd";
import {PlusOutlined, ReloadOutlined} from "@ant-design/icons";
import BrandsTable from "../../../../../components/tables/BrandsTable";

const {Text, Title} = Typography;

const BrandsList = () => {
	return (
		<>
			<div className="flex justify-between items-center mb-4">
				<div>
					<Title level={2} className="m-0!">Brand List</Title>
					<Text>Manage your Brand</Text>
				</div>
				<div className="flex gap-3">
					<Button
						type="text"
						icon={<ReloadOutlined style={{fontSize: 23}}/>}
					/>
					<Button
						type="primary"
						icon={<PlusOutlined/>}
						size={"medium"}
					>
						Add Brand
					</Button>
				</div>
			</div>
			<BrandsTable/>
		</>
	);
}

export default BrandsList