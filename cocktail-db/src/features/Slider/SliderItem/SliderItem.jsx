import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

function SliderItem(props) {
	const { data, handleSetSliceIdx } = props;

	const handleSetIndex = () => {
		if (!handleSetSliceIdx) return;
		handleSetSliceIdx();
	};

	const sliderSelected = useSelector((state) => state.slider.current);

	let css =
		"border rounded-full p-2 flex flex-col items-center shadow-xl cursor-pointer transition-colors duration-700 ease-in-out";
	if (sliderSelected.payload === data.strCategory) {
		css += " text-white bg-orange-600";
	}

	return (
		<div
			className={css}
			style={{ width: "65.55px" }}
			onClick={handleSetIndex}
		>
			<div className="border rounded-full p-2 bg-white">
				<img
					className="h-12 w-12"
					alt="cocktail drink"
					src={process.env.PUBLIC_URL + "/assets/martini.svg"}
				/>
			</div>
			<p className="mt-3 mb-10 font-bold text-xs">{data.strCategory}</p>
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
