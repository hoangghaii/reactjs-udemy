import { useEffect, useState } from "react";

export function useRandomColor() {
	const [randomColor, setRandomColor] = useState("ffffff");

	useEffect(() => {
		const intervalRef = setInterval(() => {
			const color = Math.floor(Math.random() * 16777215).toString(16);
			setRandomColor(color);
		}, 2000);

		return () => {
			clearInterval(intervalRef);
		};
	}, []);
	return "#" + randomColor;
}
