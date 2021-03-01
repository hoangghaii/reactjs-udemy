import React from "react";
import PropTypes from "prop-types";
import ProductList from "./ProductList/ProductList";

function Product(props) {
	return (
		<div className="mt-12 grid grid-cols-3 gap-10">
			<ProductList />
		</div>
	);
}

Product.propTypes = {};

export default Product;
