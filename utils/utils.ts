export const getGreeting = () => {
	const hour = new Date().getHours();
	return hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening";
};

export const parseValue = (value: string | number | undefined) => {
	const num = typeof value === "string" ? parseFloat(value) : value;
	return isNaN(num as number) ? 0 : num ?? 0;
};

