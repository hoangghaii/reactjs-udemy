import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navigation(props) {
	const { listNavLink, handleCloseMenu } = props;

	const closeMenu = () => {
		if (!handleCloseMenu) return;
		handleCloseMenu();
	};

	return (
		<nav className="nav">
			<ul className="nav__list">
				{listNavLink.map((navLink, index) => {
					const link = "/" + navLink.toLowerCase();

					return (
						<li
							className="nav__item"
							key={index}
							onClick={closeMenu}
						>
							<span className="nav__link">
								<Link to={link}>{navLink}</Link>
							</span>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

Navigation.propTypes = {
	listNavLink: PropTypes.array,
	handleCloseMenu: PropTypes.func,
};

export default Navigation;
