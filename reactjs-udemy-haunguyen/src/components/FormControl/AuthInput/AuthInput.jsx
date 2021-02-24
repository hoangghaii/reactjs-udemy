import React, { Fragment } from "react";
import PropTypes from "prop-types";

function AuthInput(props) {
	const { label, name, labelFor, type, className, form } = props;
	const { errors, formState } = form;
	console.log(errors);
	console.log(formState);
	const hasError = formState.touched[name] && errors[name];
	console.log(hasError);
	const css = `appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${className} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`;

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
				/>
			</div>
			{/* {hasError && <p>hasError?.message</p>} */}
		</Fragment>
	);
}

AuthInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	labelFor: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	ref: PropTypes.any,
};

export default AuthInput;
