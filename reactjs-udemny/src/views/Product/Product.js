import React from "react";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "./../../hooks/HttpRequests";

import Loader from "../../components/Loader/Loader";

function Product() {
	const { id } = useParams();
	const url = `https://6029ccb86c995100176edae5.mockapi.io/products/${id}`;

	let content = null;

	let product = useAxiosGet(url);

	if (product.loading) {
		content = <Loader />;
	}

	if (product.error) {
		content = <p>There was an error please refresh or try again later!</p>;
	}

	if (product.data) {
		content = (
			<div>
				<h1>The product page</h1>
				<figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
					<h1 className="text-lg font-semibold mb-3 text-center">
						{product.data.name} - {product.data.material}
					</h1>

					<img
						className="w-32 h-32 md:w-48 md:h-auto mx-auto"
						src={product.data?.images[0].imageUrl}
						alt="product"
					/>
					<div className="pt-3 md:p-2 text-center md:text-left space-y-2">
						<figcaption className="font-medium">
							<span className="text-cyan-600">
								${product.data.price} -{" "}
							</span>
							<span className="text-gray-500">
								{product.data.description}
							</span>
						</figcaption>
					</div>
				</figure>
			</div>
		);
	}

	return <div>{content}</div>;
}

export default Product;
