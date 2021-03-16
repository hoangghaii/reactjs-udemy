import axiosClient from "./axiosClient";

const burgerApi = {
	async getAllPopular() {
		const url = "popular.php";
		try {
			return await axiosClient.get(url);
		} catch (error) {
			return error;
		}
	},

	async purchaseBurger(data) {
		const url = "/order.json";
		try {
			return await axiosClient.post(url, data);
		} catch (error) {
			return error;
		}
	},
};

export default burgerApi;
