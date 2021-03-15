import React from "react";
import PropTypes from "prop-types";
import burgerLogo from "../../../assets/images/burger-logo.png";
import classes from "./Logo.css";

function Logo(props) {
	return (
		<div className={classes.Logo}>
			<img src={burgerLogo} alt="MyBurger" />
		</div>
	);
}

Logo.propTypes = {};

export default Logo;
