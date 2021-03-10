import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import cocktailApi from "../../../apis/cocktailApi";
import ProductCardLoading from "./ProductCardLoading";

function ProductCard(props) {
	const id = useParams();

	const [state, setState] = useState({
		loading: true,
		dataProduct: "",
	});

	useEffect(() => {
		(async () => {
			const dataFetched = await cocktailApi.getDetail(id.id);
			setState({
				loading: false,
				dataProduct: dataFetched.data.drinks[0],
			});
		})();
	}, [id]);

	const renderIngredient = () => {
		let str = "";
		for (let i = 1; i <= 15; i++) {
			let strIngredient = `strIngredient${i}`;
			if (state.dataProduct[strIngredient] !== null) {
				str += `${state.dataProduct[strIngredient]}, `;
			}
		}
		return str;
	};

	let content = "";
	if (state.loading) {
		content = <ProductCardLoading />;
	} else if (state.dataProduct) {
		const data = state.dataProduct;
		content = (
			<div className="py-20">
				{data && (
					<div className="w-full rounded overflow-hidden shadow-lg">
						<div className="px-5 py-4">
							<img
								className="w-full h-96 object-cover object-center"
								src={data.strDrinkThumb}
								alt={data.strDrink}
							/>
						</div>

						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">
								{data.strDrink}
							</div>
							<p className="text-gray-700 text-base">
								{data.strInstructions}
							</p>
						</div>

						<div className="px-6 py-4">
							<span className="font-bold text-xl">
								Ingredient:{" "}
							</span>
							<p className="text-gray-700 text-base">
								{renderIngredient()}
							</p>
						</div>

						<div className="px-6 pt-4 pb-2">
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
								{data.strCategory}
							</span>
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
								{data.strAlcoholic}
							</span>
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
								{data.strGlass}
							</span>
						</div>
					</div>
				)}
			</div>
		);
	}

	return <Fragment>{content}</Fragment>;
}

ProductCard.propTypes = {
	product: PropTypes.object,
};

ProductCard.defaultProps = {
	product: null,
};

export default ProductCard;
