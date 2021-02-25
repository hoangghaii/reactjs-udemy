import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "./../authSlice";
import SignUpForm from "./SignUpForm/SignUpForm";

function SignUp(props) {
	const dispatch = useDispatch();
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const handleSubmit = async (data) => {
		try {
			data.username = data.email;

			const action = register(data);
			const resultAction = await dispatch(action);
			const user = unwrapResult(resultAction);
			console.log("success Fetched: ", user);
			enqueueSnackbar("Register Successfully !!!", {
				variant: "success",
				anchorOrigin: { horizontal: "right", vertical: "top" },
			});
		} catch (err) {
			console.log("error, Fetch failed: ", err);
			enqueueSnackbar("Error When Register !!!", {
				variant: "error",
				anchorOrigin: { horizontal: "right", vertical: "top" },
			});
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<img
						className="mx-auto h-12 w-auto"
						src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
						alt="Workflow"
					/>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Sign up and join with us
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						<Link to="/signin">
							<span className="font-medium text-indigo-600 hover:text-indigo-500">
								Already have an account
							</span>
						</Link>
					</p>
				</div>
				<SignUpForm onSubmitForm={handleSubmit} />
			</div>
		</div>
	);
}

SignUp.propTypes = {};

export default SignUp;
