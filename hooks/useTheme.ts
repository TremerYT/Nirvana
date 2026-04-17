import {useThemeContext} from "../context/ThemeContext";

export function useTheme() {
	const {isDark, toggle} = useThemeContext()
	return {isDark, toggle}
}