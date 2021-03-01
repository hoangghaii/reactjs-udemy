import React from "react";
import PropTypes from "prop-types";

function SliderItem(props) {
	return (
		<div
			className=" border rounded-full p-2 flex flex-col items-center shadow-xl cursor-pointer transition-colors duration-700 ease-in-out"
			v-for="(cat, idx) in categories"
		>
			<div className="border rounded-full p-2 bg-white">
				<img className="h-12 w-12" alt="" />
			</div>
			<p className="mt-3 mb-10 font-bold  text-xs">
				{"{"}
				{"{"}cat.text{"}"}
				{"}"}
			</p>
		</div>
	);
}

SliderItem.propTypes = {};

export default SliderItem;
