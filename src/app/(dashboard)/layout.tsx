import React from "react";
import PageLayout from "../../../components/layout/PageLayout";

type LayoutProps = {
	children: React.ReactNode;
}

const RootLayout = ({children}: LayoutProps) => {
	return <PageLayout>{children}</PageLayout>
}

export default RootLayout;