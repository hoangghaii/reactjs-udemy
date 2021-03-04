import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ProductList from "./ProductList/ProductList";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";

function Product(props) {
	const match = useRouteMatch();
	console.log(match);

	return (
		<Fragment>
			<div className="mt-12 grid grid-cols-6 gap-10">
				<ProductList />
			</div>

			<Switch>
				<Route
					path={`${match.path}/:name`}
					// path={`/:name`}
					component={ProductCard}
				/>
			</Switch>
		</Fragment>
	);
}

Product.propTypes = {};

export default Product;
