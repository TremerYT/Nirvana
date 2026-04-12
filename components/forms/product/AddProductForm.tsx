import type {UploadProps} from "antd";
import {Button, Col, Form, Input, InputNumber, Row, Select, Space, Upload} from "antd";
import {useEffect} from "react";
import {generateProductCode} from "../../../utils/utils";
import {InboxOutlined, PlusOutlined} from "@ant-design/icons";

const {Dragger} = Upload;

const props: UploadProps = {
	name: "file",
	multiple: false,
	maxCount: 1,
	beforeUpload: () => false
}

const AddProductForm = () => {
	const [form] = Form.useForm();
	const currentDiscountType = Form.useWatch("discountType", form);
	const currentTaxType = Form.useWatch("taxType", form);
	
	useEffect(() => {
		form.setFieldValue("productCode", generateProductCode());
	}, [form]);
	
	useEffect(() => {
		form.setFieldValue("discountValue", undefined);
	}, [currentDiscountType, form]);
	
	useEffect(() => {
		form.setFieldValue("productTax", undefined);
	}, [currentTaxType, form]);
	
	return (
		<Form form={form} layout="vertical">
			<Row gutter={[16, 16]}>
				<Col span={16}>
					<Row gutter={[16, 0]}>
						<Col span={12}>
							<Form.Item name="productCode" label="Product Code">
								<Input disabled/>
							</Form.Item>
						</Col>
						
						<Col span={12}>
							<Form.Item
								name="productName"
								label="Product Name"
								rules={[{required: true, message: "Please enter product name"}]}
							>
								<Input/>
							</Form.Item>
						</Col>
						
						<Col span={12}>
							<Form.Item label="Category" required>
								<Space.Compact style={{width: "100%"}}>
									<Form.Item
										name="categoryId"
										noStyle
										rules={[{required: true, message: "Category is required"}]}
									>
										<Select placeholder="Select category" options={[]}/>
									</Form.Item>
									<Button type="primary">+</Button>
								</Space.Compact>
							</Form.Item>
						</Col>
						
						<Col span={12}>
							<Form.Item label="Brand" required>
								<Space.Compact style={{width: "100%"}}>
									<Form.Item
										name="brandId"
										noStyle
										rules={[{required: true, message: "Brand is required"}]}
									>
										<Select placeholder="Select brand" options={[]}/>
									</Form.Item>
									<Button type="primary">+</Button>
								</Space.Compact>
							</Form.Item>
						</Col>
						
						<Col span={12}>
							<Form.Item label="Product Unit" required>
								<Space.Compact style={{width: "100%"}}>
									<Form.Item
										name="productUnit"
										noStyle
										rules={[{required: true, message: "Unit is required"}]}
									>
										<Select placeholder="Select unit" options={[]}/>
									</Form.Item>
									<Button type="primary">+</Button>
								</Space.Compact>
							</Form.Item>
						</Col>
						
						<Col span={12}>
							<Form.Item
								name="status"
								label="Status"
								rules={[{required: true, message: "Status is required"}]}
							>
								<Select
									options={[
										{value: "active", label: "Active"},
										{value: "inactive", label: "Inactive"},
									]}
								/>
							</Form.Item>
						</Col>
						
						<Col span={12}>
							<Form.Item
								name="costPrice"
								label="Cost Price"
								rules={[{required: true, message: "Cost price is required"}]}
							>
								<InputNumber style={{width: "100%"}}/>
							</Form.Item>
						</Col>
						
						<Col span={12}>
							<Form.Item
								name="unitPrice"
								label="Base Price"
								rules={[{required: true, message: "Base price is required"}]}
							>
								<InputNumber style={{width: "100%"}}/>
							</Form.Item>
						</Col>
						
						<Col span={12}>
							<Form.Item
								name="quantity"
								label="Quantity"
								rules={[{required: true, message: "Quantity is required"}]}
							>
								<InputNumber style={{width: "100%"}}/>
							</Form.Item>
						</Col>
						
						<Col span={12}>
							<Form.Item
								name="threshold"
								label="Stock Alert Threshold"
								rules={[{required: true, message: "Threshold is required"}]}
							>
								<InputNumber style={{width: "100%"}}/>
							</Form.Item>
						</Col>
						
						<Col span={12}>
							<Form.Item name="discountType" label="Discount Type">
								<Select
									allowClear
									options={[
										{value: "percentage", label: "Percentage"},
										{value: "fixed", label: "Fixed"},
									]}
								/>
							</Form.Item>
						</Col>
						
						<Col span={12}>
							<Form.Item
								name="discountValue"
								label={
									currentDiscountType === "percentage"
										? "Discount (%)"
										: "Discount (Ksh)"
								}
								rules={[
									{
										validator(_, value) {
											if (!value) return Promise.resolve();
											
											if (currentDiscountType === "percentage" && value > 100) {
												return Promise.reject("Cannot exceed 100%");
											}
											if (value < 0) {
												return Promise.reject("Cannot be negative");
											}
											return Promise.resolve();
										},
									},
								]}
								initialValue={0}
							>
								<Space.Compact style={{width: "100%"}}>
									<InputNumber style={{width: "100%"}}/>
									<Button disabled>
										{currentDiscountType === "percentage" ? "%" : "Ksh"}
									</Button>
								</Space.Compact>
							</Form.Item>
						</Col>
						
						<Col span={currentTaxType ? 8 : 12}>
							<Form.Item name="taxType" label="Tax Type">
								<Select
									allowClear
									options={[
										{value: "percentage", label: "Percentage"},
										{value: "fixed", label: "Fixed"},
									]}
								/>
							</Form.Item>
						</Col>
						
						{currentTaxType && (
							<Col span={8}>
								<Form.Item
									name="productTax"
									label={
										currentTaxType === "percentage"
											? "Tax (%)"
											: "Tax (Ksh)"
									}
									rules={[
										{
											validator(_, value) {
												if (!value) return Promise.resolve();
												
												if (currentTaxType === "percentage" && value > 100) {
													return Promise.reject("Cannot exceed 100%");
												}
												if (value < 0) {
													return Promise.reject("Cannot be negative");
												}
												return Promise.resolve();
											},
										},
									]}
									initialValue={0}
								>
									<Space.Compact style={{width: "100%"}}>
										<InputNumber style={{width: "100%"}}/>
										<Button disabled>
											{currentTaxType === "percentage" ? "%" : "Ksh"}
										</Button>
									</Space.Compact>
								</Form.Item>
							</Col>
						)}
						<Col span={currentTaxType ? 8 : 12}>
							<Form.Item name="taxMethod" label="Tax Method">
								<Select
									options={[
										{value: "inclusive", label: "Inclusive"},
										{value: "exclusive", label: "Exclusive"},
									]}
								/>
							</Form.Item>
						</Col>
						<Col span={24}>
							<Form.Item
								name="description"
								label="Description"
								rules={[{required: true, message: "Description is required"}]}
							>
								<Input.TextArea rows={6}/>
							</Form.Item>
						</Col>
					</Row>
				</Col>
				<Col span={8}>
					<Row gutter={[0, 16]}>
						<Col span={24}>
							<Form.Item
								name="mainImage"
								label="Main Image"
								valuePropName="fileList"
								getValueFromEvent={(e) => {
									const fileList = e?.fileList || [];
									return fileList.slice(-1);
								}}
								rules={[{required: true, message: 'Please upload at least one image'}]}
							>
								<Dragger {...props}>
									<p className="ant-upload-drag-icon">
										<InboxOutlined/>
									</p>
									<p className="ant-upload-text">Click or drag file to this area to upload</p>
								</Dragger>
							</Form.Item>
						</Col>
						<Col span={24}>
							<Form.Item
								name="galleryImages"
								valuePropName="fileList"
								getValueFromEvent={(e) => e.fileList}
								rules={[{required: true, message: "Pleas upload atleast one image variant of the product"}]}
							>
								<Upload
									listType="picture-card"
									beforeUpload={() => false}
									multiple
								>
									<div>
										<PlusOutlined/>
										<div style={{marginTop: 8}}>Upload</div>
									</div>
								</Upload>
							</Form.Item>
						</Col>
					</Row>
				</Col>
			</Row>
			<div className="flex gap-4 justify-end">
				<Button
					type={"primary"}
					htmlType={"submit"}
					size={"large"}
				>
					Add Product
				</Button>
				<Button
					type={"primary"}
					htmlType={"reset"}
					size={"large"}
					danger
				>
					Cancel
				</Button>
			</div>
		</Form>
	);
};

export default AddProductForm;