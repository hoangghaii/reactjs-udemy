import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./counterSlice";

function Counter(props) {
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();

	const handleIncrease = () => {
		const action = increase(); //action creator
		dispatch(action);
	};
	const handleDecrease = () => {
		const action = decrease(); //action creator
		dispatch(action);
	};

	return (
		<div className="p-20 text-center">
			<div className="relative w-60 mx-auto bg-blue-500 text-white p-6 rounded text-2xl font-bold overflow-visible">
				<button
					className="absolute top-1/4 -left-6 -mr-4 px-3.5 py-1 bg-red-500 rounded-full"
					onClick={handleDecrease}
				>
					-
				</button>
				Count: {count}
				<button
					className="absolute top-1/4 -right-6 -ml-4 px-3.5 py-1 bg-red-500 rounded-full"
					onClick={handleIncrease}
				>
					+
				</button>
			</div>
		</div>
	);
}

Counter.propTypes = {};

export default Counter;
