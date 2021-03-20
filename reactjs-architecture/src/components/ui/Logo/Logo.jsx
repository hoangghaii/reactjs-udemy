import anime from "animejs";
import React, { useEffect } from "react";

function Logo(props) {
	const animation1 = () => {
		anime({
			targets: "path",
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: "easeInOutSine",
			duration: 4000,
			delay: function (el, i) {
				return i * 250;
			},
			direction: "alternate",
			loop: true,
		});
	};

	useEffect(() => {
		animation1();
	}, []);

	return (
		<svg
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width="600px"
			height="600px"
			viewBox="0 0 930.000000 930.000000"
			preserveAspectRatio="xMidYMid meet"
		>
			<g
				transform="translate(0.000000,930.000000) scale(0.100000,-0.100000)"
				fill="none"
				stroke="none"
			>
				<path
					fill="nonw"
					stroke="#c8a891"
					strokeWidth="50"
					d="M3360 4650 l0 -1290 1290 0 1290 0 0 350 0 350 -975 0 -975 0 0 -210
                  0 -210 -175 0 -175 0 0 1010 0 1010 1010 0 1010 0 0 -135 0 -135 -500 0 -500
                  0 0 -265 0 -265 140 0 140 0 0 130 0 130 500 0 500 0 0 410 0 410 -1290 0
                  -1290 0 0 -1290z m2298 -937 l3 -73 -696 0 -695 0 0 68 c0 38 3 72 7 75 3 4
                  315 6 692 5 l686 -3 3 -72z"
				/>

				<path
					fill="nonw"
					stroke="#c8a891"
					strokeWidth="50"
					d="M4330 4465 l0 -265 138 0 137 0 -3 125 -3 125 668 2 668 3 3 138 3
                  137 -806 0 -805 0 0 -265z"
				/>
			</g>
		</svg>
	);
}

Logo.propTypes = {};

export default Logo;
