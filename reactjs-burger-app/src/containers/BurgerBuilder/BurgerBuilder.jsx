import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Aux from "../../Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
	salad: 0.5,
	bacon: 0.7,
	cheese: 0.4,
	meat: 1.3,
};

function BurgerBuilder(props) {
	const [ingredient, setIngredient] = useState({
		salad: 0,
		bacon: 0,
		cheese: 0,
		meat: 0,
	});

	const [price, setPrice] = useState(4);

	const handleRemoveIngredient = (type) => {
		const typeLower = type.toLowerCase();

		switch (typeLower) {
			case "salad":
				if (ingredient.salad === 0) return;
				else {
					setIngredient({
						...ingredient,
						salad: ingredient.salad - 1,
					});
					setPrice(price - INGREDIENT_PRICE.salad * ingredient.salad);
				}

				break;

			case "bacon":
				if (ingredient.bacon === 0) return;
				else {
					setIngredient({
						...ingredient,
						bacon: ingredient.bacon - 1,
					});
					setPrice(price - INGREDIENT_PRICE.bacon * ingredient.bacon);
				}

				break;

			case "cheese":
				if (ingredient.cheese === 0) return;
				else {
					setIngredient({
						...ingredient,
						cheese: ingredient.cheese - 1,
					});
					setPrice(
						price - INGREDIENT_PRICE.cheese * ingredient.cheese
					);
				}

				break;

			case "meat":
				if (ingredient.meat === 0) return;
				else {
					setIngredient({ ...ingredient, meat: ingredient.meat - 1 });
					setPrice(price - INGREDIENT_PRICE.meat * ingredient.meat);
				}

				break;

			default:
				break;
		}
	};

	const handleAddIngredient = (type) => {
		const typeLower = type.toLowerCase();

		switch (typeLower) {
			case "salad":
				setIngredient({ ...ingredient, salad: ingredient.salad + 1 });
				break;

			case "bacon":
				setIngredient({ ...ingredient, bacon: ingredient.bacon + 1 });
				break;

			case "cheese":
				setIngredient({ ...ingredient, cheese: ingredient.cheese + 1 });
				break;

			case "meat":
				setIngredient({ ...ingredient, meat: ingredient.meat + 1 });
				break;

			default:
				break;
		}
	};

	useEffect(() => {
		setPrice(
			4 +
				(INGREDIENT_PRICE.salad * ingredient.salad +
					INGREDIENT_PRICE.bacon * ingredient.bacon +
					INGREDIENT_PRICE.cheese * ingredient.cheese +
					INGREDIENT_PRICE.meat * ingredient.meat)
		);
	}, [ingredient]);

	return (
		<Aux>
			<Burger ingredient={ingredient} />

			<BuildControls
				price={price}
				handleRemoveIngredient={handleRemoveIngredient}
				handleAddIngredient={handleAddIngredient}
			/>
		</Aux>
	);
}

BurgerBuilder.propTypes = {};

export default BurgerBuilder;
