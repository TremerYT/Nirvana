"use client";

import PasswordResetOTPForm from "../../../../../components/forms/authentication/forgot_password/PasswordResetOTPForm";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {useRouter} from "next/navigation";

const ResetVerification = () => {
	const router = useRouter();
	return (
		<>
			<Button
				type="link"
				icon={<ArrowLeftOutlined className="text-xl!"/>}
				onClick={() => router.push("/auth/forgot_password")}
				className="mb-10 w-1/6"
			/>
			<div className="flex flex-col items-center text-center gap-2 mb-2">
				<h1 className="text-4xl font-bold">Password reset</h1>
				<p>We sent a code your email</p>
			</div>
			<div className="flex justify-center">
				<PasswordResetOTPForm/>
			</div>
		</>
	)
}

export default ResetVerification;