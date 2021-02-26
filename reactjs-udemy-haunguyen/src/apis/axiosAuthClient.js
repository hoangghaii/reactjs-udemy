import axios from "axios";
import { environment } from "./../environment/environment";

const user = localStorage.getItem("user");
const token = localStorage.getItem("access_token");

const axiosAuthClient = axios.create({
	// baseURL: environment.AUTH_API,
	baseURL: environment.EZ_API,
	headers: {
		"Content-Type": "application/json",
	},
});

//Interceptors
// Add a request interceptor
axiosAuthClient.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		if (user && token) {
			config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
		}

		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axiosAuthClient.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error

		return Promise.reject(error);
	}
);

export default axiosAuthClient;
