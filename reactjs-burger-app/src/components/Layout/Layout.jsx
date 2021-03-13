import React from "react";
import PropTypes from "prop-types";
import classes from "./Layout.css";
import Aux from "../../Auxiliary/Auxiliary";

function Layout(props) {
	const { children } = props;

	return (
		<Aux>
			<div>Toolbar, SideDrawn, Backdrop</div>
			<main className={classes.Content}>{children}</main>
		</Aux>
	);
}

Layout.propTypes = {
	children: PropTypes.any,
};

export default Layout;
