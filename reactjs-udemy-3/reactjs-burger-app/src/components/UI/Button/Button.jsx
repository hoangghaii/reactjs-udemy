import PropTypes from "prop-types";
import React from "react";
import classes from "./Button.css";

function Button(props) {
	const { children, clicked, buttonType } = props;

	return (
		<button
			className={[classes.Button, classes[buttonType]].join(" ")}
			onClick={clicked}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.any,
	clicked: PropTypes.func,
	buttonType: PropTypes.string,
};

export default Button;
