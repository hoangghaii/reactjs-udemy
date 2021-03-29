import PropTypes from "prop-types";
import React from "react";
import classes from "./DrawerToggle.css";

function DrawerToggle(props) {
	const { clicked } = props;

	return (
		<div onClick={clicked} className={classes.DrawerToggle}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

DrawerToggle.propTypes = {
	clicked: PropTypes.func,
};

DrawerToggle.defaultProps = {
	clicked: null,
};

export default DrawerToggle;
