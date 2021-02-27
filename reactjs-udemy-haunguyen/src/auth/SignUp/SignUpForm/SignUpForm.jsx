import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import AuthInput from "./../../../components/FormControl/AuthInput/AuthInput";
import Loading from "./../../../components/Loading/Loading";

function SignUpForm(props) {
	const user = localStorage.getItem("user") || null;
	let userInfo = {};
	if (user) {
		userInfo = JSON.parse(user);
	}

	const { onSubmitForm } = props;

	const schema = yup.object().shape({
		fullName: yup
			.string()
			.required("Please enter user name")
			.min(5, "User name is to short"),
		email: yup
			.string()
			.email("Email is not formatted correctly")
			.required("Please enter email")
			.min(12, "Email is to short"),
		password: yup
			.string()
			.required("Please enter password")
			.min(5, "Password is to short"),
		retypePassword: yup
			.string()
			.required("Please enter re-password")
			.oneOf([yup.ref("password")], "Password does not match"),
	});

	const {
		register,
		errors,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: {
			fullName: userInfo.fullName || "",
			email: userInfo.email || "",
			password: userInfo.password || "",
			retypePassword: userInfo.password || "",
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		if (!onSubmitForm) return;
		await onSubmitForm(data);
	};

	return (
		<Fragment>
			{isSubmitting && <Loading />}

			<form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
				<input type="hidden" name="remember" value="false" />
				<div className="rounded-md shadow-sm -space-y-px">
					<AuthInput
						label="Full name"
						name="fullName"
						type="string"
						labelFor="full-name"
						className="rounded-t-md"
						defaultValues={userInfo.fullName || ""}
						refInput={register}
						isError={errors}
					/>

					<AuthInput
						label="Email address"
						name="email"
						type="string"
						labelFor="email-address"
						className="rounded-none"
						defaultValues={userInfo.email || ""}
						refInput={register}
						isError={errors}
					/>

					<AuthInput
						label="Password"
						name="password"
						type="password"
						labelFor="password"
						className="rounded-none"
						defaultValues={userInfo.password || ""}
						refInput={register}
						isError={errors}
					/>

					<AuthInput
						label="Re-password"
						name="retypePassword"
						type="password"
						labelFor="re-password"
						className="rounded-b-md"
						defaultValues={userInfo.password || ""}
						refInput={register}
						isError={errors}
					/>
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
						Sign up
					</button>
				</div>
			</form>
		</Fragment>
	);
}

SignUpForm.propTypes = {
	onSubmitForm: PropTypes.func,
};

SignUpForm.defaultProps = {
	onSubmitForm: null,
};

export default SignUpForm;
