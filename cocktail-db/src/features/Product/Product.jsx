import React, { Fragment } from "react";
import ProductList from "./ProductList/ProductList";

function Product(props) {
	return (
		<Fragment>
			<div className="mt-12 grid grid-cols-6 gap-10">
				<ProductList />
			</div>
		</Fragment>
	);
}

Product.propTypes = {};

export default Product;
