import React from "react";
import PropTypes from "prop-types";
import Navigation from "./Navigation/Navigation";

function SideBar(props) {
	return (
		<header className="header">
			<div className="logo-box">
				<img src="./images/logo.png" alt="Logo" className="logo" />
			</div>

			<Navigation />
		</header>
	);
}

SideBar.propTypes = {};

export default SideBar;
