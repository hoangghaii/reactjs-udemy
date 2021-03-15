import PropTypes from "prop-types";
import React from "react";
import classes from "./NavigationItem.css";

function NavigationItem(props) {
	const { children, link } = props;

	return (
		<li className={classes.NavigationItem}>
			<a href={link}>{children}</a>
		</li>
	);
}

NavigationItem.propTypes = {
	children: PropTypes.any,
	link: PropTypes.any,
};

export default NavigationItem;
