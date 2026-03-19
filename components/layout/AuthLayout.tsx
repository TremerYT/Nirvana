import React, {ReactNode} from "react";

type AuthLayoutProps = {
	children: ReactNode
}
const AuthLayout = ({children}: AuthLayoutProps) => {
	return (
		<div className="min-h-screen w-full flex">
			<div className="hidden lg:flex lg:w-1/2 relative bg-linear-to-br from-purple-600 to-purple-200">
				<div
					className="absolute inset-0 bg-[url('/login.jpeg')] bg-cover bg-center bg-no-repeat opacity-30"
				/>
				<div className="relative z-10 flex flex-col justify-between h-full p-12 text-white">
					<div>
						<h1 className="text-5xl font-bold">Nirvana</h1>
					</div>
					<div className="flex items-center justify-center">
						<div>
							<p className="text-5xl font-light mb-4">
								Simplify The Complexities Of<br/> Your business
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex w-full lg:w-1/2 bg-white py-30 justify-center p-8">
				<div className="w-full">
					{children}
				</div>
			</div>
		</div>
	)
}
export default AuthLayout;
