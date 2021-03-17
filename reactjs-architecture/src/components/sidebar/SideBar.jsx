import React from "react";
import PropTypes from "prop-types";
import Navigation from "./Navigation/Navigation";

function SideBar(props) {
	const { isAddClass } = props;

	const listNavLink = [
		"About",
		"Projects",
		"Collaborative",
		"Gallery",
		"Featured",
	];

	let className = "header";

	if (isAddClass === true) {
		className += " show";
	}

	return (
		<header className={className}>
			<div className="logo-box">
				<img
					src={process.env.PUBLIC_URL + "/images/logo.png"}
					alt="Logo"
					className="logo"
				/>
			</div>

			<Navigation listNavLink={listNavLink} />
		</header>
	);
}

SideBar.propTypes = {
	isAddClass: PropTypes.bool,
};

export default SideBar;
