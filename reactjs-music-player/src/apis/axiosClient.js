import axios from "axios";
import { env } from "./../env/env";

const axiosClient = axios.create({
	baseURL: env.MUSIC_API_ENDPOINT,
	timeout: 10000,
	headers: {
		Accept: "application/json, */*, text/html",
		// "Content-Type": "text/html",
		"Cross-Origin-Embedder-Policy": "require-corp",
		"Cross-Origin-Opener-Policy": "same-origin",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "PUT, GET, POST, DELETE",
		"Access-Control-Allow-Headers":
			"Origin, X-Requested-With, Content-Type, Accept",
		"x-rapidapi-key": "9532c743e6msh52ca14f9c5e774ap19ed2cjsn0c1648da1632",
		"x-rapidapi-host": "shazam.p.rapidapi.com",
	},
});

//Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axiosClient.interceptors.response.use(
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

export default axiosClient;
