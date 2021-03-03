import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import cocktailApi from "./../../../apis/cocktailApi";
import BannerItem from "../BannerItem/BannerItem";

function BannerSlider(props) {
	const [dataBanner, setDataBanner] = useState("");
	const [dataSlider, setDataSlider] = useState(null);

	useEffect(() => {
		(async () => {
			const dataBanner = await cocktailApi.getAllPopular();
			setDataBanner(dataBanner.data.drinks.slice(0, 1));
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const data = await cocktailApi.getAllCategory();
			setDataSlider(data.data.drinks);
			// setDataSlider(data.data.drinks);
		})();
	}, []);
	console.log(dataSlider);

	return (
		<Fragment>
			{dataBanner &&
				dataBanner.map((data, index) => (
					<BannerItem key={index} data={data} />
				))}
		</Fragment>
	);
}

BannerSlider.propTypes = {};

export default BannerSlider;
