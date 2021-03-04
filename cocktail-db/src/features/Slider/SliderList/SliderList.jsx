import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SliderItem from "../SliderItem/SliderItem";
import { setSliceIndex } from "../sliderSlice";
import cocktailApi from "./../../../apis/cocktailApi";

function SliderList(props) {
	const dispatch = useDispatch();

	const [dataSlider, setDataSlider] = useState(null);

	useEffect(() => {
		(async () => {
			const dataFetched = await cocktailApi.getAllCategory();
			setDataSlider(dataFetched.data.drinks.slice(0, 11));

			dispatch(setSliceIndex(dataFetched.data.drinks[0].strCategory));
		})();
	}, []);

	const handleSetSliceIdx = (data) => {
		const action = setSliceIndex(data.strCategory);

		dispatch(action);
	};

	return (
		<div className="grid grid-cols-9 md:grid-cols-12 gap-6 md:gap-0 mt-12">
			{dataSlider &&
				dataSlider.map((data, index) => (
					<SliderItem
						key={index}
						data={data}
						handleSetSliceIdx={() => handleSetSliceIdx(data)}
					/>
				))}

			<button className="h-10 rounded-lg self-center hover:shadow-xl flex justify-center items-center bg-gray-100 p-3 ml-auto">
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
		</div>
	);
}

SliderList.propTypes = {};

export default SliderList;
