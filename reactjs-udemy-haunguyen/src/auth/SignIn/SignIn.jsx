import React from "react";
import { Link, useHistory } from "react-router-dom";
import SignInForm from "./SignInForm/SignInForm";
import { toast } from "react-toastify";
import { login } from "../authSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

function SignIn(props) {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleSubmit = async (data) => {
		try {
			const action = login(data);
			const resultAction = await dispatch(action);
			unwrapResult(resultAction);

			toast.success(
				<div>
					<h4>Signin success!</h4>
					<span>Wellcome back ♥</span>
				</div>
			);

			history.push("/");
		} catch (err) {
			console.log("error, Fetch failed: ", err);

			toast.error(
				<div>
					<h4>Oops!!</h4>
					<span>
						Maybe your email or password is not correct, please
						check again
					</span>
				</div>
			);
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
						Sign in to your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{" "}
						<Link to="/signup">
							<span className="font-medium text-indigo-600 hover:text-indigo-500">
								start your 14-day free trial
							</span>
						</Link>
					</p>
				</div>

				<SignInForm onSubmitForm={handleSubmit} />
			</div>
		</div>
	);
}

SignIn.propTypes = {};

export default SignIn;
