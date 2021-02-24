import axiosClient from "./axiosClient";

const userApi = {
	async getAll(params) {
		const url = "/users";
		try {
			const respon = await axiosClient.get(url, { params });
			return respon;
		} catch (error) {
			return error;
		}
	},

	async get(id) {
		const url = `/users/${id}`;
		try {
			const respon = await axiosClient.get(url);
			return respon;
		} catch (error) {
			return error;
		}
	},

	async register(data) {
		const url = `/users`;
		try {
			return await axiosClient.post(url, data);
		} catch (error) {
			return error;
		}
	},

	async update(data) {
		const url = `/users/${data.id}`;
		try {
			const respon = await axiosClient.put(url, data);
			return respon;
		} catch (error) {
			return error;
		}
	},

	async remove(id) {
		const url = `/users/${id}`;
		try {
			const respon = await axiosClient.delete(url);
			return respon;
		} catch (error) {
			return error;
		}
	},
};

export default userApi;
