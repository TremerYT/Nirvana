import "./globals.css";
import React from "react";
import PageLayout from "../../components/PageLayout";


type LayoutProps = {
	children: React.ReactNode;
}

const RootLayout = ({children}: LayoutProps) => {
	return (
		<html lang="en">
		<body>
		<PageLayout>{children}</PageLayout>
		</body>
		</html>
	);
}

export default RootLayout;