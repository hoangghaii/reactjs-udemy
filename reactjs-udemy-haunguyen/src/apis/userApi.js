import axiosAuthClient from "./axiosAuthClient";

const userApi = {
	async getAll(params) {
		const url = "/users";
		try {
			const respon = await axiosAuthClient.get(url, { params });
			return respon;
		} catch (error) {
			return error;
		}
	},

	async get(id) {
		const url = `/users/${id}`;
		try {
			const respon = await axiosAuthClient.get(url);
			return respon;
		} catch (error) {
			return error;
		}
	},

	async register(data) {
		// const url = `/register`;
		const url = `/auth/local/register`;
		try {
			return await axiosAuthClient.post(url, data);
		} catch (error) {
			return error;
		}
	},

	async update(data) {
		const url = `/users/${data.id}`;
		try {
			const respon = await axiosAuthClient.put(url, data);
			return respon;
		} catch (error) {
			return error;
		}
	},

	async remove(id) {
		const url = `/users/${id}`;
		try {
			const respon = await axiosAuthClient.delete(url);
			return respon;
		} catch (error) {
			return error;
		}
	},
};

export default userApi;
