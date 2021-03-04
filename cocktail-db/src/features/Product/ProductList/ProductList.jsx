import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import cocktailApi from "./../../../apis/cocktailApi";

function ProductList(props) {
	const [dataProduct, setDataProduct] = useState();
	const [dataProductOriginal, setDataProductOriginal] = useState();

	const sliderIndex = useSelector((state) => state.slider.value);

	useEffect(() => {
		(async () => {
			const params = { c: sliderIndex.payload };
			const dataFetched = await cocktailApi.filterBy(params);
			setDataProduct(dataFetched.data.drinks.slice(0, 6));
			setDataProductOriginal(dataFetched.data.drinks);
		})();
	}, [sliderIndex]);

	return (
		<Fragment>
			{dataProduct !== "Non" &&
				dataProduct.map((data, index) => (
					<ProductItem key={index} data={data} />
				))}
		</Fragment>
	);
}

ProductList.propTypes = {};

export default ProductList;
