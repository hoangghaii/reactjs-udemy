import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Loading from "../../../components/Loading/Loading";
import AuthInput from "./../../../components/FormControl/AuthInput/AuthInput";
import PropTypes from "prop-types";

function SignInForm(props) {
	const user = localStorage.getItem("user") || null;
	let userInfo = {};
	if (user) {
		userInfo = JSON.parse(user);
	}

	const { onSubmitForm } = props;

	const schema = yup.object().shape({
		identifier: yup
			.string()
			.email("Email is not formatted correctly")
			.required("Please enter email")
			.min(12, "Email is to short"),
		password: yup
			.string()
			.required("Please enter password")
			.min(5, "Password is to short"),
	});

	const {
		register,
		errors,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: {
			identifier: userInfo.email || "",
			password: userInfo.password || "",
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		if (!onSubmitForm) return;
		await onSubmitForm(data);
	};

	return (
		<>
			{isSubmitting && <Loading />}

			<form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
				<input type="hidden" name="remember" value="false" />
				<div className="rounded-md shadow-sm -space-y-px">
					<AuthInput
						label="Email address"
						name="identifier"
						type="string"
						labelFor="email-address"
						className="rounded-t-md"
						defaultValues={userInfo.email || ""}
						refInput={register}
						isError={errors}
					/>

					<AuthInput
						label="Password"
						name="password"
						type="password"
						labelFor="password"
						className="rounded-b-md"
						defaultValues={userInfo.password || ""}
						refInput={register}
						isError={errors}
					/>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<input
							id="remember_me"
							name="remember_me"
							type="checkbox"
							className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
						/>
						<label
							htmlFor="remember_me"
							className="ml-2 block text-sm text-gray-900"
						>
							Remember me
						</label>
					</div>

					<div className="text-sm">
						<a
							href="#0"
							className="font-medium text-indigo-600 hover:text-indigo-500"
						>
							Forgot your password?
						</a>
					</div>
				</div>

				<div>
					<button
						type="submit"
						disabled={isSubmitting}
						className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						<span className="absolute left-0 inset-y-0 flex items-center pl-3">
							<svg
								className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
						Sign in
					</button>
				</div>
			</form>
		</>
	);
}

SignInForm.propTypes = {
	onSubmitForm: PropTypes.func,
};

SignInForm.defaultProps = {
	onSubmitForm: null,
};

export default SignInForm;
