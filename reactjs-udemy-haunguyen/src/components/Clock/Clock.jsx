import React from "react";
import "./Clock.scss";
import { useClock } from "./../../hooks/Clock";

function Clock() {
	let timeString = useClock();

	return (
		<div className="clock">
			<p className="time">{timeString}</p>
		</div>
	);
}

export default Clock;
