import React, { useEffect, useState } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary/Auxiliary";
import axiosClient from "./../../apis/axiosClient";

function withErrorHandle(WrapperComponent) {
	return (props) => {
		const [state, setState] = useState({ error: null });

		useEffect(() => {
			axiosClient.interceptors.request.use((request) => {
				setState({ error: null });
				return request;
			});

			axiosClient.interceptors.response.use(
				function (response) {
					return response;
				},
				function (error) {
					setState({ error: error });
					return Promise.reject(error);
				}
			);
		}, []);

		const errorConfirmedHandler = () => {
			setState({ error: null });
		};

		return (
			<Aux>
				<Modal show={state.error} modalClosed={errorConfirmedHandler}>
					{state.error ? state.error.message : null}
				</Modal>
				<WrapperComponent {...props} />
			</Aux>
		);
	};
}

export default withErrorHandle;
