import React from "react";
import PropTypes from "prop-types";

function Layout(props) {
	const { childer } = props;
	return (
		<div>
			<div>Toolbar, SideDrawn, Backdrop</div>
			<main>{childer}</main>
		</div>
	);
}

Layout.propTypes = {
	childer: PropTypes.any,
};

export default Layout;
