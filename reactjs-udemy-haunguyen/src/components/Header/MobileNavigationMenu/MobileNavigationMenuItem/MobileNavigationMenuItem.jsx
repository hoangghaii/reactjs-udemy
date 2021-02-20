import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

function MobileNavigationMenuItem(props) {
	const { menu } = props;
	const menuLink = `/${menu}`;

	return (
		<NavLink
			to={menuLink}
			activeClassName="bg-gray-900 text-white"
			className="capitalize text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
		>
			{menu}
		</NavLink>
	);
}

MobileNavigationMenuItem.propTypes = {
	menu: PropTypes.string.isRequired,
};

export default MobileNavigationMenuItem;
