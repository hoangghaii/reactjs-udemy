import PropTypes from "prop-types";
import React from "react";
import burgerLogo from "../../../assets/images/burger-logo.png";
import classes from "./Logo.css";

function Logo(props) {
	const { height } = props;

	return (
		<div className={classes.Logo} style={{ height: height }}>
			<img src={burgerLogo} alt="MyBurger" />
		</div>
	);
}

Logo.propTypes = {
	height: PropTypes.string,
};

export default Logo;
