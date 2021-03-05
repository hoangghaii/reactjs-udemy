import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cocktailApi from "../../../apis/cocktailApi";

function ProductCard(props) {
	const id = useParams();

	const [dataProduct, setDataProduct] = useState();

	useEffect(() => {
		(async () => {
			const dataFetched = await cocktailApi.getDetail(id.id);
			setDataProduct(dataFetched.data.drinks[0]);
		})();
	}, [id]);

	const renderIngredient = () => {
		let str = "";
		for (let i = 1; i <= 15; i++) {
			let strIngredient = `strIngredient${i}`;
			if (dataProduct[strIngredient] !== null) {
				str += `${dataProduct[strIngredient]}, `;
			}
		}
		return str;
	};

	return (
		<div className="p-10 py-20">
			{dataProduct && (
				<div className="w-full rounded overflow-hidden shadow-lg">
					<img
						className="w-full h-96 object-cover object-center"
						src={dataProduct.strDrinkThumb}
						alt={dataProduct.strDrink}
					/>

					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">
							{dataProduct.strDrink}
						</div>
						<p className="text-gray-700 text-base">
							{dataProduct.strInstructions}
						</p>
					</div>

					<div className="px-6 py-4">
						<span className="font-bold text-xl">Ingredient: </span>
						<p className="text-gray-700 text-base">
							{renderIngredient()}
						</p>
					</div>

					<div className="px-6 pt-4 pb-2">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							{dataProduct.strCategory}
						</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							{dataProduct.strAlcoholic}
						</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							{dataProduct.strGlass}
						</span>
					</div>
				</div>
			)}
		</div>
	);
}

ProductCard.propTypes = {
	product: PropTypes.object,
};

ProductCard.defaultProps = {
	product: null,
};

export default ProductCard;
