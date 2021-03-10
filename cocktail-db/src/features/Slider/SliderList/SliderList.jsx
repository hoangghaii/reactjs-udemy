import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SliderItem from "../SliderItem/SliderItem";
import { setSliceIndex } from "../sliderSlice";
import cocktailApi from "./../../../apis/cocktailApi";

function SliderList(props) {
	const dispatch = useDispatch();

	const [dataSlider, setDataSlider] = useState(null);

	const sliderSelected = useSelector((state) => state.slider.current);

	useEffect(() => {
		(async () => {
			const dataFetched = await cocktailApi.getAllCategory();
			setDataSlider(dataFetched.data.drinks);

			let action;

			if (!sliderSelected) {
				action = setSliceIndex(dataFetched.data.drinks[0].strCategory);
			} else {
				action = setSliceIndex(sliderSelected.payload);
			}

			dispatch(action);
		})();
	}, [dispatch, sliderSelected]);

	const handleSetSliceIdx = (data) => {
		const action = setSliceIndex(data.strCategory);

		dispatch(action);
	};

	return (
		<div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-0 mt-12">
			{dataSlider &&
				dataSlider.map((data, index) => (
					<SliderItem
						key={index}
						data={data}
						handleSetSliceIdx={() => handleSetSliceIdx(data)}
					/>
				))}
		</div>
	);
}

SliderList.propTypes = {};

export default SliderList;
