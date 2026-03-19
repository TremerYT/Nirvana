import React, {ReactNode} from "react";
import AuthLayout from "../../../components/layout/AuthLayout";

type AuthRouteLayoutProps = {
	children: ReactNode;
};

const AuthRouteLayout = ({children}: AuthRouteLayoutProps) => {
	return <AuthLayout>{children}</AuthLayout>;
};

export default AuthRouteLayout;