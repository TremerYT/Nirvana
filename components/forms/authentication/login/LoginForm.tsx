import {Button, Checkbox, Col, Form, Input, Row} from "antd";
import {FcGoogle} from "react-icons/fc";
import {useState} from "react";
import {useRouter} from "next/navigation";

type FieldType = {
	username: string;
	password: string;
	remember?: boolean;
}

const LoginForm = () => {
	const [form] = Form.useForm<FieldType>();
	const [loading, setIsLoading] = useState(false);
	const router = useRouter();
	return (
		<Form
			form={form}
			layout="vertical"
			requiredMark={false}
		>
			<Form.Item
				name="email"
				label="Email"
				rules={[{required: true, message: "Email is required"}]}
			>
				<Input size="large" className="w-full!"/>
			</Form.Item>
			<Form.Item
				name="password"
				label="Password"
				rules={[{required: true, message: "Password is required"}]}
			>
				<Input size="large"/>
			</Form.Item>
			
			<Form.Item name="remember" valuePropName="checked">
				<Row justify="space-between" align={"middle"}>
					<Col span={12}>
						<Checkbox>Remember Me</Checkbox>
					</Col>
					<Col span={12} className="text-right">
						<Button type="link" size="large" onClick={() => router.push("/auth/forgot_password")}>
							Forgot Password?
						</Button>
					</Col>
				</Row>
			</Form.Item>
			<div className="flex flex-col gap-4 mb-2">
				<Button
					onClick={() => {
					}}
					htmlType="submit"
					loading={loading}
					className="bg-black! text-white! px-20 py-8! rounded-2xl! font-bold! w-full"
				>
					Sign in
				</Button>
				
				<Button
					icon={<FcGoogle/>}
					loading={loading}
					className="px-20 py-8! rounded-2xl! font-bold! w-full"
				>
					Sign in with google
				</Button>
			</div>
			<div className="flex items-center justify-center">
				<p>Dont have an account?</p>
				<Button
					type="link"
					size="large"
					onClick={() => router.push("/auth/register")}
				>
					Sign up
				</Button>
			</div>
		</Form>
	);
}

export default LoginForm