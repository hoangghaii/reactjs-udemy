import React from "react";
import PropTypes from "prop-types";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

function NavigationItems(props) {
	return (
		<ul className={classes.NavigationItems}>
			<NavigationItem />
		</ul>
	);
}

NavigationItems.propTypes = {};

export default NavigationItems;
