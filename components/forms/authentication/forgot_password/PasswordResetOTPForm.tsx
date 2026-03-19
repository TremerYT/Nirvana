"use client";

import {Button, Col, Form, Input, Row} from "antd";
import {useState} from "react";
import {useRouter} from "next/navigation";

type PasswordResetOTPForm = {
	otp: string;
};

const PasswordResetOTPForm = () => {
	const [form] = Form.useForm<PasswordResetOTPForm>();
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	
	const handleSubmit = async (values: PasswordResetOTPForm) => {
		setLoading(true);
		try {
			// TODO: Implement OTP verification logic
			console.log("OTP submitted:", values.otp);
			// Navigate to reset password page after successful verification
			router.push("/auth/forgot_password/reset");
		} catch (error) {
			console.error("OTP verification failed:", error);
		} finally {
			setLoading(false);
		}
	};
	
	return (
		<Form
			form={form}
			layout="vertical"
			requiredMark={false}
			className="w-1/2"
			onFinish={handleSubmit}
		>
			<Row justify="center">
				<Col>
					<Form.Item
						name="otp"
						rules={[
							{required: true, message: "OTP is required"},
							{len: 6, message: "OTP must be 6 digits"}
						]}
					>
						<Input.OTP length={6}/>
					</Form.Item>
				</Col>
			</Row>
			
			<div className="flex flex-col gap-4 mt-6">
				<Button
					type="primary"
					htmlType="submit"
					loading={loading}
					className="bg-black! text-white! px-20 py-8! rounded-2xl! font-bold! w-full"
					onClick={() => router.push("/auth/forgot_password/reset")}
				>
					Verify OTP
				</Button>
				
				<div className="text-center">
					<p className="text-gray-600 mb-2">Did not receive the code?</p>
					<Button
						type="link"
						size="large"
						onClick={() => {
							// TODO: Implement resend OTP logic
							console.log("Resend OTP clicked");
						}}
					>
						Resend Code
					</Button>
				</div>
			</div>
		</Form>
	);
};

export default PasswordResetOTPForm;
