import React from "react";

import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useAxiosGet } from "../../hooks/HttpRequests";

function Home() {
	const url = `https://6029ccb86c995100176edae5.mockapi.io/products?page=1&limit=10`;

	let content = null;

	let products = useAxiosGet(url);

	if (products.loading) {
		content = <Loader />;
	}

	if (products.error) {
		content = <p>There was an error please refresh or try again later!</p>;
	}

	if (products.data) {
		content = products.data.map((product, index, products) => (
			<ProductCard product={product} key={index} />
		));
	}

	return (
		<div>
			<h1 className="font-bold text-2xl mb-3">Best Sellers</h1>

			{content}
		</div>
	);
}

export default Home;
