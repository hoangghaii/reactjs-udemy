// import React from "react";
// import PropTypes from "prop-types";
// import { TextField } from "@material-ui/core";
// import { Controller } from "react-hook-form";

// function InputField(props) {
// 	const { form, name, label, disable } = props;
// 	const { errors, formState } = form;
// 	const hasError = formState.touched[name] && errors[name];
// 	console.log(hasError);
// 	return (
// 		<Controller
// 			name={name}
// 			control={form.control}
// 			as={TextField}
// 			label={label}
// 			fullWidth
// 			disabled={disable}
// 			error={!!hasError}
// 			helperText={errors[name]?.message}
// 		/>
// 	);
// }

// InputField.propTypes = {
// 	form: PropTypes.object.isRequired,
// 	name: PropTypes.string.isRequired,
// 	label: PropTypes.string,
// 	disable: PropTypes.bool,
// };

// export default InputField;
import React, { Fragment } from "react";
import PropTypes from "prop-types";

function InputField(props) {
	const { label, name, type, labelFor, className, refInput, isError } = props;

	let css = `appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 ${className} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`;

	if (isError[name]?.message) {
		css += " border-red-500";
	} else {
		css += " border-gray-300";
	}

	return (
		<Fragment>
			<div>
				<label htmlFor={labelFor} className="sr-only">
					{label}
				</label>
				<input
					id={labelFor}
					name={name}
					type={type}
					autoComplete="none"
					className={css}
					placeholder={label}
					ref={refInput}
				/>
			</div>
			{isError[name]?.message && (
				<span className="flex items-center font-normal tracking-wide text-red-500 text-base mt-2 pb-2 ml-2">
					{isError[name]?.message}
				</span>
			)}
		</Fragment>
	);
}

InputField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	labelFor: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	refInput: PropTypes.any,
	isError: PropTypes.any,
};

export default InputField;
