import { motion } from "framer-motion";
import React from "react";

function LogoMobile(props) {
	const icon = {
		hidden: {
			pathLength: 0,
			fill: "rgba(0, 0, 0, 0)",
		},
		visible: {
			pathLength: 1,
			fill: "rgba(0, 0, 0, 1)",
		},
	};

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30px"
			height="30px"
			viewBox="0 0 260.000000 260.000000"
		>
			<motion.g transform="translate(0.000000,260.000000) scale(0.100000,-0.100000)">
				<motion.path
					d="M15 2578 c-3 -7 -4 -587 -3 -1288 l3 -1275 1285 0 1285 0 3 348 2
                  347 -975 0 -975 0 0 -210 0 -210 -175 0 -175 0 0 1010 0 1010 1010 0 1010 0 0
                  -135 0 -135 -500 0 -500 0 0 -265 0 -265 140 0 140 0 0 130 0 130 500 0 500 0
                  -2 408 -3 407 -1283 3 c-1021 2 -1284 0 -1287 -10z m2293 -2215 l3 -73 -696 0
                  -695 0 0 68 c0 38 3 72 7 75 3 4 315 6 692 5 l686 -3 3 -72z"
					variants={icon}
					initial="hidden"
					animate="visible"
				/>
				<motion.path
					d="M980 1115 l0 -265 138 0 137 0 -3 125 -3 125 668 2 668 3 3 138 3
                  137 -806 0 -805 0 0 -265z"
					variants={icon}
					initial="hidden"
					animate="visible"
				/>
			</motion.g>
		</svg>
	);
}

LogoMobile.propTypes = {};

export default LogoMobile;
