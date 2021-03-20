import PropTypes from "prop-types";
import React from "react";
import Navigation from "./Navigation/Navigation";

function SideBar(props) {
	const { isAddClass, onCloseMenu } = props;

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

	const handleCloseMenu = () => {
		if (!onCloseMenu) return;
		onCloseMenu();
	};

	return (
		<header className={className}>
			<div className="logo-box" title="Green Architecture">
				<img
					src={process.env.PUBLIC_URL + "/images/logo.png"}
					alt="Logo"
					className="logo"
				/>
			</div>

			<Navigation
				listNavLink={listNavLink}
				handleCloseMenu={handleCloseMenu}
			/>
		</header>
	);
}

SideBar.propTypes = {
	isAddClass: PropTypes.bool,
	onCloseMenu: PropTypes.func,
};

export default SideBar;
