import PropTypes from "prop-types";
import React from "react";
import DarkMode from "../ui/DarkMode/DarkMode";
import Navigation from "./Navigation/Navigation";

function SideBar(props) {
	const { isAddClass, onCloseMenu } = props;

	const listNavLink = ["Projects", "Collaborative", "Gallery", "Featured"];

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
			<div>
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
			</div>

			<DarkMode />
		</header>
	);
}

SideBar.propTypes = {
	isAddClass: PropTypes.bool,
	onCloseMenu: PropTypes.func,
	toggleTheme: PropTypes.func,
};

export default SideBar;
