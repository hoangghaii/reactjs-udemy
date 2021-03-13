import React from "react";
import PropTypes from "prop-types";
import classes from "./BuildControl.css";

function BuildControl(props) {
	const { label, handleRemoveIngredient, handleAddIngredient } = props;

	const handleLessIng = (label) => {
		if (!handleRemoveIngredient) return;
		handleRemoveIngredient(label);
	};

	const handleMoreIng = (label) => {
		if (!handleAddIngredient) return;
		handleAddIngredient(label);
	};

	return (
		<div className={classes.BuildControl}>
			<div className={classes.Label}>{label}</div>
			<button
				className={classes.Less}
				onClick={() => handleLessIng(label)}
			>
				Less
			</button>
			<button
				className={classes.More}
				onClick={() => handleMoreIng(label)}
			>
				More
			</button>
		</div>
	);
}

BuildControl.propTypes = {
	label: PropTypes.string,
	handleRemoveIngredient: PropTypes.func,
	handleAddIngredient: PropTypes.func,
};

BuildControl.defaultProps = {
	label: "",
	handleRemoveIngredient: null,
	handleAddIngredient: null,
};

export default BuildControl;
