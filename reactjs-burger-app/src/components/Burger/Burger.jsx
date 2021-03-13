import PropTypes from "prop-types";
import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

function Burger(props) {
	const { ingredient } = props;

	let transformdIngredient = Object.keys(ingredient)
		.map((igKey) => {
			return [...Array(ingredient[igKey])].map((_, i) => {
				return <BurgerIngredient type={igKey} key={igKey + i} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	// console.log(transformdIngredient);

	if (transformdIngredient.length === 0) {
		transformdIngredient = <p>Please adding ingredients!</p>;
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />

			{transformdIngredient}

			<BurgerIngredient type="bread-bottom" />
		</div>
	);
}

Burger.propTypes = {
	ingredient: PropTypes.object,
};

Burger.defaultProps = {
	ingredient: null,
};

export default Burger;
