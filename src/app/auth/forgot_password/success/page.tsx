"use client";

import {Button} from "antd";

const PasswordResetSuccess = () => {
	return (
		<div className="flex flex-col items-center text-center gap-2 mb-10 ">
			<h1 className="text-4xl font-bold">Password reset successful</h1>
			<p>Your password has been reset. Please log in with your new password.</p>
			<Button type="primary" onClick={() => window.location.href = "/auth/login"}>Log in</Button>
		</div>
	);
}

export default PasswordResetSuccess;