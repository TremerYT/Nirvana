"use client";

import {Button, Form, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {useRouter} from "next/navigation";

type PasswordResetForm = {
	password: string;
	confirmPassword: string;
}

const PasswordResetForm = () => {
	const [form] = Form.useForm()
	const router = useRouter();
	return (
		<Form
			form={form}
			layout="vertical"
			requiredMark={false}
			className="w-1/2"
		>
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
					}
				]}
			>
				<Input.Password
					iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
					size="large"
				/>
			</Form.Item>
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
			
			<Button
				htmlType="submit"
				onClick={() => router.push("/auth/forgot_password/success")}
				className="bg-black! text-white! px-20 py-8! rounded-2xl! font-bold! w-full"
			>
				Reset password
			</Button>
		</Form>
	);
}

export default PasswordResetForm