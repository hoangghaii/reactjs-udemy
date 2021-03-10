import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import ProductItemLoading from "../ProductItemLoading/ProductItemLoading";
import cocktailApi from "./../../../apis/cocktailApi";

function ProductList(props) {
	const [state, setState] = useState({
		dataProduct: null,
		loading: true,
	});
	const [dataProductOriginal, setDataProductOriginal] = useState();

	const sliderIndex = useSelector((state) => state.slider.current);
	const keywordParam = sliderIndex.payload || "Ordinary Drink";

	useEffect(() => {
		(async () => {
			const params = { c: keywordParam };

			const dataFetched = await cocktailApi.filterBy(params);
			setState({
				dataProduct: dataFetched.data.drinks.slice(0, 6),
				loading: false,
			});

			setDataProductOriginal(dataFetched.data.drinks);
		})();
	}, [keywordParam, sliderIndex]);

	let content = "";

	if (state.loading) {
		const dataMock = ["1", "2", "3", "4", "5", "6"];
		content = dataMock.map((index) => <ProductItemLoading key={index} />);
	} else if (state.dataProduct && typeof state.dataProduct !== "string") {
		content = state.dataProduct.map((data, index) => (
			<ProductItem key={index} data={data} />
		));
	}

	return <Fragment>{content}</Fragment>;
}

ProductList.propTypes = {};

export default ProductList;
