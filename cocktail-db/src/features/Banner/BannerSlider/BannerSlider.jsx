import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import cocktailApi from "./../../../apis/cocktailApi";
import BannerItem from "../BannerItem/BannerItem";

function BannerSlider(props) {
	const [dataBanner, setDataBanner] = useState("");

	useEffect(() => {
		(async () => {
			const dataBanner = await cocktailApi.getRandomCockTail();
			setDataBanner(dataBanner.data.drinks.slice(0, 1));
		})();
	}, []);

	useEffect(() => {
		const randomCockTail = setInterval(() => {
			(async () => {
				const dataBanner = await cocktailApi.getRandomCockTail();
				setDataBanner(dataBanner.data.drinks.slice(0, 1));
			})();
		}, 10000);
		return () => {
			clearInterval(randomCockTail);
		};
	}, []);

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
