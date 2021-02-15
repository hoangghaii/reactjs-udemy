import React, { useState } from "react";

function CounterExample() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1
				onClick={() => {
					if (count >= 1) {
						setCount(count - 1);
					}
				}}
			>
				Minus
			</h1>
			<h1>{count}</h1>
			<h1 onClick={() => setCount(count + 1)}>Plus</h1>
		</div>
	);
}

export default CounterExample;
