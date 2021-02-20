import PropTypes from "prop-types";
import React from "react";
import LazyLoad from "react-lazyload";
import ProductItem from "../ProductItem/ProductItem";
import Loading from "./../../../../components/Loading/Loading";

function ProductList(props) {
	const { productList } = props;

	return (
		<section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
			{productList.map((product, index) => (
				<LazyLoad
					key={index}
					height={100}
					offset={[-100, 100]}
					placeholder={<Loading />}
				>
					<ProductItem key={index} product={product} />
				</LazyLoad>
			))}
		</section>
	);
}

ProductList.propTypes = {
	productList: PropTypes.array.isRequired,
};

export default ProductList;
