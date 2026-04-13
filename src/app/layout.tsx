import "./global.css";
import React from "react";
import {ThemeProvider} from "../../context/ThemeContext";


type LayoutProps = {
	children: React.ReactNode;
}

const RootLayout = ({children}: LayoutProps) => {
	return (
		<html lang="en" suppressHydrationWarning>
		<body suppressHydrationWarning>
		<ThemeProvider>
			{children}
		</ThemeProvider>
		</body>
		</html>
	);
}

export default RootLayout;