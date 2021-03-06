import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
// import { toast } from "react-toastify";
import Spinner from "../../components/UI/Spinner/Spinner";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import burgerApi from "./../../apis/burgerApi";
import withErrorHandle from "./../../hoc/WithErrorHandle/WithErrorHandle";

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		purchasable: false,
		purchasing: false,
		loading: false,
	};

	async componentDidMount() {
		const initIngredients = await burgerApi.getIngredients();
		this.setState({ ingredients: initIngredients.data });
	}

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
		this.setState({ loading: true });

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
		if (dataRespond.status === 200) {
			this.setState({ loading: false, purchasing: false });
		} else {
			this.setState({ loading: false, purchasing: false });
		}
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary;
		if (this.state.loading) {
			orderSummary = <Spinner />;
		} else if (this.state.ingredients) {
			orderSummary = (
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
			);
		}

		let burger = <Spinner />;
		if (this.state.ingredients) {
			burger = (
				<Aux>
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

		return (
			<Aux>
				{orderSummary}
				{burger}
			</Aux>
		);
	}
}

export default withErrorHandle(BurgerBuilder);
