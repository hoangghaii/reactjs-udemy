import { Credentials } from "../constants/Credentials";
import axiosClient from "./axiosClient";

const musicApi = {
	async search(params) {
		const url = "/search";
		try {
			return await axiosClient.get(url, { params });
		} catch (error) {
			return error;
		}
	},

	async getPopularAllTime(params) {
		const url = "/mostloved.php";
		try {
			return await axiosClient.get(url, { params });
		} catch (error) {
			return error;
		}
	},

	async playList(params) {
		const url = "/playlist";
		try {
			return await axiosClient.get(url, { params });
		} catch (error) {
			return error;
		}
	},

	async tracks(data) {
		const url = "/track";
		try {
			return await axiosClient.post(url, data);
		} catch (error) {
			return error;
		}
	},

	async albums(data) {
		const url = "/album";
		try {
			return await axiosClient.patch(url, data);
		} catch (error) {
			return error;
		}
	},

	async artistTopAlbum(params) {
		const url = `?method=artist.gettopalbums&artist=${params}&api_key=${Credentials.APIKey}&format=json`;
		try {
			return await axiosClient.get(url);
		} catch (error) {
			return error;
		}
	},

	async searchTrack(params) {
		const url = `?method=track.search&track=${params}&api_key=${Credentials.APIKey}&format=json`;
		try {
			return await axiosClient.get(url);
		} catch (error) {
			return error;
		}
	},
};

export default musicApi;
