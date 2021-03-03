import React from "react";
import PropTypes from "prop-types";

function SliderItem(props) {
	const { data } = props;

	const css =
		"border rounded-full p-2 flex flex-col items-center shadow-xl cursor-pointer transition-colors duration-700 ease-in-out";

	return (
		<div
			className="border rounded-full p-2 flex flex-col items-center shadow-xl cursor-pointer transition-colors duration-700 ease-in-out"
			style={{ width: "65.55px" }}
		>
			<div className="border rounded-full p-2 bg-white">
				<img
					className="h-12 w-12"
					alt="cocktail drink"
					src={process.env.PUBLIC_URL + "/assets/martini.svg"}
				/>
			</div>
			<p className="mt-3 mb-10 font-bold  text-xs">{data.strCategory}</p>
		</div>
	);
}

SliderItem.propTypes = {
	data: PropTypes.object,
};

SliderItem.defaultProps = {
	data: null,
};

export default SliderItem;
