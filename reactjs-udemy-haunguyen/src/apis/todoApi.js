import axiosClient from "./axiosClient";

const todoApi = {
	async getAll(params) {
		const url = "/todo";
		try {
			return await axiosClient.get(url, { params });
		} catch (error) {
			return error;
		}
	},

	async get(id) {
		const url = `/todo/${id}`;
		try {
			return await axiosClient.get(url);
		} catch (error) {
			return error;
		}
	},

	async add(data) {
		const url = `/todo`;
		try {
			return await axiosClient.post(url, data);
		} catch (error) {
			return error;
		}
	},

	async update(data) {
		const url = `/todo/${data.id}`;
		try {
			return await axiosClient.put(url, data);
		} catch (error) {
			return error;
		}
	},

	async remove(id) {
		const url = `/todo/${id}`;
		try {
			return await axiosClient.delete(url);
		} catch (error) {
			return error;
		}
	},
};

export default todoApi;
