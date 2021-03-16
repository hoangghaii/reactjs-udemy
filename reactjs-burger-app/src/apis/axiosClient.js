import axios from "axios";
import { history } from "..";

const ROOT_API = "https://react-my-burger-25807-default-rtdbbb.firebaseio.com/";

const axiosClient = axios.create({
	baseURL: ROOT_API,
	timeout: 5000,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
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

		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx

			const responseStatus = error.response.status;

			if (responseStatus === 403) {
				history.push("/access-forbidden");
			}

			if (responseStatus === 404) {
				history.push("/not-found");
			}

			if (responseStatus === 408) {
				history.push("/time-out");
			}

			if (responseStatus === 500) {
				history.push("/internal-error");
			}
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			console.log(error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log("Error", error.message);
		}
		return Promise.reject(error);
	}
);

export default axiosClient;
