import axiosClient from "./axiosClient";

const todoApi = {
	async getAll(params) {
		const url = "/todo";
		try {
			const respon = await axiosClient.get(url, { params });
			return respon;
		} catch (error) {
			return error;
		}
	},

	async get(id) {
		const url = `/todo/${id}`;
		try {
			const respon = await axiosClient.get(url);
			return respon;
		} catch (error) {
			return error;
		}
	},

	async add(data) {
		const url = `/todo`;
		try {
			const respon = await axiosClient.post(url, data);
			return respon;
		} catch (error) {
			return error;
		}
	},

	async update(data) {
		const url = `/todo/${data.id}`;
		try {
			const respon = await axiosClient.put(url, data);
			return respon;
		} catch (error) {
			return error;
		}
	},

	async remove(id) {
		const url = `/todo/${id}`;
		try {
			const respon = await axiosClient.delete(url);
			return respon;
		} catch (error) {
			return error;
		}
	},
};

export default todoApi;
