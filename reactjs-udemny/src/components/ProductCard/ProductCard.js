import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
	return (
		<figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-5">
			<Link to={`/product/${props.product.id}`}>
				<h1 className="text-lg font-semibold mb-3 text-center">
					{props.product.name} - {props.product.material}
				</h1>

				<img
					className="w-32 h-32 md:w-48 md:h-auto mx-auto"
					src={props.product?.images[0].imageUrl}
					alt="product"
				/>
				<div className="pt-3 md:p-2 text-center md:text-left space-y-2">
					<figcaption className="font-medium">
						<span className="text-cyan-600">
							${props.product.price} -{" "}
						</span>
						<span className="text-gray-500">
							{props.product.description}
						</span>
					</figcaption>
				</div>
			</Link>
		</figure>
	);
}

export default ProductCard;
