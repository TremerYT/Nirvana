"use client"

import ForgotPasswordForm from "../../../../components/forms/authentication/forgot_password/ForgotPasswordForm";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {useRouter} from "next/navigation";

const ForgotPassword = () => {
	const router = useRouter();
	return (
		<>
			<Button
				type="link"
				icon={<ArrowLeftOutlined/>}
				onClick={() => router.push("/auth/login")}
				className="mb-10"
			>
				Back To login
			</Button>
			<div className="flex flex-col text-center gap-2 mb-10">
				<h1 className="text-4xl font-bold">Forgot Password?</h1>
				<p className="text-center">No Worries, Enter your account email to receive a<br/> passord reset link</p>
			</div>
			<div className="flex justify-center">
				<ForgotPasswordForm/>
			</div>
		</>
	);
}

export default ForgotPassword;