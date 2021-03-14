import React from "react";
import PropTypes from "prop-types";
import classes from "./Backdrop.css";

function Backdrop(props) {
	const { show, clicked } = props;
	return show ? (
		<div className={classes.Backdrop} onClick={clicked}></div>
	) : null;
}

Backdrop.propTypes = {
	show: PropTypes.bool,
	clicked: PropTypes.func,
};

Backdrop.defaultProps = {
	show: false,
};

export default Backdrop;
