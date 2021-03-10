import axiosClient from "./axiosClient";

const musicApi = {
	async getTopTrack(pageSize = 5) {
		const url = "charts/track";
		const params = { locale: "en-US", pageSize: pageSize, startFrom: "0" };

		try {
			return await axiosClient.get(url, { params });
		} catch (error) {
			return error;
		}
	},

	async getTopSongs(key = 484129036) {
		const url = `songs/list-recommendations`;
		const params = { key: key, locale: "en-US" };

		try {
			return await axiosClient.get(url, { params });
		} catch (error) {
			return error;
		}
	},

	async searchAutoComplete(string) {
		const url = `auto-complete`;
		const params = { term: string, locale: "en-US" };

		try {
			return await axiosClient.post(url, { params });
		} catch (error) {
			return error;
		}
	},

	async update(data) {
		const url = `/products/${data.id}`;
		try {
			return await axiosClient.patch(url, { data });
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

export default musicApi;
