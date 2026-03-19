import PasswordResetOTPForm from "../../../../../components/forms/authentication/forgot_password/PasswordResetOTPForm";

const ResetVerification = () => {
	return (
		<>
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