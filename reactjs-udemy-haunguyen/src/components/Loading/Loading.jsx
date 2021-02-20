import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function Loading() {
	return (
		<div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
			<span
				className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
				style={{ top: "50%" }}
			>
				<FontAwesomeIcon icon={faCircleNotch} size="5x" spin />
			</span>
		</div>
	);
}

export default Loading;
