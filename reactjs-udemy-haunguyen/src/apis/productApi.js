import axiosClient from "./axiosClient";

const productApi = {
	async getAll(params) {
		const url = "/products";
		try {
			const respon = await axiosClient.get(url, { params });
			return respon;
		} catch (error) {
			return error;
		}
	},

	async get(id) {
		const url = `/products/${id}`;
		try {
			const respon = await axiosClient.get(url);
			return respon;
		} catch (error) {
			return error;
		}
	},

	async add(data) {
		const url = `/products`;
		try {
			const respon = await axiosClient.post(url, data);
			return respon;
		} catch (error) {
			return error;
		}
	},

	async update(data) {
		const url = `/products/${data.id}`;
		try {
			const respon = await axiosClient.patch(url, data);
			return respon;
		} catch (error) {
			return error;
		}
	},

	async remove(id) {
		const url = `/products/${id}`;
		try {
			const respon = await axiosClient.delete(url);
			return respon;
		} catch (error) {
			return error;
		}
	},
};

export default productApi;
