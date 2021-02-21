import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFoundPage from "./../../components/NotFoundPage/NotFoundPage";
import ProductCard from "./components/ProductCard/ProductCard";
import Product from "./pages/Product";

function ProductIndex() {
	const match = useRouteMatch();
	return (
		<Switch>
			<Route exact path={match.path} component={Product} />
			<Route path={`${match.path}/:id`} component={ProductCard} />

			<Route component={NotFoundPage} />
		</Switch>
	);
}

export default ProductIndex;
