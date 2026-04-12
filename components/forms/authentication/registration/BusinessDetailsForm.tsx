import {Checkbox, Col, Form, Input, Row} from "antd";

const BusinessDetailsForm = () => {
	return (
		<Row gutter={16}>
			<Col span={24}>
				<Form.Item
					name="businessName"
					label="Business Name"
					rules={[{required: true, message: "Business name is required"}]}
				>
					<Input size="large"/>
				</Form.Item>
			</Col>
			
			<Col span={24}>
				<Form.Item
					name="phone"
					label="Company Phone"
					rules={[
						{
							required: true,
							message: "Company Phone is required",
						},
						{
							pattern: /^(?:\+254|254|0)?(7\d{8}|1\d{8})$/,
							message: "Enter a valid Kenyan phone number",
						}
					]}
				>
					<Input size="large"/>
				</Form.Item>
			</Col>
			
			<Col span={24}>
				<Form.Item
					name="companyEmail"
					label="Company Email"
					rules={[
						{required: true, message: "Company Email is required"},
						{type: "email", message: "Enter a valid email address"}
					]}
				>
					<Input size="large"/>
				</Form.Item>
			</Col>
			
			<Col span={24}>
				<Form.Item
					name="city"
					label="City"
					rules={[{required: true, message: "City is required"}]}
				>
					<Input size="large"/>
				</Form.Item>
			</Col>
			
			<Col span={24}>
				<Form.Item
					name="postalCode"
					label="Company Postal Code"
					rules={[{required: true, message: "Company zip code is required"}]}
				>
					<Input size="large"/>
				</Form.Item>
			</Col>
			
			<Col span={24}>
				<Form.Item
					name="address"
					label="Company Address"
					rules={[{required: true, message: "Company Address is required"}]}
				>
					<Input size="large"/>
				</Form.Item>
			</Col>
			
			<Col span={24}>
				<Form.Item
					name="terms"
					valuePropName="checked"
					rules={[
						{
							validator: (_, value) =>
								value
									? Promise.resolve()
									: Promise.reject(new Error("You must accept terms")),
						},
					]}
				>
					<Checkbox>I accept the Terms of Service</Checkbox>
				</Form.Item>
			</Col>
		</Row>
	);
};

export default BusinessDetailsForm;