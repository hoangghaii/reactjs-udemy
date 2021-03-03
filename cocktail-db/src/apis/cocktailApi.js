import axiosClient from "./axiosClient";

const cocktailApi = {
	async getAllPopular() {
		const url = "popular.php";
		try {
			return await axiosClient.get(url);
		} catch (error) {
			return error;
		}
	},

	async getAllCategory() {
		const params = { c: "list" };
		const url = "list.php";
		try {
			return await axiosClient.get(url, { params });
		} catch (error) {
			return error;
		}
	},

	async filterBy(data) {
		const params = { i: data };
		const url = `filter.php`;
		try {
			return await axiosClient.get(url, { params });
		} catch (error) {
			return error;
		}
	},

	async search(params) {
		const url = "earch.php";
		try {
			return await axiosClient.get(url, { params });
		} catch (error) {
			return error;
		}
	},
};

export default cocktailApi;
