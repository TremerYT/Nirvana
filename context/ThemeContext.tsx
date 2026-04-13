"use client";

import React, {createContext, useContext, useState} from 'react';
import {ConfigProvider} from 'antd';
import {darkTheme, lightTheme} from "@/app/theme";

const ThemeContext = createContext({
	isDark: false,
	toggle: () => {
	},
});

export const ThemeProvider = ({children}: { children: React.ReactNode }) => {
	const [isDark, setIsDark] = useState(() => {
		if (typeof window !== 'undefined') {
			const savedTheme = localStorage.getItem('theme');
			return savedTheme === 'dark';
		}
		return false;
	});
	
	const toggle = () => {
		const next = !isDark;
		setIsDark(next);
		localStorage.setItem('theme', next ? 'dark' : 'light');
	};
	
	return (
		<ThemeContext.Provider value={{isDark, toggle}}>
			<ConfigProvider theme={isDark ? darkTheme : lightTheme}>
				{children}
			</ConfigProvider>
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => useContext(ThemeContext);