import PasswordResetForm from "../../../../../components/forms/authentication/forgot_password/PasswordResetForm";

const ResetPage = () => {
	return (
		<>
			<div className="flex flex-col items-center text-center gap-2 mb-2">
				<h1 className="text-4xl font-bold"> Create new password</h1>
				<p className="text-gray-400">Enter your new password below to<br/> complete the reset process</p>
			</div>
			<div className="flex justify-center">
				<PasswordResetForm/>
			</div>
		</>
	);
}

export default ResetPage;