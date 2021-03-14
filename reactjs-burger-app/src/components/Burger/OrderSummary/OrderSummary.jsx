import PropTypes from "prop-types";
import React from "react";
import Aux from "../../../Auxiliary/Auxiliary";
import Button from "./../../UI/Button/Button";

function OrderSummary(props) {
	const {
		ingredients,
		purchaseCanceled,
		purchaseContinue,
		totalPrice,
	} = props;

	const ingredientSummary = Object.keys(ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: "capitalize" }}>
					{igKey}: {ingredients[igKey]}
				</span>
			</li>
		);
	});

	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientSummary}</ul>

			<p>
				<strong>Total Price: {totalPrice.toFixed(2)}</strong>
			</p>

			<p>Continue to Checkout?</p>

			<Button buttonType={"Danger"} clicked={purchaseCanceled}>
				CANCEL
			</Button>
			<Button buttonType={"Success"} clicked={purchaseContinue}>
				CONTINUE
			</Button>
		</Aux>
	);
}

OrderSummary.propTypes = {
	ingredients: PropTypes.object,
	purchaseCanceled: PropTypes.func,
	purchaseContinue: PropTypes.func,
	totalPrice: PropTypes.number,
};

export default OrderSummary;
