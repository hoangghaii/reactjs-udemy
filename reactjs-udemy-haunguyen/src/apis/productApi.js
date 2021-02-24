import axiosClient from "./axiosClient";

const productApi = {
	async getAll(params) {
		const url = "/products";
		try {
			return await axiosClient.get(url, { params });
		} catch (error) {
			return error;
		}
	},

	async get(id) {
		const url = `/products/${id}`;
		try {
			return await axiosClient.get(url);
		} catch (error) {
			return error;
		}
	},

	async add(data) {
		const url = `/products`;
		try {
			return await axiosClient.post(url, data);
		} catch (error) {
			return error;
		}
	},

	async update(data) {
		const url = `/products/${data.id}`;
		try {
			return await axiosClient.patch(url, data);
		} catch (error) {
			return error;
		}
	},

	async remove(id) {
		const url = `/products/${id}`;
		try {
			return await axiosClient.delete(url);
		} catch (error) {
			return error;
		}
	},
};

export default productApi;
