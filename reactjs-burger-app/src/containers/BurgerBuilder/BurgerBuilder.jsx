import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "./../../Auxiliary/Auxiliary";
import burgerApi from "./../../apis/burgerApi";
import { toast } from "react-toastify";

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

class BurgerBuilder extends Component {
	// constructor(props) {
	//     super(props);
	//     this.state = {...}
	// }

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 4,
		purchasable: false,
		purchasing: false,
	};

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({ purchasable: sum > 0 });
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});
		this.updatePurchaseState(updatedIngredients);
	};

	purchaseHalder = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHalder = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinuelHalder = async () => {
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: "Max Schwarmuller",
				address: {
					street: "Test streeet 1",
					zipCode: "41351",
					country: "Germany",
				},
				email: "testemail@gmail.com",
			},
			deliveryMethod: "fastest",
		};

		const dataRespond = await burgerApi.purchaseBurger(order);
		console.log(dataRespond);
		if (dataRespond.status === 200) {
			toast.success(
				<div>
					<h4>Success!!!</h4>
					<p>You have purchase a Burger</p>
				</div>
			);
		} else {
			toast.error(
				<div>
					<h4>Error</h4>
					<p>Opps!! Something went wrong, pls try later</p>
				</div>
			);
		}
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		// {salad: true, meat: false, ...}
		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHalder}
				>
					<OrderSummary
						ingredients={this.state.ingredients}
						purchaseCanceled={this.purchaseCancelHalder}
						purchaseContinue={this.purchaseContinuelHalder}
						totalPrice={this.state.totalPrice}
					/>
				</Modal>

				<Burger ingredients={this.state.ingredients} />

				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					purchasable={this.state.purchasable}
					ordered={this.purchaseHalder}
					price={this.state.totalPrice}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
