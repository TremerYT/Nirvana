"use client";

import {Card, Typography} from "antd";
import AddProductForm from "../../../../../components/forms/product/AddProductForm";

const {Title, Text} = Typography;

const AddProductPage = () => {
	return (
		<>
			<div className="flex flex-col items-start mb-5">
				<Title level={2} className="m-0!">Add Product</Title>
				<Text>Create and manage your products</Text>
			</div>
			<Card>
				<AddProductForm/>
			</Card>
		</>
	);
};

export default AddProductPage;