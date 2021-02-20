import { useEffect, useState } from "react";

export function useClock() {
	const [timeString, setTimeString] = useState("");

	useEffect(() => {
		const intervalTime = setInterval(() => {
			const now = new Date();

			let HH = now.getHours();
			HH = HH < 10 ? "0" + HH : HH;
			let MN = now.getMinutes();
			MN = MN < 10 ? "0" + MN : MN;
			let SC = now.getSeconds();
			SC = SC < 10 ? "0" + SC : SC;

			let AM = HH < 12 ? "AM" : "PM";

			setTimeString(HH + ":" + MN + ":" + SC + " " + AM);
		}, 1000);

		return () => {
			clearInterval(intervalTime);
		};
	}, []);

	return timeString;
}
