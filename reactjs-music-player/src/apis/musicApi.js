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
		const url = "songs/list-recommendations";
		const params = { key: key, locale: "en-US" };

		try {
			return await axiosClient.get(url, { params });
		} catch (error) {
			return error;
		}
	},

	async getDetail(id) {
		const url = "songs/get-details";
		const params = { key: id, locale: "en-US" };

		try {
			return await axiosClient.get(url, { params });
		} catch (error) {
			return error;
		}
	},
};

export default musicApi;
