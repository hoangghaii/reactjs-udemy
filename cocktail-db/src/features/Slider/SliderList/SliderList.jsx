import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import cocktailApi from "./../../../apis/cocktailApi";
import SliderItem from "../SliderItem/SliderItem";
import { useSelector, useDispatch } from "react-redux";
import { setSliceIndex } from "../sliderSlice";
import usePrevious from "./../../../hooks/usePrevious";

function SliderList(props) {
	// const { dataSlider } = props;
	// console.log(dataSlider);
	const [dataSlider, setDataSlider] = useState("");

	// const prevData = usePrevious(dataSlider);
	// console.log(prevData);

	useEffect(() => {
		(async () => {
			const dataSlider = await cocktailApi.getAllCategory();
			setDataSlider(dataSlider.data.drinks);
		})();
	}, []);

	// setDataSlider(dataSlider.data.drinks);

	console.log(dataSlider);

	const sliderIndex = useSelector((state) => state.slider.value);
	const dispatch = useDispatch();

	const handleSetSliceIdx = (index) => {
		dispatch(setSliceIndex(index));
	};

	let content;
	if (dataSlider) {
		content = dataSlider.map((data, index) => (
			<SliderItem
				key={index}
				data={data}
				onClick={handleSetSliceIdx(index)}
			/>
		));
	}

	return (
		<Fragment>
			{/* {prevData && (
				<div className="grid grid-cols-9 md:grid-cols-12 gap-6 md:gap-0 mt-12">
					{content}

					<button className="h-10 rounded-lg self-center hover:shadow-xl flex justify-center items-center bg-gray-100 p-3 ml-auto">
						<FontAwesomeIcon icon={faChevronRight} />
					</button>
				</div>
			)} */}
		</Fragment>
	);
}

SliderList.propTypes = {};

export default SliderList;
