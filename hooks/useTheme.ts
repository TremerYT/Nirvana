import {useEffect} from 'react'
import {useThemeContext} from "../context/ThemeContext";

export function useTheme() {
	const {isDark, toggle} = useThemeContext()
	
	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		if (!localStorage.getItem('theme') && mediaQuery.matches) {
			toggle()
		}
	}, [toggle])
	
	return {isDark, toggle}
}