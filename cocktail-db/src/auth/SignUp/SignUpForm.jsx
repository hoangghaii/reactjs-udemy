import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function SignUpForm(props) {
	const { onSubmitForm } = props;

	const schema = yup.object().shape({
		email: yup
			.string()
			.email("Email is not formatted correctly")
			.required("Please enter email")
			.min(12, "Email is to short"),
	});

	const {
		register,
		errors,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: {
			email: "",
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		if (!onSubmitForm) return;
		onSubmitForm(data);
	};

	return (
		<Fragment>
			<form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex items-center">
					<input
						name="email"
						type="string"
						className="w-full px-2 py-4 mr-2 bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-none"
						required
						ref={register}
					/>
					<button
						className="bg-blue-600 text-gray-200 px-5 py-2 rounded shadow "
						style={{ marginLeft: "-7.8rem" }}
						type="submit"
						disabled={isSubmitting}
					>
						Sign Up
					</button>
				</div>
			</form>

			{errors.email?.message && (
				<span className="flex items-center font-normal tracking-wide text-red-500 text-base mt-2 pb-2 ml-2">
					{errors.email?.message}
				</span>
			)}
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
