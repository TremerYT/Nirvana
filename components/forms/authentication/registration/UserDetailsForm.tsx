import {Col, Form, Input, Row} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";

const UserDetailsForm = () => {
	return (
		<Row gutter={16}>
			<Col span={24}>
				<Form.Item
					name="fullName"
					label="Full Name"
					rules={[{required: true, message: "Full names are required"}]}
				>
					<Input size="large"/>
				</Form.Item>
			</Col>
			<Col span={24}>
				<Form.Item
					name="email"
					label="Email"
					rules={[
						{required: true, message: "Email is required"},
						{type: "email", message: "Enter a valid email address"}
					]}
				>
					<Input size="large"/>
				</Form.Item>
			</Col>
			<Col span={24}>
				<Form.Item
					name="idNumber"
					label="ID Number"
					rules={[{required: true, message: "Id number is required"}]}
				>
					<Input size="large"/>
				</Form.Item>
			</Col>
			<Col span={24}>
				<Form.Item
					name="userPhoneNumber"
					label="Phone number"
					rules={[
						{
							required: true,
							message: "Phone number is required",
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
					name="password"
					label="Password"
					rules={[
						{
							required: true,
							message: "Password is required"
						},
						{
							pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
							message: "Password must contain letters and numbers",
						},
					]}
				>
					<Input.Password
						iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
						size="large"
					/>
				</Form.Item>
			</Col>
			<Col span={24}>
				<Form.Item
					name="confirmPassword"
					label="Confirm Password"
					dependencies={["password"]}
					rules={[
						{
							required: true,
							message: "Please confirm your password"
						},
						({getFieldValue}) => ({
							validator(_, value) {
								if (!value || getFieldValue("password") === value) {
									return Promise.resolve();
								}
								return Promise.reject(new Error("Passwords do not match"));
							},
						})
					]}
				>
					<Input.Password
						iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
						size="large"
					/>
				</Form.Item>
			</Col>
		</Row>
	);
}
export default UserDetailsForm;