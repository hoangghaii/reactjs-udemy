import React from "react";
import PropTypes from "prop-types";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" },
];

function BuildControls(props) {
	const { price, handleRemoveIngredient, handleAddIngredient } = props;

	const onRemoveIngredient = (type) => {
		if (!handleRemoveIngredient) return;
		handleRemoveIngredient(type);
	};

	const onAddIngredient = (type) => {
		if (!handleAddIngredient) return;
		handleAddIngredient(type);
	};

	return (
		<div className={classes.BuildControls}>
			<p>{price}</p>

			{controls.map((control) => (
				<BuildControl
					key={control.type}
					label={control.label}
					handleRemoveIngredient={onRemoveIngredient}
					handleAddIngredient={onAddIngredient}
				/>
			))}

			<button>ORDER NOW: </button>
		</div>
	);
}

BuildControls.propTypes = {
	price: PropTypes.number,
	handleRemoveIngredient: PropTypes.func,
	handleAddIngredient: PropTypes.func,
};

BuildControls.defaultProps = {
	handleRemoveIngredient: null,
	handleAddIngredient: null,
};

export default BuildControls;
