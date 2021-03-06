import React, { Fragment, useEffect, useState } from "react";
import Loading from "../../../components/Loading/Loading";
import BannerItem from "../BannerItem/BannerItem";
import BannerLoading from "../BannerLoading/BannerLoading";
import cocktailApi from "./../../../apis/cocktailApi";

function BannerSlider(props) {
	const [state, setState] = useState({
		dataBanner: "",
		loading: true,
	});

	useEffect(() => {
		(async () => {
			const dataBanner = await cocktailApi.getRandomCockTail();
			setState({
				dataBanner: dataBanner.data.drinks.slice(0, 1),
				loading: false,
			});
		})();
	}, []);

	let content = "";
	if (state.loading) {
		content = <BannerLoading />;
	} else if (state.dataBanner) {
		const data = state.dataBanner;

		content = data.map((data, index) => (
			<BannerItem key={index} data={data} />
		));
	}

	return <Fragment>{content}</Fragment>;
}

BannerSlider.propTypes = {};

export default BannerSlider;
