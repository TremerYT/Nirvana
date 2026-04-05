'use client'

import LoginForm from "../../../../components/forms/authentication/login/LoginForm";

const LoginPage = () => {
	
	return (
		<div className="flex flex-col h-[90vh] items-center justify-center">
			<div className="flex flex-col items-center text-center gap-2 mb-2">
				<h1 className="text-4xl font-bold">Log in to your account</h1>
				<p>Welcome back! Please enter your details.</p>
			</div>
			<div className="w-1/2">
				<LoginForm/>
			</div>
		</div>
	);
}

export default LoginPage;