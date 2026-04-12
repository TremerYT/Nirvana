"use client";

import {Card} from "antd";
import AddProductForm from "../../../../../components/forms/product/AddProductForm";

const AddProductPage = () => {
	return (
		<>
			<div className="flex flex-col items-start mb-5">
				<h2 className="text-3xl">Add Product</h2>
				<p>Create and manage your products</p>
			</div>
			<Card>
				<AddProductForm/>
			</Card>
		</>
	);
};

export default AddProductPage;