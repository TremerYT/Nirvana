export const getGreeting = () => {
	const hour = new Date().getHours();
	return hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening";
};

export const parseValue = (value: string | number | undefined) => {
	const num = typeof value === "string" ? parseFloat(value) : value;
	return isNaN(num as number) ? 0 : num ?? 0;
};

export const generateProductCode = (): string => {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	const randomNumber = Math.floor(Math.random() * 1000);
	return `${year}${month}${day}${randomNumber}`;
}